// Stage 3 · The rest of the language. See tools/build-course.js for the format.
const c = String.raw;
const G3 = ['Stage 3 · The rest of the language', 'Livello 3 · Il resto del linguaggio', 'Niveau 3 · Le reste du langage'];

module.exports = [
  // ------------------------------------------------------------------ 25
  {
    group: G3,
    title: ['Tool boxes: modules', 'Scatole di strumenti: i moduli', 'Boîtes à outils : les modules'],
    subtitle: ['Use what others already wrote', 'Usa quello che altri hanno già scritto', 'Utilise ce que d\'autres ont déjà écrit'],
    steps: [
      {
        c: c`import math
print(math.sqrt(144))
print(math.pi)
print(math.floor(3.7), math.ceil(3.2))`,
        t: ['import a tool box', 'importare una scatola di strumenti', 'importer une boîte à outils'],
        x: [`Python comes with many tool boxes, called modules. import math brings the box called math, and then you use its tools with a dot: math.sqrt(144).

You write import once, at the top of the program, and you can use the box everywhere below.`,
          `Python viene con tante scatole di strumenti, chiamate moduli. import math porta la scatola chiamata math, e poi usi i suoi strumenti con un punto: math.sqrt(144).

Scrivi import una volta, in cima al programma, e puoi usare la scatola ovunque sotto.`,
          `Python vient avec plein de boîtes à outils, appelées modules. import math apporte la boîte appelée math, et ensuite tu utilises ses outils avec un point : math.sqrt(144).

Tu écris import une fois, en haut du programme, et tu peux utiliser la boîte partout en dessous.`],
        d: ['Find the square root of 2 with math.sqrt.', 'Trova la radice quadrata di 2 con math.sqrt.', 'Trouve la racine carrée de 2 avec math.sqrt.']
      },
      {
        c: c`from math import sqrt, pi
print(sqrt(81))
print(pi)

import math as m
print(m.cos(0))

from random import randint as roll
print(1 <= roll(1, 6) <= 6)`,
        t: ['from, and a nickname: as', 'from, e un soprannome: as', 'from, et un surnom : as'],
        x: [`from math import sqrt takes just the tool you want, and then you write sqrt without the "math." in front. import math as m gives the box a shorter name.

Both are fine. Taking only what you need makes the code shorter, while keeping the box name makes it clear where each tool comes from.`,
          `from math import sqrt prende solo lo strumento che vuoi, e poi scrivi sqrt senza il "math." davanti. import math as m dà alla scatola un nome più corto.

Vanno bene entrambi. Prendere solo quello che serve rende il codice più corto, mentre tenere il nome della scatola chiarisce da dove viene ogni strumento.`,
          `from math import sqrt prend juste l'outil que tu veux, et ensuite tu écris sqrt sans le « math. » devant. import math as m donne à la boîte un nom plus court.

Les deux sont bons. Prendre seulement ce dont tu as besoin raccourcit le code, tandis que garder le nom de la boîte montre clairement d'où vient chaque outil.`],
        d: ['Import floor from math and use it on 9.99.', 'Importa floor da math e usalo su 9.99.', 'Importe floor depuis math et utilise-le sur 9.99.'],
        w: ['Do not write from math import * : it brings everything and hides where names come from.', 'Non scrivere from math import * : porta tutto e nasconde da dove vengono i nomi.', 'N\'écris pas from math import * : ça apporte tout et cache d\'où viennent les noms.']
      },
      {
        c: c`import math
print(math.sqrt)
print(type(math))
print([name for name in dir(math) if name.startswith("s")][:6])
print(math.sqrt.__doc__[:40])`,
        t: ['What is inside a module?', 'Cosa c\'è dentro un modulo?', 'Qu\'y a-t-il dans un module ?'],
        x: [`You can look inside any box. dir(module) lists every name it holds, and every tool has a small description, its __doc__.

When you do not remember a tool, asking dir and the description is faster than looking it up.`,
          `Puoi guardare dentro ogni scatola. dir(modulo) elenca tutti i nomi che contiene, e ogni strumento ha una piccola descrizione, il suo __doc__.

Quando non ricordi uno strumento, chiedere a dir e alla descrizione è più veloce che cercarlo.`,
          `Tu peux regarder dans chaque boîte. dir(module) liste tous les noms qu'elle contient, et chaque outil a une petite description, son __doc__.

Quand tu ne te rappelles pas un outil, demander à dir et à la description est plus rapide que de le chercher.`],
        d: ['Look inside the random module with dir.', 'Guarda dentro il modulo random con dir.', 'Regarde dans le module random avec dir.']
      },
      {
        c: c`import this_module_does_not_exist`,
        e: 'ModuleNotFoundError',
        t: ['A box that does not exist', 'Una scatola che non esiste', 'Une boîte qui n\'existe pas'],
        x: [`If the name of the module is wrong, or the module is not available, import stops with a ModuleNotFoundError.

Pyviel includes Python's standard library, which is huge, but not extra packages that you would install, nor modules that need a window such as turtle or tkinter.`,
          `Se il nome del modulo è sbagliato, o il modulo non è disponibile, import si ferma con un ModuleNotFoundError.

Pyviel include la libreria standard di Python, che è enorme, ma non i pacchetti extra che si installerebbero, né i moduli che hanno bisogno di una finestra come turtle o tkinter.`,
          `Si le nom du module est faux, ou si le module n'est pas disponible, import s'arrête avec une ModuleNotFoundError.

Pyviel inclut la bibliothèque standard de Python, qui est énorme, mais pas les paquets supplémentaires qu'on installerait, ni les modules qui ont besoin d'une fenêtre comme turtle ou tkinter.`],
        d: ['Fix it by importing math instead.', 'Correggilo importando math.', 'Corrige-le en important math.']
      }
    ]
  },

  // ------------------------------------------------------------------ 26
  {
    title: ['Maths and luck', 'Matematica e fortuna', 'Maths et chance'],
    subtitle: ['The math and random modules', 'I moduli math e random', 'Les modules math et random'],
    steps: [
      {
        c: c`import math
print(math.hypot(3, 4))
print(math.pow(2, 8), math.factorial(5))
print(math.gcd(12, 18))
print(round(math.sin(math.pi / 2), 3))
print(math.log10(1000), math.log2(8))
print(math.isclose(0.1 + 0.2, 0.3))`,
        t: ['More maths', 'Ancora matematica', 'Encore des maths'],
        x: [`math has the tools from maths class: hypot (the long side of a right triangle), pow, factorial, gcd (the biggest number that divides both), the trigonometry functions sin, cos, tan, and logarithms log10 and log2.

isclose compares decimals with a little tolerance, because decimals are never perfect: it is the right way to ask if 0.1 + 0.2 equals 0.3.`,
          `math ha gli strumenti della matematica: hypot (il lato lungo di un triangolo rettangolo), pow, factorial, gcd (il numero più grande che divide entrambi), le funzioni trigonometriche sin, cos, tan, e i logaritmi log10 e log2.

isclose confronta i decimali con un po' di tolleranza, perché i decimali non sono mai perfetti: è il modo giusto per chiedere se 0.1 + 0.2 è uguale a 0.3.`,
          `math a les outils des cours de maths : hypot (le grand côté d'un triangle rectangle), pow, factorial, gcd (le plus grand nombre qui divise les deux), les fonctions de trigonométrie sin, cos, tan, et les logarithmes log10 et log2.

isclose compare des décimaux avec un peu de tolérance, parce que les décimaux ne sont jamais parfaits : c'est la bonne façon de demander si 0.1 + 0.2 égale 0.3.`],
        d: ['Find the diagonal of a screen that is 16 by 9.', 'Trova la diagonale di uno schermo di 16 per 9.', 'Trouve la diagonale d\'un écran de 16 sur 9.']
      },
      {
        c: c`import math
r = 5
print("Area:", round(math.pi * r ** 2, 2))
print("Circumference:", round(2 * math.pi * r, 2))
print(math.degrees(math.pi), math.radians(180))
print(math.inf > 10 ** 100, math.isnan(float("nan")))`,
        t: ['A circle', 'Un cerchio', 'Un cercle'],
        x: [`With math.pi you can work with circles: the area is pi times r squared, and the circumference is two times pi times r. degrees and radians convert between the two ways to measure angles.

math.inf is an infinity bigger than any number, and nan means "not a number".`,
          `Con math.pi puoi lavorare con i cerchi: l'area è pi per r al quadrato, e la circonferenza è due per pi per r. degrees e radians convertono tra i due modi di misurare gli angoli.

math.inf è un infinito più grande di qualsiasi numero, e nan vuol dire "non un numero".`,
          `Avec math.pi tu peux travailler avec des cercles : l'aire est pi fois r au carré, et la circonférence est deux fois pi fois r. degrees et radians convertissent entre les deux façons de mesurer les angles.

math.inf est un infini plus grand que n'importe quel nombre, et nan veut dire « pas un nombre ».`],
        d: ['Compute the area of a circle with a radius of 10.', 'Calcola l\'area di un cerchio di raggio 10.', 'Calcule l\'aire d\'un cercle de rayon 10.']
      },
      {
        c: c`import random
random.seed(7)
print(random.randint(1, 6))
print(random.random())
print(random.choice(["rock", "paper", "scissors"]))
cards = [1, 2, 3, 4, 5]
random.shuffle(cards)
print(cards)
print(random.sample(range(1, 50), 6))
print(random.uniform(1, 2))`,
        t: ['Luck', 'La fortuna', 'La chance'],
        x: [`random gives luck. randint(a, b) is a whole number from a to b, both included. random() is a decimal between 0 and 1. choice picks one item of a list, shuffle mixes a list in place, sample picks several different items, and uniform gives a decimal between two numbers.

random.seed(7) fixes the luck: the same seed always gives the same sequence, which is perfect for tests. Without it, every run is different.`,
          `random dà la fortuna. randint(a, b) è un numero intero da a a b, entrambi inclusi. random() è un decimale tra 0 e 1. choice sceglie un elemento di una lista, shuffle mescola una lista sul posto, sample sceglie diversi elementi, e uniform dà un decimale tra due numeri.

random.seed(7) fissa la fortuna: lo stesso seme dà sempre la stessa sequenza, che è perfetto per i test. Senza, ogni esecuzione è diversa.`,
          `random donne la chance. randint(a, b) est un nombre entier de a à b, les deux compris. random() est un décimal entre 0 et 1. choice choisit un élément d'une liste, shuffle mélange une liste sur place, sample choisit plusieurs éléments différents, et uniform donne un décimal entre deux nombres.

random.seed(7) fixe la chance : la même graine donne toujours la même suite, ce qui est parfait pour les tests. Sans elle, chaque exécution est différente.`],
        d: ['Throw two dice and print the sum.', 'Tira due dadi e stampa la somma.', 'Lance deux dés et affiche la somme.']
      },
      {
        c: c`import random
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
    print(f"Round {round_number}: {you} vs {computer} -> {result}")`,
        t: ['Rock, paper, scissors', 'Sasso, carta, forbici', 'Pierre, feuille, ciseaux'],
        x: [`A small game that uses a dictionary (who beats whom), a list of choices, random.choice and if, elif, else. Here both players are random and the seed makes the output the same every time.

To play against the computer, replace the first choice with an input.`,
          `Un piccolo gioco che usa un dizionario (chi batte chi), una lista di scelte, random.choice e if, elif, else. Qui entrambi i giocatori sono casuali e il seme rende il risultato uguale ogni volta.

Per giocare contro il computer, sostituisci la prima scelta con un input.`,
          `Un petit jeu qui utilise un dictionnaire (qui bat qui), une liste de choix, random.choice et if, elif, else. Ici les deux joueurs sont aléatoires et la graine rend le résultat identique à chaque fois.

Pour jouer contre l'ordinateur, remplace le premier choix par un input.`],
        d: ['Change the program so that you type your choice.', 'Cambia il programma così che scrivi tu la tua scelta.', 'Change le programme pour que tu écrives ton choix.']
      },
      {
        c: c`import statistics
data = [2, 4, 4, 4, 5, 5, 7, 9]
print(statistics.mean(data))
print(statistics.median(data))
print(statistics.mode(data))
print(round(statistics.stdev(data), 3))
print(sum(data) / len(data), max(data) - min(data))`,
        t: ['Averages and more: statistics', 'Medie e altro: statistics', 'Moyennes et plus : statistics'],
        x: [`The statistics module gives mean (the average), median (the middle value), mode (the most common value) and stdev (how spread out the data is).

A good habit is to check a result by hand, for example the mean with sum divided by len.`,
          `Il modulo statistics dà mean (la media), median (il valore di mezzo), mode (il valore più comune) e stdev (quanto sono sparsi i dati).

Una buona abitudine è controllare un risultato a mano, per esempio la media con sum diviso len.`,
          `Le module statistics donne mean (la moyenne), median (la valeur du milieu), mode (la valeur la plus courante) et stdev (à quel point les données sont dispersées).

Une bonne habitude est de vérifier un résultat à la main, par exemple la moyenne avec sum divisé par len.`],
        d: ['Find the median of your own five numbers.', 'Trova la mediana di cinque numeri tuoi.', 'Trouve la médiane de cinq nombres à toi.']
      }
    ]
  },

  // ------------------------------------------------------------------ 27
  {
    title: ['Dates and time', 'Date e tempo', 'Dates et temps'],
    subtitle: ['The datetime module', 'Il modulo datetime', 'Le module datetime'],
    steps: [
      {
        c: c`from datetime import date
birthday = date(2014, 5, 17)
print(birthday)
print(birthday.year, birthday.month, birthday.day)
print(birthday.weekday())
print(birthday.strftime("%d/%m/%Y"))
print(birthday.strftime("%A %d %B %Y"))`,
        t: ['A date', 'Una data', 'Une date'],
        x: [`date(year, month, day) makes a date. You can read its year, month and day, and weekday() tells the day of the week as a number (Monday is 0).

strftime writes the date in the form you describe: %d is the day, %m the month, %Y the year, %A the name of the weekday and %B the name of the month.`,
          `date(anno, mese, giorno) crea una data. Puoi leggerne anno, mese e giorno, e weekday() dice il giorno della settimana come numero (il lunedì è 0).

strftime scrive la data nella forma che descrivi: %d è il giorno, %m il mese, %Y l'anno, %A il nome del giorno della settimana e %B il nome del mese.`,
          `date(année, mois, jour) crée une date. Tu peux lire son année, son mois et son jour, et weekday() dit le jour de la semaine comme un nombre (lundi vaut 0).

strftime écrit la date dans la forme que tu décris : %d est le jour, %m le mois, %Y l'année, %A le nom du jour de la semaine et %B le nom du mois.`],
        d: ['Make the date of your own birthday and print the day of the week.', 'Crea la data del tuo compleanno e stampa il giorno della settimana.', 'Crée la date de ton anniversaire et affiche le jour de la semaine.']
      },
      {
        c: c`from datetime import date, timedelta
start = date(2026, 12, 20)
print(start + timedelta(days=14))
print(start - timedelta(weeks=1))
christmas = date(2026, 12, 25)
print((christmas - start).days, "days to Christmas")
print(christmas > start)
print(date(2028, 2, 28) + timedelta(days=1))`,
        t: ['Counting days', 'Contare i giorni', 'Compter les jours'],
        x: [`timedelta is an amount of time. Add it to a date to move forward, subtract it to go back. Subtracting two dates gives a timedelta, and .days tells how many days.

Python knows the calendar, even leap years: 28 February 2028 plus one day is the 29th.`,
          `timedelta è una quantità di tempo. Sommala a una data per andare avanti, sottraila per tornare indietro. Sottrarre due date dà un timedelta, e .days dice quanti giorni.

Python conosce il calendario, anche gli anni bisestili: il 28 febbraio 2028 più un giorno è il 29.`,
          `timedelta est une quantité de temps. Ajoute-la à une date pour avancer, soustrais-la pour reculer. Soustraire deux dates donne un timedelta, et .days dit combien de jours.

Python connaît le calendrier, même les années bissextiles : le 28 février 2028 plus un jour, c'est le 29.`],
        d: ['How many days are there between two dates you choose?', 'Quanti giorni ci sono tra due date che scegli?', 'Combien de jours y a-t-il entre deux dates que tu choisis ?']
      },
      {
        c: c`from datetime import datetime
moment = datetime(2026, 10, 20, 14, 30, 5)
print(moment)
print(moment.hour, moment.minute, moment.second)
print(moment.strftime("%H:%M"))
parsed = datetime.strptime("2026-03-08 09:15", "%Y-%m-%d %H:%M")
print(parsed.date(), parsed.time())`,
        t: ['Date and time of day', 'Data e ora del giorno', 'Date et heure du jour'],
        x: [`datetime keeps both the date and the time. strftime turns it into a text, and its twin strptime goes the other way: it reads a text written in a known form and makes a datetime.

This is how you read dates that people type or that come from a file.`,
          `datetime tiene sia la data sia l'ora. strftime la trasforma in un testo, e la sua gemella strptime fa il contrario: legge un testo scritto in una forma nota e crea un datetime.

È così che si leggono le date che le persone scrivono o che arrivano da un file.`,
          `datetime garde à la fois la date et l'heure. strftime le transforme en texte, et son jumeau strptime fait l'inverse : il lit un texte écrit dans une forme connue et crée un datetime.

C'est ainsi qu'on lit les dates que les gens écrivent ou qui viennent d'un fichier.`],
        d: ['Read the text "25/12/2026" with the form "%d/%m/%Y".', 'Leggi il testo "25/12/2026" con la forma "%d/%m/%Y".', 'Lis le texte "25/12/2026" avec la forme "%d/%m/%Y".']
      },
      {
        c: c`from datetime import datetime
now = datetime.now()
print("The clock says a year from 2026 on:", now.year >= 2026)
import time
start = time.time()
total = sum(range(1_000_000))
elapsed = time.time() - start
print("Counting took less than a second:", elapsed < 1)`,
        t: ['Now, and how long it took', 'Adesso, e quanto ci ha messo', 'Maintenant, et combien de temps ça a pris'],
        x: [`datetime.now() gives the current moment, from the computer's clock. time.time() gives the seconds that have passed since a fixed date long ago, which is perfect to measure how long something takes: take the time before, take it after, and subtract.

Real programs use this to show how long a task needed.`,
          `datetime.now() dà il momento attuale, dall'orologio del computer. time.time() dà i secondi passati da una data fissa molto tempo fa, che è perfetto per misurare quanto ci mette qualcosa: prendi il tempo prima, prendilo dopo, e sottrai.

I programmi veri lo usano per mostrare quanto tempo ha richiesto un lavoro.`,
          `datetime.now() donne l'instant actuel, d'après l'horloge de l'ordinateur. time.time() donne les secondes écoulées depuis une date fixe il y a longtemps, ce qui est parfait pour mesurer combien de temps prend quelque chose : prends le temps avant, prends-le après, et soustrais.

Les vrais programmes utilisent ça pour montrer combien de temps une tâche a demandé.`],
        d: ['Time how long a loop of a million additions takes.', 'Misura quanto ci mette un ciclo di un milione di somme.', 'Mesure combien de temps prend une boucle d\'un million d\'additions.']
      }
    ]
  },

  // ------------------------------------------------------------------ 28
  {
    title: ['Files', 'I file', 'Les fichiers'],
    subtitle: ['Write and read text that stays', 'Scrivere e leggere testo che resta', 'Écrire et lire du texte qui reste'],
    steps: [
      {
        c: c`with open("notes.txt", "w") as f:
    f.write("First line\n")
    f.write("Second line\n")
print("File written")
with open("notes.txt") as f:
    text = f.read()
print(text)`,
        t: ['Write a file, read it back', 'Scrivere un file e rileggerlo', 'Écrire un fichier, le relire'],
        x: [`open(name, "w") opens a file to write, and creates it if it does not exist. open(name) alone opens it to read. with opens the file, runs the pushed-in lines, and closes the file by itself at the end, even if something goes wrong.

In Pyviel files live in a small private workspace in the page, so they are not on your computer, and they disappear when you close the page.`,
          `open(nome, "w") apre un file in scrittura, e lo crea se non esiste. open(nome) da solo lo apre in lettura. with apre il file, fa girare le righe rientrate e chiude il file da solo alla fine, anche se qualcosa va storto.

In Pyviel i file vivono in un piccolo spazio di lavoro privato nella pagina, quindi non sono sul tuo computer, e spariscono quando chiudi la pagina.`,
          `open(nom, "w") ouvre un fichier en écriture, et le crée s'il n'existe pas. open(nom) tout seul l'ouvre en lecture. with ouvre le fichier, fait tourner les lignes décalées et ferme le fichier tout seul à la fin, même si quelque chose se passe mal.

Dans Pyviel les fichiers vivent dans un petit espace de travail privé dans la page, ils ne sont donc pas sur ton ordinateur, et ils disparaissent quand tu fermes la page.`],
        d: ['Write three lines of your own and read them back.', 'Scrivi tre righe tue e rileggile.', 'Écris trois lignes à toi et relis-les.'],
        w: ['Opening a file with "w" erases what was inside. To keep it and add, use "a".', 'Aprire un file con "w" cancella quello che c\'era dentro. Per tenerlo e aggiungere, usa "a".', 'Ouvrir un fichier avec "w" efface ce qu\'il y avait dedans. Pour le garder et ajouter, utilise "a".']
      },
      {
        c: c`with open("log.txt", "w") as f:
    f.write("one\n")
with open("log.txt", "a") as f:
    f.write("two\n")
    f.write("three\n")
with open("log.txt") as f:
    for line in f:
        print(line.strip())
with open("log.txt") as f:
    lines = f.readlines()
print(lines)`,
        t: ['Add to a file, read line by line', 'Aggiungere a un file, leggere riga per riga', 'Ajouter à un fichier, lire ligne par ligne'],
        x: [`"a" means append: the new text goes at the end and the old stays. A for loop over the file gives its lines one at a time, each with the new line character at the end, so strip() cleans it.

readlines() gives all the lines in a list. read() gives everything as one long text.`,
          `"a" vuol dire append: il testo nuovo va in fondo e il vecchio resta. Un ciclo for sul file dà le sue righe una alla volta, ognuna con il carattere di a capo alla fine, quindi strip() la pulisce.

readlines() dà tutte le righe in una lista. read() dà tutto come un unico testo lungo.`,
          `"a" veut dire append : le nouveau texte va à la fin et l'ancien reste. Une boucle for sur le fichier donne ses lignes une par une, chacune avec le caractère de fin de ligne à la fin, donc strip() la nettoie.

readlines() donne toutes les lignes dans une liste. read() donne tout comme un seul long texte.`],
        d: ['Count how many lines the file has.', 'Conta quante righe ha il file.', 'Compte combien de lignes a le fichier.']
      },
      {
        c: c`import os
with open("data.txt", "w") as f:
    f.write("hello")
print(os.path.exists("data.txt"))
print(os.path.exists("nothing.txt"))
print(os.path.getsize("data.txt"), "bytes")
print("data.txt" in os.listdir("."))
os.rename("data.txt", "renamed.txt")
os.remove("renamed.txt")
print(os.path.exists("renamed.txt"))`,
        t: ['Look after files: os', 'Occuparsi dei file: os', 'S\'occuper des fichiers : os'],
        x: [`The os module works with files themselves: path.exists asks if one is there, path.getsize tells its size, listdir lists a folder, rename changes its name and remove deletes it.

Check with exists before reading a file that may not be there.`,
          `Il modulo os lavora con i file stessi: path.exists chiede se uno c'è, path.getsize dice la sua dimensione, listdir elenca una cartella, rename cambia il nome e remove lo cancella.

Controlla con exists prima di leggere un file che potrebbe non esserci.`,
          `Le module os travaille avec les fichiers eux-mêmes : path.exists demande si l'un est là, path.getsize dit sa taille, listdir liste un dossier, rename change son nom et remove le supprime.

Vérifie avec exists avant de lire un fichier qui pourrait ne pas être là.`],
        d: ['Create a file, check it exists, then delete it.', 'Crea un file, controlla che esista, poi cancellalo.', 'Crée un fichier, vérifie qu\'il existe, puis supprime-le.']
      },
      {
        c: c`open("missing_file.txt")`,
        e: 'FileNotFoundError',
        t: ['A file that is not there', 'Un file che non c\'è', 'Un fichier qui n\'est pas là'],
        x: [`Opening a file that does not exist to read it stops with a FileNotFoundError. The explanation reminds you that, here, files live in a small workspace and have to be written first.

In the next lesson you will learn to catch this error with try and except, so the program does not stop.`,
          `Aprire per leggere un file che non esiste si ferma con un FileNotFoundError. La spiegazione ti ricorda che, qui, i file vivono in un piccolo spazio di lavoro e vanno scritti prima.

Nella prossima lezione imparerai a prendere questo errore con try ed except, così il programma non si ferma.`,
          `Ouvrir un fichier qui n'existe pas pour le lire s'arrête avec une FileNotFoundError. L'explication te rappelle qu'ici les fichiers vivent dans un petit espace de travail et doivent être écrits d'abord.

Dans la leçon suivante tu apprendras à attraper cette erreur avec try et except, pour que le programme ne s'arrête pas.`],
        d: ['Write the file first, then read it.', 'Scrivi prima il file, poi leggilo.', 'Écris d\'abord le fichier, puis lis-le.']
      },
      {
        c: c`names = ["Ada", "Max", "Zoe"]
with open("names.txt", "w") as f:
    for name in names:
        f.write(name + "\n")

loaded = []
with open("names.txt") as f:
    for line in f:
        loaded.append(line.strip())
print(loaded)
print(loaded == names)`,
        t: ['Save and load a list', 'Salvare e caricare una lista', 'Sauvegarder et charger une liste'],
        x: [`A very common job: keep a list of things in a file, one per line, and read it back later. Writing adds the line ending \\n, reading removes it with strip().

This is how a program remembers things between two runs.`,
          `Un lavoro molto comune: tenere una lista di cose in un file, una per riga, e rileggerla più tardi. Scrivere aggiunge il fine riga \\n, leggere lo toglie con strip().

È così che un programma ricorda le cose tra due esecuzioni.`,
          `Un travail très courant : garder une liste de choses dans un fichier, une par ligne, et la relire plus tard. Écrire ajoute la fin de ligne \\n, lire l'enlève avec strip().

C'est ainsi qu'un programme se souvient des choses entre deux exécutions.`],
        d: ['Save and load a list of numbers, turning them back with int.', 'Salva e carica una lista di numeri, ritrasformandoli con int.', 'Sauvegarde et charge une liste de nombres, en les retransformant avec int.']
      }
    ]
  },

  // ------------------------------------------------------------------ 29
  {
    title: ['When things go wrong, on purpose', 'Quando le cose vanno storte, apposta', 'Quand les choses tournent mal, exprès'],
    subtitle: ['try, except and friends', 'try, except e compagnia', 'try, except et compagnie'],
    steps: [
      {
        c: c`try:
    number = int("abc")
    print("This line is skipped")
except ValueError:
    print("That was not a number")
print("The program goes on")`,
        t: ['Try it, and catch the error', 'Provaci, e prendi l\'errore', 'Essaie, et attrape l\'erreur'],
        x: [`try runs the pushed-in lines. If one of them fails with the kind of error named after except, Python jumps to the except block instead of stopping, and the program goes on.

It is like a safety net: you say "try this, and if it goes wrong in this way, do that".`,
          `try fa girare le righe rientrate. Se una di loro fallisce con il tipo di errore nominato dopo except, Python salta al blocco except invece di fermarsi, e il programma va avanti.

È come una rete di sicurezza: dici "prova questo, e se va male in questo modo, fai quello".`,
          `try fait tourner les lignes décalées. Si l'une d'elles échoue avec le genre d'erreur nommé après except, Python saute au bloc except au lieu de s'arrêter, et le programme continue.

C'est comme un filet de sécurité : tu dis « essaie ça, et si ça se passe mal de cette façon, fais ça ».`],
        d: ['Change "abc" to "42" and see that except does not run.', 'Cambia "abc" in "42" e guarda che except non gira.', 'Change "abc" en "42" et vois que except ne tourne pas.'],
        w: ['Name the kind of error you expect. A bare except hides every mistake, even your typos.', 'Nomina il tipo di errore che ti aspetti. Un except senza nome nasconde ogni errore, anche i tuoi errori di battitura.', 'Nomme le genre d\'erreur que tu attends. Un except sans nom cache toutes les erreurs, même tes fautes de frappe.']
      },
      {
        c: c`def safe_divide(a, b):
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
        print("Problem:", error)`,
        t: ['Which error, and what it says', 'Quale errore, e cosa dice', 'Quelle erreur, et ce qu\'elle dit'],
        x: [`You can have several except blocks for several kinds of error. And except ValueError as error keeps the error in a box, so you can show its message.

A loop with try inside lets the program handle each item on its own: one bad item does not stop the others.`,
          `Puoi avere più blocchi except per più tipi di errore. E except ValueError as error tiene l'errore in una scatola, così puoi mostrarne il messaggio.

Un ciclo con try dentro lascia che il programma gestisca ogni elemento da solo: un elemento sbagliato non ferma gli altri.`,
          `Tu peux avoir plusieurs blocs except pour plusieurs genres d'erreur. Et except ValueError as error garde l'erreur dans une boîte, pour que tu puisses montrer son message.

Une boucle avec try dedans laisse le programme gérer chaque élément à part : un mauvais élément n'arrête pas les autres.`],
        d: ['Make a function that turns a text into a number, or gives back 0 if it cannot.', 'Fai una funzione che trasforma un testo in numero, o restituisce 0 se non può.', 'Fais une fonction qui transforme un texte en nombre, ou rend 0 si elle ne peut pas.']
      },
      {
        c: c`def read_number(text):
    try:
        value = int(text)
    except ValueError:
        print("not a number")
    else:
        print("got", value)
    finally:
        print("done with", repr(text))

read_number("5")
read_number("five")`,
        t: ['else and finally', 'else e finally', 'else et finally'],
        x: [`else runs only when try worked with no error. finally runs at the end in every case, with an error or without: it is the place to tidy up, like closing something.

The usual order is try, except, else, finally, and only try and one of the others are needed.`,
          `else gira solo quando try ha funzionato senza errori. finally gira alla fine in ogni caso, con un errore o senza: è il posto per sistemare, come chiudere qualcosa.

L'ordine solito è try, except, else, finally, e servono solo try e uno degli altri.`,
          `else ne tourne que quand try a marché sans erreur. finally tourne à la fin dans tous les cas, avec une erreur ou sans : c'est l'endroit pour ranger, comme fermer quelque chose.

L'ordre habituel est try, except, else, finally, et seuls try et l'un des autres sont nécessaires.`],
        d: ['Add a finally to a division function that prints "end".', 'Aggiungi un finally a una funzione di divisione che stampa "end".', 'Ajoute un finally à une fonction de division qui affiche "end".']
      },
      {
        c: c`def set_age(age):
    if age < 0:
        raise ValueError("an age cannot be negative")
    return age

print(set_age(12))
try:
    set_age(-5)
except ValueError as error:
    print("Caught:", error)
set_age(-1)`,
        e: 'ValueError',
        t: ['Raise your own error', 'Solleva un tuo errore', 'Lève ta propre erreur'],
        x: [`raise makes an error on purpose, when your function receives something that makes no sense. The message tells the person using it what was wrong.

The caller can catch it with try and except, or not: the last line does not catch it, so the program stops there, with your own message in the explanation.`,
          `raise crea un errore apposta, quando la tua funzione riceve qualcosa che non ha senso. Il messaggio dice a chi la usa cosa c'era di sbagliato.

Chi chiama può prenderlo con try ed except, oppure no: l'ultima riga non lo prende, quindi il programma si ferma lì, con il tuo messaggio nella spiegazione.`,
          `raise crée une erreur exprès, quand ta fonction reçoit quelque chose qui n'a pas de sens. Le message dit à la personne qui l'utilise ce qui n'allait pas.

L'appelant peut l'attraper avec try et except, ou pas : la dernière ligne ne l'attrape pas, donc le programme s'arrête là, avec ton propre message dans l'explication.`],
        d: ['Remove the last line, then raise an error for an empty name.', 'Togli l\'ultima riga, poi solleva un errore per un nome vuoto.', 'Enlève la dernière ligne, puis lève une erreur pour un nom vide.']
      },
      {
        c: c`while True:
    text = input("Your age: ")
    try:
        age = int(text)
        if age < 0:
            raise ValueError("negative")
        break
    except ValueError:
        print("Please type a whole number, 0 or more.")
print("Thanks, you are", age)`,
        i: ['abc', '-3', '12'],
        t: ['Ask again until it is right', 'Chiedi di nuovo finché è giusto', 'Redemande jusqu\'à ce que ce soit juste'],
        x: [`This is the most useful use of try: a loop that keeps asking until the answer is valid. Anything that is not a whole number, or is negative, goes to except, prints a polite message, and the loop asks again.

break leaves the loop only when everything went well.`,
          `Questo è l'uso più utile di try: un ciclo che continua a chiedere finché la risposta è valida. Tutto quello che non è un numero intero, o è negativo, va a except, stampa un messaggio gentile, e il ciclo chiede di nuovo.

break esce dal ciclo solo quando tutto è andato bene.`,
          `C'est l'usage le plus utile de try : une boucle qui continue de demander jusqu'à ce que la réponse soit valide. Tout ce qui n'est pas un nombre entier, ou est négatif, va dans except, affiche un message poli, et la boucle redemande.

break ne sort de la boucle que quand tout s'est bien passé.`],
        d: ['Also refuse ages above 120.', 'Rifiuta anche le età sopra 120.', 'Refuse aussi les âges au-dessus de 120.']
      },
      {
        c: c`class AgeError(Exception):
    """The age is not possible."""

def check(age):
    if not 0 <= age <= 120:
        raise AgeError(f"{age} is not a possible age")
    return age

try:
    check(200)
except AgeError as error:
    print("Caught:", error)
print(issubclass(AgeError, Exception))`,
        t: ['Your own kind of error', 'Un tuo tipo di errore', 'Ton propre genre d\'erreur'],
        x: [`You can invent your own kind of error: a class that inherits from Exception. Then you can catch exactly that one and nothing else.

Do not worry about class for now: you will learn it in the next stage. For now it is a name with a meaning.`,
          `Puoi inventare un tuo tipo di errore: una classe che eredita da Exception. Poi puoi prendere esattamente quello e nient'altro.

Non preoccuparti di class per ora: la imparerai nel prossimo livello. Per ora è un nome con un significato.`,
          `Tu peux inventer ton propre genre d'erreur : une classe qui hérite d'Exception. Ensuite tu peux attraper exactement celui-là et rien d'autre.

Ne t'inquiète pas de class pour l'instant : tu l'apprendras au niveau suivant. Pour l'instant c'est un nom avec un sens.`],
        d: ['Raise your own error for a negative price.', 'Solleva un tuo errore per un prezzo negativo.', 'Lève ta propre erreur pour un prix négatif.']
      }
    ]
  },

  // ------------------------------------------------------------------ 30
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
print(back["pets"][0], back == person)
print(json.dumps(person, indent=2))`,
        t: ['JSON: data as text', 'JSON: dati come testo', 'JSON : des données en texte'],
        x: [`JSON is a way to write data as plain text, so it can be saved or sent to another program. It looks almost like a Python dictionary. json.dumps turns data into text, and json.loads turns the text back into data.

indent=2 makes it easy to read. Almost every website uses JSON to talk to other programs.`,
          `JSON è un modo di scrivere i dati come semplice testo, così si possono salvare o mandare a un altro programma. Somiglia quasi a un dizionario di Python. json.dumps trasforma i dati in testo, e json.loads trasforma il testo di nuovo in dati.

indent=2 lo rende facile da leggere. Quasi ogni sito usa JSON per parlare con altri programmi.`,
          `JSON est une façon d'écrire des données en simple texte, pour pouvoir les enregistrer ou les envoyer à un autre programme. Il ressemble presque à un dictionnaire Python. json.dumps transforme des données en texte, et json.loads retransforme le texte en données.

indent=2 le rend facile à lire. Presque tous les sites utilisent JSON pour parler à d'autres programmes.`],
        d: ['Make a dictionary about your favourite game and print it as JSON.', 'Fai un dizionario sul tuo gioco preferito e stampalo come JSON.', 'Fais un dictionnaire sur ton jeu préféré et affiche-le en JSON.']
      },
      {
        c: c`import json
scores = {"Ada": 12, "Max": 7}
with open("scores.json", "w") as f:
    json.dump(scores, f)

with open("scores.json") as f:
    loaded = json.load(f)
loaded["Zoe"] = 15
print(loaded)
with open("scores.json", "w") as f:
    json.dump(loaded, f, indent=2)
print(open("scores.json").read())`,
        t: ['Save and load data', 'Salvare e caricare i dati', 'Sauvegarder et charger des données'],
        x: [`json.dump writes data straight into a file and json.load reads it back. With these two lines, a program can keep a score table, a to-do list or settings between runs.

This is the easiest way to make a program remember things.`,
          `json.dump scrive i dati direttamente in un file e json.load li rilegge. Con queste due righe, un programma può tenere una tabella dei punteggi, una lista di cose da fare o delle impostazioni tra un'esecuzione e l'altra.

È il modo più facile per far ricordare le cose a un programma.`,
          `json.dump écrit les données directement dans un fichier et json.load les relit. Avec ces deux lignes, un programme peut garder un tableau de scores, une liste de choses à faire ou des réglages entre deux exécutions.

C'est la façon la plus facile de faire se souvenir un programme.`],
        d: ['Save a list of your three favourite songs and load it back.', 'Salva una lista delle tue tre canzoni preferite e ricaricala.', 'Sauvegarde une liste de tes trois chansons préférées et recharge-la.']
      },
      {
        c: c`import csv
rows = [["name", "score"], ["Ada", 12], ["Max", 7]]
with open("table.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(rows)
print(open("table.csv").read())
with open("table.csv") as f:
    for row in csv.reader(f):
        print(row)`,
        t: ['CSV: tables as text', 'CSV: tabelle come testo', 'CSV : des tableaux en texte'],
        x: [`CSV is how spreadsheets are saved as plain text: one row per line, values separated by commas. csv.writer writes rows, csv.reader reads them back as lists of texts.

Every value comes back as a text, even the numbers, so convert them with int(...) when you need them.`,
          `CSV è come si salvano i fogli di calcolo come semplice testo: una riga per linea, valori separati da virgole. csv.writer scrive le righe, csv.reader le rilegge come liste di testi.

Ogni valore torna come testo, anche i numeri, quindi convertili con int(...) quando ti servono.`,
          `CSV est la façon d'enregistrer les tableurs en simple texte : une ligne par rangée, valeurs séparées par des virgules. csv.writer écrit les lignes, csv.reader les relit comme des listes de textes.

Chaque valeur revient en texte, même les nombres, donc convertis-les avec int(...) quand tu en as besoin.`],
        d: ['Add a third person to the table.', 'Aggiungi una terza persona alla tabella.', 'Ajoute une troisième personne au tableau.']
      },
      {
        c: c`import csv, io
data = "name,score\nAda,12\nMax,7\nZoe,15\n"
reader = csv.DictReader(io.StringIO(data))
total = 0
for row in reader:
    print(row["name"], int(row["score"]))
    total += int(row["score"])
print("Total:", total)`,
        t: ['Rows with names', 'Righe con i nomi', 'Des lignes avec des noms'],
        x: [`DictReader uses the first row as the names of the columns, and gives each following row as a dictionary: row["name"]. Much clearer than counting columns.

io.StringIO makes a text behave like a file, which is handy for trying things.`,
          `DictReader usa la prima riga come nomi delle colonne, e dà ogni riga successiva come un dizionario: row["name"]. Molto più chiaro che contare le colonne.

io.StringIO fa comportare un testo come un file, ed è comodo per fare prove.`,
          `DictReader utilise la première ligne comme noms des colonnes, et donne chaque ligne suivante comme un dictionnaire : row["name"]. Bien plus clair que de compter les colonnes.

io.StringIO fait se comporter un texte comme un fichier, ce qui est pratique pour faire des essais.`],
        d: ['Find the highest score in the data.', 'Trova il punteggio più alto nei dati.', 'Trouve le score le plus haut dans les données.']
      }
    ]
  },

  // ------------------------------------------------------------------ 31
  {
    title: ['Find patterns in text', 'Trovare schemi nel testo', 'Trouver des motifs dans du texte'],
    subtitle: ['Regular expressions', 'Le espressioni regolari', 'Les expressions régulières'],
    steps: [
      {
        c: c`import re
text = "My phone is 555-1234 and my friend's is 555-9876."
print(re.search(r"\d{3}-\d{4}", text))
print(re.search(r"\d{3}-\d{4}", text).group())
print(re.findall(r"\d{3}-\d{4}", text))
print(re.search(r"xyz", text))`,
        t: ['Look for a pattern', 'Cercare uno schema', 'Chercher un motif'],
        x: [`A regular expression, or regex, describes a pattern of text. \\d means "a digit" and {3} means "three of them", so \\d{3}-\\d{4} is three digits, a dash and four digits.

re.search finds the first match (or None), re.findall gives the list of all matches. Put an r before the quote, as in r"\\d", so that Python leaves the backslashes alone.`,
          `Un'espressione regolare, o regex, descrive uno schema di testo. \\d vuol dire "una cifra" e {3} vuol dire "tre di esse", quindi \\d{3}-\\d{4} è tre cifre, un trattino e quattro cifre.

re.search trova la prima corrispondenza (o None), re.findall dà la lista di tutte. Metti una r prima della virgoletta, come in r"\\d", così Python lascia in pace le barre rovesciate.`,
          `Une expression régulière, ou regex, décrit un motif de texte. \\d veut dire « un chiffre » et {3} veut dire « trois d'entre eux », donc \\d{3}-\\d{4} est trois chiffres, un tiret et quatre chiffres.

re.search trouve la première correspondance (ou None), re.findall donne la liste de toutes. Mets un r avant le guillemet, comme dans r"\\d", pour que Python laisse les antislashs tranquilles.`],
        d: ['Find all the numbers in "I have 3 cats and 12 fish" with \\d+.', 'Trova tutti i numeri in "I have 3 cats and 12 fish" con \\d+.', 'Trouve tous les nombres dans "I have 3 cats and 12 fish" avec \\d+.']
      },
      {
        c: c`import re
print(re.findall(r"\w+", "Hello, big world!"))
print(re.findall(r"[aeiou]", "education"))
print(re.findall(r"cat|dog", "a cat and a dog"))
print(re.findall(r"colou?r", "color colour"))
print(re.findall(r"\bgo+d\b", "god good goood gd"))
print(bool(re.match(r"^[A-Z][a-z]+$", "Python")))`,
        t: ['The building blocks', 'I mattoncini', 'Les briques'],
        x: [`A few signs go a long way. \\w is a letter or digit, [aeiou] is any one letter from the list, | means "or", ? makes the thing before it optional, + means "one or more", * means "zero or more", \\b is the edge of a word, ^ and $ are the start and the end of the text.

re.match checks only from the beginning of the text.`,
          `Pochi segni portano lontano. \\w è una lettera o cifra, [aeiou] è una qualunque lettera della lista, | vuol dire "oppure", ? rende facoltativa la cosa prima, + vuol dire "una o più", * vuol dire "zero o più", \\b è il bordo di una parola, ^ e $ sono l'inizio e la fine del testo.

re.match controlla solo dall'inizio del testo.`,
          `Quelques signes vont loin. \\w est une lettre ou un chiffre, [aeiou] est une lettre quelconque de la liste, | veut dire « ou », ? rend facultative la chose d'avant, + veut dire « un ou plus », * veut dire « zéro ou plus », \\b est le bord d'un mot, ^ et $ sont le début et la fin du texte.

re.match vérifie seulement depuis le début du texte.`],
        d: ['Write a pattern that matches "gray" and "grey".', 'Scrivi uno schema che corrisponde a "gray" e "grey".', 'Écris un motif qui correspond à "gray" et "grey".']
      },
      {
        c: c`import re
text = "Name: Ada, Age: 12; Name: Max, Age: 9"
print(re.findall(r"Name: (\w+), Age: (\d+)", text))
found = re.search(r"Age: (\d+)", text)
print(found.group(0), "|", found.group(1))
print(re.sub(r"\d+", "#", text))
print(re.split(r"[,;] ", text))`,
        t: ['Pick parts out, replace, split', 'Estrarre parti, sostituire, dividere', 'Extraire des parties, remplacer, découper'],
        x: [`Round brackets in a pattern catch a part of the match: group(1) is the first part, group(0) is the whole match. findall with groups gives tuples.

re.sub replaces every match with something else, and re.split cuts a text at every match, even when the separator can be written in several ways.`,
          `Le parentesi tonde in uno schema catturano una parte della corrispondenza: group(1) è la prima parte, group(0) è l'intera corrispondenza. findall con i gruppi dà tuple.

re.sub sostituisce ogni corrispondenza con qualcos'altro, e re.split taglia un testo a ogni corrispondenza, anche quando il separatore può essere scritto in più modi.`,
          `Les parenthèses dans un motif attrapent une partie de la correspondance : group(1) est la première partie, group(0) est la correspondance entière. findall avec des groupes donne des tuples.

re.sub remplace chaque correspondance par autre chose, et re.split coupe un texte à chaque correspondance, même quand le séparateur peut s'écrire de plusieurs façons.`],
        d: ['Hide every digit of "my code is 4821" with a star.', 'Nascondi ogni cifra di "my code is 4821" con una stella.', 'Cache chaque chiffre de "my code is 4821" avec une étoile.']
      },
      {
        c: c`import re

def valid_email(text):
    return bool(re.fullmatch(r"[\w.]+@[\w]+\.[a-z]{2,}", text))

for address in ["ada@example.com", "ada@", "max.smith@site.org", "no spaces@x.com"]:
    print(address, "->", valid_email(address))`,
        t: ['A real check: an email address', 'Un controllo vero: un indirizzo email', 'Une vraie vérification : une adresse e-mail'],
        x: [`Regexes shine when you check what people type. fullmatch asks that the whole text fits the pattern. This one accepts letters, digits, dots, an @, a name, a dot and at least two letters at the end.

It is a simple pattern: real email rules are much bigger. Always test with good and bad examples.`,
          `Le regex brillano quando controlli cosa scrivono le persone. fullmatch chiede che l'intero testo rispetti lo schema. Questo accetta lettere, cifre, punti, una @, un nome, un punto e almeno due lettere alla fine.

È uno schema semplice: le vere regole per le email sono molto più grandi. Prova sempre con esempi buoni e cattivi.`,
          `Les regex brillent quand tu vérifies ce que les gens écrivent. fullmatch demande que tout le texte respecte le motif. Celui-ci accepte des lettres, des chiffres, des points, un @, un nom, un point et au moins deux lettres à la fin.

C'est un motif simple : les vraies règles des e-mails sont bien plus grandes. Teste toujours avec de bons et de mauvais exemples.`],
        d: ['Write a check for a phone number like 555-1234.', 'Scrivi un controllo per un numero di telefono come 555-1234.', 'Écris une vérification pour un numéro de téléphone comme 555-1234.']
      }
    ]
  },

  // ------------------------------------------------------------------ 32
  {
    title: ['A tour of the standard library', 'Un giro nella libreria standard', 'Un tour de la bibliothèque standard'],
    subtitle: ['collections, itertools, functools and more', 'collections, itertools, functools e altro', 'collections, itertools, functools et plus'],
    steps: [
      {
        c: c`from collections import Counter
counts = Counter("mississippi")
print(counts)
print(counts["s"])
print(counts.most_common(2))
words = "the cat and the hat and the bat".split()
print(Counter(words).most_common(1))`,
        t: ['Counting made easy: Counter', 'Contare è facile: Counter', 'Compter facilement : Counter'],
        x: [`Counter counts how many times each item appears, in one line. It is a kind of dictionary, and most_common(n) gives the n most frequent items.

Remember the word-counting loop from the dictionary lesson? This replaces it.`,
          `Counter conta quante volte compare ogni elemento, in una riga. È una specie di dizionario, e most_common(n) dà gli n elementi più frequenti.

Ti ricordi il ciclo per contare le parole della lezione sui dizionari? Questo lo sostituisce.`,
          `Counter compte combien de fois chaque élément apparaît, en une ligne. C'est une sorte de dictionnaire, et most_common(n) donne les n éléments les plus fréquents.

Tu te souviens de la boucle pour compter les mots de la leçon sur les dictionnaires ? Ceci la remplace.`],
        d: ['Find the most common letter of a sentence you choose.', 'Trova la lettera più comune di una frase che scegli.', 'Trouve la lettre la plus courante d\'une phrase que tu choisis.']
      },
      {
        c: c`from collections import defaultdict, deque, namedtuple
groups = defaultdict(list)
for word in ["ant", "bee", "ape", "bat"]:
    groups[word[0]].append(word)
print(dict(groups))

queue = deque([1, 2, 3])
queue.append(4)
print(queue.popleft(), list(queue))

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p, p.x + p.y)`,
        t: ['More collections', 'Altre raccolte', 'Plus de collections'],
        x: [`defaultdict makes a missing key start with an empty value by itself, so no check is needed. deque is a row that is fast at both ends, perfect for a queue. namedtuple makes a tuple whose parts have names: p.x.

All three solve small annoyances you would otherwise code by hand.`,
          `defaultdict fa partire da solo con un valore vuoto una chiave che manca, quindi non serve nessun controllo. deque è una fila veloce a entrambe le estremità, perfetta per una coda. namedtuple crea una tupla le cui parti hanno un nome: p.x.

Tutti e tre risolvono piccoli fastidi che altrimenti scriveresti a mano.`,
          `defaultdict fait démarrer tout seul avec une valeur vide une clé qui manque, donc aucune vérification n'est nécessaire. deque est une file rapide aux deux bouts, parfaite pour une file d'attente. namedtuple crée un tuple dont les parties ont un nom : p.x.

Les trois résolvent de petits ennuis que tu coderais sinon à la main.`],
        d: ['Group the words of a sentence by their length.', 'Raggruppa le parole di una frase in base alla loro lunghezza.', 'Regroupe les mots d\'une phrase selon leur longueur.']
      },
      {
        c: c`from itertools import permutations, combinations, product, chain, islice, count
print(list(permutations("abc", 2)))
print(list(combinations([1, 2, 3, 4], 2)))
print(list(product("ab", [1, 2])))
print(list(chain([1, 2], [3], "xy")))
print(list(islice(count(10), 4)))`,
        t: ['Combinations: itertools', 'Combinazioni: itertools', 'Combinaisons : itertools'],
        x: [`itertools has tools to build combinations: permutations (all orders), combinations (choose some, order does not matter), product (every pairing), chain (glue several rows), and count (counts forever, so cut it with islice).

They give an iterator, so wrap them in list(...) to see everything.`,
          `itertools ha strumenti per costruire combinazioni: permutations (tutti gli ordini), combinations (scegliere alcuni, l'ordine non conta), product (ogni abbinamento), chain (incollare più file), e count (conta per sempre, quindi taglialo con islice).

Danno un iteratore, quindi avvolgili in list(...) per vedere tutto.`,
          `itertools a des outils pour construire des combinaisons : permutations (tous les ordres), combinations (en choisir quelques-uns, l'ordre ne compte pas), product (chaque association), chain (coller plusieurs rangées), et count (compte pour toujours, donc coupe-le avec islice).

Ils donnent un itérateur, enveloppe-les donc dans list(...) pour tout voir.`],
        d: ['How many ways can 4 friends sit in a row? Use permutations.', 'In quanti modi possono sedersi in fila 4 amici? Usa permutations.', 'De combien de façons 4 amis peuvent-ils s\'asseoir en rang ? Utilise permutations.']
      },
      {
        c: c`from functools import reduce, lru_cache, partial
print(reduce(lambda a, b: a * b, [1, 2, 3, 4]))

@lru_cache(maxsize=None)
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)

print(fib(80))
power_of_two = partial(pow, 2)
print(power_of_two(10))`,
        t: ['Clever tools: functools', 'Strumenti furbi: functools', 'Outils malins : functools'],
        x: [`reduce folds a list into one value with a function. lru_cache remembers the answers of a function, so fib(80) is instant instead of taking forever: the slow Fibonacci of the recursion lesson, fixed with one line. partial makes a new function with one value already filled in.

The @ line above a function is called a decorator. You will learn to write them in the next stage.`,
          `reduce piega una lista in un solo valore con una funzione. lru_cache ricorda le risposte di una funzione, quindi fib(80) è istantaneo invece di impiegare un'eternità: il lento Fibonacci della lezione sulla ricorsione, sistemato con una riga. partial crea una nuova funzione con un valore già inserito.

La riga con @ sopra una funzione si chiama decoratore. Imparerai a scriverli nel prossimo livello.`,
          `reduce plie une liste en une seule valeur avec une fonction. lru_cache se souvient des réponses d'une fonction, donc fib(80) est instantané au lieu de prendre une éternité : le Fibonacci lent de la leçon sur la récursion, réparé avec une ligne. partial fabrique une nouvelle fonction avec une valeur déjà remplie.

La ligne avec @ au-dessus d'une fonction s'appelle un décorateur. Tu apprendras à en écrire au niveau suivant.`],
        d: ['Use reduce to find the biggest of [4, 9, 2].', 'Usa reduce per trovare il più grande di [4, 9, 2].', 'Utilise reduce pour trouver le plus grand de [4, 9, 2].']
      },
      {
        c: c`import string, textwrap, pprint
print(string.ascii_lowercase)
print(string.digits, string.punctuation[:5])
long_text = "Python is a language that is easy to read and fun to write."
print(textwrap.fill(long_text, width=24))
data = {"name": "Ada", "scores": [12, 7, 15], "address": {"city": "Rome"}}
pprint.pprint(data, width=30)
print(string.capwords("hello big world"))`,
        t: ['Text helpers', 'Aiuti per il testo', 'Aides pour le texte'],
        x: [`string has ready-made lists of letters and digits. textwrap.fill breaks a long text into lines of a given width. pprint.pprint shows big data over many lines so it is easy to read, and string.capwords capitalises every word.

A real tour of the standard library is never finished: the habit is to ask "has someone already written this?" before writing it.`,
          `string ha liste già pronte di lettere e cifre. textwrap.fill spezza un testo lungo in righe di una data larghezza. pprint.pprint mostra dati grandi su più righe così sono facili da leggere, e string.capwords mette la maiuscola a ogni parola.

Un giro vero nella libreria standard non finisce mai: l'abitudine è chiedersi "qualcuno l'ha già scritto?" prima di scriverlo.`,
          `string a des listes toutes prêtes de lettres et de chiffres. textwrap.fill coupe un long texte en lignes d'une largeur donnée. pprint.pprint montre de grosses données sur plusieurs lignes pour qu'elles soient faciles à lire, et string.capwords met une majuscule à chaque mot.

Un vrai tour de la bibliothèque standard n'est jamais fini : l'habitude est de se demander « quelqu'un l'a-t-il déjà écrit ? » avant de l'écrire.`],
        d: ['Wrap a sentence of your own to a width of 20.', 'Spezza una frase tua con larghezza 20.', 'Coupe une phrase à toi avec une largeur de 20.']
      }
    ]
  },

  // ------------------------------------------------------------------ 33
  {
    title: ['Is it right? Testing and debugging', 'È giusto? Test e correzione', 'Est-ce juste ? Tests et débogage'],
    subtitle: ['Catch mistakes before they catch you', 'Prendi gli errori prima che prendano te', 'Attrape les erreurs avant qu\'elles ne t\'attrapent'],
    steps: [
      {
        c: c`def double(n):
    return n * 2

assert double(4) == 8
assert double(0) == 0
assert double(-3) == -6
print("All the checks passed")
assert double(5) == 11, "double(5) should be 10"`,
        e: 'AssertionError',
        t: ['assert: a promise that must be true', 'assert: una promessa che deve essere vera', 'assert : une promesse qui doit être vraie'],
        x: [`assert checks that something is True. If it is, nothing happens. If not, Python stops with an AssertionError and your message. It is the simplest test: "I promise that double(4) is 8".

Write a few asserts next to your function, with small examples whose answer you know. The last one is wrong on purpose, so you see what a failing test looks like.`,
          `assert controlla che qualcosa sia True. Se lo è, non succede niente. Se no, Python si ferma con un AssertionError e il tuo messaggio. È il test più semplice: "prometto che double(4) è 8".

Scrivi qualche assert vicino alla tua funzione, con piccoli esempi di cui conosci la risposta. L'ultimo è sbagliato apposta, così vedi com'è un test che fallisce.`,
          `assert vérifie que quelque chose est True. Si c'est le cas, rien ne se passe. Sinon, Python s'arrête avec une AssertionError et ton message. C'est le test le plus simple : « je promets que double(4) vaut 8 ».

Écris quelques assert près de ta fonction, avec de petits exemples dont tu connais la réponse. Le dernier est faux exprès, pour que tu voies à quoi ressemble un test qui échoue.`],
        d: ['Fix the last assert and run again.', 'Correggi l\'ultimo assert e riesegui.', 'Corrige le dernier assert et relance.']
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

suite = unittest.defaultTestLoader.loadTestsFromTestCase(TestEven)
result = unittest.TextTestRunner(stream=open("/dev/null", "w")).run(suite)
print("Tests run:", result.testsRun, "- failures:", len(result.failures))`,
        t: ['A real test tool: unittest', 'Uno strumento di test vero: unittest', 'Un vrai outil de test : unittest'],
        x: [`unittest is Python's own testing tool. Each test is a method whose name starts with test, and it uses assertEqual, assertTrue and friends. All the tests are collected and run together, and you get a count of what passed.

You will see class in the next stage. For now notice the shape: one little test per idea.`,
          `unittest è lo strumento di test di Python. Ogni test è un metodo il cui nome comincia con test, e usa assertEqual, assertTrue e compagnia. Tutti i test vengono raccolti ed eseguiti insieme, e ottieni un conteggio di quelli passati.

Vedrai class nel prossimo livello. Per ora nota la forma: un piccolo test per ogni idea.`,
          `unittest est l'outil de test de Python. Chaque test est une méthode dont le nom commence par test, et il utilise assertEqual, assertTrue et compagnie. Tous les tests sont rassemblés et lancés ensemble, et tu obtiens un compte de ceux qui ont réussi.

Tu verras class au niveau suivant. Pour l'instant remarque la forme : un petit test par idée.`],
        d: ['Add a test that says is_even(-2) is True.', 'Aggiungi un test che dice che is_even(-2) è True.', 'Ajoute un test qui dit que is_even(-2) est True.']
      },
      {
        c: c`def average(numbers):
    total = 0
    for n in numbers:
        total += n
        print("DEBUG: n =", n, "total =", total)
    return total / len(numbers)

print(average([4, 6, 8]))`,
        t: ['Look inside: print debugging', 'Guardare dentro: correzione con print', 'Regarder dedans : déboguer avec print'],
        x: [`When a program gives a wrong answer and no error, add print lines that show what the boxes really hold at each step. Often you see the mistake right away.

Give those prints a clear label like DEBUG and remove them when you are done.`,
          `Quando un programma dà una risposta sbagliata senza errore, aggiungi righe print che mostrano cosa contengono davvero le scatole a ogni passo. Spesso vedi subito l'errore.

Dai a quei print un'etichetta chiara come DEBUG e toglili quando hai finito.`,
          `Quand un programme donne une mauvaise réponse sans erreur, ajoute des lignes print qui montrent ce que les boîtes contiennent vraiment à chaque étape. Souvent tu vois l'erreur tout de suite.

Donne à ces print une étiquette claire comme DEBUG et enlève-les quand tu as fini.`],
        d: ['Find the bug: change the code so it returns the average of an empty list safely.', 'Trova l\'errore: cambia il codice in modo che restituisca la media di una lista vuota senza problemi.', 'Trouve le bogue : change le code pour qu\'il rende la moyenne d\'une liste vide sans problème.']
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
        t: ['Read the full error with code', 'Leggere l\'errore completo con il codice', 'Lire l\'erreur complète avec du code'],
        x: [`The module traceback lets a program get the full error as text, the same text that View full error shows you. The first line says "Traceback", the last line says what happened.

Real programs use this to write a report of what went wrong, without stopping.`,
          `Il modulo traceback permette a un programma di ottenere l'errore completo come testo, lo stesso testo che mostra Mostra l'errore completo. La prima riga dice "Traceback", l'ultima dice cosa è successo.

I programmi veri lo usano per scrivere un rapporto di cosa è andato storto, senza fermarsi.`,
          `Le module traceback permet à un programme d'obtenir l'erreur complète sous forme de texte, le même texte que montre Voir l'erreur complète. La première ligne dit « Traceback », la dernière dit ce qui s'est passé.

Les vrais programmes utilisent ça pour écrire un rapport de ce qui s'est mal passé, sans s'arrêter.`],
        d: ['Cause a different error inside try and print its last line.', 'Causa un errore diverso dentro try e stampa la sua ultima riga.', 'Cause une erreur différente dans try et affiche sa dernière ligne.']
      }
    ]
  },

  // ------------------------------------------------------------------ 34
  {
    title: ['Programs you can be proud of', 'Programmi di cui andare fieri', 'Des programmes dont tu peux être fier'],
    subtitle: ['Structure, style and good habits', 'Struttura, stile e buone abitudini', 'Structure, style et bonnes habitudes'],
    steps: [
      {
        c: c`def main():
    name = input("Name: ")
    print(greeting(name))

def greeting(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    main()`,
        i: ['Ada'],
        t: ['A main() and a start line', 'Un main() e una riga di partenza', 'Un main() et une ligne de départ'],
        x: [`A tidy program puts its work in functions and has one main() that runs them. The line if __name__ == "__main__": means "run main only if this file is the program itself, not if another program imported it".

You will see this shape in almost every Python file in the world.`,
          `Un programma ordinato mette il suo lavoro in funzioni e ha un solo main() che le fa girare. La riga if __name__ == "__main__": vuol dire "fai girare main solo se questo file è il programma stesso, non se un altro programma lo ha importato".

Vedrai questa forma in quasi ogni file Python del mondo.`,
          `Un programme bien rangé met son travail dans des fonctions et a un seul main() qui les fait tourner. La ligne if __name__ == "__main__": veut dire « fais tourner main seulement si ce fichier est le programme lui-même, pas si un autre programme l'a importé ».

Tu verras cette forme dans presque tous les fichiers Python du monde.`],
        d: ['Add a second function farewell(name) and call it from main.', 'Aggiungi una seconda funzione farewell(name) e chiamala da main.', 'Ajoute une deuxième fonction farewell(name) et appelle-la depuis main.']
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
        x: [`The community agreed on a style, called PEP 8. Names of variables and functions are in small letters with underscores (player_name), names of constants, values that never change, are in capitals (MAX_PLAYERS). Four spaces for each push-in, two empty lines around functions, and a short description under each def.

Nobody forces you, but it makes every program easier to read, including yours next month.`,
          `La comunità ha concordato uno stile, chiamato PEP 8. I nomi di variabili e funzioni sono in minuscolo con i trattini bassi (player_name), i nomi delle costanti, valori che non cambiano mai, sono in maiuscolo (MAX_PLAYERS). Quattro spazi per ogni rientro, due righe vuote attorno alle funzioni, e una breve descrizione sotto ogni def.

Nessuno ti obbliga, ma rende ogni programma più facile da leggere, compreso il tuo il mese prossimo.`,
          `La communauté s'est mise d'accord sur un style, appelé PEP 8. Les noms de variables et de fonctions sont en minuscules avec des tirets bas (player_name), les noms de constantes, des valeurs qui ne changent jamais, sont en majuscules (MAX_PLAYERS). Quatre espaces par décalage, deux lignes vides autour des fonctions, et une courte description sous chaque def.

Personne ne t'y oblige, mais ça rend chaque programme plus facile à lire, le tien le mois prochain compris.`],
        d: ['Rewrite a name like PlayerScore in the Python style.', 'Riscrivi un nome come PlayerScore nello stile Python.', 'Réécris un nom comme PlayerScore dans le style Python.']
      },
      {
        c: c`def ask_number(question, low, high):
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
print("Age saved:", age)`,
        i: ['abc', '500', '30'],
        t: ['Trust nothing that a person types', 'Non fidarti di niente di ciò che scrive una persona', 'Ne fais confiance à rien de ce qu\'une personne écrit'],
        x: [`People type surprises: letters instead of numbers, empty lines, huge values. A good program checks everything that comes in. A small helper function that keeps asking until the answer is valid can be used again and again.

Writing it once, in a function, means every question in your program is safe.`,
          `Le persone scrivono sorprese: lettere al posto di numeri, righe vuote, valori enormi. Un buon programma controlla tutto quello che entra. Una piccola funzione di aiuto che continua a chiedere finché la risposta è valida si può usare più e più volte.

Scriverla una volta, in una funzione, vuol dire che ogni domanda del tuo programma è sicura.`,
          `Les gens écrivent des surprises : des lettres au lieu de nombres, des lignes vides, des valeurs énormes. Un bon programme vérifie tout ce qui entre. Une petite fonction d'aide qui continue de demander jusqu'à ce que la réponse soit valide peut être utilisée encore et encore.

L'écrire une fois, dans une fonction, veut dire que chaque question de ton programme est sûre.`],
        d: ['Write ask_yes_no(question) that only accepts "yes" or "no".', 'Scrivi ask_yes_no(question) che accetta solo "yes" o "no".', 'Écris ask_yes_no(question) qui accepte seulement "yes" ou "no".']
      },
      {
        c: c`from typing import List, Optional

def find_longest(words: List[str]) -> Optional[str]:
    """Return the longest word, or None for an empty list."""
    if not words:
        return None
    return max(words, key=len)

print(find_longest(["pear", "banana", "fig"]))
print(find_longest([]))
age: int = 12
names: list[str] = ["Ada", "Max"]
print(age, names)`,
        t: ['Type hints', 'Suggerimenti di tipo', 'Indications de type'],
        x: [`You can write down what type each parameter and each answer should be: name: str and -> int. Python does not check them while running, but they tell the reader, and the editor, what is expected. Optional[str] means "a text or None".

Adding them is a habit of careful programmers.`,
          `Puoi scrivere che tipo dovrebbero essere ogni parametro e ogni risposta: name: str e -> int. Python non li controlla mentre gira, ma dicono al lettore, e all'editor, cosa ci si aspetta. Optional[str] vuol dire "un testo o None".

Aggiungerli è un'abitudine di chi programma con cura.`,
          `Tu peux écrire quel type devrait avoir chaque paramètre et chaque réponse : name: str et -> int. Python ne les vérifie pas pendant l'exécution, mais ils disent au lecteur, et à l'éditeur, ce qui est attendu. Optional[str] veut dire « un texte ou None ».

Les ajouter est une habitude des programmeurs soigneux.`],
        d: ['Add type hints to a function of your own.', 'Aggiungi i suggerimenti di tipo a una tua funzione.', 'Ajoute des indications de type à une fonction à toi.']
      }
    ]
  }
];
