/* node tools/check-version.js — the version, the release address and the installer names agree everywhere. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const version = JSON.parse(read('package.json')).version;
const bad = [];
const page = read('index.html');
if (!read('pyviel.js').includes("VERSION = '" + version + "'")) bad.push('pyviel.js VERSION is not ' + version);
if (!page.includes("version: '" + version + "'")) bad.push('index.html PYVIEL_APP.version is not ' + version);
if (!page.includes('/releases/download/v' + version + '/')) bad.push('index.html release address is not v' + version);
const files = [...page.matchAll(/(?:mac|mac_intel|win|linux): '(Pyviel-[^']+)'/g)].map(m => m[1]);
if (files.length !== 4) bad.push('index.html should name 4 installers, found ' + files.length);
files.forEach(f => { if (!f.includes('-' + version + '-')) bad.push('installer name ' + f + ' has another version'); });
const readme = read('README.md');
files.forEach(f => { if (!readme.includes(f)) bad.push('README does not name ' + f); });
if (!read('CHANGELOG.md').includes('## ' + version.replace('-beta', ' beta'))) bad.push('CHANGELOG has no heading for ' + version);
console.log(bad.length ? bad.join('\n') : 'version ' + version + ' agrees in the code, the page, the README and the changelog');
process.exitCode = bad.length ? 1 : 0;
