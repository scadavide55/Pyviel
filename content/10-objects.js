// Stage 5 · Classes, objects that work together, inheritance. See tools/build-course.js for the format.
const c = String.raw;
const G5 = ['Stage 5 · Objects', 'Fase 5 · Gli oggetti', 'Étape 5 · Les objets'];

module.exports = [
  {
    group: G5,
    title: ['Your own kind of thing: classes', 'Un tipo di cosa tutto tuo: le classi', 'Ta propre sorte de chose : les classes'],
    subtitle: ['Objects with data and actions', 'Oggetti con dati e azioni', 'Des objets avec des données et des actions'],
    steps: [
      {
        c: c`class Dog:
    pass

rex = Dog()
print(type(rex))`,
        n: ['class', 'pass'],
        t: ['A class is a blueprint', 'Una classe è un progetto', 'Une classe est un plan'],
        x: [`So far you used kinds of things that Python already has: text, lists, dictionaries. A class lets you invent your own kind. Think of it as a blueprint: every thing built from it is called an object.

class Dog: makes a new kind, called Dog. pass means "nothing here yet". Dog() builds one object of that kind, and type shows its kind.`,
          `Finora hai usato tipi di cose che Python ha già: testo, liste, dizionari. Una classe ti lascia inventare un tipo tuo. Pensala come un progetto: ogni cosa costruita con essa si chiama oggetto.

class Dog: crea un tipo nuovo, che si chiama Dog. pass vuol dire "qui ancora niente". Dog() costruisce un oggetto di quel tipo, e type mostra il suo tipo.`,
          `Jusqu'ici tu as utilisé des sortes de choses que Python a déjà : texte, listes, dictionnaires. Une classe te laisse inventer ta propre sorte. Pense-la comme un plan : chaque chose construite avec s'appelle un objet.

class Dog: crée une nouvelle sorte, appelée Dog. pass veut dire "rien ici pour l'instant". Dog() construit un objet de cette sorte, et type montre sa sorte.`],
        ex: {
          t: ['Make a class called Cat, build one object called tom from it, and show its type.', 'Crea una classe che si chiama Cat, costruisci un oggetto che si chiama tom, e mostra il suo tipo.', 'Crée une classe qui s\'appelle Cat, construis un objet qui s\'appelle tom, et affiche sa sorte.'],
          h: ['An empty class needs one pushed-in line: pass. Build the object by calling the class like a function.', 'Una classe vuota ha bisogno di una riga rientrata: pass. Costruisci l\'oggetto chiamando la classe come una funzione.', 'Une classe vide a besoin d\'une ligne décalée : pass. Construis l\'objet en appelant la classe comme une fonction.'],
          sol: 'class Cat:\n    pass\n\ntom = Cat()\nprint(type(tom))', m: 'Cat', c: 'class Cat'
        }
      },
      {
        c: c`class Dog:
    pass

rex = Dog()
print(isinstance(rex, Dog))
print(isinstance(5, Dog))
print(rex is Dog())`,
        n: ['isinstance'],
        t: ['Ask about an object', 'Chiedi di un oggetto', 'Interroge un objet'],
        x: [`isinstance(object, Class) asks "is this object of this kind?". For rex the answer is True, for the number 5 it is False.

Every time you write Dog() you build a new, separate object: that is why rex is Dog() is False. They are two different dogs.`,
          `isinstance(oggetto, Classe) chiede "questo oggetto è di questo tipo?". Per rex la risposta è True, per il numero 5 è False.

Ogni volta che scrivi Dog() costruisci un oggetto nuovo e separato: per questo rex is Dog() è False. Sono due cani diversi.`,
          `isinstance(objet, Classe) demande "cet objet est-il de cette sorte ?". Pour rex la réponse est True, pour le nombre 5 elle est False.

Chaque fois que tu écris Dog() tu construis un objet nouveau et séparé : c'est pourquoi rex is Dog() est False. Ce sont deux chiens différents.`],
        ex: {
          t: ['With the class Dog, build an object called fido and show whether it is a Dog.', 'Con la classe Dog, costruisci un oggetto che si chiama fido e mostra se è un Dog.', 'Avec la classe Dog, construis un objet qui s\'appelle fido et affiche si c\'est un Dog.'],
          h: ['print(isinstance(fido, Dog))', 'print(isinstance(fido, Dog))', 'print(isinstance(fido, Dog))'],
          start: 'class Dog:\n    pass', sol: 'class Dog:\n    pass\n\nfido = Dog()\nprint(isinstance(fido, Dog))', out: 'True', c: 'isinstance'
        }
      },
      {
        c: c`class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

rex = Dog("Rex", 3)
fido = Dog("Fido", 5)
print(rex.name, rex.age)
print(fido.name)
rex.age = 4
print(rex.age, fido.age)`,
        n: ['init'],
        t: ['Give it data: __init__', 'Dagli dei dati: __init__', 'Donne-lui des données : __init__'],
        x: [`__init__ is a special method that runs by itself when an object is made. Its job is to set the object up. self means "this very object", and self.name = name keeps the value inside it.

Each object has its own data: changing rex.age does not change fido.age.`,
          `__init__ è un metodo speciale che gira da solo quando un oggetto viene creato. Il suo compito è preparare l'oggetto. self vuol dire "proprio questo oggetto", e self.name = name tiene il valore dentro di lui.

Ogni oggetto ha i suoi dati: cambiare rex.age non cambia fido.age.`,
          `__init__ est une méthode spéciale qui tourne toute seule quand un objet est créé. Son travail est de préparer l'objet. self veut dire "cet objet-là", et self.name = name garde la valeur dedans.

Chaque objet a ses propres données : changer rex.age ne change pas fido.age.`],
        ex: {
          t: ['Make a class Book with __init__ that keeps title and pages. Build Book("Dune", 600) and show its pages.', 'Crea una classe Book con __init__ che tiene title e pages. Costruisci Book("Dune", 600) e mostra le sue pages.', 'Crée une classe Book avec __init__ qui garde title et pages. Construis Book("Dune", 600) et affiche ses pages.'],
          h: ['def __init__(self, title, pages): and self.title = title, self.pages = pages.', 'def __init__(self, title, pages): e self.title = title, self.pages = pages.', 'def __init__(self, title, pages): et self.title = title, self.pages = pages.'],
          sol: 'class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\nb = Book("Dune", 600)\nprint(b.pages)', out: '600', c: '__init__'
        }
      },
      {
        c: [c`class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name, "says Woof!")

    def rename(self, new_name):
        self.name = new_name

rex = Dog("Rex")
rex.bark()
rex.rename("Max")
rex.bark()`, c`class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name, "dice Bau!")

    def rename(self, new_name):
        self.name = new_name

rex = Dog("Rex")
rex.bark()
rex.rename("Max")
rex.bark()`, c`class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name, "dit Ouaf!")

    def rename(self, new_name):
        self.name = new_name

rex = Dog("Rex")
rex.bark()
rex.rename("Max")
rex.bark()`],
        n: ['method'],
        t: ['Give it actions: methods', 'Dagli delle azioni: i metodi', 'Donne-lui des actions : les méthodes'],
        x: [`A function inside a class is called a method. Its first parameter is always self, and Python fills it in for you: rex.bark() means Dog.bark(rex).

A method can read the data of its object with self.name, and change it too, like rename does.`,
          `Una funzione dentro una classe si chiama metodo. Il suo primo parametro è sempre self, e Python lo riempie per te: rex.bark() vuol dire Dog.bark(rex).

Un metodo può leggere i dati del suo oggetto con self.name, e anche cambiarli, come fa rename.`,
          `Une fonction dans une classe s'appelle une méthode. Son premier paramètre est toujours self, et Python le remplit pour toi : rex.bark() veut dire Dog.bark(rex).

Une méthode peut lire les données de son objet avec self.name, et aussi les changer, comme le fait rename.`],
        ex: {
          t: ['Add a method called birthday to the class Dog that adds 1 to self.age. Build Dog("Rex", 3), call birthday, and show the age (4).', 'Aggiungi alla classe Dog un metodo che si chiama birthday che aggiunge 1 a self.age. Costruisci Dog("Rex", 3), chiama birthday e mostra l\'età (4).', 'Ajoute à la classe Dog une méthode qui s\'appelle birthday qui ajoute 1 à self.age. Construis Dog("Rex", 3), appelle birthday et affiche l\'âge (4).'],
          h: ['def birthday(self): and self.age += 1 inside it.', 'def birthday(self): e self.age += 1 dentro.', 'def birthday(self): et self.age += 1 dedans.'],
          start: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age', sol: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def birthday(self):\n        self.age += 1\n\nrex = Dog("Rex", 3)\nrex.birthday()\nprint(rex.age)', out: '4', c: 'def birthday'
        }
      },
      {
        c: c`class Dog:
    species = "Canis familiaris"
    count = 0

    def __init__(self, name):
        self.name = name
        Dog.count += 1

a = Dog("Rex")
b = Dog("Fido")
print(a.species, b.species)
print(Dog.count)`,
        n: ['class-attr'],
        t: ['Data shared by all', 'Dati condivisi da tutti', 'Des données partagées par tous'],
        x: [`A name written in the class itself, outside the methods, belongs to the class and is shared by every object: species, and a counter that grows each time a dog is made.

Use it for what is the same for all the objects, or to count how many were made.`,
          `Un nome scritto nella classe stessa, fuori dai metodi, appartiene alla classe ed è condiviso da ogni oggetto: species, e un contatore che cresce ogni volta che viene creato un cane.

Usalo per quello che è uguale per tutti gli oggetti, o per contare quanti ne sono stati creati.`,
          `Un nom écrit dans la classe elle-même, hors des méthodes, appartient à la classe et est partagé par chaque objet : species, et un compteur qui grandit chaque fois qu'un chien est créé.

Utilise-le pour ce qui est pareil pour tous les objets, ou pour compter combien ont été créés.`],
        ex: {
          t: ['Build three dogs and show how many were made (3).', 'Costruisci tre cani e mostra quanti ne sono stati creati (3).', 'Construis trois chiens et affiche combien ont été créés (3).'],
          h: ['Every Dog(...) you build adds 1 to the count kept on the class. Build three, then show the count of the class.', 'Ogni Dog(...) che costruisci aggiunge 1 al conteggio tenuto dalla classe. Costruiscine tre, poi mostra il conteggio della classe.', 'Chaque Dog(...) que tu construis ajoute 1 au compte gardé par la classe. Construis-en trois, puis affiche le compte de la classe.'],
          start: 'class Dog:\n    count = 0\n\n    def __init__(self, name):\n        self.name = name\n        Dog.count += 1', sol: 'class Dog:\n    count = 0\n\n    def __init__(self, name):\n        self.name = name\n        Dog.count += 1\n\nDog("A")\nDog("B")\nDog("C")\nprint(Dog.count)', out: '3', c: 'Dog.count'
        }
      },
      {
        c: c`class Counter:
    def __init__(self):
        self.value = 0

    def add(self, amount=1):
        self.value += amount
        return self

c = Counter()
c.add().add().add(10)
print(c.value)
print(hasattr(c, "value"), hasattr(c, "colour"))`,
        n: ['chain', 'hasattr'],
        t: ['Chaining and asking', 'Concatenare e chiedere', 'Enchaîner et demander'],
        x: [`A method that ends with return self gives the object back, so you can chain calls: c.add().add().add(10) does three additions in a row.

hasattr asks if an object has a given name inside it: it is True for value and False for colour.`,
          `Un metodo che finisce con return self restituisce l'oggetto, così puoi concatenare le chiamate: c.add().add().add(10) fa tre addizioni di fila.

hasattr chiede se un oggetto ha un certo nome dentro di sé: è True per value e False per colour.`,
          `Une méthode qui finit par return self rend l'objet, donc tu peux enchaîner les appels : c.add().add().add(10) fait trois additions de suite.

hasattr demande si un objet a un certain nom en lui : c'est True pour value et False pour colour.`],
        ex: {
          t: ['Use chaining to add 5, then 5, then 5, and show the value (15).', 'Usa il concatenamento per aggiungere 5, poi 5, poi 5, e mostra il valore (15).', 'Utilise l\'enchaînement pour ajouter 5, puis 5, puis 5, et affiche la valeur (15).'],
          h: ['c.add(5).add(5).add(5)', 'c.add(5).add(5).add(5)', 'c.add(5).add(5).add(5)'],
          start: 'class Counter:\n    def __init__(self):\n        self.value = 0\n\n    def add(self, amount=1):\n        self.value += amount\n        return self\n\nc = Counter()', sol: 'class Counter:\n    def __init__(self):\n        self.value = 0\n\n    def add(self, amount=1):\n        self.value += amount\n        return self\n\nc = Counter()\nc.add(5).add(5).add(5)\nprint(c.value)', out: '15', c: 'add\\(5\\)\\.add'
        }
      }
    ]
  },
  {
    title: ['Objects that work together', 'Oggetti che lavorano insieme', 'Des objets qui travaillent ensemble'],
    subtitle: ['A bank account, a shop and a game', 'Un conto in banca, un negozio e un gioco', 'Un compte en banque, une boutique et un jeu'],
    steps: [
      {
        c: [c`class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Not enough money")
        else:
            self.balance -= amount

acc = Account("Ada", 100)
acc.deposit(50)
acc.withdraw(30)
acc.withdraw(500)
print(acc.owner, acc.balance)`, c`class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Non ci sono abbastanza soldi")
        else:
            self.balance -= amount

acc = Account("Ada", 100)
acc.deposit(50)
acc.withdraw(30)
acc.withdraw(500)
print(acc.owner, acc.balance)`, c`class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Pas assez d'argent")
        else:
            self.balance -= amount

acc = Account("Ada", 100)
acc.deposit(50)
acc.withdraw(30)
acc.withdraw(500)
print(acc.owner, acc.balance)`],
        n: ['-='],
        t: ['A bank account', 'Un conto in banca', 'Un compte en banque'],
        x: [`A class is perfect when data and the actions on it belong together. The account keeps its balance, and the only ways to change it are the methods, which can check the rules: you cannot take out more than there is.

Read the program top to bottom: it deposits 50, takes out 30, tries to take out 500 and is refused.`,
          `Una classe è perfetta quando i dati e le azioni su di essi stanno insieme. Il conto tiene il suo saldo, e i soli modi per cambiarlo sono i metodi, che possono controllare le regole: non puoi prelevare più di quello che c'è.

Leggi il programma dall'alto in basso: deposita 50, preleva 30, prova a prelevare 500 e viene rifiutato.`,
          `Une classe est parfaite quand les données et les actions sur elles vont ensemble. Le compte garde son solde, et les seules façons de le changer sont les méthodes, qui peuvent vérifier les règles : tu ne peux pas retirer plus qu'il n'y a.

Lis le programme de haut en bas : il dépose 50, retire 30, essaie de retirer 500 et est refusé.`],
        ex: {
          t: ['Add a method interest(rate) that adds balance * rate to the balance. With a balance of 200 and a rate of 0.5 it must show 300.0.', 'Aggiungi un metodo interest(rate) che aggiunge balance * rate al saldo. Con un saldo di 200 e un tasso di 0.5 deve mostrare 300.0.', 'Ajoute une méthode interest(rate) qui ajoute balance * rate au solde. Avec un solde de 200 et un taux de 0.5 elle doit afficher 300.0.'],
          h: ['self.balance += self.balance * rate', 'self.balance += self.balance * rate', 'self.balance += self.balance * rate'],
          start: 'class Account:\n    def __init__(self, balance=0):\n        self.balance = balance', sol: 'class Account:\n    def __init__(self, balance=0):\n        self.balance = balance\n\n    def interest(self, rate):\n        self.balance += self.balance * rate\n\nacc = Account(200)\nacc.interest(0.5)\nprint(acc.balance)', out: '300.0', c: 'def interest'
        }
      },
      {
        c: [c`class InsufficientFunds(Exception):
    pass

class Account:
    def __init__(self, balance=0):
        self.balance = balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFunds(f"only {self.balance} available")
        self.balance -= amount

acc = Account(20)
try:
    acc.withdraw(50)
except InsufficientFunds as error:
    print("Refused:", error)
acc.withdraw(5)
print(acc.balance)`, c`class InsufficientFunds(Exception):
    pass

class Account:
    def __init__(self, balance=0):
        self.balance = balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFunds(f"ce ne sono solo {self.balance}")
        self.balance -= amount

acc = Account(20)
try:
    acc.withdraw(50)
except InsufficientFunds as error:
    print("Rifiutato:", error)
acc.withdraw(5)
print(acc.balance)`, c`class InsufficientFunds(Exception):
    pass

class Account:
    def __init__(self, balance=0):
        self.balance = balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise InsufficientFunds(f"il n'y a que {self.balance}")
        self.balance -= amount

acc = Account(20)
try:
    acc.withdraw(50)
except InsufficientFunds as error:
    print("Refusé :", error)
acc.withdraw(5)
print(acc.balance)`],
        t: ['Methods that raise errors', 'Metodi che alzano errori', 'Des méthodes qui lèvent des erreurs'],
        x: [`Showing a message inside a method is not very useful, because the code that called it cannot react. It is better to raise an error that the caller can catch with try and except, and decide what to do.

You can invent your own kind of error: a class that inherits from Exception, written class InsufficientFunds(Exception). The pass means it needs nothing more. It is a name with a meaning.`,
          `Mostrare un messaggio dentro un metodo non serve molto, perché il codice che l'ha chiamato non può reagire. È meglio alzare un errore che chi chiama può prendere con try ed except, decidendo cosa fare.

Puoi inventare un tuo tipo di errore: una classe che eredita da Exception, scritta class InsufficientFunds(Exception). Il pass vuol dire che non le serve altro. È un nome con un significato.`,
          `Afficher un message dans une méthode n'est pas très utile, parce que le code qui l'a appelée ne peut pas réagir. Il vaut mieux lever une erreur que celui qui appelle peut attraper avec try et except, et décider quoi faire.

Tu peux inventer ta propre sorte d'erreur : une classe qui hérite de Exception, écrite class InsufficientFunds(Exception). Le pass veut dire qu'elle n'a besoin de rien de plus. C'est un nom avec un sens.`],
        ex: {
          t: ['Make your own error class called TooBig(Exception). Raise it with the message too big, catch it, and show the message.', 'Crea una tua classe di errore che si chiama TooBig(Exception). Alzala con il messaggio troppo grande, prendila e mostra il messaggio.', 'Crée ta propre classe d\'erreur qui s\'appelle TooBig(Exception). Lève-la avec le message trop grand, attrape-la et affiche le message.'],
          h: ['class TooBig(Exception): pass, then try: raise TooBig("...") except TooBig as error: print(error).', 'class TooBig(Exception): pass, poi try: raise TooBig("...") except TooBig as error: print(error).', 'class TooBig(Exception): pass, puis try: raise TooBig("...") except TooBig as error: print(error).'],
          sol: ['class TooBig(Exception):\n    pass\n\ntry:\n    raise TooBig("too big")\nexcept TooBig as error:\n    print(error)', 'class TooBig(Exception):\n    pass\n\ntry:\n    raise TooBig("troppo grande")\nexcept TooBig as error:\n    print(error)', 'class TooBig(Exception):\n    pass\n\ntry:\n    raise TooBig("trop grand")\nexcept TooBig as error:\n    print(error)'],
          out: ['too big', 'troppo grande', 'trop grand'], c: 'TooBig'
        }
      },
      {
        c: [c`class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Cart:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    def total(self):
        return sum([item.price for item in self.items])

cart = Cart()
cart.add(Item("book", 12))
cart.add(Item("pen", 3))
print(len(cart.items), cart.total())
for item in cart.items:
    print(f"- {item.name}: {item.price}")`, c`class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Cart:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    def total(self):
        return sum([item.price for item in self.items])

cart = Cart()
cart.add(Item("libro", 12))
cart.add(Item("penna", 3))
print(len(cart.items), cart.total())
for item in cart.items:
    print(f"- {item.name}: {item.price}")`, c`class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Cart:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    def total(self):
        return sum([item.price for item in self.items])

cart = Cart()
cart.add(Item("livre", 12))
cart.add(Item("stylo", 3))
print(len(cart.items), cart.total())
for item in cart.items:
    print(f"- {item.name} : {item.price}")`],
        t: ['Objects holding objects', 'Oggetti che contengono oggetti', 'Des objets qui contiennent des objets'],
        x: [`An object can keep other objects: the cart holds a list of items. Each class does one clear job, and together they make a little shop.

Splitting a problem into objects that each know their own job is the heart of this way of programming.`,
          `Un oggetto può tenere altri oggetti: il carrello tiene una lista di articoli. Ogni classe fa un compito chiaro, e insieme fanno un piccolo negozio.

Dividere un problema in oggetti che conoscono ognuno il proprio compito è il cuore di questo modo di programmare.`,
          `Un objet peut garder d'autres objets : le panier tient une liste d'articles. Chaque classe fait un travail clair, et ensemble elles font une petite boutique.

Découper un problème en objets qui connaissent chacun leur travail est le cœur de cette façon de programmer.`],
        ex: {
          t: ['Add a third item to the cart and show the total again. With a book (12), a pen (3) and a bag (20) it must show 35.', 'Aggiungi un terzo articolo al carrello e mostra di nuovo il totale. Con un libro (12), una penna (3) e una borsa (20) deve mostrare 35.', 'Ajoute un troisième article au panier et affiche de nouveau le total. Avec un livre (12), un stylo (3) et un sac (20) il doit afficher 35.'],
          h: ['cart.add(Item("bag", 20)) before the print of the total.', 'cart.add(Item("borsa", 20)) prima del print del totale.', 'cart.add(Item("sac", 20)) avant le print du total.'],
          start: 'class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nclass Cart:\n    def __init__(self):\n        self.items = []\n\n    def add(self, item):\n        self.items.append(item)\n\n    def total(self):\n        return sum([item.price for item in self.items])\n\ncart = Cart()\ncart.add(Item("book", 12))\ncart.add(Item("pen", 3))',
          sol: 'class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nclass Cart:\n    def __init__(self):\n        self.items = []\n\n    def add(self, item):\n        self.items.append(item)\n\n    def total(self):\n        return sum([item.price for item in self.items])\n\ncart = Cart()\ncart.add(Item("book", 12))\ncart.add(Item("pen", 3))\ncart.add(Item("bag", 20))\nprint(cart.total())', out: '35', c: 'add\\(Item'
        }
      },
      {
        c: [c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orc", 12)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
    print(f"Turn {turn}: the {orc.name} has {orc.health} health")
print("The orc is defeated!")`, c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orco", 12)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
    print(f"Turno {turn}: {orc.name} ha {orc.health} punti vita")
print("L'orco è sconfitto!")`, c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orque", 12)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
    print(f"Tour {turn} : {orc.name} a {orc.health} points de vie")
print("L'orque est vaincu !")`],
        t: ['A game with objects', 'Un gioco con gli oggetti', 'Un jeu avec des objets'],
        x: [`Games are made of objects: a monster knows its health, can be hit, and tells if it is alive. The loop only talks to the object, it does not care how health is stored.

The seed makes the fight the same every time you run it, so you can read the output together with the code.`,
          `I giochi sono fatti di oggetti: un mostro conosce i suoi punti vita, può essere colpito e dice se è vivo. Il ciclo parla solo con l'oggetto, non gli importa come sono conservati i punti vita.

Il seme fa venire il combattimento uguale ogni volta che lo esegui, così puoi leggere l'uscita insieme al codice.`,
          `Les jeux sont faits d'objets : un monstre connaît ses points de vie, peut être frappé et dit s'il est vivant. La boucle ne parle qu'à l'objet, elle ne se soucie pas de la façon dont la vie est gardée.

La graine fait que le combat est le même à chaque exécution, donc tu peux lire la sortie avec le code.`],
        ex: {
          t: ['Make the Monster stronger: start it with 20 health instead of 12.', 'Rendi il Monster più forte: fallo partire con 20 punti vita invece di 12.', 'Rends le Monster plus fort : fais-le partir avec 20 points de vie au lieu de 12.'],
          h: ['Change the 12 in the line that builds the orc.', 'Cambia il 12 nella riga che costruisce l\'orco.', 'Change le 12 dans la ligne qui construit l\'orque.'],
          start: [c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orc", 12)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
print(turn, "turns")`, c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orco", 12)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
print(turn, "turni")`, c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orque", 12)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
print(turn, "tours")`],
          sol: [c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orc", 20)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
print(turn, "turns")`, c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orco", 20)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
print(turn, "turni")`, c`import random

class Monster:
    def __init__(self, name, health):
        self.name = name
        self.health = health

    def hit(self, damage):
        self.health = max(0, self.health - damage)

    def alive(self):
        return self.health > 0

random.seed(5)
orc = Monster("Orque", 20)
turn = 0
while orc.alive():
    turn += 1
    orc.hit(random.randint(2, 6))
print(turn, "tours")`],
          exact: true
        }
      }
    ]
  },
  {
    title: ['Families of classes: inheritance', 'Famiglie di classi: l\'ereditarietà', 'Des familles de classes : l\'héritage'],
    subtitle: ['Reuse and specialise', 'Riusa e specializza', 'Réutilise et spécialise'],
    steps: [
      {
        c: [c`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Woof"

class Cat(Animal):
    def speak(self):
        return "Meow"

for pet in [Dog("Rex"), Cat("Tom"), Animal("Thing")]:
    print(pet.name, "says", pet.speak())`, c`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Bau"

class Cat(Animal):
    def speak(self):
        return "Miao"

for pet in [Dog("Rex"), Cat("Tom"), Animal("Coso")]:
    print(pet.name, "dice", pet.speak())`, c`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Ouaf"

class Cat(Animal):
    def speak(self):
        return "Miaou"

for pet in [Dog("Rex"), Cat("Tom"), Animal("Truc")]:
    print(pet.name, "dit", pet.speak())`],
        n: ['inherit'],
        t: ['A child class', 'Una classe figlia', 'Une classe enfant'],
        x: [`class Dog(Animal) means "a Dog is an Animal": the new class gets everything that Animal has (here __init__ and name), and can add or change things.

Writing speak again in Dog replaces the version of Animal for dogs: this is called overriding. The loop treats all the pets the same way, and each one answers in its own way.`,
          `class Dog(Animal) vuol dire "un Dog è un Animal": la classe nuova riceve tutto quello che ha Animal (qui __init__ e name) e può aggiungere o cambiare cose.

Scrivere di nuovo speak in Dog sostituisce la versione di Animal per i cani: si chiama sovrascrivere. Il ciclo tratta tutti gli animali allo stesso modo, e ognuno risponde a modo suo.`,
          `class Dog(Animal) veut dire "un Dog est un Animal" : la nouvelle classe reçoit tout ce qu'a Animal (ici __init__ et name), et peut ajouter ou changer des choses.

Écrire de nouveau speak dans Dog remplace la version d'Animal pour les chiens : cela s'appelle redéfinir. La boucle traite tous les animaux de la même façon, et chacun répond à sa manière.`],
        ex: {
          t: ['Add a class Cow that is an Animal, and whose speak returns Moo. Show the speak of Cow("Bella").', 'Aggiungi una classe Cow che è un Animal e il cui speak restituisce Muu. Mostra lo speak di Cow("Bella").', 'Ajoute une classe Cow qui est un Animal et dont speak rend Meuh. Affiche le speak de Cow("Bella").'],
          h: ['class Cow(Animal): and def speak(self): return "Moo".', 'class Cow(Animal): e def speak(self): return "Muu".', 'class Cow(Animal): et def speak(self): return "Meuh".'],
          start: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return "..."',
          sol: ['class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return "..."\n\nclass Cow(Animal):\n    def speak(self):\n        return "Moo"\n\nprint(Cow("Bella").speak())', 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return "..."\n\nclass Cow(Animal):\n    def speak(self):\n        return "Muu"\n\nprint(Cow("Bella").speak())', 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return "..."\n\nclass Cow(Animal):\n    def speak(self):\n        return "Meuh"\n\nprint(Cow("Bella").speak())'],
          out: ['Moo', 'Muu', 'Meuh'], c: 'class Cow\\(Animal\\)'
        }
      },
      {
        c: [c`class Animal:
    def __init__(self, name, legs):
        self.name = name
        self.legs = legs

class Bird(Animal):
    def __init__(self, name, can_fly=True):
        super().__init__(name, 2)
        self.can_fly = can_fly

    def describe(self):
        return f"{self.name} has {self.legs} legs and {'can' if self.can_fly else 'cannot'} fly"

print(Bird("Robin").describe())
print(Bird("Penguin", can_fly=False).describe())`, c`class Animal:
    def __init__(self, name, legs):
        self.name = name
        self.legs = legs

class Bird(Animal):
    def __init__(self, name, can_fly=True):
        super().__init__(name, 2)
        self.can_fly = can_fly

    def describe(self):
        return f"{self.name} ha {self.legs} zampe e {'può' if self.can_fly else 'non può'} volare"

print(Bird("Pettirosso").describe())
print(Bird("Pinguino", can_fly=False).describe())`, c`class Animal:
    def __init__(self, name, legs):
        self.name = name
        self.legs = legs

class Bird(Animal):
    def __init__(self, name, can_fly=True):
        super().__init__(name, 2)
        self.can_fly = can_fly

    def describe(self):
        return f"{self.name} a {self.legs} pattes et {'peut' if self.can_fly else 'ne peut pas'} voler"

print(Bird("Rouge-gorge").describe())
print(Bird("Pingouin", can_fly=False).describe())`],
        n: ['super'],
        t: ['Use the parent: super()', 'Usa il genitore: super()', 'Utilise le parent : super()'],
        x: [`When the child needs its own __init__, it calls the parent's with super().__init__(...), so the parent can do its part of the setting up. Then the child adds its own data.

super() means "the class I inherit from". Without it, the parent's __init__ would not run, and name and legs would never be set.`,
          `Quando la classe figlia ha bisogno di un suo __init__, chiama quello del genitore con super().__init__(...), così il genitore fa la sua parte della preparazione. Poi la figlia aggiunge i suoi dati.

super() vuol dire "la classe da cui eredito". Senza, l'__init__ del genitore non girerebbe e name e legs non verrebbero mai impostati.`,
          `Quand l'enfant a besoin de son propre __init__, il appelle celui du parent avec super().__init__(...), pour que le parent fasse sa partie de la préparation. Puis l'enfant ajoute ses propres données.

super() veut dire "la classe dont j'hérite". Sans lui, le __init__ du parent ne tournerait pas, et name et legs ne seraient jamais fixés.`],
        ex: {
          t: ['Make a class Fish that is an Animal with 0 legs, built with only a name, using super(). Show the legs of Fish("Nemo") (0).', 'Crea una classe Fish che è un Animal con 0 zampe, costruita solo con un nome, usando super(). Mostra le legs di Fish("Nemo") (0).', 'Crée une classe Fish qui est un Animal avec 0 patte, construite avec seulement un nom, en utilisant super(). Affiche les legs de Fish("Nemo") (0).'],
          h: ['def __init__(self, name): and super().__init__(name, 0).', 'def __init__(self, name): e super().__init__(name, 0).', 'def __init__(self, name): et super().__init__(name, 0).'],
          start: 'class Animal:\n    def __init__(self, name, legs):\n        self.name = name\n        self.legs = legs', sol: 'class Animal:\n    def __init__(self, name, legs):\n        self.name = name\n        self.legs = legs\n\nclass Fish(Animal):\n    def __init__(self, name):\n        super().__init__(name, 0)\n\nprint(Fish("Nemo").legs)', out: '0', c: 'super\\(\\)'
        }
      },
      {
        c: c`class Shape:
    def area(self):
        raise NotImplementedError("each shape must say its area")

class Square(Shape):
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14159 * self.radius ** 2

shapes = [Square(3), Circle(1), Square(2)]
print([round(s.area(), 2) for s in shapes])
print(isinstance(shapes[0], Shape))`,
        n: ['NotImplementedError'],
        t: ['A family of shapes', 'Una famiglia di forme', 'Une famille de formes'],
        x: [`The parent class Shape only says "every shape must have an area", and leaves the details to the children. Code that uses a list of shapes does not need to know which kind each one is: it just asks for the area.

isinstance(shapes[0], Shape) is True: a Square is a Shape.`,
          `La classe genitore Shape dice solo "ogni forma deve avere un'area" e lascia i dettagli alle figlie. Il codice che usa una lista di forme non ha bisogno di sapere di che tipo è ognuna: chiede solo l'area.

isinstance(shapes[0], Shape) è True: un Square è una Shape.`,
          `La classe parent Shape dit seulement "chaque forme doit avoir une aire", et laisse les détails aux enfants. Le code qui utilise une liste de formes n'a pas besoin de savoir de quelle sorte est chacune : il demande juste l'aire.

isinstance(shapes[0], Shape) est True : un Square est une Shape.`],
        ex: {
          t: ['Add a class Rectangle(Shape) with a width and a height, and its area. Show the area of Rectangle(2, 5) (10).', 'Aggiungi una classe Rectangle(Shape) con una larghezza e un\'altezza, e la sua area. Mostra l\'area di Rectangle(2, 5) (10).', 'Ajoute une classe Rectangle(Shape) avec une largeur et une hauteur, et son aire. Affiche l\'aire de Rectangle(2, 5) (10).'],
          h: ['def __init__(self, width, height): and def area(self): return self.width * self.height.', 'def __init__(self, width, height): e def area(self): return self.width * self.height.', 'def __init__(self, width, height): et def area(self): return self.width * self.height.'],
          start: 'class Shape:\n    def area(self):\n        raise NotImplementedError("each shape must say its area")', sol: 'class Shape:\n    def area(self):\n        raise NotImplementedError("each shape must say its area")\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        return self.width * self.height\n\nprint(Rectangle(2, 5).area())', out: '10', c: 'class Rectangle\\(Shape\\)'
        }
      },
      {
        c: c`class Engine:
    def start(self):
        return "Vroom"

class Car:
    def __init__(self):
        self.engine = Engine()

    def start(self):
        return "The car says " + self.engine.start()

print(Car().start())`,
        t: ['Has-a, not is-a', 'Ha-un, non è-un', 'A-un, pas est-un'],
        x: [`Inheritance means "is a": a Dog is an Animal. But a Car is not an Engine, it has one. For "has a", you simply keep an object inside another one, like the engine inside the car.

A good rule: when you are not sure, prefer "has a". It keeps classes simple and separate.`,
          `L'ereditarietà vuol dire "è un": un Dog è un Animal. Ma una Car non è un Engine, ne ha uno. Per "ha un" basta tenere un oggetto dentro un altro, come il motore dentro l'auto.

Una buona regola: quando non sei sicuro, preferisci "ha un". Tiene le classi semplici e separate.`,
          `L'héritage veut dire "est un" : un Dog est un Animal. Mais une Car n'est pas un Engine, elle en a un. Pour "a un", tu gardes simplement un objet dans un autre, comme le moteur dans la voiture.

Une bonne règle : quand tu n'es pas sûr, préfère "a un". Ça garde les classes simples et séparées.`],
        ex: {
          t: ['Make a class Lamp with a method on() that returns Light! Make a class Room that keeps a Lamp inside, and whose method light() returns the lamp\'s answer. Show Room().light().', 'Crea una classe Lamp con un metodo on() che restituisce Luce! Crea una classe Room che tiene una Lamp dentro, e il cui metodo light() restituisce la risposta della lampada. Mostra Room().light().', 'Crée une classe Lamp avec une méthode on() qui rend Lumière! Crée une classe Room qui garde une Lamp dedans, et dont la méthode light() rend la réponse de la lampe. Affiche Room().light().'],
          h: ['self.lamp = Lamp() in __init__ of Room, then return self.lamp.on().', 'self.lamp = Lamp() in __init__ di Room, poi return self.lamp.on().', 'self.lamp = Lamp() dans __init__ de Room, puis return self.lamp.on().'],
          sol: ['class Lamp:\n    def on(self):\n        return "Light!"\n\nclass Room:\n    def __init__(self):\n        self.lamp = Lamp()\n\n    def light(self):\n        return self.lamp.on()\n\nprint(Room().light())', 'class Lamp:\n    def on(self):\n        return "Luce!"\n\nclass Room:\n    def __init__(self):\n        self.lamp = Lamp()\n\n    def light(self):\n        return self.lamp.on()\n\nprint(Room().light())', 'class Lamp:\n    def on(self):\n        return "Lumière!"\n\nclass Room:\n    def __init__(self):\n        self.lamp = Lamp()\n\n    def light(self):\n        return self.lamp.on()\n\nprint(Room().light())'],
          out: ['Light!', 'Luce!', 'Lumière!'], c: 'self\\.lamp'
        }
      }
    ]
  }
];
