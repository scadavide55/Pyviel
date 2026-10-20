/* electron tools/check-app.js — opens the real desktop app window and runs the page checks in it.
   Run with the electron binary: ./node_modules/.bin/electron tools/check-app.js */
const { app, BrowserWindow, protocol, net, session } = require('electron');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const root = path.join(__dirname, '..');

// The same scheme and headers as electron/main.js: loading main.js itself would open a second window.
protocol.registerSchemesAsPrivileged([{ scheme: 'pyviel', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }]);

app.whenReady().then(async function () {
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
  const win = new BrowserWindow({ width: 1280, height: 900, show: false, webPreferences: { preload: path.join(root, 'electron', 'preload.js'), contextIsolation: true, sandbox: true, additionalArguments: ['--pyviel-version=1.0.0-beta'] } });
  await win.loadURL('pyviel://app/index.html');
  await new Promise(function (r) { setTimeout(r, 1500); });
  const script = fs.readFileSync(path.join(__dirname, 'page-checks.js'), 'utf8');
  const results = await win.webContents.executeJavaScript(script);
  const extra = await win.webContents.executeJavaScript('JSON.stringify({desktop: !!window.pyvielDesktop, download: !!document.getElementById("download") && getComputedStyle(document.getElementById("download")).display !== "none", isolated: crossOriginIsolated})');
  let failed = 0;
  results.forEach(function (r) { if (!r[1]) { failed++; console.log('FAIL ' + r[0] + (r[2] ? '\n     ' + r[2] : '')); } });
  const info = JSON.parse(extra);
  if (!info.desktop || info.download || !info.isolated) { failed++; console.log('FAIL the app is isolated, knows it is the app and hides the download button: ' + extra); }
  console.log((results.length + 1 - failed) + ' passed, ' + failed + ' failed (in the desktop app)');
  app.exit(failed ? 1 : 0);
});
