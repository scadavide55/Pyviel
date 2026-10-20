/* Lessons for Pyviel. No dependencies.
   Every step has a short text, a program, what you will see, and a small job to try.
   The code of a step lives here and never changes with the language; the texts live in lessons.js.
   A step with expectErrors: true is meant to show a mistake on purpose. */
(function () {
  'use strict';

  var TUTORIALS = [
    {
      title: 'Meet Pyviel',
      subtitle: 'Your very first program',
      steps: [
        {title: 'Make the computer talk', text: '', code: 'print("Hello!")', turn: ''},
        {title: 'Say more than one thing', text: '', code: 'print("Hello!")\nprint("My name is Pyviel.")\nprint("Nice to meet you.")', turn: ''},
        {title: 'When something breaks', text: '', code: 'print("Before")\nprint(pirnt)\nprint("After")', turn: '', expectErrors: true}
      ]
    }
  ];

  // Texts come from lessons.js in the chosen language (English when a lesson is missing).
  var LANG = document.documentElement.lang || 'en';
  var PACKS = window.PyvielLessons || {};
  var UI = (PACKS[LANG] || PACKS.en || {ui: {}}).ui;
  var EXPLAIN = (PACKS[LANG] || PACKS.en || {explain: {}}).explain;
  TUTORIALS.forEach(function (lesson, i) {
    var row = null;
    [PACKS[LANG], PACKS.en].forEach(function (pack) {
      if (!row && pack && pack.lessons[i] && pack.lessons[i][2].length === lesson.steps.length) row = pack.lessons[i];
    });
    if (!row) return;
    lesson.title = row[0];
    lesson.subtitle = row[1];
    lesson.steps.forEach(function (step, j) {
      var data = row[2][j];
      step.title = data[0]; step.text = data[1]; step.see = data[2]; step.turn = data[3]; step.slip = data[4];
    });
  });

  if (window.PyvielI18n) TUTORIALS.forEach(function (lesson) {
    lesson.steps.forEach(function (step) { step.code = window.PyvielI18n.code(step.code); });
  });

  // One short sentence for each line of code, so the reader knows what every line does.
  function explain(line, next) {
    var t = line.trim(), m, e = EXPLAIN;
    if (!t || !e.comment) return '';
    if (t[0] === '#') return e.comment;
    if (/^print\(/.test(t)) return e.print;
    if (/^\w+\s*=\s*input\(/.test(t)) return e.askNow;
    if (/^\w+\s*=\s*int\(input\(/.test(t)) return e.askNumber;
    if (/^import\b|^from\b.*\bimport\b/.test(t)) return e.importIt;
    if (/^if\b/.test(t)) return e.ifBlock;
    if (/^elif\b/.test(t)) return e.elifBlock;
    if (/^else\s*:/.test(t)) return e.elseBlock;
    if (/^for\b/.test(t)) return e.forLoop;
    if (/^while\b/.test(t)) return e.whileLoop;
    if ((m = t.match(/^def\s+(\w+)/))) return e.fnDef.replace('{name}', m[1]);
    if (/^return\b/.test(t)) return e.returnIt;
    if (/^break\b/.test(t)) return e.breakIt;
    if (/^continue\b/.test(t)) return e.continueIt;
    if (/^pass\b/.test(t)) return e.passIt;
    if ((m = t.match(/^(\w+)\s*(?:\+|-|\*|\/)?=\s*/))) return e.assign.replace('{name}', m[1]);
    return '';
  }
  window.PyvielTutorials = TUTORIALS;

  var panel = document.getElementById('tutorial');
  if (!panel) return;
  var $ = function (id) { return document.getElementById(id); };
  var lessonsBox = $('tutorial-lessons');
  var stepBox = $('tutorial-step');
  var toggle = $('tutorials-toggle');
  var code = $('code');
  var STORE = 'pyviel.tutorial.position', BACKUP = 'pyviel.tutorial.backup', DONE = 'pyviel.tutorial.done', VISITED = 'pyviel.visited';
  var position = {lesson: 0, step: 0}, showingStep = false, done = [];

  function read(key, fallback) {
    try { var value = JSON.parse(localStorage.getItem(key) || 'null'); return value === null ? fallback : value; } catch (e) { return fallback; }
  }
  function write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} }

  var saved = read(STORE, null);
  if (saved && Number.isInteger(saved.lesson) && Number.isInteger(saved.step) &&
      TUTORIALS[saved.lesson] && TUTORIALS[saved.lesson].steps[saved.step]) {
    position = {lesson: saved.lesson, step: saved.step};
    showingStep = true;
  }
  done = read(DONE, []);
  if (!Array.isArray(done)) done = [];

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // Reading a step aloud: the browser's own voice, in the language of the site.
  var reader = null, SPEECH = {en: 'en-US', it: 'it-IT', fr: 'fr-FR'};
  function silence() {
    reader = null;
    if (!window.speechSynthesis) return;
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  function voiceFor(lang) {
    var voices = [];
    try { voices = window.speechSynthesis.getVoices() || []; } catch (e) { return null; }
    for (var i = 0; i < voices.length; i++) {
      if (String(voices[i].lang || '').replace('_', '-').toLowerCase().indexOf(lang.slice(0, 2)) === 0) return voices[i];
    }
    return null;
  }
  function listenButton(step) {
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance !== 'function') return null;
    var said = step.title + '. ' + String(step.text).replace(/\n\n/g, ' ');
    var button = element('button', 'btn listen');
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    button.innerHTML = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 7.5h3L11 4v12L7 12.5H4z"/><path d="M14 7.5a4 4 0 0 1 0 5M16.5 5a7.5 7.5 0 0 1 0 10"/></svg>';
    var label = element('span', null, UI.listen || 'Listen');
    button.appendChild(label);
    reader = button;
    button.addEventListener('click', function () {
      var speaking = button.getAttribute('aria-pressed') === 'true';
      try { window.speechSynthesis.cancel(); } catch (e) {}
      if (speaking) {
        button.setAttribute('aria-pressed', 'false');
        label.textContent = UI.listen || 'Listen';
        return;
      }
      var speech = new SpeechSynthesisUtterance(said);
      speech.lang = SPEECH[LANG] || 'en-US';
      speech.rate = 0.95;
      var voice = voiceFor(speech.lang);
      if (voice) speech.voice = voice;
      speech.onend = speech.onerror = function () {
        button.setAttribute('aria-pressed', 'false');
        label.textContent = UI.listen || 'Listen';
      };
      button.setAttribute('aria-pressed', 'true');
      label.textContent = UI.stopReading || 'Stop reading';
      window.speechSynthesis.speak(speech);
    });
    return button;
  }

  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (!open) silence();
    showStartHere();
  }
  // In the empty output, a newcomer sees where to begin: the lessons are otherwise one small icon.
  function showStartHere() {
    var spot = $('output-placeholder');
    if (!spot) return;
    var button = spot.querySelector('.start-lessons');
    var wanted = !done.length && panel.hidden;
    if (!wanted) { if (button) button.remove(); return; }
    if (button) return;
    button = element('button', 'btn start-lessons', UI.startLessons || 'New here? Start with lesson 1');
    button.type = 'button';
    button.addEventListener('click', function () {
      showTab('lessons');
      setOpen(true);
      goTo(resumePoint());
    });
    spot.appendChild(button);
  }
  function showTab(name) {
    var lessons = name === 'lessons';
    $('tab-lessons').setAttribute('aria-selected', String(lessons));
    $('tab-examples').setAttribute('aria-selected', String(!lessons));
    $('lessons-view').hidden = !lessons;
    $('examples-view').hidden = lessons;
  }
  toggle.addEventListener('click', function () { setOpen(panel.hidden); });
  $('tutorial-close').addEventListener('click', function () { setOpen(false); });
  $('tab-lessons').addEventListener('click', function () { showTab('lessons'); });
  $('tab-examples').addEventListener('click', function () { showTab('examples'); });
  document.querySelectorAll('[data-example]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (window.innerWidth <= 900) setOpen(false);
    });
  });

  function render() {
    drawLessons();
    stepBox.hidden = !showingStep;
    lessonsBox.hidden = showingStep;
    if (showingStep) drawStep();
  }

  function fill(text, values) {
    return String(text).replace(/\{(\w+)\}/g, function (_, key) { return values[key]; });
  }
  function firstUndone() {
    for (var i = 0; i < TUTORIALS.length; i++) if (done.indexOf(i) < 0) return i;
    return -1;
  }
  // Where "Continue" leads: the step you were on, unless that lesson is finished.
  function resumePoint() {
    if (done.indexOf(position.lesson) < 0) return {lesson: position.lesson, step: position.step};
    return {lesson: Math.max(firstUndone(), 0), step: 0};
  }
  function goTo(point) {
    position = {lesson: point.lesson, step: point.step};
    showingStep = true;
    write(STORE, position);
    render();
  }

  function drawSummary() {
    var total = TUTORIALS.length;
    var box = element('div', 'lesson-summary');
    box.appendChild(element('div', 'summary-text', fill(UI.lessonsDone || '{done} of {total} lessons done', {done: done.length, total: total})));
    var meter = element('div', 'meter');
    meter.setAttribute('aria-hidden', 'true');
    var fillBar = element('i');
    fillBar.style.width = Math.round(100 * done.length / total) + '%';
    meter.appendChild(fillBar);
    box.appendChild(meter);
    if (done.length >= total) {
      box.className += ' finished';
      box.appendChild(element('strong', 'finish-title', UI.allDoneTitle || 'You know the whole language!'));
      box.appendChild(element('p', null, UI.allDoneText || 'Now open the examples, change them, and make a program of your own.'));
      var examples = element('button', 'btn primary', UI.seeExamples || 'See the examples');
      examples.type = 'button';
      examples.addEventListener('click', function () { showTab('examples'); });
      box.appendChild(examples);
    } else {
      var point = resumePoint();
      var label = done.length || point.step ? fill(UI.continueLesson || 'Continue: lesson {n}', {n: point.lesson + 1}) + ' · ' + TUTORIALS[point.lesson].title
        : (UI.startLessons || 'New here? Start with lesson 1');
      var go = element('button', 'btn primary continue', label);
      go.type = 'button';
      go.addEventListener('click', function () { goTo(point); });
      box.appendChild(go);
    }
    lessonsBox.appendChild(box);
  }

  function drawLessons() {
    lessonsBox.innerHTML = '';
    drawSummary();
    TUTORIALS.forEach(function (lesson, index) {
      var button = element('button', 'tutorial-lesson' + (done.indexOf(index) >= 0 ? ' done' : ''));
      button.type = 'button';
      button.setAttribute('aria-current', String(index === position.lesson));
      button.appendChild(element('span', 'lesson-number', done.indexOf(index) >= 0 ? '✓' : String(index + 1)));
      var text = element('span', 'lesson-text');
      text.appendChild(element('span', 'lesson-title', lesson.title));
      text.appendChild(element('small', null, lesson.subtitle));
      button.appendChild(text);
      button.appendChild(element('span', 'lesson-count', lesson.steps.length + ' ' + (UI.steps || 'steps')));
      button.addEventListener('click', function () {
        position = {lesson: index, step: 0};
        showingStep = true;
        write(STORE, position);
        render();
      });
      lessonsBox.appendChild(button);
    });
  }

  function markDone(lessonIndex) {
    if (done.indexOf(lessonIndex) < 0) { done.push(lessonIndex); write(DONE, done); }
    showStartHere();
  }

  function drawStep() {
    silence();
    var lesson = TUTORIALS[position.lesson], step = lesson.steps[position.step];
    var last = position.step === lesson.steps.length - 1;
    stepBox.innerHTML = '';
    stepBox.scrollTop = 0;

    var back = element('button', 'back-link', '← All lessons');
    back.type = 'button';
    back.addEventListener('click', function () { showingStep = false; render(); });
    stepBox.appendChild(back);

    var bar = element('div', 'progress');
    bar.setAttribute('aria-hidden', 'true');
    lesson.steps.forEach(function (_, i) { bar.appendChild(element('i', i < position.step ? 'on' : i === position.step ? 'here' : '')); });
    stepBox.appendChild(bar);
    stepBox.appendChild(element('div', 'step-count', (UI.lesson || 'Lesson') + ' ' + (position.lesson + 1) + ': ' + lesson.title + ' · ' + (UI.step || 'step') + ' ' + (position.step + 1) + ' ' + (UI.of || 'of') + ' ' + lesson.steps.length));
    stepBox.appendChild(element('h3', null, step.title));
    String(step.text).split('\n\n').forEach(function (paragraph) {
      stepBox.appendChild(element('p', 'tutorial-text', paragraph));
    });
    var listenRow = listenButton(step);
    if (listenRow) stepBox.appendChild(listenRow);

    stepBox.appendChild(element('div', 'block-title', UI.lineByLine || 'Line by line'));
    var rows = element('div', 'tutorial-code');
    var codeLines = step.code.split('\n');
    codeLines.forEach(function (line, lineIndex) {
      if (!line.trim()) return;
      var row = element('div', 'code-row');
      row.appendChild(element('pre', 'src', line));
      var note = explain(line, codeLines[lineIndex + 1]);
      if (note) row.appendChild(element('div', 'note', note));
      rows.appendChild(row);
    });
    stepBox.appendChild(rows);

    if (step.see) {
      var see = element('div', 'see-box');
      see.appendChild(element('div', 'block-title', UI.see || 'What you will see'));
      see.appendChild(element('pre', 'screen', step.see));
      stepBox.appendChild(see);
    }
    if (step.turn) {
      var turn = element('p', 'your-turn');
      turn.appendChild(element('b', null, UI.turn || 'Your turn'));
      turn.appendChild(document.createTextNode(step.turn));
      stepBox.appendChild(turn);
    }
    if (step.slip) {
      var slip = element('p', 'slip-box');
      slip.appendChild(element('b', null, UI.slip || 'Watch out'));
      slip.appendChild(document.createTextNode(step.slip));
      stepBox.appendChild(slip);
    }

    function keepBackup() {
      try { if (code.value.trim() && code.value !== step.code) localStorage.setItem(BACKUP, code.value); } catch (e) {}
    }
    function afterLoad(message) {
      code.dispatchEvent(new Event('input', {bubbles: true}));
      code.scrollTop = 0;
      code.focus();
      if (window.innerWidth <= 900) setOpen(false);
      document.dispatchEvent(new CustomEvent('pyviel:notice', {detail: message}));
      drawStep();
    }
    var actions = element('div', 'step-actions');
    var typeIt = element('button', 'btn primary type-it', UI.typeIt || 'Type it yourself');
    typeIt.type = 'button';
    typeIt.addEventListener('click', function () {
      keepBackup();
      code.value = '\nend\n';
      code.setSelectionRange(0, 0);
      afterLoad(UI.typeNote || 'Empty page ready. Type the lines, then press Run.');
      code.setSelectionRange(0, 0);
    });
    actions.appendChild(typeIt);
    var open = element('button', 'btn put-code', UI.putIt || 'Put it in the editor');
    open.type = 'button';
    open.addEventListener('click', function () {
      keepBackup();
      code.value = step.code;
      code.setSelectionRange(0, 0);
      var run = $('run');
      run.classList.add('nudge');
      setTimeout(function () { run.classList.remove('nudge'); }, 2400);
      afterLoad('Done. Now press the green Run button.');
    });
    actions.appendChild(open);
    stepBox.appendChild(actions);

    var nav = element('div', 'nav-row');
    var previous = element('button', 'btn', '← Back');
    previous.type = 'button';
    previous.disabled = position.lesson === 0 && position.step === 0;
    previous.addEventListener('click', function () {
      if (position.step > 0) position.step--;
      else if (position.lesson > 0) { position.lesson--; position.step = TUTORIALS[position.lesson].steps.length - 1; }
      write(STORE, position); render();
    });
    nav.appendChild(previous);

    var next = element('button', 'btn', last ? (position.lesson === TUTORIALS.length - 1 ? 'Finish' : 'Next lesson →') : 'Next step →');
    next.type = 'button';
    next.addEventListener('click', function () {
      if (!last) position.step++;
      else {
        markDone(position.lesson);
        if (position.lesson < TUTORIALS.length - 1) { position.lesson++; position.step = 0; }
        else { showingStep = false; document.dispatchEvent(new CustomEvent('pyviel:notice', {detail: 'You finished every lesson. Now go and make your own program.'})); }
      }
      write(STORE, position); render();
    });
    nav.appendChild(next);
    stepBox.appendChild(nav);

    var backup = null;
    try { backup = localStorage.getItem(BACKUP); } catch (e) {}
    if (backup !== null) {
      var restore = element('button', 'restore-code', 'Bring back the code I had before');
      restore.type = 'button';
      restore.addEventListener('click', function () {
        code.value = backup;
        code.dispatchEvent(new Event('input', {bubbles: true}));
        try { localStorage.removeItem(BACKUP); } catch (e) {}
        code.focus();
        drawStep();
      });
      stepBox.appendChild(restore);
    }
  }

  render();

  // A first visit opens the lessons on a big screen. After that the panel stays closed until asked for.
  var first = true;
  try { first = localStorage.getItem(VISITED) === null; localStorage.setItem(VISITED, '1'); } catch (e) {}
  if (first && window.innerWidth > 900) setOpen(true);
  showStartHere();
})();
