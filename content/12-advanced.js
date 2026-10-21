// Stage 6 · Generators, decorators, with and modern Python. See tools/build-course.js for the format.
const c = String.raw;
const G6 = ['Stage 6 · Beyond the basics', 'Fase 6 · Oltre le basi', 'Étape 6 · Au-delà des bases'];

module.exports = [
  {
    group: G6,
    title: ['Produce one at a time: generators', 'Produci uno alla volta: i generatori', 'Produis un à la fois : les générateurs'],
    subtitle: ['Iterators and yield', 'Iteratori e yield', 'Itérateurs et yield'],
    steps: [
      {
        c: [c`items = iter(["a", "b", "c"])
print(next(items))
print(next(items))
print(next(items))
print(next(items, "nothing left"))
print(next(items))`, c`items = iter(["a", "b", "c"])
print(next(items))
print(next(items))
print(next(items))
print(next(items, "non c'è più niente"))
print(next(items))`, c`items = iter(["a", "b", "c"])
print(next(items))
print(next(items))
print(next(items))
print(next(items, "il n'y en a plus"))
print(next(items))`],
        e: 'StopIteration',
        n: ['next'],
        t: ['What a for loop really does', 'Cosa fa davvero un ciclo for', 'Ce que fait vraiment une boucle for'],
        x: [`A for loop asks for items one at a time. iter(list) makes the tool that hands out the items, and next(...) takes the next one.

When there are none left, Python raises a StopIteration, which the for loop catches for you. With a second thing, next(items, "...") gives that instead of raising the error. The last line shows the error.`,
          `Un ciclo for chiede gli elementi uno alla volta. iter(lista) fa lo strumento che consegna gli elementi, e next(...) prende il successivo.

Quando non ce ne sono più, Python alza uno StopIteration, che il ciclo for prende per te. Con un secondo valore, next(items, "...") dà quello invece di alzare l'errore. L'ultima riga mostra l'errore.`,
          `Une boucle for demande les éléments un par un. iter(liste) fait l'outil qui distribue les éléments, et next(...) prend le suivant.

Quand il n'y en a plus, Python lève une StopIteration, qu'une boucle for attrape pour toi. Avec une deuxième chose, next(items, "...") donne celle-ci au lieu de lever l'erreur. La dernière ligne montre l'erreur.`],
        ex: {
          uses: ['next'],
          t: ['Fix the program so that it ends without an error: ask for the next item a fourth time with a second thing, "end", and show it.', 'Correggi il programma così che finisca senza errori: chiedi per la quarta volta l\'elemento successivo con un secondo valore, "fine", e mostralo.', 'Corrige le programme pour qu\'il finisse sans erreur : demande pour la quatrième fois l\'élément suivant avec une deuxième chose, "fin", et affiche-le.'],
          h: ['next can take a second thing: what to give back when nothing is left. Add it to the last next.', 'next può prendere una seconda cosa: cosa restituire quando non resta niente. Aggiungila all\'ultimo next.', 'next peut prendre une deuxième chose : ce qu\'il faut rendre quand il ne reste rien. Ajoute-la au dernier next.'],
          start: 'items = iter(["a", "b", "c"])\nprint(next(items))\nprint(next(items))\nprint(next(items))\nprint(next(items))',
          sol: ['items = iter(["a", "b", "c"])\nprint(next(items))\nprint(next(items))\nprint(next(items))\nprint(next(items, "end"))', 'items = iter(["a", "b", "c"])\nprint(next(items))\nprint(next(items))\nprint(next(items))\nprint(next(items, "fine"))', 'items = iter(["a", "b", "c"])\nprint(next(items))\nprint(next(items))\nprint(next(items))\nprint(next(items, "fin"))'],
          out: ['a\nb\nc\nend', 'a\nb\nc\nfine', 'a\nb\nc\nfin']
        }
      },
      {
        c: c`def count_up(limit):
    n = 1
    while n <= limit:
        yield n
        n += 1

gen = count_up(3)
print(type(gen).__name__)
print(next(gen), next(gen))
for n in count_up(4):
    print(n)
print(list(count_up(5)))`,
        n: ['yield'],
        t: ['A function that pauses: yield', 'Una funzione che si ferma: yield', 'Une fonction qui fait une pause : yield'],
        x: [`A function with yield inside is a generator. Calling it does not run it: it gives back a generator. Each next(...) runs it until the next yield, hands out that value, and pauses there, remembering where it was.

A for loop, or list(...), asks again and again until the function ends.`,
          `Una funzione con yield dentro è un generatore. Chiamarla non la esegue: restituisce un generatore. Ogni next(...) la esegue fino al prossimo yield, consegna quel valore e si ferma lì, ricordando dov'era.

Un ciclo for, o list(...), chiede ancora e ancora finché la funzione finisce.`,
          `Une fonction avec yield dedans est un générateur. L'appeler ne la lance pas : elle rend un générateur. Chaque next(...) la lance jusqu'au prochain yield, distribue cette valeur et fait une pause là, en se souvenant d'où elle en était.

Une boucle for, ou list(...), redemande encore et encore jusqu'à ce que la fonction se termine.`],
        ex: {
          t: ['Make a generator called evens(limit) that yields the even numbers from 2 up to the limit. Show list(evens(10)).', 'Crea un generatore che si chiama evens(limit) che consegna i numeri pari da 2 fino al limite. Mostra list(evens(10)).', 'Crée un générateur qui s\'appelle evens(limit) qui distribue les nombres pairs de 2 jusqu\'à la limite. Affiche list(evens(10)).'],
          h: ['A box that starts at 2, a while that goes on up to the limit, and inside it: yield the box, then add 2 to it.', 'Una scatola che parte da 2, un while che continua fino al limite, e dentro: yield della scatola, poi aggiungici 2.', 'Une boîte qui commence à 2, un while qui continue jusqu\'à la limite, et dedans : yield de la boîte, puis ajoute-lui 2.'],
          sol: 'def evens(limit):\n    n = 2\n    while n <= limit:\n        yield n\n        n += 2\n\nprint(list(evens(10)))', out: '[2, 4, 6, 8, 10]', c: 'yield'
        }
      },
      {
        c: c`def naturals():
    n = 0
    while True:
        yield n
        n += 1

def first(count, source):
    for i in range(count):
        yield next(source)

print(list(first(5, naturals())))

def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

print(list(first(10, fib())))`,
        t: ['A list that never ends', 'Una lista che non finisce mai', 'Une liste qui ne finit jamais'],
        x: [`A generator can be infinite, because it only makes a value when asked. naturals gives 0, 1, 2, 3... forever, and first takes just as many as you want.

The same idea gives the Fibonacci numbers, fast and in a few lines. A list of all the Fibonacci numbers could never exist, but a generator is happy to make them one by one.`,
          `Un generatore può essere infinito, perché fa un valore solo quando glielo chiedi. naturals dà 0, 1, 2, 3... per sempre, e first ne prende quanti ne vuoi.

La stessa idea dà i numeri di Fibonacci, veloci e in poche righe. Una lista di tutti i numeri di Fibonacci non potrebbe mai esistere, ma un generatore li fa volentieri uno alla volta.`,
          `Un générateur peut être infini, parce qu'il ne fait une valeur que quand on la lui demande. naturals donne 0, 1, 2, 3... pour toujours, et first en prend autant que tu veux.

La même idée donne les nombres de Fibonacci, vite et en quelques lignes. Une liste de tous les nombres de Fibonacci ne pourrait jamais exister, mais un générateur les fait volontiers un par un.`],
        ex: {
          t: ['Show the first 8 numbers of the Fibonacci generator, using first.', 'Mostra i primi 8 numeri del generatore di Fibonacci, usando first.', 'Affiche les 8 premiers nombres du générateur de Fibonacci, en utilisant first.'],
          h: ['first takes how many and where from. A generator gives values one at a time: list(...) collects them.', 'first prende quanti e da dove. Un generatore dà i valori uno alla volta: list(...) li raccoglie.', 'first prend combien et d\'où. Un générateur donne les valeurs une à une : list(...) les rassemble.'],
          start: 'def first(count, source):\n    for i in range(count):\n        yield next(source)\n\ndef fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b', sol: 'def first(count, source):\n    for i in range(count):\n        yield next(source)\n\ndef fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nprint(list(first(8, fib())))', out: '[0, 1, 1, 2, 3, 5, 8, 13]', c: 'first\\(8'
        }
      },
      {
        c: c`squares = (n * n for n in range(1, 6))
print(type(squares).__name__)
print(sum(squares))
print(sum(n * n for n in range(1, 1001)))
print(max(len(w) for w in ["a", "abc", "ab"]))`,
        n: ['genexp'],
        t: ['A generator in one line', 'Un generatore in una riga', 'Un générateur en une ligne'],
        x: [`Round brackets instead of square ones make a generator expression: like a list comprehension, but it hands out the values one at a time, without building the whole list.

It is the best choice when you only want to add the values up, or to look at them once. Inside a call like sum(...), the round brackets of the call are enough.`,
          `Le parentesi tonde invece di quelle quadre fanno un'espressione generatrice: come una comprensione di lista, ma consegna i valori uno alla volta, senza costruire tutta la lista.

È la scelta migliore quando vuoi solo sommare i valori, o guardarli una volta. Dentro una chiamata come sum(...) bastano le parentesi tonde della chiamata.`,
          `Des parenthèses rondes au lieu de crochets font une expression génératrice : comme une compréhension de liste, mais elle distribue les valeurs une par une, sans construire toute la liste.

C'est le meilleur choix quand tu veux seulement additionner les valeurs, ou les regarder une fois. Dans un appel comme sum(...), les parenthèses rondes de l'appel suffisent.`],
        ex: {
          t: ['With a generator expression inside sum, add up the cubes of 1 to 4 (1 + 8 + 27 + 64 = 100).', 'Con un\'espressione generatrice dentro sum, somma i cubi da 1 a 4 (1 + 8 + 27 + 64 = 100).', 'Avec une expression génératrice dans sum, additionne les cubes de 1 à 4 (1 + 8 + 27 + 64 = 100).'],
          h: ['sum can take a generator expression straight in its brackets: the cube of n for each n in a range that ends with 4.', 'sum può prendere una generator expression direttamente tra le sue parentesi: il cubo di n per ogni n in un range che finisce con 4.', 'sum peut prendre une expression génératrice directement entre ses parenthèses : le cube de n pour chaque n dans un range qui finit par 4.'],
          sol: 'print(sum(n ** 3 for n in range(1, 5)))', out: '100', c: 'sum\\(.* for '
        }
      },
      {
        c: c`class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

for n in Countdown(3):
    print(n)
print(list(Countdown(5)))`,
        n: ['iterator-class'],
        t: ['Make your own iterator', 'Fai un tuo iteratore', 'Fais ton propre itérateur'],
        x: [`An iterator is any object with __iter__ and __next__. __next__ gives the next value, or raises StopIteration at the end. This is what a for loop needs to work.

A generator is usually shorter, so this is more for understanding what happens behind the scenes. Now you know how for, list and sum really get their values.`,
          `Un iteratore è un oggetto qualsiasi con __iter__ e __next__. __next__ dà il valore successivo, o alza StopIteration alla fine. È quello che serve a un ciclo for per funzionare.

Un generatore di solito è più corto, quindi questo serve più per capire cosa succede dietro le quinte. Ora sai come for, list e sum ottengono davvero i loro valori.`,
          `Un itérateur est un objet quelconque avec __iter__ et __next__. __next__ donne la valeur suivante, ou lève StopIteration à la fin. C'est ce dont une boucle for a besoin pour marcher.

Un générateur est en général plus court, donc ceci sert plutôt à comprendre ce qui se passe en coulisses. Maintenant tu sais comment for, list et sum obtiennent vraiment leurs valeurs.`],
        ex: {
          t: ['Use the class Countdown to show the list of a countdown from 4: [4, 3, 2, 1].', 'Usa la classe Countdown per mostrare la lista di un conto alla rovescia da 4: [4, 3, 2, 1].', 'Utilise la classe Countdown pour afficher la liste d\'un compte à rebours à partir de 4 : [4, 3, 2, 1].'],
          h: ['Countdown(4) is an object you can loop over, so list(...) can collect everything it gives.', 'Countdown(4) è un oggetto su cui puoi fare un ciclo, quindi list(...) può raccogliere tutto quello che dà.', 'Countdown(4) est un objet qu\'on peut parcourir, donc list(...) peut rassembler tout ce qu\'il donne.'],
          start: 'class Countdown:\n    def __init__(self, start):\n        self.current = start\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        value = self.current\n        self.current -= 1\n        return value', sol: 'class Countdown:\n    def __init__(self, start):\n        self.current = start\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        value = self.current\n        self.current -= 1\n        return value\n\nprint(list(Countdown(4)))', out: '[4, 3, 2, 1]', c: 'Countdown\\(4\\)'
        }
      },
      {
        c: c`def evens(limit):
    n = 0
    while n < limit:
        yield n
        n += 2

print(list(evens(10)))`,
        t: ['Challenge: a generator of squares', 'Sfida: un generatore di quadrati', 'Défi : un générateur de carrés'],
        x: ['yield hands out one value and pauses the function until the next value is asked for. list(...) asks for all of them.', 'yield consegna un valore e mette in pausa la funzione finché non viene chiesto il valore dopo. list(...) li chiede tutti.', 'yield donne une valeur et met la fonction en pause jusqu\'à ce qu\'on demande la suivante. list(...) les demande toutes.'],
        ex: {
          t: ['Write a generator squares(n) that yields 1, 4, 9, and so on up to n * n. Show list(squares(5)): [1, 4, 9, 16, 25].', 'Scrivi un generatore squares(n) che dà 1, 4, 9, e così via fino a n * n. Mostra list(squares(5)): [1, 4, 9, 16, 25].', 'Écris un générateur squares(n) qui donne 1, 4, 9, et ainsi de suite jusqu\'à n * n. Affiche list(squares(5)) : [1, 4, 9, 16, 25].'],
          h: ['A for loop from 1 to n, and inside it yield the number times itself.', 'Un ciclo for da 1 a n, e dentro yield del numero per se stesso.', 'Une boucle for de 1 à n, et dedans yield du nombre fois lui-même.'],
          start: '',
          sol: 'def squares(n):\n    for i in range(1, n + 1):\n        yield i * i\n\nprint(list(squares(5)))',
          out: '[1, 4, 9, 16, 25]', uses: ['yield', 'def']
        }
      }
    ]
  },
  {
    title: ['Add a power to a function: decorators', 'Dai un potere a una funzione: i decoratori', 'Donne un pouvoir à une fonction : les décorateurs'],
    subtitle: ['Functions that wrap functions', 'Funzioni che avvolgono funzioni', 'Des fonctions qui enveloppent des fonctions'],
    steps: [
      {
        c: [c`def shout(function):
    def wrapper(name):
        return function(name).upper() + "!"
    return wrapper

def greet(name):
    return "hello " + name

loud = shout(greet)
print(loud("ada"))
print(greet("ada"))`, c`def shout(function):
    def wrapper(name):
        return function(name).upper() + "!"
    return wrapper

def greet(name):
    return "ciao " + name

loud = shout(greet)
print(loud("ada"))
print(greet("ada"))`, c`def shout(function):
    def wrapper(name):
        return function(name).upper() + "!"
    return wrapper

def greet(name):
    return "bonjour " + name

loud = shout(greet)
print(loud("ada"))
print(greet("ada"))`],
        t: ['A function that takes a function', 'Una funzione che prende una funzione', 'Une fonction qui prend une fonction'],
        x: [`Remember that a function is a value: you can pass it to another function. shout takes a function, builds a new function called wrapper that calls the old one and changes the result, and gives the new one back.

loud is the new function: it shouts. greet is still the same as before. This is the idea behind decorators.`,
          `Ricorda che una funzione è un valore: la puoi passare a un'altra funzione. shout prende una funzione, costruisce una funzione nuova che si chiama wrapper che chiama la vecchia e cambia il risultato, e restituisce la nuova.

loud è la funzione nuova: grida. greet è ancora uguale a prima. Questa è l'idea dei decoratori.`,
          `Souviens-toi qu'une fonction est une valeur : tu peux la donner à une autre fonction. shout prend une fonction, construit une nouvelle fonction appelée wrapper qui appelle l'ancienne et change le résultat, et rend la nouvelle.

loud est la nouvelle fonction : elle crie. greet est toujours pareille qu'avant. C'est l'idée derrière les décorateurs.`],
        ex: {
          t: ['Make a function whisper that does the opposite of shout: the wrapper must give the result in small letters (lower). Show whisper(greet)("ADA").', 'Crea una funzione whisper che fa il contrario di shout: il wrapper deve dare il risultato in minuscolo (lower). Mostra whisper(greet)("ADA").', 'Crée une fonction whisper qui fait le contraire de shout : le wrapper doit donner le résultat en minuscules (lower). Affiche whisper(greet)("ADA").'],
          h: ['The same as shout, with .lower() instead of .upper() + "!".', 'Come shout, con .lower() invece di .upper() + "!".', 'Comme shout, avec .lower() au lieu de .upper() + "!".'],
          start: 'def greet(name):\n    return "HELLO " + name', sol: 'def greet(name):\n    return "HELLO " + name\n\ndef whisper(function):\n    def wrapper(name):\n        return function(name).lower()\n    return wrapper\n\nprint(whisper(greet)("ADA"))', out: 'hello ada', c: 'lower'
        }
      },
      {
        c: [c`def shout(function):
    def wrapper(name):
        return function(name).upper() + "!"
    return wrapper

@shout
def greet(name):
    return "hello " + name

print(greet("ada"))
print(greet("max"))`, c`def shout(function):
    def wrapper(name):
        return function(name).upper() + "!"
    return wrapper

@shout
def greet(name):
    return "ciao " + name

print(greet("ada"))
print(greet("max"))`, c`def shout(function):
    def wrapper(name):
        return function(name).upper() + "!"
    return wrapper

@shout
def greet(name):
    return "bonjour " + name

print(greet("ada"))
print(greet("max"))`],
        t: ['The @ shortcut', 'La scorciatoia @', 'Le raccourci @'],
        x: [`Writing @shout right above def greet is exactly the same as writing greet = shout(greet) after it. It is called a decorator: you already met @property and @classmethod, and now you know how they work.

From now on, every call to greet gets the new power.`,
          `Scrivere @shout subito sopra a def greet è esattamente come scrivere greet = shout(greet) dopo. Si chiama decoratore: hai già conosciuto @property e @classmethod, e ora sai come funzionano.

D'ora in poi ogni chiamata a greet ha il nuovo potere.`,
          `Écrire @shout juste au-dessus de def greet est exactement pareil qu'écrire greet = shout(greet) après. Cela s'appelle un décorateur : tu as déjà rencontré @property et @classmethod, et maintenant tu sais comment ils marchent.

À partir de maintenant, chaque appel à greet a le nouveau pouvoir.`],
        ex: {
          t: ['Use @shout on a new function called bye(name) that returns "bye " + name. Show bye("ada") (BYE ADA!).', 'Usa @shout su una funzione nuova che si chiama bye(name) che restituisce "bye " + name. Mostra bye("ada") (BYE ADA!).', 'Utilise @shout sur une nouvelle fonction qui s\'appelle bye(name) qui rend "bye " + name. Affiche bye("ada") (BYE ADA!).'],
          h: ['Write bye like any function that gives back a text. On the line just above its def, put @ and the name of the decorator.', 'Scrivi bye come una funzione qualsiasi che restituisce un testo. Sulla riga subito sopra il suo def, metti @ e il nome del decoratore.', 'Écris bye comme n\'importe quelle fonction qui rend un texte. Sur la ligne juste au-dessus de son def, mets @ et le nom du décorateur.'],
          start: 'def shout(function):\n    def wrapper(name):\n        return function(name).upper() + "!"\n    return wrapper', sol: 'def shout(function):\n    def wrapper(name):\n        return function(name).upper() + "!"\n    return wrapper\n\n@shout\ndef bye(name):\n    return "bye " + name\n\nprint(bye("ada"))', out: 'BYE ADA!', c: '@shout'
        }
      },
      {
        c: c`import functools

def log_calls(function):
    @functools.wraps(function)
    def wrapper(*args, **kwargs):
        print(f"calling {function.__name__} with {args} {kwargs}")
        result = function(*args, **kwargs)
        print(f"{function.__name__} returned {result}")
        return result
    return wrapper

@log_calls
def add(a, b=0):
    """Add two numbers."""
    return a + b

add(2, b=3)
print(add.__name__)`,
        n: ['module:functools', 'functools.wraps'],
        t: ['A decorator for any function', 'Un decoratore per qualsiasi funzione', 'Un décorateur pour n\'importe quelle fonction'],
        x: [`*args and **kwargs let the wrapper accept any values and pass them on, so the decorator works for any function.

functools.wraps, used as a decorator on the wrapper, keeps the name and the description of the original function. Without it, add would show up as "wrapper".`,
          `*args e **kwargs lasciano che il wrapper accetti qualsiasi valore e lo passi avanti, così il decoratore funziona per qualsiasi funzione.

functools.wraps, usato come decoratore sul wrapper, tiene il nome e la descrizione della funzione originale. Senza, add comparirebbe come "wrapper".`,
          `*args et **kwargs laissent le wrapper accepter n'importe quelles valeurs et les passer, donc le décorateur marche pour n'importe quelle fonction.

functools.wraps, utilisé comme décorateur sur le wrapper, garde le nom et la description de la fonction d'origine. Sans lui, add apparaîtrait comme "wrapper".`],
        ex: {
          t: ['Use @log_calls on a function called double(n) that returns n * 2, and show double(4). The log lines come first, then 8.', 'Usa @log_calls su una funzione che si chiama double(n) che restituisce n * 2 e mostra double(4). Prima le righe del log, poi 8.', 'Utilise @log_calls sur une fonction qui s\'appelle double(n) qui rend n * 2 et affiche double(4). D\'abord les lignes du journal, puis 8.'],
          h: ['Write double, with @ and the name of the decorator on the line above it. Then show what double gives back for 4.', 'Scrivi double, con @ e il nome del decoratore sulla riga sopra. Poi mostra quello che double restituisce per 4.', 'Écris double, avec @ et le nom du décorateur sur la ligne au-dessus. Puis affiche ce que double rend pour 4.'],
          start: 'import functools\n\ndef log_calls(function):\n    @functools.wraps(function)\n    def wrapper(*args, **kwargs):\n        print(f"calling {function.__name__} with {args} {kwargs}")\n        result = function(*args, **kwargs)\n        print(f"{function.__name__} returned {result}")\n        return result\n    return wrapper', sol: 'import functools\n\ndef log_calls(function):\n    @functools.wraps(function)\n    def wrapper(*args, **kwargs):\n        print(f"calling {function.__name__} with {args} {kwargs}")\n        result = function(*args, **kwargs)\n        print(f"{function.__name__} returned {result}")\n        return result\n    return wrapper\n\n@log_calls\ndef double(n):\n    return n * 2\n\nprint(double(4))', m: 'double returned 8\\n8$', c: '@log_calls'
        }
      },
      {
        c: c`import functools

def repeat(times):
    def decorator(function):
        @functools.wraps(function)
        def wrapper(*args, **kwargs):
            for i in range(times):
                result = function(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def hello():
    print("hello")

hello()`,
        t: ['A decorator with an option', 'Un decoratore con un\'opzione', 'Un décorateur avec une option'],
        x: [`To give a decorator an option, like @repeat(3), you need one more layer: repeat(3) gives back the real decorator, which then wraps the function.

Three nested functions look scary at first. Read them from the outside in: repeat takes the option, decorator takes the function, wrapper does the work.`,
          `Per dare un'opzione a un decoratore, come @repeat(3), serve un livello in più: repeat(3) restituisce il vero decoratore, che poi avvolge la funzione.

Tre funzioni annidate fanno paura all'inizio. Leggile da fuori verso dentro: repeat prende l'opzione, decorator prende la funzione, wrapper fa il lavoro.`,
          `Pour donner une option à un décorateur, comme @repeat(3), il faut une couche de plus : repeat(3) rend le vrai décorateur, qui enveloppe ensuite la fonction.

Trois fonctions imbriquées font peur au début. Lis-les de l'extérieur vers l'intérieur : repeat prend l'option, decorator prend la fonction, wrapper fait le travail.`],
        ex: {
          uses: ['def'],
          t: ['Change the option so that hello is repeated 2 times.', 'Cambia l\'opzione così che hello venga ripetuta 2 volte.', 'Change l\'option pour que hello soit répétée 2 fois.'],
          h: ['Look at the line with @ above the function: the number in its brackets is how many times.', 'Guarda la riga con @ sopra la funzione: il numero tra le sue parentesi è quante volte.', 'Regarde la ligne avec @ au-dessus de la fonction : le nombre dans ses parenthèses, c\'est combien de fois.'],
          start: 'import functools\n\ndef repeat(times):\n    def decorator(function):\n        @functools.wraps(function)\n        def wrapper(*args, **kwargs):\n            for i in range(times):\n                result = function(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef hello():\n    print("hello")\n\nhello()', sol: 'import functools\n\ndef repeat(times):\n    def decorator(function):\n        @functools.wraps(function)\n        def wrapper(*args, **kwargs):\n            for i in range(times):\n                result = function(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(2)\ndef hello():\n    print("hello")\n\nhello()', out: 'hello\nhello'
        }
      },
      {
        c: [c`import time
import functools

def timed(function):
    @functools.wraps(function)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = function(*args, **kwargs)
        wrapper.last_seconds = time.perf_counter() - start
        return result
    return wrapper

@timed
def slow_sum(n):
    return sum(range(n))

print(slow_sum(1000000))
print(slow_sum.last_seconds < 5)

def remember(function):
    cache = {}
    def wrapper(n):
        if n not in cache:
            cache[n] = function(n)
        return cache[n]
    return wrapper

@remember
def square(n):
    print("working out", n)
    return n * n

print(square(4), square(4))`, c`import time
import functools

def timed(function):
    @functools.wraps(function)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = function(*args, **kwargs)
        wrapper.last_seconds = time.perf_counter() - start
        return result
    return wrapper

@timed
def slow_sum(n):
    return sum(range(n))

print(slow_sum(1000000))
print(slow_sum.last_seconds < 5)

def remember(function):
    cache = {}
    def wrapper(n):
        if n not in cache:
            cache[n] = function(n)
        return cache[n]
    return wrapper

@remember
def square(n):
    print("calcolo", n)
    return n * n

print(square(4), square(4))`, c`import time
import functools

def timed(function):
    @functools.wraps(function)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = function(*args, **kwargs)
        wrapper.last_seconds = time.perf_counter() - start
        return result
    return wrapper

@timed
def slow_sum(n):
    return sum(range(n))

print(slow_sum(1000000))
print(slow_sum.last_seconds < 5)

def remember(function):
    cache = {}
    def wrapper(n):
        if n not in cache:
            cache[n] = function(n)
        return cache[n]
    return wrapper

@remember
def square(n):
    print("je calcule", n)
    return n * n

print(square(4), square(4))`],
        n: ['time.perf_counter'],
        t: ['Useful decorators', 'Decoratori utili', 'Des décorateurs utiles'],
        x: [`Here are two real ones. timed measures how long a function takes, with the very exact clock time.perf_counter. remember keeps the answers of a function in a dictionary, so square(4) is only worked out the first time.

Decorators add a side power to a function, without touching the function itself. Logging, timing, remembering and checking are the classic ones.`,
          `Ecco due decoratori veri. timed misura quanto ci mette una funzione, con l'orologio molto preciso time.perf_counter. remember tiene le risposte di una funzione in un dizionario, così square(4) viene calcolata solo la prima volta.

I decoratori aggiungono un potere in più a una funzione, senza toccare la funzione stessa. Scrivere un registro, misurare il tempo, ricordare e controllare sono i classici.`,
          `Voici deux vrais décorateurs. timed mesure combien de temps prend une fonction, avec l'horloge très précise time.perf_counter. remember garde les réponses d'une fonction dans un dictionnaire, donc square(4) n'est calculée que la première fois.

Les décorateurs ajoutent un pouvoir en plus à une fonction, sans toucher à la fonction elle-même. Écrire un journal, mesurer le temps, mémoriser et vérifier sont les classiques.`],
        ex: {
          t: ['Use @remember on a function called triple(n) that shows "working" and returns n * 3. Call triple(5) twice: "working" must show only once.', 'Usa @remember su una funzione che si chiama triple(n) che mostra "working" e restituisce n * 3. Chiama triple(5) due volte: "working" deve comparire una sola volta.', 'Utilise @remember sur une fonction qui s\'appelle triple(n) qui affiche "working" et rend n * 3. Appelle triple(5) deux fois : "working" ne doit apparaître qu\'une fois.'],
          h: ['Write triple with a print and a return inside, and the decorator just above it. Then call it two times.', 'Scrivi triple con un print e un return dentro, e il decoratore subito sopra. Poi chiamala due volte.', 'Écris triple avec un print et un return dedans, et le décorateur juste au-dessus. Puis appelle-la deux fois.'],
          start: 'def remember(function):\n    cache = {}\n    def wrapper(n):\n        if n not in cache:\n            cache[n] = function(n)\n        return cache[n]\n    return wrapper', sol: 'def remember(function):\n    cache = {}\n    def wrapper(n):\n        if n not in cache:\n            cache[n] = function(n)\n        return cache[n]\n    return wrapper\n\n@remember\ndef triple(n):\n    print("working")\n    return n * 3\n\ntriple(5)\ntriple(5)', out: 'working', c: '@remember'
        }
      },
      {
        c: [c`def shout(function):
    def wrapper():
        return function().upper() + "!"
    return wrapper

@shout
def hello():
    return "hello"

print(hello())`, c`def shout(function):
    def wrapper():
        return function().upper() + "!"
    return wrapper

@shout
def hello():
    return "ciao"

print(hello())`, c`def shout(function):
    def wrapper():
        return function().upper() + "!"
    return wrapper

@shout
def hello():
    return "salut"

print(hello())`],
        t: ['Challenge: do it twice', 'Sfida: fallo due volte', 'Défi : fais-le deux fois'],
        x: ['A decorator takes a function and gives back a new one, wrapper, that does something around it. @shout above hello means hello = shout(hello).', 'Un decoratore prende una funzione e ne restituisce una nuova, wrapper, che fa qualcosa intorno. @shout sopra hello vuol dire hello = shout(hello).', 'Un décorateur prend une fonction et en rend une nouvelle, wrapper, qui fait quelque chose autour. @shout au-dessus de hello veut dire hello = shout(hello).'],
        ex: {
          t: ['Write a decorator twice that runs the function two times. Put it above the function hello, which shows hello, and call hello(): hello must appear two times.', 'Scrivi un decoratore twice che esegue la funzione due volte. Mettilo sopra la funzione hello, che mostra ciao, e chiama hello(): ciao deve apparire due volte.', 'Écris un décorateur twice qui lance la fonction deux fois. Mets-le au-dessus de la fonction hello, qui affiche salut, et appelle hello() : salut doit apparaître deux fois.'],
          h: ['Like shout: twice(function) has a wrapper that calls function() two times, and returns wrapper.', 'Come shout: twice(function) ha un wrapper che chiama function() due volte, e restituisce wrapper.', 'Comme shout : twice(function) a un wrapper qui appelle function() deux fois, et rend wrapper.'],
          start: '',
          sol: ['def twice(function):\n    def wrapper():\n        function()\n        function()\n    return wrapper\n\n@twice\ndef hello():\n    print("hello")\n\nhello()', 'def twice(function):\n    def wrapper():\n        function()\n        function()\n    return wrapper\n\n@twice\ndef hello():\n    print("ciao")\n\nhello()', 'def twice(function):\n    def wrapper():\n        function()\n        function()\n    return wrapper\n\n@twice\ndef hello():\n    print("salut")\n\nhello()'],
          out: ['hello\nhello', 'ciao\nciao', 'salut\nsalut'], uses: ['def'], c: '@twice[\\s\\S]*def\\s+hello'
        }
      }
    ]
  },
  {
    title: ['Open and always close: with', 'Apri e chiudi sempre: with', 'Ouvre et ferme toujours : with'],
    subtitle: ['Context managers', 'I gestori di contesto', 'Les gestionnaires de contexte'],
    steps: [
      {
        c: c`class Tag:
    def __init__(self, name):
        self.name = name

    def __enter__(self):
        print("<" + self.name + ">")
        return self

    def __exit__(self, kind, value, traceback):
        print("</" + self.name + ">")
        return False

with Tag("html") as page:
    print("  hello")
    with Tag("b"):
        print("    bold")`,
        n: ['context-manager'],
        t: ['What with really does', 'Cosa fa davvero with', 'Ce que fait vraiment with'],
        x: [`with calls __enter__ when it starts, and __exit__ when it ends, even if something goes wrong inside. That is how with open(...) always closes the file.

Any class with these two methods can be used in a with. Here a Tag writes the opening and the closing, and the work in the middle is pushed in.`,
          `with chiama __enter__ quando inizia e __exit__ quando finisce, anche se dentro qualcosa va storto. È così che with open(...) chiude sempre il file.

Qualsiasi classe con questi due metodi si può usare in un with. Qui un Tag scrive l'apertura e la chiusura, e il lavoro in mezzo è rientrato.`,
          `with appelle __enter__ quand il commence, et __exit__ quand il finit, même si quelque chose tourne mal dedans. C'est ainsi que with open(...) ferme toujours le fichier.

Toute classe avec ces deux méthodes peut être utilisée dans un with. Ici un Tag écrit l'ouverture et la fermeture, et le travail au milieu est décalé.`],
        ex: {
          t: ['Use a Tag called p with a print("text") inside it. It must show: <p>, text, </p> on three lines.', 'Usa un Tag che si chiama p con un print("text") dentro. Deve mostrare: <p>, text, </p> su tre righe.', 'Utilise un Tag qui s\'appelle p avec un print("text") dedans. Il doit afficher : <p>, text, </p> sur trois lignes.'],
          h: ['with, then the object, then a colon. Everything pushed in under it happens between the opening and the closing.', 'with, poi l\'oggetto, poi i due punti. Tutto quello rientrato sotto succede tra l\'apertura e la chiusura.', 'with, puis l\'objet, puis deux-points. Tout ce qui est décalé dessous se passe entre l\'ouverture et la fermeture.'],
          start: 'class Tag:\n    def __init__(self, name):\n        self.name = name\n\n    def __enter__(self):\n        print("<" + self.name + ">")\n        return self\n\n    def __exit__(self, kind, value, traceback):\n        print("</" + self.name + ">")\n        return False', sol: 'class Tag:\n    def __init__(self, name):\n        self.name = name\n\n    def __enter__(self):\n        print("<" + self.name + ">")\n        return self\n\n    def __exit__(self, kind, value, traceback):\n        print("</" + self.name + ">")\n        return False\n\nwith Tag("p"):\n    print("text")', out: '<p>\ntext\n</p>', c: 'with Tag'
        }
      },
      {
        c: [c`from contextlib import contextmanager

@contextmanager
def announce(task):
    print("Start:", task)
    try:
        yield
    finally:
        print("End:", task)

with announce("cleaning"):
    print("working...")

try:
    with announce("risky"):
        raise ValueError("oops")
except ValueError:
    print("the error went through")`, c`from contextlib import contextmanager

@contextmanager
def announce(task):
    print("Inizio:", task)
    try:
        yield
    finally:
        print("Fine:", task)

with announce("pulizie"):
    print("lavoro...")

try:
    with announce("rischioso"):
        raise ValueError("ops")
except ValueError:
    print("l'errore è passato")`, c`from contextlib import contextmanager

@contextmanager
def announce(task):
    print("Début :", task)
    try:
        yield
    finally:
        print("Fin :", task)

with announce("ménage"):
    print("je travaille...")

try:
    with announce("risqué"):
        raise ValueError("oups")
except ValueError:
    print("l'erreur est passée")`],
        n: ['contextlib.contextmanager'],
        t: ['A with in a few lines', 'Un with in poche righe', 'Un with en quelques lignes'],
        x: [`@contextmanager lets you write a context manager as a generator: what is before the yield is the "enter", and what is after it is the "exit". Put the exit part in finally, so that it runs even when there is an error.

The second example shows it: the error goes through, but "End" is still shown first.`,
          `@contextmanager ti lascia scrivere un gestore di contesto come un generatore: quello che sta prima dello yield è l'"entrata", e quello che sta dopo è l'"uscita". Metti la parte di uscita in finally, così gira anche quando c'è un errore.

Il secondo esempio lo mostra: l'errore passa, ma "Fine" viene comunque mostrato prima.`,
          `@contextmanager te laisse écrire un gestionnaire de contexte comme un générateur : ce qui est avant le yield est l'"entrée", et ce qui est après est la "sortie". Mets la partie de sortie dans finally, pour qu'elle tourne même quand il y a une erreur.

Le deuxième exemple le montre : l'erreur passe, mais "Fin" est quand même affiché d'abord.`],
        ex: {
          t: ['Use announce with a task called "test" and a print("inside") in it. It must show: Start: test, inside, End: test.', 'Usa announce con un compito che si chiama "test" e un print("inside") dentro. Deve mostrare: Inizio: test, inside, Fine: test.', 'Utilise announce avec une tâche qui s\'appelle "test" et un print("inside") dedans. Il doit afficher : Début : test, inside, Fin : test.'],
          h: ['announce works with with, like Tag: give it the name of the task, and push the print in under it.', 'announce funziona con with, come Tag: dagli il nome del compito e rientra il print sotto.', 'announce marche avec with, comme Tag : donne-lui le nom de la tâche et décale le print dessous.'],
          start: ['from contextlib import contextmanager\n\n@contextmanager\ndef announce(task):\n    print("Start:", task)\n    try:\n        yield\n    finally:\n        print("End:", task)', 'from contextlib import contextmanager\n\n@contextmanager\ndef announce(task):\n    print("Inizio:", task)\n    try:\n        yield\n    finally:\n        print("Fine:", task)', 'from contextlib import contextmanager\n\n@contextmanager\ndef announce(task):\n    print("Début :", task)\n    try:\n        yield\n    finally:\n        print("Fin :", task)'],
          sol: ['from contextlib import contextmanager\n\n@contextmanager\ndef announce(task):\n    print("Start:", task)\n    try:\n        yield\n    finally:\n        print("End:", task)\n\nwith announce("test"):\n    print("inside")', 'from contextlib import contextmanager\n\n@contextmanager\ndef announce(task):\n    print("Inizio:", task)\n    try:\n        yield\n    finally:\n        print("Fine:", task)\n\nwith announce("test"):\n    print("inside")', 'from contextlib import contextmanager\n\n@contextmanager\ndef announce(task):\n    print("Début :", task)\n    try:\n        yield\n    finally:\n        print("Fin :", task)\n\nwith announce("test"):\n    print("inside")'],
          exact: true, c: 'with announce'
        }
      },
      {
        c: c`from contextlib import suppress
import os

with suppress(FileNotFoundError):
    os.remove("demo_never_existed.txt")
print("no error")

with open("demo_a.txt", "w") as one, open("demo_b.txt", "w") as two:
    one.write("1")
    two.write("2")
print(os.path.exists("demo_a.txt"), os.path.exists("demo_b.txt"))`,
        n: ['contextlib.suppress'],
        t: ['Ready-made helpers', 'Aiutanti già pronti', 'Des assistants tout prêts'],
        x: [`contextlib has helpers made for with. suppress ignores a chosen kind of error: removing a file that does not exist would be an error, but inside suppress nothing happens and the program goes on.

One with can also open several things at once, separated by commas. Whenever you see "open something, use it, always close it", a with is the answer.`,
          `contextlib ha aiutanti fatti per with. suppress ignora un tipo scelto di errore: cancellare un file che non esiste sarebbe un errore, ma dentro suppress non succede niente e il programma continua.

Un solo with può anche aprire più cose insieme, separate da virgole. Ogni volta che vedi "apri qualcosa, usalo, chiudilo sempre", la risposta è un with.`,
          `contextlib a des assistants faits pour with. suppress ignore un genre d'erreur choisi : supprimer un fichier qui n'existe pas serait une erreur, mais dans suppress il ne se passe rien et le programme continue.

Un seul with peut aussi ouvrir plusieurs choses à la fois, séparées par des virgules. Chaque fois que tu vois "ouvre quelque chose, utilise-le, ferme-le toujours", la réponse est un with.`],
        ex: {
          t: ['Use suppress to try to remove a file called demo_nothing.txt that does not exist, and then show: ok', 'Usa suppress per provare a cancellare un file che si chiama demo_nothing.txt che non esiste, e poi mostra: ok', 'Utilise suppress pour essayer de supprimer un fichier qui s\'appelle demo_nothing.txt qui n\'existe pas, puis affiche : ok'],
          h: ['suppress takes the name of the error, and it is used with with. Under it, pushed in, the line that removes the file. Then the print, not pushed in.', 'suppress prende il nome dell\'errore, e si usa con with. Sotto, rientrata, la riga che cancella il file. Poi il print, non rientrato.', 'suppress prend le nom de l\'erreur, et s\'utilise avec with. Dessous, décalée, la ligne qui supprime le fichier. Puis le print, sans décalage.'],
          sol: 'from contextlib import suppress\nimport os\n\nwith suppress(FileNotFoundError):\n    os.remove("demo_nothing.txt")\nprint("ok")', out: 'ok', c: 'suppress'
        }
      }
    ]
  },
  {
    title: ['Modern Python tricks', 'Trucchi del Python moderno', 'Astuces du Python moderne'],
    subtitle: ['match, walrus, unpacking and copies', 'match, tricheco, apertura e copie', 'match, morse, déballage et copies'],
    steps: [
      {
        c: [c`def describe(command):
    match command:
        case "go north" | "go south":
            return "moving"
        case "quit":
            return "bye"
        case ["take", item]:
            return f"taking {item}"
        case {"type": "gift", "name": name}:
            return f"a gift called {name}"
        case _:
            return "I do not understand"

print(describe("go north"))
print(describe(["take", "lamp"]))
print(describe({"type": "gift", "name": "book"}))
print(describe("dance"))`, c`def describe(command):
    match command:
        case "vai a nord" | "vai a sud":
            return "mi muovo"
        case "esci":
            return "ciao"
        case ["prendi", item]:
            return f"prendo {item}"
        case {"type": "gift", "name": name}:
            return f"un regalo che si chiama {name}"
        case _:
            return "non capisco"

print(describe("vai a nord"))
print(describe(["prendi", "lampada"]))
print(describe({"type": "gift", "name": "libro"}))
print(describe("balla"))`, c`def describe(command):
    match command:
        case "aller au nord" | "aller au sud":
            return "je me déplace"
        case "quitter":
            return "au revoir"
        case ["prendre", item]:
            return f"je prends {item}"
        case {"type": "gift", "name": name}:
            return f"un cadeau qui s'appelle {name}"
        case _:
            return "je ne comprends pas"

print(describe("aller au nord"))
print(describe(["prendre", "lampe"]))
print(describe({"type": "gift", "name": "livre"}))
print(describe("danser"))`],
        n: ['match'],
        t: ['match: choose by shape', 'match: scegli dalla forma', 'match : choisis selon la forme'],
        x: [`match looks at a value and picks the first case that fits. A case can be a plain value, several values joined with |, the shape of a list or of a dictionary that picks parts out into names, or _ that fits anything.

It is like a long if-elif chain, but it can look inside lists and dictionaries and name the pieces it finds: ["take", item] catches the item.`,
          `match guarda un valore e sceglie il primo case che va bene. Un case può essere un valore semplice, più valori uniti con |, la forma di una lista o di un dizionario che estrae parti in dei nomi, o _ che va bene per qualsiasi cosa.

È come una lunga catena if-elif, ma può guardare dentro liste e dizionari e dare un nome ai pezzi che trova: ["prendi", item] cattura l'oggetto.`,
          `match regarde une valeur et choisit le premier case qui convient. Un case peut être une valeur simple, plusieurs valeurs reliées par |, la forme d'une liste ou d'un dictionnaire qui extrait des parties dans des noms, ou _ qui convient à tout.

C'est comme une longue chaîne if-elif, mais il peut regarder dans des listes et des dictionnaires et donner un nom aux morceaux qu'il trouve : ["prendre", item] attrape l'objet.`],
        ex: {
          t: ['Make a function colour_name(code) with a match: the code "r" gives "red", "g" gives "green", and anything else gives "unknown". Show colour_name("g").', 'Crea una funzione colour_name(code) con un match: il codice "r" dà "rosso", "g" dà "verde" e qualsiasi altra cosa dà "ignoto". Mostra colour_name("g").', 'Crée une fonction colour_name(code) avec un match : le code "r" donne "rouge", "g" donne "vert" et tout autre donne "inconnu". Affiche colour_name("g").'],
          h: ['Inside the function: match on the code, then one case for each value, each giving back its colour. case _ catches everything else.', 'Dentro la funzione: match sul codice, poi un case per ogni valore, ognuno restituisce il suo colore. case _ prende tutto il resto.', 'Dans la fonction : match sur le code, puis un case pour chaque valeur, chacun rend sa couleur. case _ attrape tout le reste.'],
          sol: ['def colour_name(code):\n    match code:\n        case "r":\n            return "red"\n        case "g":\n            return "green"\n        case _:\n            return "unknown"\n\nprint(colour_name("g"))', 'def colour_name(code):\n    match code:\n        case "r":\n            return "rosso"\n        case "g":\n            return "verde"\n        case _:\n            return "ignoto"\n\nprint(colour_name("g"))', 'def colour_name(code):\n    match code:\n        case "r":\n            return "rouge"\n        case "g":\n            return "vert"\n        case _:\n            return "inconnu"\n\nprint(colour_name("g"))'],
          out: ['green', 'verde', 'vert'], c: 'match '
        }
      },
      {
        c: [c`data = [3, 8, 15, 4]
if (n := len(data)) > 3:
    print(f"A long list of {n} items")

x = 5
print(f"{x=}")
print(f"{x * 2 = }")

total = (a := 4) + (b := 5)
print(total, a, b)`, c`data = [3, 8, 15, 4]
if (n := len(data)) > 3:
    print(f"Una lista lunga di {n} elementi")

x = 5
print(f"{x=}")
print(f"{x * 2 = }")

total = (a := 4) + (b := 5)
print(total, a, b)`, c`data = [3, 8, 15, 4]
if (n := len(data)) > 3:
    print(f"Une longue liste de {n} éléments")

x = 5
print(f"{x=}")
print(f"{x * 2 = }")

total = (a := 4) + (b := 5)
print(total, a, b)`],
        n: [':=', 'debug-fstring'],
        t: ['The walrus and a debugging f-string', 'Il tricheco e una f-string per il debug', 'Le morse et une f-string de débogage'],
        x: [`The walrus := puts a value in a name inside an expression, so you can use it right away: (n := len(data)) > 3 keeps the length in n and tests it in one go.

And f"{x=}" shows both the name and the value: x=5. It is the fastest way to look at a value while you are hunting a mistake.`,
          `Il tricheco := mette un valore in un nome dentro un'espressione, così lo puoi usare subito: (n := len(data)) > 3 tiene la lunghezza in n e la verifica in un colpo solo.

E f"{x=}" mostra sia il nome sia il valore: x=5. È il modo più rapido di guardare un valore mentre cerchi un errore.`,
          `Le morse := met une valeur dans un nom à l'intérieur d'une expression, donc tu peux l'utiliser tout de suite : (n := len(data)) > 3 garde la longueur dans n et la teste d'un coup.

Et f"{x=}" montre à la fois le nom et la valeur : x=5. C'est la façon la plus rapide de regarder une valeur quand tu cherches une erreur.`],
        ex: {
          t: ['With f"{...=}", show the value of the box price when it is 12: price=12', 'Con f"{...=}", mostra il valore della scatola price quando vale 12: price=12', 'Avec f"{...=}", affiche la valeur de la boîte price quand elle vaut 12 : price=12'],
          h: ['Inside the curly brackets of an f-string, a = right after the name shows the name and its value.', 'Dentro le graffe di una f-string, un = subito dopo il nome mostra il nome e il suo valore.', 'Dans les accolades d\'une f-string, un = juste après le nom affiche le nom et sa valeur.'],
          start: 'price = 12', sol: 'price = 12\nprint(f"{price=}")', out: 'price=12', c: '=\\}'
        }
      },
      {
        c: c`first, *middle, last = [1, 2, 3, 4, 5]
print(first, middle, last)
a = {"x": 1, "y": 2}
b = {"y": 20, "z": 30}
print(a | b)
print({**a, **b})
print([*range(3), *"ab"])
(x, y), z = (1, 2), 3
print(x, y, z)`,
        n: ['star-unpack'],
        t: ['Unpacking everywhere', 'Aprire ovunque', 'Déballer partout'],
        x: [`A star in an unpacking catches "all the rest" into a list: first, *middle, last takes the first and the last, and puts everything in between in middle.

Two dictionaries are merged with | (the second wins when a key is in both), or with ** inside curly brackets. A star in front of a list inside brackets spreads its items out. Unpacking can even go into nested pairs.`,
          `Una stella in un'apertura cattura "tutto il resto" in una lista: first, *middle, last prende il primo e l'ultimo e mette tutto quello che sta in mezzo in middle.

Due dizionari si uniscono con | (vince il secondo quando una chiave è in tutti e due), o con ** dentro le parentesi graffe. Una stella davanti a una lista dentro delle parentesi spande i suoi elementi. L'apertura può andare anche dentro coppie annidate.`,
          `Une étoile dans un déballage attrape "tout le reste" dans une liste : first, *middle, last prend le premier et le dernier, et met tout ce qui est entre les deux dans middle.

Deux dictionnaires se fusionnent avec | (le deuxième gagne quand une clé est dans les deux), ou avec ** dans des accolades. Une étoile devant une liste dans des crochets étale ses éléments. Le déballage peut même aller dans des paires imbriquées.`],
        ex: {
          t: ['From the list [10, 20, 30, 40], put the first item in head and all the others in tail, with a star, and show tail ([20, 30, 40]).', 'Dalla lista [10, 20, 30, 40], metti il primo elemento in head e tutti gli altri in tail, con una stella, e mostra tail ([20, 30, 40]).', 'À partir de la liste [10, 20, 30, 40], mets le premier élément dans head et tous les autres dans tail, avec une étoile, et affiche tail ([20, 30, 40]).'],
          h: ['Two names on the left of =: the first gets one item, the one with a star in front gets all the rest.', 'Due nomi a sinistra di =: il primo riceve un elemento, quello con la stella davanti riceve tutto il resto.', 'Deux noms à gauche de = : le premier reçoit un élément, celui avec une étoile devant reçoit tout le reste.'],
          sol: 'head, *tail = [10, 20, 30, 40]\nprint(tail)', out: '[20, 30, 40]', c: '\\*tail'
        }
      },
      {
        c: c`import copy

original = {"name": "Ada", "tags": ["a", "b"]}
shallow = original.copy()
deep = copy.deepcopy(original)
original["tags"].append("c")
print(shallow["tags"])
print(deep["tags"])

a = b = [0]
a.append(1)
print(b)
grid = [[0] * 2] * 2
grid[0][0] = 9
print(grid)`,
        n: ['module:copy', 'copy.deepcopy', 'chain-assign'],
        t: ['Copies, and a famous trap', 'Copie, e una trappola famosa', 'Copies, et un piège célèbre'],
        x: [`copy() makes a shallow copy: the outer list or dictionary is new, but the lists inside are still shared. copy.deepcopy copies everything, all the way down.

The famous trap: [[0] * 2] * 2 repeats the same inner list twice, so changing one row changes both. And a = b = [0] gives two names to one list. If you want separate rows, make each row on its own, for example with a comprehension.`,
          `copy() fa una copia superficiale: la lista o il dizionario esterno è nuovo, ma le liste dentro sono ancora condivise. copy.deepcopy copia tutto, fino in fondo.

La trappola famosa: [[0] * 2] * 2 ripete due volte la stessa lista interna, quindi cambiando una riga si cambiano tutte e due. E a = b = [0] dà due nomi a una lista sola. Se vuoi righe separate, fai ogni riga da sola, per esempio con una comprensione.`,
          `copy() fait une copie superficielle : la liste ou le dictionnaire extérieur est nouveau, mais les listes à l'intérieur sont toujours partagées. copy.deepcopy copie tout, jusqu'au fond.

Le piège célèbre : [[0] * 2] * 2 répète deux fois la même liste intérieure, donc changer une ligne change les deux. Et a = b = [0] donne deux noms à une seule liste. Si tu veux des lignes séparées, fais chaque ligne à part, par exemple avec une compréhension.`],
        ex: {
          t: ['Make a grid of 2 rows of 2 zeros where the rows are NOT shared (use a comprehension). Change the first item of the first row to 9 and show the grid: [[9, 0], [0, 0]]', 'Fai una griglia di 2 righe di 2 zeri dove le righe NON sono condivise (usa una comprensione). Cambia il primo elemento della prima riga in 9 e mostra la griglia: [[9, 0], [0, 0]]', 'Fais une grille de 2 lignes de 2 zéros où les lignes ne sont PAS partagées (utilise une compréhension). Change le premier élément de la première ligne en 9 et affiche la grille : [[9, 0], [0, 0]]'],
          h: ['Build each row inside a comprehension, so every row is a new list. Then change one item and show the grid.', 'Costruisci ogni riga dentro una comprensione, così ogni riga è una lista nuova. Poi cambia un elemento e mostra la griglia.', 'Construis chaque ligne dans une compréhension, pour que chaque ligne soit une nouvelle liste. Puis change un élément et affiche la grille.'],
          sol: 'grid = [[0] * 2 for row in range(2)]\ngrid[0][0] = 9\nprint(grid)', out: '[[9, 0], [0, 0]]', c: 'for row in range'
        }
      }
    ]
  }
];
