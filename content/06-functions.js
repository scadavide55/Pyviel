// Stage 3 · Functions. See tools/build-course.js for the format.
const c = String.raw;
const G3 = ['Stage 3 · Functions', 'Fase 3 · Le funzioni', 'Étape 3 · Les fonctions'];

module.exports = [
  {
    group: G3,
    title: ['Your own functions', 'Le tue funzioni', 'Tes propres fonctions'],
    subtitle: ['Give a few lines a name', 'Dai un nome ad alcune righe', 'Donne un nom à quelques lignes'],
    steps: [
      {
        c: [c`def greet():
    print("Hello!")
    print("Welcome to Pyviel.")

greet()
greet()`, c`def greet():
    print("Ciao!")
    print("Benvenuto in Pyviel.")

greet()
greet()`, c`def greet():
    print("Bonjour!")
    print("Bienvenue dans Pyviel.")

greet()
greet()`],
        n: ['def'],
        t: ['Make a function', 'Crea una funzione', 'Crée une fonction'],
        x: [`A function is a few lines with a name. You already used some: print, len, input. Now you make your own.

def starts it, then the name, round brackets and a colon. The lines pushed in below are what it does. Making it does not run it: to run it, call it by writing its name with brackets, as greet(). You can call it as many times as you like.`,
          `Una funzione è un gruppo di righe con un nome. Ne hai già usate: print, len, input. Ora ne crei di tue.

def la inizia, poi il nome, le parentesi tonde e i due punti. Le righe rientrate sotto sono quello che fa. Crearla non la esegue: per eseguirla la chiami scrivendo il suo nome con le parentesi, come greet(). La puoi chiamare quante volte vuoi.`,
          `Une fonction est quelques lignes avec un nom. Tu en as déjà utilisé : print, len, input. Maintenant tu crées les tiennes.

def la commence, puis le nom, des parenthèses rondes et deux points. Les lignes décalées dessous sont ce qu'elle fait. La créer ne la lance pas : pour la lancer, tu l'appelles en écrivant son nom avec des parenthèses, comme greet(). Tu peux l'appeler autant de fois que tu veux.`],
        ex: {
          t: ['Make a function called hello that shows Hello!  Then call it two times.', 'Crea una funzione che si chiama hello che mostra Ciao!  Poi chiamala due volte.', 'Crée une fonction qui s\'appelle hello et qui affiche Bonjour!  Puis appelle-la deux fois.'],
          h: ['def hello(): then, pushed in, a print line; then hello() two times.', 'def hello(): poi, rientrata, una riga print; poi hello() due volte.', 'def hello(): puis, décalée, une ligne print ; puis hello() deux fois.'],
          sol: ['def hello():\n    print("Hello!")\n\nhello()\nhello()', 'def hello():\n    print("Ciao!")\n\nhello()\nhello()', 'def hello():\n    print("Bonjour!")\n\nhello()\nhello()'],
          exact: true, c: 'def hello'
        },
        w: ['Making a function shows nothing. If you forget to call it, the program seems to do nothing.', 'Creare una funzione non mostra niente. Se dimentichi di chiamarla, il programma sembra non fare niente.', 'Créer une fonction n\'affiche rien. Si tu oublies de l\'appeler, le programme semble ne rien faire.']
      },
      {
        c: [c`def greet(name):
    print("Hello", name)

greet("Ada")
greet("Max")

def add(a, b):
    print(a + b)

add(3, 4)`, c`def greet(name):
    print("Ciao", name)

greet("Ada")
greet("Max")

def add(a, b):
    print(a + b)

add(3, 4)`, c`def greet(name):
    print("Bonjour", name)

greet("Ada")
greet("Max")

def add(a, b):
    print(a + b)

add(3, 4)`],
        n: ['parameter'],
        t: ['Give it something to work with', 'Dagli qualcosa su cui lavorare', 'Donne-lui quelque chose avec quoi travailler'],
        x: [`A function can receive values. The names inside the brackets of def are called parameters: boxes that exist only inside the function.

greet("Ada") puts "Ada" in the box name, and then runs the lines. A function can have as many parameters as it needs, separated by commas.`,
          `Una funzione può ricevere dei valori. I nomi dentro le parentesi di def si chiamano parametri: scatole che esistono solo dentro la funzione.

greet("Ada") mette "Ada" nella scatola name e poi esegue le righe. Una funzione può avere tutti i parametri che le servono, separati da virgole.`,
          `Une fonction peut recevoir des valeurs. Les noms entre les parenthèses de def s'appellent des paramètres : des boîtes qui n'existent qu'à l'intérieur de la fonction.

greet("Ada") met "Ada" dans la boîte name, puis lance les lignes. Une fonction peut avoir autant de paramètres qu'il lui en faut, séparés par des virgules.`],
        ex: {
          t: ['Make a function double with one parameter n that shows n * 2. Call it with 21.', 'Crea una funzione double con un parametro n che mostra n * 2. Chiamala con 21.', 'Crée une fonction double avec un paramètre n qui affiche n * 2. Appelle-la avec 21.'],
          h: ['A def line with the name and n in brackets, ending with a colon; a pushed-in print; then a call, not pushed in.', 'Una riga def con il nome e n tra parentesi, che finisce con i due punti; un print rientrato; poi una chiamata, non rientrata.', 'Une ligne def avec le nom et n entre parenthèses, terminée par deux-points ; un print décalé ; puis un appel, non décalé.'],
          sol: 'def double(n):\n    print(n * 2)\n\ndouble(21)', out: '42', c: 'def double\\(n\\)'
        }
      },
      {
        c: c`def square(n):
    return n * n

result = square(5)
print(result)
print(square(3) + square(4))
print(square(square(2)))`,
        n: ['return'],
        t: ['Give back an answer: return', 'Restituisci una risposta: return', 'Rends une réponse : return'],
        x: [`print only shows something on the screen. Often you want the function to give an answer back, so you can keep it in a box or use it in a sum. That is what return does.

The function ends at the return line. A call is a value like any other, so calls can be nested: square(square(2)).`,
          `print mostra solo qualcosa sullo schermo. Spesso vuoi che la funzione ti restituisca una risposta, per tenerla in una scatola o usarla in un conto. Lo fa return.

La funzione finisce alla riga return. Una chiamata è un valore come gli altri, quindi le chiamate si possono annidare: square(square(2)).`,
          `print affiche seulement quelque chose à l'écran. Souvent tu veux que la fonction te rende une réponse, pour la garder dans une boîte ou l'utiliser dans un calcul. C'est ce que fait return.

La fonction se termine à la ligne return. Un appel est une valeur comme les autres, donc les appels peuvent être imbriqués : square(square(2)).`],
        ex: {
          t: ['Make a function cube that returns n * n * n. Show cube(3).', 'Crea una funzione cube che restituisce n * n * n. Mostra cube(3).', 'Crée une fonction cube qui rend n * n * n. Affiche cube(3).'],
          h: ['Inside the function, return sends the result back. Outside, print shows what the call gave back.', 'Dentro la funzione, return rimanda indietro il risultato. Fuori, print mostra quello che la chiamata ha restituito.', 'Dans la fonction, return renvoie le résultat. Dehors, print affiche ce que l\'appel a rendu.'],
          sol: 'def cube(n):\n    return n * n * n\n\nprint(cube(3))', out: '27', c: 'return'
        }
      },
      {
        c: c`def show(n):
    print(n * 2)

def give(n):
    return n * 2

a = show(5)
b = give(5)
print(a, b)`,
        t: ['print is not return', 'print non è return', 'print n\'est pas return'],
        x: [`Look at the last line. show printed 10 on the screen, but it gave nothing back, so a holds None. give returned 10, so b holds 10.

If you want to use the answer later in the program, use return, not print.`,
          `Guarda l'ultima riga. show ha stampato 10 sullo schermo ma non ha restituito niente, quindi a contiene None. give ha restituito 10, quindi b contiene 10.

Se vuoi usare la risposta più avanti nel programma, usa return, non print.`,
          `Regarde la dernière ligne. show a affiché 10 à l'écran mais n'a rien rendu, donc a contient None. give a rendu 10, donc b contient 10.

Si tu veux utiliser la réponse plus tard dans le programme, utilise return, pas print.`],
        ex: {
          t: ['The function add shows the sum instead of giving it back, so the program stops with an error. Fix it so that the program shows 10.', 'La funzione add mostra la somma invece di restituirla, quindi il programma si ferma con un errore. Correggila così il programma mostra 10.', 'La fonction add affiche la somme au lieu de la rendre, donc le programme s\'arrête sur une erreur. Corrige-la pour que le programme affiche 10.'],
          h: ['Change print into return inside add.', 'Cambia print in return dentro add.', 'Change print en return dans add.'],
          start: 'def add(a, b):\n    print(a + b)\n\nresult = add(2, 3)\nprint(result * 2)', sol: 'def add(a, b):\n    return a + b\n\nresult = add(2, 3)\nprint(result * 2)', out: '10', c: 'return'
        }
      },
      {
        c: [c`def is_even(n):
    """Tell if a whole number is even."""
    return n % 2 == 0

def grade(score):
    if score >= 90:
        return "A"
    if score >= 70:
        return "B"
    return "C"

print(is_even(4), is_even(7))
print(grade(95), grade(72), grade(10))`, c`def is_even(n):
    """Dice se un numero intero è pari."""
    return n % 2 == 0

def grade(score):
    if score >= 90:
        return "A"
    if score >= 70:
        return "B"
    return "C"

print(is_even(4), is_even(7))
print(grade(95), grade(72), grade(10))`, c`def is_even(n):
    """Dit si un nombre entier est pair."""
    return n % 2 == 0

def grade(score):
    if score >= 90:
        return "A"
    if score >= 70:
        return "B"
    return "C"

print(is_even(4), is_even(7))
print(grade(95), grade(72), grade(10))`],
        n: ['docstring'],
        t: ['Functions that decide', 'Funzioni che decidono', 'Des fonctions qui décident'],
        x: [`A function can return True or False, or choose what to return with if. The first return that is reached ends the function, so the lines after it do not run.

The text between triple quotes right under def is a description of the function, called a docstring. It does nothing for Python, but it is there for the people who read the code.`,
          `Una funzione può restituire True o False, oppure scegliere cosa restituire con un if. Il primo return raggiunto finisce la funzione, quindi le righe dopo non girano.

Il testo tra tre virgolette subito sotto def è una descrizione della funzione, chiamata docstring. A Python non serve a niente, ma c'è per le persone che leggono il codice.`,
          `Une fonction peut rendre True ou False, ou choisir ce qu'elle rend avec un if. Le premier return atteint termine la fonction, donc les lignes d'après ne tournent pas.

Le texte entre trois guillemets juste sous def est une description de la fonction, appelée docstring. Il ne sert à rien pour Python, mais il est là pour les personnes qui lisent le code.`],
        ex: {
          t: ['Make a function is_adult(age) that returns True when the age is 18 or more. Show is_adult(20).', 'Crea una funzione is_adult(age) che restituisce True quando l\'età è 18 o più. Mostra is_adult(20).', 'Crée une fonction is_adult(age) qui rend True quand l\'âge vaut 18 ou plus. Affiche is_adult(20).'],
          h: ['return age >= 18', 'return age >= 18', 'return age >= 18'],
          sol: 'def is_adult(age):\n    return age >= 18\n\nprint(is_adult(20))', out: 'True', c: 'def is_adult'
        }
      },
      {
        c: [c`def average(numbers):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)

def describe(name, scores):
    print(f"{name}: average {average(scores):.1f}")

describe("Ada", [8, 9, 7])
describe("Max", [6, 6, 9, 10])`, c`def average(numbers):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)

def describe(name, scores):
    print(f"{name}: media {average(scores):.1f}")

describe("Ada", [8, 9, 7])
describe("Max", [6, 6, 9, 10])`, c`def average(numbers):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)

def describe(name, scores):
    print(f"{name} : moyenne {average(scores):.1f}")

describe("Ada", [8, 9, 7])
describe("Max", [6, 6, 9, 10])`],
        t: ['Small functions that work together', 'Piccole funzioni che lavorano insieme', 'Petites fonctions qui travaillent ensemble'],
        x: [`Big programs are made of small functions, each doing one thing well. describe uses average, and average could be used anywhere else.

If you catch yourself copying the same lines twice, it is a sign: put them in a function.`,
          `I programmi grandi sono fatti di piccole funzioni, ognuna che fa bene una cosa. describe usa average, e average si potrebbe usare ovunque.

Se ti accorgi di copiare le stesse righe due volte, è un segnale: mettile in una funzione.`,
          `Les grands programmes sont faits de petites fonctions, chacune faisant bien une chose. describe utilise average, et average pourrait être utilisée n'importe où ailleurs.

Si tu te surprends à copier les mêmes lignes deux fois, c'est un signe : mets-les dans une fonction.`],
        ex: {
          t: ['Make a function bigger(a, b) that returns the bigger of two numbers, using an if. Show bigger(3, 9).', 'Crea una funzione bigger(a, b) che restituisce il più grande di due numeri, usando un if. Mostra bigger(3, 9).', 'Crée une fonction bigger(a, b) qui rend le plus grand de deux nombres, en utilisant un if. Affiche bigger(3, 9).'],
          h: ['if a > b: return a, and after it return b.', 'if a > b: return a, e dopo return b.', 'if a > b: return a, et après return b.'],
          sol: 'def bigger(a, b):\n    if a > b:\n        return a\n    return b\n\nprint(bigger(3, 9))', out: '9', c: 'def bigger'
        }
      },
      {
        c: c`def double(n):
    n * 2

print(double(4))`,
        t: ['Find the mistake: a function that gives back None', 'Trova l\'errore: una funzione che restituisce None', 'Trouve l\'erreur : une fonction qui rend None'],
        x: [`This program runs, but it shows None instead of 8. The function works out n * 2 and then throws the answer away: without return, a function gives back None.

A mistake that does not stop the program is found by comparing what you see with what you expected.`,
          `Questo programma gira, ma mostra None invece di 8. La funzione calcola n * 2 e poi butta via la risposta: senza return, una funzione restituisce None.

Un errore che non ferma il programma si trova confrontando quello che vedi con quello che ti aspettavi.`,
          `Ce programme tourne, mais il affiche None au lieu de 8. La fonction calcule n * 2 puis jette la réponse : sans return, une fonction rend None.

Une erreur qui n'arrête pas le programme se trouve en comparant ce que tu vois avec ce que tu attendais.`],
        ex: {
          t: ['Fix the function, so that the program shows 8.', 'Correggi la funzione, così il programma mostra 8.', 'Corrige la fonction, pour que le programme affiche 8.'],
          h: ['One word at the start of the line inside the function sends the answer back.', 'Una parola all\'inizio della riga dentro la funzione rimanda indietro la risposta.', 'Un mot au début de la ligne dans la fonction renvoie la réponse.'],
          start: 'def double(n):\n    n * 2\n\nprint(double(4))', sol: 'def double(n):\n    return n * 2\n\nprint(double(4))', out: '8', uses: ['return']
        }
      },
      {
        c: [c`def greet(name):
    return "Hello, " + name + "!"

print(greet("Ada"))
print(greet("Bo"))`, c`def greet(name):
    return "Ciao, " + name + "!"

print(greet("Ada"))
print(greet("Bo"))`, c`def greet(name):
    return "Bonjour, " + name + " !"

print(greet("Ada"))
print(greet("Bo"))`],
        t: ['Challenge: a function you can reuse', 'Sfida: una funzione da riusare', 'Défi : une fonction à réutiliser'],
        x: [`Written once, used twice: that is what functions are for. greet does not print anything itself; it gives back a text, and the caller decides what to do with it.

In the task, the answers of two calls are added together, which only works because the function returns them.`,
          `Scritta una volta, usata due: ecco a cosa servono le funzioni. greet non scrive niente da sola; restituisce un testo, e chi la chiama decide cosa farne.

Nel compito, le risposte di due chiamate vengono sommate, e funziona solo perché la funzione le restituisce.`,
          `Écrite une fois, utilisée deux fois : voilà à quoi servent les fonctions. greet n'affiche rien elle-même ; elle rend un texte, et celui qui l'appelle décide quoi en faire.

Dans la tâche, les réponses de deux appels sont additionnées, ce qui ne marche que parce que la fonction les rend.`],
        ex: {
          t: ['Write a function area that takes a width and a height and returns the area. Use it to show the total area of two rooms: 3 by 4 and 5 by 2 (22).', 'Scrivi una funzione area che prende una larghezza e un\'altezza e restituisce l\'area. Usala per mostrare l\'area totale di due stanze: 3 per 4 e 5 per 2 (22).', 'Écris une fonction area qui prend une largeur et une hauteur et rend l\'aire. Utilise-la pour afficher l\'aire totale de deux pièces : 3 sur 4 et 5 sur 2 (22).'],
          h: ['def with two parameters and a return inside. Then one print that adds two calls of the function.', 'def con due parametri e un return dentro. Poi un print che somma due chiamate della funzione.', 'def avec deux paramètres et un return dedans. Puis un print qui additionne deux appels de la fonction.'],
          start: '',
          sol: 'def area(width, height):\n    return width * height\n\nprint(area(3, 4) + area(5, 2))',
          out: '22', c: 'return'
        }
      }
    ]
  },
  {
    title: ['Function options', 'Opzioni delle funzioni', 'Options des fonctions'],
    subtitle: ['Defaults, names and many values', 'Predefiniti, nomi e molti valori', 'Valeurs par défaut, noms et nombreuses valeurs'],
    steps: [
      {
        c: [c`def greet(name, greeting="Hello"):
    print(greeting, name)

greet("Ada")
greet("Max", "Hi")`, c`def greet(name, greeting="Ciao"):
    print(greeting, name)

greet("Ada")
greet("Max", "Ehi")`, c`def greet(name, greeting="Bonjour"):
    print(greeting, name)

greet("Ada")
greet("Max", "Salut")`],
        n: ['default-value'],
        t: ['A default value', 'Un valore predefinito', 'Une valeur par défaut'],
        x: [`A parameter can have a default value: greeting="Hello". If the call gives nothing for it, the default is used. If the call gives a value, that value wins.

Parameters with a default come after the ones without.`,
          `Un parametro può avere un valore predefinito: greeting="Ciao". Se la chiamata non dà niente per lui, si usa quello predefinito. Se la chiamata dà un valore, vince quel valore.

I parametri con un valore predefinito vengono dopo quelli senza.`,
          `Un paramètre peut avoir une valeur par défaut : greeting="Bonjour". Si l'appel ne donne rien pour lui, la valeur par défaut est utilisée. Si l'appel donne une valeur, c'est celle-ci qui gagne.

Les paramètres avec une valeur par défaut viennent après ceux sans.`],
        ex: {
          uses: ['def'],
          t: ['The call greet("Ada") stops with an error. Give the parameter greeting the default value "Hello" so the program shows: Hello Ada', 'La chiamata greet("Ada") si ferma con un errore. Dai al parametro greeting il valore predefinito "Ciao" così il programma mostra: Ciao Ada', 'L\'appel greet("Ada") s\'arrête sur une erreur. Donne au paramètre greeting la valeur par défaut "Bonjour" pour que le programme affiche : Bonjour Ada'],
          h: ['def greet(name, greeting="..."):', 'def greet(name, greeting="..."):', 'def greet(name, greeting="..."):'],
          start: 'def greet(name, greeting):\n    print(greeting, name)\n\ngreet("Ada")',
          sol: ['def greet(name, greeting="Hello"):\n    print(greeting, name)\n\ngreet("Ada")', 'def greet(name, greeting="Ciao"):\n    print(greeting, name)\n\ngreet("Ada")', 'def greet(name, greeting="Bonjour"):\n    print(greeting, name)\n\ngreet("Ada")'],
          out: ['Hello Ada', 'Ciao Ada', 'Bonjour Ada']
        }
      },
      {
        c: c`def box(width, height, char="#"):
    for row in range(height):
        print(char * width)

box(5, 2)
box(3, 3, "*")
box(height=1, width=8, char="-")`,
        n: ['named-call'],
        t: ['Call with names', 'Chiama con i nomi', 'Appelle avec les noms'],
        x: [`When you call a function you can write the name of each parameter: height=1. The order no longer matters, and the call reads like a sentence.

You already did this with print, when you wrote sep= and end=.`,
          `Quando chiami una funzione puoi scrivere il nome di ogni parametro: height=1. L'ordine non conta più e la chiamata si legge come una frase.

Lo hai già fatto con print, quando scrivevi sep= e end=.`,
          `Quand tu appelles une fonction tu peux écrire le nom de chaque paramètre : height=1. L'ordre ne compte plus et l'appel se lit comme une phrase.

Tu l'as déjà fait avec print, quand tu écrivais sep= et end=.`],
        ex: {
          t: ['Call box with the names: width 6, height 1 and char "+", in any order. It must show a row of six + signs.', 'Chiama box con i nomi: width 6, height 1 e char "+", in qualsiasi ordine. Deve mostrare una fila di sei segni +.', 'Appelle box avec les noms : width 6, height 1 et char "+", dans n\'importe quel ordre. Elle doit afficher une rangée de six signes +.'],
          h: ['Each value is written name=value, separated by commas. With names, the order does not matter.', 'Ogni valore si scrive nome=valore, separato da virgole. Con i nomi, l\'ordine non conta.', 'Chaque valeur s\'écrit nom=valeur, séparée par des virgules. Avec les noms, l\'ordre ne compte pas.'],
          start: 'def box(width, height, char="#"):\n    for row in range(height):\n        print(char * width)',
          sol: 'def box(width, height, char="#"):\n    for row in range(height):\n        print(char * width)\n\nbox(height=1, width=6, char="+")', out: '++++++', c: 'width=6'
        }
      },
      {
        c: c`def total(*numbers):
    print(numbers)
    return sum(numbers)

print(total(1, 2, 3))
print(total(10))
print(total())`,
        n: ['*args'],
        t: ['As many values as you like', 'Tanti valori quanti vuoi', 'Autant de valeurs que tu veux'],
        x: [`A star before a parameter, *numbers, collects every value given into one tuple. The function can then be called with any number of values, even none.

print itself works like that: it takes as many things as you give it.`,
          `Una stella davanti a un parametro, *numbers, raccoglie tutti i valori dati in una sola tupla. La funzione si può chiamare con un numero qualsiasi di valori, anche nessuno.

Anche print funziona così: prende tutte le cose che gli dai.`,
          `Une étoile devant un paramètre, *numbers, rassemble toutes les valeurs données dans un seul tuple. La fonction peut alors être appelée avec n'importe quel nombre de valeurs, même aucune.

print lui-même marche ainsi : il prend autant de choses que tu lui en donnes.`],
        ex: {
          t: ['Make a function count_items(*items) that returns how many values it got. Show count_items(5, 6, 7, 8).', 'Crea una funzione count_items(*items) che restituisce quanti valori ha ricevuto. Mostra count_items(5, 6, 7, 8).', 'Crée une fonction count_items(*items) qui rend combien de valeurs elle a reçues. Affiche count_items(5, 6, 7, 8).'],
          h: ['return len(items)', 'return len(items)', 'return len(items)'],
          sol: 'def count_items(*items):\n    return len(items)\n\nprint(count_items(5, 6, 7, 8))', out: '4', c: '\\*items'
        }
      },
      {
        c: c`def profile(**details):
    for key, value in details.items():
        print(key, "=", value)

profile(name="Ada", age=12, city="Rome")

numbers = [4, 8, 15]
print(*numbers)
print(*numbers, sep=" | ")`,
        n: ['**kwargs', 'star'],
        t: ['Many named values', 'Molti valori con nome', 'Beaucoup de valeurs nommées'],
        x: [`Two stars, **details, collect all the named values of the call into a dictionary, which the function can walk through with items().

The star works the other way too, when you call: print(*numbers) spreads the list into separate values, as if you had written them one by one.`,
          `Due stelle, **details, raccolgono tutti i valori con nome della chiamata in un dizionario, che la funzione può scorrere con items().

La stella funziona anche al contrario, quando chiami: print(*numbers) spande la lista in valori separati, come se li avessi scritti uno a uno.`,
          `Deux étoiles, **details, rassemblent toutes les valeurs nommées de l'appel dans un dictionnaire, que la fonction peut parcourir avec items().

L'étoile marche aussi dans l'autre sens, quand tu appelles : print(*numbers) étale la liste en valeurs séparées, comme si tu les avais écrites une par une.`],
        ex: {
          t: ['Show the numbers of the list with a dash between them, using the star: 3-6-9', 'Mostra i numeri della lista con un trattino in mezzo, usando la stella: 3-6-9', 'Affiche les nombres de la liste avec un tiret entre eux, en utilisant l\'étoile : 3-6-9'],
          h: ['A * before the list hands its items to print one by one; sep= chooses what goes between them.', 'Un * prima della lista passa a print i suoi elementi uno per uno; sep= sceglie cosa mettere in mezzo.', 'Un * devant la liste donne ses éléments à print un par un ; sep= choisit ce qu\'on met entre eux.'],
          start: 'numbers = [3, 6, 9]', sol: 'numbers = [3, 6, 9]\nprint(*numbers, sep="-")', out: '3-6-9', c: '\\*numbers'
        }
      },
      {
        c: [c`def power(base, exponent=2):
    """Raise base to the exponent (the square by default)."""
    return base ** exponent

print(power(5))
print(power(2, 10))
print(power(exponent=3, base=2))
print(callable(power), type(power))
again = power
print(again(4))`, c`def power(base, exponent=2):
    """Eleva base all'esponente (il quadrato se non dici altro)."""
    return base ** exponent

print(power(5))
print(power(2, 10))
print(power(exponent=3, base=2))
print(callable(power), type(power))
again = power
print(again(4))`, c`def power(base, exponent=2):
    """Élève base à l'exposant (le carré si on ne dit rien)."""
    return base ** exponent

print(power(5))
print(power(2, 10))
print(power(exponent=3, base=2))
print(callable(power), type(power))
again = power
print(again(4))`],
        n: ['callable'],
        t: ['A function is a value too', 'Anche una funzione è un valore', 'Une fonction est aussi une valeur'],
        x: [`In Python a function is a thing like any other. You can keep it in a box (again = power, with no brackets: it is not called), give it to another function, or ask about it with callable and type.

Remember this idea. It opens a whole new way of writing programs, and you will use it soon.`,
          `In Python una funzione è una cosa come le altre. La puoi tenere in una scatola (again = power, senza parentesi: non viene chiamata), darla a un'altra funzione o interrogarla con callable e type.

Ricorda questa idea. Apre un modo tutto nuovo di scrivere i programmi, e la userai presto.`,
          `En Python une fonction est une chose comme les autres. Tu peux la garder dans une boîte (again = power, sans parenthèses : elle n'est pas appelée), la donner à une autre fonction, ou l'interroger avec callable et type.

Souviens-toi de cette idée. Elle ouvre une toute nouvelle façon d'écrire des programmes, et tu l'utiliseras bientôt.`],
        ex: {
          t: ['Ask if print can be called like a function, with callable, and show the answer.', 'Chiedi se print si può chiamare come una funzione, con callable, e mostra la risposta.', 'Demande si print peut être appelé comme une fonction, avec callable, et affiche la réponse.'],
          h: ['callable(...) answers True or False. Give it print itself, with no brackets after print.', 'callable(...) risponde True o False. Dagli print stesso, senza parentesi dopo print.', 'callable(...) répond True ou False. Donne-lui print lui-même, sans parenthèses après print.'],
          sol: 'print(callable(print))', out: 'True', c: 'callable'
        }
      }
    ]
  },
  {
    title: ['Where names live', 'Dove vivono i nomi', 'Où vivent les noms'],
    subtitle: ['Inside and outside a function', 'Dentro e fuori da una funzione', 'Dedans et dehors d\'une fonction'],
    steps: [
      {
        c: [c`def hello():
    message = "inside"
    print(message)

hello()
print(message)`, c`def hello():
    message = "dentro"
    print(message)

hello()
print(message)`, c`def hello():
    message = "dedans"
    print(message)

hello()
print(message)`],
        e: 'NameError',
        t: ['A box that only lives inside', 'Una scatola che vive solo dentro', 'Une boîte qui ne vit que dedans'],
        x: [`A name made inside a function is local: it exists only while the function runs. Outside, Python does not know it, and the last line stops with a NameError.

It is a good thing: every function has its own private boxes, so names inside cannot clash with names elsewhere.`,
          `Un nome creato dentro una funzione è locale: esiste solo mentre la funzione gira. Fuori, Python non lo conosce, e l'ultima riga si ferma con un NameError.

È una buona cosa: ogni funzione ha le sue scatole private, quindi i nomi dentro non possono scontrarsi con i nomi altrove.`,
          `Un nom créé dans une fonction est local : il n'existe que pendant que la fonction tourne. Dehors, Python ne le connaît pas, et la dernière ligne s'arrête avec une NameError.

C'est une bonne chose : chaque fonction a ses propres boîtes privées, donc les noms dedans ne peuvent pas se heurter aux noms d'ailleurs.`],
        ex: {
          t: ['Make it work: let the function return the message, and show it outside with print(hello()).', 'Fallo funzionare: fai restituire il messaggio alla funzione e mostralo fuori con print(hello()).', 'Fais-le marcher : fais rendre le message par la fonction et affiche-le dehors avec print(hello()).'],
          h: ['The box message only lives inside the function: return hands its value out to whoever called.', 'La scatola message vive solo dentro la funzione: return ne passa il valore fuori, a chi ha chiamato.', 'La boîte message ne vit que dans la fonction : return donne sa valeur à celui qui a appelé.'],
          start: ['def hello():\n    message = "inside"\n    print(message)\n\nhello()\nprint(message)', 'def hello():\n    message = "dentro"\n    print(message)\n\nhello()\nprint(message)', 'def hello():\n    message = "dedans"\n    print(message)\n\nhello()\nprint(message)'],
          sol: ['def hello():\n    message = "inside"\n    return message\n\nprint(hello())', 'def hello():\n    message = "dentro"\n    return message\n\nprint(hello())', 'def hello():\n    message = "dedans"\n    return message\n\nprint(hello())'],
          out: ['inside', 'dentro', 'dedans'], c: 'return'
        }
      },
      {
        c: c`rate = 2

def double_price(price):
    return price * rate

print(double_price(10))

rate = 3
print(double_price(10))`,
        t: ['Looking outside', 'Guardare fuori', 'Regarder dehors'],
        x: [`A function can read a name from outside (a global one), if it has no local name that is the same. Python looks inside first, then outside.

The function reads rate when it runs, not when it is made: after rate = 3, the answer changes. Reading is easy. Changing is where care is needed, as the next steps show.`,
          `Una funzione può leggere un nome da fuori (uno globale), se non ha un nome locale uguale. Python guarda prima dentro, poi fuori.

La funzione legge rate quando gira, non quando viene creata: dopo rate = 3 la risposta cambia. Leggere è facile. Cambiare è dove serve attenzione, come mostrano i passi seguenti.`,
          `Une fonction peut lire un nom de l'extérieur (un nom global), si elle n'a pas de nom local identique. Python regarde d'abord dedans, puis dehors.

La fonction lit rate quand elle tourne, pas quand elle est créée : après rate = 3, la réponse change. Lire est facile. Changer demande de l'attention, comme le montrent les étapes suivantes.`],
        ex: {
          uses: ['def'],
          t: ['Change the rate to 5, so that double_price(10) shows 50.', 'Cambia rate in 5, così double_price(10) mostra 50.', 'Change rate en 5, pour que double_price(10) affiche 50.'],
          h: ['Change the first line.', 'Cambia la prima riga.', 'Change la première ligne.'],
          start: 'rate = 2\n\ndef double_price(price):\n    return price * rate\n\nprint(double_price(10))', sol: 'rate = 5\n\ndef double_price(price):\n    return price * rate\n\nprint(double_price(10))', out: '50'
        }
      },
      {
        c: c`counter = 0

def add_one():
    counter = counter + 1

add_one()
print(counter)`,
        e: 'UnboundLocalError',
        t: ['Changing a name from outside', 'Cambiare un nome da fuori', 'Changer un nom de l\'extérieur'],
        x: [`Because add_one gives counter a value, Python decides that counter is a local name of the function. But then reading it before it has a value fails: UnboundLocalError.

The best fix is to give the function the value and take the answer back with return. The next step shows that, and another way.`,
          `Siccome add_one dà un valore a counter, Python decide che counter è un nome locale della funzione. Ma allora leggerlo prima che abbia un valore fallisce: UnboundLocalError.

La correzione migliore è dare alla funzione il valore e riprendere la risposta con return. Il passo dopo mostra questo, e un altro modo.`,
          `Comme add_one donne une valeur à counter, Python décide que counter est un nom local de la fonction. Mais alors le lire avant qu'il ait une valeur échoue : UnboundLocalError.

La meilleure correction est de donner la valeur à la fonction et de reprendre la réponse avec return. L'étape suivante montre cela, et une autre façon.`],
        ex: {
          t: ['Fix it the good way: give add_one the value as a parameter and return the new value. At the end, the program must show 1.', 'Correggilo nel modo buono: dai ad add_one il valore come parametro e restituisci il nuovo valore. Alla fine il programma deve mostrare 1.', 'Corrige-le de la bonne façon : donne à add_one la valeur comme paramètre et rends la nouvelle valeur. À la fin, le programme doit afficher 1.'],
          h: ['The function gets the old value as a parameter and returns the new one. Outside, put the answer back in counter.', 'La funzione riceve il vecchio valore come parametro e restituisce quello nuovo. Fuori, rimetti la risposta in counter.', 'La fonction reçoit l\'ancienne valeur en paramètre et rend la nouvelle. Dehors, remets la réponse dans counter.'],
          start: 'counter = 0\n\ndef add_one():\n    counter = counter + 1\n\nadd_one()\nprint(counter)', sol: 'counter = 0\n\ndef add_one(counter):\n    return counter + 1\n\ncounter = add_one(counter)\nprint(counter)', out: '1', c: 'return'
        }
      },
      {
        c: c`counter = 0

def add_one():
    global counter
    counter = counter + 1

add_one()
add_one()
print(counter)

def better(value):
    return value + 1

counter = better(counter)
print(counter)`,
        n: ['global'],
        t: ['global, and a better way', 'global, e un modo migliore', 'global, et une meilleure façon'],
        x: [`global counter says "I mean the name that lives outside". It works, but programmers avoid it: when many functions change the same box, a program gets hard to follow.

The better way is the one you just saw: give the function the value, and take the answer back with return, as in better.`,
          `global counter dice "intendo il nome che vive fuori". Funziona, ma i programmatori lo evitano: quando molte funzioni cambiano la stessa scatola, il programma diventa difficile da seguire.

Il modo migliore è quello che hai appena visto: dare alla funzione il valore e riprendere la risposta con return, come in better.`,
          `global counter dit "je parle du nom qui vit à l'extérieur". Ça marche, mais les programmeurs l'évitent : quand plusieurs fonctions changent la même boîte, un programme devient difficile à suivre.

La meilleure façon est celle que tu viens de voir : donner la valeur à la fonction, et reprendre la réponse avec return, comme dans better.`],
        ex: {
          t: ['Make a function reset that uses global to put 0 back in the box total. Call it, and show total.', 'Crea una funzione reset che usa global per rimettere 0 nella scatola total. Chiamala e mostra total.', 'Crée une fonction reset qui utilise global pour remettre 0 dans la boîte total. Appelle-la et affiche total.'],
          h: ['global total, then total = 0 inside reset.', 'global total, poi total = 0 dentro reset.', 'global total, puis total = 0 dans reset.'],
          start: 'total = 50', sol: 'total = 50\n\ndef reset():\n    global total\n    total = 0\n\nreset()\nprint(total)', out: '0', c: 'global'
        }
      },
      {
        c: c`def make_counter():
    count = 0
    def step():
        nonlocal count
        count += 1
        return count
    return step

a = make_counter()
b = make_counter()
print(a(), a(), a())
print(b())`,
        n: ['nonlocal'],
        t: ['A function inside a function', 'Una funzione dentro una funzione', 'Une fonction dans une fonction'],
        x: [`A function can make another function and give it back. The inner function step remembers count even after make_counter has finished, and nonlocal lets it change that box.

Each call to make_counter makes its own separate counter: that is why b starts from 1. This is called a closure. It is a little advanced: it is fine if you need to read it twice.`,
          `Una funzione può creare un'altra funzione e restituirla. La funzione interna step ricorda count anche dopo che make_counter è finita, e nonlocal le permette di cambiare quella scatola.

Ogni chiamata a make_counter crea il suo contatore separato: per questo b parte da 1. Si chiama closure. È un po' avanzato: va bene se devi leggerlo due volte.`,
          `Une fonction peut en créer une autre et la rendre. La fonction intérieure step se souvient de count même après que make_counter a fini, et nonlocal lui permet de changer cette boîte.

Chaque appel à make_counter crée son propre compteur séparé : c'est pourquoi b part de 1. On appelle ça une closure. C'est un peu avancé : ce n'est pas grave si tu dois le relire deux fois.`],
        ex: {
          uses: ['def', 'nonlocal'],
          t: ['Change step so that it adds 2 each time. It must show: 2 4 6  and then  2', 'Cambia step così che aggiunga 2 ogni volta. Deve mostrare: 2 4 6  e poi  2', 'Change step pour qu\'elle ajoute 2 à chaque fois. Elle doit afficher : 2 4 6  puis  2'],
          h: ['Find the line inside step that adds to count, and change only the number it adds.', 'Trova la riga dentro step che aggiunge a count, e cambia solo il numero che aggiunge.', 'Trouve la ligne dans step qui ajoute à count, et change seulement le nombre ajouté.'],
          start: 'def make_counter():\n    count = 0\n    def step():\n        nonlocal count\n        count += 1\n        return count\n    return step\n\na = make_counter()\nb = make_counter()\nprint(a(), a(), a())\nprint(b())',
          sol: 'def make_counter():\n    count = 0\n    def step():\n        nonlocal count\n        count += 2\n        return count\n    return step\n\na = make_counter()\nb = make_counter()\nprint(a(), a(), a())\nprint(b())', out: '2 4 6\n2'
        }
      }
    ]
  }
];
