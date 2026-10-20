# Changes

## 1.0.0 beta — 20 October 2026

The first public version.

- **A course of 57 lessons and 272 steps**, in English, Italian and French: from `print` to classes, generators, decorators and async, five complete programs (a guessing game, hangman, a to-do list that remembers, a text adventure, your own program), a cheat sheet, and an appendix, **Python on your computer**, on `python3 file.py`, `-c`, `>>>`, `sys.argv`, exit codes, the main guard, `argparse`, `python3 -m`, `pip`, virtual environments, reading a traceback and scripts with a shebang.
- Every step shows the program, a note beside every line, what you will see, and a small job to try. What you will see is the real output: the build runs every program on real Python.
- **Errors explained in plain words**, with the line and a caption of what to try, in three languages, and a **View full error** button for the whole Python message.
- **The desktop app** (macOS Apple silicon and Intel, Windows, Linux) carries a **real Python 3.14** and runs programs with it: real threads, files, `subprocess`, normal speed. Each run is its own process; Stop ends it and everything it started; a program that kills Python or floods the output gets a plain sentence and the app carries on. Programs run in `Documents/Pyviel`. The app has **six themes** (Cream, Night, Midnight, Forest, Sunset, High contrast) and a **Command** button that saves your program and shows the terminal lines to run it. One Pyviel at a time; a window whose page crashes loads again.
- **The website is the demo** of the same course: Python (Pyodide 3.14) runs inside the browser, offline, in a worker, marked **Web** beside the name. It also works in Safari and Firefox, which cannot pause Python: Pyviel runs the program anyway and `asyncio` waits by sleeping. The tests run the whole course in that mode too (`?nojspi`).
- Python starts loading as soon as the page opens, a **Try it** button runs a lesson step in one click, Backspace removes a whole indent, and Cmd/Ctrl + / comments lines.
