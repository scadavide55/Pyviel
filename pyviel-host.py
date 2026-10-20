"""The desktop app's Python host: one process per run.

The app starts this with its own Python. The first line on stdin is {"t": "run", "source": ...}.
Everything the app needs to hear goes back as one JSON object per line:

    {"t": "ready", "version": "3.14.8"}        the host is up and waits for a program
    {"t": "output", "text": "..."}             what the program printed
    {"t": "input", "prompt": "..."}            the program asks a question; one line comes back:
                                               {"t": "answer", "text": "..."} or {"t": "stop"}
    {"t": "done", "result": {...}}             ok / stopped / error, as pyviel-runner.py describes it

The protocol runs on private copies of stdin and stdout. The program's own stdin is empty and its
stdout (C code, os.system) goes to stderr, so nothing it does can break the conversation.
"""
import importlib.util
import json
import os
import sys
import time

proto_in = os.fdopen(os.dup(0), "r", encoding="utf-8", newline="\n")
proto_out = os.fdopen(os.dup(1), "w", encoding="utf-8", newline="\n")
_null = os.open(os.devnull, os.O_RDONLY)
os.dup2(_null, 0)
os.dup2(2, 1)

here = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("pyviel_runner", os.path.join(here, "pyviel-runner.py"))
runner = importlib.util.module_from_spec(spec)
spec.loader.exec_module(runner)

pending = []
last_flush = [0.0]  # the very first output goes out at once


def send(message):
    proto_out.write(json.dumps(message, ensure_ascii=False) + "\n")
    proto_out.flush()


def flush():
    if pending:
        send({"t": "output", "text": "".join(pending)})
        del pending[:]
    last_flush[0] = time.monotonic()


def write(text):
    pending.append(text)
    # Big or slow bursts go out at once; a loop of small prints goes out in batches.
    if sum(map(len, pending)) > 8192 or time.monotonic() - last_flush[0] > 0.03:
        flush()


def ask(prompt):
    flush()
    send({"t": "input", "prompt": prompt})
    line = proto_in.readline()
    if not line:
        return None
    reply = json.loads(line)
    return reply.get("text", "") if reply.get("t") == "answer" else None


class Stdin:
    """sys.stdin for the program: every read is a question to the student."""

    encoding = "utf-8"

    def readline(self, size=-1):
        text = ask("")
        if text is None:
            raise runner._Stop()
        return text + "\n"

    def read(self, size=-1):
        lines = []
        while True:
            try:
                lines.append(self.readline())
            except runner._Stop:
                raise
            except Exception:
                break
        return "".join(lines)

    def __iter__(self):
        return self

    def __next__(self):
        return self.readline()

    def isatty(self):
        return False


def main():
    send({"t": "ready", "version": ".".join(map(str, sys.version_info[:3]))})
    line = proto_in.readline()
    if not line:
        return
    message = json.loads(line)
    if message.get("t") != "run":
        return
    sys.argv = ["program.py"]
    cwd = os.getcwd()
    if cwd not in sys.path:
        sys.path.insert(0, cwd)  # a program can import a file that sits next to it
    sys.stdin = Stdin()
    result = runner.run(message["source"], write, ask)
    flush()
    send({"t": "done", "result": result})


main()
