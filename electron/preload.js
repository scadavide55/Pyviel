/* What the page gets from the desktop app: to know it is the app (so the download button stays away),
   and the Python that is packed inside it. Nothing else crosses this bridge. */
const { contextBridge, ipcRenderer } = require('electron');

const found = process.argv.filter(function (a) { return a.indexOf('--pyviel-version=') === 0; })[0] || '';
let listener = null;
ipcRenderer.on('py:event', function (event, message) { if (listener) listener(message); });

contextBridge.exposeInMainWorld('pyvielDesktop', {
  version: found.split('=')[1] || '1.0.0-beta',
  platform: process.platform,
  files: {
    saveInFolder: function (name, text) { return ipcRenderer.invoke('file:save-in-folder', String(name), String(text)); }
  },
  python: {
    start: function () { return ipcRenderer.invoke('py:start'); },
    run: function (source) { ipcRenderer.send('py:run', String(source)); },
    answer: function (text) { ipcRenderer.send('py:answer', text === null || text === undefined ? null : String(text)); },
    stop: function () { ipcRenderer.send('py:stop'); },
    onEvent: function (fn) { listener = fn; }
  }
});
