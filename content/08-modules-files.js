// Stage 4 · Modules, maths, dates, files, errors and data files. See tools/build-course.js for the format.
// The files that the lessons make start with demo_, so they never touch a file of the student.
const c = String.raw;
const G4 = ['Stage 4 · The standard library', 'Fase 4 · La libreria standard', 'Étape 4 · La bibliothèque standard'];

module.exports = [
  {
    group: G4,
    title: ['Tool boxes: modules', 'Cassette degli attrezzi: i moduli', 'Boîtes à outils : les modules'],
    subtitle: ['Use what others already wrote', 'Usa quello che altri hanno già scritto', 'Utilise ce que d\'autres ont déjà écrit'],
    steps: [
      {
        c: c`import math
print(math.sqrt(144))
print(math.sqrt(2))`,
        n: ['module:math', 'math.sqrt'],
        t: ['import a tool box', 'import: porta una cassetta', 'import : apporte une boîte'],
        x: [`Python comes with many tool boxes, called modules. You saw import once, in the guessing game. Now you meet it properly.

import math brings the box called math, which holds the tools from maths class. You use its tools with a dot: math.sqrt(144) gives the square root of 144. You write import once, at the top of the program.`,
          `Python arriva con molte cassette di attrezzi, chiamate moduli. Hai visto import una volta, nel gioco a indovinare. Ora lo conosci per bene.

import math porta la cassetta che si chiama math, che contiene gli strumenti della matematica. Usi i suoi strumenti con un punto: math.sqrt(144) dà la radice quadrata di 144. Scrivi import una volta, in cima al programma.`,
          `Python vient avec beaucoup de boîtes à outils, appelées modules. Tu as vu import une fois, dans le jeu de devinettes. Maintenant tu le découvres pour de bon.

import math apporte la boîte qui s'appelle math, qui contient les outils des maths. Tu utilises ses outils avec un point : math.sqrt(144) donne la racine carrée de 144. Tu écris import une fois, en haut du programme.`],
        ex: {
          t: ['Show the square root of 81, using math.', 'Mostra la radice quadrata di 81, usando math.', 'Affiche la racine carrée de 81, en utilisant math.'],
          h: ['First bring in the module with import. Its tools are then written math.name(...): the square root is sqrt.', 'Prima porta dentro il modulo con import. I suoi strumenti si scrivono poi math.nome(...): la radice quadrata è sqrt.', 'D\'abord fais entrer le module avec import. Ses outils s\'écrivent ensuite math.nom(...) : la racine carrée est sqrt.'],
          sol: 'import math\nprint(math.sqrt(81))', out: '9.0', c: 'math\\.sqrt'
        }
      },
      {
        c: c`import math
print(math.pi)
print(math.floor(3.7))
print(math.ceil(3.2))`,
        n: ['math.pi', 'math.floor', 'math.ceil'],
        t: ['pi, floor and ceil', 'pi, floor e ceil', 'pi, floor et ceil'],
        x: [`math.pi is the number pi. It has no brackets, because it is a value, not a tool.

math.floor rounds down and math.ceil rounds up. They always go to a whole number: floor to the one below, ceil to the one above.`,
          `math.pi è il numero pi greco. Non ha parentesi, perché è un valore, non uno strumento.

math.floor arrotonda per difetto e math.ceil per eccesso. Vanno sempre a un numero intero: floor a quello sotto, ceil a quello sopra.`,
          `math.pi est le nombre pi. Il n'a pas de parenthèses, parce que c'est une valeur, pas un outil.

math.floor arrondit par défaut et math.ceil par excès. Ils vont toujours à un nombre entier : floor à celui d'en dessous, ceil à celui d'au-dessus.`],
        ex: {
          t: ['Show 7.1 rounded up to the next whole number.', 'Mostra 7.1 arrotondato per eccesso all\'intero successivo.', 'Affiche 7.1 arrondi par excès à l\'entier suivant.'],
          h: ['ceil rounds up, floor rounds down. Both live in math, so bring it in with import first.', 'ceil arrotonda per eccesso, floor per difetto. Stanno tutti e due in math, quindi portalo dentro prima con import.', 'ceil arrondit vers le haut, floor vers le bas. Les deux sont dans math, alors fais-le entrer d\'abord avec import.'],
          sol: 'import math\nprint(math.ceil(7.1))', out: '8', c: 'ceil'
        }
      },
      {
        c: c`from math import sqrt, pi
print(sqrt(81))
print(pi)

import math as m
print(m.sqrt(16))`,
        n: ['from', 'as'],
        t: ['from, and a nickname: as', 'from, e un soprannome: as', 'from, et un surnom : as'],
        x: [`from math import sqrt takes just the tool you want, and then you write sqrt with no "math." in front.

import math as m gives the box a shorter name: m.sqrt(16). Both ways are fine. Taking only what you need makes the code shorter, and keeping the box name makes it clear where each tool comes from.`,
          `from math import sqrt prende solo l'attrezzo che vuoi, e poi scrivi sqrt senza "math." davanti.

import math as m dà alla cassetta un nome più corto: m.sqrt(16). Vanno bene tutti e due i modi. Prendere solo quello che serve rende il codice più corto, e tenere il nome della cassetta chiarisce da dove viene ogni attrezzo.`,
          `from math import sqrt prend seulement l'outil que tu veux, puis tu écris sqrt sans "math." devant.

import math as m donne à la boîte un nom plus court : m.sqrt(16). Les deux façons sont bonnes. Ne prendre que ce qu'il faut rend le code plus court, et garder le nom de la boîte montre clairement d'où vient chaque outil.`],
        ex: {
          t: ['Take only the tool floor from math, with from, and show floor(9.99).', 'Prendi solo l\'attrezzo floor da math, con from, e mostra floor(9.99).', 'Prends seulement l\'outil floor de math, avec from, et affiche floor(9.99).'],
          h: ['from module import tool brings in just that tool, and then you write it without math. in front.', 'from modulo import strumento porta dentro solo quello strumento, e poi lo scrivi senza math. davanti.', 'from module import outil fait entrer seulement cet outil, et ensuite tu l\'écris sans math. devant.'],
          sol: 'from math import floor\nprint(floor(9.99))', out: '9', c: 'from math import'
        }
      },
      {
        c: c`import math
print(type(math))
names = [name for name in dir(math) if name.startswith("s")]
print(names[:6])`,
        n: ['dir'],
        t: ['What is inside a module?', 'Cosa c\'è dentro un modulo?', 'Qu\'y a-t-il dans un module ?'],
        x: [`You can look inside any box. dir(module) lists every name that it holds, so you can see its tools.

Here a comprehension keeps only the names that start with s, and we show the first six. When you do not remember a tool, asking dir is faster than looking it up.`,
          `Puoi guardare dentro qualsiasi cassetta. dir(modulo) elenca ogni nome che contiene, così vedi i suoi attrezzi.

Qui una comprensione tiene solo i nomi che iniziano con s, e mostriamo i primi sei. Quando non ricordi un attrezzo, chiedere a dir è più rapido che cercarlo.`,
          `Tu peux regarder dans n'importe quelle boîte. dir(module) liste chaque nom qu'elle contient, donc tu vois ses outils.

Ici une compréhension ne garde que les noms qui commencent par s, et on montre les six premiers. Quand tu ne te souviens pas d'un outil, demander à dir est plus rapide que le chercher.`],
        ex: {
          t: ['Show how many names the math module holds that start with the letter a.', 'Mostra quanti nomi che iniziano con la lettera a contiene il modulo math.', 'Affiche combien de noms qui commencent par la lettre a le module math contient.'],
          h: ['dir(math) gives the list of its names. A comprehension with an if can keep the ones that start with a (startswith), and len counts them.', 'dir(math) dà la lista dei suoi nomi. Una comprensione con un if può tenere quelli che cominciano con a (startswith), e len li conta.', 'dir(math) donne la liste de ses noms. Une compréhension avec un if peut garder ceux qui commencent par a (startswith), et len les compte.'],
          sol: 'import math\nprint(len([name for name in dir(math) if name.startswith("a")]))', m: '^\\d+$', c: 'dir\\(math\\)'
        }
      },
      {
        c: c`import this_module_does_not_exist`,
        e: 'ModuleNotFoundError',
        t: ['A box that does not exist', 'Una cassetta che non esiste', 'Une boîte qui n\'existe pas'],
        x: [`If the name of the module is wrong, or the module is not there, import stops with a ModuleNotFoundError.

Python comes with a huge standard library, and you will meet its best parts in this stage. The website cannot install extra packages, and modules that need a window, like turtle, only work in the desktop app.`,
          `Se il nome del modulo è sbagliato, o il modulo non c'è, import si ferma con un ModuleNotFoundError.

Python arriva con una libreria standard enorme, e in questa fase conoscerai le sue parti migliori. Il sito non può installare pacchetti extra, e i moduli che hanno bisogno di una finestra, come turtle, funzionano solo nell'app per computer.`,
          `Si le nom du module est faux, ou si le module n'est pas là, import s'arrête avec une ModuleNotFoundError.

Python vient avec une énorme bibliothèque standard, et tu en rencontreras les meilleures parties dans cette étape. Le site ne peut pas installer de paquets supplémentaires, et les modules qui ont besoin d'une fenêtre, comme turtle, ne marchent que dans l'application de bureau.`],
        ex: {
          uses: ['import'],
          t: ['Fix it: bring in the real module math and show math.pi.', 'Correggilo: porta il vero modulo math e mostra math.pi.', 'Corrige-le : apporte le vrai module math et affiche math.pi.'],
          h: ['The first line brings in something that does not exist. Bring in math, then show its pi.', 'La prima riga porta dentro qualcosa che non esiste. Porta dentro math, poi mostra il suo pi.', 'La première ligne fait entrer quelque chose qui n\'existe pas. Fais entrer math, puis affiche son pi.'],
          start: 'import this_module_does_not_exist', sol: 'import math\nprint(math.pi)', out: '3.141592653589793'
        }
      },
      {
        c: c`import math

print(math.floor(7.8), math.ceil(7.2))
print(round(math.pi, 3))`,
        t: ['Challenge: the area of a circle', 'Sfida: l\'area di un cerchio', 'Défi : l\'aire d\'un cercle'],
        x: ['math holds the tools of mathematics: floor rounds down, ceil rounds up, and pi is the famous number. round(x, 3) keeps three decimals.', 'math contiene gli strumenti della matematica: floor arrotonda per difetto, ceil per eccesso, e pi è il famoso numero. round(x, 3) tiene tre decimali.', 'math contient les outils des mathématiques : floor arrondit en dessous, ceil au-dessus, et pi est le fameux nombre. round(x, 3) garde trois décimales.'],
        ex: {
          t: ['A circle has a radius of 3. Show its area, pi times the radius squared, rounded to 2 decimals (28.27), using math.pi.', 'Un cerchio ha raggio 3. Mostra la sua area, pi per il raggio al quadrato, arrotondata a 2 decimali (28.27), usando math.pi.', 'Un cercle a un rayon de 3. Affiche son aire, pi fois le rayon au carré, arrondie à 2 décimales (28.27), avec math.pi.'],
          h: ['import math first; the radius squared is radius ** 2; round(..., 2) at the end.', 'Prima import math; il raggio al quadrato è radius ** 2; round(..., 2) alla fine.', 'D\'abord import math ; le rayon au carré est radius ** 2 ; round(..., 2) à la fin.'],
          start: '',
          sol: 'import math\n\nradius = 3\nprint(round(math.pi * radius ** 2, 2))',
          out: '28.27', uses: ['import', 'round']
        }
      }
    ]
  },
  {
    title: ['Maths and luck', 'Matematica e fortuna', 'Maths et chance'],
    subtitle: ['The math, random and statistics modules', 'I moduli math, random e statistics', 'Les modules math, random et statistics'],
    steps: [
      {
        c: c`import math
print(math.hypot(3, 4))
print(math.factorial(5))
print(math.gcd(12, 18))`,
        n: ['math.hypot', 'math.factorial', 'math.gcd'],
        t: ['More maths', 'Ancora matematica', 'Encore des maths'],
        x: [`math has more tools from maths class. hypot gives the long side of a right triangle from the two short sides. factorial multiplies all the whole numbers from 1 up to the one you give. gcd gives the biggest whole number that divides both numbers.`,
          `math ha altri strumenti della matematica. hypot dà il lato lungo di un triangolo rettangolo dai due lati corti. factorial moltiplica tutti i numeri interi da 1 fino a quello che dai. gcd dà il numero intero più grande che divide tutti e due i numeri.`,
          `math a d'autres outils des maths. hypot donne le grand côté d'un triangle rectangle à partir des deux petits côtés. factorial multiplie tous les nombres entiers de 1 jusqu'à celui que tu donnes. gcd donne le plus grand nombre entier qui divise les deux nombres.`],
        ex: {
          t: ['Show 6 factorial (6 x 5 x 4 x 3 x 2 x 1), using math.', 'Mostra 6 fattoriale (6 x 5 x 4 x 3 x 2 x 1), usando math.', 'Affiche 6 factorielle (6 x 5 x 4 x 3 x 2 x 1), en utilisant math.'],
          h: ['math has a tool for the factorial, and its name is the English word factorial. Do not forget the import.', 'math ha uno strumento per il fattoriale, e il suo nome è la parola inglese factorial. Non dimenticare l\'import.', 'math a un outil pour la factorielle, et son nom est le mot anglais factorial. N\'oublie pas l\'import.'],
          sol: 'import math\nprint(math.factorial(6))', out: '720', c: 'factorial'
        }
      },
      {
        c: [c`import math
r = 5
print("Area:", round(math.pi * r ** 2, 2))
print("Circumference:", round(2 * math.pi * r, 2))
print(math.degrees(math.pi), math.radians(180))
print(math.isclose(0.1 + 0.2, 0.3))`, c`import math
r = 5
print("Area:", round(math.pi * r ** 2, 2))
print("Circonferenza:", round(2 * math.pi * r, 2))
print(math.degrees(math.pi), math.radians(180))
print(math.isclose(0.1 + 0.2, 0.3))`, c`import math
r = 5
print("Aire :", round(math.pi * r ** 2, 2))
print("Circonférence :", round(2 * math.pi * r, 2))
print(math.degrees(math.pi), math.radians(180))
print(math.isclose(0.1 + 0.2, 0.3))`],
        n: ['math.degrees', 'math.radians', 'math.isclose'],
        t: ['A circle, and angles', 'Un cerchio, e gli angoli', 'Un cercle, et les angles'],
        x: [`With math.pi you can work with circles: the area is pi times r squared, and the circumference is 2 times pi times r.

degrees and radians change between two ways to measure angles. And isclose compares decimals with a little tolerance: remember that 0.1 + 0.2 is not exactly 0.3, but isclose says they are the same for every practical use.`,
          `Con math.pi puoi lavorare con i cerchi: l'area è pi per r al quadrato, e la circonferenza è 2 per pi per r.

degrees e radians passano da un modo di misurare gli angoli all'altro. E isclose confronta i decimali con un po' di tolleranza: ricorda che 0.1 + 0.2 non è esattamente 0.3, ma isclose dice che sono uguali per ogni uso pratico.`,
          `Avec math.pi tu peux travailler avec des cercles : l'aire est pi fois r au carré, et la circonférence est 2 fois pi fois r.

degrees et radians passent d'une façon de mesurer les angles à l'autre. Et isclose compare les décimaux avec un peu de tolérance : souviens-toi que 0.1 + 0.2 n'est pas exactement 0.3, mais isclose dit qu'ils sont pareils pour tout usage pratique.`],
        ex: {
          t: ['A circle has radius 10. Show its area, rounded to 2 decimals.', 'Un cerchio ha raggio 10. Mostra la sua area, arrotondata a 2 decimali.', 'Un cercle a un rayon de 10. Affiche son aire, arrondie à 2 décimales.'],
          h: ['The area is pi times the radius times itself. math.pi is pi, ** 2 squares, and round with 2 keeps two decimals.', 'L\'area è pi greco per il raggio per se stesso. math.pi è pi greco, ** 2 eleva al quadrato, e round con 2 tiene due decimali.', 'L\'aire est pi fois le rayon fois lui-même. math.pi est pi, ** 2 met au carré, et round avec 2 garde deux décimales.'],
          start: 'import math\nr = 10', sol: 'import math\nr = 10\nprint(round(math.pi * r ** 2, 2))', out: '314.16', c: 'round'
        }
      },
      {
        c: c`import random
random.seed(7)
print(random.randint(1, 6))
print(random.random())`,
        n: ['random.seed', 'random.random'],
        t: ['Luck, fixed with a seed', 'La fortuna, fissata da un seme', 'La chance, fixée par une graine'],
        x: [`You already used random.randint. random.random gives a decimal number between 0 and 1.

random.seed(7) fixes the luck: with the same seed, the same "random" numbers come out every time you run the program. It is perfect for tests and for lessons, when you need to be sure of the result.`,
          `Hai già usato random.randint. random.random dà un numero decimale tra 0 e 1.

random.seed(7) fissa la fortuna: con lo stesso seme, escono ogni volta che esegui il programma gli stessi numeri "a caso". È perfetto per i test e per le lezioni, quando devi essere sicuro del risultato.`,
          `Tu as déjà utilisé random.randint. random.random donne un nombre décimal entre 0 et 1.

random.seed(7) fixe la chance : avec la même graine, les mêmes nombres "au hasard" sortent à chaque fois que tu lances le programme. C'est parfait pour les tests et pour les leçons, quand tu as besoin d'être sûr du résultat.`],
        ex: {
          t: ['Use the seed 1, then show a whole number from 1 to 10 with randint. Run it twice: it must be the same.', 'Usa il seme 1, poi mostra un numero intero da 1 a 10 con randint. Eseguilo due volte: deve essere lo stesso.', 'Utilise la graine 1, puis affiche un nombre entier de 1 à 10 avec randint. Lance-le deux fois : il doit être le même.'],
          h: ['First fix the luck with seed and the number 1; then ask randint for a number from 1 to 10, and show it.', 'Prima fissa la fortuna con seed e il numero 1; poi chiedi a randint un numero da 1 a 10, e mostralo.', 'D\'abord fixe la chance avec seed et le nombre 1 ; puis demande à randint un nombre de 1 à 10, et affiche-le.'],
          sol: 'import random\nrandom.seed(1)\nprint(random.randint(1, 10))', m: '^\\d+$', c: 'seed\\(1\\)'
        }
      },
      {
        c: [c`import random
random.seed(3)
print(random.choice(["rock", "paper", "scissors"]))
cards = [1, 2, 3, 4, 5]
random.shuffle(cards)
print(cards)`, c`import random
random.seed(3)
print(random.choice(["sasso", "carta", "forbici"]))
cards = [1, 2, 3, 4, 5]
random.shuffle(cards)
print(cards)`, c`import random
random.seed(3)
print(random.choice(["pierre", "feuille", "ciseaux"]))
cards = [1, 2, 3, 4, 5]
random.shuffle(cards)
print(cards)`],
        n: ['random.choice', 'random.shuffle'],
        t: ['Pick and shuffle', 'Scegli e mescola', 'Choisis et mélange'],
        x: [`random.choice picks one item of a list by luck. random.shuffle mixes the items of a list, in place: the list itself changes, and nothing is given back.

With these two, you can make cards, dice, quizzes and games.`,
          `random.choice sceglie a caso un elemento di una lista. random.shuffle mescola gli elementi di una lista, sul posto: la lista stessa cambia e non restituisce niente.

Con questi due puoi fare carte, dadi, quiz e giochi.`,
          `random.choice choisit au hasard un élément d'une liste. random.shuffle mélange les éléments d'une liste, sur place : la liste elle-même change, et rien n'est rendu.

Avec ces deux-là, tu peux faire des cartes, des dés, des quiz et des jeux.`],
        ex: {
          t: ['With the seed already set, shuffle the list [1, 2, 3] and show it. It must be a list with the same three numbers.', 'Con il seme già impostato, mescola la lista [1, 2, 3] e mostrala. Deve essere una lista con gli stessi tre numeri.', 'Avec la graine déjà fixée, mélange la liste [1, 2, 3] et affiche-la. Ce doit être une liste avec les mêmes trois nombres.'],
          h: ['random.shuffle mixes the list in place and gives back nothing: shuffle first, then show the list.', 'random.shuffle mescola la lista sul posto e non restituisce niente: prima mescola, poi mostra la lista.', 'random.shuffle mélange la liste sur place et ne rend rien : mélange d\'abord, puis affiche la liste.'],
          start: 'import random\nrandom.seed(5)\ncards = [1, 2, 3]', sol: 'import random\nrandom.seed(5)\ncards = [1, 2, 3]\nrandom.shuffle(cards)\nprint(cards)', m: '^\\[[123], [123], [123]\\]$', c: 'shuffle'
        }
      },
      {
        c: [c`import random
choices = ["rock", "paper", "scissors"]
beats = {"rock": "scissors", "paper": "rock", "scissors": "paper"}

random.seed(3)
for round_number in range(1, 4):
    you = random.choice(choices)
    computer = random.choice(choices)
    if you == computer:
        result = "draw"
    elif beats[you] == computer:
        result = "you win"
    else:
        result = "computer wins"
    print(f"Round {round_number}: {you} vs {computer} -> {result}")`, c`import random
choices = ["sasso", "carta", "forbici"]
beats = {"sasso": "forbici", "carta": "sasso", "forbici": "carta"}

random.seed(3)
for round_number in range(1, 4):
    you = random.choice(choices)
    computer = random.choice(choices)
    if you == computer:
        result = "pareggio"
    elif beats[you] == computer:
        result = "vinci tu"
    else:
        result = "vince il computer"
    print(f"Giro {round_number}: {you} contro {computer} -> {result}")`, c`import random
choices = ["pierre", "feuille", "ciseaux"]
beats = {"pierre": "ciseaux", "feuille": "pierre", "ciseaux": "feuille"}

random.seed(3)
for round_number in range(1, 4):
    you = random.choice(choices)
    computer = random.choice(choices)
    if you == computer:
        result = "égalité"
    elif beats[you] == computer:
        result = "tu gagnes"
    else:
        result = "l'ordinateur gagne"
    print(f"Tour {round_number} : {you} contre {computer} -> {result}")`],
        t: ['Rock, paper, scissors', 'Sasso, carta, forbici', 'Pierre, feuille, ciseaux'],
        x: [`A small game that uses a dictionary (who beats whom), a list of choices, random.choice and if, elif, else. Here both players are random, and the seed makes the output the same every time.

To play against the computer, replace the first choice with an input.`,
          `Un piccolo gioco che usa un dizionario (chi batte chi), una lista di scelte, random.choice e if, elif, else. Qui tutti e due i giocatori sono a caso, e il seme fa uscire sempre lo stesso risultato.

Per giocare contro il computer, sostituisci la prima scelta con un input.`,
          `Un petit jeu qui utilise un dictionnaire (qui bat qui), une liste de choix, random.choice et if, elif, else. Ici les deux joueurs sont au hasard, et la graine fait sortir toujours le même résultat.

Pour jouer contre l'ordinateur, remplace le premier choix par un input.`],
        ex: {
          uses: ['for'],
          t: ['Change the game so that it plays 5 rounds instead of 3.', 'Cambia il gioco così che faccia 5 giri invece di 3.', 'Change le jeu pour qu\'il joue 5 tours au lieu de 3.'],
          h: ['Which range decides how many rounds are played? Remember that it stops just before its last number.', 'Quale range decide quanti giri si fanno? Ricorda che si ferma subito prima del suo ultimo numero.', 'Quel range décide combien de tours on joue ? Souviens-toi qu\'il s\'arrête juste avant son dernier nombre.'],
          start: [c`import random
choices = ["rock", "paper", "scissors"]
random.seed(3)
for round_number in range(1, 4):
    print("Round", round_number, random.choice(choices))`, c`import random
choices = ["sasso", "carta", "forbici"]
random.seed(3)
for round_number in range(1, 4):
    print("Giro", round_number, random.choice(choices))`, c`import random
choices = ["pierre", "feuille", "ciseaux"]
random.seed(3)
for round_number in range(1, 4):
    print("Tour", round_number, random.choice(choices))`],
          sol: [c`import random
choices = ["rock", "paper", "scissors"]
random.seed(3)
for round_number in range(1, 6):
    print("Round", round_number, random.choice(choices))`, c`import random
choices = ["sasso", "carta", "forbici"]
random.seed(3)
for round_number in range(1, 6):
    print("Giro", round_number, random.choice(choices))`, c`import random
choices = ["pierre", "feuille", "ciseaux"]
random.seed(3)
for round_number in range(1, 6):
    print("Tour", round_number, random.choice(choices))`],
          m: '^(?:.*\\n){4}.+$'
        }
      },
      {
        c: c`import statistics
data = [2, 4, 4, 4, 5, 5, 7, 9]
print(statistics.mean(data))
print(statistics.median(data))`,
        n: ['module:statistics', 'statistics.mean', 'statistics.median'],
        t: ['Averages and more: statistics', 'Medie e altro: statistics', 'Moyennes et plus : statistics'],
        x: [`The statistics module gives mean (the average) and median (the value in the middle when the numbers are in order). It also has mode, the value that appears most often.

A good habit is to check a result by hand, for example the mean as sum divided by len.`,
          `Il modulo statistics dà mean (la media) e median (il valore in mezzo quando i numeri sono in ordine). Ha anche mode, il valore che compare più spesso.

Una buona abitudine è controllare un risultato a mano, per esempio la media come sum diviso len.`,
          `Le module statistics donne mean (la moyenne) et median (la valeur du milieu quand les nombres sont dans l'ordre). Il a aussi mode, la valeur qui apparaît le plus souvent.

Une bonne habitude est de vérifier un résultat à la main, par exemple la moyenne comme sum divisé par len.`],
        ex: {
          t: ['Show the median of the list [3, 9, 1, 7, 5].', 'Mostra la mediana della lista [3, 9, 1, 7, 5].', 'Affiche la médiane de la liste [3, 9, 1, 7, 5].'],
          h: ['statistics has a tool for the value in the middle of a list: its English name is median.', 'statistics ha uno strumento per il valore in mezzo a una lista: il suo nome inglese è median.', 'statistics a un outil pour la valeur du milieu d\'une liste : son nom anglais est median.'],
          sol: 'import statistics\nprint(statistics.median([3, 9, 1, 7, 5]))', out: '5', c: 'median'
        }
      },
      {
        c: c`import statistics

marks = [6, 8, 7, 8, 5]
print(statistics.mean(marks))
print(statistics.median(marks))
print(statistics.mode(marks))`,
        n: ['statistics.mode'],
        t: ['Challenge: the marks of a class', 'Sfida: i voti di una classe', 'Défi : les notes d\'une classe'],
        x: ['statistics does the usual sums on a list: the mean is the average, the median is the middle value once the list is in order, and the mode is the value that comes back most often.', 'statistics fa i conti di sempre su una lista: mean è la media, median è il valore in mezzo quando la lista è in ordine, e mode è il valore che torna più spesso.', 'statistics fait les calculs habituels sur une liste : mean est la moyenne, median est la valeur du milieu une fois la liste triée, et mode est la valeur qui revient le plus souvent.'],
        ex: {
          t: ['The marks are 4, 9, 6, 9 and 7. Show their mean (7) and then the mark that appears most often (9), using statistics.mode.', 'I voti sono 4, 9, 6, 9 e 7. Mostra la loro media (7) e poi il voto che appare più spesso (9), usando statistics.mode.', 'Les notes sont 4, 9, 6, 9 et 7. Affiche leur moyenne (7) puis la note qui revient le plus souvent (9), avec statistics.mode.'],
          h: ['A list of the five marks, then statistics.mean and statistics.mode on it.', 'Una lista dei cinque voti, poi statistics.mean e statistics.mode su di essa.', 'Une liste des cinq notes, puis statistics.mean et statistics.mode dessus.'],
          start: '',
          sol: 'import statistics\n\nmarks = [4, 9, 6, 9, 7]\nprint(statistics.mean(marks))\nprint(statistics.mode(marks))',
          out: '7\n9', uses: ['.mean', '.mode']
        }
      }
    ]
  },
  {
    title: ['Dates and time', 'Date e orari', 'Dates et heures'],
    subtitle: ['The datetime module', 'Il modulo datetime', 'Le module datetime'],
    steps: [
      {
        c: c`from datetime import date
birthday = date(2014, 5, 17)
print(birthday)
print(birthday.year, birthday.month, birthday.day)
print(birthday.strftime("%d/%m/%Y"))`,
        n: ['datetime.date', '.strftime'],
        t: ['A date', 'Una data', 'Une date'],
        x: [`date(year, month, day) makes a date. You can read its year, month and day with .year, .month and .day.

strftime writes the date in the form you describe: %d is the day, %m the month and %Y the year.`,
          `date(anno, mese, giorno) fa una data. Puoi leggere il suo anno, mese e giorno con .year, .month e .day.

strftime scrive la data nella forma che descrivi: %d è il giorno, %m il mese e %Y l'anno.`,
          `date(année, mois, jour) fait une date. Tu peux lire son année, mois et jour avec .year, .month et .day.

strftime écrit la date sous la forme que tu décris : %d est le jour, %m le mois et %Y l'année.`],
        ex: {
          t: ['Make the date 1 January 2030 and show it as 01/01/2030 with strftime.', 'Fai la data 1 gennaio 2030 e mostrala come 01/01/2030 con strftime.', 'Fais la date du 1er janvier 2030 et affiche-la comme 01/01/2030 avec strftime.'],
          h: ['Build the date with year, month and day. Then strftime writes it: %d is the day, %m the month, %Y the year, with / between them.', 'Costruisci la data con anno, mese e giorno. Poi strftime la scrive: %d è il giorno, %m il mese, %Y l\'anno, con / in mezzo.', 'Construis la date avec année, mois et jour. Puis strftime l\'écrit : %d est le jour, %m le mois, %Y l\'année, avec / entre eux.'],
          sol: 'from datetime import date\nprint(date(2030, 1, 1).strftime("%d/%m/%Y"))', out: '01/01/2030', c: 'strftime'
        }
      },
      {
        c: [c`from datetime import date, timedelta
start = date(2026, 12, 20)
print(start + timedelta(days=14))
print(start - timedelta(weeks=1))
christmas = date(2026, 12, 25)
print((christmas - start).days, "days to Christmas")
print(date(2028, 2, 28) + timedelta(days=1))`, c`from datetime import date, timedelta
start = date(2026, 12, 20)
print(start + timedelta(days=14))
print(start - timedelta(weeks=1))
christmas = date(2026, 12, 25)
print((christmas - start).days, "giorni a Natale")
print(date(2028, 2, 28) + timedelta(days=1))`, c`from datetime import date, timedelta
start = date(2026, 12, 20)
print(start + timedelta(days=14))
print(start - timedelta(weeks=1))
christmas = date(2026, 12, 25)
print((christmas - start).days, "jours avant Noël")
print(date(2028, 2, 28) + timedelta(days=1))`],
        n: ['datetime.timedelta'],
        t: ['Counting days', 'Contare i giorni', 'Compter les jours'],
        x: [`timedelta is an amount of time. Add it to a date to move forward, subtract it to go back. Subtracting two dates gives a timedelta, and .days tells how many days.

Python knows the calendar, even leap years: 28 February 2028 plus one day is the 29th.`,
          `timedelta è una quantità di tempo. Aggiungila a una data per andare avanti, sottraila per tornare indietro. Sottrarre due date dà un timedelta, e .days dice quanti giorni.

Python conosce il calendario, anche gli anni bisestili: il 28 febbraio 2028 più un giorno è il 29.`,
          `timedelta est une quantité de temps. Ajoute-la à une date pour avancer, soustrais-la pour reculer. Soustraire deux dates donne un timedelta, et .days dit combien de jours.

Python connaît le calendrier, même les années bissextiles : le 28 février 2028 plus un jour donne le 29.`],
        ex: {
          t: ['How many days are there between 1 January 2027 and 31 December 2027? Show it.', 'Quanti giorni ci sono tra il 1 gennaio 2027 e il 31 dicembre 2027? Mostralo.', 'Combien de jours y a-t-il entre le 1er janvier 2027 et le 31 décembre 2027 ? Affiche-le.'],
          h: ['Subtract the first date from the last one: the result has .days.', 'Sottrai la prima data dall\'ultima: il risultato ha .days.', 'Soustrais la première date de la dernière : le résultat a .days.'],
          sol: 'from datetime import date\nprint((date(2027, 12, 31) - date(2027, 1, 1)).days)', out: '364', c: '\\.days'
        }
      },
      {
        c: c`from datetime import datetime
moment = datetime(2026, 10, 20, 14, 30, 5)
print(moment)
print(moment.hour, moment.minute, moment.second)
print(moment.strftime("%H:%M"))
parsed = datetime.strptime("2026-03-08 09:15", "%Y-%m-%d %H:%M")
print(parsed)`,
        n: ['datetime.datetime', '.strptime'],
        t: ['Date and time of day', 'Data e ora del giorno', 'Date et heure du jour'],
        x: [`datetime keeps both the date and the time of day. strftime turns it into a text, with %H for the hour and %M for the minutes.

Its twin strptime goes the other way: it reads a text written in a form you describe, and makes a datetime. This is how you read dates that people type, or that come from a file.`,
          `datetime tiene sia la data sia l'ora del giorno. strftime lo trasforma in testo, con %H per l'ora e %M per i minuti.

Il suo gemello strptime fa il contrario: legge un testo scritto in una forma che descrivi e fa un datetime. È così che leggi le date che le persone scrivono, o che arrivano da un file.`,
          `datetime garde à la fois la date et l'heure. strftime le transforme en texte, avec %H pour l'heure et %M pour les minutes.

Son jumeau strptime va dans l'autre sens : il lit un texte écrit sous une forme que tu décris, et fait un datetime. C'est ainsi que tu lis les dates que les gens tapent, ou qui viennent d'un fichier.`],
        ex: {
          t: ['Read the text "2030-06-15 18:45" with strptime and show the hour and minute like 18:45, using strftime.', 'Leggi il testo "2030-06-15 18:45" con strptime e mostra l\'ora e i minuti come 18:45, usando strftime.', 'Lis le texte "2030-06-15 18:45" avec strptime et affiche l\'heure et les minutes comme 18:45, en utilisant strftime.'],
          h: ['strptime reads the text with a pattern of codes: %Y year, %m month, %d day, %H hour, %M minute, with the same dashes, space and colon as the text. Then strftime with only the codes of the hour and the minute.', 'strptime legge il testo con uno schema di codici: %Y anno, %m mese, %d giorno, %H ora, %M minuto, con gli stessi trattini, spazio e due punti del testo. Poi strftime con solo i codici dell\'ora e del minuto.', 'strptime lit le texte avec un modèle de codes : %Y année, %m mois, %d jour, %H heure, %M minute, avec les mêmes tirets, espace et deux-points que le texte. Puis strftime avec seulement les codes de l\'heure et de la minute.'],
          sol: 'from datetime import datetime\nwhen = datetime.strptime("2030-06-15 18:45", "%Y-%m-%d %H:%M")\nprint(when.strftime("%H:%M"))', out: '18:45', c: 'strptime'
        }
      },
      {
        c: [c`from datetime import datetime
import time
now = datetime.now()
print("The clock says 2026 or later:", now.year >= 2026)
start = time.time()
total = sum(range(1000000))
elapsed = time.time() - start
print("Counting took less than 5 seconds:", elapsed < 5)`, c`from datetime import datetime
import time
now = datetime.now()
print("L'orologio dice 2026 o dopo:", now.year >= 2026)
start = time.time()
total = sum(range(1000000))
elapsed = time.time() - start
print("Contare ha richiesto meno di 5 secondi:", elapsed < 5)`, c`from datetime import datetime
import time
now = datetime.now()
print("L'horloge dit 2026 ou après :", now.year >= 2026)
start = time.time()
total = sum(range(1000000))
elapsed = time.time() - start
print("Compter a pris moins de 5 secondes :", elapsed < 5)`],
        n: ['.now', 'module:time', 'time.time'],
        t: ['Now, and how long it took', 'Adesso, e quanto ci è voluto', 'Maintenant, et combien de temps ça a pris'],
        x: [`datetime.now() gives the current moment, from the computer's clock. time.time() gives the seconds that have passed since a fixed date long ago.

That is perfect to measure how long something takes: take the time before, take it after, and subtract.`,
          `datetime.now() dà il momento attuale, dall'orologio del computer. time.time() dà i secondi passati da una data fissa molto tempo fa.

È perfetto per misurare quanto ci mette qualcosa: prendi il tempo prima, prendilo dopo e sottrai.`,
          `datetime.now() donne le moment actuel, d'après l'horloge de l'ordinateur. time.time() donne les secondes passées depuis une date fixe il y a longtemps.

C'est parfait pour mesurer combien de temps prend quelque chose : prends l'heure avant, prends-la après, et soustrais.`],
        ex: {
          t: ['Measure how long it takes to add the numbers up to 100000 with sum(range(100000)), and show whether it was less than 5 seconds (it must show True).', 'Misura quanto ci vuole a sommare i numeri fino a 100000 con sum(range(100000)) e mostra se è stato meno di 5 secondi (deve mostrare True).', 'Mesure combien de temps il faut pour additionner les nombres jusqu\'à 100000 avec sum(range(100000)) et affiche si c\'était moins de 5 secondes (il doit afficher True).'],
          h: ['Keep time.time() in a box before the sum. After it, time.time() minus that box is how long it took: compare it with 5.', 'Tieni time.time() in una scatola prima della somma. Dopo, time.time() meno quella scatola è quanto ci ha messo: confrontalo con 5.', 'Garde time.time() dans une boîte avant la somme. Après, time.time() moins cette boîte est le temps qu\'il a fallu : compare-le à 5.'],
          sol: 'import time\nstart = time.time()\ntotal = sum(range(100000))\nprint(time.time() - start < 5)', out: 'True', c: 'time\\.time'
        }
      },
      {
        c: c`from datetime import date

start = date(2026, 1, 1)
end = date(2026, 3, 1)
print((end - start).days)
print(end.strftime("%d/%m/%Y"))`,
        t: ['Challenge: days between two dates', 'Sfida: giorni tra due date', 'Défi : des jours entre deux dates'],
        x: ['Subtracting two dates gives a timedelta, and .days is its number of days. strftime writes a date the way you choose.', 'Sottrarre due date dà un timedelta, e .days è il suo numero di giorni. strftime scrive una data come vuoi tu.', 'Soustraire deux dates donne un timedelta, et .days est son nombre de jours. strftime écrit une date comme tu veux.'],
        ex: {
          t: ['How many days are there from 1 June 2026 to 1 September 2026? Show the number (92), letting Python subtract the dates.', 'Quanti giorni ci sono dal 1 giugno 2026 al 1 settembre 2026? Mostra il numero (92), lasciando a Python la sottrazione delle date.', 'Combien de jours y a-t-il du 1er juin 2026 au 1er septembre 2026 ? Affiche le nombre (92), en laissant Python soustraire les dates.'],
          h: ['Two date(...) with year, month and day; subtract them and take .days.', 'Due date(...) con anno, mese e giorno; sottraile e prendi .days.', 'Deux date(...) avec année, mois et jour ; soustrais-les et prends .days.'],
          start: '',
          sol: 'from datetime import date\n\nprint((date(2026, 9, 1) - date(2026, 6, 1)).days)',
          out: '92', uses: ['-', 'import']
        }
      }
    ]
  },
  {
    title: ['Files', 'I file', 'Les fichiers'],
    subtitle: ['Write and read text that stays', 'Scrivi e leggi testo che resta', 'Écris et lis du texte qui reste'],
    steps: [
      {
        c: [c`with open("demo_notes.txt", "w") as f:
    f.write("First line\n")
    f.write("Second line\n")
print("File written")`, c`with open("demo_notes.txt", "w") as f:
    f.write("Prima riga\n")
    f.write("Seconda riga\n")
print("File scritto")`, c`with open("demo_notes.txt", "w") as f:
    f.write("Première ligne\n")
    f.write("Deuxième ligne\n")
print("Fichier écrit")`],
        n: ['open', 'with', '.write'],
        t: ['Write a file', 'Scrivi un file', 'Écris un fichier'],
        x: [`Until now, everything the program knew was forgotten when it ended. A file keeps it.

open("name", "w") opens a file to write: it makes the file, or erases the old one. with opens it, runs the pushed-in lines, and closes it by itself at the end. write puts text inside, and you add the \\n for a new line. The files of these lessons start with demo_, so they never touch your own files.`,
          `Finora tutto quello che il programma sapeva veniva dimenticato quando finiva. Un file lo conserva.

open("nome", "w") apre un file per scrivere: crea il file, oppure cancella il vecchio. with lo apre, esegue le righe rientrate e lo chiude da solo alla fine. write mette del testo dentro, e tu aggiungi \\n per la riga nuova. I file di queste lezioni iniziano con demo_, così non toccano mai i tuoi file.`,
          `Jusqu'ici, tout ce que le programme savait était oublié quand il se terminait. Un fichier le garde.

open("nom", "w") ouvre un fichier pour écrire : il crée le fichier, ou efface l'ancien. with l'ouvre, lance les lignes décalées et le ferme tout seul à la fin. write met du texte dedans, et tu ajoutes \\n pour une nouvelle ligne. Les fichiers de ces leçons commencent par demo_, donc ils ne touchent jamais tes propres fichiers.`],
        ex: {
          t: ['Write a file called demo_hello.txt with the text hello inside, and show: done', 'Scrivi un file che si chiama demo_hello.txt con dentro il testo ciao e mostra: fatto', 'Écris un fichier qui s\'appelle demo_hello.txt avec le texte salut dedans et affiche : fini'],
          h: ['The program of this step writes a file the same way: change the file name and the text, and add the print at the end, not pushed in.', 'Il programma di questo passo scrive un file allo stesso modo: cambia il nome del file e il testo, e aggiungi il print alla fine, non rientrato.', 'Le programme de cette étape écrit un fichier de la même façon : change le nom du fichier et le texte, et ajoute le print à la fin, sans décalage.'],
          sol: ['with open("demo_hello.txt", "w") as f:\n    f.write("hello")\nprint("done")', 'with open("demo_hello.txt", "w") as f:\n    f.write("ciao")\nprint("fatto")', 'with open("demo_hello.txt", "w") as f:\n    f.write("salut")\nprint("fini")'],
          out: ['done', 'fatto', 'fini'], c: 'demo_hello\\.txt'
        }
      },
      {
        c: [c`with open("demo_notes.txt", "w") as f:
    f.write("First line\n")
    f.write("Second line\n")
with open("demo_notes.txt") as f:
    text = f.read()
print(text)`, c`with open("demo_notes.txt", "w") as f:
    f.write("Prima riga\n")
    f.write("Seconda riga\n")
with open("demo_notes.txt") as f:
    text = f.read()
print(text)`, c`with open("demo_notes.txt", "w") as f:
    f.write("Première ligne\n")
    f.write("Deuxième ligne\n")
with open("demo_notes.txt") as f:
    text = f.read()
print(text)`],
        n: ['.read'],
        t: ['Read it back', 'Rileggilo', 'Relis-le'],
        x: [`open("name") with nothing else opens a file to read. read gives everything that is in the file, as one long text.

First the program writes the file, then it reads it back and shows it. The text you get is exactly what you wrote, new lines included.`,
          `open("nome") senza altro apre un file per leggere. read dà tutto quello che c'è nel file, come un unico lungo testo.

Prima il programma scrive il file, poi lo rilegge e lo mostra. Il testo che ottieni è esattamente quello che hai scritto, righe nuove comprese.`,
          `open("nom") sans rien d'autre ouvre un fichier pour lire. read donne tout ce qu'il y a dans le fichier, comme un seul long texte.

D'abord le programme écrit le fichier, puis il le relit et l'affiche. Le texte que tu obtiens est exactement ce que tu as écrit, retours à la ligne compris.`],
        ex: {
          t: ['Write the text hello world in a file, read it back, and show how many letters it has (11).', 'Scrivi il testo ciao a tutti in un file, rileggilo e mostra quante lettere ha (12).', 'Écris le texte salut tout le monde dans un fichier, relis-le et affiche combien de lettres il a (19).'],
          h: ['Two with blocks: the first writes (mode "w"), the second opens the same file to read and keeps the whole text with read. len counts its letters.', 'Due blocchi with: il primo scrive (modo "w"), il secondo apre lo stesso file per leggere e tiene tutto il testo con read. len conta le sue lettere.', 'Deux blocs with : le premier écrit (mode "w"), le second ouvre le même fichier pour lire et garde tout le texte avec read. len compte ses lettres.'],
          sol: ['with open("demo_t.txt", "w") as f:\n    f.write("hello world")\nwith open("demo_t.txt") as f:\n    text = f.read()\nprint(len(text))', 'with open("demo_t.txt", "w") as f:\n    f.write("ciao a tutti")\nwith open("demo_t.txt") as f:\n    text = f.read()\nprint(len(text))', 'with open("demo_t.txt", "w") as f:\n    f.write("salut tout le monde")\nwith open("demo_t.txt") as f:\n    text = f.read()\nprint(len(text))'],
          out: ['11', '12', '19'], c: 'read'
        }
      },
      {
        c: [c`with open("demo_log.txt", "w") as f:
    f.write("one\n")
with open("demo_log.txt", "a") as f:
    f.write("two\n")
    f.write("three\n")
with open("demo_log.txt") as f:
    for line in f:
        print(line.strip())
with open("demo_log.txt") as f:
    lines = f.readlines()
print(lines)`, c`with open("demo_log.txt", "w") as f:
    f.write("uno\n")
with open("demo_log.txt", "a") as f:
    f.write("due\n")
    f.write("tre\n")
with open("demo_log.txt") as f:
    for line in f:
        print(line.strip())
with open("demo_log.txt") as f:
    lines = f.readlines()
print(lines)`, c`with open("demo_log.txt", "w") as f:
    f.write("un\n")
with open("demo_log.txt", "a") as f:
    f.write("deux\n")
    f.write("trois\n")
with open("demo_log.txt") as f:
    for line in f:
        print(line.strip())
with open("demo_log.txt") as f:
    lines = f.readlines()
print(lines)`],
        n: ['.readlines'],
        t: ['Add to a file, read line by line', 'Aggiungi a un file, leggi riga per riga', 'Ajoute à un fichier, lis ligne par ligne'],
        x: [`"a" means append: the new text goes at the end, and the old text stays. A for loop over the file gives its lines one at a time, each with the new-line sign at the end, so strip() cleans it.

readlines() gives all the lines in a list. read() gives everything as one long text.`,
          `"a" vuol dire append, aggiungi: il testo nuovo va in fondo e quello vecchio resta. Un ciclo for sul file dà le sue righe una alla volta, ognuna con il segno di riga nuova alla fine, quindi strip() la pulisce.

readlines() dà tutte le righe in una lista. read() dà tutto come un unico lungo testo.`,
          `"a" veut dire append, ajouter : le nouveau texte va à la fin et l'ancien reste. Une boucle for sur le fichier donne ses lignes une par une, chacune avec le signe de nouvelle ligne à la fin, donc strip() la nettoie.

readlines() donne toutes les lignes dans une liste. read() donne tout comme un seul long texte.`],
        ex: {
          t: ['Write the lines a and b in a new file, then add the line c at the end, and show the number of lines (3), using readlines.', 'Scrivi le righe a e b in un file nuovo, poi aggiungi la riga c alla fine e mostra il numero di righe (3), usando readlines.', 'Écris les lignes a et b dans un nouveau fichier, puis ajoute la ligne c à la fin et affiche le nombre de lignes (3), en utilisant readlines.'],
          h: ['Mode "w" for a and b, mode "a" for c, then f.readlines() and len(...).', 'Modo "w" per a e b, modo "a" per c, poi f.readlines() e len(...).', 'Mode "w" pour a et b, mode "a" pour c, puis f.readlines() et len(...).'],
          sol: 'with open("demo_abc.txt", "w") as f:\n    f.write("a\\nb\\n")\nwith open("demo_abc.txt", "a") as f:\n    f.write("c\\n")\nwith open("demo_abc.txt") as f:\n    lines = f.readlines()\nprint(len(lines))', out: '3', c: 'readlines'
        }
      },
      {
        c: c`import os
with open("demo_data.txt", "w") as f:
    f.write("hello")
print(os.path.exists("demo_data.txt"))
print(os.path.exists("demo_nothing.txt"))`,
        n: ['module:os', 'os.path', '.exists'],
        t: ['Look after files: os', 'Prenditi cura dei file: os', 'Prends soin des fichiers : os'],
        x: [`The os module works with the files themselves. os.path.exists asks if a file is there: the answer is True or False.

Ask with exists before you read a file that may not be there.`,
          `Il modulo os lavora con i file stessi. os.path.exists chiede se un file c'è: la risposta è True o False.

Chiedi con exists prima di leggere un file che potrebbe non esserci.`,
          `Le module os travaille avec les fichiers eux-mêmes. os.path.exists demande si un fichier est là : la réponse est True ou False.

Demande avec exists avant de lire un fichier qui pourrait ne pas être là.`],
        ex: {
          t: ['Ask if a file called demo_nope.txt exists, and show the answer.', 'Chiedi se esiste un file che si chiama demo_nope.txt e mostra la risposta.', 'Demande si un fichier qui s\'appelle demo_nope.txt existe et affiche la réponse.'],
          h: ['os.path has a tool that asks if a file exists. Bring in os first, then show its answer.', 'os.path ha uno strumento che chiede se un file esiste. Porta dentro os prima, poi mostra la sua risposta.', 'os.path a un outil qui demande si un fichier existe. Fais entrer os d\'abord, puis affiche sa réponse.'],
          sol: 'import os\nprint(os.path.exists("demo_nope.txt"))', out: 'False', c: 'exists'
        }
      },
      {
        c: c`import os
with open("demo_data.txt", "w") as f:
    f.write("hello")
print("demo_data.txt" in os.listdir("."))
os.rename("demo_data.txt", "demo_renamed.txt")
os.remove("demo_renamed.txt")
print(os.path.exists("demo_renamed.txt"))`,
        n: ['os.listdir', 'os.rename', 'os.remove'],
        t: ['List, rename and delete', 'Elenca, rinomina e cancella', 'Liste, renomme et supprime'],
        x: [`os.listdir gives the names of everything in a folder, as a list ("." means the folder you are in). os.rename changes the name of a file: the old name first, then the new one. os.remove deletes a file for good.

Be careful with remove: there is no trash. That is why these lessons only delete files that start with demo_.`,
          `os.listdir dà i nomi di tutto quello che c'è in una cartella, come lista ("." vuol dire la cartella in cui sei). os.rename cambia il nome di un file: prima il nome vecchio, poi quello nuovo. os.remove cancella un file per sempre.

Attenzione con remove: non c'è il cestino. Per questo queste lezioni cancellano solo file che iniziano con demo_.`,
          `os.listdir donne les noms de tout ce qu'il y a dans un dossier, sous forme de liste ("." veut dire le dossier où tu es). os.rename change le nom d'un fichier : d'abord l'ancien nom, puis le nouveau. os.remove supprime un fichier pour de bon.

Fais attention avec remove : il n'y a pas de corbeille. C'est pourquoi ces leçons ne suppriment que des fichiers qui commencent par demo_.`],
        ex: {
          t: ['Make a file demo_x.txt, delete it with os.remove, and show whether it still exists (it must show False).', 'Crea un file demo_x.txt, cancellalo con os.remove e mostra se esiste ancora (deve mostrare False).', 'Crée un fichier demo_x.txt, supprime-le avec os.remove et affiche s\'il existe encore (il doit afficher False).'],
          h: ['Three steps: write the file, delete it with the tool of os, then ask os.path if it still exists.', 'Tre passi: scrivi il file, cancellalo con lo strumento di os, poi chiedi a os.path se esiste ancora.', 'Trois étapes : écris le fichier, supprime-le avec l\'outil de os, puis demande à os.path s\'il existe encore.'],
          sol: 'import os\nwith open("demo_x.txt", "w") as f:\n    f.write("x")\nos.remove("demo_x.txt")\nprint(os.path.exists("demo_x.txt"))', out: 'False', c: 'remove'
        }
      },
      {
        c: c`open("demo_missing_file.txt")`,
        e: 'FileNotFoundError',
        t: ['A file that is not there', 'Un file che non c\'è', 'Un fichier qui n\'est pas là'],
        x: [`Opening a file that does not exist, to read it, stops with a FileNotFoundError. Read the explanation, which tells you which file was missing.

In the next lesson you will learn to catch this error with try and except, so the program does not stop.`,
          `Aprire un file che non esiste, per leggerlo, ferma il programma con un FileNotFoundError. Leggi la spiegazione, che ti dice quale file mancava.

Nella lezione dopo imparerai a prendere questo errore con try ed except, così il programma non si ferma.`,
          `Ouvrir un fichier qui n'existe pas, pour le lire, arrête le programme avec une FileNotFoundError. Lis l'explication, qui te dit quel fichier manquait.

Dans la leçon suivante tu apprendras à attraper cette erreur avec try et except, pour que le programme ne s'arrête pas.`],
        ex: {
          t: ['Fix it: first write the file demo_missing_file.txt with the text ok, then open it to read and show the text.', 'Correggilo: prima scrivi il file demo_missing_file.txt con il testo ok, poi aprilo per leggere e mostra il testo.', 'Corrige-le : écris d\'abord le fichier demo_missing_file.txt avec le texte ok, puis ouvre-le pour lire et affiche le texte.'],
          h: ['A with open(..., "w") first, then a with open(...) to read.', 'Prima un with open(..., "w"), poi un with open(...) per leggere.', 'D\'abord un with open(..., "w"), puis un with open(...) pour lire.'],
          start: 'open("demo_missing_file.txt")', sol: 'with open("demo_missing_file.txt", "w") as f:\n    f.write("ok")\nwith open("demo_missing_file.txt") as f:\n    print(f.read())', out: 'ok', c: '"w"'
        }
      },
      {
        c: [c`with open("demo_notes.txt", "w") as f:
    f.write("one\ntwo\nthree\n")

with open("demo_notes.txt") as f:
    lines = f.read().splitlines()
print(lines)
print(len(lines), "lines")`, c`with open("demo_notes.txt", "w") as f:
    f.write("uno\ndue\ntre\n")

with open("demo_notes.txt") as f:
    lines = f.read().splitlines()
print(lines)
print(len(lines), "righe")`, c`with open("demo_notes.txt", "w") as f:
    f.write("un\ndeux\ntrois\n")

with open("demo_notes.txt") as f:
    lines = f.read().splitlines()
print(lines)
print(len(lines), "lignes")`],
        n: ['.splitlines'],
        t: ['Challenge: write, then read back', 'Sfida: scrivi, poi rileggi', 'Défi : écris, puis relis'],
        x: ['The first with writes three lines into a file, and closes it. The second opens the same file to read it; splitlines turns the text into a list of lines.', 'Il primo with scrive tre righe in un file, e lo chiude. Il secondo apre lo stesso file per leggerlo; splitlines trasforma il testo in una lista di righe.', 'Le premier with écrit trois lignes dans un fichier, et le ferme. Le second ouvre le même fichier pour le lire ; splitlines transforme le texte en une liste de lignes.'],
        ex: {
          t: ['Write the numbers 1 to 5 into demo_numbers.txt, one per line. Then read the file back and show the sum of the numbers in it (15).', 'Scrivi i numeri da 1 a 5 in demo_numbers.txt, uno per riga. Poi rileggi il file e mostra la somma dei numeri che contiene (15).', 'Écris les nombres de 1 à 5 dans demo_numbers.txt, un par ligne. Puis relis le fichier et affiche la somme des nombres qu\'il contient (15).'],
          h: ['A for loop writes str(n) + newline for each number. When you read, each line is text: int(...) before adding.', 'Un ciclo for scrive str(n) più a capo per ogni numero. Quando leggi, ogni riga è testo: int(...) prima di sommare.', 'Une boucle for écrit str(n) plus un retour à la ligne pour chaque nombre. À la lecture, chaque ligne est du texte : int(...) avant d\'additionner.'],
          start: '',
          sol: 'with open("demo_numbers.txt", "w") as f:\n    for n in range(1, 6):\n        f.write(str(n) + "\\n")\n\ntotal = 0\nwith open("demo_numbers.txt") as f:\n    for line in f:\n        total += int(line)\nprint(total)',
          out: '15', uses: ['open', 'with', '.write']
        }
      }
    ]
  },
  {
    title: ['When things go wrong, on purpose', 'Quando le cose vanno storte, apposta', 'Quand les choses tournent mal, exprès'],
    subtitle: ['try, except and friends', 'try, except e amici', 'try, except et compagnie'],
    steps: [
      {
        c: [c`try:
    number = int("abc")
    print("This line is skipped")
except ValueError:
    print("That was not a number")
print("The program goes on")`, c`try:
    number = int("abc")
    print("Questa riga viene saltata")
except ValueError:
    print("Quello non era un numero")
print("Il programma va avanti")`, c`try:
    number = int("abc")
    print("Cette ligne est sautée")
except ValueError:
    print("Ce n'était pas un nombre")
print("Le programme continue")`],
        n: ['try', 'except', 'ValueError'],
        t: ['Try it, and catch the error', 'Provaci, e prendi l\'errore', 'Essaie, et attrape l\'erreur'],
        x: [`Until now, an error stopped the program. try changes that. It runs the pushed-in lines like an experiment. If one of them fails with the kind of error named after except, Python jumps to the except lines instead of stopping, and the program goes on.

It is like a safety net: you say "try this, and if it goes wrong in this way, do that".`,
          `Finora un errore fermava il programma. try cambia le cose. Esegue le righe rientrate come un esperimento. Se una di loro fallisce con il tipo di errore nominato dopo except, Python salta alle righe di except invece di fermarsi, e il programma continua.

È come una rete di sicurezza: dici "prova questo, e se va storto in questo modo, fai quello".`,
          `Jusqu'ici, une erreur arrêtait le programme. try change ça. Il lance les lignes décalées comme une expérience. Si l'une d'elles échoue avec le genre d'erreur nommé après except, Python saute aux lignes de except au lieu de s'arrêter, et le programme continue.

C'est comme un filet de sécurité : tu dis "essaie ceci, et si ça tourne mal de cette façon, fais cela".`],
        ex: {
          t: ['Make the program catch the error of int("x") and show: oops', 'Fai in modo che il programma prenda l\'errore di int("x") e mostri: ops', 'Fais attraper par le programme l\'erreur de int("x") et afficher : oups'],
          h: ['The risky line goes pushed in under try:. Then except with the name of the error, and under it, pushed in, the print.', 'La riga rischiosa va rientrata sotto try:. Poi except con il nome dell\'errore, e sotto, rientrato, il print.', 'La ligne risquée va décalée sous try:. Puis except avec le nom de l\'erreur, et dessous, décalé, le print.'],
          sol: ['try:\n    int("x")\nexcept ValueError:\n    print("oops")', 'try:\n    int("x")\nexcept ValueError:\n    print("ops")', 'try:\n    int("x")\nexcept ValueError:\n    print("oups")'],
          out: ['oops', 'ops', 'oups'], c: 'except ValueError'
        }
      },
      {
        c: [c`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

print(safe_divide(10, 2))
print(safe_divide(1, 0))

for text in ["12", "x", "7"]:
    try:
        print(int(text) * 2)
    except ValueError as error:
        print("Problem:", error)`, c`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

print(safe_divide(10, 2))
print(safe_divide(1, 0))

for text in ["12", "x", "7"]:
    try:
        print(int(text) * 2)
    except ValueError as error:
        print("Problema:", error)`, c`def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return None

print(safe_divide(10, 2))
print(safe_divide(1, 0))

for text in ["12", "x", "7"]:
    try:
        print(int(text) * 2)
    except ValueError as error:
        print("Problème :", error)`],
        t: ['Which error, and what it says', 'Quale errore, e cosa dice', 'Quelle erreur, et ce qu\'elle dit'],
        x: [`You can have several except blocks for several kinds of error. And except ValueError as error keeps the error in a box, so you can show its message.

A loop with try inside lets the program handle each item on its own: one bad item does not stop the others.`,
          `Puoi avere più blocchi except per più tipi di errore. E except ValueError as error tiene l'errore in una scatola, così puoi mostrare il suo messaggio.

Un ciclo con try dentro lascia che il programma gestisca ogni elemento da solo: un elemento sbagliato non ferma gli altri.`,
          `Tu peux avoir plusieurs blocs except pour plusieurs genres d'erreur. Et except ValueError as error garde l'erreur dans une boîte, pour que tu puisses afficher son message.

Une boucle avec try dedans laisse le programme traiter chaque élément seul : un mauvais élément n'arrête pas les autres.`],
        ex: {
          uses: ['for', 'try'],
          t: ['Go through the list ["4", "z", "9"], and for each text show its double, or the word bad when it is not a number.', 'Scorri la lista ["4", "z", "9"] e per ogni testo mostra il suo doppio, o la parola male quando non è un numero.', 'Parcours la liste ["4", "z", "9"] et pour chaque texte affiche son double, ou le mot mauvais quand ce n\'est pas un nombre.'],
          h: ['A for over the list. Inside it, a try that shows the double of the number, and an except for ValueError that shows the other word.', 'Un for sulla lista. Dentro, un try che mostra il doppio del numero, e un except per ValueError che mostra l\'altra parola.', 'Un for sur la liste. Dedans, un try qui affiche le double du nombre, et un except pour ValueError qui affiche l\'autre mot.'],
          sol: ['for text in ["4", "z", "9"]:\n    try:\n        print(int(text) * 2)\n    except ValueError:\n        print("bad")', 'for text in ["4", "z", "9"]:\n    try:\n        print(int(text) * 2)\n    except ValueError:\n        print("male")', 'for text in ["4", "z", "9"]:\n    try:\n        print(int(text) * 2)\n    except ValueError:\n        print("mauvais")'],
          out: ['8\nbad\n18', '8\nmale\n18', '8\nmauvais\n18']
        }
      },
      {
        c: [c`def read_number(text):
    try:
        value = int(text)
    except ValueError:
        print("not a number")
    else:
        print("got", value)
    finally:
        print("done with", text)

read_number("5")
read_number("five")`, c`def read_number(text):
    try:
        value = int(text)
    except ValueError:
        print("non è un numero")
    else:
        print("ricevuto", value)
    finally:
        print("finito con", text)

read_number("5")
read_number("cinque")`, c`def read_number(text):
    try:
        value = int(text)
    except ValueError:
        print("pas un nombre")
    else:
        print("reçu", value)
    finally:
        print("fini avec", text)

read_number("5")
read_number("cinq")`],
        n: ['finally'],
        t: ['else and finally', 'else e finally', 'else et finally'],
        x: [`else runs only when try worked with no error. finally runs at the end in every case, with an error or without: it is the place to tidy up.

The usual order is try, except, else, finally. You only need try and one of the others.`,
          `else gira solo quando try ha funzionato senza errori. finally gira alla fine in ogni caso, con un errore o senza: è il posto per rimettere in ordine.

L'ordine solito è try, except, else, finally. Ti servono solo try e uno degli altri.`,
          `else ne tourne que quand try a marché sans erreur. finally tourne à la fin dans tous les cas, avec une erreur ou sans : c'est l'endroit pour ranger.

L'ordre habituel est try, except, else, finally. Il te faut seulement try et un des autres.`],
        ex: {
          t: ['Make a try that does int("7") and a finally that shows: end   Both must run, and nothing else must show.', 'Fai un try che fa int("7") e un finally che mostra: fine   Devono girare tutti e due, e non deve comparire altro.', 'Fais un try qui fait int("7") et un finally qui affiche : fin   Les deux doivent tourner, et rien d\'autre ne doit apparaître.'],
          h: ['try: with the risky line pushed in under it, then finally: with its own pushed-in print. No except is needed.', 'try: con la riga rischiosa rientrata sotto, poi finally: con il suo print rientrato. Non serve except.', 'try: avec la ligne risquée décalée dessous, puis finally: avec son propre print décalé. Pas besoin de except.'],
          sol: ['try:\n    int("7")\nfinally:\n    print("end")', 'try:\n    int("7")\nfinally:\n    print("fine")', 'try:\n    int("7")\nfinally:\n    print("fin")'],
          out: ['end', 'fine', 'fin'], c: 'finally'
        }
      },
      {
        c: [c`def set_age(age):
    if age < 0:
        raise ValueError("an age cannot be negative")
    return age

print(set_age(12))
try:
    set_age(-5)
except ValueError as error:
    print("Caught:", error)
set_age(-1)`, c`def set_age(age):
    if age < 0:
        raise ValueError("un'età non può essere negativa")
    return age

print(set_age(12))
try:
    set_age(-5)
except ValueError as error:
    print("Preso:", error)
set_age(-1)`, c`def set_age(age):
    if age < 0:
        raise ValueError("un âge ne peut pas être négatif")
    return age

print(set_age(12))
try:
    set_age(-5)
except ValueError as error:
    print("Attrapé :", error)
set_age(-1)`],
        e: 'ValueError',
        n: ['raise', 'ValueError'],
        t: ['Raise your own error', 'Alza il tuo errore', 'Lève ta propre erreur'],
        x: [`raise makes an error on purpose, when your function receives something that makes no sense. The message tells the person who uses it what was wrong.

The caller can catch it with try and except, or not: the last line does not catch it, so the program stops there, with your own message in the explanation.`,
          `raise fa un errore apposta, quando la tua funzione riceve qualcosa che non ha senso. Il messaggio dice a chi la usa cosa non andava.

Chi chiama può prenderlo con try ed except, o no: l'ultima riga non lo prende, quindi il programma si ferma lì, con il tuo messaggio nella spiegazione.`,
          `raise fait une erreur exprès, quand ta fonction reçoit quelque chose qui n'a pas de sens. Le message dit à la personne qui l'utilise ce qui n'allait pas.

Celui qui appelle peut l'attraper avec try et except, ou pas : la dernière ligne ne l'attrape pas, donc le programme s'arrête là, avec ton propre message dans l'explication.`],
        ex: {
          uses: ['def'],
          t: ['Remove the last line, which stops the program, so that the program ends without an error.', 'Togli l\'ultima riga, che ferma il programma, così il programma finisce senza errori.', 'Enlève la dernière ligne, qui arrête le programme, pour que le programme finisse sans erreur.'],
          h: ['Which line asks for an age below zero? That is the one that stops the program.', 'Quale riga chiede un\'età sotto zero? È quella che ferma il programma.', 'Quelle ligne demande un âge en dessous de zéro ? C\'est celle qui arrête le programme.'],
          start: 'def set_age(age):\n    if age < 0:\n        raise ValueError("negative")\n    return age\n\nprint(set_age(12))\nset_age(-1)', sol: 'def set_age(age):\n    if age < 0:\n        raise ValueError("negative")\n    return age\n\nprint(set_age(12))', out: '12'
        }
      },
      {
        c: [c`while True:
    text = input("Your age: ")
    try:
        age = int(text)
        if age < 0:
            raise ValueError("negative")
        break
    except ValueError:
        print("Please type a whole number, 0 or more.")
print("Thanks, you are", age)`, c`while True:
    text = input("La tua età: ")
    try:
        age = int(text)
        if age < 0:
            raise ValueError("negativa")
        break
    except ValueError:
        print("Scrivi un numero intero, 0 o più.")
print("Grazie, hai", age)`, c`while True:
    text = input("Ton âge : ")
    try:
        age = int(text)
        if age < 0:
            raise ValueError("négatif")
        break
    except ValueError:
        print("Tape un nombre entier, 0 ou plus.")
print("Merci, tu as", age)`],
        i: ['abc', '-3', '12'],
        t: ['Ask again until it is right', 'Chiedi ancora finché è giusto', 'Redemande jusqu\'à ce que ce soit juste'],
        x: [`This is the most useful use of try: a loop that keeps asking until the answer is valid. Anything that is not a whole number, or that is negative, goes to except, shows a polite message, and the loop asks again.

break leaves the loop only when everything went well.`,
          `Questo è l'uso più utile di try: un ciclo che continua a chiedere finché la risposta è valida. Tutto ciò che non è un numero intero, o è negativo, va a except, mostra un messaggio gentile e il ciclo chiede di nuovo.

break esce dal ciclo solo quando tutto è andato bene.`,
          `C'est l'usage le plus utile de try : une boucle qui continue à demander jusqu'à ce que la réponse soit valide. Tout ce qui n'est pas un nombre entier, ou qui est négatif, va à except, affiche un message poli, et la boucle redemande.

break sort de la boucle seulement quand tout s'est bien passé.`],
        ex: {
          t: ['Change the program so that it only accepts ages from 1 to 120: with the answers x, 0 and 30 it must end by showing 30.', 'Cambia il programma così che accetti solo età da 1 a 120: con le risposte x, 0 e 30 deve finire mostrando 30.', 'Change le programme pour qu\'il n\'accepte que des âges de 1 à 120 : avec les réponses x, 0 et 30 il doit finir en affichant 30.'],
          h: ['Inside the try, after int: when the age is too small or too big, raise a ValueError yourself. The except that is already there catches it.', 'Dentro il try, dopo int: quando l\'età è troppo piccola o troppo grande, solleva tu un ValueError. L\'except che c\'è già lo prende.', 'Dans le try, après int : quand l\'âge est trop petit ou trop grand, lève toi-même une ValueError. Le except qui est déjà là l\'attrape.'],
          start: 'while True:\n    text = input("Age: ")\n    try:\n        age = int(text)\n        break\n    except ValueError:\n        print("Again")\nprint(age)',
          sol: 'while True:\n    text = input("Age: ")\n    try:\n        age = int(text)\n        if age < 1 or age > 120:\n            raise ValueError("range")\n        break\n    except ValueError:\n        print("Again")\nprint(age)',
          i: ['x', '0', '30'], m: '30$', c: '120'
        }
      },
      {
        c: c`for text in ["3", "x", "10"]:
    try:
        print(int(text) + 1)
    except ValueError:
        print(text, "is not a number")`,
        t: ['Challenge: a division that never breaks', 'Sfida: una divisione che non si rompe mai', 'Défi : une division qui ne casse jamais'],
        x: ['try runs the risky line; when it raises a ValueError, except catches it and the loop goes on with the next text. The program never stops.', 'try esegue la riga rischiosa; quando solleva un ValueError, except lo prende e il ciclo continua con il testo dopo. Il programma non si ferma mai.', 'try lance la ligne risquée ; quand elle lève une ValueError, except l\'attrape et la boucle continue avec le texte suivant. Le programme ne s\'arrête jamais.'],
        ex: {
          t: ['Write safe_divide(a, b): it returns a / b, or None when b is 0 (use try and except ZeroDivisionError). Show safe_divide(10, 4) and then safe_divide(1, 0).', 'Scrivi safe_divide(a, b): restituisce a / b, oppure None quando b è 0 (usa try ed except ZeroDivisionError). Mostra safe_divide(10, 4) e poi safe_divide(1, 0).', 'Écris safe_divide(a, b) : elle rend a / b, ou None quand b vaut 0 (utilise try et except ZeroDivisionError). Affiche safe_divide(10, 4) puis safe_divide(1, 0).'],
          h: ['Inside the function, a try that gives back the division, and an except for ZeroDivisionError that gives back None.', 'Dentro la funzione, un try che restituisce la divisione, e un except per ZeroDivisionError che restituisce None.', 'Dans la fonction, un try qui rend la division, et un except pour ZeroDivisionError qui rend None.'],
          start: '',
          sol: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return None\n\nprint(safe_divide(10, 4))\nprint(safe_divide(1, 0))',
          out: '2.5\nNone', uses: ['try', 'def']
        }
      }
    ]
  },
  {
    title: ['Data files: JSON and CSV', 'File di dati: JSON e CSV', 'Fichiers de données : JSON et CSV'],
    subtitle: ['How programs share information', 'Come i programmi si scambiano informazioni', 'Comment les programmes échangent des informations'],
    steps: [
      {
        c: c`import json
person = {"name": "Ada", "age": 12, "pets": ["cat", "dog"], "student": True}
text = json.dumps(person)
print(text)
print(type(text))
back = json.loads(text)
print(back["pets"][0], back == person)`,
        n: ['module:json', 'json.dumps', 'json.loads'],
        t: ['JSON: data as text', 'JSON: dati come testo', 'JSON : des données en texte'],
        x: [`JSON is a way to write data as plain text, so it can be saved or sent to another program. It looks almost like a Python dictionary.

json.dumps turns data into text, and json.loads turns the text back into data. Almost every website uses JSON to talk to other programs.`,
          `JSON è un modo di scrivere i dati come testo semplice, così si possono salvare o mandare a un altro programma. Assomiglia quasi a un dizionario di Python.

json.dumps trasforma i dati in testo e json.loads trasforma il testo di nuovo in dati. Quasi ogni sito usa JSON per parlare con altri programmi.`,
          `JSON est une façon d'écrire des données en texte simple, pour pouvoir les enregistrer ou les envoyer à un autre programme. Ça ressemble presque à un dictionnaire Python.

json.dumps transforme des données en texte, et json.loads retransforme le texte en données. Presque tous les sites utilisent JSON pour parler à d'autres programmes.`],
        ex: {
          t: ['Turn the dictionary {"a": 1} into JSON text and show it.', 'Trasforma il dizionario {"a": 1} in testo JSON e mostralo.', 'Transforme le dictionnaire {"a": 1} en texte JSON et affiche-le.'],
          h: ['Bring in json first. json.dumps turns a dictionary into JSON text: show what it gives back.', 'Porta dentro json prima. json.dumps trasforma un dizionario in testo JSON: mostra quello che restituisce.', 'Fais entrer json d\'abord. json.dumps transforme un dictionnaire en texte JSON : affiche ce qu\'il rend.'],
          sol: 'import json\nprint(json.dumps({"a": 1}))', out: '{"a": 1}', c: 'dumps'
        }
      },
      {
        c: c`import json
scores = {"Ada": 12, "Max": 7}
with open("demo_scores.json", "w") as f:
    json.dump(scores, f)

with open("demo_scores.json") as f:
    loaded = json.load(f)
loaded["Zoe"] = 15
print(loaded)
print(json.dumps(loaded, indent=2))`,
        n: ['json.dump', 'json.load', 'arg:indent'],
        t: ['Save and load data', 'Salva e carica i dati', 'Enregistre et charge des données'],
        x: [`json.dump writes data straight into a file, and json.load reads it back. With these two lines, a program can keep a score table, a to-do list or its settings between runs.

indent=2 makes the JSON text easy to read, with each level pushed in. This is the easiest way to make a program remember things.`,
          `json.dump scrive i dati direttamente in un file, e json.load li rilegge. Con queste due righe un programma può tenere una tabella di punteggi, una lista di cose da fare o le sue impostazioni tra un'esecuzione e l'altra.

indent=2 rende il testo JSON facile da leggere, con ogni livello rientrato. È il modo più facile per far ricordare le cose a un programma.`,
          `json.dump écrit les données directement dans un fichier, et json.load les relit. Avec ces deux lignes, un programme peut garder un tableau de scores, une liste de choses à faire ou ses réglages d'une exécution à l'autre.

indent=2 rend le texte JSON facile à lire, avec chaque niveau décalé. C'est la façon la plus facile de faire se souvenir un programme.`],
        ex: {
          t: ['Save the list [1, 2, 3] in a file called demo_list.json, load it back, and show it.', 'Salva la lista [1, 2, 3] in un file che si chiama demo_list.json, ricaricala e mostrala.', 'Enregistre la liste [1, 2, 3] dans un fichier qui s\'appelle demo_list.json, recharge-la et affiche-la.'],
          h: ['json.dump writes the list into a file open for writing; json.load reads it back from the same file open for reading.', 'json.dump scrive la lista in un file aperto per scrivere; json.load la rilegge dallo stesso file aperto per leggere.', 'json.dump écrit la liste dans un fichier ouvert en écriture ; json.load la relit depuis le même fichier ouvert en lecture.'],
          sol: 'import json\nwith open("demo_list.json", "w") as f:\n    json.dump([1, 2, 3], f)\nwith open("demo_list.json") as f:\n    print(json.load(f))', out: '[1, 2, 3]', c: 'json\\.load'
        }
      },
      {
        c: c`import csv
rows = [["name", "score"], ["Ada", 12], ["Max", 7]]
with open("demo_table.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(rows)
print(open("demo_table.csv").read())`,
        many: true,
        n: ['module:csv', 'csv.writer', '.writerows', 'arg:newline'],
        t: ['CSV: tables as text', 'CSV: tabelle come testo', 'CSV : des tableaux en texte'],
        x: [`CSV is how spreadsheets are saved as plain text: one row per line, values separated by commas. csv.writer makes a writer for an open file, and writerows writes a whole list of rows.

Always open the file with newline="" when you write a CSV, so the lines come out right on every computer.`,
          `CSV è il modo in cui i fogli di calcolo vengono salvati come testo semplice: una riga per linea, valori separati da virgole. csv.writer fa uno scrittore per un file aperto, e writerows scrive in una volta una lista intera di righe.

Apri sempre il file con newline="" quando scrivi un CSV, così le righe vengono bene su ogni computer.`,
          `CSV est la façon dont les tableurs sont enregistrés en texte simple : une ligne par ligne, valeurs séparées par des virgules. csv.writer fait un écrivain pour un fichier ouvert, et writerows écrit d'un coup une liste entière de lignes.

Ouvre toujours le fichier avec newline="" quand tu écris un CSV, pour que les lignes soient bonnes sur tous les ordinateurs.`],
        ex: {
          t: ['Write a CSV file called demo_pets.csv with the rows ["cat", 2] and ["dog", 3], and show the text of the file.', 'Scrivi un file CSV che si chiama demo_pets.csv con le righe ["gatto", 2] e ["cane", 3] e mostra il testo del file.', 'Écris un fichier CSV qui s\'appelle demo_pets.csv avec les lignes ["chat", 2] et ["chien", 3] et affiche le texte du fichier.'],
          h: ['csv.writer on a file open for writing, and its writerows with the list of rows. Then open the file again, read it and show the text.', 'csv.writer su un file aperto per scrivere, e il suo writerows con la lista delle righe. Poi riapri il file, leggilo e mostra il testo.', 'csv.writer sur un fichier ouvert en écriture, et son writerows avec la liste des lignes. Puis rouvre le fichier, lis-le et affiche le texte.'],
          sol: ['import csv\nwith open("demo_pets.csv", "w", newline="") as f:\n    csv.writer(f).writerows([["cat", 2], ["dog", 3]])\nprint(open("demo_pets.csv").read())', 'import csv\nwith open("demo_pets.csv", "w", newline="") as f:\n    csv.writer(f).writerows([["gatto", 2], ["cane", 3]])\nprint(open("demo_pets.csv").read())', 'import csv\nwith open("demo_pets.csv", "w", newline="") as f:\n    csv.writer(f).writerows([["chat", 2], ["chien", 3]])\nprint(open("demo_pets.csv").read())'],
          m: ['cat,2\\ndog,3', 'gatto,2\\ncane,3', 'chat,2\\nchien,3'], c: 'writerows'
        }
      },
      {
        c: c`import csv
with open("demo_scores.csv", "w", newline="") as f:
    csv.writer(f).writerows([["name", "score"], ["Ada", 12], ["Max", 7], ["Zoe", 15]])

total = 0
with open("demo_scores.csv") as f:
    for row in csv.reader(f):
        print(row)
with open("demo_scores.csv") as f:
    for row in csv.DictReader(f):
        total += int(row["score"])
print("Total:", total)`,
        n: ['csv.reader', 'csv.DictReader'],
        t: ['Read a CSV, and rows with names', 'Leggi un CSV, e le righe con nomi', 'Lis un CSV, et des lignes avec des noms'],
        x: [`csv.reader reads a CSV file row by row, and every row comes back as a list of texts. Even the numbers are texts, so turn them with int(...) when you need them.

csv.DictReader is nicer: it uses the first row as the names of the columns, and gives every other row as a dictionary: row["score"]. Much clearer than counting columns.`,
          `csv.reader legge un file CSV riga per riga, e ogni riga torna come una lista di testi. Anche i numeri sono testi, quindi trasformali con int(...) quando ti servono.

csv.DictReader è più bello: usa la prima riga come nomi delle colonne e dà ogni altra riga come dizionario: row["score"]. Molto più chiaro che contare le colonne.`,
          `csv.reader lit un fichier CSV ligne par ligne, et chaque ligne revient comme une liste de textes. Même les nombres sont des textes, donc transforme-les avec int(...) quand tu en as besoin.

csv.DictReader est plus agréable : il utilise la première ligne comme noms des colonnes, et donne chaque autre ligne comme un dictionnaire : row["score"]. Bien plus clair que de compter les colonnes.`],
        ex: {
          t: ['The file already has the scores 12, 7 and 15. Show the biggest score, using DictReader (15).', 'Il file ha già i punteggi 12, 7 e 15. Mostra il punteggio più grande, usando DictReader (15).', 'Le fichier a déjà les scores 12, 7 et 15. Affiche le plus grand score, en utilisant DictReader (15).'],
          h: ['A list of the int(row["score"]) values, then max(...).', 'Una lista dei valori int(row["score"]), poi max(...).', 'Une liste des valeurs int(row["score"]), puis max(...).'],
          sol: 'import csv\nwith open("demo_s.csv", "w", newline="") as f:\n    csv.writer(f).writerows([["name", "score"], ["Ada", 12], ["Max", 7], ["Zoe", 15]])\nwith open("demo_s.csv") as f:\n    scores = [int(row["score"]) for row in csv.DictReader(f)]\nprint(max(scores))', out: '15', c: 'DictReader'
        }
      },
      {
        c: c`import json

data = {"name": "Ada", "age": 12}
text = json.dumps(data)
print(text)
print(json.loads(text)["age"])`,
        t: ['Challenge: read a JSON text', 'Sfida: leggi un testo JSON', 'Défi : lis un texte JSON'],
        x: ['dumps turns Python data into JSON text, ready for a file or the internet; loads turns JSON text back into Python data, so you can use its keys again.', 'dumps trasforma i dati di Python in testo JSON, pronto per un file o per internet; loads ritrasforma il testo JSON in dati Python, così puoi usarne di nuovo le chiavi.', 'dumps transforme les données Python en texte JSON, prêt pour un fichier ou internet ; loads retransforme le texte JSON en données Python, pour réutiliser ses clés.'],
        ex: {
          t: ['The box text holds some JSON. Read it with json.loads and show how many pets there are (2), then the first one.', 'La scatola text contiene del JSON. Leggilo con json.loads e mostra quanti animali ci sono (2), poi il primo.', 'La boîte text contient du JSON. Lis-le avec json.loads et affiche combien d\'animaux il y a (2), puis le premier.'],
          h: ['json.loads(text) gives a dictionary; its key pets holds a list: len of it, then item 0.', 'json.loads(text) dà un dizionario; la sua chiave pets contiene una lista: len di quella, poi l\'elemento 0.', 'json.loads(text) donne un dictionnaire ; sa clé pets contient une liste : len de celle-ci, puis l\'élément 0.'],
          start: ['import json\n\ntext = \'{"pets": ["cat", "dog"]}\'', 'import json\n\ntext = \'{"pets": ["gatto", "cane"]}\'', 'import json\n\ntext = \'{"pets": ["chat", "chien"]}\''],
          sol: ['import json\n\ntext = \'{"pets": ["cat", "dog"]}\'\ndata = json.loads(text)\nprint(len(data["pets"]))\nprint(data["pets"][0])', 'import json\n\ntext = \'{"pets": ["gatto", "cane"]}\'\ndata = json.loads(text)\nprint(len(data["pets"]))\nprint(data["pets"][0])', 'import json\n\ntext = \'{"pets": ["chat", "chien"]}\'\ndata = json.loads(text)\nprint(len(data["pets"]))\nprint(data["pets"][0])'],
          out: ['2\ncat', '2\ngatto', '2\nchat'], uses: ['.loads']
        }
      }
    ]
  }
];
