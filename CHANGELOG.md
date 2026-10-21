# Changes

## 1.2.1 — 22 October 2026

The tutorials check real learning, and give much more practice.

- **A task checks the idea, not only the text.** Python reads the student's program and says what it really uses (a loop, a function, `+=`...); words in quotes and comments never count. Printing the expected text no longer passes 55 tasks that teach something else; the message says what is missing ("this task asks you to use a for loop"). The build tries that shortcut on every task and fails when it passes.
- **"Think first" is a real question** in 172 steps: three possible results, one right, the other two mistakes a beginner really makes (`2 + 3` shown as text, the quotes printed too, a number one off). It never blocks.
- **A question on the lesson before** opens every lesson from the second one: "Remember?".
- **11 "find the mistake" steps** in lessons 3 to 20: mismatched quotes, `x` for times, text plus a number, 4 times 2 is 44, `=` in an if, a missing colon, a line not pushed in, `add` on a list, changing a letter of a text, a missing key, a function without `return`.
- **17 more challenges**, in lessons 21 to 40 (function options, scope, recursion, comprehensions, modules, statistics, dates, files, errors, JSON, regular expressions, classes, inheritance, special methods, dataclasses, generators, decorators). The course has **349 steps**.
- **No more "Show a solution"**: the student works the answer out, with the hint as help. The solutions are not even in the files the page loads.
- **Lessons read and lessons solved** are counted apart, and a lesson shows how many of its tasks are solved.
- On a phone, a **Check** button sits next to Run while a task is open.
- **Plain sentences for four more errors**, in three languages: `JSONDecodeError`, `PatternError` (the regular expression is broken), `IsADirectoryError` and `UnicodeDecodeError`.
- **Screen readers** hear what the program printed, and each problem, when a run ends.
- **Hints point the way, never the line to type**: 170 hints held a line of the solution and were rewritten. The build now fails when a hint holds a line of the solution, or when copying the step's program already solves its task (8 tasks fixed, 2 had a hidden requirement).
- **An answer that is almost right says what differs**: capital letters, spaces, punctuation, quotes shown, 4.0 instead of 4, lines in another order. After two wrong checks the page offers the hint and the example, never the answer.
- **Think first explains a wrong pick**: the wrong answers come from real beginner mistakes (the quotes shown, the name of a box instead of its value, + adding a space...) and the page says what each one gets wrong.
- **Remember?** asks a second question from four lessons back, from lesson 6.
- **9 more challenges** (lessons 41 to 49): every lesson from 1 to 49 ends with a program written from an empty page. The course has **358 steps**.
- A task that asks questions says which answers the check will type.
- Fixed: a check of a program with a loop that never ends stayed on "Checking..." for ever; now it stops after 8 seconds, with a Stop button and a sentence about while. Run waits while a check uses Python. On a phone the verdict scrolls into view, with a way back to the editor.

Note: in lessons 3 to 20 a new step was added before the challenge, so a challenge solved in 1.2.0 may show as not solved.

## 1.2.0 — 21 October 2026

The first stable version.

The lessons are easier to follow and give much more practice.

- **Every step has three phases**: *Learn* (the idea, the new words, the program line by line), *Try it* (guess what it shows, then run it) and *Your turn* (a task, checked). One big button leads from one phase to the next.
- **The task is ready when you get there**: its starting code goes into the editor by itself, with *Start over* and a way to bring back the code that was there. On a phone, *Go to the editor* is one tap.
- **A wrong answer shows the first line that differs**: what your program showed there and what it should show.
- **Challenges**: lessons 1 to 20 end with a challenge that puts the whole lesson together, written from an empty page (or, in *Reading mistakes*, by fixing three errors one by one). The course has **321 steps**.
- **Hints guide instead of giving the answer** away; the solution stays behind its own button. The build now refuses a hint that holds the whole solution, and a task whose start already passes.
- **Notes that say what really happens**: "Checks if score >= 90", "with i being 0, 1, 2", "Adds 3 to what is in total", "Asks "Name?" and keeps the answer, as text, in name".
- Four tasks that were already solved before the student started (in the projects and the terminal appendix) are now real changes to make.

Examples:

- **37 example programs instead of 7**, in eight groups: first steps, games (guess the number, rock paper scissors, dice, a quiz, coin flips), numbers and maths (FizzBuzz, primes, Fibonacci, averages, temperatures, savings), text (palindromes, word counts, a secret code, vowels, initials), drawing with text (a pyramid, a Christmas tree, a chessboard, a bar chart), lists and data (a shopping bill, a class report, a to-do list), your own objects (a bank account, a virtual pet, shapes) and small tools (passwords, days to your birthday, a countdown, a unit converter). Every one is translated, and the build runs each one in the three languages.
- **A click opens the example and runs it**, so the result is there at once.
- **Search the examples**: accents and word endings do not matter ("gioco" finds "Giochi").

