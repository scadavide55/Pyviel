/* node test-errors.js — the runner and the friendly errors, on real Python (Pyodide in Node). */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Errors = require('./pyviel-errors.js');

let passed = 0;
function check(name, fn) {
  try { fn(); passed++; } catch (e) { console.error('FAIL ' + name); throw e; }
}

// ---- 1. The texts: every error has the same shape in the three languages.
check('every error has a title and a caption in en, it and fr', () => {
  for (const id of Errors.ids()) {
    for (const lang of Errors.languages) {
      const t = Errors.texts[id][lang];
      assert.ok(t && t.length === 2 && t[0].length > 8 && t[1].length > 8, id + ' ' + lang);
    }
  }
});
check('the three languages use the same placeholders', () => {
  const holes = text => (text.match(/\{[0-9ms]\}/g) || []).sort().join(',');
  for (const id of Errors.ids()) {
    for (let part = 0; part < 2; part++) {
      const en = holes(Errors.texts[id].en[part]);
      for (const lang of ['it', 'fr']) assert.equal(holes(Errors.texts[id][lang][part]), en, id + ' ' + lang + ' part ' + part);
    }
  }
});
check('every rule points at a text that exists', () => {
  const source = fs.readFileSync(path.join(__dirname, 'pyviel-errors.js'), 'utf8');
  for (const m of source.matchAll(/\], '([a-z_]+)'\],?$/gm)) assert.ok(Errors.texts[m[1]], m[1]);
});

