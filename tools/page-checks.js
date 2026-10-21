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
  check('the website says Web beside the name, the app does not', window.pyvielDesktop ? getComputedStyle($('brand-web')).display === 'none' : getComputedStyle($('brand-web')).display !== 'none');
  check('the editor starts with a Python program', /print\(/.test(code.value));

  // the editor's own edits: Enter indents after a colon, steps back after return, and Cmd/Ctrl+Z can undo them
  const key = (k, extra) => code.dispatchEvent(new KeyboardEvent('keydown', Object.assign({key: k, bubbles: true, cancelable: true}, extra || {})));
  const kept = code.value;
  code.focus(); code.value = 'def f(n):'; code.dispatchEvent(new Event('input', {bubbles: true}));
  code.setSelectionRange(code.value.length, code.value.length); key('Enter');
  check('Enter after a colon pushes the next line in', code.value === 'def f(n):\n    ', JSON.stringify(code.value));
  document.execCommand('insertText', false, 'return n'); key('Enter');
  check('Enter after return steps back out of the block', code.value === 'def f(n):\n    return n\n', JSON.stringify(code.value));
  document.execCommand('undo');
  check('and the editor\'s own Enter can be undone', code.value === 'def f(n):\n    return n', JSON.stringify(code.value));
  code.value = 'print("mine")'; code.dispatchEvent(new Event('input', {bubbles: true}));
  $('examples').value = 'loop'; $('examples').dispatchEvent(new Event('change'));
  const opened = code.value !== 'print("mine")';
  code.focus(); document.execCommand('undo');
  check('opening an example can be undone, so no code is lost', opened && code.value === 'print("mine")', JSON.stringify(code.value));
  code.value = kept; code.dispatchEvent(new Event('input', {bubbles: true}));
  const version = await Pyviel.start();
  check('Python loads', /^(3\d\d\.|3\.\d+\.\d+)/.test(version), version);

  // a program that works
  await run('print("Hello")\nprint(2 + 3)');
  check('a program runs and prints', $('out').textContent === 'Hello\n5\n', JSON.stringify($('out').textContent));
  check('no problems for a good program', /No problems/.test($('problems').innerText));

  check('a screen reader hears what the program printed when it ends', await until(() => /Hello/.test($('run-announce').textContent), 2000), $('run-announce').textContent);
  const usedRun = await Pyviel.runAsync('# for i in x\nprint("for")\nprint(20 + 22)');
  check('the run says what the program really uses (not what is in quotes or comments)', usedRun.used.includes('+') && !usedRun.used.includes('for'), JSON.stringify(usedRun.used));
  const shortcut = window.PyvielCheck.check({out: '42', uses: ['+']}, '42\n', 'print("42")', ['print']);
  check('printing the answer is not enough when the task asks for an idea', !shortcut.ok && shortcut.why === 'uses' && shortcut.missing[0] === '+');

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

  // examples: many, grouped, searchable, and a click opens and runs one
  check('the page loads only the course of its language', [...document.scripts].some(s => /course-en\.js/.test(s.src)) && ![...document.scripts].some(s => /\/course\.js/.test(s.src)));
  const cards = document.querySelectorAll('#example-list [data-example]');
  check('there are 30 examples or more, in groups', cards.length >= 30 && document.querySelectorAll('.example-group').length >= 6, cards.length);
  check('and the phone menu lists them all', $('examples').querySelectorAll('option[value]:not([value=""])').length === cards.length);
  const search = $('example-search');
  search.value = 'GAMES'; search.dispatchEvent(new Event('input'));
  const found = [...cards].filter(b => !b.hidden).map(b => b.dataset.example);
  check('searching finds the examples of a group', found.length >= 3 && found.includes('guess'), found.join(','));
  search.value = 'nothing like this'; search.dispatchEvent(new Event('input'));
  check('and says so when nothing matches', !$('example-none').hidden && [...cards].every(b => b.hidden));
  search.value = ''; search.dispatchEvent(new Event('input'));
  document.querySelector('[data-example="pyramid"]').click();
  await until(() => !idle(), 1500); await until(idle, 10000);
  check('a click opens the example and runs it', $('file-name').value === 'pyramid.py' && /\*{11}/.test($('out').textContent), $('file-name').value + ' | ' + $('out').textContent.slice(0, 80));

  // lessons
  if ($('tutorial').hidden) $('tutorials-toggle').click();
  check('the lessons panel opens', !$('tutorial').hidden);
  const lessons = document.querySelectorAll('.tutorial-lesson');
  const course = window.PyvielTutorials;
  check('the course is big: 50 lessons or more', lessons.length >= 50 && course.length === lessons.length, lessons.length);
  check('and has 200 steps or more', course.reduce((n, l) => n + l.steps.length, 0) >= 200);
  check('lessons are grouped under stage headings', document.querySelectorAll('.lesson-group').length >= 5, document.querySelectorAll('.lesson-group').length);
  lessons[0].click();
  const phaseTab = i => document.querySelectorAll('.phase-tab')[i];
  check('a step has three phases: learn, try it, your turn', document.querySelectorAll('.phase-tab').length === 3 && phaseTab(0).classList.contains('current'));
  check('the step explains what is new, before the program', !!document.querySelector('.new-words .new-word-name') && document.querySelector('.new-words').compareDocumentPosition(document.querySelector('.tutorial-code')) & Node.DOCUMENT_POSITION_FOLLOWING);
  check('the first phase shows the code line by line with notes', document.querySelectorAll('.tutorial-code .code-row .note').length >= 1);
  check('before the last phase there is one way on, not two', !!document.querySelector('.big-next.to-try') && !document.querySelector('.nav-row .next-step'));
  document.querySelector('.big-next.to-try').click();
  check('the second phase shows the program and what you will see', phaseTab(1).classList.contains('current') && !!document.querySelector('.tutorial-code.plain') && !!document.querySelector('.see-box'));
  check('the result stays hidden until the student has thought about it', !!document.querySelector('.predict') && !document.querySelector('.see-box .screen'));
  const options = document.querySelectorAll('.choices .choice');
  check('"Think first" offers three answers to pick from', options.length === 3, options.length);
  const quotesOne = course[0].steps[0].choices.why.indexOf('quotes');
  options[quotesOne].click();
  check('a wrong guess is told kindly, and the real result is shown', !!document.querySelector('.guess-said.no') && !!document.querySelector('.see-box .screen'));
  check('and the mistake behind it is explained (the quotes do not show)', /quotes do not show/.test(document.querySelector('.guess-said.no').textContent), document.querySelector('.guess-said.no').textContent);
  check('more than half of the steps ask a real question', course.reduce((n, l) => n + l.steps.filter(s => s.choices).length, 0) > 150);
  document.querySelector('.step-actions .put-code').click();
  check('Put it in the editor loads the step', /print\(/.test(code.value));
  // a practice task: wrong answer, hint, solution, right answer
  const task = course[0].steps[0].task;
  check('every step has a practice task with a hint', course.every(l => l.steps.every(s => s.task && s.task.hint)));
  code.value = 'print("left over")'; code.dispatchEvent(new Event('input', {bubbles: true}));
  document.querySelector('.big-next.to-do').click();
  check('the last phase is the task', phaseTab(2).classList.contains('current') && !!document.querySelector('.exercise'));
  check('opening the task puts its starting code in the editor by itself', code.value === task.start, code.value);
  check('and the code that was there can come back', !!document.querySelector('.restore-code'));
  code.value = 'print("not the answer")'; code.dispatchEvent(new Event('input', {bubbles: true}));
  document.querySelector('.check-task').click();
  for (let i = 0; i < 100 && !document.querySelector('.exercise-result.no, .exercise-result.yes'); i++) await new Promise(r => setTimeout(r, 100));
  check('a wrong answer is explained and shows what the program printed', !!document.querySelector('.exercise-result.no') && /not the answer/.test(document.querySelector('.exercise-result').textContent), document.querySelector('.exercise-result') && document.querySelector('.exercise-result').textContent);
  check('and points at the first line that differs', !!document.querySelector('.diff-line'));
  check('one wrong check is not called stuck yet', !document.querySelector('.stuck'));
  code.value = 'print("good morning")'; code.dispatchEvent(new Event('input', {bubbles: true}));
  document.querySelector('.check-task').click();
  for (let i = 0; i < 100 && !document.querySelector('.exercise-result.no .diff-line'); i++) await new Promise(r => setTimeout(r, 100));
  check('an answer that is almost right says what small thing differs (capital letters)', /capital/.test((document.querySelector('.near-miss') || {}).textContent || ''), (document.querySelector('.exercise-result') || {}).textContent);
  check('an answer that is almost right is not called stuck', !document.querySelector('.stuck'));
  code.value = 'print("something else")'; code.dispatchEvent(new Event('input', {bubbles: true}));
  document.querySelector('.check-task').click();
  for (let i = 0; i < 100 && !/something else/.test((document.querySelector('.exercise-result.no') || {}).textContent || ''); i++) await new Promise(r => setTimeout(r, 100));
  check('after more wrong checks, a way forward that is not the answer', !!document.querySelector('.stuck .stuck-buttons button'));
  // a loop that never ends: the check can be stopped, and the next check works
  code.value = 'n = 1\nwhile n < 5:\n    print(n)'; code.dispatchEvent(new Event('input', {bubbles: true}));
  document.querySelector('.check-task').click();
  await new Promise(r => setTimeout(r, 600));
  check('while a check runs it has its own Stop, and Check and Run wait', !!document.querySelector('.stop-check') && document.querySelector('.check-task').disabled && document.body.dataset.checking === '1');
  document.querySelector('.stop-check').click();
  for (let i = 0; i < 100 && !/stopped the check/.test((document.querySelector('.exercise-result') || {}).textContent || ''); i++) await new Promise(r => setTimeout(r, 100));
  check('Stop ends a check that never finishes', /stopped the check/.test(document.querySelector('.exercise-result').textContent) && !document.querySelector('.check-task').disabled && !document.body.dataset.checking, document.querySelector('.exercise-result').textContent);
  document.querySelector('.start-task').click();
  check('Start over puts the starting code back', code.value === task.start);
  document.querySelector('.hint-task').click();
  check('the hint opens', !!document.querySelector('.hint-box'));
  check('there is no solution to show: no button, and none in what the page loads', !document.querySelector('.solution-task') && window.PyvielCourse.lessons.every(l => l.steps.every(s => !s.ex || s.ex.sol === undefined)));
  // the tests take the solution from course.js, which the page itself never loads
  const withSolutions = {};
  new Function('window', await (await fetch("course.js")).text())(withSolutions);
  code.value = withSolutions.PyvielCourse.lessons[0].steps[0].ex.sol.en; code.dispatchEvent(new Event('input', {bubbles: true}));
  document.querySelector('.check-task').click();
  for (let i = 0; i < 100 && !document.querySelector('.exercise-result.yes'); i++) await new Promise(r => setTimeout(r, 100));
  check('the right answer is recognised and remembered', !!document.querySelector('.exercise-result.yes') && !!document.querySelector('.solved-tag') && !!document.querySelector('.progress .solved'));
  check('and the next step is the button to press', !!document.querySelector('.nav-row .next-step.primary'));
  document.querySelector('.back-link').click();
  check('the list counts read and solved apart, and says what is left in a lesson', /read/.test(document.querySelector('.lesson-summary').textContent) && /1 of \d+ solved/.test(document.querySelector('.tutorial-lesson .lesson-count').textContent), document.querySelector('.lesson-summary').textContent + ' | ' + document.querySelector('.tutorial-lesson .lesson-count').textContent);
  document.querySelectorAll('.tutorial-lesson')[0].click();
  // on to step 5: the next-step button lives in the last phase
  for (let i = 0; i < 4; i++) { phaseTab(2).click(); document.querySelector('.nav-row .next-step').click(); }
  document.querySelector('.back-link').click();
  document.querySelectorAll('.tutorial-lesson')[1].click();
  const review = document.querySelector('.review');
  check('a lesson starts with a question on the lesson before', !!review && review.querySelectorAll('.choice').length === 3);
  review.querySelectorAll('.choice')[course[0].steps.filter(s => s.choices).pop().choices.right].click();
  check('and a right answer is told', !!document.querySelector('.review .guess-said.yes'));
  check('lesson 2 has no older lesson to ask about', document.querySelectorAll('.review').length === 1);
  document.querySelector('.back-link').click();
  document.querySelectorAll('.tutorial-lesson')[5].click();
  check('from lesson 6, a second question comes from four lessons back', document.querySelectorAll('.review').length === 2 && /lesson 2:/.test(document.querySelectorAll('.review')[1].textContent), document.querySelectorAll('.review').length);
  document.querySelector('.back-link').click();
  document.querySelectorAll('.tutorial-lesson')[0].click();
  for (let i = 0; i < 4; i++) { phaseTab(2).click(); document.querySelector('.nav-row .next-step').click(); }
  check('a new step opens on its first phase', phaseTab(0).classList.contains('current') && /step 5 of/.test(document.querySelector('.step-count') ? document.querySelector('.step-count').textContent : ''), document.querySelector('.step-count') && document.querySelector('.step-count').textContent);
  phaseTab(1).click();
  document.querySelector('.step-actions .put-code').click();
  await run(code.value);
  check('the lesson about a mistake shows the friendly error', !!document.querySelector('.full-toggle') && /prnt/.test(document.querySelector('.problem-item').innerText), document.querySelector('.problem-item') && document.querySelector('.problem-item').innerText);
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

  // every task: its solution passes, with its typed answers, through the page's own Python and check
  // (the build proves the same in Node; this proves the page agrees)
  const lang = document.documentElement.lang || 'en';
  let solvedHere = 0;
  const unsolved = [];
  for (const [li, lesson] of course.entries()) {
    for (const [si, step] of lesson.steps.entries()) {
      const task = step.task, solution = withSolutions.PyvielCourse.lessons[li].steps[si].ex.sol[lang];
      const answers = (task.answers || []).slice();
      const got = await window.Pyviel.runAsync(solution, {input: () => (answers.length ? answers.shift() : null)});
      const verdict = window.PyvielCheck.check(task.spec, got.text, solution, got.used);
      if (verdict.ok && !got.problems.length) solvedHere++;
      else unsolved.push((li + 1) + '.' + (si + 1) + ' ' + (got.problems.length ? got.problems[0].message : verdict.why));
    }
  }
  check('every task can be solved in the page (' + solvedHere + ' solutions checked)', unsolved.length === 0, unsolved.slice(0, 6).join(' | '));

  const nameBox = $('file-name').getBoundingClientRect(), tools = document.querySelector('.file-tools').getBoundingClientRect();
  check('the file name does not run over the buttons next to it', nameBox.right <= tools.left + 1 || nameBox.top !== tools.top, nameBox.right + ' vs ' + tools.left);

  // a very long line does not break the layout
  check('the page does not scroll sideways', document.documentElement.scrollWidth <= window.innerWidth + 1, document.documentElement.scrollWidth + ' vs ' + window.innerWidth);
  return results;
})()
