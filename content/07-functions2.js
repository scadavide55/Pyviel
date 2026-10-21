// Stage 3 · Recursion, comprehensions, lambda and a first game. See tools/build-course.js for the format.
const c = String.raw;

module.exports = [
  {
    title: ['A function that calls itself', 'Una funzione che chiama se stessa', 'Une fonction qui s\'appelle elle-même'],
    subtitle: ['Recursion', 'La ricorsione', 'La récursion'],
    steps: [
      {
        c: [c`def countdown(n):
    if n == 0:
        print("Liftoff!")
    else:
        print(n)
        countdown(n - 1)

countdown(3)`, c`def countdown(n):
    if n == 0:
        print("Decollo!")
    else:
        print(n)
        countdown(n - 1)

countdown(3)`, c`def countdown(n):
    if n == 0:
        print("Décollage !")
    else:
        print(n)
        countdown(n - 1)

countdown(3)`],
        t: ['The idea', 'L\'idea', 'L\'idée'],
        x: [`A function may call itself, as long as every call gets closer to an end. This is called recursion.

countdown(3) shows 3 and asks countdown(2) to do the rest, and so on down to 0, where it stops calling. That stopping case is called the base case, and every recursive function needs one.`,
          `Una funzione può chiamare se stessa, purché ogni chiamata si avvicini a una fine. Si chiama ricorsione.

countdown(3) mostra 3 e chiede a countdown(2) di fare il resto, e così via fino a 0, dove smette di chiamare. Quel caso in cui si ferma si chiama caso base, e ogni funzione ricorsiva ne ha bisogno.`,
          `Une fonction peut s'appeler elle-même, tant que chaque appel se rapproche d'une fin. Cela s'appelle la récursion.

countdown(3) affiche 3 et demande à countdown(2) de faire le reste, et ainsi de suite jusqu'à 0, où elle arrête d'appeler. Ce cas d'arrêt s'appelle le cas de base, et chaque fonction récursive en a besoin.`],
        ex: {
          uses: ['def'],
          t: ['Make the countdown start from 5 instead of 3.', 'Fai partire il conto alla rovescia da 5 invece di 3.', 'Fais partir le compte à rebours de 5 au lieu de 3.'],
          h: ['Change only the last line.', 'Cambia solo l\'ultima riga.', 'Change seulement la dernière ligne.'],
          start: [c`def countdown(n):
    if n == 0:
        print("Liftoff!")
    else:
        print(n)
        countdown(n - 1)

countdown(3)`, c`def countdown(n):
    if n == 0:
        print("Decollo!")
    else:
        print(n)
        countdown(n - 1)

countdown(3)`, c`def countdown(n):
    if n == 0:
        print("Décollage !")
    else:
        print(n)
        countdown(n - 1)

countdown(3)`],
          sol: [c`def countdown(n):
    if n == 0:
        print("Liftoff!")
    else:
        print(n)
        countdown(n - 1)

countdown(5)`, c`def countdown(n):
    if n == 0:
        print("Decollo!")
    else:
        print(n)
        countdown(n - 1)

countdown(5)`, c`def countdown(n):
    if n == 0:
        print("Décollage !")
    else:
        print(n)
        countdown(n - 1)

countdown(5)`],
          exact: true
        }
      },
      {
        c: c`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
print(factorial(10))`,
        t: ['Factorial', 'Il fattoriale', 'La factorielle'],
        x: [`5! (five factorial) means 5 x 4 x 3 x 2 x 1. And that is 5 times 4!. So factorial(5) is 5 * factorial(4), which is 5 * 4 * factorial(3), down to factorial(1), which is simply 1.

Each call waits for the answer of the next one, then multiplies.`,
          `5! (cinque fattoriale) vuol dire 5 x 4 x 3 x 2 x 1. E questo è 5 per 4!. Quindi factorial(5) è 5 * factorial(4), cioè 5 * 4 * factorial(3), fino a factorial(1), che è semplicemente 1.

Ogni chiamata aspetta la risposta della successiva, poi moltiplica.`,
          `5! (cinq factorielle) veut dire 5 x 4 x 3 x 2 x 1. Et c'est 5 fois 4!. Donc factorial(5) est 5 * factorial(4), c'est-à-dire 5 * 4 * factorial(3), jusqu'à factorial(1), qui vaut simplement 1.

Chaque appel attend la réponse du suivant, puis multiplie.`],
        ex: {
          t: ['Show factorial(6).', 'Mostra factorial(6).', 'Affiche factorial(6).'],
          h: ['6 * 5 * 4 * 3 * 2 * 1 = 720', '6 * 5 * 4 * 3 * 2 * 1 = 720', '6 * 5 * 4 * 3 * 2 * 1 = 720'],
          start: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)', sol: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(6))', out: '720', c: 'factorial\\(6\\)'
        }
      },
      {
        c: c`def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

for i in range(8):
    print(fib(i))`,
        t: ['Fibonacci numbers', 'I numeri di Fibonacci', 'Les nombres de Fibonacci'],
        x: [`Each Fibonacci number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8... The function says it almost word by word, with two base cases.

It is beautiful, but slow for big numbers, because it works out the same things many times. Later you will learn how to remember the answers.`,
          `Ogni numero di Fibonacci è la somma dei due prima: 0, 1, 1, 2, 3, 5, 8... La funzione lo dice quasi parola per parola, con due casi base.

È bella, ma lenta con i numeri grandi, perché calcola molte volte le stesse cose. Più avanti imparerai come ricordare le risposte.`,
          `Chaque nombre de Fibonacci est la somme des deux d'avant : 0, 1, 1, 2, 3, 5, 8... La fonction le dit presque mot pour mot, avec deux cas de base.

Elle est belle, mais lente pour les grands nombres, parce qu'elle recalcule plusieurs fois les mêmes choses. Plus tard tu apprendras à mémoriser les réponses.`],
        ex: {
          t: ['Show fib(10).', 'Mostra fib(10).', 'Affiche fib(10).'],
          h: ['The function is ready: call it with 10 inside print.', 'La funzione è pronta: chiamala con 10 dentro print.', 'La fonction est prête : appelle-la avec 10 dans print.'],
          start: 'def fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)', sol: 'def fib(n):\n    if n < 2:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(10))', out: '55', c: 'fib\\(10\\)'
        }
      },
      {
        c: c`def total(items):
    if not items:
        return 0
    return items[0] + total(items[1:])

def reverse(text):
    if len(text) <= 1:
        return text
    return reverse(text[1:]) + text[0]

print(total([1, 2, 3, 4]))
print(reverse("python"))`,
        t: ['Recursion on lists and texts', 'Ricorsione su liste e testi', 'Récursion sur listes et textes'],
        x: [`Recursion fits things made of smaller pieces. The sum of a list is its first item plus the sum of the rest. A reversed text is the reversed rest, followed by the first letter.

The base case is the smallest piece: an empty list, or a text of one letter.`,
          `La ricorsione si adatta alle cose fatte di pezzi più piccoli. La somma di una lista è il suo primo elemento più la somma del resto. Un testo girato è il resto girato, seguito dalla prima lettera.

Il caso base è il pezzo più piccolo: una lista vuota, o un testo di una lettera.`,
          `La récursion convient aux choses faites de morceaux plus petits. La somme d'une liste est son premier élément plus la somme du reste. Un texte retourné est le reste retourné, suivi de la première lettre.

Le cas de base est le plus petit morceau : une liste vide, ou un texte d'une lettre.`],
        ex: {
          t: ['Show the sum of the list [5, 5, 5] using the function total.', 'Mostra la somma della lista [5, 5, 5] usando la funzione total.', 'Affiche la somme de la liste [5, 5, 5] en utilisant la fonction total.'],
          h: ['Give total one list, written with square brackets, and show what it gives back.', 'Dai a total una lista, scritta con le quadre, e mostra quello che restituisce.', 'Donne à total une liste, écrite avec des crochets, et affiche ce qu\'elle rend.'],
          start: 'def total(items):\n    if not items:\n        return 0\n    return items[0] + total(items[1:])', sol: 'def total(items):\n    if not items:\n        return 0\n    return items[0] + total(items[1:])\n\nprint(total([5, 5, 5]))', out: '15', c: 'total\\(\\['
        }
      },
      {
        c: c`def forever(n):
    return forever(n + 1)

forever(1)`,
        e: 'RecursionError',
        t: ['When it never stops', 'Quando non si ferma mai', 'Quand ça ne s\'arrête jamais'],
        x: [`Without a base case, a function calls itself forever. Python protects you: after about a thousand calls inside each other, it stops with a RecursionError.

If you see it, check the base case, and check that every call really gets closer to it.`,
          `Senza un caso base, una funzione chiama se stessa all'infinito. Python ti protegge: dopo circa mille chiamate una dentro l'altra, si ferma con un RecursionError.

Se lo vedi, controlla il caso base e controlla che ogni chiamata si avvicini davvero ad esso.`,
          `Sans cas de base, une fonction s'appelle elle-même pour toujours. Python te protège : après environ mille appels les uns dans les autres, il s'arrête avec une RecursionError.

Si tu la vois, vérifie le cas de base, et vérifie que chaque appel s'en rapproche vraiment.`],
        ex: {
          t: ['Make a recursive function stop_at(n) that returns n when n is 3 or more, and otherwise calls itself with n + 1. Show stop_at(1).', 'Crea una funzione ricorsiva stop_at(n) che restituisce n quando n è 3 o più, e altrimenti chiama se stessa con n + 1. Mostra stop_at(1).', 'Crée une fonction récursive stop_at(n) qui rend n quand n vaut 3 ou plus, et sinon s\'appelle avec n + 1. Affiche stop_at(1).'],
          h: ['Two cases: when n is already 3 or more, give n back. Otherwise, give back what the function says for the next number.', 'Due casi: quando n è già 3 o più, restituisci n. Altrimenti, restituisci quello che la funzione dice per il numero seguente.', 'Deux cas : quand n est déjà 3 ou plus, rends n. Sinon, rends ce que la fonction dit pour le nombre suivant.'],
          sol: 'def stop_at(n):\n    if n >= 3:\n        return n\n    return stop_at(n + 1)\n\nprint(stop_at(1))', out: '3', c: 'stop_at'
        }
      },
      {
        c: c`def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(5))`,
        t: ['Challenge: add up the digits', 'Sfida: somma le cifre', 'Défi : additionne les chiffres'],
        x: ['factorial(5) is 5 * factorial(4), which is 4 * factorial(3), and so on down to factorial(0), which is simply 1. Every recursive function needs that simple case, or it never stops.', 'factorial(5) è 5 * factorial(4), che è 4 * factorial(3), e così via fino a factorial(0), che è semplicemente 1. Ogni funzione ricorsiva ha bisogno di quel caso semplice, o non si ferma mai.', 'factorial(5) vaut 5 * factorial(4), qui vaut 4 * factorial(3), et ainsi de suite jusqu\'à factorial(0), qui vaut simplement 1. Toute fonction récursive a besoin de ce cas simple, sinon elle ne s\'arrête jamais.'],
        ex: {
          t: ['Write a recursive function sum_digits(n) that adds up the digits of a number, and show sum_digits(1234) (10). The simple case: a number below 10 is its own sum.', 'Scrivi una funzione ricorsiva sum_digits(n) che somma le cifre di un numero, e mostra sum_digits(1234) (10). Il caso semplice: un numero sotto 10 è la sua somma.', 'Écris une fonction récursive sum_digits(n) qui additionne les chiffres d\'un nombre, et affiche sum_digits(1234) (10). Le cas simple : un nombre sous 10 est sa propre somme.'],
          h: ['n % 10 is the last digit and n // 10 is the rest: the sum is the last digit plus sum_digits of the rest.', 'n % 10 è l\'ultima cifra e n // 10 è il resto: la somma è l\'ultima cifra più sum_digits del resto.', 'n % 10 est le dernier chiffre et n // 10 le reste : la somme est le dernier chiffre plus sum_digits du reste.'],
          start: '',
          sol: 'def sum_digits(n):\n    if n < 10:\n        return n\n    return n % 10 + sum_digits(n // 10)\n\nprint(sum_digits(1234))',
          out: '10', uses: ['def', 'sum_digits', '%'], c: 'return[^\\n]*sum_digits\\('
        }
      }
    ]
  },
  {
    title: ['Short ways to build', 'Modi brevi per costruire', 'Façons courtes de construire'],
    subtitle: ['Comprehensions and one-line functions', 'Comprensioni e funzioni in una riga', 'Compréhensions et fonctions en une ligne'],
    steps: [
      {
        c: c`squares = []
for n in range(1, 6):
    squares.append(n * n)
print(squares)

squares2 = [n * n for n in range(1, 6)]
print(squares2)`,
        n: ['comprehension'],
        t: ['A list in one line', 'Una lista in una riga', 'Une liste en une ligne'],
        x: [`A list comprehension builds a list in one line: [what for item in things]. It says the same as the loop above it, but shorter.

Read it like English: "n times n, for each n in the range".`,
          `Una comprensione di lista costruisce una lista in una riga: [cosa for elemento in cose]. Dice la stessa cosa del ciclo sopra, ma più corto.

Leggila come in inglese: "n per n, per ogni n nel range".`,
          `Une compréhension de liste construit une liste en une ligne : [quoi for élément in choses]. Elle dit la même chose que la boucle au-dessus, mais plus court.

Lis-la comme de l'anglais : "n fois n, pour chaque n dans le range".`],
        ex: {
          t: ['With a comprehension, make the list of the doubles of 1 to 5: [2, 4, 6, 8, 10]', 'Con una comprensione, fai la lista dei doppi da 1 a 5: [2, 4, 6, 8, 10]', 'Avec une compréhension, fais la liste des doubles de 1 à 5 : [2, 4, 6, 8, 10]'],
          h: ['Inside square brackets: first what goes in the list (the number doubled), then a for that takes each number from 1 to 5.', 'Tra parentesi quadre: prima cosa va nella lista (il numero raddoppiato), poi un for che prende ogni numero da 1 a 5.', 'Entre crochets : d\'abord ce qui va dans la liste (le nombre doublé), puis un for qui prend chaque nombre de 1 à 5.'],
          sol: 'print([n * 2 for n in range(1, 6)])', out: '[2, 4, 6, 8, 10]', c: '\\[.* for .* in .*\\]'
        }
      },
      {
        c: [c`nums = [1, 2, 3, 4, 5, 6, 7, 8]
evens = [n for n in nums if n % 2 == 0]
print(evens)
words = ["apple", "fig", "banana"]
print([w.upper() for w in words if len(w) > 3])
print([n * 10 if n > 5 else n for n in nums])`, c`nums = [1, 2, 3, 4, 5, 6, 7, 8]
evens = [n for n in nums if n % 2 == 0]
print(evens)
words = ["mela", "fico", "banana"]
print([w.upper() for w in words if len(w) > 4])
print([n * 10 if n > 5 else n for n in nums])`, c`nums = [1, 2, 3, 4, 5, 6, 7, 8]
evens = [n for n in nums if n % 2 == 0]
print(evens)
words = ["pomme", "figue", "banane"]
print([w.upper() for w in words if len(w) > 5])
print([n * 10 if n > 5 else n for n in nums])`],
        t: ['Filter while building', 'Filtra mentre costruisci', 'Filtre pendant que tu construis'],
        x: [`Add if at the end to keep only some items: [n for n in nums if n % 2 == 0] keeps the even numbers.

If you want to change the value depending on a question, put the choice at the front: n * 10 if n > 5 else n.`,
          `Aggiungi if alla fine per tenere solo alcuni elementi: [n for n in nums if n % 2 == 0] tiene i numeri pari.

Se vuoi cambiare il valore in base a una domanda, metti la scelta davanti: n * 10 if n > 5 else n.`,
          `Ajoute if à la fin pour ne garder que certains éléments : [n for n in nums if n % 2 == 0] garde les nombres pairs.

Si tu veux changer la valeur selon une question, mets le choix devant : n * 10 if n > 5 else n.`],
        ex: {
          t: ['From the list nums, make the list of the numbers bigger than 5, with a comprehension and an if.', 'Dalla lista nums, fai la lista dei numeri più grandi di 5, con una comprensione e un if.', 'À partir de la liste nums, fais la liste des nombres plus grands que 5, avec une compréhension et un if.'],
          h: ['Like the comprehensions of the example, with an if at the end that keeps only the numbers you want.', 'Come le comprensioni dell\'esempio, con un if alla fine che tiene solo i numeri che vuoi.', 'Comme les compréhensions de l\'exemple, avec un if à la fin qui garde seulement les nombres voulus.'],
          start: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]', sol: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]\nprint([n for n in nums if n > 5])', out: '[6, 7, 8]', c: ' if n > 5'
        }
      },
      {
        c: c`names = ["Ada", "Max", "Zoe"]
lengths = {name: len(name) for name in names}
print(lengths)
letters = {ch for ch in "hello world" if ch != " "}
print(sorted(letters))
swapped = {v: k for k, v in lengths.items()}
print(swapped)`,
        t: ['Dictionaries and sets too', 'Anche dizionari e insiemi', 'Aussi des dictionnaires et des ensembles'],
        x: [`The same trick works with curly brackets. {key: value for ...} builds a dictionary, and {item for ...} builds a set.

Dictionary comprehensions are great to swap keys and values, or to make a lookup table.`,
          `Lo stesso trucco funziona con le parentesi graffe. {chiave: valore for ...} costruisce un dizionario, e {elemento for ...} costruisce un insieme.

Le comprensioni di dizionario sono ottime per scambiare chiavi e valori, o per fare una tabella di ricerca.`,
          `Le même truc marche avec des accolades. {clé: valeur for ...} construit un dictionnaire, et {élément for ...} construit un ensemble.

Les compréhensions de dictionnaire sont super pour échanger clés et valeurs, ou pour faire une table de recherche.`],
        ex: {
          t: ['With a dictionary comprehension, make a dictionary of the squares: each number from 1 to 3 with its square. Show it.', 'Con una comprensione di dizionario, fai un dizionario dei quadrati: ogni numero da 1 a 3 con il suo quadrato. Mostralo.', 'Avec une compréhension de dictionnaire, fais un dictionnaire des carrés : chaque nombre de 1 à 3 avec son carré. Affiche-le.'],
          h: ['Curly brackets, and before the for a pair key: value, where the key is the number and the value its square.', 'Parentesi graffe, e prima del for una coppia chiave: valore, dove la chiave è il numero e il valore il suo quadrato.', 'Des accolades, et avant le for une paire clé : valeur, où la clé est le nombre et la valeur son carré.'],
          sol: 'print({n: n * n for n in range(1, 4)})', out: '{1: 1, 2: 4, 3: 9}', c: '\\{.*:.* for'
        }
      },
      {
        c: c`grid = [[row * col for col in range(1, 4)] for row in range(1, 4)]
print(grid)
flat = [x for line in grid for x in line]
print(flat)
pairs = [(a, b) for a in "ab" for b in (1, 2)]
print(pairs)`,
        t: ['Two loops in one', 'Due cicli in uno', 'Deux boucles en une'],
        x: [`A comprehension can have two for parts, like nested loops. Read them in the same order as you would write the loops: first the outer one, then the inner one.

Use this sparingly. When a comprehension gets hard to read, a normal loop is kinder.`,
          `Una comprensione può avere due parti for, come i cicli annidati. Leggile nello stesso ordine in cui scriveresti i cicli: prima quello esterno, poi quello interno.

Usala con parsimonia. Quando una comprensione diventa difficile da leggere, un ciclo normale è più gentile.`,
          `Une compréhension peut avoir deux parties for, comme des boucles imbriquées. Lis-les dans le même ordre que tu écrirais les boucles : d'abord l'extérieure, puis l'intérieure.

Utilise ça avec modération. Quand une compréhension devient difficile à lire, une boucle normale est plus gentille.`],
        ex: {
          t: ['Make the flat list of the pairs (a, b) for a in 1, 2 and b in 1, 2, with two for parts. Show it.', 'Fai la lista piatta delle coppie (a, b) per a in 1, 2 e b in 1, 2, con due parti for. Mostrala.', 'Fais la liste plate des paires (a, b) pour a dans 1, 2 et b dans 1, 2, avec deux parties for. Affiche-la.'],
          h: ['In front, the pair in round brackets; after it, two for parts one after the other: first the one for a, then the one for b.', 'Davanti, la coppia tra parentesi tonde; dopo, due parti for una dopo l\'altra: prima quella per a, poi quella per b.', 'Devant, la paire entre parenthèses ; après, deux parties for l\'une après l\'autre : d\'abord celle pour a, puis celle pour b.'],
          sol: 'print([(a, b) for a in (1, 2) for b in (1, 2)])', out: '[(1, 1), (1, 2), (2, 1), (2, 2)]', c: 'for .* for'
        }
      },
      {
        c: c`double = lambda n: n * 2
print(double(21))
print((lambda a, b: a + b)(3, 4))
words = ["pear", "fig", "banana"]
print(sorted(words, key=lambda w: len(w)))`,
        n: ['lambda'],
        t: ['A tiny function: lambda', 'Una funzioncina: lambda', 'Une minuscule fonction : lambda'],
        x: [`lambda makes a small function with no name, in one line: lambda inputs: result. It is handy when you need a function just for a moment, like key= in sorted.

double = lambda n: n * 2 is the same as def double(n): return n * 2.`,
          `lambda fa una piccola funzione senza nome, in una riga: lambda ingressi: risultato. È comoda quando ti serve una funzione solo per un momento, come key= in sorted.

double = lambda n: n * 2 è come def double(n): return n * 2.`,
          `lambda fait une petite fonction sans nom, sur une ligne : lambda entrées: résultat. C'est pratique quand tu as besoin d'une fonction juste un instant, comme key= dans sorted.

double = lambda n: n * 2 est pareil que def double(n): return n * 2.`],
        ex: {
          t: ['Make a lambda called triple that multiplies by 3. Show triple(7).', 'Fai una lambda che si chiama triple e moltiplica per 3. Mostra triple(7).', 'Fais une lambda qui s\'appelle triple et qui multiplie par 3. Affiche triple(7).'],
          h: ['lambda, the name of the value it gets, a colon, and what it gives back. Keep it in a box called triple, then call triple like a function.', 'lambda, il nome del valore che riceve, i due punti, e cosa restituisce. Tienila in una scatola chiamata triple, poi chiama triple come una funzione.', 'lambda, le nom de la valeur qu\'il reçoit, deux-points, et ce qu\'il rend. Garde-le dans une boîte appelée triple, puis appelle triple comme une fonction.'],
          sol: 'triple = lambda n: n * 3\nprint(triple(7))', out: '21', c: 'lambda'
        }
      },
      {
        c: c`numbers = [1, 2, 3, 4]
print(list(map(lambda n: n + 1, numbers)))
print(list(filter(lambda n: n > 2, numbers)))
print(list(map(str, numbers)))`,
        n: ['map', 'filter'],
        t: ['map and filter', 'map e filter', 'map et filter'],
        x: [`map applies a function to every item. filter keeps the items for which a function answers True. Both give something that you turn into a list with list(...).

Any function works, even a ready-made one like str. Comprehensions usually read better, but you will see map and filter in other people's code.`,
          `map applica una funzione a ogni elemento. filter tiene gli elementi per i quali una funzione risponde True. Tutte e due danno qualcosa che trasformi in lista con list(...).

Va bene qualsiasi funzione, anche una già pronta come str. Le comprensioni di solito si leggono meglio, ma vedrai map e filter nel codice degli altri.`,
          `map applique une fonction à chaque élément. filter garde les éléments pour lesquels une fonction répond True. Les deux donnent quelque chose que tu transformes en liste avec list(...).

N'importe quelle fonction marche, même une toute prête comme str. Les compréhensions se lisent en général mieux, mais tu verras map et filter dans le code des autres.`],
        ex: {
          t: ['With map and a lambda, show the list of the numbers [1, 2, 3] multiplied by 10.', 'Con map e una lambda, mostra la lista dei numeri [1, 2, 3] moltiplicati per 10.', 'Avec map et une lambda, affiche la liste des nombres [1, 2, 3] multipliés par 10.'],
          h: ['map takes a function and a list, and uses the function on every item. Give it a lambda that multiplies by 10, and turn the result into a list to show it.', 'map prende una funzione e una lista, e usa la funzione su ogni elemento. Dagli una lambda che moltiplica per 10, e trasforma il risultato in una lista per mostrarlo.', 'map prend une fonction et une liste, et utilise la fonction sur chaque élément. Donne-lui un lambda qui multiplie par 10, et transforme le résultat en liste pour l\'afficher.'],
          sol: 'print(list(map(lambda n: n * 10, [1, 2, 3])))', out: '[10, 20, 30]', c: 'map'
        }
      },
      {
        c: c`squares = [n * n for n in range(1, 6)]
evens = [n for n in squares if n % 2 == 0]
print(squares)
print(evens)`,
        t: ['Challenge: one line, a whole list', 'Sfida: una riga, una lista intera', 'Défi : une ligne, une liste entière'],
        x: ['A comprehension builds a list in one line: what to keep, for each item, and (if you want) which items. The second one keeps only the even squares.', 'Una comprehension costruisce una lista in una riga: cosa tenere, per ogni elemento, e (se vuoi) quali elementi. La seconda tiene solo i quadrati pari.', 'Une compréhension construit une liste en une ligne : quoi garder, pour chaque élément, et (si tu veux) quels éléments. La seconde ne garde que les carrés pairs.'],
        ex: {
          t: ['With one comprehension, make the list of the multiples of 3 from 1 to 20, each one squared: [9, 36, 81, 144, 225, 324]. Show it.', 'Con una sola comprehension, fai la lista dei multipli di 3 da 1 a 20, ognuno al quadrato: [9, 36, 81, 144, 225, 324]. Mostrala.', 'Avec une seule compréhension, fais la liste des multiples de 3 de 1 à 20, chacun au carré : [9, 36, 81, 144, 225, 324]. Affiche-la.'],
          h: ['[n * n for n in range(...) if ...]: the if keeps the numbers that % 3 makes 0.', '[n * n for n in range(...) if ...]: l\'if tiene i numeri che % 3 rende 0.', '[n * n for n in range(...) if ...] : le if garde les nombres que % 3 rend 0.'],
          start: '',
          sol: 'print([n * n for n in range(1, 21) if n % 3 == 0])',
          out: '[9, 36, 81, 144, 225, 324]', uses: ['comprehension']
        }
      }
    ]
  },
  {
    title: ['A quiz game', 'Un gioco a quiz', 'Un jeu de quiz'],
    subtitle: ['Put stage 3 together', 'Metti insieme la fase 3', 'Rassemble l\'étape 3'],
    steps: [
      {
        c: [c`questions = {
    "Capital of Italy?": "rome",
    "How many legs has a spider?": "8",
    "Opposite of hot?": "cold",
}
for question, answer in questions.items():
    print(question, "->", answer)`, c`questions = {
    "Capitale d'Italia?": "roma",
    "Quante zampe ha un ragno?": "8",
    "Contrario di caldo?": "freddo",
}
for question, answer in questions.items():
    print(question, "->", answer)`, c`questions = {
    "Capitale de l'Italie ?": "rome",
    "Combien de pattes a une araignée ?": "8",
    "Contraire de chaud ?": "froid",
}
for question, answer in questions.items():
    print(question, "->", answer)`],
        t: ['The questions', 'Le domande', 'Les questions'],
        x: [`A good program starts with its data. Here a dictionary holds each question with its right answer, so adding a question is adding one line.

First we only walk through it and check that the data is right.`,
          `Un buon programma parte dai suoi dati. Qui un dizionario tiene ogni domanda con la sua risposta giusta, quindi aggiungere una domanda è aggiungere una riga.

Per prima cosa lo scorriamo soltanto e controlliamo che i dati siano giusti.`,
          `Un bon programme commence par ses données. Ici un dictionnaire garde chaque question avec sa bonne réponse, donc ajouter une question c'est ajouter une ligne.

D'abord on le parcourt seulement et on vérifie que les données sont justes.`],
        ex: {
          uses: ['dict', 'for'],
          t: ['Add a fourth question of your own to the dictionary: 2 + 2? with the answer 4. Show the whole list again.', 'Aggiungi al dizionario una quarta domanda tua: 2 + 2? con la risposta 4. Mostra di nuovo tutta la lista.', 'Ajoute au dictionnaire une quatrième question de ton choix : 2 + 2 ? avec la réponse 4. Affiche de nouveau toute la liste.'],
          h: ['Each question is a pair "question": "answer" followed by a comma. Add one more pair before the closing curly bracket.', 'Ogni domanda è una coppia "domanda": "risposta" seguita da una virgola. Aggiungi un\'altra coppia prima della graffa che chiude.', 'Chaque question est une paire "question": "réponse" suivie d\'une virgule. Ajoute une paire de plus avant l\'accolade fermante.'],
          start: [c`questions = {
    "Capital of Italy?": "rome",
    "How many legs has a spider?": "8",
    "Opposite of hot?": "cold",
}
for question, answer in questions.items():
    print(question, "->", answer)`, c`questions = {
    "Capitale d'Italia?": "roma",
    "Quante zampe ha un ragno?": "8",
    "Contrario di caldo?": "freddo",
}
for question, answer in questions.items():
    print(question, "->", answer)`, c`questions = {
    "Capitale de l'Italie ?": "rome",
    "Combien de pattes a une araignée ?": "8",
    "Contraire de chaud ?": "froid",
}
for question, answer in questions.items():
    print(question, "->", answer)`],
          sol: [c`questions = {
    "Capital of Italy?": "rome",
    "How many legs has a spider?": "8",
    "Opposite of hot?": "cold",
    "2 + 2?": "4",
}
for question, answer in questions.items():
    print(question, "->", answer)`, c`questions = {
    "Capitale d'Italia?": "roma",
    "Quante zampe ha un ragno?": "8",
    "Contrario di caldo?": "freddo",
    "2 + 2?": "4",
}
for question, answer in questions.items():
    print(question, "->", answer)`, c`questions = {
    "Capitale de l'Italie ?": "rome",
    "Combien de pattes a une araignée ?": "8",
    "Contraire de chaud ?": "froid",
    "2 + 2 ?": "4",
}
for question, answer in questions.items():
    print(question, "->", answer)`],
          m: '(?:.*\\n){3}.*4$'
        }
      },
      {
        c: c`def check(given, right):
    return given.strip().lower() == right

print(check("  Rome ", "rome"))
print(check("Milan", "rome"))`,
        t: ['A function to judge', 'Una funzione per giudicare', 'Une fonction pour juger'],
        x: [`One small function with one job: tell if an answer is right. strip removes stray spaces and lower makes small letters, so "  Rome " counts as right.

Writing the judging in its own function means that you can improve it later without touching the rest.`,
          `Una piccola funzione con un compito solo: dire se una risposta è giusta. strip toglie gli spazi in più e lower fa le lettere minuscole, quindi "  Rome " conta come giusta.

Scrivere il giudizio in una funzione a parte vuol dire che puoi migliorarlo dopo senza toccare il resto.`,
          `Une petite fonction avec un seul travail : dire si une réponse est juste. strip enlève les espaces en trop et lower fait des minuscules, donc "  Rome " compte comme juste.

Écrire le jugement dans sa propre fonction veut dire que tu peux l'améliorer plus tard sans toucher au reste.`],
        ex: {
          t: ['Show whether the answer " PARIS " is right for "paris", using check.', 'Mostra se la risposta " PARIS " è giusta per "paris", usando check.', 'Affiche si la réponse " PARIS " est juste pour "paris", en utilisant check.'],
          h: ['Call check with the two texts, in the order the function expects them, and show the result.', 'Chiama check con i due testi, nell\'ordine in cui la funzione li aspetta, e mostra il risultato.', 'Appelle check avec les deux textes, dans l\'ordre où la fonction les attend, et affiche le résultat.'],
          start: 'def check(given, right):\n    return given.strip().lower() == right', sol: 'def check(given, right):\n    return given.strip().lower() == right\n\nprint(check(" PARIS ", "paris"))', out: 'True', c: 'check\\('
        }
      },
      {
        c: [c`questions = {
    "Capital of Italy?": "rome",
    "How many legs has a spider?": "8",
    "Opposite of hot?": "cold",
}

def check(given, right):
    return given.strip().lower() == right

score = 0
for question, right in questions.items():
    given = input(question + " ")
    if check(given, right):
        print("Correct!")
        score += 1
    else:
        print("No, it was", right)
print(f"You scored {score} out of {len(questions)}")`, c`questions = {
    "Capitale d'Italia?": "roma",
    "Quante zampe ha un ragno?": "8",
    "Contrario di caldo?": "freddo",
}

def check(given, right):
    return given.strip().lower() == right

score = 0
for question, right in questions.items():
    given = input(question + " ")
    if check(given, right):
        print("Giusto!")
        score += 1
    else:
        print("No, era", right)
print(f"Hai fatto {score} punti su {len(questions)}")`, c`questions = {
    "Capitale de l'Italie ?": "rome",
    "Combien de pattes a une araignée ?": "8",
    "Contraire de chaud ?": "froid",
}

def check(given, right):
    return given.strip().lower() == right

score = 0
for question, right in questions.items():
    given = input(question + " ")
    if check(given, right):
        print("Juste !")
        score += 1
    else:
        print("Non, c'était", right)
print(f"Tu as fait {score} points sur {len(questions)}")`],
        i: {en: ['Rome', '6', 'cold'], it: ['Roma', '6', 'freddo'], fr: ['Rome', '6', 'froid']},
        t: ['The whole game', 'Tutto il gioco', 'Tout le jeu'],
        x: [`Everything together: a dictionary of questions, a function to judge, a loop that asks, a counter for the score, and an f-string to finish.

Run it and answer. Then change the questions and make it yours.`,
          `Tutto insieme: un dizionario di domande, una funzione per giudicare, un ciclo che chiede, un contatore per il punteggio e una f-string per finire.

Eseguilo e rispondi. Poi cambia le domande e rendilo tuo.`,
          `Tout ensemble : un dictionnaire de questions, une fonction pour juger, une boucle qui demande, un compteur pour le score et une f-string pour finir.

Lance-le et réponds. Puis change les questions et fais-en le tien.`],
        ex: {
          uses: ['for', 'input'],
          t: ['Change the game so that it gives 2 points for every right answer. With the answers Rome, 8 and cold it must end with 6 points.', 'Cambia il gioco così che dia 2 punti per ogni risposta giusta. Con le risposte Roma, 8 e freddo deve finire con 6 punti.', 'Change le jeu pour qu\'il donne 2 points pour chaque bonne réponse. Avec les réponses Rome, 8 et froid il doit finir avec 6 points.'],
          h: ['Find the line that adds a point when the answer is right, and change how much it adds.', 'Trova la riga che aggiunge un punto quando la risposta è giusta, e cambia quanto aggiunge.', 'Trouve la ligne qui ajoute un point quand la réponse est juste, et change combien elle ajoute.'],
          start: [c`questions = {"Capital of Italy?": "rome", "How many legs has a spider?": "8", "Opposite of hot?": "cold"}
score = 0
for question, right in questions.items():
    given = input(question + " ")
    if given.strip().lower() == right:
        score += 1
print("Score:", score)`, c`questions = {"Capitale d'Italia?": "roma", "Quante zampe ha un ragno?": "8", "Contrario di caldo?": "freddo"}
score = 0
for question, right in questions.items():
    given = input(question + " ")
    if given.strip().lower() == right:
        score += 1
print("Punti:", score)`, c`questions = {"Capitale de l'Italie ?": "rome", "Combien de pattes a une araignée ?": "8", "Contraire de chaud ?": "froid"}
score = 0
for question, right in questions.items():
    given = input(question + " ")
    if given.strip().lower() == right:
        score += 1
print("Points :", score)`],
          sol: [c`questions = {"Capital of Italy?": "rome", "How many legs has a spider?": "8", "Opposite of hot?": "cold"}
score = 0
for question, right in questions.items():
    given = input(question + " ")
    if given.strip().lower() == right:
        score += 2
print("Score:", score)`, c`questions = {"Capitale d'Italia?": "roma", "Quante zampe ha un ragno?": "8", "Contrario di caldo?": "freddo"}
score = 0
for question, right in questions.items():
    given = input(question + " ")
    if given.strip().lower() == right:
        score += 2
print("Punti:", score)`, c`questions = {"Capitale de l'Italie ?": "rome", "Combien de pattes a une araignée ?": "8", "Contraire de chaud ?": "froid"}
score = 0
for question, right in questions.items():
    given = input(question + " ")
    if given.strip().lower() == right:
        score += 2
print("Points :", score)`],
          i: {en: ['Rome', '8', 'cold'], it: ['Roma', '8', 'freddo'], fr: ['Rome', '8', 'froid']},
          m: ['Score: 6$', 'Punti: 6$', 'Points : 6$']
        }
      },
      {
        c: c`import random

questions = {"2 + 2?": "4", "3 x 3?": "9", "10 - 7?": "3", "5 + 6?": "11"}
asked = random.sample(list(questions), 3)
for q in asked:
    print(q, "->", questions[q])`,
        s: ['2 + 2? -> 4\n10 - 7? -> 3\n5 + 6? -> 11', '2 + 2? -> 4\n10 - 7? -> 3\n5 + 6? -> 11', '2 + 2? -> 4\n10 - 7? -> 3\n5 + 6? -> 11'],
        r: true,
        n: ['random.sample'],
        t: ['Make it different each time', 'Fallo diverso ogni volta', 'Fais-le différent à chaque fois'],
        x: [`random.sample(list, 3) picks 3 different items by luck. With it, every game asks different questions, in a different order.

list(questions) turns the keys of the dictionary into a list, which is what sample needs.`,
          `random.sample(lista, 3) sceglie 3 elementi diversi a caso. Con questo, ogni partita fa domande diverse, in un ordine diverso.

list(questions) trasforma le chiavi del dizionario in una lista, che è quello che serve a sample.`,
          `random.sample(liste, 3) choisit 3 éléments différents au hasard. Avec ça, chaque partie pose d'autres questions, dans un autre ordre.

list(questions) transforme les clés du dictionnaire en liste, ce dont sample a besoin.`],
        ex: {
          t: ['Make the program pick 2 questions instead of 3. It must show 2 lines.', 'Fai scegliere al programma 2 domande invece di 3. Deve mostrare 2 righe.', 'Fais choisir 2 questions au programme au lieu de 3. Il doit afficher 2 lignes.'],
          h: ['random.sample(list(questions), 2)', 'random.sample(list(questions), 2)', 'random.sample(list(questions), 2)'],
          start: 'import random\n\nquestions = {"2 + 2?": "4", "3 x 3?": "9", "10 - 7?": "3", "5 + 6?": "11"}\nasked = random.sample(list(questions), 3)\nfor q in asked:\n    print(q, "->", questions[q])',
          sol: 'import random\n\nquestions = {"2 + 2?": "4", "3 x 3?": "9", "10 - 7?": "3", "5 + 6?": "11"}\nasked = random.sample(list(questions), 2)\nfor q in asked:\n    print(q, "->", questions[q])',
          m: '^[^\\n]+\\n[^\\n]+$', c: 'sample\\(list\\(questions\\), 2\\)'
        }
      }
    ]
  }
];
