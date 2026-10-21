/* node tools/check-examples.js — every example of the Examples tab runs on real Python, in every language.
   An example marked error must stop with an error; every other one must end without one.
   When the typed answers run out, the run is stopped: that counts as fine (a game can go on for ever). */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

function load(lang) {
  const window = {PyvielI18n: {lang}};
  new Function('window', 'document', fs.readFileSync(path.join(root, 'examples.js'), 'utf8'))(window, {documentElement: {lang}});
  return window.PyvielExamples;
}

(async () => {
  const bad = [];
  const all = load('en').all;
  const ids = new Set(), files = new Set();
  for (const e of all) {
    if (ids.has(e.id)) bad.push(e.id + ': the id is used twice');
    if (files.has(e.file)) bad.push(e.id + ': the file name ' + e.file + ' is used twice');
    ids.add(e.id); files.add(e.file);
    if (!/^[a-z0-9_]+\.py$/.test(e.file)) bad.push(e.id + ': the file name should be lower_case.py');
    const shapes = e.code.map(c => c.split('\n').length);
    if (new Set(shapes).size !== 1) bad.push(e.id + ': the three languages have a different number of lines (' + shapes.join(', ') + ')');
    for (const field of ['title', 'about']) if (e[field].length !== 3 || e[field].some(t => !t)) bad.push(e.id + ': ' + field + ' needs three languages');
  }

  const {loadPyodide} = await import(path.join(root, 'pyodide', 'pyodide.mjs'));
  const py = await loadPyodide({indexURL: path.join(root, 'pyodide') + '/'});
  py.runPython(fs.readFileSync(path.join(root, 'pyviel-runner.py'), 'utf8'), {globals: py.globals});
  py.runPython('import time\ntime.sleep = lambda seconds: None');   // the countdown need not wait here
  const run = py.globals.get('run');
  let runs = 0;
  for (const lang of ['en', 'it', 'fr']) {
    for (const e of load(lang).list) {
      const answers = e.answers.slice();
      let out = '';
      const proxy = run(e.code, text => { out += text; }, () => (answers.length ? answers.shift() : null));
      const result = proxy.toJs({dict_converter: Object.fromEntries});
      proxy.destroy();
      runs++;
      const where = e.id + ' (' + lang + ')';
      if (e.error && !result.error) bad.push(where + ': should stop with an error, but it did not');
      if (!e.error && result.error) bad.push(where + ': stops with ' + result.error.type + ' on line ' + result.error.line + ': ' + result.error.message);
      if (!out.trim()) bad.push(where + ': shows nothing');
    }
  }
  if (bad.length) { console.log(bad.join('\n')); process.exitCode = 1; }
  else console.log('every example runs (' + all.length + ' examples, ' + runs + ' runs)');
})().catch(e => { console.error(e); process.exitCode = 1; });
