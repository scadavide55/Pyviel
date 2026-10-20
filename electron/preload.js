/* The page needs one thing from the desktop app: to know that it is the app,
   so the download button stays away. Nothing else crosses this bridge. */
const { contextBridge } = require('electron');

const found = process.argv.filter(function (a) { return a.indexOf('--pyviel-version=') === 0; })[0] || '';

contextBridge.exposeInMainWorld('pyvielDesktop', {
  version: found.split('=')[1] || '1.0.0-beta'
});
