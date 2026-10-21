/* electron tools/check-app.js — opens the real desktop app window and runs the page checks in it.
   Run with the electron binary: ./node_modules/.bin/electron tools/check-app.js */
const { app, BrowserWindow, protocol, net, session, ipcMain } = require('electron');
const pythonHost = require('../electron/python-host');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const root = path.join(__dirname, '..');
process.env.PYVIEL_WORKDIR = path.join(require('os').tmpdir(), 'pyviel-check-' + process.pid, 'Pyviel');

// The same scheme and headers as electron/main.js: loading main.js itself would open a second window.
protocol.registerSchemesAsPrivileged([{ scheme: 'pyviel', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }]);

app.whenReady().then(async function () {
  pythonHost.register(app, ipcMain);
  protocol.handle('pyviel', function (request) {
    const url = new URL(request.url);
    const relative = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
    const file = path.normalize(path.join(root, relative));
    return net.fetch(pathToFileURL(file).toString()).then(function (answer) {
      const headers = new Headers(answer.headers);
      const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.wasm': 'application/wasm', '.zip': 'application/zip', '.py': 'text/plain', '.svg': 'image/svg+xml', '.png': 'image/png' };
      headers.set('Content-Type', types[path.extname(file)] || 'application/octet-stream');
      headers.set('Cross-Origin-Opener-Policy', 'same-origin');
      headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
      headers.set('Cross-Origin-Resource-Policy', 'same-origin');
      return new Response(answer.body, { status: answer.status, headers: headers });
    });
  });
  session.defaultSession.webRequest.onBeforeRequest(function (details, callback) { callback({ cancel: /^https?:/i.test(details.url) }); });
  const win = new BrowserWindow({ width: 1280, height: 900, show: false, webPreferences: { preload: path.join(root, 'electron', 'preload.js'), contextIsolation: true, sandbox: true, additionalArguments: ['--pyviel-version=1.2.1'] } });
  await win.loadURL('pyviel://app/index.html');
  // The app keeps its storage between runs: start the course from nothing, like a new student.
  await win.webContents.executeJavaScript("Object.keys(localStorage).filter(k => k.indexOf('pyviel.tutorial.') === 0).forEach(k => localStorage.removeItem(k))");
  await win.loadURL('pyviel://app/index.html');
  await new Promise(function (r) { setTimeout(r, 1500); });
  const script = fs.readFileSync(path.join(__dirname, 'page-checks.js'), 'utf8');
  const results = await win.webContents.executeJavaScript(script);
  const extra = await win.webContents.executeJavaScript('JSON.stringify({desktop: !!window.pyvielDesktop, download: !!document.getElementById("download") && getComputedStyle(document.getElementById("download")).display !== "none", python: !!(window.pyvielDesktop && window.pyvielDesktop.python)})');
  let failed = 0, total = 0;
  results.forEach(function (r) { if (!r[1]) { failed++; console.log('FAIL ' + r[0] + (r[2] ? '\n     ' + r[2] : '')); } });
  const info = JSON.parse(extra);
  if (!info.desktop || info.download || !info.python) { failed++; console.log('FAIL the app has its own Python, knows it is the app and hides the download button: ' + extra); }

  // What only the desktop app has: native Python, themes, the command button.
  const appChecks = await win.webContents.executeJavaScript(`(async () => {
    const results = [];
    const check = (name, ok, detail) => results.push([name, !!ok, detail === undefined ? '' : String(detail)]);
    const $ = id => document.getElementById(id);
    const run = (source, answers) => { const given = (answers || []).slice(); return Pyviel.runAsync(source, {input: () => given.length ? given.shift() : null}); };

    try {
    const v = await Pyviel.start();
    check('the app runs the Python that is packed inside it', /^3\\.14\\.\\d+$/.test(v), v);
    check('the website badge is not shown in the app', getComputedStyle($('brand-web')).display === 'none');

    let r = await run('import os, sys\\nprint(sys.platform != "emscripten", os.getcwd().endswith("Pyviel"))');
    check('programs run natively, in the Pyviel folder', r.text.trim() === 'True True', r.text);

    r = await run('import threading\\nresult = []\\nt = threading.Thread(target=lambda: result.append(21 * 2))\\nt.start()\\nt.join()\\nprint(result)');
    check('threads work (Pyodide has none)', r.text.trim() === '[42]', r.text + JSON.stringify(r.problems));

    r = await run('import os\\nos.system("echo from the shell")\\nprint("after")');
    check('output of other programs started by the program is shown', /from the shell/.test(r.text) && /after/.test(r.text), r.text);

    r = await run('import os\\nprint("bye")\\nos._exit(3)');
    check('a program that kills its own process gets a plain sentence, and the app keeps working', r.problems.length === 1 && /bye/.test(r.text), JSON.stringify(r.problems));
    r = await run('print(1 + 1)');
    check('and the next run works', r.text.trim() === '2', r.text);

    r = await run('name = input("Name? ")\\nprint("Hi", name)', ['Ada']);
    check('input() waits for the page and gets the answer', /Name\\? Ada/.test(r.text) && /Hi Ada/.test(r.text), r.text);
    r = await run('x = input("Name? ")');
    check('input() with no answer ends the run quietly (Stop)', r.stopped === true, JSON.stringify(r));

    let started = Date.now();
    const endless = run('while True:\\n    pass');
    await new Promise(res => setTimeout(res, 600));
    Pyviel.stop();
    r = await endless;
    check('Stop ends an endless loop at once', r.stopped && Date.now() - started < 3000, Date.now() - started);
    r = await run('print("still alive")');
    check('after Stop the next run is fine', r.text.trim() === 'still alive', r.text);

    if (window.pyvielDesktop.platform !== 'win32') {
      let childPid = '';
      const parent = Pyviel.runAsync('import subprocess, sys, time\\nchild = subprocess.Popen([sys.executable, "-c", "import time; time.sleep(60)"])\\nprint(child.pid)\\ntime.sleep(60)', {onOutput: t => { childPid += t; }});
      await new Promise(res => setTimeout(res, 900));
      Pyviel.stop();
      await parent;
      await new Promise(res => setTimeout(res, 300));
      r = await run('import os\\ntry:\\n    os.kill(' + parseInt(childPid) + ', 0)\\n    print("alive")\\nexcept ProcessLookupError:\\n    print("gone")');
      check('Stop also ends what the program started (subprocess)', r.text.trim() === 'gone', childPid + ' ' + r.text);
    }

    r = await run('print("x" * 50)\\nfor i in range(300000):\\n    print(i)');
    check('a flood of output is cut, not stuck', r.text.length < 400000 && /cut here/.test(r.text), r.text.length);

    r = await run('import sys\\nprint(len(sys.argv))');
    check('sys.argv has the file name only', r.text.trim() === '1', r.text);

    r = await run('print(1/0)');
    check('errors are friendly and keep the full traceback', r.problems.length === 1 && /ZeroDivisionError/.test(r.problems[0].full) && r.problems[0].message.length > 5, JSON.stringify(r.problems[0]));

    // themes
    $('theme-toggle').click();
    check('the theme button opens a menu of six themes', !$('theme-menu').hidden && $('theme-menu').querySelectorAll('[data-pick]').length === 6);
    const colors = {};
    for (const name of ['light', 'dark', 'midnight', 'forest', 'sunset', 'contrast']) {
      document.querySelector('[data-pick="' + name + '"]').click();
      colors[name] = getComputedStyle(document.body).backgroundColor;
      if (document.documentElement.dataset.theme !== name) check('theme ' + name + ' applies', false, document.documentElement.dataset.theme);
    }
    check('every theme paints the page differently', new Set(Object.values(colors)).size === 6, JSON.stringify(colors));
    check('the choice is remembered', localStorage.getItem('pyviel.theme') === 'contrast' && $('theme-menu').hidden);
    document.querySelector('[data-pick="light"]').click === undefined;
    document.documentElement.dataset.theme = 'light';

    // command button
    document.getElementById('code').value = 'print("from a terminal")\\n';
    document.getElementById('file-name').value = 'terminal_test.py';
    document.getElementById('file-name').dispatchEvent(new Event('change', {bubbles: true}));
    $('command-toggle').click();
    await new Promise(res => setTimeout(res, 800));
    check('the Command button shows the folder and the python3 command', !$('command-pop').hidden && /Pyviel/.test($('command-folder').textContent) && /terminal_test\\.py/.test($('command-lines').textContent) && /python3|py /.test($('command-lines').textContent), $('command-lines').textContent);
    } catch (e) { check('the app checks ran to the end', false, e && e.stack); }
    return results;
  })()`);
  appChecks.forEach(function (r) { total++; if (!r[1]) { failed++; console.log('FAIL ' + r[0] + (r[2] ? '\n     ' + r[2] : '')); } });
  console.log((results.length + 1 + total - failed) + ' passed, ' + failed + ' failed (in the desktop app)');
  app.exit(failed ? 1 : 0);
});
