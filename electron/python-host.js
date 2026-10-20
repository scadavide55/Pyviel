/* The desktop app runs programs with the Python that is packed inside it, one process per run.
   A spare process is always started ahead, so Run answers at once; Stop simply ends the process.
   The conversation with pyviel-host.py is one JSON object per line (see that file). */
const { spawn } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.join(__dirname, '..');
// A packed app keeps the two Python files next to its Python (outside the archive, where Python can read them).
const HOST_FOLDER = require('electron').app.isPackaged ? path.join(process.resourcesPath, 'host') : ROOT;
const HOST = path.join(HOST_FOLDER, 'pyviel-host.py');
const RUNNER = path.join(HOST_FOLDER, 'pyviel-runner.py');

function pythonFolder(app) {
  if (app.isPackaged) return path.join(process.resourcesPath, 'python');
  const name = process.platform === 'darwin' ? 'mac-' + (process.arch === 'arm64' ? 'arm64' : 'x64')
    : process.platform === 'win32' ? 'win-x64' : 'linux-x64';
  return path.join(ROOT, 'python', name);
}

function pythonPath(app) {
  const folder = pythonFolder(app);
  return process.platform === 'win32' ? path.join(folder, 'python.exe') : path.join(folder, 'bin', 'python3');
}

// Programs run in ~/Pyviel: files they write land in a folder the student can find.
function workFolder(app) {
  // PYVIEL_WORKDIR is for the tests, so lesson programs do not write files into a real folder.
  const folder = process.env.PYVIEL_WORKDIR || path.join(app.getPath('documents'), 'Pyviel');
  try { fs.mkdirSync(folder, { recursive: true }); return folder; } catch (e) { return os.homedir(); }
}

// Ends a process and everything it started (os.system, subprocess), so nothing is left running.
function kill(child) {
  if (!child || child.exitCode !== null || child.killed) return;
  try {
    if (process.platform === 'win32') spawn('taskkill', ['/pid', String(child.pid), '/T', '/F'], { windowsHide: true, stdio: 'ignore' });
    else process.kill(-child.pid, 'SIGKILL');
  } catch (e) {
    try { child.kill('SIGKILL'); } catch (e2) {}
  }
}

