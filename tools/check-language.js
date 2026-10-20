/* node tools/check-language.js — looks for English left in the Italian and French texts of the course. */
const fs = require('node:fs');
const path = require('node:path');
global.window = {};
new Function('window', fs.readFileSync(path.join(__dirname, '..', 'course.js'), 'utf8'))(global.window);
const lessons = global.window.PyvielCourse.lessons;
const ENGLISH = /\b(the|and|you|your|this|that|when|then|will|are|between|before|after|because|about|which|where|should|would|could|there|here|have|has|not)\b/gi;
let found = 0;
function scan(where, text, lang) {
  // code, names and quoted words are allowed: take them out first
  const prose = String(text).replace(/`[^`]*`/g, '').replace(/"[^"]*"/g, '').replace(/\b[a-z_]+\([^)]*\)/g, '').replace(/\b[\w.]+\[[^\]]*\]/g, '');
  const hits = (prose.match(ENGLISH) || []).filter(w => w.length > 2);
  // "not", "has", "here" are also real words in Italian or French code comments: need two hits
  if (hits.length >= 3) { found++; console.log(lang + ' ' + where + ': ' + hits.slice(0, 6).join(', ')); }
}
lessons.forEach((lesson, i) => {
  for (const lang of ['it', 'fr']) {
    scan('lesson ' + (i + 1) + ' title', lesson.title[lang] + ' ' + lesson.subtitle[lang], lang);
    lesson.steps.forEach((step, j) => {
      for (const field of ['title', 'text', 'turn', 'slip']) if (step[field]) scan('lesson ' + (i + 1) + ' step ' + (j + 1) + ' ' + field, step[field][lang], lang);
    });
  }
});
// every step has the same number of paragraphs in the three languages
lessons.forEach((lesson, i) => lesson.steps.forEach((step, j) => {
  const counts = ['en', 'it', 'fr'].map(l => step.text[l].split('\n\n').length);
  if (new Set(counts).size > 1) { found++; console.log('lesson ' + (i + 1) + ' step ' + (j + 1) + ': paragraphs differ ' + counts.join('/')); }
}));
console.log(found ? found + ' thing(s) to look at' : 'no English left in the Italian and French texts');
process.exitCode = found ? 1 : 0;
