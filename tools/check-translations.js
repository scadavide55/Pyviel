/* node tools/check-translations.js — every label, tooltip and button of the page has an Italian and a French entry. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const page = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<pre[\s\S]*?<\/pre>/g, '');
const dictionary = fs.readFileSync(path.join(root, 'i18n.js'), 'utf8');
const wanted = new Set();
for (const m of page.matchAll(/\b(?:title|aria-label|placeholder)="([^"]+)"/g)) wanted.add(m[1]);
for (const m of page.matchAll(/<(?:button|h2|h3|label|option|strong|small|a|span)\b[^>]*>([^<>]+)</g)) wanted.add(m[1].replace(/\s+/g, ' ').trim());
// a paragraph is translated as a whole, with the tags it has inside
for (const m of page.matchAll(/<p>([\s\S]*?)<\/p>/g)) wanted.add(m[1].replace(/\s+/g, ' ').trim());
const keep = new Set(['Pyviel', 'alpha', 'English', 'Italiano', 'Français', 'Cmd/Ctrl + Enter', 'Cmd/Ctrl + S', 'Cmd/Ctrl + F', 'Ln 1, Col 1']);
const quoted = text => "'" + text.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const missing = [...wanted].filter(text => /[A-Za-z]{3}/.test(text) && !keep.has(text) && !/^(Cmd|Esc|Tab|Shift)/.test(text) && !/^\W+$/.test(text) && !/^&\w+;$/.test(text) && !dictionary.includes(quoted(text)));
console.log(missing.length ? missing.length + ' label(s) without a translation:\n - ' + missing.join('\n - ') : 'every label of the page is translated');
process.exitCode = missing.length ? 1 : 0;

// What a task asks to use ("uses") is named to the student in a sentence: every key needs a name in each language.
const course = {};
new Function('window', fs.readFileSync(path.join(root, 'course.js'), 'utf8') + fs.readFileSync(path.join(root, 'lessons.js'), 'utf8'))(course);
const keys = new Set();
for (const lesson of course.PyvielCourse.lessons) for (const step of lesson.steps) if (step.ex && step.ex.spec.en.uses) step.ex.spec.en.uses.forEach(k => keys.add(k));
const unnamed = [];
for (const lang of ['en', 'it', 'fr']) for (const key of keys) if (!(course.PyvielLessons[lang].ui.uses || {})[key]) unnamed.push(lang + ': ' + key);
console.log(unnamed.length ? unnamed.length + ' task word(s) without a name in lessons.js (ui.uses):\n - ' + unnamed.join('\n - ') : 'every word a task asks for has a name in the three languages');
if (unnamed.length) process.exitCode = 1;
