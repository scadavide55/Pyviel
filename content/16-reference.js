// Appendix · the cheat sheet and Python on your own computer. See tools/build-course.js for the format.
const c = String.raw;
const G8 = ['Appendix · Your cheat sheet', 'Appendice · Il tuo foglio di riepilogo', 'Annexe · Ta fiche de révision'];
const G9 = ['Appendix · Python on your computer', 'Appendice · Python sul tuo computer', 'Annexe · Python sur ton ordinateur'];

module.exports = [
  {
    group: G8,
    title: ['The Python cheat sheet', 'Il foglio di riepilogo di Python', 'La fiche de révision de Python'],
    subtitle: ['Everything in six small pages', 'Tutto in sei piccole pagine', 'Tout en six petites pages'],
    steps: [
      {
        c: [c`# values and names
name, age, height = "Ada", 12, 1.5
print(type(name), type(age), type(height), type(True), type(None))
print(f"{name} is {age}; next year {age + 1}")
print(7 / 2, 7 // 2, 7 % 2, 2 ** 8, round(3.14159, 2))
print(int("5") + 1, str(5) + "1", float("2.5"), bool(""))
text = "  Hello, Python  "
print(text.strip().lower().replace("python", "world"))
print(text.split(","), len(text), text[2:7], text[::-1][:5])`, c`# valori e nomi
name, age, height = "Ada", 12, 1.5
print(type(name), type(age), type(height), type(True), type(None))
print(f"{name} ha {age} anni; l'anno prossimo {age + 1}")
print(7 / 2, 7 // 2, 7 % 2, 2 ** 8, round(3.14159, 2))
print(int("5") + 1, str(5) + "1", float("2.5"), bool(""))
text = "  Ciao, Python  "
print(text.strip().lower().replace("python", "mondo"))
print(text.split(","), len(text), text[2:7], text[::-1][:5])`, c`# valeurs et noms
name, age, height = "Ada", 12, 1.5
print(type(name), type(age), type(height), type(True), type(None))
print(f"{name} a {age} ans ; l'année prochaine {age + 1}")
print(7 / 2, 7 // 2, 7 % 2, 2 ** 8, round(3.14159, 2))
print(int("5") + 1, str(5) + "1", float("2.5"), bool(""))
text = "  Bonjour, Python  "
print(text.strip().lower().replace("python", "monde"))
print(text.split(","), len(text), text[2:7], text[::-1][:5])`],
        t: ['Page 1: values, numbers and text', 'Pagina 1: valori, numeri e testo', 'Page 1 : valeurs, nombres et texte'],
        x: [`The first page of the sheet: names and the kinds of value (str, int, float, bool, None), the sums, the conversions, an f-string, and the text tools.

Read each line and say out loud what you expect before you look at the result. If one surprises you, go back to that lesson.`,
          `La prima pagina del foglio: i nomi e i tipi di valore (str, int, float, bool, None), i conti, le conversioni, una f-string e gli strumenti del testo.

Leggi ogni riga e di' a voce alta cosa ti aspetti prima di guardare il risultato. Se una ti sorprende, torna a quella lezione.`,
          `La première page de la fiche : les noms et les sortes de valeur (str, int, float, bool, None), les calculs, les conversions, une f-string et les outils du texte.

Lis chaque ligne et dis à voix haute ce que tu attends avant de regarder le résultat. Si l'une te surprend, retourne à cette leçon.`],
        ex: {
          t: ['Make your own boxes: Max in name and 9 in age. Then show a sentence with both, using an f-string.', 'Crea le tue scatole: Max in name e 9 in age. Poi mostra una frase con tutti e due, usando una f-string.', 'Crée tes boîtes : Max dans name et 9 dans age. Puis affiche une phrase avec les deux, en utilisant une f-string.'],
          h: ['Two boxes, then an f before the quotes, and each box between curly brackets inside the sentence.', 'Due scatole, poi una f prima delle virgolette, e ogni scatola tra parentesi graffe dentro la frase.', 'Deux boîtes, puis un f avant les guillemets, et chaque boîte entre accolades dans la phrase.'],
          sol: 'name, age = "Max", 9\nprint(f"{name} is {age}")', m: '^(?=[\\s\\S]*Max)(?=[\\s\\S]*9)', uses: ['f-string']
        }
      },
      {
        c: [c`# choices and loops
n = 7
if n < 0:
    print("negative")
elif n == 0:
    print("zero")
else:
    print("positive")
print("odd" if n % 2 else "even")

for i in range(3):
    print("for", i)
count = 3
while count > 0:
    print("while", count)
    count -= 1
for i, letter in enumerate("ab", start=1):
    print(i, letter)
for i in range(10):
    if i == 2:
        continue
    if i == 4:
        break
    print("i", i)`, c`# scelte e cicli
n = 7
if n < 0:
    print("negativo")
elif n == 0:
    print("zero")
else:
    print("positivo")
print("dispari" if n % 2 else "pari")

for i in range(3):
    print("for", i)
count = 3
while count > 0:
    print("while", count)
    count -= 1
for i, letter in enumerate("ab", start=1):
    print(i, letter)
for i in range(10):
    if i == 2:
        continue
    if i == 4:
        break
    print("i", i)`, c`# choix et boucles
n = 7
if n < 0:
    print("négatif")
elif n == 0:
    print("zéro")
else:
    print("positif")
print("impair" if n % 2 else "pair")

for i in range(3):
    print("for", i)
count = 3
while count > 0:
    print("while", count)
    count -= 1
for i, letter in enumerate("ab", start=1):
    print(i, letter)
for i in range(10):
    if i == 2:
        continue
    if i == 4:
        break
    print("i", i)`],
        t: ['Page 2: choices and loops', 'Pagina 2: scelte e cicli', 'Page 2 : choix et boucles'],
        x: [`if, elif and else choose a road. for walks through things, while repeats while a question is true, enumerate adds a number to each item, break leaves the loop and continue skips to the next turn.

Change n to a negative number and to 0 and see another road taken.`,
          `if, elif ed else scelgono una strada. for scorre le cose, while ripete finché una domanda è vera, enumerate aggiunge un numero a ogni elemento, break esce dal ciclo e continue salta al giro successivo.

Cambia n in un numero negativo e in 0 e guarda un'altra strada.`,
          `if, elif et else choisissent une route. for parcourt des choses, while répète tant qu'une question est vraie, enumerate ajoute un numéro à chaque élément, break sort de la boucle et continue saute au tour suivant.

Change n en un nombre négatif et en 0 et regarde une autre route.`],
        ex: {
          t: ['Show the word big when n is more than 100, and small otherwise, with a one-line if. n is 500.', 'Mostra la parola big quando n è più di 100, e small altrimenti, con un if in una riga. n vale 500.', 'Affiche le mot big quand n vaut plus de 100, et small sinon, avec un if sur une ligne. n vaut 500.'],
          h: ['A one-line if reads: value if condition else other value. Put it inside print.', 'Un if in una riga si legge: valore if condizione else altro valore. Mettilo dentro print.', 'Un if sur une ligne se lit : valeur if condition else autre valeur. Mets-le dans print.'],
          start: 'n = 500', sol: 'n = 500\nprint("big" if n > 100 else "small")', out: 'big', c: ' if .* else '
        }
      },
      {
        c: c`# collections
items = [3, 1, 2]
items.append(4)
items.sort()
print(items, items[0], items[-1], items[1:3], len(items))
point = (1, 2)
x, y = point
print(x, y)
ages = {"Ada": 12, "Max": 9}
ages["Zoe"] = 15
print(ages["Ada"], ages.get("Bob", "?"), list(ages), "Max" in ages)
for name, age in ages.items():
    print(name, age)
unique = {1, 2, 2, 3}
print(unique, unique | {9}, unique & {2, 9})
print([n * n for n in items if n % 2 == 0], {n: n * 2 for n in (1, 2)})
print(sorted(ages, key=ages.get), max(items), sum(items))`,
        t: ['Page 3: lists, tuples, dictionaries and sets', 'Pagina 3: liste, tuple, dizionari e insiemi', 'Page 3 : listes, tuples, dictionnaires et ensembles'],
        x: [`Lists can change and keep an order. Tuples are fixed. Dictionaries look values up by a key. Sets keep each thing once. Comprehensions build any of them in one line.

Pick one collection and change it, then run again to see what moves.`,
          `Le liste possono cambiare e tengono un ordine. Le tuple sono fisse. I dizionari cercano i valori da una chiave. Gli insiemi tengono ogni cosa una volta sola. Le comprensioni costruiscono ognuna di loro in una riga.

Scegli una collezione e cambiala, poi riesegui per vedere cosa si muove.`,
          `Les listes peuvent changer et gardent un ordre. Les tuples sont fixes. Les dictionnaires cherchent des valeurs par une clé. Les ensembles gardent chaque chose une seule fois. Les compréhensions construisent chacun d'eux en une ligne.

Choisis une collection et change-la, puis relance pour voir ce qui bouge.`],
        ex: {
          t: ['Make a dictionary with two pets and their ages, and show the age of the first with its key.', 'Fai un dizionario con due animali e le loro età e mostra l\'età del primo con la sua chiave.', 'Fais un dictionnaire avec deux animaux et leurs âges et affiche l\'âge du premier avec sa clé.'],
          h: ['Curly brackets, pairs key: value with commas between them. Then read a value with its key in square brackets.', 'Parentesi graffe, coppie chiave: valore separate da virgole. Poi leggi un valore con la sua chiave tra quadre.', 'Des accolades, des paires clé: valeur séparées par des virgules. Puis lis une valeur avec sa clé entre crochets.'],
          sol: 'pets = {"Rex": 3, "Tom": 5}\nprint(pets["Rex"])', out: '3', c: '\\{.*:.*\\}'
        }
      },
      {
        c: c`# functions
def area(width, height=1, *extra, **options):
    """Return the area."""
    return width * height

print(area(3), area(3, 4), area(height=2, width=5))
square = lambda n: n * n
print(square(6), list(map(square, [1, 2, 3])))

def counter():
    total = 0
    def add(n):
        nonlocal total
        total += n
        return total
    return add

c = counter()
c(5)
print(c(10))
def fact(n):
    return 1 if n <= 1 else n * fact(n - 1)
print(fact(6))`,
        t: ['Page 4: functions', 'Pagina 4: funzioni', 'Page 4 : fonctions'],
        x: [`def makes a function. A parameter can have a default, *extra collects more values, **options collects named ones. lambda is a tiny function, and a function can make another function (a closure). A function can also call itself (recursion).

Try calling area with other numbers.`,
          `def crea una funzione. Un parametro può avere un valore predefinito, *extra raccoglie altri valori, **options quelli con nome. lambda è una funzioncina e una funzione può crearne un'altra (una closure). Una funzione può anche chiamare se stessa (ricorsione).

Prova a chiamare area con altri numeri.`,
          `def fait une fonction. Un paramètre peut avoir une valeur par défaut, *extra rassemble d'autres valeurs, **options celles qui ont un nom. lambda est une minuscule fonction, et une fonction peut en faire une autre (une closure). Une fonction peut aussi s'appeler elle-même (récursion).

Essaie d'appeler area avec d'autres nombres.`],
        ex: {
          t: ['Write a function cube(n) that returns n * n * n and show cube(4) (64).', 'Scrivi una funzione cube(n) che restituisce n * n * n e mostra cube(4) (64).', 'Écris une fonction cube(n) qui rend n * n * n et affiche cube(4) (64).'],
          h: ['def, the name and n; inside, give back n times n times n. Then show cube(4).', 'def, il nome e n; dentro, restituisci n per n per n. Poi mostra cube(4).', 'def, le nom et n ; dedans, rends n fois n fois n. Puis affiche cube(4).'],
          sol: 'def cube(n):\n    return n * n * n\n\nprint(cube(4))', out: '64', c: 'def cube'
        }
      },
      {
        c: c`# classes and errors
from dataclasses import dataclass

class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."
    def __repr__(self):
        return f"{type(self).__name__}({self.name})"

class Dog(Animal):
    def speak(self):
        return "Woof"

pets = [Animal("Thing"), Dog("Rex")]
print(pets, [p.speak() for p in pets], isinstance(pets[1], Animal))

@dataclass
class Point:
    x: int
    y: int = 0
print(Point(3), Point(3) == Point(3, 0))

def safe_int(text):
    try:
        return int(text)
    except ValueError:
        return None
print(safe_int("12"), safe_int("no"))
try:
    raise KeyError("missing")
except (KeyError, IndexError) as error:
    print("caught", type(error).__name__)`,
        n: ['KeyError'],
        t: ['Page 5: classes and errors', 'Pagina 5: classi ed errori', 'Page 5 : classes et erreurs'],
        x: [`A class is a blueprint with data (__init__) and actions (methods). A child class inherits and can override. A dataclass writes the boring parts. try and except catch errors, and raise makes one.

Add a new child class, for example Cat, and put one in the list.`,
          `Una classe è un progetto con dati (__init__) e azioni (metodi). Una classe figlia eredita e può sovrascrivere. Una dataclass scrive le parti noiose. try ed except prendono gli errori e raise ne fa uno.

Aggiungi una nuova classe figlia, per esempio Cat, e mettine una nella lista.`,
          `Une classe est un plan avec des données (__init__) et des actions (méthodes). Une classe enfant hérite et peut redéfinir. Une dataclass écrit les parties ennuyeuses. try et except attrapent des erreurs, et raise en fait une.

Ajoute une nouvelle classe enfant, par exemple Cat, et mets-en une dans la liste.`],
        ex: {
          t: ['Write a class Cat that is an Animal and whose speak returns Meow. Show Cat("Tom").speak() (Meow).', 'Scrivi una classe Cat che è un Animal e il cui speak restituisce Miao. Mostra Cat("Tom").speak() (Miao).', 'Écris une classe Cat qui est un Animal et dont speak rend Miaou. Affiche Cat("Tom").speak() (Miaou).'],
          h: ['Cat has Animal in its brackets, and its own speak that gives back the sound.', 'Cat ha Animal tra le parentesi, e il suo speak che restituisce il verso.', 'Cat a Animal entre ses parenthèses, et son propre speak qui rend le cri.'],
          sol: ['class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow"\n\nprint(Cat("Tom").speak())', 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        return "Miao"\n\nprint(Cat("Tom").speak())', 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        return "Miaou"\n\nprint(Cat("Tom").speak())'],
          out: ['Meow', 'Miao', 'Miaou'], c: 'class Cat\\(Animal\\)'
        }
      },
      {
        c: c`# files, modules and tricks
import json, math, random, os
from collections import Counter

random.seed(1)
print(math.sqrt(49), random.choice("abc"), Counter("hello").most_common(1))
with open("demo_sheet.json", "w") as f:
    json.dump({"scores": [1, 2, 3]}, f)
with open("demo_sheet.json") as f:
    print(json.load(f)["scores"], os.path.exists("demo_sheet.json"))

def numbers():
    n = 0
    while True:
        yield n
        n += 1
gen = numbers()
print([next(gen) for i in range(4)])

def twice(function):
    def wrapper(*args):
        return function(function(*args))
    return wrapper
@twice
def add3(n):
    return n + 3
print(add3(10))

first, *rest = [1, 2, 3, 4]
print(first, rest, {**{"a": 1}, "b": 2}, [*"ab", 9])
match [1, 2]:
    case [a, b]:
        print("a pair:", a, b)
if (size := len(rest)) > 2:
    print("size", size)`,
        t: ['Page 6: files, modules and tricks', 'Pagina 6: file, moduli e trucchi', 'Page 6 : fichiers, modules et astuces'],
        x: [`import brings tool boxes (math, random, json, os, collections). with open reads and writes files. A function with yield is a generator. A decorator wraps a function. The star unpacks, match picks by shape, and := names a value inside an expression.

That is the whole language on one page. When you forget something, come back here, or to the lesson.`,
          `import porta le cassette degli attrezzi (math, random, json, os, collections). with open legge e scrive i file. Una funzione con yield è un generatore. Un decoratore avvolge una funzione. La stella apre, match sceglie dalla forma e := dà un nome a un valore dentro un'espressione.

Questo è tutto il linguaggio in una pagina. Quando dimentichi qualcosa, torna qui, o alla lezione.`,
          `import apporte des boîtes à outils (math, random, json, os, collections). with open lit et écrit des fichiers. Une fonction avec yield est un générateur. Un décorateur enveloppe une fonction. L'étoile déballe, match choisit selon la forme, et := donne un nom à une valeur dans une expression.

C'est tout le langage sur une page. Quand tu oublies quelque chose, reviens ici, ou à la leçon.`],
        ex: {
          t: ['Use random.choice with the seed 1 to pick a letter from "xyz" and show it (any letter is fine).', 'Usa random.choice con il seme 1 per scegliere una lettera da "xyz" e mostrala (va bene qualsiasi lettera).', 'Utilise random.choice avec la graine 1 pour choisir une lettre dans "xyz" et affiche-la (n\'importe quelle lettre convient).'],
          h: ['Set the seed first; then random.choice can pick from a text, like from a list.', 'Fissa prima il seme; poi random.choice può scegliere da un testo, come da una lista.', 'Fixe d\'abord la graine ; puis random.choice peut choisir dans un texte, comme dans une liste.'],
          sol: 'import random\nrandom.seed(1)\nprint(random.choice("xyz"))', m: '^[xyz]$', c: 'random\\.choice'
        }
      }
    ]
  },
  {
    group: G9,
    title: ['Python in a terminal', 'Python in un terminale', 'Python dans un terminal'],
    subtitle: ['The commands every Python user types', 'I comandi che ogni utente di Python scrive', 'Les commandes que tout utilisateur de Python tape'],
    steps: [
      {
        c: c`import sys
print("Python", sys.version_info.major)
print("This is Python", sys.version_info.major, "and it is running your lines.")`,
        n: ['module:sys', 'sys.version_info'],
        t: ['The terminal and python3 --version', 'Il terminale e python3 --version', 'Le terminal et python3 --version'],
        x: [`Until now you wrote programs here, in Pyviel. Real programmers also run Python from a terminal: a window where you type a command and press Enter.

Open one. On a Mac it is the app called Terminal. On Windows it is PowerShell or Terminal. On Linux it is Terminal or Konsole. Type this and press Enter:

python3 --version

The computer answers with the version, something like Python 3.14.8. On Windows the command is py instead of python3. The program on this page asks Python the same question from the inside, with the tool box sys.`,
          `Finora hai scritto i programmi qui, in Pyviel. Chi programma esegue Python anche da un terminale: una finestra dove scrivi un comando e premi Invio.

Aprine uno. Su Mac è l'app che si chiama Terminale. Su Windows è PowerShell o Terminale. Su Linux è Terminale o Konsole. Scrivi questo e premi Invio:

python3 --version

Il computer risponde con la versione, qualcosa come Python 3.14.8. Su Windows il comando è py invece di python3. Il programma di questa pagina fa a Python la stessa domanda da dentro, con la cassetta sys.`,
          `Jusqu'ici tu as écrit les programmes ici, dans Pyviel. Les programmeurs lancent aussi Python depuis un terminal : une fenêtre où tu tapes une commande et appuies sur Entrée.

Ouvre-en un. Sur Mac c'est l'application Terminal. Sur Windows c'est PowerShell ou Terminal. Sur Linux c'est Terminal ou Konsole. Tape ceci et appuie sur Entrée :

python3 --version

L'ordinateur répond avec la version, quelque chose comme Python 3.14.8. Sous Windows la commande est py au lieu de python3. Le programme de cette page pose la même question à Python, de l'intérieur, avec la boîte sys.`],
        ex: {
          t: ['Show the big number of the Python version, with sys.version_info.major (3).', 'Mostra il numero grande della versione di Python, con sys.version_info.major (3).', 'Affiche le grand nombre de la version de Python, avec sys.version_info.major (3).'],
          h: ['Bring in sys first. version_info has parts with names: major is the big number.', 'Prima porta dentro sys. version_info ha delle parti con un nome: major è il numero grande.', 'Fais d\'abord entrer sys. version_info a des parties avec des noms : major est le grand nombre.'],
          sol: 'import sys\nprint(sys.version_info.major)', out: '3', c: 'version_info'
        },
        w: ['If the terminal says "command not found", Python is not installed on your computer yet. Get it free from python.org. Pyviel has its own Python inside, but the terminal cannot see it.', 'Se il terminale dice "command not found", Python non è ancora installato sul tuo computer. Scaricalo gratis da python.org. Pyviel ha un suo Python dentro, ma il terminale non lo vede.', 'Si le terminal dit "command not found", Python n\'est pas encore installé sur ton ordinateur. Prends-le gratuitement sur python.org. Pyviel a son propre Python à l\'intérieur, mais le terminal ne le voit pas.']
      },
      {
        c: [c`# hello.py
name = "Ada"
print("Hello,", name)
print("This program was run from a file.")`, c`# hello.py
name = "Ada"
print("Ciao,", name)
print("Questo programma è stato eseguito da un file.")`, c`# hello.py
name = "Ada"
print("Bonjour,", name)
print("Ce programme a été lancé depuis un fichier.")`],
        t: ['Run a file: python3 hello.py', 'Eseguire un file: python3 hello.py', 'Lancer un fichier : python3 hello.py'],
        x: [`A program that you want to keep lives in a file whose name ends in .py. You run it by giving the file name to Python.

Step by step in the terminal: 1) go to the folder that holds the file with cd (change directory): cd Documents/Pyviel. 2) look at what is there with ls on Mac and Linux, or dir on Windows. 3) run it: python3 hello.py

In the desktop app of Pyviel, the Command button does the first part for you: it saves your program in the Pyviel folder and shows the exact lines to type.`,
          `Un programma che vuoi tenere vive in un file il cui nome finisce con .py. Lo esegui dando a Python il nome del file.

Passo per passo nel terminale: 1) vai nella cartella che contiene il file con cd (change directory): cd Documents/Pyviel. 2) guarda cosa c'è con ls su Mac e Linux, o dir su Windows. 3) eseguilo: python3 hello.py

Nell'app per computer di Pyviel il pulsante Comando fa la prima parte per te: salva il programma nella cartella Pyviel e mostra le righe esatte da scrivere.`,
          `Un programme que tu veux garder vit dans un fichier dont le nom finit par .py. Tu le lances en donnant le nom du fichier à Python.

Pas à pas dans le terminal : 1) va dans le dossier qui contient le fichier avec cd (change directory) : cd Documents/Pyviel. 2) regarde ce qu'il y a avec ls sur Mac et Linux, ou dir sous Windows. 3) lance-le : python3 hello.py

Dans l'application de bureau de Pyviel, le bouton Commande fait la première partie pour toi : il enregistre ton programme dans le dossier Pyviel et montre les lignes exactes à taper.`],
        ex: {
          t: ['Write a second program, for a file called greet.py: a note at the top with its file name, then a line that shows your own greeting.', 'Scrivi un secondo programma, per un file chiamato greet.py: una nota in cima con il nome del file, poi una riga che mostra un tuo saluto.', 'Écris un second programme, pour un fichier appelé greet.py : une note en haut avec le nom du fichier, puis une ligne qui affiche ta propre salutation.'],
          h: ['A note starts with # and Python skips it. It goes on the very first line, before the print.', 'Una nota comincia con # e Python la salta. Va sulla primissima riga, prima del print.', 'Une note commence par # et Python la saute. Elle va sur la toute première ligne, avant le print.'],
          sol: '# greet.py\nprint("Hi!")', m: '.', c: '^# greet\\.py'
        },
        w: ['Python must find the file. If it says "No such file or directory", you are in the wrong folder, or the name is spelled differently. Capital letters count.', 'Python deve trovare il file. Se dice "No such file or directory", sei nella cartella sbagliata o il nome è scritto diversamente. Le maiuscole contano.', 'Python doit trouver le fichier. S\'il dit "No such file or directory", tu es dans le mauvais dossier ou le nom est écrit autrement. Les majuscules comptent.']
      },
      {
        c: c`print(2 + 2)
print("ab" * 3)
print(len("terminal"))`,
        t: ['One line and the playground: -c and >>>', 'Una riga e il campo giochi: -c e >>>', 'Une ligne et le terrain de jeu : -c et >>>'],
        x: [`Two more ways to use Python without a file. One line: python3 -c "print(2 + 2)". The letter c means command: Python runs the text in the quotes and stops.

The playground: just type python3 and press Enter. You see >>> and Python waits. Type 2 + 2 and press Enter: it answers 4 at once. To leave, type exit() or press Ctrl+D (Ctrl+Z then Enter on Windows). The program on this page has the same three lines that you would type there.`,
          `Altri due modi di usare Python senza un file. Una riga: python3 -c "print(2 + 2)". La lettera c vuol dire command: Python esegue il testo tra le virgolette e si ferma.

Il campo giochi: scrivi solo python3 e premi Invio. Vedi >>> e Python aspetta. Scrivi 2 + 2 e premi Invio: risponde 4 subito. Per uscire scrivi exit() o premi Ctrl+D (Ctrl+Z poi Invio su Windows). Il programma di questa pagina ha le stesse tre righe che scriveresti là.`,
          `Deux autres façons d'utiliser Python sans fichier. Une ligne : python3 -c "print(2 + 2)". La lettre c veut dire command : Python exécute le texte entre guillemets et s'arrête.

Le terrain de jeu : tape juste python3 et appuie sur Entrée. Tu vois >>> et Python attend. Tape 2 + 2 et appuie sur Entrée : il répond 4 tout de suite. Pour sortir, tape exit() ou appuie sur Ctrl+D (Ctrl+Z puis Entrée sous Windows). Le programme de cette page a les mêmes trois lignes que tu taperais là-bas.`],
        ex: {
          uses: ['*'],
          t: ['Show 10 * 10 and the word abc repeated 2 times, on two lines.', 'Mostra 10 * 10 e la parola abc ripetuta 2 volte, su due righe.', 'Affiche 10 * 10 et le mot abc répété 2 fois, sur deux lignes.'],
          h: ['Two print lines. * multiplies numbers, and it repeats a text too.', 'Due righe print. * moltiplica i numeri, e ripete anche un testo.', 'Deux lignes print. * multiplie les nombres, et répète aussi un texte.'],
          sol: 'print(10 * 10)\nprint("abc" * 2)', out: '100\nabcabc'
        }
      }
    ]
  },
  {
    title: ['Give your program information', 'Dai informazioni al tuo programma', 'Donne des informations à ton programme'],
    subtitle: ['Arguments, exit codes and the main guard', 'Argomenti, codici di uscita e la guardia main', 'Arguments, codes de sortie et la garde main'],
    steps: [
      {
        c: [c`import sys

names = sys.argv[1:]
if names:
    for name in names:
        print("Hello,", name)
else:
    print("No names given. Run it like: python3 hello.py Ada Linus")`, c`import sys

names = sys.argv[1:]
if names:
    for name in names:
        print("Ciao,", name)
else:
    print("Nessun nome. Eseguilo così: python3 hello.py Ada Linus")`, c`import sys

names = sys.argv[1:]
if names:
    for name in names:
        print("Bonjour,", name)
else:
    print("Aucun nom. Lance-le ainsi : python3 hello.py Ada Linus")`],
        n: ['sys.argv'],
        t: ['Arguments: sys.argv', 'Gli argomenti: sys.argv', 'Les arguments : sys.argv'],
        x: [`After the file name you can write more words: python3 hello.py Ada Linus. Python collects them in a list called sys.argv.

Inside the program, sys.argv is ["hello.py", "Ada", "Linus"]. The first item is always the name of the file, so the real arguments start at place 1: sys.argv[1:]. Words with spaces need quotes: python3 hello.py "Ada Lovelace". Here nobody gave names, so the program explains how to run it.`,
          `Dopo il nome del file puoi scrivere altre parole: python3 hello.py Ada Linus. Python le raccoglie in una lista che si chiama sys.argv.

Dentro il programma, sys.argv è ["hello.py", "Ada", "Linus"]. Il primo elemento è sempre il nome del file, quindi gli argomenti veri partono dal posto 1: sys.argv[1:]. Le parole con spazi vogliono le virgolette: python3 hello.py "Ada Lovelace". Qui nessuno ha dato dei nomi, quindi il programma spiega come eseguirlo.`,
          `Après le nom du fichier tu peux écrire d'autres mots : python3 hello.py Ada Linus. Python les range dans une liste appelée sys.argv.

Dans le programme, sys.argv vaut ["hello.py", "Ada", "Linus"]. Le premier élément est toujours le nom du fichier, donc les vrais arguments commencent à la place 1 : sys.argv[1:]. Les mots avec des espaces veulent des guillemets : python3 hello.py "Ada Lovelace". Ici personne n'a donné de noms, alors le programme explique comment le lancer.`],
        ex: {
          t: ['Show how many words were typed after the file name: len(sys.argv[1:]) (0 here).', 'Mostra quante parole sono state scritte dopo il nome del file: len(sys.argv[1:]) (qui 0).', 'Affiche combien de mots ont été tapés après le nom du fichier : len(sys.argv[1:]) (ici 0).'],
          h: ['sys.argv is a list; the slice [1:] leaves out the file name, and len counts the rest. Bring in sys first.', 'sys.argv è una lista; la fetta [1:] lascia fuori il nome del file, e len conta il resto. Porta dentro sys prima.', 'sys.argv est une liste ; la tranche [1:] laisse de côté le nom du fichier, et len compte le reste. Fais entrer sys d\'abord.'],
          sol: 'import sys\nprint(len(sys.argv[1:]))', out: '0', c: 'argv'
        },
        w: ['Arguments always arrive as text. The word 5 is "5", not the number 5: use int() to turn it into a number.', 'Gli argomenti arrivano sempre come testo. La parola 5 è "5", non il numero 5: usa int() per trasformarla in numero.', 'Les arguments arrivent toujours sous forme de texte. Le mot 5 est "5", pas le nombre 5 : utilise int() pour en faire un nombre.']
      },
      {
        c: [c`import sys

if len(sys.argv) < 2:
    print("Usage: python3 greet.py NAME")
    sys.exit(1)
print("Hello,", sys.argv[1])`, c`import sys

if len(sys.argv) < 2:
    print("Uso: python3 greet.py NOME")
    sys.exit(1)
print("Ciao,", sys.argv[1])`, c`import sys

if len(sys.argv) < 2:
    print("Usage : python3 greet.py NOM")
    sys.exit(1)
print("Bonjour,", sys.argv[1])`],
        n: ['sys.exit'],
        t: ['Saying how it went: exit codes', 'Dire com\'è andata: i codici di uscita', 'Dire comment ça s\'est passé : les codes de sortie'],
        x: [`When a program ends, it leaves a small number behind: the exit code. 0 means all went well. Any other number means something went wrong. sys.exit(1) stops the program right there and leaves the code 1. Python itself leaves 1 when a program stops with an error, and 0 when it ends normally.

You can look at the last code in the terminal: on Mac and Linux type echo $? and on Windows PowerShell type echo $LASTEXITCODE. Other programs use this number to know if yours worked. That is why a good program that is used wrongly prints a short usage line and exits with 1.`,
          `Quando un programma finisce, lascia dietro un piccolo numero: il codice di uscita. 0 vuol dire che è andato tutto bene. Qualsiasi altro numero vuol dire che qualcosa è andato storto. sys.exit(1) ferma il programma lì e lascia il codice 1. Python stesso lascia 1 quando un programma si ferma con un errore, e 0 quando finisce normalmente.

Puoi guardare l'ultimo codice nel terminale: su Mac e Linux scrivi echo $? e su Windows PowerShell scrivi echo $LASTEXITCODE. Altri programmi usano questo numero per sapere se il tuo ha funzionato. Per questo un buon programma usato male scrive una breve riga di uso ed esce con 1.`,
          `Quand un programme se termine, il laisse derrière lui un petit nombre : le code de sortie. 0 veut dire que tout s'est bien passé. Tout autre nombre veut dire que quelque chose a mal tourné. sys.exit(1) arrête le programme là et laisse le code 1. Python lui-même laisse 1 quand un programme s'arrête sur une erreur, et 0 quand il se termine normalement.

Tu peux voir le dernier code dans le terminal : sur Mac et Linux tape echo $? et sous Windows PowerShell tape echo $LASTEXITCODE. D'autres programmes utilisent ce nombre pour savoir si le tien a marché. C'est pourquoi un bon programme mal utilisé affiche une courte ligne d'usage et sort avec 1.`],
        ex: {
          t: ['Here no name is given, so sys.argv[1] does not exist and the program stops with an IndexError. Check first: when no name is given, show the line Please give a name. and stop with the exit code 1.', 'Qui non è dato nessun nome, quindi sys.argv[1] non esiste e il programma si ferma con un IndexError. Controlla prima: quando non è dato nessun nome, mostra la riga Scrivi un nome. e fermati con il codice di uscita 1.', 'Ici aucun nom n\'est donné, donc sys.argv[1] n\'existe pas et le programme s\'arrête sur une IndexError. Vérifie d\'abord : quand aucun nom n\'est donné, affiche la ligne Donne un nom. et arrête-toi avec le code de sortie 1.'],
          h: ['Before the line that uses sys.argv[1], ask how long sys.argv is: with only the file name in it, it is too short. Then show the message and stop with sys.exit.', 'Prima della riga che usa sys.argv[1], chiedi quanto è lunga sys.argv: con dentro solo il nome del file, è troppo corta. Poi mostra il messaggio e fermati con sys.exit.', 'Avant la ligne qui utilise sys.argv[1], demande quelle est la longueur de sys.argv : avec seulement le nom du fichier dedans, elle est trop courte. Puis affiche le message et arrête-toi avec sys.exit.'],
          start: ['import sys\n\nprint("Hello,", sys.argv[1])', 'import sys\n\nprint("Ciao,", sys.argv[1])', 'import sys\n\nprint("Bonjour,", sys.argv[1])'],
          sol: ['import sys\n\nif len(sys.argv) < 2:\n    print("Please give a name.")\n    sys.exit(1)\nprint("Hello,", sys.argv[1])', 'import sys\n\nif len(sys.argv) < 2:\n    print("Scrivi un nome.")\n    sys.exit(1)\nprint("Ciao,", sys.argv[1])', 'import sys\n\nif len(sys.argv) < 2:\n    print("Donne un nom.")\n    sys.exit(1)\nprint("Bonjour,", sys.argv[1])'], m: ['^Please give a name\\.$', '^Scrivi un nome\\.$', '^Donne un nom\\.$'], c: 'sys\\.exit\\(1\\)'
        }
      },
      {
        c: [c`def main():
    print("The program starts here.")

if __name__ == "__main__":
    main()`, c`def main():
    print("Il programma parte da qui.")

if __name__ == "__main__":
    main()`, c`def main():
    print("Le programme démarre ici.")

if __name__ == "__main__":
    main()`],
        t: ['The main guard again', 'La guardia main, ancora', 'La garde main, encore'],
        x: [`You met if __name__ == "__main__": in the lesson about good programs. In the terminal you see what it is for. When you run a file directly (python3 hello.py), its name is "__main__". When another file imports it (import hello), its name is "hello".

So the guard runs main only when the file is started on its own. One file can be both a program and a toolbox of functions that others can import safely.`,
          `Hai conosciuto if __name__ == "__main__": nella lezione sui buoni programmi. Nel terminale vedi a cosa serve. Quando esegui un file direttamente (python3 hello.py), il suo nome è "__main__". Quando un altro file lo importa (import hello), il suo nome è "hello".

Quindi la guardia esegue main solo quando il file parte da solo. Un file può essere insieme un programma e una cassetta di funzioni che altri importano senza rischi.`,
          `Tu as rencontré if __name__ == "__main__": dans la leçon sur les bons programmes. Dans le terminal tu vois à quoi ça sert. Quand tu lances un fichier directement (python3 hello.py), son nom est "__main__". Quand un autre fichier l'importe (import hello), son nom est "hello".

Donc la garde ne lance main que quand le fichier démarre tout seul. Un fichier peut être à la fois un programme et une boîte à outils de fonctions que d'autres importent sans risque.`],
        ex: {
          t: ['Add a second function called other that shows "other" and call it from main.', 'Aggiungi una seconda funzione che si chiama other che mostra "other" e chiamala da main.', 'Ajoute une deuxième fonction qui s\'appelle other qui affiche "other" et appelle-la depuis main.'],
          h: ['A def other with a print inside, and a call of other inside main, pushed in.', 'Un def other con un print dentro, e una chiamata di other dentro main, rientrata.', 'Un def other avec un print dedans, et un appel de other dans main, décalé.'],
          sol: 'def other():\n    print("other")\n\ndef main():\n    print("start")\n    other()\n\nif __name__ == "__main__":\n    main()', m: 'other', c: 'def other'
        }
      },
      {
        c: [c`import argparse

parser = argparse.ArgumentParser(description="Greets people")
parser.add_argument("name", nargs="?", default="friend")
parser.add_argument("--shout", action="store_true")
args = parser.parse_args()

message = "Hello, " + args.name
if args.shout:
    message = message.upper() + "!"
print(message)`, c`import argparse

parser = argparse.ArgumentParser(description="Saluta le persone")
parser.add_argument("name", nargs="?", default="amico")
parser.add_argument("--shout", action="store_true")
args = parser.parse_args()

message = "Ciao, " + args.name
if args.shout:
    message = message.upper() + "!"
print(message)`, c`import argparse

parser = argparse.ArgumentParser(description="Salue les gens")
parser.add_argument("name", nargs="?", default="ami")
parser.add_argument("--shout", action="store_true")
args = parser.parse_args()

message = "Bonjour, " + args.name
if args.shout:
    message = message.upper() + "!"
print(message)`],
        many: true,
        n: ['module:argparse', 'argparse.ArgumentParser', 'arg:description', '.add_argument', 'arg:nargs', 'arg:default', 'arg:action', '.parse_args'],
        t: ['argparse: arguments with names and help', 'argparse: argomenti con nomi e aiuto', 'argparse : des arguments avec des noms et une aide'],
        x: [`When a program has many options, reading sys.argv by hand gets messy. The module argparse does it for you, and gives a free help page. You describe the arguments you accept: add_argument("name") is a word, and add_argument("--shout", action="store_true") is a switch that is either given or not. A plain word must be typed; nargs="?" makes it optional, and default="friend" is the value it takes when nothing is typed.

Then parse_args() reads the command line and fills an object: args.name and args.shout. In a terminal: python3 greet.py Ada --shout prints HELLO, ADA! and python3 greet.py --help prints a help page that argparse wrote by itself. A wrong option gets a clear error and exit code 2.`,
          `Quando un programma ha molte opzioni, leggere sys.argv a mano diventa un pasticcio. Il modulo argparse lo fa per te e dà una pagina di aiuto gratis. Descrivi gli argomenti che accetti: add_argument("name") è una parola, e add_argument("--shout", action="store_true") è un interruttore che c'è oppure no. Una parola semplice va scritta per forza; nargs="?" la rende facoltativa, e default="amico" è il valore che prende quando non si scrive niente.

Poi parse_args() legge la riga di comando e riempie un oggetto: args.name e args.shout. In un terminale: python3 greet.py Ada --shout scrive CIAO, ADA! e python3 greet.py --help scrive una pagina di aiuto che argparse ha scritto da solo. Un'opzione sbagliata riceve un errore chiaro e il codice di uscita 2.`,
          `Quand un programme a beaucoup d'options, lire sys.argv à la main devient confus. Le module argparse le fait pour toi, et donne une page d'aide gratuite. Tu décris les arguments acceptés : add_argument("name") est un mot, et add_argument("--shout", action="store_true") est un interrupteur qui est donné ou non. Un mot simple doit être tapé ; nargs="?" le rend facultatif, et default="ami" est la valeur qu'il prend quand rien n'est tapé.

Puis parse_args() lit la ligne de commande et remplit un objet : args.name et args.shout. Dans un terminal : python3 greet.py Ada --shout affiche BONJOUR, ADA ! et python3 greet.py --help affiche une page d'aide qu'argparse a écrite tout seul. Une mauvaise option reçoit une erreur claire et le code de sortie 2.`],
        ex: {
          t: ['Here the name must be typed, so with no words argparse stops with an error (exit code 2). Make the name optional, with "world" when nothing is typed: the program must show Hello, world', 'Qui il nome va scritto per forza, quindi senza parole argparse si ferma con un errore (codice di uscita 2). Rendi il nome facoltativo, con "mondo" quando non si scrive niente: il programma deve mostrare Ciao, mondo', 'Ici le nom doit être tapé, donc sans mots argparse s\'arrête sur une erreur (code de sortie 2). Rends le nom facultatif, avec "monde" quand rien n\'est tapé : le programme doit afficher Bonjour, monde'],
          h: ['add_argument can take two more things after the name: nargs with a question mark makes it optional, and default= gives the value to use when nothing is typed.', 'add_argument può prendere due cose in più dopo il nome: nargs con un punto di domanda lo rende facoltativo, e default= dà il valore da usare quando non si scrive niente.', 'add_argument peut prendre deux choses de plus après le nom : nargs avec un point d\'interrogation le rend facultatif, et default= donne la valeur à utiliser quand rien n\'est tapé.'],
          start: ['import argparse\n\nparser = argparse.ArgumentParser(description="Greets people")\nparser.add_argument("name")\nargs = parser.parse_args()\nprint("Hello, " + args.name)', 'import argparse\n\nparser = argparse.ArgumentParser(description="Saluta le persone")\nparser.add_argument("name")\nargs = parser.parse_args()\nprint("Ciao, " + args.name)', 'import argparse\n\nparser = argparse.ArgumentParser(description="Salue les gens")\nparser.add_argument("name")\nargs = parser.parse_args()\nprint("Bonjour, " + args.name)'],
          sol: ['import argparse\n\nparser = argparse.ArgumentParser(description="Greets people")\nparser.add_argument("name", nargs="?", default="world")\nargs = parser.parse_args()\nprint("Hello, " + args.name)', 'import argparse\n\nparser = argparse.ArgumentParser(description="Saluta le persone")\nparser.add_argument("name", nargs="?", default="mondo")\nargs = parser.parse_args()\nprint("Ciao, " + args.name)', 'import argparse\n\nparser = argparse.ArgumentParser(description="Salue les gens")\nparser.add_argument("name", nargs="?", default="monde")\nargs = parser.parse_args()\nprint("Bonjour, " + args.name)'],
          out: ['Hello, world', 'Ciao, mondo', 'Bonjour, monde'], c: 'argparse'
        }
      }
    ]
  },
  {
    title: ['Tools around Python', 'Gli strumenti attorno a Python', 'Les outils autour de Python'],
    subtitle: ['Modules, pip, virtual environments, tracebacks and scripts', 'Moduli, pip, ambienti virtuali, traceback e script', 'Modules, pip, environnements virtuels, tracebacks et scripts'],
    steps: [
      {
        c: c`import json

data = {"name": "Ada", "scores": [3, 5, 8]}
text = json.dumps(data, indent=2)
print(text)`,
        t: ['Run a module: python3 -m', 'Eseguire un modulo: python3 -m', 'Lancer un module : python3 -m'],
        x: [`-m means module. Python can run a module from its big library as if it were a program. python3 -m json.tool data.json shows a JSON file nicely indented. The program on this page does the same job from the inside, with json.dumps.

Some modules that are useful every day: python3 -m http.server shares the current folder at localhost:8000. python3 -m unittest runs your tests. python3 -m venv .venv makes a virtual environment. python3 -m pip install requests installs a package.`,
          `-m vuol dire modulo. Python può eseguire un modulo della sua grande libreria come se fosse un programma. python3 -m json.tool data.json mostra un file JSON ben rientrato. Il programma di questa pagina fa lo stesso lavoro da dentro, con json.dumps.

Alcuni moduli utili ogni giorno: python3 -m http.server condivide la cartella attuale su localhost:8000. python3 -m unittest esegue i tuoi test. python3 -m venv .venv crea un ambiente virtuale. python3 -m pip install requests installa un pacchetto.`,
          `-m veut dire module. Python peut lancer un module de sa grande bibliothèque comme si c'était un programme. python3 -m json.tool data.json affiche un fichier JSON bien indenté. Le programme de cette page fait le même travail de l'intérieur, avec json.dumps.

Quelques modules utiles tous les jours : python3 -m http.server partage le dossier actuel sur localhost:8000. python3 -m unittest lance tes tests. python3 -m venv .venv crée un environnement virtuel. python3 -m pip install requests installe un paquet.`],
        ex: {
          t: ['Show the dictionary {"a": [1, 2]} as JSON text indented by 2 spaces.', 'Mostra il dizionario {"a": [1, 2]} come testo JSON rientrato di 2 spazi.', 'Affiche le dictionnaire {"a": [1, 2]} comme texte JSON décalé de 2 espaces.'],
          h: ['json.dumps can take indent= to say how many spaces each level is pushed in.', 'json.dumps può prendere indent= per dire di quanti spazi è rientrato ogni livello.', 'json.dumps peut prendre indent= pour dire de combien d\'espaces chaque niveau est décalé.'],
          sol: 'import json\nprint(json.dumps({"a": [1, 2]}, indent=2))', c: 'indent=2', m: '"a"'
        }
      },
      {
        c: c`import sys

inside = sys.prefix != sys.base_prefix
print("Inside a virtual environment:", inside)`,
        n: ['sys.prefix', 'sys.base_prefix'],
        t: ['pip and virtual environments', 'pip e gli ambienti virtuali', 'pip et les environnements virtuels'],
        x: [`Python has a huge shop of free packages that other people wrote, called PyPI. pip is the tool that downloads them: python3 -m pip install requests.

If every project installs into the same place, they start to fight over versions. The cure is a virtual environment: a private folder with its own Python and its own packages, one for each project. python3 -m venv .venv makes it, and source .venv/bin/activate (Mac and Linux) or .venv\\Scripts\\activate (Windows) turns it on. After activating, the terminal line starts with (.venv). Type deactivate to come back. The program checks whether you are inside one: here the answer is False.`,
          `Python ha un enorme negozio di pacchetti gratuiti scritti da altri, chiamato PyPI. pip è lo strumento che li scarica: python3 -m pip install requests.

Se ogni progetto installa nello stesso posto, iniziano a litigare per le versioni. La cura è un ambiente virtuale: una cartella privata con il suo Python e i suoi pacchetti, una per ogni progetto. python3 -m venv .venv lo crea, e source .venv/bin/activate (Mac e Linux) o .venv\\Scripts\\activate (Windows) lo accende. Dopo l'attivazione la riga del terminale inizia con (.venv). Scrivi deactivate per tornare indietro. Il programma controlla se sei dentro uno: qui la risposta è False.`,
          `Python a une énorme boutique de paquets gratuits écrits par d'autres, appelée PyPI. pip est l'outil qui les télécharge : python3 -m pip install requests.

Si chaque projet installe au même endroit, les versions se disputent. Le remède est un environnement virtuel : un dossier privé avec son propre Python et ses propres paquets, un pour chaque projet. python3 -m venv .venv le crée, et source .venv/bin/activate (Mac et Linux) ou .venv\\Scripts\\activate (Windows) l'active. Après l'activation, la ligne du terminal commence par (.venv). Tape deactivate pour revenir. Le programme vérifie si tu es dans un environnement : ici la réponse est False.`],
        ex: {
          t: ['Show whether sys.prefix is equal to sys.base_prefix (True here, because there is no virtual environment).', 'Mostra se sys.prefix è uguale a sys.base_prefix (qui True, perché non c\'è un ambiente virtuale).', 'Affiche si sys.prefix est égal à sys.base_prefix (ici True, parce qu\'il n\'y a pas d\'environnement virtuel).'],
          h: ['Bring in sys, then compare sys.prefix and sys.base_prefix with == and show the answer.', 'Porta dentro sys, poi confronta sys.prefix e sys.base_prefix con == e mostra la risposta.', 'Fais entrer sys, puis compare sys.prefix et sys.base_prefix avec == et affiche la réponse.'],
          sol: 'import sys\nprint(sys.prefix == sys.base_prefix)', out: 'True', c: 'base_prefix'
        }
      },
      {
        c: c`def divide(a, b):
    return a / b

print(divide(10, 2))
print(divide(1, 0))`,
        e: 'ZeroDivisionError',
        t: ['Reading a real traceback', 'Leggere un traceback vero', 'Lire un vrai traceback'],
        x: [`In a terminal, an error is not shown in friendly words. Python prints a traceback, and it is the same text that the View full error button shows in Pyviel.

Traceback (most recent call last):
  File "divide.py", line 5, in <module>
    print(divide(1, 0))
  File "divide.py", line 2, in divide
    return a / b
ZeroDivisionError: division by zero

Read it from the bottom up. The last line is the kind of error and what happened. Above it are the steps that led there: the file, the line number and the line itself. Here line 5 called divide, and line 2 inside divide broke.`,
          `In un terminale un errore non è mostrato in parole amichevoli. Python scrive un traceback, ed è lo stesso testo che mostra il pulsante View full error in Pyviel.

Traceback (most recent call last):
  File "divide.py", line 5, in <module>
    print(divide(1, 0))
  File "divide.py", line 2, in divide
    return a / b
ZeroDivisionError: division by zero

Leggilo dal basso verso l'alto. L'ultima riga è il tipo di errore e cosa è successo. Sopra ci sono i passi che hanno portato fin lì: il file, il numero di riga e la riga stessa. Qui la riga 5 ha chiamato divide, e la riga 2 dentro divide si è rotta.`,
          `Dans un terminal, une erreur n'est pas montrée avec des mots amicaux. Python affiche un traceback, et c'est le même texte que montre le bouton View full error dans Pyviel.

Traceback (most recent call last):
  File "divide.py", line 5, in <module>
    print(divide(1, 0))
  File "divide.py", line 2, in divide
    return a / b
ZeroDivisionError: division by zero

Lis-le de bas en haut. La dernière ligne est le genre d'erreur et ce qui s'est passé. Au-dessus il y a les étapes qui y ont mené : le fichier, le numéro de ligne et la ligne elle-même. Ici la ligne 5 a appelé divide, et la ligne 2 dans divide a cassé.`],
        ex: {
          uses: ['def', '/'],
          t: ['Press Run, then View full error, and find the line number. Then fix the second call so it divides 8 by 2 and shows 4.0.', 'Premi Esegui, poi View full error e trova il numero di riga. Poi correggi la seconda chiamata così divide 8 per 2 e mostra 4.0.', 'Appuie sur Lancer, puis View full error et trouve le numéro de ligne. Puis corrige le deuxième appel pour qu\'il divise 8 par 2 et affiche 4.0.'],
          h: ['Read the error: which call divides by zero? Change its second number.', 'Leggi l\'errore: quale chiamata divide per zero? Cambia il suo secondo numero.', 'Lis l\'erreur : quel appel divise par zéro ? Change son second nombre.'],
          start: 'def divide(a, b):\n    return a / b\n\nprint(divide(1, 0))', sol: 'def divide(a, b):\n    return a / b\n\nprint(divide(8, 2))', out: '4.0'
        }
      },
      {
        c: c`#!/usr/bin/env python3
# A script you can run by its name alone.
import sys

print("Script", "ran" if sys.version_info.major == 3 else "not ran")`,
        t: ['Scripts you run by name', 'Script che esegui dal nome', 'Des scripts lancés par leur nom'],
        x: [`On Mac and Linux a file can be a command of its own. Two small things make it so. First, the very first line, the shebang: #!/usr/bin/env python3. It tells the system which program must read the file.

Second, tell the system that the file may be run: chmod +x hello.py. Now you run it with ./hello.py, with no python3 before. On Windows the shebang does nothing and the way is py hello.py. The line is only a comment for Python, so it is safe everywhere.`,
          `Su Mac e Linux un file può essere un comando a sé. Due piccole cose lo permettono. Primo, la primissima riga, lo shebang: #!/usr/bin/env python3. Dice al sistema quale programma deve leggere il file.

Secondo, dì al sistema che il file può essere eseguito: chmod +x hello.py. Ora lo esegui con ./hello.py, senza python3 prima. Su Windows lo shebang non fa niente e la strada è py hello.py. Per Python la riga è solo un commento, quindi è sicura ovunque.`,
          `Sur Mac et Linux un fichier peut être une commande à part entière. Deux petites choses le permettent. D'abord, la toute première ligne, le shebang : #!/usr/bin/env python3. Elle dit au système quel programme doit lire le fichier.

Ensuite, dis au système que le fichier peut être lancé : chmod +x hello.py. Maintenant tu le lances avec ./hello.py, sans python3 devant. Sous Windows le shebang ne fait rien et le chemin est py hello.py. Pour Python la ligne n'est qu'un commentaire, donc elle est sans danger partout.`],
        ex: {
          t: ['Write a script of your own: the shebang line first, then a line that shows Ready', 'Scrivi uno script tuo: prima la riga shebang, poi una riga che mostra Pronto', 'Écris ton propre script : d\'abord la ligne shebang, puis une ligne qui affiche Prêt'],
          h: ['The shebang is the very first line of the file, and it starts with #!. Look at the first line of the program of this step.', 'La shebang è la primissima riga del file, e comincia con #!. Guarda la prima riga del programma di questo passo.', 'Le shebang est la toute première ligne du fichier, et il commence par #!. Regarde la première ligne du programme de cette étape.'],
          sol: ['#!/usr/bin/env python3\nprint("Ready")', '#!/usr/bin/env python3\nprint("Pronto")', '#!/usr/bin/env python3\nprint("Prêt")'], out: ['Ready', 'Pronto', 'Prêt'], c: '^#!/usr/bin/env python3'
        }
      }
    ]
  }
];
