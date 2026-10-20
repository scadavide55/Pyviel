/* The Pyviel desktop app: the same page as the website, opened from disk.
   Python's input() and Stop need a cross-origin isolated page, which a plain file:// page cannot be,
   so the files are served by a small local scheme (pyviel://app/) that adds the two headers.
   No network: every file is local, and every http(s) request is cancelled. */
const { app, BrowserWindow, Menu, shell, session, protocol, net, ipcMain } = require('electron');
const pythonHost = require('./python-host');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.join(__dirname, '..');
const BG = '#f4ecdc';

app.setName('Pyviel');

// One Pyviel at a time: a second start brings the first window forward.
if (!app.requestSingleInstanceLock()) { app.quit(); }
app.on('second-instance', function () {
  const win = BrowserWindow.getAllWindows()[0];
  if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
});

protocol.registerSchemesAsPrivileged([
  { scheme: 'pyviel', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }
]);

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.wasm': 'application/wasm', '.zip': 'application/zip', '.py': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png' };

function serve(request) {
  const url = new URL(request.url);
  let relative = decodeURIComponent(url.pathname);
  if (relative === '/' || relative === '') relative = '/index.html';
  const file = path.normalize(path.join(ROOT, relative));
  if (file.indexOf(ROOT) !== 0) return new Response('not found', { status: 404 });
  return net.fetch(pathToFileURL(file).toString()).then(function (answer) {
    const headers = new Headers(answer.headers);
    headers.set('Content-Type', TYPES[path.extname(file)] || 'application/octet-stream');
    headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
    headers.set('Cross-Origin-Resource-Policy', 'same-origin');
    return new Response(answer.body, { status: answer.status, headers: headers });
  }).catch(function () { return new Response('not found', { status: 404 }); });
}

function buildMenu() {
  // macOS needs a menu for the usual Cmd+C, Cmd+V and Cmd+Q to work.
  if (process.platform !== 'darwin') return null;
  return Menu.buildFromTemplate([
    { role: 'appMenu' },
    { label: 'Edit', submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'selectAll' }] },
    { label: 'View', submenu: [{ role: 'reload' }, { role: 'toggleDevTools' }, { type: 'separator' }, { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { type: 'separator' }, { role: 'togglefullscreen' }] },
    { role: 'windowMenu' }
  ]);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 860,
    minHeight: 560,
    backgroundColor: BG,
    title: 'Pyviel',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false,
      additionalArguments: ['--pyviel-version=' + app.getVersion()]
    }
  });
  win.once('ready-to-show', function () { win.show(); });
  // Links never leave the app: an outside address opens in the browser instead.
  win.webContents.setWindowOpenHandler(function (details) {
    if (/^https?:/i.test(details.url)) shell.openExternal(details.url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', function (event, url) {
    if (url.indexOf('pyviel://app/') !== 0) event.preventDefault();
  });
  // If the page ever crashes, load it again instead of leaving a blank window.
  win.webContents.on('render-process-gone', function () { if (!win.isDestroyed()) win.loadURL('pyviel://app/index.html'); });
  win.loadURL('pyviel://app/index.html');
  return win;
}

app.whenReady().then(function () {
  protocol.handle('pyviel', serve);
  // Offline for real: nothing in the app reaches the internet.
  session.defaultSession.webRequest.onBeforeRequest(function (details, callback) {
    callback({ cancel: /^https?:/i.test(details.url) });
  });
  pythonHost.register(app, ipcMain);
  Menu.setApplicationMenu(buildMenu());
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
