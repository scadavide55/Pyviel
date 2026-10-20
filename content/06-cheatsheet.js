// Appendix · The cheat sheet. See tools/build-course.js for the format.
const c = String.raw;
const G6 = ['Appendix · Your cheat sheet', 'Appendice · Il tuo foglio di riepilogo', 'Annexe · Ta fiche de révision'];

module.exports = [
  {
    group: G6,
    title: ['The Python cheat sheet', 'Il foglio di riepilogo di Python', 'La fiche de révision de Python'],
    subtitle: ['Everything in six small pages', 'Tutto in sei piccole pagine', 'Tout en six petites pages'],
    steps: [
      {
        c: c`# values and names
name, age, height = "Ada", 12, 1.5
print(type(name), type(age), type(height), type(True), type(None))
print(f"{name} is {age}; next year {age + 1}")
print(7 / 2, 7 // 2, 7 % 2, 2 ** 8, round(3.14159, 2))
print(int("5") + 1, str(5) + "1", float("2.5"), bool(""))
text = "  Hello, Python  "
print(text.strip().lower().replace("python", "world"))
print(text.split(","), len(text), text[2:7], text[::-1][:5])`,
        t: ['Page 1: values, numbers and text', 'Pagina 1: valori, numeri e testo', 'Page 1 : valeurs, nombres et texte'],
        x: [`The first page of the sheet: names and the kinds of value (str, int, float, bool, None), the sums, the conversions, an f-string, and the text tools.

Read each line and say out loud what you expect before you look at the output. If one surprises you, go back to that lesson.`,
          `La prima pagina del foglio: i nomi e i tipi di valore (str, int, float, bool, None), i conti, le conversioni, una f-string e gli strumenti del testo.

Leggi ogni riga e di' a voce alta cosa ti aspetti prima di guardare il risultato. Se una ti sorprende, torna a quella lezione.`,
          `La première page de la fiche : les noms et les sortes de valeur (str, int, float, bool, None), les calculs, les conversions, une f-string et les outils du texte.

Lis chaque ligne et dis à voix haute ce que tu attends avant de regarder le résultat. Si l'une te surprend, retourne à cette leçon.`],
        d: ['Change the values and predict each line again.', 'Cambia i valori e prevedi di nuovo ogni riga.', 'Change les valeurs et prévois à nouveau chaque ligne.']
      },
      {
        c: c`# choices and loops
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
    print("i", i)`,
        t: ['Page 2: choices and loops', 'Pagina 2: scelte e cicli', 'Page 2 : choix et boucles'],
        x: [`if, elif and else choose a road. for walks through things, while repeats while a question is true, enumerate adds a number to each item, break leaves the loop and continue skips to the next turn.

Remember the colon at the end of the line and the four spaces for the lines inside.`,
          `if, elif ed else scelgono una strada. for scorre le cose, while ripete finché una domanda è vera, enumerate aggiunge un numero a ogni elemento, break esce dal ciclo e continue salta al giro successivo.

Ricorda i due punti alla fine della riga e i quattro spazi per le righe dentro.`,
          `if, elif et else choisissent un chemin. for parcourt des choses, while répète tant qu'une question est vraie, enumerate ajoute un numéro à chaque élément, break sort de la boucle et continue passe au tour suivant.

Rappelle-toi les deux-points à la fin de la ligne et les quatre espaces pour les lignes dedans.`],
        d: ['Add an elif for numbers above 100.', 'Aggiungi un elif per i numeri sopra 100.', 'Ajoute un elif pour les nombres au-dessus de 100.']
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
        x: [`Four collections: a list [ ] can change and keeps order, a tuple ( ) cannot change, a dictionary { key: value } looks things up by name, and a set { } keeps each thing once.

Comprehensions build a new collection in one line, and sorted, max and sum work on all of them.`,
          `Quattro raccolte: una lista [ ] può cambiare e tiene l'ordine, una tupla ( ) non può cambiare, un dizionario { chiave: valore } cerca le cose per nome, e un insieme { } tiene ogni cosa una volta sola.

Le comprensioni costruiscono una nuova raccolta in una riga, e sorted, max e sum funzionano su tutte.`,
          `Quatre collections : une liste [ ] peut changer et garde l'ordre, un tuple ( ) ne peut pas changer, un dictionnaire { clé: valeur } cherche les choses par nom, et un ensemble { } garde chaque chose une seule fois.

Les compréhensions construisent une nouvelle collection en une ligne, et sorted, max et sum marchent sur toutes.`],
        d: ['Add an item to every collection and print them.', 'Aggiungi un elemento a ogni raccolta e stampale.', 'Ajoute un élément à chaque collection et affiche-les.']
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
print(fact(6))
print(area.__doc__, callable(area))`,
        t: ['Page 4: functions', 'Pagina 4: funzioni', 'Page 4 : fonctions'],
        x: [`def makes a function, with parameters, defaults, *args and **kwargs. return gives the answer. A lambda is a tiny function, a function inside a function remembers its surroundings, and a function can call itself.

A function is a value too: you can keep it in a name and pass it around.`,
          `def crea una funzione, con parametri, predefiniti, *args e **kwargs. return dà la risposta. Una lambda è una piccola funzione, una funzione dentro una funzione ricorda ciò che ha intorno, e una funzione può richiamare se stessa.

Anche una funzione è un valore: la puoi tenere in un nome e passare in giro.`,
          `def crée une fonction, avec des paramètres, des valeurs par défaut, *args et **kwargs. return donne la réponse. Une lambda est une toute petite fonction, une fonction dans une fonction se souvient de ce qui l'entoure, et une fonction peut s'appeler elle-même.

Une fonction est aussi une valeur : tu peux la garder dans un nom et la passer partout.`],
        d: ['Write your own function with a default value.', 'Scrivi una tua funzione con un valore predefinito.', 'Écris ta propre fonction avec une valeur par défaut.']
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
        return f"{type(self).__name__}({self.name!r})"

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
    finally:
        pass
print(safe_int("12"), safe_int("no"))
try:
    raise KeyError("missing")
except (KeyError, IndexError) as error:
    print("caught", type(error).__name__)`,
        t: ['Page 5: classes and errors', 'Pagina 5: classi ed errori', 'Page 5 : classes et erreurs'],
        x: [`class makes your own kind of thing, with __init__ to set it up, methods for actions, and special methods like __repr__. A child class inherits from its parent and can change what it needs. @dataclass writes the boring parts for you.

try, except, finally and raise handle the things that go wrong, without stopping the program.`,
          `class crea il tuo tipo di cosa, con __init__ per prepararlo, metodi per le azioni, e metodi speciali come __repr__. Una classe figlia eredita dalla madre e può cambiare ciò che le serve. @dataclass scrive per te le parti noiose.

try, except, finally e raise gestiscono le cose che vanno storte, senza fermare il programma.`,
          `class crée ton propre genre de chose, avec __init__ pour le préparer, des méthodes pour les actions, et des méthodes spéciales comme __repr__. Une classe enfant hérite de son parent et peut changer ce dont elle a besoin. @dataclass écrit pour toi les parties ennuyeuses.

try, except, finally et raise gèrent ce qui se passe mal, sans arrêter le programme.`],
        d: ['Add a Cat class with its own speak.', 'Aggiungi una classe Cat con il suo speak.', 'Ajoute une classe Cat avec son propre speak.']
      },
      {
        c: c`# files, modules and tricks
import json, math, random, os
from collections import Counter

random.seed(1)
print(math.sqrt(49), random.choice("abc"), Counter("hello").most_common(1))
with open("demo.json", "w") as f:
    json.dump({"scores": [1, 2, 3]}, f)
with open("demo.json") as f:
    print(json.load(f)["scores"], os.path.exists("demo.json"))

def numbers():
    n = 0
    while True:
        yield n
        n += 1
gen = numbers()
print([next(gen) for _ in range(4)])

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
        x: [`The last page: modules with import, saving data with json, a generator that gives one value at a time, a decorator that adds a power to a function, unpacking with a star, match, and the walrus.

That is the whole language in one screen. Keep this lesson as your reminder, and come back whenever you forget a word.`,
          `L'ultima pagina: i moduli con import, salvare dati con json, un generatore che dà un valore alla volta, un decoratore che aggiunge un potere a una funzione, lo spacchettamento con la stella, match, e il tricheco.

Questo è l'intero linguaggio in una schermata. Tieni questa lezione come promemoria, e torna quando dimentichi una parola.`,
          `La dernière page : les modules avec import, sauvegarder des données avec json, un générateur qui donne une valeur à la fois, un décorateur qui ajoute un pouvoir à une fonction, le déballage avec l'étoile, match, et le morse.

C'est tout le langage sur un écran. Garde cette leçon comme aide-mémoire, et reviens quand tu oublies un mot.`],
        d: ['Pick a line you do not remember and find its lesson.', 'Scegli una riga che non ricordi e trova la sua lezione.', 'Choisis une ligne dont tu ne te souviens pas et trouve sa leçon.']
      }
    ]
  }
];
