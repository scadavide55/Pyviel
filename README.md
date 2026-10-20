# Pyviel

**[Open Pyviel in your browser](https://scadavide55.github.io/Pyviel/)** · no install, no account, works offline · [Download the desktop app](https://github.com/scadavide55/Pyviel/releases/latest)

Learn Python the way Kaviel teaches code: small steps, every line explained, and a mistake that never leaves you stuck.

Pyviel runs **real Python 3.14**, and nothing leaves your computer. It comes in two forms: the **website**, a demo that needs nothing installed, and the **desktop app**, the complete version. The table below says what differs.

> Status: **1.0 beta.** The whole course is written: **57 lessons and 272 steps**, in English, Italian and French, from `print` to classes, generators, decorators and async, with five complete programs and a cheat sheet. Every program of every step is run on real Python by the build, so what a step says you will see is what you see. It has not been tried with real beginners yet: if you do, please tell us where they got stuck.

## What is different from running Python yourself

- **Errors are explained.** When Python stops with an error, Pyviel says in one short sentence what happened and on which line, in English, Italian or French, and adds a caption with what to try. Under it, **View full error** shows the complete message that Python wrote, so you also learn to read the real thing.
- **It is honest Python.** The program stops at the first error, exactly like Python does. Pyviel does not hide that, it explains it.
- **The lessons explain every line** of every program, with what you will see when it runs and a small job to try.
- **It works offline** and sends nothing anywhere.

## The desktop app

The installers are in the [latest release](https://github.com/scadavide55/Pyviel/releases/latest) (each is over 100 MB, so they are not stored in the repository):

| System | File |
|---|---|
| macOS, Apple silicon (M1 and later) | `Pyviel-1.0.0-beta-arm64.dmg` |
| macOS, Intel | `Pyviel-1.0.0-beta-x64.dmg` |
| Windows 10 and 11 | `Pyviel-1.0.0-beta-setup.exe` |
| Linux (64-bit) | `Pyviel-1.0.0-beta-linux-x64.tar.gz` |

Mac note: Apple silicon is the one to use. The Intel file is for Intel Macs up to macOS 27; Apple is ending support for Intel apps with macOS 28.

### App and website: what is different

| | Website (demo) | Desktop app |
|---|---|---|
| Course, lessons, errors in 3 languages | the same, all 57 lessons | the same, all 57 lessons |
| Where Python runs | inside the browser (Pyodide, Python 3.14.2) | a real **Python 3.14.8 packed in the app**, on your computer |
| Speed | slower (WebAssembly) | normal Python speed |
| `threading`, `subprocess`, `os.system` | not available | work |
| Files | live only while the page is open | real files in `Documents/Pyviel` |
| Stop | ends the program | ends the program and everything it started |
| Themes | light and dark | six: Cream, Night, Midnight, Forest, Sunset, High contrast |
| **Command** button (saves the program, shows `cd` and `python3 file.py`) | no | yes |
| Install | nothing, any recent browser (Chrome, Edge, Firefox, Safari) | a download of 120 to 150 MB, not signed (the system warns the first time) |
| Needs the internet | the first load only, then offline | never |
| Badge beside the name | **Web** | none |

Both teach the same Python; the appendix *Python on your computer* explains `python3 file.py`, `-c`, `sys.argv`, `argparse`, `pip` and virtual environments in both. The Python inside the app is private: the terminal on your computer cannot see it, so to follow the appendix you also install Python from python.org.

The installers are not signed with a paid certificate, so the system may warn the first time: on macOS right-click Pyviel and choose Open; on Windows press More info, then Run anyway. On Linux, unpack the archive and run `pyviel`; if the sandbox complains, run `sudo chown root chrome-sandbox` and `chmod 4755 chrome-sandbox` in that folder.

## Run it from the source

Python's `input()` and the Stop button need the page to be *cross-origin isolated*, which a plain `file://` page cannot be. Use a web address:

```
node tools/serve.js          # then open http://127.0.0.1:8780/
```

The published site gets the same thing from the small service worker `coi-sw.js` (the first visit reloads once), and the desktop app serves its files through a local scheme that sends the same headers.

## Tests

```
node test-errors.js          # 75: the runner and every friendly error, on real Python, in three languages
node tools/page-test.js      # 41: the page in headless Brave or Chrome, and every lesson program run in it
node tools/build-course.js   # builds course.js; runs the program of every step on real Python
node tools/check-notes.js    # every line of every program has its note, in three languages
node tools/check-language.js # no English left in the Italian and French texts
```

## What is in this folder

| File | What it is |
|---|---|
| `index.html`, `editor.css`, `editor-ui.js` | the editor page |
| `pyviel.js` | runs programs: in the web worker on the site, in the app's own Python in the desktop app |
| `pyviel-worker.js` | the worker: loads Pyodide, runs a program, `input()`, Stop |
| `pyviel-runner.py` | runs one program and describes an error as plain data |
| `pyviel-errors.js` | turns a Python error into a sentence in three languages |
| `coi-sw.js` | adds the two headers that make shared memory possible, on a static host |
| `content/*.js` | the course, written by hand: for each step the code and the texts in three languages |
| `course.js` | the course, generated by `tools/build-course.js` (do not edit) |
| `lessons.js`, `tutorials.js` | the words of the lesson panel, the note beside each line, and the panel itself |
| `i18n.js`, `strings.js` | the three interface languages |
| `pyodide/` | Pyodide 314.0.7 (Python 3.14.2), the core files only |
| `electron/` | the desktop app; `python-host.js` starts its Python, one process per run |
| `pyviel-host.py` | what the app starts for each run: talks JSON lines with the app and calls `pyviel-runner.py` |
| `python/` | the Python each installer carries (downloaded by `tools/fetch-python.js`, not in the repository) |
| `tools/` | the local server, the course build and the checks |

## Credits and licence

Pyviel is released under the MIT licence (see [LICENSE](LICENSE)). It includes [Pyodide](https://pyodide.org) (Mozilla Public Licence 2.0) and the Python standard library; see [THIRD_PARTY.md](THIRD_PARTY.md).

Pyviel is a sibling of [Kaviel](https://github.com/scadavide55/Kaviel), a small language of its own with the same teaching ideas. "Python" is a trademark of the Python Software Foundation; Pyviel is not affiliated with it.

The design is the author's. Most of the code is written with the help of an AI assistant, Claude.
