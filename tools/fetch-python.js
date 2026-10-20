/* node tools/fetch-python.js [target...] — downloads the Python that the desktop app carries.
   The builds come from python-build-standalone (https://github.com/astral-sh/python-build-standalone),
   are checked against the published SHA-256 list, and are unpacked into python/<target>/. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');

const RELEASE = '20261013';
const PYTHON = '3.14.8';
const TARGETS = {
  'mac-arm64': 'aarch64-apple-darwin',
  'mac-x64': 'x86_64-apple-darwin',
  'win-x64': 'x86_64-pc-windows-msvc',
  'linux-x64': 'x86_64-unknown-linux-gnu'
};
const base = `https://github.com/astral-sh/python-build-standalone/releases/download/${RELEASE}/`;
const root = path.resolve(__dirname, '..', 'python');

async function get(url) {
  const answer = await fetch(url, {redirect: 'follow'});
  if (!answer.ok) throw new Error(url + ' -> ' + answer.status);
  return Buffer.from(await answer.arrayBuffer());
}

async function main() {
  const wanted = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(TARGETS);
  const sums = (await get(base + 'SHA256SUMS')).toString();
  fs.mkdirSync(root, {recursive: true});
  for (const name of wanted) {
    const triple = TARGETS[name];
    if (!triple) throw new Error('unknown target ' + name + ' (' + Object.keys(TARGETS).join(', ') + ')');
    const folder = path.join(root, name);
    const stamp = path.join(folder, '.version');
    if (fs.existsSync(stamp) && fs.readFileSync(stamp, 'utf8').trim() === PYTHON + '+' + RELEASE) { console.log(name + ': already there'); continue; }
    const file = `cpython-${PYTHON}+${RELEASE}-${triple}-install_only_stripped.tar.gz`;
    const line = sums.split('\n').find(l => l.trim().endsWith(' ' + file) || l.trim().endsWith('*' + file));
    if (!line) throw new Error('no checksum for ' + file);
    const bytes = await get(base + encodeURIComponent(file).replace('%2B', '%2B'));
    const sha = crypto.createHash('sha256').update(bytes).digest('hex');
    if (sha !== line.trim().split(/\s+/)[0]) throw new Error('checksum mismatch for ' + file);
    fs.rmSync(folder, {recursive: true, force: true});
    fs.mkdirSync(folder, {recursive: true});
    const archive = path.join(root, file);
    fs.writeFileSync(archive, bytes);
    execFileSync('tar', ['-xzf', archive, '-C', folder, '--strip-components=1']);
    fs.rmSync(archive);
    fs.writeFileSync(stamp, PYTHON + '+' + RELEASE + '\n');
    console.log(name + ': Python ' + PYTHON + ' ready (' + (bytes.length / 1048576).toFixed(0) + ' MB)');
  }
}
main().catch(e => { console.error(e.message); process.exit(1); });
