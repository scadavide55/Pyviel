/* node tools/build-course.js — builds course.js from the files in content/.

   Every file in content/ exports an array of lessons. A lesson is
     {group: [en, it, fr] (optional, on the first lesson of a group),
      title: [en, it, fr], subtitle: [en, it, fr], steps: [...]}
   and a step is
     {c: code,
      i: [answers typed for input(), in order]            (optional)
      t: [title en, it, fr]   x: [text en, it, fr]   d: [your turn en, it, fr]   w: [watch out en, it, fr]
      s: what you will see, when it cannot be found by running (random output)   (optional)
      e: 'NameError'          the program is meant to stop with this error        (optional)
      r: true                 the output changes on every run, so `s` is required (optional)}

   The program of every step is run on real Python here. "What you will see" is what it
   printed, so it cannot be wrong. A program that fails when it should not, a missing language,
   a text left untranslated: the build stops and says where. */
const fs = require('node:fs');
const path = require('node:path');
// asyncio needs WebAssembly stack switching, which Node has behind a flag: start again with it.
if (!process.execArgv.includes('--experimental-wasm-jspi')) {
  const again = require('node:child_process').spawnSync(process.execPath, ['--experimental-wasm-jspi', __filename, ...process.argv.slice(2)], {stdio: 'inherit'});
  process.exit(again.status === null ? 1 : again.status);
}
const Errors = require('../pyviel-errors.js');

const LANGS = ['en', 'it', 'fr'];
const MAX_SEE_LINES = 12;
const problems = [];
const bad = (where, what) => problems.push(where + ': ' + what);

function pick3(value, where, what, required) {
  if (!Array.isArray(value) || value.length !== 3) {
    if (required) bad(where, what + ' must be [en, it, fr]');
    return null;
  }
  value.forEach((v, i) => { if (required && (typeof v !== 'string' || !v.trim())) bad(where, what + ' is empty in ' + LANGS[i]); });
  return {en: value[0], it: value[1], fr: value[2]};
}

function shorten(text) {
  const lines = text.replace(/\s+$/, '').split('\n');
  if (lines.length <= MAX_SEE_LINES) return lines.join('\n');
  return lines.slice(0, MAX_SEE_LINES - 3).concat(['...'], lines.slice(-2)).join('\n');
}

async function main() {
  const {loadPyodide} = await import(path.join(__dirname, '..', 'pyodide', 'pyodide.mjs'));
  const py = await loadPyodide({indexURL: path.join(__dirname, '..', 'pyodide') + '/'});
  py.runPython(fs.readFileSync(path.join(__dirname, '..', 'pyviel-runner.py'), 'utf8'), {globals: py.globals});
  const run = py.globals.get('run');
  const fresh = py.runPython('import os, tempfile\ndef _fresh():\n    os.chdir(tempfile.mkdtemp())\n_fresh');
  const lineWord = Errors.words.line;

  const files = fs.readdirSync(path.join(__dirname, '..', 'content')).filter(f => /\.js$/.test(f)).sort();
  const lessons = [];
  for (const file of files) {
    for (const lesson of require(path.join(__dirname, '..', 'content', file))) {
      const number = lessons.length + 1;
      const where = 'lesson ' + number + ' (' + file + ')';
      const title = pick3(lesson.title, where, 'title', true);
      const subtitle = pick3(lesson.subtitle, where, 'subtitle', true);
      const group = pick3(lesson.group, where, 'group', false);
      const steps = [];
      for (const [index, step] of (lesson.steps || []).entries()) {
        const here = where + ' step ' + (index + 1) + (step.t ? ' "' + step.t[0] + '"' : '');
        const t = pick3(step.t, here, 't (title)', true);
        const x = pick3(step.x, here, 'x (text)', true);
        const d = pick3(step.d, here, 'd (your turn)', true);
        const w = pick3(step.w, here, 'w (watch out)', false);
        if (typeof step.c !== 'string' || !step.c.trim()) { bad(here, 'no code'); continue; }
        for (const l of ['it', 'fr']) {
          if (t && t[l] === t.en && !/^[A-Z0-9 ,.]+$/.test(t.en)) bad(here, 'title is not translated in ' + l);
          if (x && x[l] === x.en) bad(here, 'text is not translated in ' + l);
          if (d && d[l] === d.en) bad(here, 'turn is not translated in ' + l);
        }
        if (process.env.COURSE_VERBOSE) console.error('running', here);
        // run the program
        fresh();
        let out = '';
        let ranOut = false;
        const answers = (step.i || []).slice();
        let result;
        try {
          const proxy = await run.callPromising(step.c, s => { out += s; }, () => { if (answers.length) return answers.shift(); ranOut = true; return null; });
          result = proxy.toJs({dict_converter: Object.fromEntries});
          proxy.destroy();
        } catch (error) { bad(here, 'the runner failed: ' + error); continue; }
        if (ranOut) bad(here, 'the program asked for more answers than the step gives (add more to i)');
        if (step.e) {
          if (!result.error) bad(here, 'was meant to stop with ' + step.e + ' but ran fine');
          else if (result.error.type !== step.e) bad(here, 'stopped with ' + result.error.type + ', not ' + step.e);
        } else if (result.error) {
          bad(here, 'stopped with ' + result.error.type + ': ' + result.error.message + ' (line ' + result.error.line + ')');
        }
        if (/0x[0-9a-f]{5,}/.test(out)) bad(here, 'the output shows a memory address, which changes on every run: print something else (for example type(x).__name__)');
        if (answers.length && !step.r) bad(here, 'typed answers were not all used: ' + answers.join(', '));
        if (step.i && !/\binput\(/.test(step.c)) bad(here, 'has answers but no input()');
        if (/\binput\(/.test(step.c) && !step.i) bad(here, 'uses input() but has no answers (i)');
        const see = {};
        for (const l of LANGS) {
          if (step.s !== undefined) {
            const s3 = typeof step.s === 'string' ? {en: step.s, it: step.s, fr: step.s} : pick3(step.s, here, 's (see)', true);
            see[l] = s3 ? s3[l] : '';
          } else if (step.r) { bad(here, 'r (random) needs s (what you will see)'); see[l] = ''; }
          else {
            let text = shorten(out);
            if (step.e && result.error) {
              const said = Errors.explain(result.error, l);
              text = (text ? text + '\n' : '') + '⚠ ' + lineWord[l] + ' ' + result.error.line + ': ' + said.title.replace(/`/g, '');
            }
            see[l] = text;
          }
          if (!see[l].trim()) bad(here, 'nothing to show for "what you will see" in ' + l + ' (give s)');
        }
        steps.push({code: step.c.replace(/\n+$/, ''), title: t, text: x, see, turn: d, slip: w, error: step.e || undefined});
      }
      if (!steps.length) bad(where, 'no steps');
      lessons.push({group, title, subtitle, steps});
    }
  }
  if (problems.length) {
    console.error(problems.length + ' problem(s):\n' + problems.map(p => ' - ' + p).join('\n'));
    process.exit(1);
  }
  const body = JSON.stringify({lessons}, null, 1);
  fs.writeFileSync(path.join(__dirname, '..', 'course.js'),
    '/* The course: every lesson and step, in English, Italian and French.\n   GENERATED by tools/build-course.js from content/*.js. Do not edit by hand. */\nwindow.PyvielCourse = ' + body + ';\n');
  const steps = lessons.reduce((n, l) => n + l.steps.length, 0);
  console.log('course.js: ' + lessons.length + ' lessons, ' + steps + ' steps');
}
main().catch(e => { console.error(e); process.exit(1); });