function create(app) {
  const python = pythonPath(app);
  let spare = null;        // a process that is up and waits for a program
  let current = null;      // {child, sink, finished}
  let version = '';
  let failure = '';

  function launch() {
    const child = spawn(python, ['-X', 'utf8', '-u', HOST], {
      cwd: workFolder(app),
      env: Object.assign({}, process.env, { PYTHONDONTWRITEBYTECODE: '1', PYTHONNOUSERSITE: '1', PYTHONUTF8: '1', PYTHONIOENCODING: 'utf-8' }),
      windowsHide: true,
      detached: process.platform !== 'win32',   // its own process group, so kill() reaches the children too
      stdio: ['pipe', 'pipe', 'pipe']
    });
    const handle = { child, ready: null, lines: '', sink: null, exited: false, code: null };
    handle.ready = new Promise(function (resolve, reject) { handle.onReady = resolve; handle.onFail = reject; });
    handle.ready.catch(function () {});
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (chunk) {
      handle.lines += chunk;
      let at;
      while ((at = handle.lines.indexOf('\n')) >= 0) {
        const line = handle.lines.slice(0, at);
        handle.lines = handle.lines.slice(at + 1);
        let message;
        try { message = JSON.parse(line); } catch (e) { continue; }
        if (message.t === 'ready') { version = message.version; handle.onReady(); }
        else if (handle.sink) handle.sink(message);
      }
    });
    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (text) {
      // What C code or os.system writes: show it like any other output.
      if (handle.sink) handle.sink({ t: 'output', text: text });
    });
    child.on('error', function (error) {
      failure = String(error && error.message || error);
      handle.exited = true;
      handle.onFail(new Error(failure));
      if (handle.sink) handle.sink({ t: 'exit', code: null });
    });
    child.on('exit', function (code) {
      handle.exited = true;
      handle.code = code;
      handle.onFail(new Error('Python stopped before it was ready (exit code ' + code + ').'));
      if (handle.sink) handle.sink({ t: 'exit', code: code });
    });
    child.stdin.on('error', function () {});
    return handle;
  }

  function warm() {
    if (!fs.existsSync(python)) { failure = 'The Python that comes with Pyviel is missing: ' + python; return null; }
    if (!fs.existsSync(HOST) || !fs.existsSync(RUNNER)) { failure = 'Pyviel is missing some of its files.'; return null; }
    if (!spare || spare.exited) spare = launch();
    return spare;
  }

  function start() {
    const handle = warm();
    if (!handle) return Promise.reject(new Error(failure));
    return handle.ready.then(function () { return { version: version }; });
  }

  // run(source, emit): emit gets {type: 'output'|'input'|'done', ...}, like the page's own worker.
  function run(source, emit) {
    stop();
    const handle = warm();
    if (!handle) { emit({ type: 'done', result: broken(failure) }); return; }
    spare = null;
    let finished = false;
    const run = current = { handle, answer: null };
    function end(result) {
      if (finished) return;
      finished = true;
      if (current === run) current = null;
      handle.sink = null;
      kill(handle.child);
      emit({ type: 'done', result: result });
      setTimeout(warm, 50);
    }
    run.end = end;
    handle.ready.then(function () {
      handle.sink = function (m) {
        if (m.t === 'output') emit({ type: 'output', text: m.text });
        else if (m.t === 'input') emit({ type: 'input', prompt: m.prompt });
        else if (m.t === 'done') end(m.result);
        else if (m.t === 'exit') end(broken('Python stopped on its own (exit code ' + m.code + '). A program can do this with os._exit or by crashing.'));
      };
      if (handle.exited) { end(broken('Python stopped before the program could start.')); return; }
      handle.child.stdin.write(JSON.stringify({ t: 'run', source: source }) + '\n');
    }, function (error) { end(broken(String(error.message))); });
  }

  function answer(text) {
    if (!current) return;
    const message = text === null || text === undefined ? { t: 'stop' } : { t: 'answer', text: String(text) };
    try { current.handle.child.stdin.write(JSON.stringify(message) + '\n'); } catch (e) {}
  }

  function stop() {
    if (!current) return;
    const run = current;
    run.end({ ok: true, stopped: true, error: null });
  }

  function close() {
    if (spare) { kill(spare.child); spare = null; }
    if (current) { kill(current.handle.child); current = null; }
  }

  return { start, run, answer, stop, close, pythonPath: python, workFolder: function () { return workFolder(app); } };
}

function broken(message) {
  return { ok: false, stopped: false, error: { type: 'InternalError', message: message, line: null, column: null, suggestion: '', full: message } };
}

// The messages between the page (preload.js) and this host.
function register(app, ipcMain) {
  const python = create(app);
  ipcMain.handle('py:start', function () {
    return python.start().then(function (r) { return { ok: true, version: r.version, folder: python.workFolder() }; },
      function (e) { return { ok: false, message: String(e.message || e) }; });
  });
  ipcMain.on('py:run', function (event, source) {
    const sender = event.sender;
    python.run(String(source), function (message) { if (!sender.isDestroyed()) sender.send('py:event', message); });
  });
  // Saves a program in the folder where programs run, so a terminal can run it too.
  ipcMain.handle('file:save-in-folder', function (event, name, text) {
    try {
      let safe = path.basename(String(name)).replace(/[\u0000-\u001f<>:"|?*\\/]/g, '_').slice(0, 120) || 'untitled.py';
      if (!/\.py$/i.test(safe)) safe += '.py';
      const folder = python.workFolder();
      fs.writeFileSync(path.join(folder, safe), String(text), 'utf8');
      return { ok: true, folder: folder, name: safe };
    } catch (e) { return { ok: false, message: String(e && e.message || e) }; }
  });
  ipcMain.on('py:answer', function (event, text) { python.answer(text); });
  ipcMain.on('py:stop', function () { python.stop(); });
  app.on('before-quit', function () { python.close(); });
  return python;
}

module.exports = { create, register };
