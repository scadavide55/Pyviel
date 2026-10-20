# Pyviel

Learn Python the way Kaviel teaches code: small steps, every line explained, and a mistake that never leaves you stuck.

Pyviel runs **real Python** (3.14) inside the page. There is nothing to install and nothing leaves your computer.

> Status: **0.1.0-alpha, stage 0.** The editor, Python, `input()`, Stop and the friendly errors work. There is one starter lesson. The full course is planned in [ROADMAP.md](ROADMAP.md).

## What is different from running Python yourself

- **Errors are explained.** When Python stops with an error, Pyviel says in one short sentence what happened and on which line, in English, Italian or French, and adds a caption with what to try. Under it, **View full error** shows the complete message that Python wrote, so you also learn to read the real thing.
- **It is honest Python.** The program stops at the first error, exactly like Python does. Pyviel does not hide that, it explains it.
- **The lessons explain every line** of every program, with what you will see when it runs and a small job to try.
- **It works offline** and sends nothing anywhere.

## Run it

Python's `input()` and the Stop button need the page to be *cross-origin isolated*, which a plain `file://` page cannot be. Use a web address:

```
node tools/serve.js          # then open http://127.0.0.1:8780/
```

The published site gets the same thing from the small service worker `coi-sw.js` (the first visit reloads once).

## Tests

```
node test-errors.js          # 75: the runner and every friendly error, on real Python, in three languages
node tools/page-test.js      # 36: the page, driven in headless Brave or Chrome (no dependencies)
```

## What is in this folder

| File | What it is |
|---|---|
| `index.html`, `editor.css`, `editor-ui.js` | the editor page |
| `pyviel.js` | starts the Python worker and runs programs in it |
| `pyviel-worker.js` | the worker: loads Pyodide, runs a program, `input()`, Stop |
| `pyviel-runner.py` | runs one program and describes an error as plain data |
| `pyviel-errors.js` | turns a Python error into a sentence in three languages |
| `coi-sw.js` | adds the two headers that make shared memory possible, on a static host |
| `lessons.js`, `tutorials.js` | the lessons: texts in three languages, code, line-by-line notes |
| `i18n.js`, `strings.js` | the three interface languages |
| `pyodide/` | Pyodide 314.0.7 (Python 3.14.2), the core files only |
| `tools/` | the local server and the page test |

## Credits and licence

Pyviel is released under the MIT licence (see [LICENSE](LICENSE)). It includes [Pyodide](https://pyodide.org) (Mozilla Public Licence 2.0) and the Python standard library; see [THIRD_PARTY.md](THIRD_PARTY.md).

Pyviel is a sibling of [Kaviel](https://github.com/scadavide55/Kaviel), a small language of its own with the same teaching ideas. "Python" is a trademark of the Python Software Foundation; Pyviel is not affiliated with it.

The design is the author's. Most of the code is written with the help of an AI assistant, Claude.
