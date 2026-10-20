# Changes

## Unreleased

- **Works in Safari and Firefox.** These browsers cannot pause Python, and every program stopped with an `InternalError`. Pyviel now notices this and runs the program anyway; `asyncio` uses a loop that waits by sleeping, so the async lessons run there too. The test suite now runs the whole course a second time pretending to be such a browser (`?nojspi`).

## 1.0.0 beta — 20 October 2026

The first public version.

- **A course of 54 lessons and 261 steps**, in English, Italian and French: from `print` to classes, generators, decorators and async, five complete programs (a guessing game, hangman, a to-do list that remembers, a text adventure, your own program) and a cheat sheet.
- Every step shows the program, a note beside every line, what you will see, and a small job to try. What you will see is the real output: the build runs every program on real Python.
- Real Python 3.14 (Pyodide) in the page, offline, in a worker so the page never freezes. `input()` and Stop work.
- **Errors explained in plain words**, with the line and a caption of what to try, in three languages, and a **View full error** button for the whole Python message.
- Python starts loading as soon as the page opens, a **Try it** button runs a lesson step in one click, Backspace removes a whole indent, and Cmd/Ctrl + / comments lines.
- The desktop app for macOS, Windows and Linux.
