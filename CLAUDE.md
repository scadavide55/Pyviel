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
- Use a seed (`random.seed(n)`) in lessons so the output is the same; compute the answers for the demo inputs, never guess them.
- A construct that is new to the line-by-line notes needs a rule in `explain()` in `tutorials.js` and a sentence in the three languages in `lessons.js`. `check-notes.js` finds the lines that have none.
- Verified in Pyodide 314: no `threading`, no `turtle`/`tkinter`; `asyncio.run` works through `callPromising` in browsers that can switch stacks.
