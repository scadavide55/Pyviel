// Stage 6 · A tour of the standard library, testing and good programs. See tools/build-course.js for the format.
const c = String.raw;

module.exports = [
  {
    title: ['A tour of the standard library', 'Un giro nella libreria standard', 'Un tour de la bibliothèque standard'],
    subtitle: ['collections, itertools, functools and more', 'collections, itertools, functools e altro', 'collections, itertools, functools et plus'],
    steps: [
      {
        c: c`from collections import Counter
counts = Counter("mississippi")
print(counts)
print(counts["s"])
print(counts.most_common(2))`,
        n: ['collections.Counter', '.most_common'],
        t: ['Counting made easy: Counter', 'Contare è facile: Counter', 'Compter facilement : Counter'],
        x: [`Counter counts how many times each item appears, in one line. It is a kind of dictionary: counts["s"] gives how many s there are. most_common(2) gives the two most frequent items, with their counts.

Remember the word-counting loop from the dictionary lesson? Counter replaces it.`,
          `Counter conta quante volte compare ogni elemento, in una riga. È una specie di dizionario: counts["s"] dà quante s ci sono. most_common(2) dà i due elementi più frequenti, con i loro conteggi.

Ricordi il ciclo per contare le parole della lezione sui dizionari? Counter lo sostituisce.`,
          `Counter compte combien de fois chaque élément apparaît, en une ligne. C'est une sorte de dictionnaire : counts["s"] donne combien de s il y a. most_common(2) donne les deux éléments les plus fréquents, avec leurs comptes.

Tu te souviens de la boucle pour compter les mots dans la leçon sur les dictionnaires ? Counter la remplace.`],
        ex: {
          t: ['Count the letters of "banana" with Counter and show how many a there are (3).', 'Conta le lettere di "banana" con Counter e mostra quante a ci sono (3).', 'Compte les lettres de "banana" avec Counter et affiche combien de a il y a (3).'],
          h: ['Counter counts every letter of a text; read the count of one letter with square brackets.', 'Counter conta ogni lettera di un testo; leggi il conto di una lettera con le parentesi quadre.', 'Counter compte chaque lettre d\'un texte ; lis le compte d\'une lettre avec des crochets.'],
          sol: 'from collections import Counter\nprint(Counter("banana")["a"])', out: '3', c: 'Counter'
        }
      },
      {
        c: c`from collections import defaultdict
groups = defaultdict(list)
for word in ["ant", "bee", "ape", "bat"]:
    groups[word[0]].append(word)
print(groups["a"])
print(groups["b"])
print(len(groups))`,
        n: ['collections.defaultdict'],
        t: ['A dictionary that starts empty by itself', 'Un dizionario che parte vuoto da solo', 'Un dictionnaire qui démarre vide tout seul'],
        x: [`With a normal dictionary, a missing key is an error, so you have to check first. defaultdict(list) makes a missing key start with an empty list by itself: groups[word[0]].append(word) just works.

Here it groups the words by their first letter, with no checks at all.`,
          `Con un dizionario normale, una chiave mancante è un errore, quindi devi controllare prima. defaultdict(list) fa partire una chiave mancante con una lista vuota da solo: groups[word[0]].append(word) funziona e basta.

Qui raggruppa le parole per la loro prima lettera, senza nessun controllo.`,
          `Avec un dictionnaire normal, une clé manquante est une erreur, donc tu dois vérifier d'abord. defaultdict(list) fait démarrer une clé manquante avec une liste vide tout seul : groups[word[0]].append(word) marche tout simplement.

Ici il regroupe les mots par leur première lettre, sans aucune vérification.`],
        ex: {
          t: ['Group the numbers 1 to 6 by whether they are even or odd: the key is n % 2. Show the list of the key 0 ([2, 4, 6]).', 'Raggruppa i numeri da 1 a 6 in pari o dispari: la chiave è n % 2. Mostra la lista della chiave 0 ([2, 4, 6]).', 'Regroupe les nombres de 1 à 6 en pairs ou impairs : la clé est n % 2. Affiche la liste de la clé 0 ([2, 4, 6]).'],
          h: ['A defaultdict(list) makes an empty list the first time a key is used. For each number, append it to the list of its key.', 'Un defaultdict(list) crea una lista vuota la prima volta che si usa una chiave. Per ogni numero, aggiungilo con append alla lista della sua chiave.', 'Un defaultdict(list) crée une liste vide la première fois qu\'une clé est utilisée. Pour chaque nombre, ajoute-le avec append à la liste de sa clé.'],
          sol: 'from collections import defaultdict\ngroups = defaultdict(list)\nfor n in range(1, 7):\n    groups[n % 2].append(n)\nprint(groups[0])', out: '[2, 4, 6]', c: 'defaultdict'
        }
      },
      {
        c: c`from collections import deque
queue = deque([1, 2, 3])
queue.append(4)
print(queue.popleft())
print(list(queue))`,
        n: ['collections.deque', '.popleft'],
        t: ['A queue that is fast at both ends', 'Una coda veloce a tutte e due le estremità', 'Une file rapide aux deux bouts'],
        x: [`A deque is a row that is fast at both ends: you add at the end with append and take from the front with popleft. It is perfect for a queue, where the first to come is the first to leave.

A normal list is slow at the front, because everything has to move over. A deque is not.`,
          `Una deque è una fila veloce a tutte e due le estremità: aggiungi in fondo con append e prendi davanti con popleft. È perfetta per una coda, dove il primo ad arrivare è il primo ad andarsene.

Una lista normale è lenta davanti, perché tutto deve spostarsi. Una deque no.`,
          `Une deque est une rangée rapide aux deux bouts : tu ajoutes à la fin avec append et tu prends devant avec popleft. C'est parfait pour une file d'attente, où le premier arrivé est le premier parti.

Une liste normale est lente devant, parce que tout doit se décaler. Une deque non.`],
        ex: {
          t: ['Make a deque with 10, 20, 30, take out the first with popleft, and show what is left as a list ([20, 30]).', 'Fai una deque con 10, 20, 30, togli il primo con popleft e mostra quello che resta come lista ([20, 30]).', 'Fais une deque avec 10, 20, 30, enlève le premier avec popleft et affiche ce qui reste sous forme de liste ([20, 30]).'],
          h: ['popleft takes out the first item. list(...) turns what is left into a list that print can show.', 'popleft toglie il primo elemento. list(...) trasforma quello che resta in una lista che print può mostrare.', 'popleft enlève le premier élément. list(...) transforme ce qui reste en une liste que print peut afficher.'],
          sol: 'from collections import deque\nqueue = deque([10, 20, 30])\nqueue.popleft()\nprint(list(queue))', out: '[20, 30]', c: 'popleft'
        }
      },
      {
        c: c`from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p)
print(p.x + p.y)
print(p[0])`,
        n: ['collections.namedtuple'],
        t: ['A tuple whose parts have names', 'Una tupla le cui parti hanno un nome', 'Un tuple dont les parties ont un nom'],
        x: [`namedtuple makes a tuple whose parts have names: Point = namedtuple("Point", ["x", "y"]). Then p.x and p.y read the parts by name, and p[0] still works by place.

It is a light way to keep a small group of values together, without writing a whole class.`,
          `namedtuple fa una tupla le cui parti hanno un nome: Point = namedtuple("Point", ["x", "y"]). Poi p.x e p.y leggono le parti per nome, e p[0] funziona ancora per posto.

È un modo leggero di tenere insieme un piccolo gruppo di valori, senza scrivere una classe intera.`,
          `namedtuple fait un tuple dont les parties ont un nom : Point = namedtuple("Point", ["x", "y"]). Ensuite p.x et p.y lisent les parties par leur nom, et p[0] marche toujours par place.

C'est une façon légère de garder ensemble un petit groupe de valeurs, sans écrire toute une classe.`],
        ex: {
          t: ['Make a namedtuple called Pet with the parts name and age. Build Pet("Rex", 3) and show its age (3).', 'Fai una namedtuple che si chiama Pet con le parti name e age. Costruisci Pet("Rex", 3) e mostra la sua age (3).', 'Fais un namedtuple qui s\'appelle Pet avec les parties name et age. Construis Pet("Rex", 3) et affiche son age (3).'],
          h: ['namedtuple takes the name of the new kind and the list of its parts. Build a Pet, then read its age with a dot.', 'namedtuple prende il nome del nuovo tipo e la lista delle sue parti. Costruisci un Pet, poi leggi la sua età con un punto.', 'namedtuple prend le nom du nouveau type et la liste de ses parties. Construis un Pet, puis lis son âge avec un point.'],
          sol: 'from collections import namedtuple\nPet = namedtuple("Pet", ["name", "age"])\nprint(Pet("Rex", 3).age)', out: '3', c: 'namedtuple'
        }
      },
      {
        c: c`from itertools import permutations, combinations, product
print(list(permutations("abc", 2)))
print(list(combinations([1, 2, 3, 4], 2)))
print(list(product("ab", [1, 2])))`,
        n: ['itertools.permutations', 'itertools.combinations', 'itertools.product'],
        t: ['Combinations: itertools (1)', 'Combinazioni: itertools (1)', 'Combinaisons : itertools (1)'],
        x: [`itertools has tools to build combinations. permutations gives every order of the items, taking a given number of them. combinations chooses some, where the order does not matter. product gives every pairing of the items of several rows.

They give a lazy result, so you turn it into a list with list(...) to see it.`,
          `itertools ha strumenti per costruire combinazioni. permutations dà ogni ordine degli elementi, prendendone un numero dato. combinations ne sceglie alcuni, dove l'ordine non conta. product dà ogni abbinamento tra gli elementi di più file.

Danno un risultato "pigro", quindi lo trasformi in lista con list(...) per vederlo.`,
          `itertools a des outils pour construire des combinaisons. permutations donne chaque ordre des éléments, en en prenant un nombre donné. combinations en choisit quelques-uns, où l'ordre ne compte pas. product donne chaque association entre les éléments de plusieurs rangées.

Ils donnent un résultat "paresseux", donc tu le transformes en liste avec list(...) pour le voir.`],
        ex: {
          t: ['Show how many ways there are to choose 2 items out of 5, using combinations (10).', 'Mostra in quanti modi si possono scegliere 2 elementi su 5, usando combinations (10).', 'Affiche de combien de façons on peut choisir 2 éléments parmi 5, en utilisant combinations (10).'],
          h: ['combinations gives every pair, one at a time: list collects them, and len counts them.', 'combinations dà ogni coppia, una alla volta: list le raccoglie, e len le conta.', 'combinations donne chaque paire, une à la fois : list les rassemble, et len les compte.'],
          sol: 'from itertools import combinations\nprint(len(list(combinations(range(5), 2))))', out: '10', c: 'combinations'
        }
      },
      {
        c: c`from itertools import chain, islice, count
print(list(chain([1, 2], [3], "xy")))
print(list(islice(count(10), 4)))`,
        n: ['itertools.chain', 'itertools.islice', 'itertools.count'],
        t: ['Combinations: itertools (2)', 'Combinazioni: itertools (2)', 'Combinaisons : itertools (2)'],
        x: [`chain glues several rows into one long row, without making a new list. count counts forever: 10, 11, 12... and never ends, so you cut a piece of it with islice.

islice(count(10), 4) takes the first four numbers of that endless count.`,
          `chain incolla più file in una fila lunga, senza fare una lista nuova. count conta per sempre: 10, 11, 12... e non finisce mai, quindi ne tagli un pezzo con islice.

islice(count(10), 4) prende i primi quattro numeri di quel conteggio infinito.`,
          `chain colle plusieurs rangées en une longue rangée, sans faire de nouvelle liste. count compte pour toujours : 10, 11, 12... sans jamais finir, donc tu en coupes un morceau avec islice.

islice(count(10), 4) prend les quatre premiers nombres de ce compte infini.`],
        ex: {
          t: ['Show the first 5 numbers counted from 100 (100 to 104), with count and islice.', 'Mostra i primi 5 numeri contati da 100 (da 100 a 104), con count e islice.', 'Affiche les 5 premiers nombres comptés à partir de 100 (de 100 à 104), avec count et islice.'],
          h: ['count counts for ever from the number you give it; islice takes only the first few. list shows them.', 'count conta all\'infinito dal numero che gli dai; islice prende solo i primi. list li mostra.', 'count compte sans fin à partir du nombre que tu lui donnes ; islice ne prend que les premiers. list les affiche.'],
          sol: 'from itertools import islice, count\nprint(list(islice(count(100), 5)))', out: '[100, 101, 102, 103, 104]', c: 'islice'
        }
      },
      {
        c: c`from functools import reduce, partial
print(reduce(lambda a, b: a * b, [1, 2, 3, 4]))
power_of_two = partial(pow, 2)
print(power_of_two(10))`,
        n: ['functools.reduce', 'functools.partial'],
        t: ['Clever tools: functools', 'Attrezzi furbi: functools', 'Des outils astucieux : functools'],
        x: [`reduce folds a list into one value, using a function that takes two things: here it multiplies 1 x 2 x 3 x 4.

partial makes a new function from an old one, with some values already filled in: partial(pow, 2) is a function that raises 2 to any power you give it.`,
          `reduce piega una lista in un solo valore, usando una funzione che prende due cose: qui moltiplica 1 x 2 x 3 x 4.

partial fa una funzione nuova da una vecchia, con alcuni valori già riempiti: partial(pow, 2) è una funzione che eleva 2 a qualsiasi potenza le dai.`,
          `reduce replie une liste en une seule valeur, avec une fonction qui prend deux choses : ici il multiplie 1 x 2 x 3 x 4.

partial fait une nouvelle fonction à partir d'une ancienne, avec certaines valeurs déjà remplies : partial(pow, 2) est une fonction qui élève 2 à n'importe quelle puissance que tu lui donnes.`],
        ex: {
          t: ['Use reduce to add up [1, 2, 3, 4, 5] (15).', 'Usa reduce per sommare [1, 2, 3, 4, 5] (15).', 'Utilise reduce pour additionner [1, 2, 3, 4, 5] (15).'],
          h: ['reduce takes a function of two values and a list: it keeps adding the next item to what it has so far.', 'reduce prende una funzione di due valori e una lista: continua ad aggiungere l\'elemento seguente a quello che ha finora.', 'reduce prend une fonction de deux valeurs et une liste : il ajoute à chaque fois l\'élément suivant à ce qu\'il a déjà.'],
          sol: 'from functools import reduce\nprint(reduce(lambda a, b: a + b, [1, 2, 3, 4, 5]))', out: '15', c: 'reduce'
        }
      },
      {
        c: c`import string
print(string.ascii_lowercase)
print(string.digits)
print(string.ascii_lowercase[:5])`,
        n: ['module:string', 'string.ascii_lowercase', 'string.digits'],
        t: ['Text helpers: string', 'Aiuti per il testo: string', 'Aides pour le texte : string'],
        x: [`The string tool box has ready-made lists of letters and digits. string.ascii_lowercase is the text "abcdefghijklmnopqrstuvwxyz", and string.digits is "0123456789". They have no brackets: they are values, not tools.

You can slice them like any text. They are handy for secret codes and for making random passwords.`,
          `La cassetta string ha liste già pronte di lettere e cifre. string.ascii_lowercase è il testo "abcdefghijklmnopqrstuvwxyz" e string.digits è "0123456789". Non hanno parentesi: sono valori, non strumenti.

Le puoi tagliare come qualsiasi testo. Sono comode per i codici segreti e per fare password a caso.`,
          `La boîte string a des listes toutes prêtes de lettres et de chiffres. string.ascii_lowercase est le texte "abcdefghijklmnopqrstuvwxyz", et string.digits est "0123456789". Elles n'ont pas de parenthèses : ce sont des valeurs, pas des outils.

Tu peux les découper comme n'importe quel texte. Elles sont pratiques pour les codes secrets et pour faire des mots de passe au hasard.`],
        ex: {
          t: ['Show the last 3 letters of the alphabet, with string.ascii_lowercase (xyz).', 'Mostra le ultime 3 lettere dell\'alfabeto, con string.ascii_lowercase (xyz).', 'Affiche les 3 dernières lettres de l\'alphabet, avec string.ascii_lowercase (xyz).'],
          h: ['string.ascii_lowercase is the whole alphabet, as a text. A slice that starts with a minus number takes the end.', 'string.ascii_lowercase è tutto l\'alfabeto, come testo. Una fetta che comincia con un numero col meno prende la fine.', 'string.ascii_lowercase est tout l\'alphabet, sous forme de texte. Une tranche qui commence par un nombre avec un moins prend la fin.'],
          sol: 'import string\nprint(string.ascii_lowercase[-3:])', out: 'xyz', c: 'ascii_lowercase'
        }
      },
      {
        c: [c`from textwrap import fill
from pprint import pprint
long_text = "Python is a language that is easy to read and fun to write."
print(fill(long_text, width=24))
data = {"name": "Ada", "scores": [12, 7, 15], "address": {"city": "Rome"}}
pprint(data, width=30)`, c`from textwrap import fill
from pprint import pprint
long_text = "Python è un linguaggio facile da leggere e divertente da scrivere."
print(fill(long_text, width=24))
data = {"name": "Ada", "scores": [12, 7, 15], "address": {"city": "Roma"}}
pprint(data, width=30)`, c`from textwrap import fill
from pprint import pprint
long_text = "Python est un langage facile à lire et amusant à écrire."
print(fill(long_text, width=24))
data = {"name": "Ada", "scores": [12, 7, 15], "address": {"city": "Paris"}}
pprint(data, width=30)`],
        n: ['textwrap.fill', 'pprint.pprint'],
        t: ['Wrap text and print big data', 'Vai a capo e stampa dati grandi', 'Renvoie à la ligne et affiche de grandes données'],
        x: [`fill breaks a long text into lines of a given width, so it fits a column. pprint shows big data over many lines, so it is easy to read: each part of a dictionary or a list gets its own line when it is too long.

This was only a tour: the standard library has tools for almost everything. When you need something, ask yourself "does Python already have it?"`,
          `fill spezza un testo lungo in righe di una larghezza data, così sta in una colonna. pprint mostra dati grandi su più righe, così sono facili da leggere: ogni parte di un dizionario o di una lista ha la sua riga quando è troppo lunga.

Era solo un giro: la libreria standard ha strumenti per quasi tutto. Quando ti serve qualcosa, chiediti "Python ce l'ha già?"`,
          `fill coupe un long texte en lignes d'une largeur donnée, pour qu'il tienne dans une colonne. pprint affiche de grandes données sur plusieurs lignes, pour qu'elles soient faciles à lire : chaque partie d'un dictionnaire ou d'une liste a sa propre ligne quand elle est trop longue.

Ce n'était qu'un tour : la bibliothèque standard a des outils pour presque tout. Quand tu as besoin de quelque chose, demande-toi "Python l'a-t-il déjà ?"`],
        ex: {
          t: ['Break the text "one two three four five six" into lines of at most 10 characters, with fill, and show it.', 'Spezza il testo "one two three four five six" in righe di al massimo 10 caratteri, con fill, e mostralo.', 'Coupe le texte "one two three four five six" en lignes d\'au plus 10 caractères, avec fill, et affiche-le.'],
          h: ['fill takes the text, and width= for the longest line. Show what it gives back.', 'fill prende il testo, e width= per la riga più lunga. Mostra quello che restituisce.', 'fill prend le texte, et width= pour la ligne la plus longue. Affiche ce qu\'il rend.'],
          sol: 'from textwrap import fill\nprint(fill("one two three four five six", width=10))', out: 'one two\nthree four\nfive six', c: 'fill'
        }
      }
    ]
  },
  {
    title: ['Is it right? Testing and debugging', 'È giusto? Test e ricerca degli errori', 'Est-ce juste ? Tests et débogage'],
    subtitle: ['Catch mistakes before they catch you', 'Prendi gli errori prima che prendano te', 'Attrape les erreurs avant qu\'elles ne t\'attrapent'],
    steps: [
      {
        c: [c`def double(n):
    return n * 2

assert double(4) == 8
assert double(0) == 0
assert double(-3) == -6
print("All the checks passed")
assert double(5) == 11, "double(5) should be 10"`, c`def double(n):
    return n * 2

assert double(4) == 8
assert double(0) == 0
assert double(-3) == -6
print("Tutti i controlli sono passati")
assert double(5) == 11, "double(5) dovrebbe essere 10"`, c`def double(n):
    return n * 2

assert double(4) == 8
assert double(0) == 0
assert double(-3) == -6
print("Toutes les vérifications ont réussi")
assert double(5) == 11, "double(5) devrait valoir 10"`],
        e: 'AssertionError',
        n: ['assert'],
        t: ['assert: a promise that must be true', 'assert: una promessa che deve essere vera', 'assert : une promesse qui doit être vraie'],
        x: [`assert checks that something is True. If it is, nothing happens. If it is not, Python stops with an AssertionError, and shows your message if you wrote one after a comma. It is the simplest test: "I promise that double(4) is 8".

Write a few asserts next to your function, with small cases whose answer you know. The last one here is a wrong promise on purpose, so you see the error.`,
          `assert controlla che qualcosa sia True. Se lo è, non succede niente. Se non lo è, Python si ferma con un AssertionError e mostra il tuo messaggio se ne hai scritto uno dopo una virgola. È il test più semplice: "prometto che double(4) fa 8".

Scrivi qualche assert vicino alla tua funzione, con casi piccoli di cui conosci la risposta. L'ultimo qui è una promessa sbagliata apposta, così vedi l'errore.`,
          `assert vérifie que quelque chose est True. Si c'est le cas, il ne se passe rien. Sinon, Python s'arrête avec une AssertionError, et montre ton message si tu en as écrit un après une virgule. C'est le test le plus simple : "je promets que double(4) vaut 8".

Écris quelques assert à côté de ta fonction, avec de petits cas dont tu connais la réponse. Le dernier ici est une promesse fausse exprès, pour que tu voies l'erreur.`],
        ex: {
          uses: ['assert'],
          t: ['Fix the last promise, so it is true, and the program ends without an error.', 'Correggi l\'ultima promessa, così è vera, e il programma finisce senza errori.', 'Corrige la dernière promesse, pour qu\'elle soit vraie, et que le programme finisse sans erreur.'],
          h: ['Work out double(5) yourself. The promise after assert must say what is really true.', 'Calcola tu double(5). La promessa dopo assert deve dire quello che è vero davvero.', 'Calcule toi-même double(5). La promesse après assert doit dire ce qui est vraiment vrai.'],
          start: 'def double(n):\n    return n * 2\n\nassert double(5) == 11, "wrong"\nprint("ok")', sol: 'def double(n):\n    return n * 2\n\nassert double(5) == 10, "wrong"\nprint("ok")', out: 'ok'
        }
      },
      {
        c: c`import unittest

def is_even(n):
    return n % 2 == 0

class TestEven(unittest.TestCase):
    def test_even(self):
        self.assertTrue(is_even(4))

    def test_odd(self):
        self.assertFalse(is_even(7))

    def test_zero(self):
        self.assertEqual(is_even(0), True)

suite = unittest.TestLoader().loadTestsFromTestCase(TestEven)
unittest.TextTestRunner(verbosity=0).run(suite)`,
        r: true,
        s: '...\n----------------------------------------------------------------------\nRan 3 tests in 0.000s\n\nOK',
        many: true,
        n: ['module:unittest', 'unittest.TestCase', '.assertEqual', '.assertTrue', '.assertFalse', 'unittest-run'],
        t: ['A real test tool: unittest', 'Un vero strumento di test: unittest', 'Un vrai outil de test : unittest'],
        x: [`unittest is Python's own testing tool. A test class inherits from unittest.TestCase, and every test is a method whose name starts with test. Inside, assertTrue, assertFalse and assertEqual check things.

The last two lines find the tests of the class and run them, and print a report: a dot for each test that passed, and an F for each that failed. For now, copy those two lines as they are. If a test fails, the report says which one and why.`,
          `unittest è lo strumento di test di Python. Una classe di test eredita da unittest.TestCase, e ogni test è un metodo il cui nome inizia con test. Dentro, assertTrue, assertFalse e assertEqual controllano le cose.

Le ultime due righe trovano i test della classe e li eseguono, e stampano un resoconto: un punto per ogni test passato e una F per ognuno fallito. Per ora copia quelle due righe così come sono. Se un test fallisce, il resoconto dice quale e perché.`,
          `unittest est l'outil de test de Python. Une classe de test hérite de unittest.TestCase, et chaque test est une méthode dont le nom commence par test. Dedans, assertTrue, assertFalse et assertEqual vérifient des choses.

Les deux dernières lignes trouvent les tests de la classe et les lancent, et affichent un rapport : un point pour chaque test réussi et un F pour chaque test échoué. Pour l'instant, copie ces deux lignes telles quelles. Si un test échoue, le rapport dit lequel et pourquoi.`],
        ex: {
          t: ['Add a test called test_ten to the class that checks is_even(10) is True. The report must say it ran 4 tests.', 'Aggiungi alla classe un test che si chiama test_ten che controlla che is_even(10) sia True. Il resoconto deve dire che ha eseguito 4 test.', 'Ajoute à la classe un test qui s\'appelle test_ten qui vérifie que is_even(10) est True. Le rapport doit dire qu\'il a lancé 4 tests.'],
          h: ['Copy the shape of the other tests: a method whose name starts with test_, with self, and an assert inside.', 'Copia la forma degli altri test: un metodo con il nome che inizia per test_, con self, e un assert dentro.', 'Copie la forme des autres tests : une méthode dont le nom commence par test_, avec self, et un assert dedans.'],
          start: 'import unittest\n\ndef is_even(n):\n    return n % 2 == 0\n\nclass TestEven(unittest.TestCase):\n    def test_even(self):\n        self.assertTrue(is_even(4))\n\n    def test_odd(self):\n        self.assertFalse(is_even(7))\n\n    def test_zero(self):\n        self.assertEqual(is_even(0), True)\n\nsuite = unittest.TestLoader().loadTestsFromTestCase(TestEven)\nunittest.TextTestRunner(verbosity=0).run(suite)',
          sol: 'import unittest\n\ndef is_even(n):\n    return n % 2 == 0\n\nclass TestEven(unittest.TestCase):\n    def test_even(self):\n        self.assertTrue(is_even(4))\n\n    def test_odd(self):\n        self.assertFalse(is_even(7))\n\n    def test_zero(self):\n        self.assertEqual(is_even(0), True)\n\n    def test_ten(self):\n        self.assertTrue(is_even(10))\n\nsuite = unittest.TestLoader().loadTestsFromTestCase(TestEven)\nunittest.TextTestRunner(verbosity=0).run(suite)', m: 'Ran 4 tests', c: 'test_ten'
        }
      },
      {
        c: c`def average(numbers):
    total = 0
    for n in numbers:
        total += n
        print("DEBUG: n =", n, "total =", total)
    return total / len(numbers)

print(average([4, 6, 8]))`,
        t: ['Look inside: print debugging', 'Guarda dentro: print per cercare gli errori', 'Regarde dedans : débogage avec print'],
        x: [`When a program gives a wrong answer and no error, add print lines that show what the boxes really hold at each step. Often you see the mistake right away.

Give those prints a clear label, like DEBUG, so you can find them and remove them when you are done.`,
          `Quando un programma dà una risposta sbagliata e nessun errore, aggiungi righe print che mostrano cosa contengono davvero le scatole a ogni passo. Spesso vedi subito lo sbaglio.

Dai a quei print un'etichetta chiara, come DEBUG, così li trovi e li togli quando hai finito.`,
          `Quand un programme donne une mauvaise réponse et aucune erreur, ajoute des lignes print qui montrent ce que contiennent vraiment les boîtes à chaque étape. Souvent tu vois l'erreur tout de suite.

Donne à ces print une étiquette claire, comme DEBUG, pour pouvoir les retrouver et les enlever quand tu as fini.`],
        ex: {
          uses: ['def', 'for'],
          t: ['The function sum_to is meant to add 1 to n but has a mistake: sum_to(3) shows 3 instead of 6. Find the mistake in the loop and fix it, so that the last line shows 6. Your print lines may stay.', 'La funzione sum_to deve sommare da 1 a n ma ha uno sbaglio: sum_to(3) mostra 3 invece di 6. Trova lo sbaglio nel ciclo e correggilo, così l\'ultima riga mostra 6. I tuoi print possono restare.', 'La fonction sum_to doit additionner de 1 à n mais a une erreur : sum_to(3) affiche 3 au lieu de 6. Trouve l\'erreur dans la boucle et corrige-la, pour que la dernière ligne affiche 6. Tes print peuvent rester.'],
          h: ['Add a print inside the loop to see which numbers i takes. Is n among them?', 'Aggiungi un print dentro il ciclo per vedere quali numeri prende i. C\'è anche n?', 'Ajoute un print dans la boucle pour voir quels nombres prend i. Est-ce que n en fait partie ?'],
          start: 'def sum_to(n):\n    total = 0\n    for i in range(1, n):\n        total += i\n    return total\n\nprint(sum_to(3))', sol: 'def sum_to(n):\n    total = 0\n    for i in range(1, n + 1):\n        total += i\n    return total\n\nprint(sum_to(3))', m: '(^|\\n)6$', uses: ['for']
        }
      },
      {
        c: c`import traceback

def divide(a, b):
    return a / b

try:
    divide(1, 0)
except ZeroDivisionError:
    text = traceback.format_exc()
    print(text.splitlines()[0])
    print(text.splitlines()[-1])
    print(len(text.splitlines()), "lines in the full error")`,
        n: ['module:traceback', 'traceback.format_exc', '.splitlines'],
        t: ['Read the full error with code', 'Leggi l\'errore completo con il codice', 'Lis l\'erreur complète avec du code'],
        x: [`The traceback tool box lets a program get the full error as text: the same text that the View full error button shows. format_exc gives it as one text, and splitlines cuts it into lines.

The first line says "Traceback", the last line says what happened. Real programs use this to write a report of what went wrong, for example into a file.`,
          `La cassetta traceback lascia a un programma ottenere l'errore completo come testo: lo stesso testo che mostra il pulsante View full error. format_exc lo dà come un unico testo, e splitlines lo taglia in righe.

La prima riga dice "Traceback", l'ultima riga dice cos'è successo. I programmi veri lo usano per scrivere un resoconto di cosa è andato storto, per esempio in un file.`,
          `La boîte traceback laisse un programme obtenir l'erreur complète comme texte : le même texte que montre le bouton View full error. format_exc le donne comme un seul texte, et splitlines le coupe en lignes.

La première ligne dit "Traceback", la dernière ligne dit ce qui s'est passé. Les vrais programmes l'utilisent pour écrire un rapport de ce qui a mal tourné, par exemple dans un fichier.`],
        ex: {
          t: ['Catch the error of int("x") and show the last line of its full error (ValueError: invalid literal for int() with base 10: \'x\').', 'Prendi l\'errore di int("x") e mostra l\'ultima riga del suo errore completo.', 'Attrape l\'erreur de int("x") et affiche la dernière ligne de son erreur complète.'],
          h: ['Inside the except, traceback.format_exc() gives the whole error as text. splitlines cuts it into lines; the last line is at place -1.', 'Dentro l\'except, traceback.format_exc() dà tutto l\'errore come testo. splitlines lo taglia in righe; l\'ultima riga è al posto -1.', 'Dans le except, traceback.format_exc() donne toute l\'erreur sous forme de texte. splitlines la coupe en lignes ; la dernière ligne est à la place -1.'],
          sol: 'import traceback\n\ntry:\n    int("x")\nexcept ValueError:\n    print(traceback.format_exc().splitlines()[-1])', m: 'ValueError', c: 'format_exc'
        }
      }
    ]
  },
  {
    title: ['Programs you can be proud of', 'Programmi di cui andare fieri', 'Des programmes dont tu peux être fier'],
    subtitle: ['Structure, style and good habits', 'Struttura, stile e buone abitudini', 'Structure, style et bonnes habitudes'],
    steps: [
      {
        c: [c`def main():
    name = input("Name: ")
    print(greeting(name))

def greeting(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    main()`, c`def main():
    name = input("Nome: ")
    print(greeting(name))

def greeting(name):
    return f"Ciao, {name}!"

if __name__ == "__main__":
    main()`, c`def main():
    name = input("Nom : ")
    print(greeting(name))

def greeting(name):
    return f"Bonjour, {name} !"

if __name__ == "__main__":
    main()`],
        i: ['Ada'],
        n: ['main-guard'],
        t: ['A main() and a start line', 'Un main() e una riga di partenza', 'Un main() et une ligne de départ'],
        x: [`A tidy program puts its work in functions, and has one main() that runs them. The line if __name__ == "__main__": means "run main only if this file is the program itself, not if another program imported it".

You will see this shape in almost every Python program. It lets a file be both a program and a toolbox of functions that others can import safely.`,
          `Un programma ordinato mette il suo lavoro in funzioni e ha un solo main() che le esegue. La riga if __name__ == "__main__": vuol dire "esegui main solo se questo file è il programma stesso, non se lo ha importato un altro programma".

Vedrai questa forma in quasi ogni programma Python. Permette a un file di essere insieme un programma e una cassetta di funzioni che altri possono importare senza rischi.`,
          `Un programme bien rangé met son travail dans des fonctions, et a un seul main() qui les lance. La ligne if __name__ == "__main__": veut dire "lance main seulement si ce fichier est le programme lui-même, pas si un autre programme l'a importé".

Tu verras cette forme dans presque tous les programmes Python. Elle permet à un fichier d'être à la fois un programme et une boîte à outils de fonctions que d'autres peuvent importer sans risque.`],
        ex: {
          t: ['Add a second function bye(name) that returns "Bye, " + name + "!" and make main show it after the greeting. With the name Ada it must show two lines.', 'Aggiungi una seconda funzione bye(name) che restituisce "Bye, " + name + "!" e fai in modo che main la mostri dopo il saluto. Con il nome Ada deve mostrare due righe.', 'Ajoute une deuxième fonction bye(name) qui rend "Bye, " + name + "!" et fais en sorte que main l\'affiche après le salut. Avec le nom Ada il doit afficher deux lignes.'],
          h: ['bye is like greeting: a def that gives back a text. Then main shows what bye gives back, after the greeting.', 'bye è come greeting: un def che restituisce un testo. Poi main mostra quello che bye restituisce, dopo il saluto.', 'bye est comme greeting : un def qui rend un texte. Puis main affiche ce que bye rend, après la salutation.'],
          start: 'def main():\n    name = input("Name: ")\n    print(greeting(name))\n\ndef greeting(name):\n    return f"Hello, {name}!"\n\nif __name__ == "__main__":\n    main()', sol: 'def main():\n    name = input("Name: ")\n    print(greeting(name))\n    print(bye(name))\n\ndef greeting(name):\n    return f"Hello, {name}!"\n\ndef bye(name):\n    return "Bye, " + name + "!"\n\nif __name__ == "__main__":\n    main()', i: ['Ada'], m: 'Hello, Ada!\\nBye, Ada!', c: 'def bye'
        }
      },
      {
        c: c`def area_of_rectangle(width, height):
    """Return the area of a rectangle, in square units."""
    return width * height


MAX_PLAYERS = 4
player_names = ["Ada", "Max"]
total_score = 0

for player_name in player_names:
    total_score += len(player_name)

print(area_of_rectangle(3, 4), MAX_PLAYERS, total_score)`,
        t: ['Names and style', 'Nomi e stile', 'Noms et style'],
        x: [`The community agreed on a style, called PEP 8. Names of variables and functions are in small letters with underscores (player_name, area_of_rectangle). Names of constants, values that never change, are in capitals (MAX_PLAYERS).

Four spaces for each push-in, two empty lines between functions, and a description under each def. Code that follows the style is code that others, and you in a month, can read.`,
          `La comunità si è messa d'accordo su uno stile, chiamato PEP 8. I nomi di variabili e funzioni sono in minuscolo con i trattini bassi (player_name, area_of_rectangle). I nomi delle costanti, valori che non cambiano mai, sono in maiuscolo (MAX_PLAYERS).

Quattro spazi per ogni rientro, due righe vuote tra le funzioni e una descrizione sotto ogni def. Il codice che segue lo stile è codice che gli altri, e tu fra un mese, riescono a leggere.`,
          `La communauté s'est mise d'accord sur un style, appelé PEP 8. Les noms de variables et de fonctions sont en minuscules avec des tirets bas (player_name, area_of_rectangle). Les noms de constantes, des valeurs qui ne changent jamais, sont en majuscules (MAX_PLAYERS).

Quatre espaces pour chaque décalage, deux lignes vides entre les fonctions, et une description sous chaque def. Un code qui suit le style est un code que les autres, et toi dans un mois, peuvent lire.`],
        ex: {
          t: ['Make a constant called MAX_SCORE with the value 100, written the right way, and show it.', 'Fai una costante che si chiama MAX_SCORE con il valore 100, scritta nel modo giusto, e mostrala.', 'Fais une constante qui s\'appelle MAX_SCORE avec la valeur 100, écrite de la bonne façon, et affiche-la.'],
          h: ['Constants are written all in capital letters, with underscores between the words.', 'Le costanti si scrivono tutte in maiuscolo, con i trattini bassi tra le parole.', 'Les constantes s\'écrivent tout en majuscules, avec des tirets bas entre les mots.'],
          sol: 'MAX_SCORE = 100\nprint(MAX_SCORE)', out: '100', c: 'MAX_SCORE'
        }
      },
      {
        c: [c`def ask_number(question, low, high):
    """Ask until the person types a whole number from low to high."""
    while True:
        text = input(question)
        if not text.strip().lstrip("-").isdigit():
            print("Please type a whole number.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"It must be between {low} and {high}.")

age = ask_number("Age (1-120): ", 1, 120)
print("Age saved:", age)`, c`def ask_number(question, low, high):
    """Chiede finché la persona scrive un numero intero da low a high."""
    while True:
        text = input(question)
        if not text.strip().lstrip("-").isdigit():
            print("Scrivi un numero intero.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"Deve essere tra {low} e {high}.")

age = ask_number("Età (1-120): ", 1, 120)
print("Età salvata:", age)`, c`def ask_number(question, low, high):
    """Demande jusqu'à ce que la personne tape un nombre entier de low à high."""
    while True:
        text = input(question)
        if not text.strip().lstrip("-").isdigit():
            print("Tape un nombre entier.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"Il doit être entre {low} et {high}.")

age = ask_number("Âge (1-120) : ", 1, 120)
print("Âge enregistré :", age)`],
        i: ['abc', '500', '30'],
        n: ['.lstrip'],
        t: ['Trust nothing that a person types', 'Non fidarti di niente di quello che scrive una persona', 'Ne fais confiance à rien de ce qu\'une personne tape'],
        x: [`People type surprises: letters instead of numbers, empty lines, huge values. A good program checks everything that comes in. lstrip("-") cuts a minus sign off the start, so that "-5" still counts as a number here, and isdigit checks the rest.

A small helper function that keeps asking until the answer is valid can be used again and again. Writing it once saves you from the same mistakes everywhere.`,
          `Le persone scrivono sorprese: lettere al posto di numeri, righe vuote, valori enormi. Un buon programma controlla tutto quello che arriva. lstrip("-") toglie un segno meno dall'inizio, così "-5" conta ancora come numero qui, e isdigit controlla il resto.

Una piccola funzione che continua a chiedere finché la risposta è valida si può usare ancora e ancora. Scriverla una volta ti salva dagli stessi sbagli ovunque.`,
          `Les gens tapent des surprises : des lettres au lieu de nombres, des lignes vides, des valeurs énormes. Un bon programme vérifie tout ce qui arrive. lstrip("-") coupe un signe moins au début, donc "-5" compte encore comme un nombre ici, et isdigit vérifie le reste.

Une petite fonction qui continue à demander jusqu'à ce que la réponse soit valide peut servir encore et encore. L'écrire une fois te protège des mêmes erreurs partout.`],
        ex: {
          t: ['Use ask_number to ask for a number from 1 to 10, with the answers 0, x and 7. Show the number it gives back: the last line must be only 7.', 'Usa ask_number per chiedere un numero da 1 a 10, con le risposte 0, x e 7. Mostra il numero che restituisce: l\'ultima riga deve essere solo 7.', 'Utilise ask_number pour demander un nombre de 1 à 10, avec les réponses 0, x et 7. Affiche le nombre qu\'elle rend : la dernière ligne doit être seulement 7.'],
          h: ['ask_number takes the question, the lowest and the highest number, and gives back the first good answer. Show it.', 'ask_number prende la domanda, il numero più basso e quello più alto, e restituisce la prima risposta buona. Mostrala.', 'ask_number prend la question, le plus petit et le plus grand nombre, et rend la première bonne réponse. Affiche-la.'],
          start: 'def ask_number(question, low, high):\n    while True:\n        text = input(question)\n        if not text.strip().lstrip("-").isdigit():\n            print("Please type a whole number.")\n            continue\n        number = int(text)\n        if low <= number <= high:\n            return number\n        print("Out of range.")', sol: 'def ask_number(question, low, high):\n    while True:\n        text = input(question)\n        if not text.strip().lstrip("-").isdigit():\n            print("Please type a whole number.")\n            continue\n        number = int(text)\n        if low <= number <= high:\n            return number\n        print("Out of range.")\n\nprint(ask_number("Number: ", 1, 10))', i: ['0', 'x', '7'], m: '(^|\\n)7$', uses: ['ask_number']
        }
      },
      {
        c: c`def find_longest(words: list[str]) -> str | None:
    """Return the longest word, or None for an empty list."""
    if not words:
        return None
    return max(words, key=len)

print(find_longest(["pear", "banana", "fig"]))
print(find_longest([]))
age: int = 12
names: list[str] = ["Ada", "Max"]
print(age, names)`,
        t: ['Type hints', 'I suggerimenti di tipo', 'Les indications de type'],
        x: [`You can write down what kind each parameter and each answer should be: words: list[str] says "a list of texts", and -> str | None says "gives back a text, or None". A name can have its kind too: age: int = 12.

Python does not check them while running, but they tell the reader, and your editor, what is expected. They make a program easier to understand.`,
          `Puoi scrivere di che tipo devono essere ogni parametro e ogni risposta: words: list[str] dice "una lista di testi", e -> str | None dice "restituisce un testo, oppure None". Anche un nome può avere il suo tipo: age: int = 12.

Python non li controlla mentre gira, ma dicono a chi legge, e al tuo editor, cosa ci si aspetta. Rendono un programma più facile da capire.`,
          `Tu peux écrire de quelle sorte doit être chaque paramètre et chaque réponse : words: list[str] dit "une liste de textes", et -> str | None dit "rend un texte, ou None". Un nom peut aussi avoir sa sorte : age: int = 12.

Python ne les vérifie pas pendant qu'il tourne, mais ils disent à celui qui lit, et à ton éditeur, ce qui est attendu. Ils rendent un programme plus facile à comprendre.`],
        ex: {
          t: ['Write a function shout(text: str) -> str that returns the text in capitals. Show shout("hi") (HI).', 'Scrivi una funzione shout(text: str) -> str che restituisce il testo in maiuscolo. Mostra shout("hi") (HI).', 'Écris une fonction shout(text: str) -> str qui rend le texte en majuscules. Affiche shout("hi") (HI).'],
          h: ['After the name of the parameter, a colon and its kind; before the last colon of the def line, -> and the kind given back. Inside, the text in capitals.', 'Dopo il nome del parametro, i due punti e il suo tipo; prima degli ultimi due punti della riga def, -> e il tipo restituito. Dentro, il testo in maiuscolo.', 'Après le nom du paramètre, deux-points et son type ; avant le dernier deux-points de la ligne def, -> et le type rendu. Dedans, le texte en majuscules.'],
          sol: 'def shout(text: str) -> str:\n    return text.upper()\n\nprint(shout("hi"))', out: 'HI', c: '-> str'
        }
      }
    ]
  }
];
