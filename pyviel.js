/* Pyviel on the page: starts the Python worker and runs programs in it.

   Pyviel.runAsync(source, {signal, onOutput, input}) -> Promise of
     {output, problems, errors, warnings, stopped, cancelled, summary}
   `problems` are friendly (see pyviel-errors.js) and each keeps the full Python error.
   Pyviel.start() begins loading Python early, so the first Run is quick. */
(function (root) {
  'use strict';
  var VERSION = '1.1.0-beta';
  var SLOW_STOP_MS = 2500;
  var BUILD = '1.1.0-2';      // cache key of the worker and the runner: bump it when either changes

  var worker = null;
  var starting = null;
  var runner = null;          // the run in progress: {resolve, onOutput, onInput, output}
  var interrupt, control, data;
  var statusListeners = [];

  function language() { return (document.documentElement.lang || 'en').slice(0, 2); }
  function say(state, detail) { statusListeners.forEach(function (fn) { try { fn(state, detail); } catch (e) {} }); }

  // In the desktop app the page talks to the Python packed inside the app, not to a worker.
  function desktop() { return root.pyvielDesktop && root.pyvielDesktop.python; }

  // Shared buffers let Stop interrupt Python and let input() wait; they need a cross-origin isolated page.
  function isolated() { return typeof SharedArrayBuffer !== 'undefined' && root.crossOriginIsolated === true; }

  function supported() {
    if (desktop()) return true;
    // A module worker cannot start from a file on the computer; any web address works.
    return typeof Worker !== 'undefined' && /^https?:$/.test(root.location && root.location.protocol);
  }

  function startDesktop() {
    say('loading');
    desktop().onEvent(function (m) { if (runner) handle(m); });
    return desktop().start().then(function (answer) {
      if (!answer.ok) { starting = null; say('failed', answer.message); throw new Error(answer.message); }
      say('ready', answer.version);
      return answer.version;
    });
  }

  function start() {
    if (starting) return starting;
    if (desktop()) return (starting = startDesktop());
    if (!supported()) return (starting = Promise.reject(new Error('unsupported')));
    if (isolated()) {
      interrupt = new Uint8Array(new SharedArrayBuffer(1));
      control = new Int32Array(new SharedArrayBuffer(8));
      data = new Uint8Array(new SharedArrayBuffer(262144));
    } else {
      interrupt = control = data = null;
    }
    starting = new Promise(function (resolve, reject) {
      say('loading');
      worker = new Worker('pyviel-worker.js?v=' + BUILD + (/[?&]nojspi\b/.test(location.search) ? '&nojspi' : ''), {type: 'module'});
      worker.onmessage = function (event) {
        var m = event.data;
        if (m.type === 'ready') { say('ready', m.version); resolve(m.version); }
        else if (m.type === 'failed') { say('failed', m.message); reject(new Error(m.message)); }
        else if (runner) handle(m);
      };
      worker.onerror = function (event) { say('failed', event.message); reject(new Error(event.message || 'worker error')); };
      worker.postMessage({type: 'init', interrupt: interrupt && interrupt.buffer, control: control && control.buffer, data: data && data.buffer});
    });
    return starting;
  }

  function handle(m) {
    if (m.type === 'output') {
      runner.output += m.text;
      runner.onOutput(m.text);
    } else if (m.type === 'input') {
      Promise.resolve(runner.onInput(m.prompt)).then(function (answer) { reply(answer); }, function () { reply(null); });
    } else if (m.type === 'done') {
      var finished = runner;
      runner = null;
      finished.resolve(describe(finished, m.result));
    }
  }

  function reply(answer) {
    if (desktop()) { desktop().answer(answer === undefined ? null : answer); return; }
    if (!control) return;
    if (answer === null || answer === undefined) {
      Atomics.store(control, 0, 2);
    } else {
      var bytes = new TextEncoder().encode(String(answer)).slice(0, data.length);
      data.set(bytes);
      Atomics.store(control, 1, bytes.length);
      Atomics.store(control, 0, 1);
    }
    Atomics.notify(control, 0);
  }

  function describe(run, result) {
    var problems = [];
    var lang = language();
    if (result.error) {
      var said = root.PyvielErrors.explain(result.error, lang);
      problems.push({
        kind: 'error',
        line: result.error.line || 1,
        type: result.error.type,
        message: said.title,
        hint: said.caption + (said.suggestion ? ' ' + said.suggestion : ''),
        full: result.error.full,
        count: 1
      });
    }
    var summary;
    if (result.stopped) summary = root.PyvielErrors.words.stopped[lang] || root.PyvielErrors.words.stopped.en;
    else summary = problems.length ? '' : 'Done';
    return {
      output: run.output.split('\n'),
      text: run.output,
      problems: problems,
      errors: problems.length,
      warnings: 0,
      stopped: !!result.stopped,
      cancelled: !!result.stopped,
      summary: summary
    };
  }

  function stop() {
    if (!runner) return;
    if (desktop()) { desktop().stop(); return; }
    if (interrupt) {
      interrupt[0] = 2;                  // Python raises KeyboardInterrupt at its next step
      Atomics.store(control, 0, 2);      // and an input() that is waiting gives up
      Atomics.notify(control, 0);
    }
    var stuck = runner;
    setTimeout(function () {
      if (runner !== stuck) return;
      // A long calculation inside Python's own code cannot be interrupted: start again.
      worker.terminate();
      worker = null;
      starting = null;
      runner = null;
      stuck.resolve({output: stuck.output.split('\n'), text: stuck.output, problems: [], errors: 0, warnings: 0, stopped: true, cancelled: true, summary: root.PyvielErrors.words.stopped[language()] || root.PyvielErrors.words.stopped.en, restarted: true});
      start().catch(function () {});
    }, interrupt ? SLOW_STOP_MS : 0);
  }

  // The desktop app cannot start its Python: the run ends with a sentence instead of an exception.
  function couldNotStart(error) {
    var message = String(error && error.message || error);
    return describe({output: ''}, {ok: false, stopped: false, error: {type: 'InternalError', message: message, line: null, column: null, suggestion: '', full: message}});
  }

  function runAsync(source, options) {
    options = options || {};
    return start().then(function () {
      return new Promise(function (resolve) {
        if (options.signal && options.signal.aborted) { resolve({output: [], text: '', problems: [], errors: 0, warnings: 0, stopped: true, cancelled: true, summary: ''}); return; }
        runner = {
          resolve: resolve,
          output: '',
          onOutput: options.onOutput || function () {},
          onInput: options.input || function () { return ''; }
        };
        if (options.signal) options.signal.addEventListener('abort', stop, {once: true});
        if (desktop()) { desktop().run(source); return; }
        if (control) Atomics.store(control, 0, 0);
        worker.postMessage({type: 'run', source: source});
      });
    }, function (error) {
      if (desktop()) { starting = null; return couldNotStart(error); }
      throw error;
    });
  }

  root.Pyviel = {
    VERSION: VERSION,
    supported: supported,
    start: start,
    runAsync: runAsync,
    stop: stop,
    onStatus: function (fn) { statusListeners.push(fn); }
  };
})(typeof self !== 'undefined' ? self : this);
