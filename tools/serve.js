/* node tools/serve.js [port] — a tiny static server with the two headers Pyviel needs.
   Only for local work: the published site uses coi-sw.js instead. */
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const port = Number(process.argv[2]) || 8780;
const types = {'.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.wasm': 'application/wasm', '.zip': 'application/zip', '.py': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png'};
http.createServer((request, response) => {
  const url = decodeURIComponent(request.url.split('?')[0]);
  const file = path.join(root, url === '/' ? 'index.html' : url);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { response.writeHead(404); response.end('not found'); return; }
  response.writeHead(200, {
    'Content-Type': types[path.extname(file)] || 'application/octet-stream',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cache-Control': 'no-store'
  });
  fs.createReadStream(file).pipe(response);
}).listen(port, '127.0.0.1', () => console.log('Pyviel on http://127.0.0.1:' + port + '/'));
