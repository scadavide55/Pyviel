/* node tools/build-course.js — builds course.js from the files in content/.

   Every file in content/ exports an array of lessons. A lesson is
     {group: [en, it, fr] (optional, on the first lesson of a group),
      title: [en, it, fr], subtitle: [en, it, fr], steps: [...]}
   and a step is
     {c: code,
      i: [answers typed for input(), in order]            (optional)
      t: [title en, it, fr]   x: [text en, it, fr]   w: [watch out en, it, fr]
      n: ['print', 'string']  the new things of the step, as keys of content/glossary.js (tools/check-newwords.js
                              makes sure that everything is explained where it first appears)
      ex: {t: [task en, it, fr], h: [hint en, it, fr], sol: 'a solution', start: 'code to begin with' (optional),
           out: 'what it prints' | exact: true (what the solution prints) | m: 'regex on the output',
           c: 'regex on the program text' (optional), i: [typed answers] (optional)}
                              a practice task; the build runs the solution, and the start, and checks both
      d: [your turn en, it, fr]   the old kind of practice sentence, still accepted
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
const Check = require('../pyviel-check.js');
const glossaryFile = path.join(__dirname, '..', 'content', 'glossary.js');
const glossary = fs.existsSync(glossaryFile) ? require(glossaryFile) : {};

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


// A value for one language: a string (the same for all), [en, it, fr], or {en, it, fr}.
function per(value, l) {
  if (value === undefined || value === null) return undefined;
  if (Array.isArray(value) && value.length === 3 && value.every(v => typeof v === 'string')) return value[LANGS.indexOf(l)];
  if (typeof value === 'object' && !Array.isArray(value)) return value[l];
  return value;
}

// Typed answers: a list for all languages, or {en: [...], it: [...], fr: [...]}.
function answersFor(value, l) {
  if (!value) return [];
  if (!Array.isArray(value)) return value[l] || [];
  return value;
}

// Code: one text for every language, or [en, it, fr] with the words inside the quotes translated.
function codes(value, where, what, optional) {
  if (value === undefined && optional) return null;
  const out = {};
  for (const l of LANGS) {
    const v = per(value, l);
    if (typeof v !== 'string' || (!v.trim() && !optional)) { bad(where, what + ' is missing or empty in ' + l); return null; }
    out[l] = v;
  }
  return out;
}

async function main() {
  const {loadPyodide} = await import(path.join(__dirname, '..', 'pyodide', 'pyodide.mjs'));
  const py = await loadPyodide({indexURL: path.join(__dirname, '..', 'pyodide') + '/'});
  py.runPython(fs.readFileSync(path.join(__dirname, '..', 'pyviel-runner.py'), 'utf8'), {globals: py.globals});
  const run = py.globals.get('run');
  const fresh = py.runPython('import os, tempfile\ndef _fresh():\n    os.chdir(tempfile.mkdtemp())\n_fresh');
  const lineWord = Errors.words.line;

  const files = fs.readdirSync(path.join(__dirname, '..', 'content')).filter(f => /^\d.*\.js$/.test(f)).sort();
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
        const d = pick3(step.d, here, 'd (your turn)', !step.ex);
        if (step.ex && step.d) bad(here, 'has both ex and d: keep ex');
        const w = pick3(step.w, here, 'w (watch out)', false);
        // code, answers and everything inside the code can be one value for all languages or one for each
        const code = codes(step.c, here, 'c (code)');
        if (!code) continue;
        for (const l of ['it', 'fr']) {
          if (t && t[l] === t.en && !/^[A-Z0-9 ,.]+$/.test(t.en)) bad(here, 'title is not translated in ' + l);
          if (x && x[l] === x.en) bad(here, 'text is not translated in ' + l);
          if (d && d[l] === d.en) bad(here, 'turn is not translated in ' + l);
        }
        if (process.env.COURSE_VERBOSE) console.error('running', here);
        const see = {};
        let failed = false;
        for (const l of LANGS) {
          const source = code[l];
          if (l !== 'en' && source === code.en && /["'#]/.test(source) && !/^[^"'#]*$/.test(source) && process.env.COURSE_WARN) console.error('same code in ' + l + ': ' + here);
          const give = answersFor(step.i, l);
          fresh();
          let out = '';
          let ranOut = false;
          const answers = give.slice();
          let result;
          try {
            const proxy = await run.callPromising(source, s => { out += s; }, () => { if (answers.length) return answers.shift(); ranOut = true; return null; });
            result = proxy.toJs({dict_converter: Object.fromEntries});
            proxy.destroy();
          } catch (error) { bad(here, 'the runner failed in ' + l + ': ' + error); failed = true; break; }
          if (ranOut) bad(here, 'the program asked for more answers than the step gives in ' + l + ' (add more to i)');
          if (step.e) {
            if (!result.error) bad(here, l + ': was meant to stop with ' + step.e + ' but ran fine');
            else if (result.error.type !== step.e) bad(here, l + ': stopped with ' + result.error.type + ', not ' + step.e);
          } else if (result.error) {
            bad(here, l + ': stopped with ' + result.error.type + ': ' + result.error.message + ' (line ' + result.error.line + ')');
          }
          if (/0x[0-9a-f]{5,}/.test(out)) bad(here, 'the output shows a memory address, which changes on every run: print something else (for example type(x).__name__)');
          if (answers.length && !step.r) bad(here, l + ': typed answers were not all used: ' + answers.join(', '));
          if (give.length && !/\binput\(/.test(source)) bad(here, l + ': has answers but no input()');
          if (/\binput\(/.test(source) && !give.length) bad(here, l + ': uses input() but has no answers (i)');
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
        if (failed) continue;
        // the new words of the step, from the glossary
        const news = [];
        for (const item of step.n || []) {
          const key = typeof item === 'string' ? item : null;
          if (!key || !glossary[key]) { bad(here, 'n has "' + (key || JSON.stringify(item)) + '", which is not in content/glossary.js'); continue; }
          const g = glossary[key];
          const d3 = pick3(g.d, here + ' glossary ' + key, 'description', true);
          const shape = g.s === undefined ? null : codes(g.s, here + ' glossary ' + key, 's');
          news.push({k: key, w: g.w, d: d3, s: shape || undefined});
        }
        // the practice task
        let ex;
        if (step.ex) {
          const e = step.ex;
          const t3 = pick3(e.t, here, 'ex.t (task)', true);
          const h3 = pick3(e.h, here, 'ex.h (hint)', true);
          const sols = e.sol === undefined ? null : codes(e.sol, here, 'ex.sol');
          const starts = typeof e.start === 'string' || Array.isArray(e.start) ? codes(e.start, here, 'ex.start', true) : null;
          if (!sols) bad(here, 'ex.sol (a solution) is missing');
          else {
            for (const l of ['it', 'fr']) {
              if (t3 && t3[l] === t3.en) bad(here, 'ex.t is not translated in ' + l);
              if (h3 && h3[l] === h3.en && !/[()=*\[\]]/.test(h3.en)) bad(here, 'ex.h is not translated in ' + l);
            }
            const spec = {}, answers = {}, expected = {};
            try {
              for (const l of LANGS) {
                const give = answersFor(e.i, l).slice();
                answers[l] = give.slice();
                const play = async source => {
                  fresh();
                  let printed = '';
                  const left = give.slice();
                  const proxy = await run.callPromising(source, s => { printed += s; }, () => (left.length ? left.shift() : null));
                  const result = proxy.toJs({dict_converter: Object.fromEntries});
                  proxy.destroy();
                  return {printed, result};
                };
                const solved = await play(sols[l]);
                if (solved.result.error) bad(here, l + ': the solution stops with ' + solved.result.error.type + ': ' + solved.result.error.message);
                const sp = {};
                const out = per(e.out, l), m = per(e.m, l), cc = per(e.c, l);
                if (out !== undefined) sp.out = out;
                else if (e.exact) sp.out = solved.printed;
                if (m !== undefined) sp.m = m;
                if (cc !== undefined) sp.c = cc;
                if (sp.out === undefined && sp.m === undefined && sp.c === undefined) bad(here, 'ex needs out, exact, m or c to check');
                const verdict = Check.check(sp, solved.printed, sols[l]);
                if (!verdict.ok) bad(here, l + ': the solution does not pass its own check (' + verdict.why + '): it printed ' + JSON.stringify(solved.printed));
                if (starts && starts[l].trim()) {
                  const began = await play(starts[l]);
                  if (!began.result.error && Check.check(sp, began.printed, starts[l]).ok) bad(here, l + ': the start already passes the check: the task is done before the student does anything');
                }
                spec[l] = sp;
                if (sp.out !== undefined) expected[l] = shorten(sp.out);
              }
              const tidy = text => String(text).replace(/\n+$/, '');
              const mapped = obj => obj ? Object.fromEntries(LANGS.map(l => [l, tidy(obj[l])])) : null;
              ex = {task: t3, hint: h3, sol: mapped(sols), start: starts ? mapped(starts) : {en: '', it: '', fr: ''}, spec, answers, expected: Object.keys(expected).length === 3 ? expected : undefined};
            } catch (error) { bad(here, 'the task could not be run: ' + error); }
          }
        }
        steps.push({code: Object.fromEntries(LANGS.map(l => [l, code[l].replace(/\n+$/, '')])), title: t, text: x, see, turn: d || undefined, slip: w, error: step.e || undefined, news: news.length ? news : undefined, ex});
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
