/* node tools/check-newwords.js [--list] — a new thing is never thrown at the student.

   Every program of every step is read with Python's own parser (tools/concepts.py). The first time
   a thing shows up in the course (print, a loop, a method, an operator...), the step has to
   explain it in its "new words" (n), and a step may bring at most MAX_NEW new things.
   --list prints, for every step, the things it brings; use it while writing. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const MAX_NEW = 3;
const listing = process.argv.includes('--list');

// [en, it, fr] -> the three; a single string -> the same three times
function L3(value) { return Array.isArray(value) ? value : [value, value, value]; }

async function main() {
  const {loadPyodide} = await import(path.join(root, 'pyodide', 'pyodide.mjs'));
  const py = await loadPyodide({indexURL: path.join(root, 'pyodide') + '/'});
  py.runPython(fs.readFileSync(path.join(__dirname, 'concepts.py'), 'utf8'), {globals: py.globals});
  const find = py.globals.get('concepts');
  const glossary = fs.existsSync(path.join(root, 'content', 'glossary.js')) ? require(path.join(root, 'content', 'glossary.js')) : {};

  const seen = new Set();
  const bad = [];
  let number = 0, steps = 0, brought = 0;
  for (const file of fs.readdirSync(path.join(root, 'content')).filter(f => /^\d.*\.js$/.test(f)).sort()) {
    for (const lesson of require(path.join(root, 'content', file))) {
      number++;
      lesson.steps.forEach((step, index) => {
        steps++;
        const where = 'lesson ' + number + ' step ' + (index + 1) + ' "' + step.t[0] + '"';
        // the code of every language has the same shape: only the words inside the quotes are translated
        const versions = L3(step.c);
        let keys = find(versions[0]).toJs();
        for (let li = 1; li < 3; li++) {
          const other = find(versions[li]).toJs();
          if (JSON.stringify(other) !== JSON.stringify(keys)) bad.push(where + ': the ' + ['it', 'fr'][li - 1] + ' code is not built like the English one (' + other.join(' ') + ' against ' + keys.join(' ') + ')');
          if (versions[li].split('\n').length !== versions[0].split('\n').length) bad.push(where + ': the ' + ['it', 'fr'][li - 1] + ' code has another number of lines');
        }
        // a step that breaks on purpose may use a word that does not exist (a typo): only known things count
        if (step.e) keys = keys.filter(k => glossary[k] || seen.has(k));
        const explained = new Set([].concat(...(step.n || []).map(item => typeof item === 'string' ? [item] : [].concat(item.k))));
        const fresh = keys.filter(k => !seen.has(k));
        brought += fresh.length;
        if (listing) console.log(where + ': ' + (fresh.length ? fresh.join(' ') : '-'));
        const missing = fresh.filter(k => !explained.has(k));
        if (missing.length) bad.push(where + ' brings ' + missing.join(', ') + ' without explaining ' + (missing.length > 1 ? 'them' : 'it') + ' in n');
        if (fresh.length > MAX_NEW && !step.many) bad.push(where + ' brings ' + fresh.length + ' new things (' + fresh.join(', ') + '): split the step, at most ' + MAX_NEW);
        for (const k of explained) {
          if (!glossary[k]) bad.push(where + ' explains "' + k + '", which has no entry in content/glossary.js');
        }
        keys.forEach(k => seen.add(k));
        // the practice task may only use what has been taught, this step included
        if (step.ex) {
          for (const [name, source] of [['solution', step.ex.sol && L3(step.ex.sol)[0]], ['start', step.ex.start && L3(step.ex.start)[0]]]) {
            if (!source) continue;
            const used = find(source).toJs().filter(k => !seen.has(k) && !(step.e && !glossary[k]));
            if (used.length) bad.push(where + ': the ' + name + ' of the task uses ' + used.join(', ') + ', which is not taught yet');
          }
        }
      });
    }
  }
  console.log(bad.length ? bad.length + ' problem(s)' + (listing ? '' : ':\n - ' + bad.join('\n - ')) : 'every new thing is explained where it first appears (' + steps + ' steps, ' + seen.size + ' things)');
  console.log(steps + ' steps, ' + brought + ' first appearances');
  process.exitCode = bad.length ? 1 : 0;
}
main().catch(e => { console.error(e); process.exit(1); });
