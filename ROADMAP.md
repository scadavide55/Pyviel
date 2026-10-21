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

## Plan agreed on 21 October 2026 — done, not released yet (see CHANGELOG)

All of it was built on 21 October 2026: the task check by idea, read and solved, the four errors, screen readers, `questions.py` ignored, the Check button on a phone, 11 find-the-mistake steps, 17 more challenges (lessons 21-40), the review question and "Think first" with a choice. Still open: challenges for lessons 41-49, and the test with a real beginner.

### 1.2.1 — a patch that can be rebuilt and checked in one evening
- **Tasks check the idea, not only the text.** Today 48 tasks pass with a single `print` of the expected text (53 pass, 5 of them rightly, because there the `print` is the answer; 16 of the 48 have a loop in their solution). Plan: `pyviel-runner.py` parses the program once with `ast` and returns `used` (the constructs it really uses: `for`, `while`, `def`, `+=`...), so strings and comments never count; the page, the desktop app and the build all get it from the same runner. A task can ask for `uses`; the message names what is missing ("this task asks for a `for` loop"). `tools/check-tasks.js` tries the `print` shortcut on every task and fails the build when it passes. 19 of the 48 steps already name the construct in `n`; for the other 29 Claude proposes one and the author checks the list.
- **Two kinds of progress**: lessons read and lessons solved ("58 read · 41 solved"), with a mark on the lessons that still have tasks to do. Today a lesson counts as done when you press Next lesson.
- **The four errors** without a plain sentence: `JSONDecodeError`, `PatternError`, `IsADirectoryError`, `UnicodeDecodeError` (three languages, a test each).
- **Screen readers** hear the output and the problems when a run ends (not line by line).
- `questions.py`: the author decides (delete or ignore).
- To look at before promising: a Check button next to Run on a phone while a task is open.

### 1.3 — content
- More "find the mistake" tasks: reading an error and fixing it is what beginners do most, and the course trains it in two places only.

### 1.5 — bigger content
- Challenges for lessons 21-58 (modules, files, json, objects): a whole program from an empty page.
- A short review at the start of each lesson (one or two questions on the lesson before).
- "Think first" with a real choice (two or three answers, one click), only where the output is short.

### Always
- A test with a real beginner, and the Italian and French read by people who speak them.

## Version 1.5 — to decide

Written on 21 October 2026, after the 1.0 beta. These are proposals: the author picks what goes in and in which order. Nothing here is started.

### Check what is already built
- Try the Windows, Linux and Intel Mac installers on those systems (they were built, never launched).
- A test with a real beginner on the first lessons; Italian and French read by people who speak them.
- Read what comes back from the Reddit posts and put every real problem in this list.

### Releasing
- A real signature for the macOS app (an Apple developer account) and a Windows certificate, so the system stops warning. Until then the macOS apps are signed ad hoc.
- Build the installers in GitHub Actions when a tag is pushed, so a release is reproducible and not made by hand on one Mac.
- Automatic update in the app (it checks the release and offers the new file).
- The Intel Mac file stops working with macOS 28: decide how long to keep it.

### The app
- Native Open and Save dialogs, and a list of the files in `Documents/Pyviel`.
- A terminal-like prompt (`>>>`) inside the app, because the appendix teaches it.
- `pip install` into a private environment of the app, with a lesson on packages.
- `turtle` and `tkinter` in the app (the bundled Python has them), with a few lessons that draw. The website cannot do this.
- A themes preview and a setting for the size of the editor text on first start.

### The course
- **Done in 1.1:** lesson 2 (Text) was confusing (the author's note, 21 October 2026); it was split and rebuilt. It had six steps and It has six steps and puts a lot together: two kinds of quotes, a quote inside a text, `+` and `*`, backslash codes, triple quotes, then positions and slices with negative numbers. The step "Look inside a text" is the biggest jump. Ideas: split it into two lessons (quotes, joining and `len` first; escapes, triple quotes, positions and slices later); one new idea per step.
- **Done in 1.1: practice, not only reading.** Before, every step ended with one sentence under "Your turn". It should make the student do something and know if it worked: a small task with the expected output shown, "predict what it prints, then run it", a hint that opens on request, and the solution behind a button. Apply it to every lesson, starting with lessons 1 to 5.
- Exercises with an automatic check ("make this program print 12") and a progress page; maybe a certificate that is true.
- Look for gaps: testing with `unittest` and `pytest`, `sqlite3`, `argparse` in a bigger program, a lesson on reading other people's code, and more whole programs.
- A "variables" viewer that shows each name and its value while a program runs, step by step.
- More hints when a step fails, written by hand for the common mistakes.

### Housekeeping
- The leftovers of Kaviel in `i18n.js` and `editor.css`.
- The header of the Kaviel site overlaps between 640 and 900 px (fixed in Pyviel, not in Kaviel).
- Screenshots in the README.

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
