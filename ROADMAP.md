# Roadmap

The goal, in the author's words: at the end, a student knows Python and can write a whole program, and every tutorial stays very easy to follow. The same ideas as Kaviel: short steps, every line explained, a small job at the end of each step, in English, Italian and French.

Decisions taken (20 October 2026):

- Errors behave like Python (the program stops at the first one), but every error is explained in a short sentence with a caption, in all three languages, and **View full error** shows the complete Python message.
- The site runs Pyodide (shipped inside the project, works offline); the desktop app runs a real Python 3.14 packed in each installer.
- The first version covers as much of Python as can be taught well. It is built in stages, each of them publishable.

## Stages

| Stage | What | Lessons |
|---|---|---|
| **0 · Foundations** (done) | editor, Python in a worker, `input()`, Stop, friendly errors in 3 languages, tests | 0 |
| **1 · The basics** (done) | print, text, variables, numbers, types, input, comparisons, if/elif/else, for, while, lists, reading errors | about 13 |
| **2 · Data and functions** (done) | text methods, slices, tuples, dictionaries, sets, functions (parameters, defaults, `*args`), scope, recursion, nested data | about 12 |
| **3 · The rest of the language** (done) | modules, `math`, `random`, `datetime`, files, exceptions (`try`/`except`/`finally`/`raise`), `json`, `csv`, regular expressions, a tour of the standard library, testing with `assert`, debugging | about 10 |
| **4 · Objects and beyond** (done) | classes, `__init__`, inheritance, special methods, dataclasses, enums, comprehensions, generators, lambda, decorators, `with`, type hints | about 12 |
| **5 · Whole programs** (done) | three guided projects from empty page to finished program (a guessing game, a to-do manager that keeps its data, a text adventure) | 3 |

Written on 20 October 2026: 54 lessons and 261 steps, each in three languages (stage 1: 13 lessons, stage 2: 11, stage 3: 10, stage 4: 14, stage 5: 5, and a cheat sheet as an appendix). Every program of every step is run for real by a test, and every Python error that the course can cause has a sentence in all three languages.

## Known limits of the Python in the browser

- No `turtle` or `tkinter` (they need a window), no threads, no network, no packages to install.
- A very long calculation inside Python's own code (for example `10 ** 10 ** 8`) cannot be interrupted by Stop. Pyviel then restarts Python after a few seconds.
- Files live in a small private workspace in the page and are gone when the page is closed, unless a lesson saves them to the computer.

## Done in 1.0 beta

The site, the desktop apps for macOS, Windows and Linux, and the whole course.

## What is still to do

- A test with a real beginner on the first lessons, and a review of the Italian and French texts by people who speak them.
- `threading` does not exist in the browser, and `asyncio` needs a recent browser (Chrome, Edge, Brave 137 or later, recent Firefox and Safari have it or are getting it).
- The leftovers of Kaviel in `i18n.js` and `editor.css` (words and rules that Pyviel does not use).

## Open questions

- A desktop app (as Kaviel has) needs a local server or a custom scheme, so the page can be cross-origin isolated.
- A test with a real beginner, before writing the later stages.
