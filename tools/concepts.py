"""The things a Python program asks the student to know, found with Python's own parser.

concepts(source) -> list of keys, in the order they first appear, for example
['print', 'string'] or ['for', 'range', 'in']. The course uses it to check that every
new thing is explained in the step where it first shows up (tools/check-newwords.js).
"""
import ast
import io
import keyword
import tokenize

OPS = {
    ast.Add: "+", ast.Sub: "-", ast.Mult: "*", ast.Div: "/", ast.FloorDiv: "//", ast.Mod: "%", ast.Pow: "**",
    ast.Eq: "==", ast.NotEq: "!=", ast.Lt: "<", ast.Gt: ">", ast.LtE: "<=", ast.GtE: ">=",
    ast.In: "in", ast.NotIn: "not in", ast.Is: "is", ast.IsNot: "is not",
    ast.BitAnd: "&", ast.BitOr: "|", ast.BitXor: "^", ast.LShift: "<<", ast.RShift: ">>", ast.MatMult: "@",
}
# in, is, not, and, or are found from the syntax tree below (a for loop is not a test with "in")
KEYWORDS = set(keyword.kwlist) - {"True", "False", "None", "in", "is", "not", "and", "or"}


def concepts(source):
    found = []

    def add(key):
        if key not in found:
            found.append(key)

    # keywords, comments, strings: from the tokens, in reading order
    try:
        for tok in tokenize.generate_tokens(io.StringIO(source).readline):
            if tok.type == tokenize.NAME and tok.string in KEYWORDS:
                add(tok.string)
            elif tok.type == tokenize.COMMENT:
                add("comment")
            elif tok.type == tokenize.STRING:
                text = tok.string
                prefix = text[: len(text) - len(text.lstrip("rRbBfFuU"))].lower()
                body = text[len(prefix):]
                add("string")
                if "r" in prefix:
                    add("raw-string")
                if body[:3] in ('"""', "'''"):
                    add("triple-quote")
                if "f" in prefix:
                    add("f-string")
                elif "\\" in body and "r" not in prefix:
                    add("escape")
            elif tok.type == tokenize.NUMBER:
                add("decimal" if any(c in tok.string for c in ".eE") and not tok.string.lower().startswith("0x") else "number")
    except (tokenize.TokenError, IndentationError, SyntaxError):
        pass

    try:
        tree = ast.parse(source)
    except SyntaxError:
        return found

    defined = set()
    modules = {}  # the name used in the program -> the real name of the module
    for node in ast.walk(tree):
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
            defined.add(node.name)
            if not isinstance(node, ast.ClassDef):
                a = node.args
                for arg in a.posonlyargs + a.args + a.kwonlyargs + [x for x in (a.vararg, a.kwarg) if x]:
                    defined.add(arg.arg)
        elif isinstance(node, ast.Lambda):
            a = node.args
            for arg in a.posonlyargs + a.args + a.kwonlyargs + [x for x in (a.vararg, a.kwarg) if x]:
                defined.add(arg.arg)
        elif isinstance(node, ast.Name) and isinstance(node.ctx, (ast.Store, ast.Del)):
            defined.add(node.id)
        elif isinstance(node, ast.ExceptHandler) and node.name:
            defined.add(node.name)
        elif isinstance(node, (ast.Import, ast.ImportFrom)):
            for alias in node.names:
                name = alias.asname or alias.name.split(".")[0]
                if isinstance(node, ast.Import):
                    modules[name] = alias.name.split(".")[0]
                defined.add(name)
                if isinstance(node, ast.ImportFrom):
                    add((node.module or "") + "." + alias.name)
                else:
                    add("module:" + alias.name)

    for node in ast.walk(tree):
        if isinstance(node, ast.Call):
            f = node.func
            if isinstance(f, ast.Name) and f.id not in defined:
                add(f.id)
            elif isinstance(f, ast.Attribute):
                if isinstance(f.value, ast.Name) and f.value.id in modules:
                    add(modules[f.value.id] + "." + f.attr)
                elif f.attr not in defined:
                    add("." + f.attr)
            if len([a for a in node.args if not isinstance(a, ast.Starred)]) >= 2:
                add("many-args")
            for kw in node.keywords:
                if kw.arg and not (isinstance(f, ast.Name) and f.id in defined) and not (isinstance(f, ast.Attribute) and f.attr in defined):
                    add("arg:" + kw.arg)
        elif isinstance(node, ast.Attribute):
            if isinstance(node.value, ast.Name) and node.value.id in modules and not isinstance(getattr(node, "ctx", None), ast.Store):
                add(modules[node.value.id] + "." + node.attr)
        elif isinstance(node, ast.BinOp):
            add(OPS.get(type(node.op), "op"))
        elif isinstance(node, ast.AugAssign):
            add(OPS.get(type(node.op), "op") + "=")
        elif isinstance(node, ast.Compare):
            for op in node.ops:
                add(OPS.get(type(op), "compare"))
        elif isinstance(node, ast.Assign):
            add("=")
            if any(isinstance(t, (ast.Tuple, ast.List)) for t in node.targets):
                add("unpack")
            if len(node.targets) > 1:
                add("chain-assign")
        elif isinstance(node, ast.AnnAssign):
            add("annotation")
        elif isinstance(node, ast.FormattedValue):
            if node.format_spec is not None:
                add("format-spec")
        elif isinstance(node, ast.List):
            add("list-literal")
        elif isinstance(node, ast.Dict):
            add("dict-literal")
        elif isinstance(node, ast.Set):
            add("set-literal")
        elif isinstance(node, ast.Tuple) and not isinstance(node.ctx, ast.Store):
            add("tuple-literal")
        elif isinstance(node, ast.Subscript):
            add("slice" if isinstance(node.slice, ast.Slice) else "index")
        elif isinstance(node, (ast.ListComp, ast.SetComp, ast.DictComp, ast.GeneratorExp)):
            add("comprehension")
        elif isinstance(node, ast.IfExp):
            add("one-line-if")
        elif isinstance(node, ast.NamedExpr):
            add(":=")
        elif isinstance(node, ast.Starred):
            add("star")
        elif isinstance(node, ast.BoolOp):
            add("and" if isinstance(node.op, ast.And) else "or")
        elif isinstance(node, ast.UnaryOp) and isinstance(node.op, ast.Not):
            add("not")
        elif isinstance(node, ast.Constant):
            if node.value is True or node.value is False:
                add("true-false")
            elif node.value is None:
                add("None")
        elif isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            if node.decorator_list:
                add("decorator")
            if node.returns is not None or any(a.annotation for a in node.args.args):
                add("annotation")
            if node.args.vararg:
                add("*args")
            if node.args.kwarg:
                add("**kwargs")
            if node.args.defaults or node.args.kw_defaults:
                add("default-value")
        elif isinstance(node, ast.ClassDef):
            if node.decorator_list:
                add("decorator")
        elif isinstance(node, ast.Match):
            add("match")
    return found
