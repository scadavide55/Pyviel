"""Runs one student program and describes what went wrong, if anything.

This file is loaded by the worker (pyviel-worker.js) and by the Node tests.
It never prints for the student: it returns plain data, and pyviel-errors.js
turns that data into a short sentence in the language of the page.
"""
import ast
import builtins
import linecache
import sys
import traceback

FILENAME = "<pyviel>"

try:  # JavaScript's null reaches Python as jsnull, not as None
    from pyodide.ffi import jsnull
except ImportError:  # outside Pyodide there is no jsnull
    jsnull = None


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


SYNC_ASYNC = False  # set by the page when the browser cannot pause Python (no JSPI)
NO_INPUT = False  # set by the page when it is not cross-origin isolated: input() cannot wait for an answer


def _sync_asyncio_run():
    """An event loop that waits by sleeping, so asyncio works where Python cannot be paused."""
    import asyncio
    import time

    class _Waiter:
        def select(self, timeout=None):
            end = time.monotonic() + (timeout if timeout is not None else 0)
            while True:
                left = end - time.monotonic()
                if left <= 0:
                    return []
                time.sleep(min(left, 0.02))  # short slices: Stop can interrupt between them

        def close(self):
            pass

        def get_map(self):
            return {}

    class _Loop(asyncio.BaseEventLoop):
        def __init__(self):
            super().__init__()
            self._selector = _Waiter()

        def _process_events(self, events):
            pass

        def _write_to_self(self):
            pass

        def close(self):
            super().close()

    def run(main, *, debug=None, loop_factory=None):
        outer = asyncio._get_running_loop()  # Pyodide's own loop is marked as running while JavaScript calls Python
        asyncio._set_running_loop(None)
        try:
            with asyncio.Runner(debug=debug, loop_factory=_Loop) as runner:
                return runner.run(main)
        finally:
            asyncio._set_running_loop(outer)

    return run


_OPS = {
    ast.Add: "+", ast.Sub: "-", ast.Mult: "*", ast.Div: "/", ast.FloorDiv: "//", ast.Mod: "%", ast.Pow: "**",
    ast.Eq: "==", ast.NotEq: "!=", ast.Lt: "<", ast.Gt: ">", ast.LtE: "<=", ast.GtE: ">=",
    ast.In: "in", ast.NotIn: "not in", ast.And: "and", ast.Or: "or", ast.Not: "not",
    ast.BitAnd: "&", ast.BitOr: "|", ast.BitXor: "^", ast.LShift: "<<", ast.RShift: ">>",
}
_STATEMENTS = {
    ast.For: "for", ast.While: "while", ast.If: "if", ast.FunctionDef: "def", ast.ClassDef: "class",
    ast.Return: "return", ast.Try: "try", ast.With: "with", ast.Import: "import", ast.ImportFrom: "import",
    ast.Lambda: "lambda", ast.Yield: "yield", ast.Break: "break", ast.Continue: "continue", ast.Raise: "raise",
    ast.ListComp: "comprehension", ast.DictComp: "comprehension", ast.SetComp: "comprehension",
    ast.GeneratorExp: "comprehension", ast.JoinedStr: "f-string", ast.Subscript: "[]", ast.Slice: "slice",
    ast.Dict: "dict", ast.List: "list", ast.Tuple: "tuple", ast.Set: "set", ast.IfExp: "if-else",
    ast.Assert: "assert", ast.Global: "global", ast.Nonlocal: "nonlocal", ast.Await: "await",
}


def _used(tree):
    """What a program really uses, read from its syntax tree: text in quotes and comments never count.

    Keys like "for", "def", "+", "+=", "f-string", "range" (a call by name) and ".append" (a method call).
    The practice tasks compare them with what a step teaches (see pyviel-check.js).
    """
    found = set()
    for node in ast.walk(tree):
        kind = _STATEMENTS.get(type(node))
        if kind:
            found.add(kind)
        if isinstance(node, (ast.BinOp, ast.UnaryOp, ast.BoolOp)):
            found.add(_OPS.get(type(node.op), ""))
        elif isinstance(node, ast.Compare):
            found.update(_OPS.get(type(op), "") for op in node.ops)
        elif isinstance(node, ast.AugAssign):
            found.add(_OPS.get(type(node.op), "") + "=")
        elif isinstance(node, ast.Call):
            if isinstance(node.func, ast.Name):
                found.add(node.func.id)
            elif isinstance(node.func, ast.Attribute):
                found.add("." + node.func.attr)
            if len(node.args) > 1:
                found.add("many-args")  # print(name, "is", age): several things in one call
            found.update("kw:" + k.arg for k in node.keywords if k.arg)  # sep=, end=, key=...
        elif isinstance(node, (ast.Assign, ast.AnnAssign)):
            found.add("=")  # a value put in a box
        elif isinstance(node, ast.Constant) and node.value is None:
            found.add("None")
    found.discard("")
    return sorted(found)


class _Stop(BaseException):
    """Raised by the page when the student presses Stop while waiting for input."""


def run(source, write, ask, cap=200000):
    """Run `source`. `write(text)` receives output, `ask(prompt)` returns an answer.

    Returns {"ok": bool, "stopped": bool, "error": dict | None, "used": [...]}:
    `used` is what the program uses (see _used), empty when it cannot be read.
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
        if NO_INPUT:
            raise RuntimeError("Pyviel: input() cannot wait for an answer on this page")
        reply = ask(prompt)
        if reply is None or reply is jsnull:  # the page says Stop while the program waits for an answer
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
    old_asyncio_run = None
    if SYNC_ASYNC:
        import asyncio
        old_asyncio_run = asyncio.run
        asyncio.run = _sync_asyncio_run()
    try:
        try:
            # Read once: the tree says what the program uses, and is then compiled.
            tree = ast.parse(source, FILENAME)
            used = _used(tree)
            code = compile(tree, FILENAME, "exec")
        except SyntaxError as exc:  # includes IndentationError and TabError
            return {"ok": False, "stopped": False, "error": _describe(exc), "used": []}
        try:
            exec(code, namespace)
        except (KeyboardInterrupt, _Stop):
            return {"ok": True, "stopped": True, "error": None, "used": used}
        except SystemExit:
            return {"ok": True, "stopped": False, "error": None, "used": used}
        except BaseException as exc:  # noqa: BLE001 - the student may raise anything
            return {"ok": False, "stopped": False, "error": _describe(exc), "used": used}
        return {"ok": True, "stopped": False, "error": None, "used": used}
    finally:
        sys.stdout, sys.stderr, builtins.input = old_out, old_err, old_input
        if old_asyncio_run is not None:
            asyncio.run = old_asyncio_run