Site and editor:

- **The page loads about a third as much**: only the course in its own language (450 KB instead of 1.45 MB, before compression).
- **The panel comes back as you left it**: closed, on the examples, or on the step you were reading.

- **Python starts even where the page cannot be isolated** (service workers blocked, some private windows): programs run, Stop restarts Python, and `input()` says in a sentence why it cannot wait there. Before, the page waited for ever on "Loading Python".
- **Undo works on the editor's own edits**: Enter, Tab, Backspace over an indent, commenting, the symbol buttons, and opening an example can all be taken back with Cmd/Ctrl+Z. Enter after `return`, `break`, `continue`, `pass` or `raise` steps back out of the block.
- The Python worker and its runner have a cache key, so an update never mixes old and new files.
- The top bar keeps the file name readable on narrow windows; the footer no longer runs two sentences together; on a phone the file name uses the whole row and the footer shows only whether Python is ready.
- "New here? Start with lesson 1" becomes "Continue: lesson N" once you have started.

Desktop app:

- The window opens where it was last closed.

## 1.1.0 beta — 22 October 2026

The tutorials were rebuilt from the ground up, so that nothing new is ever thrown at the student without an explanation.

- **Every new thing is explained before it is used.** Each step has a "New in this step" box that explains each new word, function, method or sign, with a tiny example. A new check (`tools/check-newwords.js`, which reads every program with Python's own parser) makes the build fail if a step uses something that was not explained where it first appears, or brings more than three new things at once.
- **One idea per step, in a better order.** Names and boxes now come before text, text is split in two lessons, and the long steps were cut in small ones. The course has **58 lessons and 301 steps**.
- **Think first.** The result of a program stays hidden behind a button, so the student makes a guess before looking.
- **Practice with a check.** Every step ends with a small task. The student writes the answer in the editor, presses *Check my program*, and is told if it is right, or what the program showed instead. There is a hint, and a solution on request. The build runs every solution (in three languages) and proves it passes its own check, and that the starting code does not.
- **The examples are translated too.** In Italian and French, the words inside the quotes of every example, and what the program shows, are in that language: `print("Ciao!")`, `print("Bonjour!")`.
- **Where a lesson was confusing, it was rebuilt** (the lesson about text, for example).
- A summary of the new words at the end of each lesson, and the lessons that make files now name them `demo_...`, so they never touch a file of the student.
- Fixed: the file name could run over the buttons next to it on some window widths.

## 1.0.0 beta — 20 October 2026


The first public version.

- **A course of 57 lessons and 272 steps**, in English, Italian and French: from `print` to classes, generators, decorators and async, five complete programs (a guessing game, hangman, a to-do list that remembers, a text adventure, your own program), a cheat sheet, and an appendix, **Python on your computer**, on `python3 file.py`, `-c`, `>>>`, `sys.argv`, exit codes, the main guard, `argparse`, `python3 -m`, `pip`, virtual environments, reading a traceback and scripts with a shebang.
- Every step shows the program, a note beside every line, what you will see, and a small job to try. What you will see is the real output: the build runs every program on real Python.
- **Errors explained in plain words**, with the line and a caption of what to try, in three languages, and a **View full error** button for the whole Python message.
- **The desktop app** (macOS Apple silicon and Intel, Windows, Linux) carries a **real Python 3.14** and runs programs with it: real threads, files, `subprocess`, normal speed. Each run is its own process; Stop ends it and everything it started; a program that kills Python or floods the output gets a plain sentence and the app carries on. Programs run in `Documents/Pyviel`. The app has **six themes** (Cream, Night, Midnight, Forest, Sunset, High contrast) and a **Command** button that saves your program and shows the terminal lines to run it. One Pyviel at a time; a window whose page crashes loads again.
- **The website is the demo** of the same course: Python (Pyodide 3.14) runs inside the browser, offline, in a worker, marked **Web** beside the name. It also works in Safari and Firefox, which cannot pause Python: Pyviel runs the program anyway and `asyncio` waits by sleeping. The tests run the whole course in that mode too (`?nojspi`).
- Python starts loading as soon as the page opens, a **Try it** button runs a lesson step in one click, Backspace removes a whole indent, and Cmd/Ctrl + / comments lines.
