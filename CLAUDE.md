# CLAUDE.md

Working notes for Claude Code in this repository.

## What this is

Pyviel teaches Python with the ideas of Kaviel (the sibling project in `../Kaviel`): small steps, every line explained, a small job to try, three languages (English, Italian, French). It runs real Python (Pyodide) in the page. Plain JavaScript, no build step, no dependencies, offline.

The author decides what the course teaches and how errors behave. Propose, with options and a recommendation, and wait. Implementation choices are yours.

## Decisions already taken

- Errors follow Python (the program stops at the first one) but are explained in a short sentence plus a caption, in **all three languages**, with a **View full error** button for the whole Python message.
- Pyodide is inside the repository (`pyodide/`), so the page works offline and makes no network call.
- The first version must be huge: the course should end with a student who knows Python and can write a whole program. See `ROADMAP.md`.
- Every tutorial stays very simple to follow.

## Commands

```sh
export PATH="/usr/local/bin:$PATH"   # node is not on the default PATH on this machine
node test-errors.js                  # 75: the runner and every friendly error, in 3 languages
node tools/page-test.js              # 41: the page, in headless Brave through the debugging protocol, and every lesson program in it
node tools/build-course.js           # content/*.js -> course.js; runs every step's program on real Python
node tools/check-notes.js            # every code line of every step has a note, in 3 languages
node tools/check-language.js         # no English left in the it/fr texts
node tools/check-translations.js     # every label of the page has an Italian and a French entry
node tools/serve.js                  # local server with the two headers Python needs, port 8780
```

All of these must be green before a commit. After editing `content/*.js` run `build-course.js` first.

## Invariants

- **Cross-origin isolation.** `input()` and Stop use shared memory, which needs `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`. `tools/serve.js` sends them; a static host gets them from `coi-sw.js`. A page opened from `file://` cannot run Python and says so.
- **One run, one namespace.** `pyviel-runner.py` runs every program in a fresh namespace.
- **A new Python error needs a sentence in three languages.** Add the pattern to `pyviel-errors.js` (title and caption in `en`, `it`, `fr`, same placeholders) and a program to `test-errors.js`. The test fails if a language is missing or a placeholder is left.
- **Python's own words stay in English** in every language (`int`, `str`, `print`...). Only the explanation is translated.
- **Lesson code lives in `tutorials.js`, texts in `lessons.js`.** Step counts must match in the three languages, or the English text is used.
- **Cache keys are hand-written:** `pyviel.js?v=...` in `index.html`. Bump them after a change.
- **The version lives in `pyviel.js` (`VERSION`) and `package.json`;** the CI job compares them. The download names in `index.html` (`PYVIEL_APP`) and the README are a third place: they must match the release tag.
- **Two engines.** The website runs Pyodide in a worker (`pyviel-worker.js`; `?nojspi` pretends to be a browser without stack switching, and the tests run the course in that mode too). The desktop app does not load Pyodide at all: `electron/python-host.js` starts the Python packed in `python/<os>-<arch>/` (fetched by `tools/fetch-python.js`, git-ignored) with `pyviel-host.py`, one process per run, JSON lines on private copies of stdin/stdout. `pyviel.js` picks the engine; `pyviel-runner.py` is shared. The app has the themes and the Command button (`.app-only`); the site shows the **Web** badge. `tools/check-version.js` keeps the version, the release address and the installer names in step.
- **The desktop app** serves the files through the `pyviel://` scheme with the two isolation headers (`electron/main.js`); `electron tools/check-app.js` runs the page checks in the real app window.
- **Never write `start`-style Kaviel words here.** Kaviel's language is not part of Pyviel.

## Working here

- Code, comments, documentation and commit messages in English; speak Italian with the author.
- Run what you write. Say plainly what was not verified.
- Small commits. Do not push or publish without being asked.
- Nothing personal about the author in the repository.
- Pyodide files are third-party and unchanged; see `THIRD_PARTY.md`.

## Writing lessons

- A lesson is an object in `content/NN-name.js`; the format is at the top of `tools/build-course.js`. Each step has code (`c`), title, text, your turn and watch-out in `[en, it, fr]`.
- The text is simple, a few short paragraphs. Every step gives the reader something to try (`d`). Python's own words stay in English.
- **What you will see is never written by hand.** The build runs the code and uses its output. For random output give `r: true` and write `s`; for a program that must stop with an error give `e: 'TypeName'`; for `input()` give the typed answers in `i`.
- The output of a step must be the same on every run: no memory addresses (`print(x)` of an object or a generator), no printing a `set` of texts (use `sorted(...)`), no clock values, and a seed (`random.seed(n)`) wherever there is luck. The CI builds the course again and fails if `course.js` changes.
- Use a seed (`random.seed(n)`) in lessons so the output is the same; compute the answers for the demo inputs, never guess them.
- A construct that is new to the line-by-line notes needs a rule in `explain()` in `tutorials.js` and a sentence in the three languages in `lessons.js`. `check-notes.js` finds the lines that have none.
- Verified in Pyodide 314: no `threading`, no `turtle`/`tkinter`; `asyncio.run` works through `callPromising` in browsers that can switch stacks.

## How the course is written (1.1)

- Lessons live in `content/NN-*.js`; every new thing is explained once in `content/glossary-*.js` (key, three languages) and a step lists the keys it brings in `n`. `node tools/check-newwords.js` (part of `npm test`) reads every program with Python's parser (`tools/concepts.py`) and fails if a thing is used before it is explained, or if a step brings more than three new things (`many: true` allows an exception). `--list` shows what each step brings; use it while writing.
- A step has `c` (code), `n`, `t`, `x`, `w`, and `ex`: the practice task (`t` task, `h` hint, `sol` solution, `start`, and the check: `out`, `exact`, `m` regex on the output, `c` regex on the program text, `i` typed answers). The build runs every solution and start in every language.
- **Words inside examples are translated.** `c`, `ex.start`, `ex.sol` and the checks are `[en, it, fr]` when they contain words; the three versions must have the same shape (the checker compares them). Identifiers and names like Ada stay as they are.
- Files that lessons write start with `demo_`.
- `pyviel-check.js` is shared by the page and the build: what the build proves about a solution is what the page does with a student.
