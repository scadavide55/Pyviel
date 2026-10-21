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
  // Without the shared buffers (a page that is not cross-origin isolated) Python still runs:
  // Stop ends the worker instead, and input() says it cannot wait for an answer.
  if (message.interrupt) {
    interruptView = new Uint8Array(message.interrupt);
    control = new Int32Array(message.control);
    data = new Uint8Array(message.data);
  }
  python = await loadPyodide({indexURL: new URL('./pyodide/', import.meta.url).href});
  if (interruptView) python.setInterruptBuffer(interruptView);
  const source = await (await fetch(new URL('./pyviel-runner.py?v=' + (new URL(import.meta.url).searchParams.get('v') || ''), import.meta.url))).text();
  python.runPython(source, {globals: python.globals});
  if (!interruptView) python.globals.set('NO_INPUT', true);
  runProgram = python.globals.get('run');
  post({type: 'ready', version: python.version});
}

let noStackSwitching = false;
const fakeNoJspi = new URL(import.meta.url).searchParams.has('nojspi');

async function runSource(source) {
  if (interruptView) interruptView[0] = 0;
  let result;
  try {
    // callPromising lets Python wait for JavaScript (asyncio.sleep, await...) in browsers that can switch stacks.
    // Pyodide offers callPromising even where the browser cannot switch stacks (Safari, Firefox): then it throws before running anything, and the plain call is used.
    let proxy;
    if (typeof runProgram.callPromising === 'function' && !noStackSwitching) {
      try {
        // ?nojspi pretends to be Safari: the tests use it to cover this fallback.
        if (fakeNoJspi) throw new Error('WebAssembly stack switching not supported in this JavaScript runtime');
        proxy = await runProgram.callPromising(source, send, ask);
      } catch (error) {
        if (!/stack switching/i.test(String(error))) throw error;
        noStackSwitching = true;
        python.globals.set('SYNC_ASYNC', true);
      }
    }
    if (!proxy) proxy = runProgram(source, send, ask);
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
