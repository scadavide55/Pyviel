// Stage 5 · Special methods, properties, dataclasses and enums. See tools/build-course.js for the format.
const c = String.raw;

module.exports = [
  {
    title: ['Make objects behave like Python things', 'Fai comportare gli oggetti come cose di Python', 'Fais se comporter les objets comme des choses de Python'],
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
print([p, Point(0, 0)])`,
        n: ['special-methods'],
        t: ['Show an object nicely', 'Mostra bene un oggetto', 'Affiche bien un objet'],
        x: [`Printing a plain object shows something like <Point object at ...>, which says nothing. Python lets you decide: methods with two underscores on both sides are special, and Python calls them by itself at the right moment.

__str__ decides what print shows. __repr__ decides what is shown inside lists, and when programmers look closely at an object.`,
          `Stampare un oggetto semplice mostra qualcosa come <Point object at ...>, che non dice niente. Python ti lascia decidere: i metodi con due trattini bassi da tutte e due le parti sono speciali, e Python li chiama da solo al momento giusto.

__str__ decide cosa mostra print. __repr__ decide cosa si vede dentro le liste, e quando chi programma guarda da vicino un oggetto.`,
          `Afficher un objet simple montre quelque chose comme <Point object at ...>, ce qui ne dit rien. Python te laisse décider : les méthodes avec deux tirets bas de chaque côté sont spéciales, et Python les appelle tout seul au bon moment.

__str__ décide ce qu'affiche print. __repr__ décide ce qui s'affiche dans les listes, et quand les programmeurs regardent de près un objet.`],
        ex: {
          t: ['Give the class Pet a __str__ that returns the name. Show Pet("Rex").', 'Dai alla classe Pet un __str__ che restituisce il nome. Mostra Pet("Rex").', 'Donne à la classe Pet un __str__ qui rend le nom. Affiche Pet("Rex").'],
          h: ['__str__ is a method with only self: it gives back the text that print must show, here the name.', '__str__ è un metodo con solo self: restituisce il testo che print deve mostrare, qui il nome.', '__str__ est une méthode avec seulement self : elle rend le texte que print doit afficher, ici le nom.'],
          start: 'class Pet:\n    def __init__(self, name):\n        self.name = name', sol: 'class Pet:\n    def __init__(self, name):\n        self.name = name\n\n    def __str__(self):\n        return self.name\n\nprint(Pet("Rex"))', out: 'Rex', c: '__str__'
        }
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
        t: ['Use + and == with your objects', 'Usa + e == con i tuoi oggetti', 'Utilise + et == avec tes objets'],
        x: [`__add__ tells Python what + does for your objects, __mul__ does the same for *, and __eq__ for ==. Without __eq__, two points with the same numbers would count as different objects.

Python turns a + b into a.__add__(b). It is the same machinery that makes + work for numbers and for texts.`,
          `__add__ dice a Python cosa fa + per i tuoi oggetti, __mul__ fa lo stesso per *, e __eq__ per ==. Senza __eq__, due punti con gli stessi numeri conterebbero come oggetti diversi.

Python trasforma a + b in a.__add__(b). È lo stesso meccanismo che fa funzionare + per i numeri e per i testi.`,
          `__add__ dit à Python ce que fait + pour tes objets, __mul__ fait pareil pour *, et __eq__ pour ==. Sans __eq__, deux points avec les mêmes nombres compteraient comme des objets différents.

Python transforme a + b en a.__add__(b). C'est la même mécanique qui fait marcher + pour les nombres et pour les textes.`],
        ex: {
          t: ['Add a __sub__ method to the class Point, so that Point(5, 5) - Point(2, 1) gives Point(3, 4). Show it.', 'Aggiungi un metodo __sub__ alla classe Point, così che Point(5, 5) - Point(2, 1) dia Point(3, 4). Mostralo.', 'Ajoute une méthode __sub__ à la classe Point, pour que Point(5, 5) - Point(2, 1) donne Point(3, 4). Affiche-le.'],
          h: ['Copy the shape of __add__ and change the sign: a new Point whose x and y are the differences.', 'Copia la forma di __add__ e cambia il segno: un nuovo Point i cui x e y sono le differenze.', 'Copie la forme de __add__ et change le signe : un nouveau Point dont x et y sont les différences.'],
          start: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __repr__(self):\n        return f"Point({self.x}, {self.y})"', sol: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __sub__(self, other):\n        return Point(self.x - other.x, self.y - other.y)\n\n    def __repr__(self):\n        return f"Point({self.x}, {self.y})"\n\nprint(Point(5, 5) - Point(2, 1))', out: 'Point(3, 4)', c: '__sub__'
        }
      },
      {
        c: [c`class Playlist:
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
print(sorted(p, reverse=True))`, c`class Playlist:
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

p = Playlist(["Intro", "Canzone A", "Canzone B"])
print(len(p), p[1], "Canzone A" in p)
for s in p:
    print("-", s)
print(sorted(p, reverse=True))`, c`class Playlist:
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

p = Playlist(["Intro", "Chanson A", "Chanson B"])
print(len(p), p[1], "Chanson A" in p)
for s in p:
    print("-", s)
print(sorted(p, reverse=True))`],
        n: ['iter'],
        t: ['Behave like a collection', 'Comportati come una collezione', 'Se comporter comme une collection'],
        x: [`With __len__, __getitem__, __contains__ and __iter__, your object works with len(...), square brackets, in and for loops, even with sorted(...): it feels like a built-in collection.

You do not need all of them: write the ones that make sense for your object.`,
          `Con __len__, __getitem__, __contains__ e __iter__, il tuo oggetto funziona con len(...), le parentesi quadre, in e i cicli for, perfino con sorted(...): sembra una collezione di Python.

Non te le servono tutte: scrivi quelle che hanno senso per il tuo oggetto.`,
          `Avec __len__, __getitem__, __contains__ et __iter__, ton objet marche avec len(...), les crochets, in et les boucles for, même avec sorted(...) : on dirait une collection de Python.

Tu n'as pas besoin de toutes : écris celles qui ont du sens pour ton objet.`],
        ex: {
          t: ['Make a class Bag with a list inside and a __len__ that gives how many items it has. Show len(Bag([1, 2, 3])) (3).', 'Crea una classe Bag con una lista dentro e un __len__ che dà quanti elementi ha. Mostra len(Bag([1, 2, 3])) (3).', 'Crée une classe Bag avec une liste dedans et un __len__ qui donne combien d\'éléments elle a. Affiche len(Bag([1, 2, 3])) (3).'],
          h: ['__init__ keeps the list on self. __len__ gives back the length of that list.', '__init__ tiene la lista su self. __len__ restituisce la lunghezza di quella lista.', '__init__ garde la liste sur self. __len__ rend la longueur de cette liste.'],
          sol: 'class Bag:\n    def __init__(self, items):\n        self.items = list(items)\n\n    def __len__(self):\n        return len(self.items)\n\nprint(len(Bag([1, 2, 3])))', out: '3', c: '__len__'
        }
      },
      {
        c: c`class Version:
    def __init__(self, text):
        self.parts = tuple([int(n) for n in text.split(".")])

    def __lt__(self, other):
        return self.parts < other.parts

    def __repr__(self):
        return "Version(" + ".".join(map(str, self.parts)) + ")"

versions = [Version("1.10"), Version("1.2"), Version("2.0")]
print(sorted(versions))
print(max(versions))
print(Version("1.2") < Version("1.10"))`,
        t: ['Compare and sort objects', 'Confronta e ordina gli oggetti', 'Compare et trie des objets'],
        x: [`__lt__ says what "smaller than" means for your objects. Once you have it, sorted and max work on them, and so does <.

Versions are a good example: "1.10" comes after "1.2", even though as texts it would come before. Comparing the numbers in a tuple does it right.`,
          `__lt__ dice cosa vuol dire "più piccolo di" per i tuoi oggetti. Una volta che ce l'hai, sorted e max funzionano su di loro, e anche <.

Le versioni sono un buon esempio: "1.10" viene dopo "1.2", anche se come testi verrebbe prima. Confrontare i numeri in una tupla lo fa giusto.`,
          `__lt__ dit ce que veut dire "plus petit que" pour tes objets. Une fois que tu l'as, sorted et max marchent dessus, et < aussi.

Les versions sont un bon exemple : "1.10" vient après "1.2", même si comme textes il viendrait avant. Comparer les nombres dans un tuple le fait bien.`],
        ex: {
          t: ['Make a class Money with an amount, and a __lt__ that compares the amounts. Show the smallest of Money(5), Money(2), Money(9) with min, as its amount (2).', 'Crea una classe Money con un amount e un __lt__ che confronta gli amount. Mostra il più piccolo tra Money(5), Money(2), Money(9) con min, come amount (2).', 'Crée une classe Money avec un amount et un __lt__ qui compare les amount. Affiche le plus petit de Money(5), Money(2), Money(9) avec min, comme amount (2).'],
          h: ['__lt__ answers "is self smaller than other?" by comparing the two amounts. min uses it: show the amount of what min gives back.', '__lt__ risponde a "self è più piccolo di other?" confrontando i due importi. min lo usa: mostra l\'importo di quello che min restituisce.', '__lt__ répond à "self est-il plus petit que other ?" en comparant les deux montants. min l\'utilise : affiche le montant de ce que min rend.'],
          sol: 'class Money:\n    def __init__(self, amount):\n        self.amount = amount\n\n    def __lt__(self, other):\n        return self.amount < other.amount\n\nprint(min(Money(5), Money(2), Money(9)).amount)', out: '2', c: '__lt__'
        }
      },
      {
        c: [c`class Greeter:
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

print(bool(Temperature(5)), bool(Temperature(-1)))`, c`class Greeter:
    def __init__(self, greeting):
        self.greeting = greeting

    def __call__(self, name):
        return f"{self.greeting}, {name}!"

hello = Greeter("Ciao")
print(hello("Ada"))
print(callable(hello))

class Temperature:
    def __init__(self, degrees):
        self.degrees = degrees

    def __bool__(self):
        return self.degrees > 0

print(bool(Temperature(5)), bool(Temperature(-1)))`, c`class Greeter:
    def __init__(self, greeting):
        self.greeting = greeting

    def __call__(self, name):
        return f"{self.greeting}, {name} !"

hello = Greeter("Bonjour")
print(hello("Ada"))
print(callable(hello))

class Temperature:
    def __init__(self, degrees):
        self.degrees = degrees

    def __bool__(self):
        return self.degrees > 0

print(bool(Temperature(5)), bool(Temperature(-1)))`],
        t: ['Even more special methods', 'Ancora più metodi speciali', 'Encore plus de méthodes spéciales'],
        x: [`__call__ lets an object be used like a function: hello("Ada"). __bool__ says when the object counts as True or False, for example in an if.

There are dozens of special methods, and you can always look one up when you need it. They all follow the same idea: you teach your objects to behave like Python things.`,
          `__call__ permette di usare un oggetto come una funzione: hello("Ada"). __bool__ dice quando l'oggetto conta come True o False, per esempio in un if.

Ci sono decine di metodi speciali, e puoi sempre cercarne uno quando ti serve. Seguono tutti la stessa idea: insegni ai tuoi oggetti a comportarsi come le cose di Python.`,
          `__call__ permet d'utiliser un objet comme une fonction : hello("Ada"). __bool__ dit quand l'objet compte comme True ou False, par exemple dans un if.

Il y a des dizaines de méthodes spéciales, et tu peux toujours en chercher une quand tu en as besoin. Elles suivent toutes la même idée : tu apprends à tes objets à se comporter comme des choses de Python.`],
        ex: {
          t: ['Make a class Adder whose objects can be called: Adder(10)(5) must give 15 (add the number given at the start).', 'Crea una classe Adder i cui oggetti si possono chiamare: Adder(10)(5) deve dare 15 (somma il numero dato all\'inizio).', 'Crée une classe Adder dont les objets peuvent être appelés : Adder(10)(5) doit donner 15 (ajoute le nombre donné au début).'],
          h: ['__init__ keeps the first number on self. __call__ gets the second one and gives back their sum.', '__init__ tiene il primo numero su self. __call__ riceve il secondo e restituisce la loro somma.', '__init__ garde le premier nombre sur self. __call__ reçoit le second et rend leur somme.'],
          sol: 'class Adder:\n    def __init__(self, n):\n        self.n = n\n\n    def __call__(self, x):\n        return self.n + x\n\nprint(Adder(10)(5))', out: '15', c: '__call__'
        }
      },
      {
        c: c`class Money:
    def __init__(self, euros):
        self.euros = euros

    def __add__(self, other):
        return Money(self.euros + other.euros)

    def __str__(self):
        return f"{self.euros} euro"

print(Money(3) + Money(4))`,
        t: ['Challenge: a point that prints well', 'Sfida: un punto che si stampa bene', 'Défi : un point qui s\'affiche bien'],
        x: ['__add__ says what + does with two Money objects, and __str__ says what print shows. With them, your objects work with the signs and functions of Python.', '__add__ dice cosa fa + con due oggetti Money, e __str__ dice cosa mostra print. Con questi, i tuoi oggetti funzionano con i segni e le funzioni di Python.', '__add__ dit ce que fait + avec deux objets Money, et __str__ dit ce qu\'affiche print. Avec elles, tes objets marchent avec les signes et les fonctions de Python.'],
        ex: {
          t: ['Give the class Point a __str__, so that print(Point(2, 3)) shows (2, 3).', 'Dai alla classe Point un __str__, così print(Point(2, 3)) mostra (2, 3).', 'Donne à la classe Point un __str__, pour que print(Point(2, 3)) affiche (2, 3).'],
          h: ['__str__ gives back a text: an f-string with the x and the y of self, a comma and a space between them, in round brackets.', '__str__ restituisce un testo: una f-string con la x e la y di self, una virgola e uno spazio in mezzo, tra parentesi tonde.', '__str__ rend un texte : une f-string avec le x et le y de self, une virgule et un espace entre eux, entre parenthèses.'],
          start: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nprint(Point(2, 3))',
          sol: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __str__(self):\n        return f"({self.x}, {self.y})"\n\nprint(Point(2, 3))',
          out: '(2, 3)', uses: ['def'], c: 'def\\s+__str__'
        }
      }
    ]
  },
  {
    title: ['Guarding data', 'Proteggere i dati', 'Protéger les données'],
    subtitle: ['Properties, class methods and static methods', 'Proprietà, metodi di classe e metodi statici', 'Propriétés, méthodes de classe et méthodes statiques'],
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
        n: ['decorator', 'property'],
        t: ['A value worked out when asked: @property', 'Un valore calcolato quando lo chiedi: @property', 'Une valeur calculée quand on la demande : @property'],
        x: [`A line that starts with @, right above a def, is called a decorator: it changes how that method works. You will learn to make your own later. @property turns a method into something that looks like a plain value: you write c.diameter, with no brackets, and Python runs the method.

It is perfect for values that depend on others: when the radius changes, the diameter and the area follow by themselves.`,
          `Una riga che inizia con @, subito sopra a un def, si chiama decoratore: cambia come funziona quel metodo. Imparerai a fare i tuoi più avanti. @property trasforma un metodo in qualcosa che sembra un valore semplice: scrivi c.diameter, senza parentesi, e Python esegue il metodo.

È perfetto per i valori che dipendono da altri: quando il raggio cambia, il diametro e l'area lo seguono da soli.`,
          `Une ligne qui commence par @, juste au-dessus d'un def, s'appelle un décorateur : elle change le fonctionnement de cette méthode. Tu apprendras à faire les tiens plus tard. @property transforme une méthode en quelque chose qui ressemble à une simple valeur : tu écris c.diameter, sans parenthèses, et Python lance la méthode.

C'est parfait pour des valeurs qui dépendent d'autres : quand le rayon change, le diamètre et l'aire suivent tout seuls.`],
        ex: {
          t: ['Add a property called double to the class Number that gives self.value * 2. Show Number(21).double (42, no brackets).', 'Aggiungi una proprietà che si chiama double alla classe Number che dà self.value * 2. Mostra Number(21).double (42, senza parentesi).', 'Ajoute une propriété qui s\'appelle double à la classe Number qui donne self.value * 2. Affiche Number(21).double (42, sans parenthèses).'],
          h: ['A property is a method with @property on the line just above it. It gives back the value times 2.', 'Una proprietà è un metodo con @property sulla riga subito sopra. Restituisce il valore per 2.', 'Une propriété est une méthode avec @property sur la ligne juste au-dessus. Elle rend la valeur fois 2.'],
          start: 'class Number:\n    def __init__(self, value):\n        self.value = value', sol: 'class Number:\n    def __init__(self, value):\n        self.value = value\n\n    @property\n    def double(self):\n        return self.value * 2\n\nprint(Number(21).double)', out: '42', c: '@property'
        }
      },
      {
        c: [c`class Person:
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
print(p.age)`, c`class Person:
    def __init__(self, age):
        self.age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("l'età non può essere negativa")
        self._age = value

p = Person(12)
p.age = 13
print(p.age)
try:
    p.age = -5
except ValueError as error:
    print("Rifiutato:", error)
print(p.age)`, c`class Person:
    def __init__(self, age):
        self.age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("l'âge ne peut pas être négatif")
        self._age = value

p = Person(12)
p.age = 13
print(p.age)
try:
    p.age = -5
except ValueError as error:
    print("Refusé :", error)
print(p.age)`],
        t: ['A guard at the door: setters', 'Una guardia alla porta: i setter', 'Un gardien à la porte : les setters'],
        x: [`A property can also have a setter, written @age.setter, which runs when someone gives the property a value. It can check the value before keeping it.

The real value is kept under a name with an underscore, _age. By custom, that underscore means "this is private, please use the property instead".`,
          `Una proprietà può avere anche un setter, scritto @age.setter, che gira quando qualcuno le dà un valore. Può controllare il valore prima di tenerlo.

Il valore vero viene tenuto sotto un nome con il trattino basso, _age. Per convenzione, quel trattino basso vuol dire "questo è privato, per favore usa la proprietà".`,
          `Une propriété peut aussi avoir un setter, écrit @age.setter, qui tourne quand quelqu'un lui donne une valeur. Il peut vérifier la valeur avant de la garder.

La vraie valeur est gardée sous un nom avec un tiret bas, _age. Par convention, ce tiret bas veut dire "ceci est privé, merci d'utiliser la propriété".`],
        ex: {
          t: ['Make a class Score with a property points whose setter refuses a value above 100 (raise ValueError). Setting 50 must work: show the points (50).', 'Crea una classe Score con una proprietà points il cui setter rifiuta un valore sopra 100 (alza ValueError). Impostare 50 deve funzionare: mostra i punti (50).', 'Crée une classe Score avec une propriété points dont le setter refuse une valeur au-dessus de 100 (lève ValueError). Mettre 50 doit marcher : affiche les points (50).'],
          h: ['First the property points, which gives back what is kept. Then a second def points with @points.setter above it: it raises ValueError when the value is above 100, and otherwise keeps it.', 'Prima la proprietà points, che restituisce quello che è tenuto. Poi un secondo def points con @points.setter sopra: solleva ValueError quando il valore è sopra 100, e altrimenti lo tiene.', 'D\'abord la propriété points, qui rend ce qui est gardé. Puis un second def points avec @points.setter au-dessus : il lève ValueError quand la valeur dépasse 100, et sinon la garde.'],
          sol: 'class Score:\n    def __init__(self):\n        self._points = 0\n\n    @property\n    def points(self):\n        return self._points\n\n    @points.setter\n    def points(self, value):\n        if value > 100:\n            raise ValueError("too many")\n        self._points = value\n\ns = Score()\ns.points = 50\nprint(s.points)', out: '50', c: 'setter'
        }
      },
      {
        c: c`class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

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
        n: ['classmethod'],
        t: ['Methods of the class itself', 'Metodi della classe stessa', 'Méthodes de la classe elle-même'],
        x: [`@classmethod gets the class (cls) instead of an object. It is a good second way to make objects: Date.from_text("2026-10-20") builds a Date from a text.

@staticmethod gets nothing special: it is just a function that lives inside the class because it belongs to the topic.`,
          `@classmethod riceve la classe (cls) invece di un oggetto. È un buon secondo modo di creare oggetti: Date.from_text("2026-10-20") costruisce una Date da un testo.

@staticmethod non riceve niente di speciale: è solo una funzione che vive dentro la classe perché appartiene all'argomento.`,
          `@classmethod reçoit la classe (cls) au lieu d'un objet. C'est une bonne deuxième façon de créer des objets : Date.from_text("2026-10-20") construit une Date à partir d'un texte.

@staticmethod ne reçoit rien de spécial : c'est juste une fonction qui vit dans la classe parce qu'elle appartient au sujet.`],
        ex: {
          t: ['Add a class method from_pair to Point that builds a Point from a text like "3,4". Show the x of Point.from_pair("3,4") (3).', 'Aggiungi a Point un metodo di classe from_pair che costruisce un Point da un testo come "3,4". Mostra la x di Point.from_pair("3,4") (3).', 'Ajoute à Point une méthode de classe from_pair qui construit un Point à partir d\'un texte comme "3,4". Affiche le x de Point.from_pair("3,4") (3).'],
          h: ['@classmethod above a def that gets cls and the text. split cuts the text at the comma, int makes numbers, and cls(...) builds the Point.', '@classmethod sopra un def che riceve cls e il testo. split taglia il testo alla virgola, int fa i numeri, e cls(...) costruisce il Point.', '@classmethod au-dessus d\'un def qui reçoit cls et le texte. split coupe le texte à la virgule, int fait les nombres, et cls(...) construit le Point.'],
          start: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y', sol: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    @classmethod\n    def from_pair(cls, text):\n        x, y = text.split(",")\n        return cls(int(x), int(y))\n\nprint(Point.from_pair("3,4").x)', out: '3', c: '@classmethod'
        }
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
        n: ['private'],
        t: ['What "private" means in Python', 'Cosa vuol dire "privato" in Python', 'Ce que veut dire "privé" en Python'],
        x: [`Python trusts people. One underscore, like _careful, is a polite note: "this is for the class itself, please do not touch". Python does not stop you.

Two underscores, like __secret, make Python rename it to _Safe__secret, to avoid accidents. It is still not a real lock: it is just harder to touch by mistake.`,
          `Python si fida delle persone. Un trattino basso, come in _careful, è una nota gentile: "questo è per la classe stessa, per favore non toccare". Python non ti ferma.

Due trattini bassi, come in __secret, fanno sì che Python lo rinomini _Safe__secret, per evitare incidenti. Non è comunque un vero lucchetto: è solo più difficile toccarlo per sbaglio.`,
          `Python fait confiance aux gens. Un tiret bas, comme dans _careful, est une note polie : "ceci est pour la classe elle-même, merci de ne pas toucher". Python ne t'arrête pas.

Deux tirets bas, comme dans __secret, font que Python le renomme _Safe__secret, pour éviter les accidents. Ce n'est quand même pas un vrai cadenas : c'est seulement plus difficile à toucher par erreur.`],
        ex: {
          t: ['Make a class Wallet that keeps its money in _money (one underscore), with a method show() that returns it. Show Wallet().show() when the money is 20.', 'Crea una classe Wallet che tiene i suoi soldi in _money (un trattino basso), con un metodo show() che li restituisce. Mostra Wallet().show() quando i soldi sono 20.', 'Crée une classe Wallet qui garde son argent dans _money (un tiret bas), avec une méthode show() qui le rend. Affiche Wallet().show() quand l\'argent vaut 20.'],
          h: ['__init__ puts 20 in the name with one underscore, on self; show gives it back.', '__init__ mette 20 nel nome con un trattino basso, su self; show lo restituisce.', '__init__ met 20 dans le nom avec un tiret bas, sur self ; show le rend.'],
          sol: 'class Wallet:\n    def __init__(self):\n        self._money = 20\n\n    def show(self):\n        return self._money\n\nprint(Wallet().show())', out: '20', c: '_money'
        }
      }
    ]
  },
  {
    title: ['Less typing: dataclasses and enums', 'Meno da scrivere: dataclass ed enum', 'Moins à taper : dataclasses et enums'],
    subtitle: ['Classes for plain data, and a list of choices', 'Classi per i dati semplici, e una lista di scelte', 'Des classes pour des données simples, et une liste de choix'],
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
        n: ['dataclasses.dataclass', 'annotation'],
        t: ['A class in four lines', 'Una classe in quattro righe', 'Une classe en quatre lignes'],
        x: [`A class that only keeps data needs a lot of boring code: __init__, __repr__, __eq__. The decorator @dataclass writes all of it for you, from a list of names with their kinds: title: str.

A value after = is a default. The kinds, like str and int, are notes for the reader: Python does not check them while running.`,
          `Una classe che tiene solo dati ha bisogno di molto codice noioso: __init__, __repr__, __eq__. Il decoratore @dataclass scrive tutto per te, da una lista di nomi con i loro tipi: title: str.

Un valore dopo = è un valore predefinito. I tipi, come str e int, sono note per chi legge: Python non li controlla mentre gira.`,
          `Une classe qui ne garde que des données demande beaucoup de code ennuyeux : __init__, __repr__, __eq__. Le décorateur @dataclass écrit tout pour toi, à partir d'une liste de noms avec leur sorte : title: str.

Une valeur après = est une valeur par défaut. Les sortes, comme str et int, sont des notes pour celui qui lit : Python ne les vérifie pas pendant qu'il tourne.`],
        ex: {
          t: ['Make a dataclass called Pet with the name (str) and the age (int). Show Pet("Rex", 3).', 'Crea una dataclass che si chiama Pet con il nome (str) e l\'età (int). Mostra Pet("Rex", 3).', 'Crée une dataclass qui s\'appelle Pet avec le nom (str) et l\'âge (int). Affiche Pet("Rex", 3).'],
          h: ['Bring in dataclass, put @dataclass above the class, and inside it write one line for each field: its name, a colon and its kind.', 'Porta dentro dataclass, metti @dataclass sopra la classe, e dentro scrivi una riga per ogni campo: il nome, i due punti e il tipo.', 'Fais entrer dataclass, mets @dataclass au-dessus de la classe, et dedans écris une ligne pour chaque champ : son nom, deux-points et son type.'],
          sol: 'from dataclasses import dataclass\n\n@dataclass\nclass Pet:\n    name: str\n    age: int\n\nprint(Pet("Rex", 3))', out: "Pet(name='Rex', age=3)", c: '@dataclass'
        }
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
        n: ['dataclasses.field', 'dataclasses.replace'],
        t: ['Order, freeze and defaults', 'Ordina, congela e predefiniti', 'Ordre, gel et valeurs par défaut'],
        x: [`@dataclass can take options. order=True makes the objects sortable, and frozen=True makes them impossible to change, like a tuple. replace(obj, name=value) builds a copy with one change.

For a default that is a list, write field(default_factory=list): every object gets its own new empty list, and they do not share one by mistake.`,
          `@dataclass può prendere delle opzioni. order=True rende gli oggetti ordinabili, e frozen=True li rende impossibili da cambiare, come una tupla. replace(oggetto, nome=valore) costruisce una copia con una modifica.

Per un valore predefinito che è una lista, scrivi field(default_factory=list): ogni oggetto riceve la sua lista vuota nuova, e non ne condividono una per sbaglio.`,
          `@dataclass peut prendre des options. order=True rend les objets triables, et frozen=True les rend impossibles à changer, comme un tuple. replace(objet, nom=valeur) construit une copie avec un changement.

Pour une valeur par défaut qui est une liste, écris field(default_factory=list) : chaque objet reçoit sa propre nouvelle liste vide, et ils n'en partagent pas une par erreur.`],
        ex: {
          t: ['Make a frozen dataclass Point with x and y (ints). Show replace(Point(1, 2), y=9).', 'Crea una dataclass congelata Point con x e y (interi). Mostra replace(Point(1, 2), y=9).', 'Crée une dataclass gelée Point avec x et y (entiers). Affiche replace(Point(1, 2), y=9).'],
          h: ['frozen=True goes in the brackets of @dataclass. replace builds a copy with one field changed: show it.', 'frozen=True va tra le parentesi di @dataclass. replace costruisce una copia con un campo cambiato: mostrala.', 'frozen=True va entre les parenthèses de @dataclass. replace construit une copie avec un champ changé : affiche-la.'],
          sol: 'from dataclasses import dataclass, replace\n\n@dataclass(frozen=True)\nclass Point:\n    x: int\n    y: int\n\nprint(replace(Point(1, 2), y=9))', out: 'Point(x=1, y=9)', c: 'frozen=True'
        }
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
for item in Colour:
    print(item.name, item.value)`,
        n: ['enum.Enum'],
        t: ['A fixed list of choices: Enum', 'Una lista fissa di scelte: Enum', 'Une liste fixe de choix : Enum'],
        x: [`An Enum is a short list of named choices. Instead of numbers like 1, 2, 3, or texts like "red" that are easy to mistype, you use Colour.RED.

Each choice has a name and a value, and you can walk through all of them with a for loop. Colour(2) finds the choice that has the value 2.`,
          `Un Enum è una breve lista di scelte con un nome. Invece di numeri come 1, 2, 3, o di testi come "red" facili da sbagliare, usi Colour.RED.

Ogni scelta ha un nome e un valore, e le puoi scorrere tutte con un ciclo for. Colour(2) trova la scelta che ha il valore 2.`,
          `Un Enum est une courte liste de choix nommés. Au lieu de nombres comme 1, 2, 3, ou de textes comme "red" faciles à mal écrire, tu utilises Colour.RED.

Chaque choix a un nom et une valeur, et tu peux tous les parcourir avec une boucle for. Colour(2) trouve le choix qui a la valeur 2.`],
        ex: {
          t: ['Make an Enum called Size with SMALL = 1 and LARGE = 2. Show the name of Size(2) (LARGE).', 'Crea un Enum che si chiama Size con SMALL = 1 e LARGE = 2. Mostra il nome di Size(2) (LARGE).', 'Crée un Enum qui s\'appelle Size avec SMALL = 1 et LARGE = 2. Affiche le nom de Size(2) (LARGE).'],
          h: ['An Enum is a class with Enum in its brackets and one line for each choice. Size(2) finds the choice whose value is 2; .name gives its name.', 'Un Enum è una classe con Enum tra le parentesi e una riga per ogni scelta. Size(2) trova la scelta con il valore 2; .name dà il suo nome.', 'Un Enum est une classe avec Enum entre ses parenthèses et une ligne pour chaque choix. Size(2) trouve le choix dont la valeur est 2 ; .name donne son nom.'],
          sol: 'from enum import Enum\n\nclass Size(Enum):\n    SMALL = 1\n    LARGE = 2\n\nprint(Size(2).name)', out: 'LARGE', c: 'Enum'
        }
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
for step in range(3):
    print(t.state.name)
    t.advance()
print(t.state)`,
        n: ['enum.auto'],
        t: ['Enums in a program', 'Gli enum in un programma', 'Les enums dans un programme'],
        x: [`auto() gives each name a number by itself, so you do not have to count. An Enum is the right tool for a state: a task is idle, running or done, and nothing else.

Compare enum choices with is, because each choice exists only once. A mistyped choice, like State.DOEN, stops with an error instead of silently doing the wrong thing.`,
          `auto() dà a ogni nome un numero da solo, così non devi contare tu. Un Enum è lo strumento giusto per uno stato: un compito è fermo, in corso o finito, e nient'altro.

Confronta le scelte di un enum con is, perché ogni scelta esiste una volta sola. Una scelta scritta male, come State.DOEN, si ferma con un errore invece di fare in silenzio la cosa sbagliata.`,
          `auto() donne à chaque nom un nombre tout seul, donc tu n'as pas à compter. Un Enum est le bon outil pour un état : une tâche est au repos, en cours ou finie, et rien d'autre.

Compare les choix d'un enum avec is, parce que chaque choix n'existe qu'une fois. Un choix mal écrit, comme State.DOEN, s'arrête avec une erreur au lieu de faire silencieusement la mauvaise chose.`],
        ex: {
          t: ['Add a fourth state, FAILED, to the enum, and show the name of State.FAILED (FAILED).', 'Aggiungi un quarto stato, FAILED, all\'enum e mostra il nome di State.FAILED (FAILED).', 'Ajoute un quatrième état, FAILED, à l\'enum et affiche le nom de State.FAILED (FAILED).'],
          h: ['Add one line inside the class, like the others, with auto().', 'Aggiungi una riga dentro la classe, come le altre, con auto().', 'Ajoute une ligne dans la classe, comme les autres, avec auto().'],
          start: 'from enum import Enum, auto\n\nclass State(Enum):\n    IDLE = auto()\n    RUNNING = auto()\n    DONE = auto()', sol: 'from enum import Enum, auto\n\nclass State(Enum):\n    IDLE = auto()\n    RUNNING = auto()\n    DONE = auto()\n    FAILED = auto()\n\nprint(State.FAILED.name)', out: 'FAILED', c: 'FAILED = auto'
        }
      },
      {
        c: c`from dataclasses import dataclass

@dataclass
class Book:
    title: str
    pages: int

book = Book("Kim", 300)
print(book)
print(book.pages > 200)`,
        t: ['Challenge: a player in two lines', 'Sfida: un giocatore in due righe', 'Défi : un joueur en deux lignes'],
        x: ['@dataclass writes __init__, a readable print and == for you: you only list the fields and their kinds.', '@dataclass scrive per te __init__, una stampa leggibile e ==: tu elenchi solo i campi e i loro tipi.', '@dataclass écrit pour toi __init__, un affichage lisible et == : tu listes seulement les champs et leurs genres.'],
        ex: {
          t: ['Make a dataclass Player with a name (str) and a score (int). Show Player("Ada", 10).', 'Fai una dataclass Player con un name (str) e uno score (int). Mostra Player("Ada", 10).', 'Fais une dataclass Player avec un name (str) et un score (int). Affiche Player("Ada", 10).'],
          h: ['from dataclasses import dataclass, then @dataclass above the class, and one line per field.', 'from dataclasses import dataclass, poi @dataclass sopra la classe, e una riga per campo.', 'from dataclasses import dataclass, puis @dataclass au-dessus de la classe, et une ligne par champ.'],
          start: '',
          sol: 'from dataclasses import dataclass\n\n@dataclass\nclass Player:\n    name: str\n    score: int\n\nprint(Player("Ada", 10))',
          out: "Player(name='Ada', score=10)", uses: ['class'], c: '@dataclass'
        }
      }
    ]
  }
];
