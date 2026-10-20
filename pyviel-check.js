/* Checking a student's answer to a practice task. Used by the page (tutorials.js) and by the course build
   (tools/build-course.js), so what the build proves about a solution is what the page does with a student.

   A task has a check: {out, m, c}
     out  the program must print exactly this (trailing spaces and blank lines at the end do not count)
     m    a regular expression that the printed text must match
     c    a regular expression that the program's own text must match (for example, "uses single quotes")
   Every part that is there must pass. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PyvielCheck = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function tidy(text) {
    return String(text).replace(/\r/g, '').split('\n').map(function (line) { return line.replace(/\s+$/, ''); }).join('\n').replace(/\n+$/, '');
  }

  // -> {ok: true} or {ok: false, why: 'empty' | 'output' | 'code'}
  function check(spec, printed, source) {
    var out = tidy(printed);
    if (!out) return {ok: false, why: 'empty'};
    if (spec.out !== undefined && out !== tidy(spec.out)) return {ok: false, why: 'output'};
    if (spec.m !== undefined && !new RegExp(spec.m).test(out)) return {ok: false, why: 'output'};
    if (spec.c !== undefined && !new RegExp(spec.c).test(String(source))) return {ok: false, why: 'code'};
    return {ok: true};
  }

  return {check: check, tidy: tidy};
});
