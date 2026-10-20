/* Runs inside the page (sent by tools/page-test.js). Returns [[name, ok, detail], ...]. */
(async function () {
  const $ = id => document.getElementById(id);
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const results = [];
  const check = (name, ok, detail) => results.push([name, !!ok, ok ? '' : String(detail === undefined ? '' : detail)]);
  async function until(fn, ms = 10000) { const t = Date.now(); while (Date.now() - t < ms) { if (fn()) return true; await wait(30); } return false; }
  const code = $('code');
  const idle = () => document.body.dataset.runState === 'idle';
  async function run(source, ms) {
    code.value = source; code.dispatchEvent(new Event('input', {bubbles: true}));
    $('run').click();
    await until(() => !idle(), 1500);
    return until(idle, ms || 10000);
  }
  async function answer(text, promptPart) {
    const asked = await until(() => !$('answer-bar').hidden && (!promptPart || $('answer-prompt').textContent.includes(promptPart)));
    if (!asked) return false;
    $('answer-input').value = text; $('answer-bar').requestSubmit();
    await until(() => $('answer-bar').hidden);
    return true;
  }

  check('the page is cross-origin isolated (input and Stop need it)', window.crossOriginIsolated === true);
  check('the version sits beside the name and is the one of the code', $('brand-version').textContent === 'v' + Pyviel.VERSION.replace(/-alpha$|-beta$/, ''), $('brand-version').textContent);
  check('the editor starts with a Python program', /print\(/.test(code.value));
  const version = await Pyviel.start();
  check('Python loads in the worker', /^3\d\d\./.test(version), version);

  // a program that works
  await run('print("Hello")\nprint(2 + 3)');
  check('a program runs and prints', $('out').textContent === 'Hello\n5\n', JSON.stringify($('out').textContent));
  check('no problems for a good program', /No problems/.test($('problems').innerText));

  // a program that breaks
  await run('print("Before")\nprint(pirnt)\nprint("After")');
  check('the output before the error stays', $('out').textContent === 'Before\n', $('out').textContent);
  const item = document.querySelector('.problem-item');
  check('the error is explained in a sentence with the line', !!item && /Line 2/.test(item.innerText) && /does not exist yet/.test(item.innerText), item && item.innerText);
  check('the caption says what to do and what Python suggests', !!item && /Did you mean `print`/.test(item.innerText), item && item.innerText);
  const toggle = document.querySelector('.full-toggle');
  const full = document.querySelector('.full-error');
  check('the full error is hidden until asked for', !!toggle && !!full && full.hidden === true);
  toggle.click();
  check('View full error shows the whole Python error', full.hidden === false && /Traceback \(most recent call last\)/.test(full.textContent) && /NameError: name 'pirnt' is not defined/.test(full.textContent), full.textContent);
  check('the button says Hide full error when open', /Hide/.test(toggle.textContent), toggle.textContent);
  toggle.click();
  check('and closes again', full.hidden === true);
  check('the faulty line is marked in the margin', /error/.test(($('gutter').children[1] || {}).className || ''), ($('gutter').children[1] || {}).className);

  // input
  code.value = 'name = input("Name? ")\nage = int(input("Age? "))\nprint(name, "is", age + 1, "next year")';
  code.dispatchEvent(new Event('input', {bubbles: true})); $('run').click();
  check('the first question appears', await answer('Ada', 'Name'));
  check('the second question appears', await answer('9', 'Age'));
  await until(idle);
  check('answers reach the program and stay on screen', $('out').textContent === 'Name? Ada\nAge? 9\nAda is 10 next year\n', JSON.stringify($('out').textContent));

  // a wrong answer is an error with a friendly sentence
  code.value = 'n = int(input("Number? "))\nprint(n)';
  code.dispatchEvent(new Event('input', {bubbles: true})); $('run').click();
  await answer('abc', 'Number'); await until(idle);
  check('a text that is not a number explains itself', /whole number/.test(document.querySelector('.problem-item').innerText), document.querySelector('.problem-item') && document.querySelector('.problem-item').innerText);

  // Stop
  await run('n = 0', 3000);
  code.value = 'n = 0\nwhile True:\n    n += 1'; code.dispatchEvent(new Event('input', {bubbles: true})); $('run').click();
  await until(() => document.body.dataset.runState === 'running'); await wait(300);
  const started = Date.now(); $('stop').click();
  const stopped = await until(idle, 6000);
  check('Stop ends an endless loop quickly', stopped && Date.now() - started < 2000, Date.now() - started);
  check('and says so', /stopped|fermato|arrêté/.test($('summary').textContent), $('summary').textContent);
  await run('print("again")');
  check('the next run works after Stop', $('out').textContent === 'again\n', $('out').textContent);
  code.value = 'x = input("Wait: ")\nprint("got", x)'; code.dispatchEvent(new Event('input', {bubbles: true})); $('run').click();
  await until(() => !$('answer-bar').hidden); $('stop').click();
  check('Stop works while the program waits for an answer', await until(idle, 5000) && $('out').textContent.indexOf('got') < 0, $('out').textContent);
  await run('print("fine")');
  check('and the next run is fine', $('out').textContent === 'fine\n');

  // too much output
  await run('for i in range(50000):\n    print("xxxxxxxxxxxxxxxxxxxx")', 20000);
  check('a flood of output does not freeze the page', idle() && $('out').textContent.length < 250000, $('out').textContent.length);

  // Esc is Stop
  code.value = 'while True:\n    pass'; code.dispatchEvent(new Event('input', {bubbles: true})); $('run').click();
  await until(() => document.body.dataset.runState === 'running'); await wait(200);
  document.dispatchEvent(new KeyboardEvent('keydown', {key: 'Escape', bubbles: true, cancelable: true}));
  check('Escape stops a program', await until(idle, 4000));

  // the language of the explanation follows the page
  document.documentElement.lang = 'it';
  await run('print(1 / 0)');
  const it = document.querySelector('.problem-item');
  check('the explanation can be Italian', !!it && /diviso per zero/.test(it.innerText) && /Riga 1/.test(it.innerText), it && it.innerText);
  check('and the button is Italian too', /Mostra l'errore completo/.test(document.querySelector('.full-toggle').textContent), document.querySelector('.full-toggle').textContent);
  document.documentElement.lang = 'fr';
  await run('print(1 / 0)');
  check('and French', /zéro/.test(document.querySelector('.problem-item').innerText) && /Voir l'erreur complète/.test(document.querySelector('.full-toggle').textContent), document.querySelector('.problem-item').innerText);
  document.documentElement.lang = 'en';

  // a syntax error never runs anything
  await run('print("a")\nif True\n    print("b")');
  check('a syntax error runs nothing and says where', $('out').textContent === '' && /Line 2/.test(document.querySelector('.problem-item').innerText) && /colon/.test(document.querySelector('.problem-item').innerText), document.querySelector('.problem-item').innerText + '|' + $('out').textContent);

  // lessons
  if ($('tutorial').hidden) $('tutorials-toggle').click();
  check('the lessons panel opens', !$('tutorial').hidden);
  const lessons = document.querySelectorAll('.tutorial-lesson');
  const course = window.PyvielTutorials;
  check('the course is big: 50 lessons or more', lessons.length >= 50 && course.length === lessons.length, lessons.length);
  check('and has 200 steps or more', course.reduce((n, l) => n + l.steps.length, 0) >= 200);
  check('lessons are grouped under stage headings', document.querySelectorAll('.lesson-group').length >= 5, document.querySelectorAll('.lesson-group').length);
  lessons[0].click();
  check('a lesson step shows its code line by line with notes', document.querySelectorAll('.tutorial-code .code-row .note').length >= 1);
  check('and what you will see', !!document.querySelector('.see-box'));
  document.querySelector('.step-actions .put-code').click();
  check('Put it in the editor loads the step', /print\(/.test(code.value));
  const stepButtons = () => document.querySelectorAll('.nav-row .btn');
  for (let i = 0; i < 4; i++) stepButtons()[1].click();
  document.querySelector('.step-actions .put-code').click();
  await run(code.value);
  check('the lesson about a mistake shows the friendly error', !!document.querySelector('.full-toggle') && /pirnt/.test(document.querySelector('.problem-item').innerText), document.querySelector('.problem-item') && document.querySelector('.problem-item').innerText);
  check('the step says what you will see, with the error sentence', course[0].steps[4].see.indexOf('⚠') >= 0, course[0].steps[4].see);

  // every program of every step runs here, in the real page (the ones that ask questions are checked by the build)
  let ran = 0, wrong = [];
  for (const lesson of course) {
    for (const step of lesson.steps) {
      if (/\binput\(/.test(step.code)) continue;
      const finished = await run(step.code, 20000);
      ran++;
      const failed = !!document.querySelector('.problem-item');
      if (!finished || failed !== !!step.error) wrong.push(lesson.title + ' / ' + step.title + (failed ? ' (stopped: ' + document.querySelector('.problem-item').innerText.split('\n').slice(0, 3).join(' ') + ')' : ' (did not stop)'));
    }
  }
  check('every step program that needs no typing behaves in the page (' + ran + ' run)', wrong.length === 0, wrong.slice(0, 6).join(' | '));

  // a very long line does not break the layout
  check('the page does not scroll sideways', document.documentElement.scrollWidth <= window.innerWidth + 1, document.documentElement.scrollWidth + ' vs ' + window.innerWidth);
  return results;
})()
