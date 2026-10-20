/* node tools/check-notes.js — every line of code of every lesson step must have a note, in each language. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
function load(lang) {
  const w = {};
  const doc = {getElementById: () => null, querySelectorAll: () => [], addEventListener() {}, createElement: () => ({}), documentElement: {lang, dataset: {}}};
  const src = ['lessons.js', 'course.js', 'tutorials.js'].map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n');
  new Function('window', 'document', 'localStorage', 'navigator', src)(w, doc, {getItem() { return null; }, setItem() {}}, {userAgent: ''});
  return w;
}
let missing = 0, lines = 0;
for (const lang of ['en', 'it', 'fr']) {
  const w = load(lang);
  w.PyvielTutorials.forEach((lesson, li) => lesson.steps.forEach((step, si) => {
    const rows = step.code.split('\n');
    const notes = w.PyvielExplainCode(step.code);
    rows.forEach((line, i) => {
      if (!line.trim()) return;
      lines++;
      if (!notes[i]) { missing++; if (lang === 'en') console.log('no note: lesson ' + (li + 1) + ' step ' + (si + 1) + ' line ' + (i + 1) + ': ' + line.trim()); }
    });
  }));
}
console.log(missing ? missing + ' lines without a note' : 'every line has a note (' + lines / 3 + ' lines)');
process.exitCode = missing ? 1 : 0;
