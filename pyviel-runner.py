"""Runs one student program and describes what went wrong, if anything.

This file is loaded by the worker (pyviel-worker.js) and by the Node tests.
It never prints for the student: it returns plain data, and pyviel-errors.js
turns that data into a short sentence in the language of the page.
"""
import builtins
import linecache
import sys
import traceback

FILENAME = "<pyviel>"


def _user_frames(tb):
    """Drop the frames of the runner itself: the student sees only their file."""
    while tb is not None and tb.tb_frame.f_code.co_filename != FILENAME:
        tb = tb.tb_next
    return tb


def _describe(exc):
    """Everything the page needs to explain an exception, as plain data."""
    tb = _user_frames(exc.__traceback__)
    line = None
    column = None
    walker = tb
    while walker is not None:
        if walker.tb_frame.f_code.co_filename == FILENAME:
            line = walker.tb_lineno
        walker = walker.tb_next
    if isinstance(exc, SyntaxError):
        line = exc.lineno or line
        column = exc.offset
    kind = type(exc).__name__
    message = str(exc)
    if isinstance(exc, SyntaxError):
        message = exc.msg or message
    full = "".join(traceback.format_exception(type(exc), exc, tb)).rstrip("\n")
    # Python 3.12+ adds "Did you mean" while it formats, so it is read from the text.
    hint = ""
    marker = "Did you mean: "
    if marker in full:
        hint = full.rsplit(marker, 1)[1].strip().rstrip("?").strip("'")
    return {
        "type": kind,
        "message": message,
        "line": line,
        "column": column,
        "suggestion": hint,
        "full": full,
    }


class _Stop(BaseException):
    """Raised by the page when the student presses Stop while waiting for input."""


def run(source, write, ask, cap=200000):
    """Run `source`. `write(text)` receives output, `ask(prompt)` returns an answer.

    Returns {"ok": bool, "stopped": bool, "error": dict | None}.
    """
    written = [0]

    class Out:
        encoding = "utf-8"

        def write(self, text):
            text = str(text)
            if written[0] >= cap:
                return len(text)
            if written[0] + len(text) > cap:
                text = text[: cap - written[0]] + "\n[Pyviel: the output was cut here, it was too long.]\n"
            written[0] += len(text)
            write(text)
            return len(text)

        def flush(self):
            pass

        def isatty(self):
            return False

    def answer(prompt=""):
        prompt = str(prompt)
        reply = ask(prompt)
        if reply is None:  # the page says Stop while the program waits for an answer
            raise _Stop()
        reply = str(reply)
        # Like a terminal: the question and the typed answer stay on the screen.
        sys.stdout.write(prompt + reply + "\n")
        return reply

    lines = source.splitlines(True)
    linecache.cache[FILENAME] = (len(source), None, lines or [""], FILENAME)
    namespace = {"__name__": "__main__", "__builtins__": builtins}
    old_out, old_err, old_input = sys.stdout, sys.stderr, builtins.input
    sys.stdout = sys.stderr = Out()
    builtins.input = answer
    try:
        try:
            code = compile(source, FILENAME, "exec")
        except SyntaxError as exc:  # includes IndentationError and TabError
            return {"ok": False, "stopped": False, "error": _describe(exc)}
        try:
            exec(code, namespace)
        except (KeyboardInterrupt, _Stop):
            return {"ok": True, "stopped": True, "error": None}
        except SystemExit:
            return {"ok": True, "stopped": False, "error": None}
        except BaseException as exc:  # noqa: BLE001 - the student may raise anything
            return {"ok": False, "stopped": False, "error": _describe(exc)}
        return {"ok": True, "stopped": False, "error": None}
    finally:
        sys.stdout, sys.stderr, builtins.input = old_out, old_err, old_input
