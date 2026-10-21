// Every new thing of the course is explained once here, in three languages, and shown in the step where it first appears.
// A step lists the keys in its n. tools/check-newwords.js makes sure that nothing is used before it is explained.
// {w: the word as the student reads it, d: [en, it, fr] what it is, s: a tiny example (optional)}
module.exports = Object.assign({},
  require('./glossary-start.js'),
  require('./glossary-numbers.js'),
  require('./glossary-choices.js')
);
