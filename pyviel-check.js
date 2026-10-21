/* Checking a student's answer to a practice task. Used by the page (tutorials.js) and by the course build
   (tools/build-course.js), so what the build proves about a solution is what the page does with a student.

   A task has a check: {out, m, c}
     out  the program must print exactly this (trailing spaces and blank lines at the end do not count)
     m    a regular expression that the printed text must match
     c    a regular expression that the program's own text must match (for example, "uses single quotes")
     uses the constructs the program must really use, as the runner reads them from the syntax tree
          (pyviel-runner.py _used: "for", "def", "+=", "range", ".append"...): text in quotes and comments never count
   Every part that is there must pass. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PyvielCheck = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function tidy(text) {
    return String(text).replace(/\r/g, '').split('\n').map(function (line) { return line.replace(/\s+$/, ''); }).join('\n').replace(/\n+$/, '');
  }

  // -> {ok: true} or {ok: false, why: 'empty' | 'output' | 'code' | 'uses', missing: [...]}
  // `used` is the list the runner returned; without it (an older runner) `uses` is not checked.
  function check(spec, printed, source, used) {
    var out = tidy(printed);
    if (!out) return {ok: false, why: 'empty'};
    if (spec.out !== undefined && out !== tidy(spec.out)) return {ok: false, why: 'output'};
    if (spec.m !== undefined && !new RegExp(spec.m).test(out)) return {ok: false, why: 'output'};
    if (spec.uses && Array.isArray(used)) {
      var missing = spec.uses.filter(function (key) { return used.indexOf(key) < 0; });
      if (missing.length) return {ok: false, why: 'uses', missing: missing};
    }
    if (spec.c !== undefined && !new RegExp(spec.c).test(String(source))) return {ok: false, why: 'code'};
    return {ok: true};
  }

  // A wrong answer that is almost right, and why: the mistakes beginners make most.
  // `got` and `want` are whole outputs (tidied). -> null, or {why, line} where line counts from 1.
  //   case    only capital and small letters differ        spaces  only the spaces differ
  //   punct   only a . , ! ? : ; differs                     quotes  quotes shown around the text
  //   decimal the same number, as 4.0 instead of 4 (or back) order   the right lines, in another order
  //   blank   only empty lines differ                     details a mix of the first three
  function near(got, want) {
    var a = tidy(got).split('\n'), b = tidy(want).split('\n');
    if (a.filter(function (x) { return x.trim(); }).join('\n') === b.filter(function (x) { return x.trim(); }).join('\n')) return {why: 'blank', line: 0};
    if (a.length === b.length && a.length > 1 && a.slice().sort().join('\n') === b.slice().sort().join('\n')) return {why: 'order', line: 0};
    var at = 0;
    while (at < a.length && at < b.length && a[at] === b[at]) at++;
    if (at >= a.length || at >= b.length) return null;
    var x = a[at], y = b[at], line = at + 1;
    var squash = function (s) { return s.replace(/\s+/g, ''); };
    var bare = function (s) { return s.replace(/[.,!?:;]/g, '').replace(/\s+/g, ' ').trim(); };
    if (x.toLowerCase() === y.toLowerCase()) return {why: 'case', line: line};
    if (squash(x) === squash(y)) return {why: 'spaces', line: line};
    if (/^(["']).*\1$/.test(x) && x.slice(1, -1) === y) return {why: 'quotes', line: line};
    if (bare(x) === bare(y) && bare(x)) return {why: 'punct', line: line};
    var numbers = function (s) { return s.match(/-?\d+(\.\d+)?/g) || []; };
    var nx = numbers(x), ny = numbers(y);
    if (nx.length && nx.length === ny.length && x.replace(/-?\d+(\.\d+)?/g, '#') === y.replace(/-?\d+(\.\d+)?/g, '#') &&
        nx.every(function (n, i) { return Number(n) === Number(ny[i]); })) return {why: 'decimal', line: line};
    if (x.toLowerCase().replace(/[.,!?:;\s]/g, '') === y.toLowerCase().replace(/[.,!?:;\s]/g, '')) return {why: 'details', line: line};
    return null;
  }

  return {check: check, tidy: tidy, near: near};
});
