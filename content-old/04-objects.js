// Stage 4 · Objects and beyond. See tools/build-course.js for the format.
const c = String.raw;
const G4 = ['Stage 4 · Objects and beyond', 'Livello 4 · Oggetti e oltre', 'Niveau 4 · Objets et au-delà'];

module.exports = [
  // ------------------------------------------------------------------ 35
  {
    group: G4,
    title: ['Your own kind of thing: classes', 'Un tuo tipo di cosa: le classi', 'Ton propre genre de chose : les classes'],
    subtitle: ['Objects with data and actions', 'Oggetti con dati e azioni', 'Des objets avec des données et des actions'],
    steps: [
      {
        c: c`class Dog:
    pass

rex = Dog()
print(type(rex))
print(isinstance(rex, Dog))
print(rex is Dog())`,
        t: ['A class is a blueprint', 'Una classe è un progetto', 'Une classe est un plan'],
        x: [`So far you used kinds of things that Python already has: text, list, dictionary. A class lets you invent your own kind. Think of it as a blueprint, and every thing built from it is an object.

class Dog: starts the blueprint (pass means "nothing in it yet"). Dog() builds one dog, and rex is the box that holds it.`,
          `Finora hai usato tipi di cose che Python ha già: testo, lista, dizionario. Una classe ti permette di inventare un tuo tipo. Pensala come un progetto, e ogni cosa costruita da esso è un oggetto.

class Dog: comincia il progetto (pass vuol dire "ancora niente dentro"). Dog() costruisce un cane, e rex è la scatola che lo tiene.`,
          `Jusqu'ici tu as utilisé des genres de choses que Python a déjà : texte, liste, dictionnaire. Une classe te permet d'inventer ton propre genre. Pense-y comme à un plan, et chaque chose construite à partir de lui est un objet.

class Dog: commence le plan (pass veut dire « rien dedans pour l'instant »). Dog() construit un chien, et rex est la boîte qui le garde.`],
        d: ['Make two dogs and check that they are different objects.', 'Crea due cani e controlla che siano oggetti diversi.', 'Crée deux chiens et vérifie que ce sont des objets différents.'],
        w: ['Class names start with a capital letter: Dog, not dog. It is the style everybody follows.', 'I nomi delle classi cominciano con la maiuscola: Dog, non dog. È lo stile che tutti seguono.', 'Les noms de classes commencent par une majuscule : Dog, pas dog. C\'est le style que tout le monde suit.']
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
        t: ['Give it data: __init__', 'Dargli dei dati: __init__', 'Lui donner des données : __init__'],
        x: [`__init__ is a special method that runs by itself when an object is made. Its job is to set the object up. self means "this very object", and self.name = name keeps the value inside the object.

Each object has its own copy of the data: changing rex does not change fido.`,
          `__init__ è un metodo speciale che parte da solo quando si crea un oggetto. Il suo compito è prepararlo. self vuol dire "questo preciso oggetto", e self.name = name tiene il valore dentro l'oggetto.

Ogni oggetto ha una sua copia dei dati: cambiare rex non cambia fido.`,
          `__init__ est une méthode spéciale qui démarre toute seule quand un objet est créé. Son travail est de le préparer. self veut dire « cet objet précis », et self.name = name garde la valeur dans l'objet.

Chaque objet a sa propre copie des données : changer rex ne change pas fido.`],
        d: ['Add a third dog with your own name and age.', 'Aggiungi un terzo cane con il tuo nome e la tua età.', 'Ajoute un troisième chien avec ton nom et ton âge.'],
        w: ['The two underscores come in pairs on each side: __init__, not _init_.', 'I due trattini bassi vanno in coppia da ogni lato: __init__, non _init_.', 'Les deux tirets bas vont par paires de chaque côté : __init__, pas _init_.']
      },
      {
        c: c`class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(self.name, "says Woof!")

    def rename(self, new_name):
        self.name = new_name

rex = Dog("Rex")
rex.bark()
rex.rename("Max")
rex.bark()`,
        t: ['Give it actions: methods', 'Dargli delle azioni: i metodi', 'Lui donner des actions : les méthodes'],
        x: [`A function inside a class is a method. The first parameter is always self, and Python fills it in for you: rex.bark() means Dog.bark(rex).

Methods can read the data of the object with self.name and change it too.`,
          `Una funzione dentro una classe è un metodo. Il primo parametro è sempre self, e Python lo riempie per te: rex.bark() vuol dire Dog.bark(rex).

I metodi possono leggere i dati dell'oggetto con self.name e cambiarli anche.`,
          `Une fonction dans une classe est une méthode. Le premier paramètre est toujours self, et Python le remplit pour toi : rex.bark() veut dire Dog.bark(rex).

Les méthodes peuvent lire les données de l'objet avec self.name et les changer aussi.`],
        d: ['Add a method birthday that makes the dog one year older.', 'Aggiungi un metodo birthday che fa invecchiare il cane di un anno.', 'Ajoute une méthode birthday qui fait vieillir le chien d\'un an.']
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
print(Dog.count)
print(a.count)`,
        t: ['Data shared by all', 'Dati condivisi da tutti', 'Des données partagées par tous'],
        x: [`A name written in the class itself, outside the methods, belongs to the class and is shared by every object: species, and a counter that grows each time a dog is made.

Use it for what is the same for everybody. What differs from object to object goes in self.`,
          `Un nome scritto nella classe stessa, fuori dai metodi, appartiene alla classe ed è condiviso da ogni oggetto: species, e un contatore che cresce ogni volta che si crea un cane.

Usalo per ciò che è uguale per tutti. Ciò che cambia da oggetto a oggetto va in self.`,
          `Un nom écrit dans la classe elle-même, hors des méthodes, appartient à la classe et est partagé par chaque objet : species, et un compteur qui grandit chaque fois qu'un chien est créé.

Utilise-le pour ce qui est pareil pour tout le monde. Ce qui diffère d'un objet à l'autre va dans self.`],
        d: ['Make a class Player with a shared count of players.', 'Crea una classe Player con un conteggio condiviso dei giocatori.', 'Crée une classe Player avec un compte partagé des joueurs.']
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
print(isinstance(c, Counter), isinstance(5, Counter))
print(c.__class__.__name__)
print(hasattr(c, "value"), hasattr(c, "colour"))`,
        t: ['Ask about an object', 'Fare domande a un oggetto', 'Poser des questions à un objet'],
        x: [`A method that returns self lets you chain calls: c.add().add().add(10). isinstance(object, Class) asks if an object is of a kind. hasattr asks if it has a given name, and __class__.__name__ gives the name of its class.

Everything in Python is an object: even numbers and texts are objects of classes.`,
          `Un metodo che restituisce self permette di concatenare le chiamate: c.add().add().add(10). isinstance(oggetto, Classe) chiede se un oggetto è di un certo tipo. hasattr chiede se ha un dato nome, e __class__.__name__ dà il nome della sua classe.

Tutto in Python è un oggetto: perfino i numeri e i testi sono oggetti di classi.`,
          `Une méthode qui renvoie self permet d'enchaîner les appels : c.add().add().add(10). isinstance(objet, Classe) demande si un objet est d'un certain genre. hasattr demande s'il a un nom donné, et __class__.__name__ donne le nom de sa classe.

Tout en Python est un objet : même les nombres et les textes sont des objets de classes.`],
        d: ['Check with isinstance that "hi" is a str.', 'Controlla con isinstance che "hi" sia una str.', 'Vérifie avec isinstance que "hi" est une str.']
      }
    ]
  },

  // ------------------------------------------------------------------ 36
  {
    title: ['Objects that work together', 'Oggetti che lavorano insieme', 'Des objets qui travaillent ensemble'],
    subtitle: ['A bank account, a game and a shop', 'Un conto in banca, un gioco e un negozio', 'Un compte en banque, un jeu et un magasin'],
    steps: [
      {
        c: c`class Account:
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
print(acc.owner, acc.balance)`,
        t: ['A bank account', 'Un conto in banca', 'Un compte en banque'],
        x: [`A class is perfect when data and the actions on it belong together. The account keeps its balance, and the only ways to change it are the methods, which can check the rules: you cannot take out more than you have.

This idea, data and rules kept together, is the heart of object-oriented programming.`,
          `Una classe è perfetta quando i dati e le azioni su di essi stanno insieme. Il conto tiene il suo saldo, e gli unici modi per cambiarlo sono i metodi, che possono controllare le regole: non puoi prelevare più di quello che hai.

Quest'idea, dati e regole tenuti insieme, è il cuore della programmazione a oggetti.`,
          `Une classe est parfaite quand les données et les actions sur elles vont ensemble. Le compte garde son solde, et les seules façons de le changer sont les méthodes, qui peuvent vérifier les règles : tu ne peux pas retirer plus que ce que tu as.

Cette idée, des données et des règles gardées ensemble, est le cœur de la programmation orientée objet.`],
        d: ['Add a method show that prints the owner and the balance.', 'Aggiungi un metodo show che stampa il proprietario e il saldo.', 'Ajoute une méthode show qui affiche le propriétaire et le solde.']
      },
      {
        c: c`class InsufficientFunds(Exception):
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
print(acc.balance)`,
        t: ['Methods that raise errors', 'Metodi che sollevano errori', 'Des méthodes qui lèvent des erreurs'],
        x: [`Printing a message inside a method is not very useful, because the caller cannot react. It is better to raise an error that the caller can catch with try and except, and decide what to do.

Your own error class, from the exceptions lesson, makes the meaning clear.`,
          `Stampare un messaggio dentro un metodo non è molto utile, perché chi chiama non può reagire. È meglio sollevare un errore che chi chiama può prendere con try ed except, e decidere cosa fare.

La tua classe di errore, dalla lezione sulle eccezioni, rende chiaro il significato.`,
          `Afficher un message dans une méthode n'est pas très utile, parce que l'appelant ne peut pas réagir. Il vaut mieux lever une erreur que l'appelant peut attraper avec try et except, et décider quoi faire.

Ta propre classe d'erreur, de la leçon sur les exceptions, rend le sens clair.`],
        d: ['Refuse a negative deposit with an error.', 'Rifiuta un deposito negativo con un errore.', 'Refuse un dépôt négatif avec une erreur.']
      },
      {
        c: c`class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Cart:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    def total(self):
        return sum(item.price for item in self.items)

cart = Cart()
cart.add(Item("book", 12))
cart.add(Item("pen", 3))
print(len(cart.items), cart.total())
for item in cart.items:
    print(f"- {item.name}: {item.price}")`,
        t: ['Objects holding objects', 'Oggetti che contengono oggetti', 'Des objets qui contiennent des objets'],
        x: [`An object can keep other objects: the cart holds a list of items. Each class does one clear job, and together they model a little shop.

Splitting a problem into objects that each know their own job makes big programs easier to understand.`,
          `Un oggetto può tenere altri oggetti: il carrello tiene una lista di articoli. Ogni classe fa un lavoro chiaro, e insieme modellano un piccolo negozio.

Dividere un problema in oggetti che conoscono ognuno il proprio lavoro rende i programmi grandi più facili da capire.`,
          `Un objet peut garder d'autres objets : le panier garde une liste d'articles. Chaque classe fait un travail clair, et ensemble elles modélisent un petit magasin.

Découper un problème en objets qui connaissent chacun leur propre travail rend les gros programmes plus faciles à comprendre.`],
        d: ['Add a method that finds the most expensive item.', 'Aggiungi un metodo che trova l\'articolo più costoso.', 'Ajoute une méthode qui trouve l\'article le plus cher.']
      },
      {
        c: c`import random

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
print("The orc is defeated!")`,
        t: ['A game with objects', 'Un gioco con gli oggetti', 'Un jeu avec des objets'],
        x: [`Games are made of objects: a monster knows its health, can be hit, and tells if it is alive. The loop only talks to the object, it does not care how health is stored.

The seed makes the fight the same every time. Remove it and every fight is different.`,
          `I giochi sono fatti di oggetti: un mostro conosce la sua salute, può essere colpito, e dice se è vivo. Il ciclo parla solo con l'oggetto, non gli importa come è conservata la salute.

Il seme rende il combattimento uguale ogni volta. Toglilo e ogni combattimento è diverso.`,
          `Les jeux sont faits d'objets : un monstre connaît sa santé, peut être frappé, et dit s'il est vivant. La boucle ne parle qu'à l'objet, elle ne se soucie pas de la façon dont la santé est gardée.

La graine rend le combat identique à chaque fois. Enlève-la et chaque combat est différent.`],
        d: ['Add a Hero class and make the two fight.', 'Aggiungi una classe Hero e falli combattere.', 'Ajoute une classe Hero et fais-les se battre.']
      }
    ]
  },

  // ------------------------------------------------------------------ 37
  {
    title: ['Families of classes: inheritance', 'Famiglie di classi: l\'ereditarietà', 'Des familles de classes : l\'héritage'],
    subtitle: ['Reuse and specialise', 'Riutilizzare e specializzare', 'Réutiliser et spécialiser'],
    steps: [
      {
        c: c`class Animal:
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
    print(pet.name, "says", pet.speak())`,
        t: ['A child class', 'Una classe figlia', 'Une classe enfant'],
        x: [`class Dog(Animal) means "a Dog is an Animal": it gets everything Animal has (here __init__ and name) and can add or change things. Writing speak again in Dog replaces the version of Animal: it is called overriding.

The loop calls pet.speak() without caring which kind of animal it is. Each object does its own version. This is called polymorphism, a long word for a simple idea.`,
          `class Dog(Animal) vuol dire "un Dog è un Animal": riceve tutto quello che ha Animal (qui __init__ e name) e può aggiungere o cambiare cose. Scrivere di nuovo speak in Dog sostituisce la versione di Animal: si chiama sovrascrittura.

Il ciclo chiama pet.speak() senza badare a che tipo di animale sia. Ogni oggetto fa la sua versione. Si chiama polimorfismo, una parola lunga per un'idea semplice.`,
          `class Dog(Animal) veut dire « un Dog est un Animal » : il reçoit tout ce qu'Animal a (ici __init__ et name) et peut ajouter ou changer des choses. Écrire à nouveau speak dans Dog remplace la version d'Animal : on appelle ça redéfinir.

La boucle appelle pet.speak() sans se soucier du genre d'animal. Chaque objet fait sa propre version. On appelle ça le polymorphisme, un mot long pour une idée simple.`],
        d: ['Add a Cow class that says "Moo".', 'Aggiungi una classe Cow che dice "Moo".', 'Ajoute une classe Cow qui dit « Moo ».']
      },
      {
        c: c`class Animal:
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
print(Bird("Penguin", can_fly=False).describe())`,
        t: ['Use the parent: super()', 'Usare il genitore: super()', 'Utiliser le parent : super()'],
        x: [`When the child needs its own __init__, call the parent's with super().__init__(...) so the parent can do its part of the setting up, and then add the new data.

super() means "the class I inherit from".`,
          `Quando la figlia ha bisogno del suo __init__, chiama quello del genitore con super().__init__(...) così il genitore può fare la sua parte di preparazione, e poi aggiungi i dati nuovi.

super() vuol dire "la classe da cui eredito".`,
          `Quand l'enfant a besoin de son propre __init__, appelle celui du parent avec super().__init__(...) pour que le parent fasse sa part de préparation, puis ajoute les nouvelles données.

super() veut dire « la classe dont j'hérite ».`],
        d: ['Add a Fish class that has 0 legs.', 'Aggiungi una classe Fish che ha 0 zampe.', 'Ajoute une classe Fish qui a 0 pattes.']
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
print(sum(s.area() for s in shapes) > 10)
print(isinstance(shapes[0], Shape), issubclass(Circle, Shape))`,
        t: ['A family of shapes', 'Una famiglia di forme', 'Une famille de formes'],
        x: [`The parent class Shape only says "every shape must have an area" and leaves the details to the children. Code that uses a list of shapes does not need to know which kind each is.

isinstance and issubclass check the family: a Square is a Shape.`,
          `La classe genitore Shape dice solo "ogni forma deve avere un'area" e lascia i dettagli alle figlie. Il codice che usa una lista di forme non ha bisogno di sapere di che tipo è ognuna.

isinstance e issubclass controllano la famiglia: un Square è una Shape.`,
          `La classe parent Shape dit seulement « chaque forme doit avoir une aire » et laisse les détails aux enfants. Le code qui utilise une liste de formes n'a pas besoin de savoir de quel genre est chacune.

isinstance et issubclass vérifient la famille : un Square est une Shape.`],
        d: ['Add a Rectangle class.', 'Aggiungi una classe Rectangle.', 'Ajoute une classe Rectangle.']
      },
      {
        c: c`from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def wheels(self):
        ...

class Bike(Vehicle):
    def wheels(self):
        return 2

print(Bike().wheels())
try:
    Vehicle()
except TypeError as error:
    print("Cannot build a Vehicle:", "abstract" in str(error))`,
        t: ['A class that cannot be built', 'Una classe che non si può costruire', 'Une classe qu\'on ne peut pas construire'],
        x: [`An abstract class is only a plan for others: it cannot be built on its own, and its abstract methods must be written by every child. Python protects you: building a Vehicle stops with a TypeError.

Use it when you want to be sure that every member of a family has certain methods.`,
          `Una classe astratta è solo un progetto per altre: non si può costruire da sola, e i suoi metodi astratti devono essere scritti da ogni figlia. Python ti protegge: costruire un Vehicle si ferma con un TypeError.

Usala quando vuoi essere sicuro che ogni membro di una famiglia abbia certi metodi.`,
          `Une classe abstraite n'est qu'un plan pour d'autres : elle ne peut pas être construite seule, et ses méthodes abstraites doivent être écrites par chaque enfant. Python te protège : construire un Vehicle s'arrête avec une TypeError.

Utilise-la quand tu veux être sûr que chaque membre d'une famille a certaines méthodes.`],
        d: ['Add a Car class with 4 wheels.', 'Aggiungi una classe Car con 4 ruote.', 'Ajoute une classe Car avec 4 roues.']
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
        x: [`Inheritance means "is a": a Dog is an Animal. But a Car is not an Engine, it has one. For "has a", simply keep an object inside another one, like the engine in the car.

A good rule: prefer "has a". Use inheritance only when "is a" is really true.`,
          `L'ereditarietà vuol dire "è un": un Dog è un Animal. Ma una Car non è un Engine, ne ha uno. Per "ha un", basta tenere un oggetto dentro un altro, come il motore nell'auto.

Una buona regola: preferisci "ha un". Usa l'ereditarietà solo quando "è un" è davvero vero.`,
          `L'héritage veut dire « est un » : un Dog est un Animal. Mais une Car n'est pas un Engine, elle en a un. Pour « a un », il suffit de garder un objet dans un autre, comme le moteur dans la voiture.

Une bonne règle : préfère « a un ». N'utilise l'héritage que quand « est un » est vraiment vrai.`],
        d: ['Give the car wheels, as a list of four objects.', 'Dai all\'auto delle ruote, come lista di quattro oggetti.', 'Donne des roues à la voiture, comme liste de quatre objets.']
      }
    ]
  },

  // ------------------------------------------------------------------ 38
  {
    title: ['Make objects behave like Python things', 'Far comportare gli oggetti come cose di Python', 'Faire se comporter les objets comme des choses de Python'],
    subtitle: ['Special methods', 'I metodi speciali', 'Les méthodes spéciales'],
    steps: [
      {
        c: c`class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __repr__(self):
        return f"Point({self.x}, {self.y})"

p = Point(3, 4)
print(p)
print([p, Point(0, 0)])
print(str(p), repr(p))`,
        t: ['Show an object nicely', 'Mostrare bene un oggetto', 'Montrer joliment un objet'],
        x: [`Printing a plain object shows something like <Point object at ...>, which says nothing. __str__ decides what print shows, and __repr__ decides what is shown inside lists and when programmers look closely.

Methods with two underscores on both sides, called special methods, are how Python asks your object how it wants to behave.`,
          `Stampare un oggetto semplice mostra qualcosa come <Point object at ...>, che non dice niente. __str__ decide cosa mostra print, e __repr__ decide cosa si vede dentro le liste e quando chi programma guarda da vicino.

I metodi con due trattini bassi da entrambi i lati, chiamati metodi speciali, sono il modo in cui Python chiede al tuo oggetto come vuole comportarsi.`,
          `Afficher un objet simple montre quelque chose comme <Point object at ...>, qui ne dit rien. __str__ décide ce que print montre, et __repr__ décide ce qu'on voit dans les listes et quand les programmeurs regardent de près.

Les méthodes avec deux tirets bas des deux côtés, appelées méthodes spéciales, sont la façon dont Python demande à ton objet comment il veut se comporter.`],
        d: ['Add __str__ to a Dog class so print shows its name.', 'Aggiungi __str__ a una classe Dog così print mostra il suo nome.', 'Ajoute __str__ à une classe Dog pour que print montre son nom.']
      },
      {
        c: c`class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __mul__(self, number):
        return Point(self.x * number, self.y * number)

    def __repr__(self):
        return f"Point({self.x}, {self.y})"

a = Point(1, 2)
b = Point(3, 4)
print(a + b)
print(a * 3)
print(a == Point(1, 2), a == b)`,
        t: ['Use + and == with your objects', 'Usare + e == con i tuoi oggetti', 'Utiliser + et == avec tes objets'],
        x: [`__add__ tells Python what + does for your objects, __mul__ does the same for *, and __eq__ for ==. Without __eq__, two points with the same values would count as different objects.

Python turns a + b into a.__add__(b).`,
          `__add__ dice a Python cosa fa + per i tuoi oggetti, __mul__ fa lo stesso per *, e __eq__ per ==. Senza __eq__, due punti con gli stessi valori conterebbero come oggetti diversi.

Python trasforma a + b in a.__add__(b).`,
          `__add__ dit à Python ce que fait + pour tes objets, __mul__ fait pareil pour *, et __eq__ pour ==. Sans __eq__, deux points avec les mêmes valeurs compteraient comme des objets différents.

Python transforme a + b en a.__add__(b).`],
        d: ['Add __sub__ to subtract two points.', 'Aggiungi __sub__ per sottrarre due punti.', 'Ajoute __sub__ pour soustraire deux points.']
      },
      {
        c: c`class Playlist:
    def __init__(self, songs):
        self.songs = list(songs)

    def __len__(self):
        return len(self.songs)

    def __getitem__(self, index):
        return self.songs[index]

    def __contains__(self, song):
        return song in self.songs

    def __iter__(self):
        return iter(self.songs)

p = Playlist(["Intro", "Song A", "Song B"])
print(len(p), p[1], "Song A" in p)
for s in p:
    print("-", s)
print(sorted(p, reverse=True))`,
        t: ['Behave like a collection', 'Comportarsi come una raccolta', 'Se comporter comme une collection'],
        x: [`With __len__, __getitem__, __contains__ and __iter__ your object works with len(...), square brackets, in and for loops, even sorted(...): it feels like a built-in collection.

You do not need all of them, only the ones that make sense for your object.`,
          `Con __len__, __getitem__, __contains__ e __iter__ il tuo oggetto funziona con len(...), le parentesi quadre, in e i cicli for, perfino sorted(...): sembra una raccolta di Python.

Non servono tutti, solo quelli che hanno senso per il tuo oggetto.`,
          `Avec __len__, __getitem__, __contains__ et __iter__ ton objet marche avec len(...), les crochets, in et les boucles for, même sorted(...) : on dirait une collection native.

Tu n'as pas besoin de tous, seulement de ceux qui ont du sens pour ton objet.`],
        d: ['Make a Deck of cards class that has len and a loop.', 'Fai una classe Deck di carte che abbia len e un ciclo.', 'Fais une classe Deck de cartes qui a len et une boucle.']
      },
      {
        c: c`from functools import total_ordering

@total_ordering
class Version:
    def __init__(self, text):
        self.parts = tuple(int(n) for n in text.split("."))

    def __eq__(self, other):
        return self.parts == other.parts

    def __lt__(self, other):
        return self.parts < other.parts

    def __repr__(self):
        return "Version(" + ".".join(map(str, self.parts)) + ")"

versions = [Version("1.10"), Version("1.2"), Version("2.0")]
print(sorted(versions))
print(max(versions))
print(Version("1.2") <= Version("1.10"))`,
        t: ['Compare and sort objects', 'Confrontare e ordinare oggetti', 'Comparer et trier des objets'],
        x: [`__lt__ says what "smaller than" means for your objects. Once you have it, sorted and max work on them. The decorator total_ordering fills in <=, > and >= by itself from __eq__ and __lt__.

Versions are a good example: "1.10" is bigger than "1.2", which a plain text comparison gets wrong.`,
          `__lt__ dice cosa vuol dire "minore di" per i tuoi oggetti. Una volta che ce l'hai, sorted e max funzionano su di essi. Il decoratore total_ordering riempie da solo <=, > e >= a partire da __eq__ e __lt__.

Le versioni sono un buon esempio: "1.10" è più grande di "1.2", cosa che un confronto tra testi sbaglia.`,
          `__lt__ dit ce que veut dire « plus petit que » pour tes objets. Une fois que tu l'as, sorted et max marchent sur eux. Le décorateur total_ordering remplit tout seul <=, > et >= à partir de __eq__ et __lt__.

Les versions sont un bon exemple : « 1.10 » est plus grand que « 1.2 », ce qu'une comparaison de textes se trompe.`],
        d: ['Make a class Card that can be sorted by its number.', 'Fai una classe Card che si può ordinare per numero.', 'Fais une classe Card qui peut être triée par son numéro.']
      },
      {
        c: c`class Greeter:
    def __init__(self, greeting):
        self.greeting = greeting

    def __call__(self, name):
        return f"{self.greeting}, {name}!"

hello = Greeter("Hello")
print(hello("Ada"))
print(callable(hello))

class Temperature:
    def __init__(self, degrees):
        self.degrees = degrees
    def __bool__(self):
        return self.degrees > 0
    def __hash__(self):
        return hash(self.degrees)
    def __eq__(self, other):
        return self.degrees == other.degrees

print(bool(Temperature(5)), bool(Temperature(-1)))
print(len({Temperature(3), Temperature(3), Temperature(4)}))`,
        t: ['Even more special methods', 'Ancora più metodi speciali', 'Encore plus de méthodes spéciales'],
        x: [`__call__ lets an object be used like a function. __bool__ says when the object counts as True. __hash__ together with __eq__ lets objects be kept in a set or used as dictionary keys.

There are dozens of special methods. You can always look them up when you need one.`,
          `__call__ permette di usare un oggetto come una funzione. __bool__ dice quando l'oggetto conta come True. __hash__ insieme a __eq__ permette di tenere gli oggetti in un insieme o usarli come chiavi di dizionario.

Ci sono decine di metodi speciali. Puoi sempre cercarli quando te ne serve uno.`,
          `__call__ permet d'utiliser un objet comme une fonction. __bool__ dit quand l'objet compte comme True. __hash__ avec __eq__ permet de garder les objets dans un ensemble ou de les utiliser comme clés de dictionnaire.

Il y a des dizaines de méthodes spéciales. Tu peux toujours les chercher quand tu en as besoin.`],
        d: ['Make a class whose objects can be called to add a fixed number.', 'Fai una classe i cui oggetti si possono chiamare per aggiungere un numero fisso.', 'Fais une classe dont les objets peuvent être appelés pour ajouter un nombre fixe.']
      }
    ]
  },

  // ------------------------------------------------------------------ 39
  {
    title: ['Guarding data', 'Proteggere i dati', 'Protéger les données'],
    subtitle: ['Properties, class methods and static methods', 'Property, metodi di classe e metodi statici', 'Propriétés, méthodes de classe et méthodes statiques'],
    steps: [
      {
        c: c`class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return round(3.14159 * self.radius ** 2, 2)

c = Circle(5)
print(c.diameter, c.area)
c.radius = 10
print(c.diameter, c.area)`,
        t: ['A value worked out when asked: @property', 'Un valore calcolato quando lo chiedi: @property', 'Une valeur calculée quand on la demande : @property'],
        x: [`@property turns a method into something that looks like a plain value: you write c.diameter, without brackets, and Python runs the method.

It is perfect for values that depend on others: when the radius changes, the diameter and the area are always right.`,
          `@property trasforma un metodo in qualcosa che sembra un semplice valore: scrivi c.diameter, senza parentesi, e Python fa girare il metodo.

È perfetto per valori che dipendono da altri: quando il raggio cambia, il diametro e l'area sono sempre giusti.`,
          `@property transforme une méthode en quelque chose qui ressemble à une simple valeur : tu écris c.diameter, sans parenthèses, et Python lance la méthode.

C'est parfait pour les valeurs qui dépendent d'autres : quand le rayon change, le diamètre et l'aire sont toujours justes.`],
        d: ['Add a property circumference.', 'Aggiungi una property circumference.', 'Ajoute une propriété circumference.']
      },
      {
        c: c`class Person:
    def __init__(self, age):
        self.age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("age cannot be negative")
        self._age = value

p = Person(12)
p.age = 13
print(p.age)
try:
    p.age = -5
except ValueError as error:
    print("Refused:", error)
print(p.age)`,
        t: ['A guard at the door: setters', 'Una guardia alla porta: i setter', 'Un garde à la porte : les setters'],
        x: [`A property can also have a setter, run when someone gives it a value. It checks the value before keeping it. The real value is stored under a name with an underscore, _age, which by custom means "private, please do not touch".

The people using your class just write p.age = 13 and never know that a check is happening.`,
          `Una property può avere anche un setter, che parte quando qualcuno le dà un valore. Controlla il valore prima di tenerlo. Il valore vero è conservato con un nome che ha il trattino basso, _age, che per consuetudine vuol dire "privato, per favore non toccare".

Chi usa la tua classe scrive solo p.age = 13 e non sa mai che c'è un controllo.`,
          `Une propriété peut aussi avoir un setter, lancé quand quelqu'un lui donne une valeur. Il vérifie la valeur avant de la garder. La vraie valeur est rangée sous un nom avec un tiret bas, _age, qui par convention veut dire « privé, s'il te plaît ne touche pas ».

Les gens qui utilisent ta classe écrivent juste p.age = 13 et ne savent jamais qu'une vérification a lieu.`],
        d: ['Make a Product class where the price cannot be negative.', 'Fai una classe Product in cui il prezzo non può essere negativo.', 'Fais une classe Product où le prix ne peut pas être négatif.']
      },
      {
        c: c`class Date:
    def __init__(self, year, month, day):
        self.year, self.month, self.day = year, month, day

    @classmethod
    def from_text(cls, text):
        year, month, day = text.split("-")
        return cls(int(year), int(month), int(day))

    @staticmethod
    def is_leap(year):
        return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

d = Date.from_text("2026-10-20")
print(d.year, d.month, d.day)
print(Date.is_leap(2024), Date.is_leap(2100))`,
        t: ['Methods of the class itself', 'Metodi della classe stessa', 'Méthodes de la classe elle-même'],
        x: [`@classmethod gets the class (cls) instead of an object, which makes it a good second way to build objects: Date.from_text("2026-10-20"). @staticmethod gets nothing special: it is just a function that lives in the class because it belongs to the subject.

Both are called on the class itself, without making an object first.`,
          `@classmethod riceve la classe (cls) invece di un oggetto, il che la rende un buon secondo modo di costruire oggetti: Date.from_text("2026-10-20"). @staticmethod non riceve niente di speciale: è solo una funzione che vive nella classe perché appartiene all'argomento.

Entrambi si chiamano sulla classe stessa, senza costruire prima un oggetto.`,
          `@classmethod reçoit la classe (cls) au lieu d'un objet, ce qui en fait une bonne deuxième façon de construire des objets : Date.from_text("2026-10-20"). @staticmethod ne reçoit rien de spécial : c'est juste une fonction qui vit dans la classe parce qu'elle appartient au sujet.

Les deux s'appellent sur la classe elle-même, sans construire d'objet d'abord.`],
        d: ['Add a class method that builds a Date for today\'s default: 2026-01-01.', 'Aggiungi un metodo di classe che costruisce una Date predefinita: 2026-01-01.', 'Ajoute une méthode de classe qui construit une Date par défaut : 2026-01-01.']
      },
      {
        c: c`class Safe:
    def __init__(self):
        self.public = "anyone can see"
        self._careful = "please do not touch"
        self.__secret = "hidden"

s = Safe()
print(s.public)
print(s._careful)
print([n for n in dir(s) if "secret" in n])
try:
    print(s.__secret)
except AttributeError:
    print("no direct access to __secret")`,
        t: ['What "private" means in Python', 'Cosa vuol dire "privato" in Python', 'Ce que « privé » veut dire en Python'],
        x: [`Python trusts people. One underscore, _careful, is a polite note: "this is for the class itself". Two underscores, __secret, make Python rename it to _Safe__secret to avoid accidents, but it is still reachable.

Nothing is truly locked. Good programmers follow the notes.`,
          `Python si fida delle persone. Un trattino basso, _careful, è una nota gentile: "questo è per la classe stessa". Due trattini bassi, __secret, fanno rinominare a Python il nome in _Safe__secret per evitare incidenti, ma resta raggiungibile.

Niente è davvero chiuso a chiave. Chi programma bene segue le note.`,
          `Python fait confiance aux gens. Un tiret bas, _careful, est une note polie : « ceci est pour la classe elle-même ». Deux tirets bas, __secret, font renommer le nom par Python en _Safe__secret pour éviter les accidents, mais il reste accessible.

Rien n'est vraiment verrouillé. Les bons programmeurs suivent les notes.`],
        d: ['Find the real name of __secret with dir and use it.', 'Trova il vero nome di __secret con dir e usalo.', 'Trouve le vrai nom de __secret avec dir et utilise-le.']
      }
    ]
  },

  // ------------------------------------------------------------------ 40
  {
    title: ['Less typing: dataclasses and enums', 'Meno da scrivere: dataclass ed enum', 'Moins à écrire : dataclasses et enums'],
    subtitle: ['Classes for plain data, and a list of choices', 'Classi per dati semplici, e una lista di scelte', 'Des classes pour des données simples, et une liste de choix'],
    steps: [
      {
        c: c`from dataclasses import dataclass

@dataclass
class Book:
    title: str
    pages: int
    read: bool = False

b = Book("Dune", 600)
print(b)
print(b.title, b.pages, b.read)
print(b == Book("Dune", 600))`,
        t: ['A class in four lines', 'Una classe in quattro righe', 'Une classe en quatre lignes'],
        x: [`A class that only keeps data needs a lot of boring code: __init__, __repr__, __eq__. The decorator @dataclass writes them for you, from the list of names with their types. A value after = is a default.

Compare it with the Point class that you wrote by hand.`,
          `Una classe che tiene solo dati richiede molto codice noioso: __init__, __repr__, __eq__. Il decoratore @dataclass li scrive per te, a partire dalla lista di nomi con i loro tipi. Un valore dopo = è un predefinito.

Confrontala con la classe Point che hai scritto a mano.`,
          `Une classe qui ne garde que des données demande beaucoup de code ennuyeux : __init__, __repr__, __eq__. Le décorateur @dataclass les écrit pour toi, à partir de la liste de noms avec leurs types. Une valeur après = est une valeur par défaut.

Compare-la avec la classe Point que tu as écrite à la main.`],
        d: ['Make a dataclass Pet with a name, a species and an age.', 'Fai una dataclass Pet con nome, specie ed età.', 'Fais une dataclass Pet avec un nom, une espèce et un âge.']
      },
      {
        c: c`from dataclasses import dataclass, field, replace

@dataclass(order=True, frozen=True)
class Score:
    points: int
    player: str = "?"

a = Score(10, "Ada")
b = Score(7, "Max")
print(a > b, sorted([a, b]))
print(replace(a, points=99))
try:
    a.points = 0
except Exception as error:
    print(type(error).__name__)

@dataclass
class Team:
    members: list = field(default_factory=list)

t = Team()
t.members.append("Ada")
print(t, Team())`,
        t: ['Order, freeze and defaults', 'Ordinare, congelare e predefiniti', 'Ordonner, geler et valeurs par défaut'],
        x: [`order=True makes the objects sortable, and frozen=True makes them impossible to change, like a tuple. replace(obj, name=value) builds a copy with one change.

For a default that is a list, write field(default_factory=list): a plain [] would be shared by every object.`,
          `order=True rende gli oggetti ordinabili, e frozen=True li rende impossibili da cambiare, come una tupla. replace(obj, nome=valore) costruisce una copia con un cambiamento.

Per un predefinito che è una lista, scrivi field(default_factory=list): un semplice [] sarebbe condiviso da ogni oggetto.`,
          `order=True rend les objets triables, et frozen=True les rend impossibles à changer, comme un tuple. replace(obj, nom=valeur) construit une copie avec un changement.

Pour une valeur par défaut qui est une liste, écris field(default_factory=list) : un simple [] serait partagé par tous les objets.`],
        d: ['Sort three scores and print the best one.', 'Ordina tre punteggi e stampa il migliore.', 'Trie trois scores et affiche le meilleur.']
      },
      {
        c: c`from enum import Enum

class Colour(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

print(Colour.RED)
print(Colour.RED.name, Colour.RED.value)
print(Colour(2))
print(Colour["BLUE"])
for c in Colour:
    print(c.name, c.value)
print(Colour.RED == Colour.RED, Colour.RED is Colour.GREEN)`,
        t: ['A fixed list of choices: Enum', 'Una lista fissa di scelte: Enum', 'Une liste fixe de choix : Enum'],
        x: [`An Enum is a short list of named choices. Instead of using the numbers 1, 2, 3 or the texts "red", "green" that are easy to mistype, you use Colour.RED. Each has a name and a value, and you can walk through them.

Typos become errors at once instead of hiding in your program.`,
          `Un Enum è una breve lista di scelte con nome. Invece di usare i numeri 1, 2, 3 o i testi "red", "green" facili da sbagliare, usi Colour.RED. Ognuna ha un nome e un valore, e le puoi scorrere.

Gli errori di battitura diventano errori subito invece di nascondersi nel tuo programma.`,
          `Un Enum est une courte liste de choix nommés. Au lieu d'utiliser les nombres 1, 2, 3 ou les textes « red », « green » faciles à mal écrire, tu utilises Colour.RED. Chacun a un nom et une valeur, et tu peux les parcourir.

Les fautes de frappe deviennent des erreurs tout de suite au lieu de se cacher dans ton programme.`],
        d: ['Make an enum Direction with NORTH, SOUTH, EAST and WEST.', 'Fai un enum Direction con NORTH, SOUTH, EAST e WEST.', 'Fais un enum Direction avec NORTH, SOUTH, EAST et WEST.']
      },
      {
        c: c`from enum import Enum, auto

class State(Enum):
    IDLE = auto()
    RUNNING = auto()
    DONE = auto()

class Task:
    def __init__(self):
        self.state = State.IDLE

    def advance(self):
        if self.state is State.IDLE:
            self.state = State.RUNNING
        elif self.state is State.RUNNING:
            self.state = State.DONE

t = Task()
for _ in range(3):
    print(t.state.name)
    t.advance()
print(t.state)`,
        t: ['Enums in a program', 'Gli enum in un programma', 'Les enums dans un programme'],
        x: [`auto() gives each name a number so you do not have to. An enum is the right tool for a state: a task is idle, running or done, nothing else.

Compare enum members with is, because each one exists only once.`,
          `auto() dà a ogni nome un numero così non devi farlo tu. Un enum è lo strumento giusto per uno stato: un compito è fermo, in corso o finito, nient'altro.

Confronta i membri dell'enum con is, perché ognuno esiste una volta sola.`,
          `auto() donne un numéro à chaque nom pour que tu n'aies pas à le faire. Un enum est le bon outil pour un état : une tâche est au repos, en cours ou finie, rien d'autre.

Compare les membres d'un enum avec is, parce que chacun n'existe qu'une seule fois.`],
        d: ['Add a CANCELLED state and a method cancel.', 'Aggiungi uno stato CANCELLED e un metodo cancel.', 'Ajoute un état CANCELLED et une méthode cancel.']
      }
    ]
  },

  // ------------------------------------------------------------------ 41
  {
    title: ['Produce one at a time: generators', 'Produrre uno alla volta: i generatori', 'Produire un à la fois : les générateurs'],
    subtitle: ['Iterators and yield', 'Iteratori e yield', 'Itérateurs et yield'],
    steps: [
      {
        c: c`items = iter(["a", "b", "c"])
print(next(items))
print(next(items))
print(next(items))
print(next(items, "nothing left"))
print(next(items))`,
        e: 'StopIteration',
        t: ['What a for loop really does', 'Cosa fa davvero un ciclo for', 'Ce que fait vraiment une boucle for'],
        x: [`A for loop asks for items one at a time. iter(list) makes the tool that hands out items, and next(...) takes the next one. When there are none left Python raises a StopIteration, which the for loop catches and quietly stops.

Here you do the loop by hand. The last line shows the error. next(items, "nothing left") gives a default instead.`,
          `Un ciclo for chiede gli elementi uno alla volta. iter(lista) crea lo strumento che consegna gli elementi, e next(...) prende il successivo. Quando non ce ne sono più Python solleva uno StopIteration, che il ciclo for prende e si ferma in silenzio.

Qui fai il ciclo a mano. L'ultima riga mostra l'errore. next(items, "nothing left") dà invece un predefinito.`,
          `Une boucle for demande les éléments un par un. iter(liste) fabrique l'outil qui distribue les éléments, et next(...) prend le suivant. Quand il n'y en a plus Python lève une StopIteration, que la boucle for attrape et s'arrête tranquillement.

Ici tu fais la boucle à la main. La dernière ligne montre l'erreur. next(items, "nothing left") donne à la place une valeur par défaut.`],
        d: ['Remove the last line and walk through your own list by hand.', 'Togli l\'ultima riga e scorri a mano una tua lista.', 'Enlève la dernière ligne et parcours à la main une liste à toi.']
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
        t: ['A function that pauses: yield', 'Una funzione che si ferma: yield', 'Une fonction qui fait une pause : yield'],
        x: [`A function with yield inside is a generator. Calling it does not run it: it gives back a generator. Each next(...) runs it until the next yield, hands out that value, and pauses there, remembering where it was.

It produces values one at a time, only when they are asked for.`,
          `Una funzione con yield dentro è un generatore. Chiamarla non la fa girare: restituisce un generatore. Ogni next(...) la fa girare fino al prossimo yield, consegna quel valore, e si ferma lì, ricordando dov'era.

Produce i valori uno alla volta, solo quando vengono chiesti.`,
          `Une fonction avec yield dedans est un générateur. L'appeler ne la fait pas tourner : elle rend un générateur. Chaque next(...) la fait tourner jusqu'au prochain yield, distribue cette valeur, et fait une pause là, en se souvenant d'où elle en était.

Elle produit les valeurs une à la fois, seulement quand on les demande.`],
        d: ['Write a generator that gives the even numbers up to a limit.', 'Scrivi un generatore che dà i numeri pari fino a un limite.', 'Écris un générateur qui donne les nombres pairs jusqu\'à une limite.']
      },
      {
        c: c`def naturals():
    n = 0
    while True:
        yield n
        n += 1

def first(count, source):
    for _ in range(count):
        yield next(source)

print(list(first(5, naturals())))

def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

print(list(first(10, fib())))`,
        t: ['A list that never ends', 'Una lista che non finisce mai', 'Une liste qui ne finit jamais'],
        x: [`A generator can be infinite, because it only makes a value when asked. naturals gives 0, 1, 2, 3... forever, and first takes just as many as you want. The fast Fibonacci in a few lines.

A list of all natural numbers would never fit in memory, but a generator is fine.`,
          `Un generatore può essere infinito, perché fa un valore solo quando richiesto. naturals dà 0, 1, 2, 3... per sempre, e first ne prende solo quanti ne vuoi. Il Fibonacci veloce in poche righe.

Una lista di tutti i numeri naturali non starebbe mai in memoria, ma un generatore va benissimo.`,
          `Un générateur peut être infini, parce qu'il ne fait une valeur que quand on la demande. naturals donne 0, 1, 2, 3... pour toujours, et first n'en prend que le nombre que tu veux. Le Fibonacci rapide en quelques lignes.

Une liste de tous les nombres naturels ne tiendrait jamais en mémoire, mais un générateur convient très bien.`],
        d: ['Make a generator of the powers of 2.', 'Fai un generatore delle potenze di 2.', 'Fais un générateur des puissances de 2.']
      },
      {
        c: c`squares = (n * n for n in range(1, 6))
print(type(squares).__name__)
print(sum(squares))
print(sum(n * n for n in range(1, 1001)))
print(max(len(w) for w in ["a", "abc", "ab"]))
print(any(n > 99 for n in range(100)))`,
        t: ['A generator in one line', 'Un generatore in una riga', 'Un générateur en une ligne'],
        x: [`Round brackets instead of square ones make a generator expression: like a list comprehension but producing values one at a time, without building the whole list.

It is the best choice when you only want to add up or check things, as in sum(...), max(...), any(...).`,
          `Le parentesi tonde al posto di quelle quadre fanno un'espressione generatore: come una comprensione di lista ma che produce i valori uno alla volta, senza costruire tutta la lista.

È la scelta migliore quando vuoi solo sommare o controllare cose, come in sum(...), max(...), any(...).`,
          `Des parenthèses au lieu des crochets font une expression génératrice : comme une compréhension de liste mais qui produit les valeurs une à la fois, sans construire toute la liste.

C'est le meilleur choix quand tu veux seulement additionner ou vérifier des choses, comme dans sum(...), max(...), any(...).`],
        d: ['Sum the cubes of the numbers from 1 to 20.', 'Somma i cubi dei numeri da 1 a 20.', 'Additionne les cubes des nombres de 1 à 20.'],
        w: ['A generator can be used only once. After sum(squares), the generator squares is empty.', 'Un generatore si può usare una volta sola. Dopo sum(squares), il generatore squares è vuoto.', 'Un générateur ne peut être utilisé qu\'une fois. Après sum(squares), le générateur squares est vide.']
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
print(list(Countdown(5)))

def read_in_pairs(items):
    it = iter(items)
    for first in it:
        second = next(it, None)
        yield first, second

print(list(read_in_pairs([1, 2, 3, 4, 5])))`,
        t: ['Make your own iterator', 'Crea un tuo iteratore', 'Crée ton propre itérateur'],
        x: [`An iterator is any object with __iter__ and __next__. __next__ gives the next value or raises StopIteration at the end. This is what a for loop needs to work.

A generator is usually shorter, so this is what you use most of the time. But now you know what is happening underneath.`,
          `Un iteratore è qualunque oggetto con __iter__ e __next__. __next__ dà il valore successivo o solleva StopIteration alla fine. È ciò di cui un ciclo for ha bisogno per funzionare.

Un generatore di solito è più corto, quindi è ciò che usi più spesso. Ma ora sai cosa succede sotto.`,
          `Un itérateur est n'importe quel objet avec __iter__ et __next__. __next__ donne la valeur suivante ou lève StopIteration à la fin. C'est ce dont une boucle for a besoin pour marcher.

Un générateur est généralement plus court, c'est donc ce que tu utilises le plus souvent. Mais maintenant tu sais ce qui se passe dessous.`],
        d: ['Write an iterator that counts up from 1 to a limit.', 'Scrivi un iteratore che conta da 1 a un limite.', 'Écris un itérateur qui compte de 1 à une limite.']
      }
    ]
  },

  // ------------------------------------------------------------------ 42
  {
    title: ['Add a power to a function: decorators', 'Dare un potere a una funzione: i decoratori', 'Donner un pouvoir à une fonction : les décorateurs'],
    subtitle: ['Functions that wrap functions', 'Funzioni che avvolgono funzioni', 'Des fonctions qui enveloppent des fonctions'],
    steps: [
      {
        c: c`def shout(function):
    def wrapper(name):
        return function(name).upper() + "!"
    return wrapper

def greet(name):
    return "hello " + name

loud = shout(greet)
print(loud("ada"))
print(greet("ada"))`,
        t: ['A function that takes a function', 'Una funzione che prende una funzione', 'Une fonction qui prend une fonction'],
        x: [`Remember that a function is a value: you can pass it to another function. shout takes a function, builds a new function wrapper that calls the old one and changes the result, and gives the new one back.

loud is greet with a new power. The original greet is untouched.`,
          `Ricorda che una funzione è un valore: la puoi passare a un'altra funzione. shout prende una funzione, costruisce una nuova funzione wrapper che chiama la vecchia e cambia il risultato, e restituisce la nuova.

loud è greet con un nuovo potere. L'originale greet non viene toccata.`,
          `Rappelle-toi qu'une fonction est une valeur : tu peux la passer à une autre fonction. shout prend une fonction, construit une nouvelle fonction wrapper qui appelle l'ancienne et change le résultat, et rend la nouvelle.

loud est greet avec un nouveau pouvoir. L'originale greet n'est pas touchée.`],
        d: ['Write a wrapper that adds "..." after the result.', 'Scrivi un wrapper che aggiunge "..." dopo il risultato.', 'Écris un wrapper qui ajoute "..." après le résultat.']
      },
      {
        c: c`def shout(function):
    def wrapper(name):
        return function(name).upper() + "!"
    return wrapper

@shout
def greet(name):
    return "hello " + name

print(greet("ada"))
print(greet("max"))`,
        t: ['The @ shortcut', 'La scorciatoia @', 'Le raccourci @'],
        x: [`Writing @shout right above def greet is exactly the same as writing greet = shout(greet) after it. It is called a decorator.

From now on every call to greet gets the new power. You have already met decorators: @property, @classmethod, @dataclass and @lru_cache.`,
          `Scrivere @shout subito sopra def greet è esattamente come scrivere greet = shout(greet) dopo. Si chiama decoratore.

D'ora in poi ogni chiamata a greet ha il nuovo potere. Hai già incontrato dei decoratori: @property, @classmethod, @dataclass e @lru_cache.`,
          `Écrire @shout juste au-dessus de def greet revient exactement à écrire greet = shout(greet) après. On appelle ça un décorateur.

Désormais chaque appel à greet a le nouveau pouvoir. Tu as déjà rencontré des décorateurs : @property, @classmethod, @dataclass et @lru_cache.`],
        d: ['Decorate another function with @shout.', 'Decora un\'altra funzione con @shout.', 'Décore une autre fonction avec @shout.']
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
print(add.__name__, "|", add.__doc__)`,
        t: ['A decorator for any function', 'Un decoratore per qualsiasi funzione', 'Un décorateur pour n\'importe quelle fonction'],
        x: [`*args and **kwargs let the wrapper accept any values and pass them on, so the decorator works for any function. The decorator @functools.wraps keeps the name and the description of the original, which would otherwise be lost.

A logging decorator is a classic: it shows what your functions do, without changing them.`,
          `*args e **kwargs lasciano che il wrapper accetti qualunque valore e lo passi, così il decoratore funziona per qualsiasi funzione. Il decoratore @functools.wraps conserva il nome e la descrizione dell'originale, che altrimenti andrebbero persi.

Un decoratore che scrive un registro è un classico: mostra cosa fanno le tue funzioni, senza cambiarle.`,
          `*args et **kwargs laissent le wrapper accepter n'importe quelles valeurs et les transmettre, donc le décorateur marche pour n'importe quelle fonction. Le décorateur @functools.wraps garde le nom et la description de l'original, qui seraient sinon perdus.

Un décorateur de journal est un classique : il montre ce que font tes fonctions, sans les changer.`],
        d: ['Decorate a function with two parameters and read the log.', 'Decora una funzione con due parametri e leggi il registro.', 'Décore une fonction à deux paramètres et lis le journal.']
      },
      {
        c: c`import functools

def repeat(times):
    def decorator(function):
        @functools.wraps(function)
        def wrapper(*args, **kwargs):
            for _ in range(times):
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

Three nested functions look scary at first. Read them from the outside in: option, function, call.`,
          `Per dare un'opzione a un decoratore, come @repeat(3), serve uno strato in più: repeat(3) restituisce il vero decoratore, che poi avvolge la funzione.

Tre funzioni annidate sembrano spaventose all'inizio. Leggile da fuori verso dentro: opzione, funzione, chiamata.`,
          `Pour donner une option à un décorateur, comme @repeat(3), il faut une couche de plus : repeat(3) rend le vrai décorateur, qui enveloppe ensuite la fonction.

Trois fonctions imbriquées font peur au début. Lis-les de l'extérieur vers l'intérieur : option, fonction, appel.`],
        d: ['Change the number of repetitions to 5.', 'Cambia il numero di ripetizioni in 5.', 'Change le nombre de répétitions en 5.']
      },
      {
        c: c`import time, functools

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

print(slow_sum(1_000_000))
print(slow_sum.last_seconds < 1)

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

print(square(4), square(4))`,
        t: ['Useful decorators', 'Decoratori utili', 'Des décorateurs utiles'],
        x: [`A decorator that times a function, and one that remembers its answers (a tiny version of lru_cache): square(4) is only worked out the first time.

Decorators add a side power to a function without touching its code: timing, logging, checking, remembering.`,
          `Un decoratore che cronometra una funzione, e uno che ricorda le sue risposte (una piccola versione di lru_cache): square(4) viene calcolato solo la prima volta.

I decoratori aggiungono un potere laterale a una funzione senza toccarne il codice: cronometrare, registrare, controllare, ricordare.`,
          `Un décorateur qui chronomètre une fonction, et un qui se souvient de ses réponses (une petite version de lru_cache) : square(4) n'est calculé que la première fois.

Les décorateurs ajoutent un pouvoir annexe à une fonction sans toucher à son code : chronométrer, journaliser, vérifier, se souvenir.`],
        d: ['Write a decorator that checks that the argument is not negative.', 'Scrivi un decoratore che controlla che l\'argomento non sia negativo.', 'Écris un décorateur qui vérifie que l\'argument n\'est pas négatif.']
      }
    ]
  },

  // ------------------------------------------------------------------ 43
  {
    title: ['Open and always close: with', 'Aprire e chiudere sempre: with', 'Ouvrir et toujours fermer : with'],
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
        t: ['What with really does', 'Cosa fa davvero with', 'Ce que fait vraiment with'],
        x: [`with calls __enter__ when it starts and __exit__ when it ends, even if something goes wrong inside. That is how with open(...) always closes the file.

Any class with these two methods can be used in a with. Here the tags are opened and closed in the right order.`,
          `with chiama __enter__ quando comincia e __exit__ quando finisce, anche se dentro qualcosa va storto. È così che with open(...) chiude sempre il file.

Qualunque classe con questi due metodi può essere usata in un with. Qui i tag vengono aperti e chiusi nell'ordine giusto.`,
          `with appelle __enter__ au début et __exit__ à la fin, même si quelque chose se passe mal dedans. C'est ainsi que with open(...) ferme toujours le fichier.

N'importe quelle classe avec ces deux méthodes peut être utilisée dans un with. Ici les balises sont ouvertes et fermées dans le bon ordre.`],
        d: ['Add a Tag("p") inside the page.', 'Aggiungi un Tag("p") dentro la pagina.', 'Ajoute un Tag("p") dans la page.']
      },
      {
        c: c`from contextlib import contextmanager

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
    print("the error went through")`,
        t: ['A with in a few lines', 'Un with in poche righe', 'Un with en quelques lignes'],
        x: [`@contextmanager lets you write a context manager as a generator: what is before the yield is the "enter", what is after is the "exit". Put the exit part in finally so it runs even on an error.

It is shorter than writing a class.`,
          `@contextmanager ti permette di scrivere un gestore di contesto come un generatore: quello che sta prima di yield è l'"entrata", quello che sta dopo è l'"uscita". Metti la parte di uscita in finally così gira anche con un errore.

È più corto che scrivere una classe.`,
          `@contextmanager te permet d'écrire un gestionnaire de contexte comme un générateur : ce qui est avant le yield est l'« entrée », ce qui est après est la « sortie ». Mets la partie de sortie dans finally pour qu'elle tourne même avec une erreur.

C'est plus court que d'écrire une classe.`],
        d: ['Make a context manager that prints how long its block took.', 'Fai un gestore di contesto che stampa quanto ha impiegato il suo blocco.', 'Fais un gestionnaire de contexte qui affiche combien de temps son bloc a pris.']
      },
      {
        c: c`from contextlib import suppress, redirect_stdout
import io, os

with suppress(FileNotFoundError):
    os.remove("never_existed.txt")
print("no error")

buffer = io.StringIO()
with redirect_stdout(buffer):
    print("this goes into the buffer")
print(repr(buffer.getvalue()))

with open("a.txt", "w") as one, open("b.txt", "w") as two:
    one.write("1")
    two.write("2")
print(os.path.exists("a.txt"), os.path.exists("b.txt"))`,
        t: ['Ready-made helpers', 'Aiuti già pronti', 'Aides toutes prêtes'],
        x: [`contextlib has helpers: suppress ignores a chosen error, redirect_stdout captures what print would show. One with can open several things at once, separated by commas.

Whenever you see "open something, use it, close it", think of with.`,
          `contextlib ha degli aiuti: suppress ignora un errore a scelta, redirect_stdout cattura quello che print mostrerebbe. Un solo with può aprire più cose insieme, separate da virgole.

Ogni volta che vedi "apri qualcosa, usalo, chiudilo", pensa a with.`,
          `contextlib a des aides : suppress ignore une erreur choisie, redirect_stdout capture ce que print montrerait. Un seul with peut ouvrir plusieurs choses à la fois, séparées par des virgules.

Chaque fois que tu vois « ouvre quelque chose, utilise-le, ferme-le », pense à with.`],
        d: ['Use suppress to ignore a ZeroDivisionError.', 'Usa suppress per ignorare uno ZeroDivisionError.', 'Utilise suppress pour ignorer une ZeroDivisionError.']
      }
    ]
  },

  // ------------------------------------------------------------------ 44
  {
    title: ['Modern Python tricks', 'Trucchi del Python moderno', 'Astuces du Python moderne'],
    subtitle: ['match, walrus, unpacking and friends', 'match, walrus, spacchettare e compagnia', 'match, morse, déballage et compagnie'],
    steps: [
      {
        c: c`def describe(command):
    match command:
        case "go north" | "go south":
            return "moving"
        case "quit":
            return "bye"
        case ["take", item]:
            return f"taking {item}"
        case {"type": "gift", "name": name}:
            return f"a gift called {name}"
        case int(number) if number > 100:
            return "a big number"
        case _:
            return "I do not understand"

print(describe("go north"))
print(describe(["take", "lamp"]))
print(describe({"type": "gift", "name": "book"}))
print(describe(500))
print(describe("dance"))`,
        t: ['match: choose by shape', 'match: scegliere dalla forma', 'match : choisir selon la forme'],
        x: [`match looks at a value and picks the first case that fits. A case can be a value, several values joined with |, the shape of a list or a dictionary that picks parts out into names, or a pattern with an extra question after if. The last case _ matches everything.

It is a tidy replacement for long chains of if and elif.`,
          `match guarda un valore e sceglie il primo caso che gli corrisponde. Un caso può essere un valore, più valori uniti con |, la forma di una lista o di un dizionario che estrae parti in nomi, o uno schema con una domanda in più dopo if. L'ultimo caso _ corrisponde a tutto.

È un sostituto ordinato per le lunghe catene di if ed elif.`,
          `match regarde une valeur et choisit le premier cas qui lui correspond. Un cas peut être une valeur, plusieurs valeurs jointes par |, la forme d'une liste ou d'un dictionnaire qui extrait des parties dans des noms, ou un motif avec une question en plus après if. Le dernier cas _ correspond à tout.

C'est un remplacement propre pour les longues chaînes de if et elif.`],
        d: ['Add a case for the command ["drop", item].', 'Aggiungi un caso per il comando ["drop", item].', 'Ajoute un cas pour la commande ["drop", item].']
      },
      {
        c: c`data = [3, 8, 15, 4]
if (n := len(data)) > 3:
    print(f"A long list of {n} items")

while (line := "x") != "x":
    pass

x = 5
print(f"{x=}")
print(f"{x * 2 = }")
name = "Ada"
print(f"{name!r} {name!s:>6} {3.14159:.2f}")

total = (a := 4) + (b := 5)
print(total, a, b)`,
        t: ['The walrus and a debugging f-string', 'Il tricheco e una f-string per correggere', 'Le morse et une f-string pour déboguer'],
        x: [`The walrus := puts a value in a name inside an expression, so you can use it right away: (n := len(data)) > 3 keeps the length and tests it in one go.

And f"{x=}" shows both the name and the value: a lovely trick when you debug with print.`,
          `Il tricheco := mette un valore in un nome dentro un'espressione, così puoi usarlo subito: (n := len(data)) > 3 tiene la lunghezza e la verifica in un colpo solo.

E f"{x=}" mostra sia il nome sia il valore: un trucco bellissimo quando correggi con print.`,
          `Le morse := met une valeur dans un nom à l'intérieur d'une expression, pour que tu puisses l'utiliser tout de suite : (n := len(data)) > 3 garde la longueur et la teste d'un coup.

Et f"{x=}" montre à la fois le nom et la valeur : une astuce géniale quand tu débogues avec print.`],
        d: ['Use f"{...=}" to debug the sum of two variables.', 'Usa f"{...=}" per correggere la somma di due variabili.', 'Utilise f"{...=}" pour déboguer la somme de deux variables.']
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
print(x, y, z)
def f(a, /, b, *, c):
    return a + b + c
print(f(1, 2, c=3))`,
        t: ['Unpacking everywhere', 'Spacchettare ovunque', 'Déballer partout'],
        x: [`A star in an unpacking catches "all the rest" into a list. Two dictionaries are merged with | or with **. A star in front of a list inside brackets spreads it out. Unpacking can go into nested pairs too.

A / and a * in the parameters decide which parameters must be given by position or by name.`,
          `Una stella in uno spacchettamento cattura "tutto il resto" in una lista. Due dizionari si uniscono con | o con **. Una stella davanti a una lista dentro le parentesi la sparge. Lo spacchettamento può andare anche in coppie annidate.

Una / e una * tra i parametri decidono quali parametri vanno dati per posizione o per nome.`,
          `Une étoile dans un déballage attrape « tout le reste » dans une liste. Deux dictionnaires se fusionnent avec | ou avec **. Une étoile devant une liste dans des crochets l'étale. Le déballage peut aussi aller dans des paires imbriquées.

Un / et une * dans les paramètres décident quels paramètres doivent être donnés par position ou par nom.`],
        d: ['Merge three dictionaries into one.', 'Unisci tre dizionari in uno.', 'Fusionne trois dictionnaires en un.']
      },
      {
        c: c`import copy

original = {"name": "Ada", "tags": ["a", "b"]}
shallow = original.copy()
deep = copy.deepcopy(original)
original["tags"].append("c")
print(shallow["tags"])
print(deep["tags"])

values = [1, 2, 3]
print(id(values) == id(values[:]), values is values)
a = b = [0]
a.append(1)
print(b)
print([[0] * 3] * 2 == [[0] * 3 for _ in range(2)])
grid = [[0] * 2] * 2
grid[0][0] = 9
print(grid)`,
        t: ['Copies, and a famous trap', 'Copie, e una trappola famosa', 'Copies, et un piège célèbre'],
        x: [`copy() makes a shallow copy: the outer list is new, but the lists inside are still shared. copy.deepcopy copies everything, all the way down.

The famous trap: [[0] * 2] * 2 repeats the same inner list twice, so changing one changes both. Build rows with a comprehension instead.`,
          `copy() fa una copia superficiale: la lista esterna è nuova, ma le liste dentro sono ancora condivise. copy.deepcopy copia tutto, fino in fondo.

La trappola famosa: [[0] * 2] * 2 ripete due volte la stessa lista interna, quindi cambiarne una cambia entrambe. Costruisci le righe con una comprensione.`,
          `copy() fait une copie superficielle : la liste extérieure est nouvelle, mais les listes à l'intérieur sont toujours partagées. copy.deepcopy copie tout, jusqu'au fond.

Le piège célèbre : [[0] * 2] * 2 répète deux fois la même liste intérieure, donc en changer une change les deux. Construis les lignes avec une compréhension.`],
        d: ['Make a 3 by 3 board of zeros the right way.', 'Fai una scacchiera 3 per 3 di zeri nel modo giusto.', 'Fais un plateau 3 sur 3 de zéros de la bonne façon.']
      }
    ]
  },

  // ------------------------------------------------------------------ 45
  {
    title: ['Numbers and text in depth', 'Numeri e testo in profondità', 'Nombres et texte en profondeur'],
    subtitle: ['Exact decimals, fractions, bits and letters', 'Decimali esatti, frazioni, bit e lettere', 'Décimaux exacts, fractions, bits et lettres'],
    steps: [
      {
        c: c`from decimal import Decimal, getcontext
print(0.1 + 0.2)
print(Decimal("0.1") + Decimal("0.2"))
price = Decimal("19.99")
print(price * 3)
print(Decimal("10") / Decimal("3"))
getcontext().prec = 5
print(Decimal(1) / Decimal(7))`,
        t: ['Exact decimals for money', 'Decimali esatti per i soldi', 'Décimaux exacts pour l\'argent'],
        x: [`Ordinary floats are never exact: 0.1 + 0.2 is not quite 0.3. For money, use Decimal and write the numbers as texts, "0.1": the sums are exact. prec says how many digits to keep.

Never use floats to count money.`,
          `I float normali non sono mai esatti: 0.1 + 0.2 non è proprio 0.3. Per i soldi usa Decimal e scrivi i numeri come testi, "0.1": i conti sono esatti. prec dice quante cifre tenere.

Non usare mai i float per contare i soldi.`,
          `Les floats ordinaires ne sont jamais exacts : 0.1 + 0.2 n'est pas tout à fait 0.3. Pour l'argent, utilise Decimal et écris les nombres comme des textes, "0.1" : les calculs sont exacts. prec dit combien de chiffres garder.

N'utilise jamais des floats pour compter l'argent.`],
        d: ['Compute the total of 3 items at 0.10 each with Decimal.', 'Calcola il totale di 3 articoli da 0.10 con Decimal.', 'Calcule le total de 3 articles à 0.10 chacun avec Decimal.']
      },
      {
        c: c`from fractions import Fraction
half = Fraction(1, 2)
third = Fraction(1, 3)
print(half + third)
print(half * third)
print(Fraction(6, 8))
print(Fraction("0.75"))
print(float(Fraction(1, 3)))
print(half < third, half > third)`,
        t: ['Exact fractions', 'Frazioni esatte', 'Fractions exactes'],
        x: [`Fraction keeps a number as the ratio of two whole numbers, so 1/2 + 1/3 is exactly 5/6 and nothing is lost. Python simplifies for you: 6/8 becomes 3/4.

Perfect for recipes, music and maths homework.`,
          `Fraction tiene un numero come rapporto di due numeri interi, quindi 1/2 + 1/3 è esattamente 5/6 e non si perde niente. Python semplifica per te: 6/8 diventa 3/4.

Perfetto per le ricette, la musica e i compiti di matematica.`,
          `Fraction garde un nombre comme le rapport de deux nombres entiers, donc 1/2 + 1/3 vaut exactement 5/6 et rien n'est perdu. Python simplifie pour toi : 6/8 devient 3/4.

Parfait pour les recettes, la musique et les devoirs de maths.`],
        d: ['Add 2/5 and 3/10.', 'Somma 2/5 e 3/10.', 'Additionne 2/5 et 3/10.']
      },
      {
        c: c`n = 202
print(bin(n), oct(n), hex(n))
print(int("11001010", 2), int("ff", 16), 0b1010, 0xff)
print(format(n, "08b"), f"{n:x}", f"{n:#o}")
print(5 & 3, 5 | 3, 5 ^ 3, ~5)
print(1 << 4, 64 >> 2)
print((n >> 3) & 1)`,
        t: ['Numbers made of bits', 'Numeri fatti di bit', 'Des nombres faits de bits'],
        x: [`Computers store numbers in binary: only 0 and 1. bin, oct and hex show a number in base 2, 8 and 16, and int(text, base) reads one back. Operators & (and), | (or), ^ (different), ~ (flip) and the shifts << and >> work on the bits themselves.

Shifting left by 4 is multiplying by 16.`,
          `I computer conservano i numeri in binario: solo 0 e 1. bin, oct e hex mostrano un numero in base 2, 8 e 16, e int(testo, base) ne rilegge uno. Gli operatori & (e), | (o), ^ (diverso), ~ (inverti) e gli scorrimenti << e >> lavorano sui bit stessi.

Scorrere a sinistra di 4 vuol dire moltiplicare per 16.`,
          `Les ordinateurs stockent les nombres en binaire : seulement 0 et 1. bin, oct et hex montrent un nombre en base 2, 8 et 16, et int(texte, base) en relit un. Les opérateurs & (et), | (ou), ^ (différent), ~ (inverse) et les décalages << et >> travaillent sur les bits eux-mêmes.

Décaler de 4 vers la gauche, c'est multiplier par 16.`],
        d: ['Write 100 in binary, then read it back.', 'Scrivi 100 in binario, poi rileggilo.', 'Écris 100 en binaire, puis relis-le.']
      },
      {
        c: c`word = "café"
print(len(word), word.encode("utf-8"), len(word.encode("utf-8")))
raw = "héllo".encode("utf-8")
print(raw, raw.decode("utf-8"))
print(ord("é"), chr(233), "é", "\N{SNOWMAN}")
print("é" == "é", len("é"))
import unicodedata
print(unicodedata.normalize("NFC", "é") == "é")
print(bytes([72, 105]), list(b"Hi"), bytearray(b"ab"))`,
        t: ['Letters, bytes and unicode', 'Lettere, byte e unicode', 'Lettres, octets et unicode'],
        x: [`A text is made of characters; a file or a network carries bytes. encode turns a text into bytes (utf-8 is the usual way) and decode turns bytes back into text. Accented letters and emoji take more than one byte.

Unicode gives every character a number: ord and chr convert. The same letter can be written in more than one way, so normalize makes them comparable.`,
          `Un testo è fatto di caratteri; un file o una rete trasportano byte. encode trasforma un testo in byte (utf-8 è il modo solito) e decode trasforma i byte di nuovo in testo. Le lettere accentate e gli emoji occupano più di un byte.

Unicode dà un numero a ogni carattere: ord e chr convertono. La stessa lettera si può scrivere in più modi, quindi normalize le rende confrontabili.`,
          `Un texte est fait de caractères ; un fichier ou un réseau transporte des octets. encode transforme un texte en octets (utf-8 est la façon habituelle) et decode retransforme les octets en texte. Les lettres accentuées et les emoji prennent plus d'un octet.

Unicode donne un numéro à chaque caractère : ord et chr convertissent. La même lettre peut s'écrire de plusieurs façons, donc normalize les rend comparables.`],
        d: ['Find how many bytes your own name takes in utf-8.', 'Trova quanti byte occupa il tuo nome in utf-8.', 'Trouve combien d\'octets ton prénom prend en utf-8.']
      },
      {
        c: c`import math
print(10 ** 30)
print(2 ** 200)
print(math.isqrt(10 ** 20))
print(divmod(17, 5), pow(2, 10, 1000))
print(round(2.675, 2), round(1234.5678, -2))
print(int("  42  "), float("1e3"), complex(1, 2) * complex(0, 1))
print(sum([0.1] * 10) == 1.0, math.fsum([0.1] * 10) == 1.0)`,
        t: ['Huge numbers and small surprises', 'Numeri enormi e piccole sorprese', 'Nombres énormes et petites surprises'],
        x: [`Whole numbers in Python can be as big as the memory allows: 2 ** 200 is no problem. divmod gives the quotient and the rest together, pow(a, b, m) works with a remainder, and complex handles complex numbers.

Floats are not exact: adding 0.1 ten times is not exactly 1.0, but math.fsum is more careful.`,
          `I numeri interi in Python possono essere grandi quanto permette la memoria: 2 ** 200 non è un problema. divmod dà insieme il quoziente e il resto, pow(a, b, m) lavora con un resto, e complex gestisce i numeri complessi.

I float non sono esatti: sommare 0.1 dieci volte non fa esattamente 1.0, ma math.fsum è più attento.`,
          `Les nombres entiers en Python peuvent être aussi grands que la mémoire le permet : 2 ** 200 n'est pas un problème. divmod donne ensemble le quotient et le reste, pow(a, b, m) travaille avec un reste, et complex gère les nombres complexes.

Les floats ne sont pas exacts : additionner 0.1 dix fois ne fait pas exactement 1.0, mais math.fsum est plus soigneux.`],
        d: ['How many digits does 2 ** 1000 have?', 'Quante cifre ha 2 ** 1000?', 'Combien de chiffres a 2 ** 1000 ?']
      }
    ]
  },

  // ------------------------------------------------------------------ 46
  {
    title: ['Fast and slow', 'Veloce e lento', 'Rapide et lent'],
    subtitle: ['Measure, choose well, and a little big-O', 'Misura, scegli bene, e un po\' di big-O', 'Mesure, choisis bien, et un peu de grand-O'],
    steps: [
      {
        c: c`import timeit
slow = timeit.timeit("sum([n * n for n in range(1000)])", number=200)
fast = timeit.timeit("sum(n * n for n in range(1000))", number=200)
print(slow > 0, fast > 0)

import time
start = time.perf_counter()
total = 0
for n in range(200_000):
    total += n
seconds = time.perf_counter() - start
print("A loop of 200,000 steps took", "less than" if seconds < 1 else "more than", "a second")`,
        t: ['Measure, do not guess', 'Misura, non indovinare', 'Mesure, ne devine pas'],
        x: [`When you wonder which way is faster, measure it. timeit runs a small piece of code many times and tells how long it took. time.perf_counter is a stopwatch.

Programmers are famously bad at guessing what is slow. The numbers do not lie.`,
          `Quando ti chiedi quale modo sia più veloce, misuralo. timeit fa girare un piccolo pezzo di codice molte volte e dice quanto ha impiegato. time.perf_counter è un cronometro.

Chi programma è famoso per indovinare male cosa è lento. I numeri non mentono.`,
          `Quand tu te demandes quelle façon est la plus rapide, mesure-la. timeit lance un petit morceau de code plein de fois et dit combien de temps il a pris. time.perf_counter est un chronomètre.

Les programmeurs sont célèbres pour mal deviner ce qui est lent. Les chiffres ne mentent pas.`],
        d: ['Time two ways to build a list of 1000 squares.', 'Cronometra due modi di costruire una lista di 1000 quadrati.', 'Chronomètre deux façons de construire une liste de 1000 carrés.']
      },
      {
        c: c`import time
names_list = list(range(50_000))
names_set = set(names_list)

start = time.perf_counter()
for n in range(0, 50_000, 500):
    n in names_list
list_time = time.perf_counter() - start

start = time.perf_counter()
for n in range(0, 50_000, 500):
    n in names_set
set_time = time.perf_counter() - start
print("The set is faster:", set_time < list_time)

d = {n: n * 2 for n in range(10)}
print(d[7])`,
        t: ['The right box for the job', 'La scatola giusta per il lavoro', 'La bonne boîte pour le travail'],
        x: [`Asking "is it in the list?" makes Python look at the items one by one. A set or a dictionary jumps straight to the answer. With 50,000 items the difference is huge.

If you ask "is it in there?" many times, use a set or a dictionary.`,
          `Chiedere "è nella lista?" fa guardare a Python gli elementi uno per uno. Un insieme o un dizionario salta dritto alla risposta. Con 50.000 elementi la differenza è enorme.

Se chiedi "c'è dentro?" tante volte, usa un insieme o un dizionario.`,
          `Demander « est-ce dans la liste ? » fait regarder à Python les éléments un par un. Un ensemble ou un dictionnaire saute directement à la réponse. Avec 50 000 éléments la différence est énorme.

Si tu demandes « est-ce dedans ? » plusieurs fois, utilise un ensemble ou un dictionnaire.`],
        d: ['Remove repeats from a long list with a set.', 'Togli le ripetizioni da una lunga lista con un insieme.', 'Retire les répétitions d\'une longue liste avec un ensemble.']
      },
      {
        c: c`def count_steps_linear(n):
    steps = 0
    for _ in range(n):
        steps += 1
    return steps

def count_steps_quadratic(n):
    steps = 0
    for _ in range(n):
        for _ in range(n):
            steps += 1
    return steps

def count_steps_halving(n):
    steps = 0
    while n > 1:
        n //= 2
        steps += 1
    return steps

for n in [10, 100, 1000]:
    print(n, count_steps_linear(n), count_steps_quadratic(n), count_steps_halving(n))`,
        t: ['How work grows: big-O', 'Come cresce il lavoro: big-O', 'Comment le travail grandit : grand-O'],
        x: [`Computer scientists describe how the work grows when the input grows. One loop: ten times more data, ten times more work (linear). A loop inside a loop: a hundred times more (quadratic), which gets slow very fast. Halving each time: almost no extra work (logarithmic).

The three columns show it. This idea is called big-O.`,
          `Chi studia informatica descrive come cresce il lavoro quando crescono i dati. Un ciclo: dieci volte più dati, dieci volte più lavoro (lineare). Un ciclo dentro un ciclo: cento volte di più (quadratico), che diventa lento in fretta. Dimezzare ogni volta: quasi nessun lavoro in più (logaritmico).

Le tre colonne lo mostrano. Quest'idea si chiama big-O.`,
          `Les informaticiens décrivent comment le travail grandit quand les données grandissent. Une boucle : dix fois plus de données, dix fois plus de travail (linéaire). Une boucle dans une boucle : cent fois plus (quadratique), ce qui devient lent très vite. Diviser par deux à chaque fois : presque pas de travail en plus (logarithmique).

Les trois colonnes le montrent. Cette idée s'appelle le grand-O.`],
        d: ['Predict the steps of the quadratic function for n = 20.', 'Prevedi i passi della funzione quadratica per n = 20.', 'Prévois les pas de la fonction quadratique pour n = 20.']
      },
      {
        c: c`from functools import lru_cache
import time

def slow_fib(n):
    return n if n < 2 else slow_fib(n - 1) + slow_fib(n - 2)

@lru_cache(maxsize=None)
def fast_fib(n):
    return n if n < 2 else fast_fib(n - 1) + fast_fib(n - 2)

start = time.perf_counter()
print(slow_fib(22))
slow_time = time.perf_counter() - start
start = time.perf_counter()
print(fast_fib(22))
fast_time = time.perf_counter() - start
print("Remembering is faster:", fast_time < slow_time)
print(fast_fib(200))
print(fast_fib.cache_info().hits > 0)`,
        t: ['Remember the answers', 'Ricorda le risposte', 'Souviens-toi des réponses'],
        x: [`The slow Fibonacci works the same things out again and again. With lru_cache each answer is worked out once and remembered, and fast_fib(200) is instant while slow_fib(200) would take longer than the age of the universe.

This idea of remembering partial answers is called memoization, and it is one of the best ways to speed up a program.`,
          `Il Fibonacci lento ricalcola le stesse cose ancora e ancora. Con lru_cache ogni risposta è calcolata una volta e ricordata, e fast_fib(200) è istantaneo mentre slow_fib(200) impiegherebbe più dell'età dell'universo.

Quest'idea di ricordare le risposte parziali si chiama memoizzazione, ed è uno dei modi migliori per velocizzare un programma.`,
          `Le Fibonacci lent recalcule les mêmes choses encore et encore. Avec lru_cache chaque réponse est calculée une fois et mémorisée, et fast_fib(200) est instantané alors que slow_fib(200) prendrait plus longtemps que l'âge de l'univers.

Cette idée de mémoriser les réponses partielles s'appelle la mémoïsation, et c'est l'une des meilleures façons d'accélérer un programme.`],
        d: ['Memoize a function that counts the ways to climb n stairs by 1 or 2 steps.', 'Memoizza una funzione che conta i modi di salire n gradini di 1 o 2 passi.', 'Mémoïse une fonction qui compte les façons de monter n marches par 1 ou 2.']
      }
    ]
  },

  // ------------------------------------------------------------------ 47
  {
    title: ['Algorithms', 'Algoritmi', 'Algorithmes'],
    subtitle: ['Search, sort and think step by step', 'Cercare, ordinare e pensare passo dopo passo', 'Chercher, trier et penser pas à pas'],
    steps: [
      {
        c: c`def linear_search(items, target):
    for index, item in enumerate(items):
        if item == target:
            return index
    return -1

def binary_search(sorted_items, target):
    low, high = 0, len(sorted_items) - 1
    steps = 0
    while low <= high:
        steps += 1
        middle = (low + high) // 2
        if sorted_items[middle] == target:
            return middle, steps
        if sorted_items[middle] < target:
            low = middle + 1
        else:
            high = middle - 1
    return -1, steps

numbers = list(range(0, 1000, 3))
print(linear_search(numbers, 600))
print(binary_search(numbers, 600))
print(binary_search(numbers, 601))`,
        t: ['Find it fast: binary search', 'Trovarlo in fretta: ricerca binaria', 'Le trouver vite : recherche binaire'],
        x: [`In a sorted list you do not need to look at every item. Look at the middle: if the target is bigger, forget the left half; if smaller, forget the right half. Repeat. Each step halves the work, so 1000 items need only about 10 steps.

It is how you find a name in a phone book, or a word in a dictionary.`,
          `In una lista ordinata non serve guardare ogni elemento. Guarda quello di mezzo: se il bersaglio è più grande, dimentica la metà sinistra; se è più piccolo, dimentica la metà destra. Ripeti. Ogni passo dimezza il lavoro, quindi 1000 elementi richiedono solo circa 10 passi.

È come si trova un nome in un elenco telefonico, o una parola in un dizionario.`,
          `Dans une liste triée tu n'as pas besoin de regarder chaque élément. Regarde celui du milieu : si la cible est plus grande, oublie la moitié gauche ; si elle est plus petite, oublie la moitié droite. Recommence. Chaque pas divise le travail par deux, donc 1000 éléments n'ont besoin que d'environ 10 pas.

C'est comme ça qu'on trouve un nom dans un annuaire, ou un mot dans un dictionnaire.`],
        d: ['Count the steps for a list of 1,000,000 numbers.', 'Conta i passi per una lista di 1.000.000 di numeri.', 'Compte les pas pour une liste de 1 000 000 de nombres.']
      },
      {
        c: c`def bubble_sort(items):
    items = list(items)
    for end in range(len(items) - 1, 0, -1):
        for i in range(end):
            if items[i] > items[i + 1]:
                items[i], items[i + 1] = items[i + 1], items[i]
    return items

def insertion_sort(items):
    result = []
    for item in items:
        position = 0
        while position < len(result) and result[position] < item:
            position += 1
        result.insert(position, item)
    return result

data = [5, 2, 9, 1, 7, 3]
print(bubble_sort(data))
print(insertion_sort(data))
print(data)`,
        t: ['Sort by hand', 'Ordinare a mano', 'Trier à la main'],
        x: [`Python has sorted(...), but writing a sort yourself teaches a lot. Bubble sort swaps neighbours that are in the wrong order, again and again, until the biggest bubbles up to the end. Insertion sort takes each item and puts it in its place in a growing sorted list.

Both are slow for big lists (quadratic), but easy to understand.`,
          `Python ha sorted(...), ma scrivere un ordinamento tu stesso insegna molto. Il bubble sort scambia i vicini che sono nell'ordine sbagliato, ancora e ancora, finché il più grande sale in fondo. L'insertion sort prende ogni elemento e lo mette al suo posto in una lista ordinata che cresce.

Entrambi sono lenti per le liste grandi (quadratici), ma facili da capire.`,
          `Python a sorted(...), mais écrire un tri toi-même apprend beaucoup. Le tri à bulles échange les voisins qui sont dans le mauvais ordre, encore et encore, jusqu'à ce que le plus grand remonte au bout. Le tri par insertion prend chaque élément et le met à sa place dans une liste triée qui grandit.

Les deux sont lents pour les grandes listes (quadratiques), mais faciles à comprendre.`],
        d: ['Make bubble_sort sort from the biggest to the smallest.', 'Fai ordinare a bubble_sort dal più grande al più piccolo.', 'Fais trier bubble_sort du plus grand au plus petit.']
      },
      {
        c: c`def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    return result + left[i:] + right[j:]

def merge_sort(items):
    if len(items) <= 1:
        return items
    middle = len(items) // 2
    return merge(merge_sort(items[:middle]), merge_sort(items[middle:]))

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))
import random
random.seed(1)
big = [random.randint(0, 1000) for _ in range(500)]
print(merge_sort(big) == sorted(big))`,
        t: ['Divide and conquer: merge sort', 'Dividi e conquista: merge sort', 'Diviser pour régner : tri fusion'],
        x: [`Merge sort uses recursion: cut the list in half, sort each half the same way, and merge the two sorted halves by always taking the smaller front item. The last line checks the answer against Python's own sorted.

It is much faster than bubble sort for big lists. Always test your algorithm against a trusted tool.`,
          `Il merge sort usa la ricorsione: taglia la lista a metà, ordina ogni metà allo stesso modo, e fonde le due metà ordinate prendendo sempre l'elemento di testa più piccolo. L'ultima riga controlla la risposta con il sorted di Python.

È molto più veloce del bubble sort per le liste grandi. Prova sempre il tuo algoritmo contro uno strumento di cui ti fidi.`,
          `Le tri fusion utilise la récursion : coupe la liste en deux, trie chaque moitié de la même façon, et fusionne les deux moitiés triées en prenant toujours le plus petit élément de tête. La dernière ligne vérifie la réponse avec le sorted de Python.

Il est bien plus rapide que le tri à bulles pour les grandes listes. Teste toujours ton algorithme contre un outil de confiance.`],
        d: ['Count how many comparisons merge sort needs for 16 items.', 'Conta quanti confronti servono al merge sort per 16 elementi.', 'Compte combien de comparaisons le tri fusion demande pour 16 éléments.']
      },
      {
        c: c`def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

def sieve(limit):
    marks = [True] * (limit + 1)
    marks[0:2] = [False, False]
    for p in range(2, int(limit ** 0.5) + 1):
        if marks[p]:
            for multiple in range(p * p, limit + 1, p):
                marks[multiple] = False
    return [n for n, ok in enumerate(marks) if ok]

print([n for n in range(30) if is_prime(n)])
print(sieve(50))
print(len(sieve(10_000)))`,
        t: ['Prime numbers', 'I numeri primi', 'Les nombres premiers'],
        x: [`A prime has no divisor other than 1 and itself. To test one number you only need to check divisors up to its square root. To find all the primes up to a limit, the sieve of Eratosthenes crosses out the multiples of each prime, which is far quicker.

An algorithm from over two thousand years ago, still the right idea today.`,
          `Un primo non ha divisori oltre a 1 e se stesso. Per provare un numero basta controllare i divisori fino alla sua radice quadrata. Per trovare tutti i primi fino a un limite, il crivello di Eratostene cancella i multipli di ogni primo, ed è molto più rapido.

Un algoritmo di oltre duemila anni fa, ancora oggi l'idea giusta.`,
          `Un nombre premier n'a pas d'autre diviseur que 1 et lui-même. Pour tester un nombre il suffit de vérifier les diviseurs jusqu'à sa racine carrée. Pour trouver tous les premiers jusqu'à une limite, le crible d'Ératosthène barre les multiples de chaque premier, ce qui est bien plus rapide.

Un algorithme vieux de plus de deux mille ans, toujours la bonne idée aujourd'hui.`],
        d: ['Find the biggest prime under 1000.', 'Trova il primo più grande sotto 1000.', 'Trouve le plus grand premier sous 1000.']
      },
      {
        c: c`def solve(n, start="A", spare="B", goal="C", moves=None):
    if moves is None:
        moves = []
    if n == 0:
        return moves
    solve(n - 1, start, goal, spare, moves)
    moves.append(f"{start}->{goal}")
    solve(n - 1, spare, start, goal, moves)
    return moves

print(solve(2))
print(solve(3))
print(len(solve(10)), 2 ** 10 - 1)

def permutations(items):
    if len(items) <= 1:
        return [items]
    result = []
    for i, item in enumerate(items):
        for rest in permutations(items[:i] + items[i + 1:]):
            result.append([item] + rest)
    return result

print(permutations([1, 2, 3]))`,
        t: ['Hard puzzles with recursion', 'Rompicapo difficili con la ricorsione', 'Casse-tête difficiles avec la récursion'],
        x: [`The Towers of Hanoi: move n discs from one peg to another, one at a time, never putting a big disc on a small one. The recursion says: move n-1 discs out of the way, move the big one, bring the n-1 back. It needs 2 to the power n minus 1 moves.

Recursion also builds all the orders of a list: pick each item as the first and arrange the rest.`,
          `Le Torri di Hanoi: sposta n dischi da un piolo a un altro, uno alla volta, senza mai mettere un disco grande su uno piccolo. La ricorsione dice: togli di mezzo n-1 dischi, sposta quello grande, riporta gli n-1. Servono 2 alla n meno 1 mosse.

La ricorsione costruisce anche tutti gli ordini di una lista: scegli ogni elemento come primo e disponi il resto.`,
          `Les Tours de Hanoï : déplace n disques d'une tige à une autre, un à la fois, sans jamais mettre un grand disque sur un petit. La récursion dit : écarte n-1 disques, déplace le grand, ramène les n-1. Il faut 2 puissance n moins 1 coups.

La récursion construit aussi tous les ordres d'une liste : choisis chaque élément comme premier et arrange le reste.`],
        d: ['How many moves does it take for 20 discs?', 'Quante mosse servono per 20 dischi?', 'Combien de coups faut-il pour 20 disques ?']
      }
    ]
  },

  // ------------------------------------------------------------------ 48
  {
    title: ['Doing many things at once', 'Fare tante cose insieme', 'Faire plein de choses à la fois'],
    subtitle: ['async and await', 'async e await', 'async et await'],
    steps: [
      {
        c: c`import asyncio

async def hello():
    print("Hello")
    await asyncio.sleep(0.01)
    print("World")
    return 42

result = asyncio.run(hello())
print(result)`,
        t: ['A function that can wait', 'Una funzione che può aspettare', 'Une fonction qui peut attendre'],
        x: [`async def makes a coroutine: a function that can pause while it waits for something slow (a download, a timer) and let others work in the meantime. await marks the place where it waits. asyncio.run starts the whole thing.

This step and the next ones need a recent browser, because Python has to pause and resume. If yours is old, Pyviel will say so.`,
          `async def crea una coroutine: una funzione che può fermarsi mentre aspetta qualcosa di lento (un download, un timer) e lasciare lavorare gli altri nel frattempo. await segna il punto dove aspetta. asyncio.run fa partire il tutto.

Questo passo e i prossimi hanno bisogno di un browser recente, perché Python deve fermarsi e riprendere. Se il tuo è vecchio, Pyviel lo dirà.`,
          `async def crée une coroutine : une fonction qui peut faire une pause pendant qu'elle attend quelque chose de lent (un téléchargement, un minuteur) et laisser les autres travailler entre-temps. await marque l'endroit où elle attend. asyncio.run démarre le tout.

Cette étape et les suivantes ont besoin d'un navigateur récent, parce que Python doit se mettre en pause et reprendre. Si le tien est vieux, Pyviel le dira.`],
        d: ['Add one more print after the await.', 'Aggiungi un altro print dopo l\'await.', 'Ajoute un autre print après l\'await.'],
        w: ['await only works inside an async def. Outside, it is a mistake.', 'await funziona solo dentro un async def. Fuori, è un errore.', 'await ne marche que dans un async def. Dehors, c\'est une erreur.']
      },
      {
        c: c`import asyncio

async def fetch(name, seconds):
    await asyncio.sleep(seconds)
    print(name, "done")
    return name.upper()

async def main():
    results = await asyncio.gather(
        fetch("slow", 0.06),
        fetch("fast", 0.01),
        fetch("medium", 0.03),
    )
    print(results)

asyncio.run(main())`,
        t: ['Wait for many at the same time', 'Aspettare tanti insieme', 'Attendre plusieurs en même temps'],
        x: [`gather starts several coroutines together and waits for all of them. They run at the same time: the fast one finishes first even though it was started second, and the total time is that of the slowest, not the sum.

The results come back in the same order as you asked.`,
          `gather fa partire più coroutine insieme e aspetta tutte. Girano nello stesso tempo: quella veloce finisce per prima anche se è partita per seconda, e il tempo totale è quello della più lenta, non la somma.

I risultati tornano nello stesso ordine in cui li hai chiesti.`,
          `gather démarre plusieurs coroutines ensemble et les attend toutes. Elles tournent en même temps : la rapide finit la première même si elle a démarré en deuxième, et le temps total est celui de la plus lente, pas la somme.

Les résultats reviennent dans le même ordre que tu les as demandés.`],
        d: ['Add a fourth task that takes 0.02 seconds.', 'Aggiungi un quarto compito che dura 0.02 secondi.', 'Ajoute une quatrième tâche qui dure 0.02 seconde.']
      },
      {
        c: c`import asyncio

async def producer(queue):
    for n in range(3):
        await queue.put(n)
        print("made", n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("used", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())
print("finished")`,
        t: ['Tasks that pass things to each other', 'Compiti che si passano cose', 'Des tâches qui se passent des choses'],
        x: [`A Queue lets one coroutine hand things to another. The producer puts items in, the consumer takes them out as they come, and None is the agreed sign for "no more".

This is the shape of many real programs: one part collects work, another does it.`,
          `Una Queue permette a una coroutine di passare cose a un'altra. Il produttore mette elementi dentro, il consumatore li toglie man mano che arrivano, e None è il segno concordato per "basta".

È la forma di molti programmi veri: una parte raccoglie il lavoro, un'altra lo fa.`,
          `Une Queue permet à une coroutine de passer des choses à une autre. Le producteur met des éléments dedans, le consommateur les retire à mesure qu'ils arrivent, et None est le signe convenu pour « fini ».

C'est la forme de beaucoup de vrais programmes : une partie collecte le travail, une autre le fait.`],
        d: ['Make the producer send five items.', 'Fai mandare cinque elementi al produttore.', 'Fais envoyer cinq éléments au producteur.']
      },
      {
        c: c`import asyncio

async def slow():
    await asyncio.sleep(1)
    return "never reached"

async def main():
    try:
        result = await asyncio.wait_for(slow(), timeout=0.05)
    except asyncio.TimeoutError:
        print("Too slow, gave up")
    task = asyncio.create_task(asyncio.sleep(0.01, result="background"))
    print("doing other things")
    print(await task)

asyncio.run(main())`,
        t: ['Time limits and background tasks', 'Limiti di tempo e compiti in secondo piano', 'Limites de temps et tâches en arrière-plan'],
        x: [`wait_for stops waiting after a time limit and raises TimeoutError. create_task starts a coroutine in the background and gives you a task, which you await later to get its result.

Async is a big topic. You now know the four pieces that cover most real uses: async def, await, gather and create_task.`,
          `wait_for smette di aspettare dopo un limite di tempo e solleva TimeoutError. create_task fa partire una coroutine in secondo piano e ti dà un compito, che aspetti dopo per avere il suo risultato.

Async è un argomento grande. Ora conosci i quattro pezzi che coprono la maggior parte degli usi veri: async def, await, gather e create_task.`,
          `wait_for arrête d'attendre après une limite de temps et lève TimeoutError. create_task démarre une coroutine en arrière-plan et te donne une tâche, que tu attends plus tard pour avoir son résultat.

Async est un grand sujet. Tu connais maintenant les quatre morceaux qui couvrent la plupart des vrais usages : async def, await, gather et create_task.`],
        d: ['Run three background tasks and wait for all of them.', 'Fai partire tre compiti in secondo piano e aspettali tutti.', 'Lance trois tâches en arrière-plan et attends-les toutes.']
      }
    ]
  }
];
