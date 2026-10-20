/* Local-only workspace tools. No dependencies and no changes to the engine. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var t = (window.PyvielI18n && window.PyvielI18n.t) || function (text) { return text; };
  var code = $('code'), highlight = $('highlight'), out = $('out');
  var filename = 'untitled.py', toastTimer, lastRun = false, dirty = false;
  var keywords = new Set('and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield match case'.split(' '));
  var values = new Set(['True', 'False', 'None']);
  var builtins = new Set('print input len range int float str bool list dict set tuple abs min max sum round sorted reversed enumerate zip map filter open type isinstance any all'.split(' '));
  var names = {hello: 'hello.py', questions: 'questions.py', age: 'age.py', loop: 'times_table.py', lists: 'pets.py', functions: 'functions.py', errors: 'mistakes.py'};

  function escapeHTML(text) {
    return text.replace(/[&<>"']/g, function (c) { return {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]; });
  }

  function paint() {
    // Strings and comments are consumed first, so a keyword inside them stays text.
    var token = /#[^\n]*|[rRbBfFuU]{0,2}(?:"""[\s\S]*?(?:"""|$)|\'\'\'[\s\S]*?(?:\'\'\'|$)|"(?:\\[^\n]|[^"\\\n])*"?|'(?:\\[^\n]|[^'\\\n])*'?)|\b\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?\b|@[A-Za-z_][\w.]*|\b[A-Za-z_][A-Za-z_0-9]*\b|[=<>!+*\/%{}(),\[\]:.\-&|^~]/g;
    var source = code.value, html = '', last = 0, match;
    while ((match = token.exec(source))) {
      html += escapeHTML(source.slice(last, match.index));
      var word = match[0], kind = '';
      if (word[0] === '#') kind = 'comment';
      else if (/^[rRbBfFuU]{0,2}["']/.test(word)) kind = 'string';
      else if (/^\d/.test(word)) kind = 'number';
      else if (word[0] === '@') kind = 'keyword';
      else if (keywords.has(word)) kind = 'keyword';
      else if (values.has(word)) kind = 'value';
      else if (builtins.has(word) && /^[ \t]*\(/.test(source.slice(token.lastIndex))) kind = 'value';
      else if (/^[=<>!+*\/%{}(),\[\]:.\-&|^~]$/.test(word)) kind = 'operator';
      html += kind ? '<span class="tok-' + kind + '">' + escapeHTML(word) + '</span>' : escapeHTML(word);
      last = token.lastIndex;
    }
    highlight.innerHTML = html + escapeHTML(source.slice(last)) + '\n';
    syncScroll();
    position();
  }

  function syncScroll() {
    highlight.scrollTop = code.scrollTop;
    highlight.scrollLeft = code.scrollLeft;
    $('gutter').scrollTop = code.scrollTop;
    position();
  }

  function position() {
    var before = code.value.slice(0, code.selectionStart);
    var line = before.split('\n').length;
    var column = before.length - before.lastIndexOf('\n');
    $('cursor-position').textContent = t('Ln') + ' ' + line + ', ' + t('Col') + ' ' + column;
    var style = getComputedStyle(code);
    $('active-line').style.top = (parseFloat(style.paddingTop) + (line - 1) * parseFloat(style.lineHeight) - code.scrollTop) + 'px';
  }

  function setFilename(name, persist) {
    // File names are rendered as text, never as markup or file paths.
    filename = name.replace(/[\\/]/g, '_').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 120) || 'untitled.py';
    if (!/\.py$/i.test(filename)) filename += '.py';
    $('file-name').value = filename;
    document.title = filename + ' — Pyviel';
    if (persist !== false) {
      try { localStorage.setItem('pyviel.filename', filename); } catch (e) {}
    }
  }

  function toast(text, actionLabel, action) {
    clearTimeout(toastTimer);
    $('toast-text').textContent = text;
    var button = $('toast-action');
    button.hidden = !actionLabel;
    button.textContent = actionLabel || '';
    button.onclick = function () { $('toast').hidden = true; if (action) action(); };
    $('toast').hidden = false;
    toastTimer = setTimeout(function () { $('toast').hidden = true; }, actionLabel ? 8000 : 3500);
  }

  function setDirty(value) {
    dirty = value;
    $('edited').hidden = !value;
  }

  // Rename: the name is text only, and .py is added when missing.
  $('file-name').addEventListener('change', function () { setFilename(this.value); });
  $('file-name').addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter') { ev.preventDefault(); this.blur(); code.focus(); }
    else if (ev.key === 'Escape') { this.value = filename; this.blur(); }
  });
  code.addEventListener('pyviel:edited', function () { setDirty(true); });

  document.addEventListener('pyviel:notice', function (ev) { toast(String(ev.detail || '')); });

  function saveFile() {
    var url = URL.createObjectURL(new Blob([code.value], {type: 'text/plain;charset=utf-8'}));
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    setDirty(false);
    toast('Saved as ' + filename + '. Look in your Downloads folder.');
  }

  $('save-file').addEventListener('click', saveFile);
  $('open-file').addEventListener('click', function () { $('file-input').click(); });
  $('file-input').addEventListener('change', function () {
    var file = this.files[0];
    this.value = '';
    if (file) openFileObject(file);
  });
  async function openFileObject(file) {
    if (!/\.py$/i.test(file.name)) { toast('That is not a .py file. Pick a file that ends in .py.'); return; }
    if (file.size > 1024 * 1024) { toast('That file is too big. The editor opens files up to 1 MB.'); return; }
    try {
      var beforeRead = code.value;
      var source = await file.text();
      // Reading is asynchronous: keep newer edits rather than replacing them.
      if (code.value !== beforeRead) {
        toast('Your code changed while the file was opening. Open the file again to replace it.');
        return;
      }
      applyFile(source, file.name);
    } catch (e) { toast('The file could not be read. Your code is unchanged.'); }
  }
  var dragDepth = 0;
  function hasFiles(ev) { return ev.dataTransfer && Array.prototype.indexOf.call(ev.dataTransfer.types || [], 'Files') >= 0; }
  document.addEventListener('dragenter', function (ev) { if (hasFiles(ev)) { dragDepth++; $('drop-veil').hidden = false; } });
  document.addEventListener('dragleave', function (ev) { if (hasFiles(ev) && --dragDepth <= 0) { dragDepth = 0; $('drop-veil').hidden = true; } });
  document.addEventListener('dragover', function (ev) { if (hasFiles(ev)) ev.preventDefault(); });
  document.addEventListener('drop', function (ev) {
    if (!hasFiles(ev)) return;
    ev.preventDefault();
    dragDepth = 0;
    $('drop-veil').hidden = true;
    if (ev.dataTransfer.files[0]) openFileObject(ev.dataTransfer.files[0]);
  });

  // Symbols: a tap puts the character where the cursor is, then the cursor moves past it.
  document.querySelectorAll('[data-insert]').forEach(function (button) {
    button.addEventListener('mousedown', function (ev) { ev.preventDefault(); });
    button.addEventListener('click', function () {
      var start = code.selectionStart, end = code.selectionEnd;
      code.setRangeText(button.dataset.insert, start, end, 'end');
      code.dispatchEvent(new Event('input', {bubbles: true}));
      code.focus();
    });
  });

  var NEW_SOURCE = '';
  $('new-file').addEventListener('click', function () {
    var before = code.value, beforeName = filename;
    code.value = NEW_SOURCE;
    setFilename('untitled.py');
    $('examples').value = '';
    code.dispatchEvent(new Event('input', {bubbles: true}));
    out.textContent = '';
    lastRun = false;
    $('execution-time').textContent = '';
    $('summary').textContent = 'New empty program. Write something and press Run.';
    code.setSelectionRange(0, 0);
    code.scrollTop = 0;
    code.focus();
    setDirty(false);
    updateOutput();
    syncScroll();
    if (before.trim() && before !== NEW_SOURCE) toast('Started a new program.', 'Undo', function () {
      code.value = before;
      setFilename(beforeName);
      code.dispatchEvent(new Event('input', {bubbles: true}));
      code.focus();
      syncScroll();
    });
  });
  function applyFile(source, name) {
    code.value = source.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
    setFilename(name);
    code.dispatchEvent(new Event('input', {bubbles: true}));
    out.textContent = '';
    lastRun = false;
    $('execution-time').textContent = '';
    $('summary').textContent = 'File opened. Press Run to try it.';
    setDirty(false);
    code.scrollTop = code.scrollLeft = 0;
    code.setSelectionRange(0, 0);
    code.focus();
    updateOutput();
    syncScroll();
    toast('Opened ' + filename + '. Press Run when you are ready.');
  }

  var query = $('find-query'), matches = [], matchIndex = -1;
  function collectMatches() {
    matches = [];
    var needle = query.value.toLowerCase(), source = code.value.toLowerCase(), at = 0;
    if (needle) {
      while ((at = source.indexOf(needle, at)) !== -1) {
        matches.push(at);
        at += needle.length;
      }
    }
    matchIndex = -1;
    $('find-count').textContent = needle ? matches.length + (matches.length === 1 ? ' match' : ' matches') : '';
  }
  function find(direction, reset) {
    if (!query.value) { $('find-count').textContent = ''; return; }
    if (!matches.length) { $('find-count').textContent = 'No matches'; return; }
    if (reset || matchIndex < 0) matchIndex = direction < 0 ? matches.length - 1 : 0;
    else matchIndex = (matchIndex + direction + matches.length) % matches.length;
    var at = matches[matchIndex];
    code.setSelectionRange(at, at + query.value.length);
    var line = code.value.slice(0, at).split('\n').length - 1;
    code.scrollTop = Math.max(0, line * parseFloat(getComputedStyle(code).lineHeight) - code.clientHeight / 3);
    // Long lines need horizontal reveal as well as vertical reveal.
    var column = at - code.value.lastIndexOf('\n', at - 1) - 1;
    code.scrollLeft = Math.max(0, column * parseFloat(getComputedStyle(code).fontSize) * .602 - code.clientWidth / 3);
    $('find-count').textContent = (matchIndex + 1) + ' / ' + matches.length;
    syncScroll();
  }
  function openFind() {
    var selection = code.value.slice(code.selectionStart, code.selectionEnd);
    $('find-bar').hidden = false;
    if (selection && !selection.includes('\n')) query.value = selection;
    collectMatches();
    query.focus();
    query.select();
  }
  function closeFind() { $('find-bar').hidden = true; code.focus(); }
  $('find-toggle').addEventListener('click', function () { if ($('find-bar').hidden) openFind(); else closeFind(); });
  $('find-close').addEventListener('click', closeFind);
  query.addEventListener('input', function () { collectMatches(); find(1, true); });
  $('find-bar').addEventListener('submit', function (ev) { ev.preventDefault(); find(1); });
  $('find-prev').addEventListener('click', function () { find(-1); });
  query.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape') { ev.preventDefault(); closeFind(); }
    else if (ev.key === 'Enter' && ev.shiftKey) { ev.preventDefault(); find(-1); }
  });

  var guide = $('guide');
  function openGuide() { if (!guide.open) guide.showModal(); $('guide-toggle').setAttribute('aria-expanded', 'true'); }
  $('guide-toggle').addEventListener('click', openGuide);
  $('shortcuts-toggle').addEventListener('click', openGuide);
  $('guide-close').addEventListener('click', function () {
    guide.close();
    $('guide-toggle').setAttribute('aria-expanded', 'false');
  });
  guide.addEventListener('close', function () { $('guide-toggle').setAttribute('aria-expanded', 'false'); });
  guide.addEventListener('click', function (ev) {
    var box = guide.getBoundingClientRect();
    if (ev.target === guide && (ev.clientX < box.left || ev.clientX > box.right || ev.clientY < box.top || ev.clientY > box.bottom)) guide.close();
  });

  function markExample() {
    var selected = $('examples').value;
    document.querySelectorAll('[data-example]').forEach(function (button) {
      button.setAttribute('aria-current', String(button.dataset.example === selected));
    });
  }
  document.querySelectorAll('[data-example]').forEach(function (button) {
    button.addEventListener('click', function () {
      $('examples').value = button.dataset.example;
      $('examples').dispatchEvent(new Event('change', {bubbles: true}));
    });
  });
  $('examples').addEventListener('change', function () {
    var key = $('examples').value;
    if (Object.prototype.hasOwnProperty.call(names, key)) setFilename(names[key]);
    markExample();
    setDirty(false);
    lastRun = false;
    $('execution-time').textContent = '';
    updateOutput();
    syncScroll();
  });

  function updateOutput() {
    $('output-placeholder').hidden = out.textContent !== '';
    $('output-placeholder').querySelector('strong').textContent = lastRun ? 'Your program printed nothing.' : 'Nothing here yet.';
    $('output-placeholder').querySelector('p').textContent = lastRun ? 'Write print and something to show, like print \"Hi\".' : 'Press the green Run button.';
  }
  new MutationObserver(updateOutput).observe(out, {childList: true, characterData: true, subtree: true});
  new MutationObserver(function () {
    var summary = $('summary').textContent;
    $('diagnostic-dot').className = 'diagnostic-dot' + (summary.startsWith('Done') ? (document.querySelector('.problem') ? ' warn' : ' good') : '');
  }).observe($('summary'), {childList: true, characterData: true, subtree: true});
  $('clear-output').addEventListener('click', function () {
    out.textContent = '';
    lastRun = false;
    $('execution-time').textContent = '';
    updateOutput();
    toast('Output cleared. Your code is still there.');
  });

  // The editor reports the real duration when a run finishes; this file only
  // mirrors the result into the placeholder text.
  code.addEventListener('pyviel:ran', function () {
    lastRun = true;
    updateOutput();
    syncScroll();
  });
  code.addEventListener('pyviel:source', function () { paint(); collectMatches(); markExample(); });
  code.addEventListener('input', markExample);
  code.addEventListener('scroll', syncScroll);
  code.addEventListener('click', position);
  code.addEventListener('keyup', position);
  document.addEventListener('selectionchange', function () { if (document.activeElement === code) position(); });
  code.addEventListener('pyviel:saved', function (ev) {
    $('save-state').innerHTML = '<span class="dot"></span>';
    $('save-state').appendChild(document.createTextNode(ev.detail ? 'Saved in this browser' : 'Not saved. Press Save to keep a copy'));
    $('save-state').style.color = ev.detail ? '' : 'var(--warn)';
    if (ev.detail) {
      try { localStorage.setItem('pyviel.filename', filename); } catch (e) {}
    }
  });
  window.addEventListener('resize', syncScroll);
  document.addEventListener('keydown', function (ev) {
    if (guide.open) return;
    if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 's') { ev.preventDefault(); saveFile(); }
    else if ((ev.metaKey || ev.ctrlKey) && ev.key.toLowerCase() === 'f') { ev.preventDefault(); openFind(); }
    else if (ev.key === '?' && !ev.metaKey && !ev.ctrlKey && !ev.altKey && !/^(TEXTAREA|INPUT|SELECT)$/.test(document.activeElement.tagName)) { ev.preventDefault(); openGuide(); }
  });

  try { filename = localStorage.getItem('pyviel.filename') || filename; } catch (e) {}
  if (Object.prototype.hasOwnProperty.call(names, $('examples').value)) filename = names[$('examples').value];
  setFilename(filename, false);

  // Light or dark, remembered on this device.
  $('theme-toggle').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('pyviel.theme', root.dataset.theme); } catch (e) {}
  });

  // Text size, 12 to 28 px, remembered on this device.
  var fontSize = 15;
  try { fontSize = Number(localStorage.getItem('pyviel.fontsize')) || 15; } catch (e) {}
  function applyFontSize() {
    document.documentElement.style.setProperty('--code-size', fontSize + 'px');
    document.documentElement.style.setProperty('--code-line', Math.round(fontSize * 1.73) + 'px');
    try { localStorage.setItem('pyviel.fontsize', String(fontSize)); } catch (e) {}
    $('smaller').disabled = fontSize <= 12;
    $('bigger').disabled = fontSize >= 28;
    paint();
    $('gutter').scrollTop = code.scrollTop;
  }
  $('smaller').addEventListener('click', function () { fontSize = Math.max(12, fontSize - 1); applyFontSize(); });
  $('bigger').addEventListener('click', function () { fontSize = Math.min(28, fontSize + 1); applyFontSize(); });
  fontSize = Math.min(28, Math.max(12, fontSize));
  applyFontSize();
  paint();
  markExample();
  updateOutput();
})();
