/* The Python worker: loads Pyodide once, then runs one program at a time.

   Python runs here, away from the page, so the page never freezes. Two shared buffers
   connect them:
     interrupt  one byte: the page writes 2 and Python raises KeyboardInterrupt (Stop)
     control    [state, length]: how input() waits for the page to answer (Atomics.wait)
     data       the bytes of the answer
   Shared buffers only work when the page is cross-origin isolated (see coi-sw.js). */
import {loadPyodide} from './pyodide/pyodide.mjs';

let python = null;
let runProgram = null;
let interruptView = null;
let control = null;
let data = null;
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const WAITING = 0, ANSWERED = 1, CANCELLED = 2;

function post(message) { self.postMessage(message); }

// Output is sent in groups, so a loop that prints a lot does not flood the page.
let pending = '';
let lastSent = 0;
function send(text) {
  pending += text;
  const now = Date.now();
  if (pending.length > 8000 || now - lastSent > 40) flush();
}
function flush() {
  if (!pending) return;
  post({type: 'output', text: pending});
  pending = '';
  lastSent = Date.now();
}

function ask(prompt) {
  flush();
  Atomics.store(control, 0, WAITING);
  post({type: 'input', prompt: prompt});
  Atomics.wait(control, 0, WAITING);
  const state = Atomics.load(control, 0);
  if (state === CANCELLED) return null;
  const length = Atomics.load(control, 1);
  return decoder.decode(data.slice(0, length));
}

async function init(message) {
  interruptView = new Uint8Array(message.interrupt);
  control = new Int32Array(message.control);
  data = new Uint8Array(message.data);
  python = await loadPyodide({indexURL: new URL('./pyodide/', import.meta.url).href});
  python.setInterruptBuffer(interruptView);
  const source = await (await fetch(new URL('./pyviel-runner.py', import.meta.url))).text();
  python.runPython(source, {globals: python.globals});
  runProgram = python.globals.get('run');
  post({type: 'ready', version: python.version});
}

async function runSource(source) {
  interruptView[0] = 0;
  let result;
  try {
    // callPromising lets Python wait for JavaScript (asyncio.sleep, await...) in browsers that can switch stacks.
    const proxy = typeof runProgram.callPromising === 'function' ? await runProgram.callPromising(source, send, ask) : runProgram(source, send, ask);
    result = proxy.toJs({dict_converter: Object.fromEntries});
    proxy.destroy();
  } catch (error) {
    // Only a fault of the runner itself ends up here: a program's own errors come back as data.
    result = {ok: false, stopped: false, error: {type: 'InternalError', message: String(error), line: null, column: null, suggestion: '', full: String(error && error.stack || error)}};
  }
  flush();
  post({type: 'done', result: result});
}

self.onmessage = async (event) => {
  const message = event.data;
  try {
    if (message.type === 'init') await init(message);
    else if (message.type === 'run') await runSource(message.source);
  } catch (error) {
    post({type: 'failed', message: String(error && error.message || error)});
  }
};