(async () => {
  const {loadPyodide} = await import('./pyodide/pyodide.mjs');
  const py = await loadPyodide({indexURL: path.join(__dirname, 'pyodide') + '/'});
  py.runPython(fs.readFileSync(path.join(__dirname, 'pyviel-runner.py'), 'utf8'), {globals: py.globals});
  const run = py.globals.get('run');

  function go(source, answers = []) {
    let out = '';
    const queue = answers.slice();
    const result = run(source, text => { out += text; }, () => (queue.length ? queue.shift() : ''));
    return {out, result: result.toJs({dict_converter: Object.fromEntries})};
  }

  // ---- 2. Programs that work.
  check('print works', () => { const r = go('print("hi")'); assert.equal(r.out, 'hi\n'); assert.equal(r.result.ok, true); });
  check('input() reaches the program and the answer is shown', () => {
    const r = go('n = input("Name? ")\nprint("Hi", n)', ['Ada']);
    assert.equal(r.out, 'Name? Ada\nHi Ada\n');
  });
  check('a loop, a function and a list work together', () => {
    const r = go('def sq(n):\n    return n * n\nprint([sq(i) for i in range(4)])');
    assert.equal(r.out, '[0, 1, 4, 9]\n');
  });
  check('the standard library is there', () => {
    const r = go('import math, random, datetime, json, collections\nprint(math.sqrt(16), json.dumps([1]))');
    assert.equal(r.out, '4.0 [1]\n');
  });
  check('files can be written and read back', () => {
    const r = go('with open("note.txt", "w") as f:\n    f.write("hello")\nprint(open("note.txt").read())');
    assert.equal(r.out, 'hello\n');
  });
  check('exit() ends the program quietly', () => { const r = go('print(1)\nexit()\nprint(2)'); assert.equal(r.out, '1\n'); assert.equal(r.result.ok, true); });
  check('too much output is cut with a sentence', () => {
    const r = go('for i in range(100000):\n    print("xxxxxxxxxx")');
    assert.ok(r.out.length < 260000 && r.out.includes('the output was cut here'));
  });
  check('the program can run again and again', () => {
    for (let i = 0; i < 3; i++) assert.equal(go('x = 1\nprint(x)').out, '1\n');
  });
  check('a second run does not see the variables of the first', () => {
    go('secret = 5');
    const r = go('print(secret)');
    assert.equal(r.result.error.type, 'NameError');
  });

  // ---- 3. Programs that fail: [source, error type, rule id, line]
  const broken = [
    ['if True\n    print(1)', 'SyntaxError', 'colon', 1],
    ['print("a"', 'SyntaxError', 'never_closed', 1],
    ['print("abc)', 'SyntaxError', 'unterminated_string', 1],
    ['x = (1, 2]', 'SyntaxError', 'mismatch', 1],
    ['print(1))', 'SyntaxError', 'unmatched', 1],
    ['print "hi"', 'SyntaxError', 'print_parens', 1],
    ['x = [1 2]', 'SyntaxError', 'forgot_comma', 1],
    ['if x = 3:\n    pass', 'SyntaxError', 'assign_equals', 1],
    ['1 = x', 'SyntaxError', 'cannot_assign', 1],
    ['return 5', 'SyntaxError', 'return_outside', 1],
    ['break', 'SyntaxError', 'loop_outside', 1],
    ['x = 3a', 'SyntaxError', 'bad_number', 1],
    ['print(“hi”)', 'SyntaxError', 'bad_char', 1],
    ['try:\n    x = 1\nprint(2)', 'SyntaxError', 'try_without_except', 3],
    ['if True:\nprint(1)', 'IndentationError', 'expected_indent', 2],
    ['x = 1\n    y = 2', 'IndentationError', 'unexpected_indent', 2],
    ['if True:\n        a = 1\n    b = 2', 'IndentationError', 'unindent_mismatch', 3],
    ['print(pirnt)', 'NameError', 'name_undefined', 1],
    ['def f():\n    x += 1\nf()', 'UnboundLocalError', 'unbound_local', 2],
    ['print("a" + 1)', 'TypeError', 'concat_str', 1],
    ['print(1 + "a")', 'TypeError', 'unsupported_operands', 1],
    ['x = 5\nx()', 'TypeError', 'not_callable', 2],
    ['x = None\nprint(x[0])', 'TypeError', 'not_subscriptable', 2],
    ['s = "abc"\ns[0] = "x"', 'TypeError', 'no_item_assignment', 2],
    ['print(len(5))', 'TypeError', 'no_len', 1],
    ['for i in 5:\n    pass', 'TypeError', 'not_iterable', 1],
    ['def f(a):\n    pass\nf()', 'TypeError', 'missing_args', 3],
    ['def f(a):\n    pass\nf(1, 2)', 'TypeError', 'too_many_args', 3],
    ['print("a", sepp="-")', 'TypeError', 'unexpected_kw', 1],
    ['print(1 < "a")', 'TypeError', 'not_ordered', 1],
    ['d = {[1]: 2}', 'TypeError', 'unhashable', 1],
    ['print([1, 2][1.5])', 'TypeError', 'not_integer', 1],
    ['print("a" * 1.5)', 'TypeError', 'mult_seq', 1],
    ['print(int("abc"))', 'ValueError', 'int_literal', 1],
    ['print(float("x"))', 'ValueError', 'float_literal', 1],
    ['import math\nprint(math.sqrt(-1))', 'ValueError', 'math_domain', 2],
    ['a, b = [1]', 'ValueError', 'unpack_few', 1],
    ['a, b = [1, 2, 3]', 'ValueError', 'unpack_many', 1],
    ['[1].remove(5)', 'ValueError', 'not_in_list', 1],
    ['x = [1, 2]\nprint(x[5])', 'IndexError', 'index_list', 2],
    ['print("ab"[9])', 'IndexError', 'index_string', 1],
    ['print((1, 2)[9])', 'IndexError', 'index_tuple', 1],
    ['[].pop()', 'IndexError', 'pop_empty', 1],
    ['d = {"a": 1}\nprint(d["b"])', 'KeyError', 'key_missing', 2],
    ['print(1 / 0)', 'ZeroDivisionError', 'zero_division', 1],
    ['print(5 % 0)', 'ZeroDivisionError', 'zero_division', 1],
    ['"a".foo()', 'AttributeError', 'no_attribute', 1],
    ['import math\nmath.sqroot(4)', 'AttributeError', 'module_attr', 2],
    ['import nothing_here', 'ModuleNotFoundError', 'module_missing', 1],
    ['from math import sqroot', 'ImportError', 'import_name', 1],
    ['open("missing.txt")', 'FileNotFoundError', 'file_missing', 1],
    ['def f():\n    f()\nf()', 'RecursionError', 'recursion', 2],
    ['assert 1 == 2', 'AssertionError', 'assertion', 1],
    ['print(2.0 ** 99999)', 'OverflowError', 'overflow', 1],
    ['next(iter([]))', 'StopIteration', 'stop_iteration', 1],
    ['raise ValueError("custom")', 'ValueError', 'value_other', 1],
    ['raise RuntimeError("boom")', 'RuntimeError', 'raised', 1]
  ];
  for (const [source, type, id, line] of broken) {
    check('error: ' + source.split('\n')[0].slice(0, 40) + ' -> ' + id, () => {
      const r = go(source);
      assert.equal(r.result.ok, false);
      const error = r.result.error;
      assert.equal(error.type, type);
      assert.equal(error.line, line, 'line');
      for (const lang of Errors.languages) {
        const said = Errors.explain(error, lang);
        assert.equal(said.id, id, lang);
        assert.ok(said.title && said.caption, lang);
        assert.ok(!/\{[0-9ms]\}/.test(said.title + said.caption), 'a placeholder was left in ' + lang + ': ' + said.title + ' / ' + said.caption);
      }
      assert.ok(error.full.length > 10, 'the full error is kept');
    });
  }

  check('the full error shows only the student\'s file, not the runner', () => {
    const r = go('def f():\n    return 1 / 0\nf()');
    assert.ok(r.result.error.full.includes('File "<pyviel>", line 2, in f'));
    assert.ok(!r.result.error.full.includes('pyviel-runner'));
    assert.ok(r.result.error.full.startsWith('Traceback (most recent call last):'));
    assert.ok(r.result.error.full.includes('ZeroDivisionError: division by zero'));
  });
  check('the full error of a syntax error shows the line and where', () => {
    const r = go('if True\n    print(1)');
    assert.ok(r.result.error.full.includes('SyntaxError'));
    assert.ok(r.result.error.full.includes('if True'));
  });
  check('a typo comes with the name Python suggests', () => {
    const e = go('print(pirnt)').result.error;
    assert.equal(e.suggestion, 'print');
    assert.ok(Errors.explain(e, 'it').suggestion.includes('`print`'));
    assert.ok(Errors.explain(e, 'fr').suggestion.includes('Tu voulais'));
  });
  check('the three languages really differ', () => {
    const e = go('print(1 / 0)').result.error;
    const said = Errors.languages.map(l => Errors.explain(e, l).title);
    assert.equal(new Set(said).size, 3);
  });
  check('a browser that cannot pause Python is told so, in three languages', () => {
    const error = {type: 'RuntimeError', message: 'Cannot stack switch because the Python entrypoint was a synchronous function.', line: 4, suggestion: '', full: ''};
    for (const lang of Errors.languages) {
      const said = Errors.explain(error, lang);
      assert.equal(said.id, 'old_browser');
      assert.ok(said.title.length > 20 && said.caption.length > 20);
    }
  });
  check('an unknown kind of error still gets a sentence', () => {
    const e = go('class MyTrouble(Exception):\n    pass\nraise MyTrouble("x")').result.error;
    assert.equal(Errors.explain(e, 'en').id, 'raised');
    assert.ok(Errors.explain(e, 'en').title.includes('MyTrouble'));
  });
  check('an error after some output keeps the output', () => {
    const r = go('print("before")\nprint(1 / 0)\nprint("after")');
    assert.equal(r.out, 'before\n');
    assert.equal(r.result.error.line, 2);
  });

  console.log(passed + ' Pyviel error tests passed');
})().catch(e => { console.error(e); process.exitCode = 1; });
