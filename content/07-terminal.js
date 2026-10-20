// Appendix · Python on your own computer. See tools/build-course.js for the format.
const c = String.raw;
const G7 = ['Appendix · Python on your computer', 'Appendice · Python sul tuo computer', 'Annexe · Python sur ton ordinateur'];

module.exports = [
  {
    group: G7,
    title: ['Python in a terminal', 'Python in un terminale', 'Python dans un terminal'],
    subtitle: ['The commands every Python user types', 'I comandi che ogni utente di Python scrive', 'Les commandes que tout utilisateur de Python tape'],
    steps: [
      {
        c: c`import sys
print("Python", sys.version_info.major)
print("This is Python", sys.version_info.major, "and it is running your lines.")`,
        t: ['The terminal and python3 --version', 'Il terminale e python3 --version', 'Le terminal et python3 --version'],
        x: [`Until now you wrote programs here, in Pyviel. Real programmers also run Python from a terminal: a window where you type a command and press Enter.

Open one. On a Mac it is the app called Terminal. On Windows it is PowerShell or Terminal. On Linux it is Terminal or Konsole.

Type this and press Enter:

python3 --version

The computer answers with the version, something like Python 3.14.8. On Windows the command is py instead of python3, so type: py --version

The program on this page asks Python the same question from the inside. It prints the big number of the version: 3.`,
          `Finora hai scritto i programmi qui, in Pyviel. Chi programma esegue Python anche da un terminale: una finestra dove scrivi un comando e premi Invio.

Aprine uno. Su Mac è l'app che si chiama Terminale. Su Windows è PowerShell o Terminale. Su Linux è Terminale o Konsole.

Scrivi questo e premi Invio:

python3 --version

Il computer risponde con la versione, qualcosa come Python 3.14.8. Su Windows il comando è py invece di python3, quindi scrivi: py --version

Il programma di questa pagina fa a Python la stessa domanda da dentro. Scrive il numero grande della versione: 3.`,
          `Jusqu'ici tu as écrit les programmes ici, dans Pyviel. Les programmeurs lancent aussi Python depuis un terminal : une fenêtre où tu tapes une commande et appuies sur Entrée.

Ouvre-en un. Sur Mac c'est l'application Terminal. Sur Windows c'est PowerShell ou Terminal. Sur Linux c'est Terminal ou Konsole.

Tape ceci et appuie sur Entrée :

python3 --version

L'ordinateur répond avec la version, quelque chose comme Python 3.14.8. Sous Windows la commande est py au lieu de python3, donc tape : py --version

Le programme de cette page pose la même question à Python, de l'intérieur. Il affiche le grand numéro de la version : 3.`],
        d: ['Open a terminal on your computer and type the version command.', 'Apri un terminale sul tuo computer e scrivi il comando della versione.', 'Ouvre un terminal sur ton ordinateur et tape la commande de la version.'],
        w: ['If the terminal says "command not found", Python is not installed on your computer yet. Get it free from python.org. Pyviel has its own Python inside, but the terminal cannot see it.', 'Se il terminale dice "command not found", Python non è ancora installato sul tuo computer. Scaricalo gratis da python.org. Pyviel ha un suo Python dentro, ma il terminale non lo vede.', 'Si le terminal dit "command not found", Python n\'est pas encore installé sur ton ordinateur. Prends-le gratuitement sur python.org. Pyviel a son propre Python à l\'intérieur, mais le terminal ne le voit pas.']
      },
      {
        c: c`# hello.py
name = "Ada"
print("Hello,", name)
print("This program was run from a file.")`,
        t: ['Run a file: python3 hello.py', 'Eseguire un file: python3 hello.py', 'Lancer un fichier : python3 hello.py'],
        x: [`A program that you want to keep lives in a file whose name ends in .py. You run it by giving the file name to Python.

Step by step in the terminal:

1. Go to the folder that holds the file. The command cd (change directory) does it: cd Documents/Pyviel
2. Look at what is there: ls on Mac and Linux, dir on Windows.
3. Run it: python3 hello.py

In the desktop app of Pyviel, the Command button does the first part for you: it saves your program in the Pyviel folder and shows the exact lines to type.

You can also give a path instead of going to the folder first: python3 Documents/Pyviel/hello.py`,
          `Un programma che vuoi tenere vive in un file il cui nome finisce con .py. Lo esegui dando a Python il nome del file.

Passo per passo nel terminale:

1. Vai nella cartella che contiene il file. Lo fa il comando cd (change directory): cd Documents/Pyviel
2. Guarda cosa c'è: ls su Mac e Linux, dir su Windows.
3. Eseguilo: python3 hello.py

Nell'app per computer di Pyviel il pulsante Comando fa la prima parte per te: salva il programma nella cartella Pyviel e mostra le righe esatte da scrivere.

Puoi anche dare un percorso invece di andare prima nella cartella: python3 Documents/Pyviel/hello.py`,
          `Un programme que tu veux garder vit dans un fichier dont le nom finit par .py. Tu le lances en donnant le nom du fichier à Python.

Pas à pas dans le terminal :

1. Va dans le dossier qui contient le fichier. La commande cd (change directory) le fait : cd Documents/Pyviel
2. Regarde ce qu'il y a : ls sur Mac et Linux, dir sous Windows.
3. Lance-le : python3 hello.py

Dans l'application de bureau de Pyviel, le bouton Commande fait la première partie pour toi : il enregistre ton programme dans le dossier Pyviel et montre les lignes exactes à taper.

Tu peux aussi donner un chemin au lieu d'aller d'abord dans le dossier : python3 Documents/Pyviel/hello.py`],
        d: ['In the app, press Command and copy the lines into a terminal.', 'Nell\'app premi Comando e copia le righe in un terminale.', 'Dans l\'application, appuie sur Commande et copie les lignes dans un terminal.'],
        w: ['Python must find the file. If it says "No such file or directory", you are in the wrong folder, or the name is spelled differently. Capital letters count.', 'Python deve trovare il file. Se dice "No such file or directory", sei nella cartella sbagliata o il nome è scritto diversamente. Le maiuscole contano.', 'Python doit trouver le fichier. S\'il dit "No such file or directory", tu es dans le mauvais dossier ou le nom est écrit autrement. Les majuscules comptent.']
      },
      {
        c: c`print(2 + 2)
print("ab" * 3)
print(len("terminal"))`,
        t: ['One line and the playground: -c and >>>', 'Una riga e il campo giochi: -c e >>>', 'Une ligne et le terrain de jeu : -c et >>>'],
        x: [`Two more ways to use Python without a file.

One line: python3 -c "print(2 + 2)". The letter c means command. Python runs the text in the quotes and stops.

The playground: just type python3 and press Enter. You see >>> and Python waits. Type 2 + 2 and press Enter: it answers 4 at once. Every line you type runs now. To leave, type exit() or press Ctrl+D (Ctrl+Z then Enter on Windows).

The playground is perfect to test a small idea. The program on this page has the same three lines that you would type there.`,
          `Altri due modi di usare Python senza un file.

Una riga: python3 -c "print(2 + 2)". La lettera c vuol dire command. Python esegue il testo tra le virgolette e si ferma.

Il campo giochi: scrivi solo python3 e premi Invio. Vedi >>> e Python aspetta. Scrivi 2 + 2 e premi Invio: risponde 4 subito. Ogni riga che scrivi viene eseguita ora. Per uscire scrivi exit() o premi Ctrl+D (Ctrl+Z poi Invio su Windows).

Il campo giochi è perfetto per provare una piccola idea. Il programma di questa pagina ha le stesse tre righe che scriveresti là.`,
          `Deux autres façons d'utiliser Python sans fichier.

Une ligne : python3 -c "print(2 + 2)". La lettre c veut dire command. Python exécute le texte entre guillemets et s'arrête.

Le terrain de jeu : tape juste python3 et appuie sur Entrée. Tu vois >>> et Python attend. Tape 2 + 2 et appuie sur Entrée : il répond 4 tout de suite. Chaque ligne que tu tapes s'exécute maintenant. Pour sortir, tape exit() ou appuie sur Ctrl+D (Ctrl+Z puis Entrée sous Windows).

Le terrain de jeu est parfait pour tester une petite idée. Le programme de cette page a les mêmes trois lignes que tu taperais là-bas.`],
        d: ['Type python3 in a terminal, try 10 * 10, and leave with exit().', 'Scrivi python3 in un terminale, prova 10 * 10 ed esci con exit().', 'Tape python3 dans un terminal, essaie 10 * 10 et sors avec exit().']
      }
    ]
  },
  {
    title: ['Give your program information', 'Dai informazioni al tuo programma', 'Donne des informations à ton programme'],
    subtitle: ['Arguments, exit codes and the main guard', 'Argomenti, codici di uscita e la guardia main', 'Arguments, codes de sortie et la garde main'],
    steps: [
      {
        c: c`import sys

names = sys.argv[1:]
if names:
    for name in names:
        print("Hello,", name)
else:
    print("No names given. Run it like: python3 hello.py Ada Linus")`,
        t: ['Arguments: sys.argv', 'Gli argomenti: sys.argv', 'Les arguments : sys.argv'],
        x: [`After the file name you can write more words. Python collects them in a list called sys.argv.

python3 hello.py Ada Linus

Inside the program, sys.argv is ["hello.py", "Ada", "Linus"]. The first item is always the name of the file, so the real arguments start at position 1: sys.argv[1:].

Here nobody gave names, so the program explains how to run it. Pyviel runs it without arguments, but in a terminal you can add as many as you like. Words with spaces need quotes: python3 hello.py "Ada Lovelace"`,
          `Dopo il nome del file puoi scrivere altre parole. Python le raccoglie in una lista che si chiama sys.argv.

python3 hello.py Ada Linus

Dentro il programma, sys.argv è ["hello.py", "Ada", "Linus"]. Il primo elemento è sempre il nome del file, quindi gli argomenti veri partono dalla posizione 1: sys.argv[1:].

Qui nessuno ha dato dei nomi, quindi il programma spiega come eseguirlo. Pyviel lo esegue senza argomenti, ma in un terminale ne puoi aggiungere quanti vuoi. Le parole con spazi vogliono le virgolette: python3 hello.py "Ada Lovelace"`,
          `Après le nom du fichier tu peux écrire d'autres mots. Python les range dans une liste appelée sys.argv.

python3 hello.py Ada Linus

Dans le programme, sys.argv vaut ["hello.py", "Ada", "Linus"]. Le premier élément est toujours le nom du fichier, donc les vrais arguments commencent à la position 1 : sys.argv[1:].

Ici personne n'a donné de noms, alors le programme explique comment le lancer. Pyviel le lance sans arguments, mais dans un terminal tu peux en ajouter autant que tu veux. Les mots avec des espaces veulent des guillemets : python3 hello.py "Ada Lovelace"`],
        d: ['Save it as hello.py and run it with two names from a terminal.', 'Salvalo come hello.py ed eseguilo con due nomi da un terminale.', 'Enregistre-le sous hello.py et lance-le avec deux noms depuis un terminal.'],
        w: ['Arguments always arrive as text. The word 5 is "5", not the number 5: use int() to turn it into a number.', 'Gli argomenti arrivano sempre come testo. La parola 5 è "5", non il numero 5: usa int() per trasformarla in numero.', 'Les arguments arrivent toujours sous forme de texte. Le mot 5 est "5", pas le nombre 5 : utilise int() pour en faire un nombre.']
      },
      {
        c: c`import sys

if len(sys.argv) < 2:
    print("Usage: python3 greet.py NAME")
    sys.exit(1)
print("Hello,", sys.argv[1])`,
        t: ['Saying how it went: exit codes', 'Dire com\'è andata: i codici di uscita', 'Dire comment ça s\'est passé : les codes de sortie'],
        x: [`When a program ends, it leaves a small number behind: the exit code. 0 means all went well. Any other number means something went wrong.

sys.exit(1) stops the program right there and leaves the code 1. Python itself leaves 1 when a program stops with an error, and 0 when it ends normally.

You can look at the last code in the terminal. On Mac and Linux type echo $? and on Windows PowerShell type echo $LASTEXITCODE.

Other programs and scripts use this number to know if your program worked. That is why a good program that is used wrongly prints a short usage line, and exits with 1.`,
          `Quando un programma finisce, lascia dietro un piccolo numero: il codice di uscita. 0 vuol dire che è andato tutto bene. Qualsiasi altro numero vuol dire che qualcosa è andato storto.

sys.exit(1) ferma il programma lì e lascia il codice 1. Python stesso lascia 1 quando un programma si ferma con un errore, e 0 quando finisce normalmente.

Puoi guardare l'ultimo codice nel terminale. Su Mac e Linux scrivi echo $? e su Windows PowerShell scrivi echo $LASTEXITCODE.

Altri programmi e script usano questo numero per sapere se il tuo programma ha funzionato. Per questo un buon programma usato male scrive una breve riga di uso, ed esce con 1.`,
          `Quand un programme se termine, il laisse derrière lui un petit nombre : le code de sortie. 0 veut dire que tout s'est bien passé. Tout autre nombre veut dire que quelque chose a mal tourné.

sys.exit(1) arrête le programme là et laisse le code 1. Python lui-même laisse 1 quand un programme s'arrête sur une erreur, et 0 quand il se termine normalement.

Tu peux voir le dernier code dans le terminal. Sur Mac et Linux tape echo $? et sous Windows PowerShell tape echo $LASTEXITCODE.

D'autres programmes et scripts utilisent ce nombre pour savoir si ton programme a marché. C'est pourquoi un bon programme mal utilisé affiche une courte ligne d'usage, et sort avec 1.`],
        d: ['Run it from a terminal with no name, then with one, and check the exit code each time.', 'Eseguilo da un terminale senza nome, poi con uno, e controlla ogni volta il codice di uscita.', 'Lance-le depuis un terminal sans nom, puis avec un, et vérifie le code de sortie à chaque fois.']
      },
      {
        c: c`def main():
    print("The program starts here.")

if __name__ == "__main__":
    main()`,
        t: ['The main guard: if __name__ == "__main__"', 'La guardia main: if __name__ == "__main__"', 'La garde main : if __name__ == "__main__"'],
        x: [`You will see these two lines at the bottom of almost every Python file in the world.

Python gives each file a name while it runs. When you run a file directly (python3 hello.py), its name is "__main__". When another file imports it (import hello), its name is "hello".

So if __name__ == "__main__": means: run this part only when the file is started on its own, not when it is borrowed by another program.

That lets one file be both a program and a toolbox of functions that others can import safely. Put the work in a function, usually called main, and call it under the guard.`,
          `Vedrai queste due righe in fondo a quasi ogni file Python del mondo.

Python dà a ogni file un nome mentre gira. Quando esegui un file direttamente (python3 hello.py), il suo nome è "__main__". Quando un altro file lo importa (import hello), il suo nome è "hello".

Quindi if __name__ == "__main__": vuol dire: esegui questa parte solo quando il file parte da solo, non quando lo prende in prestito un altro programma.

Così un file può essere insieme un programma e una cassetta di funzioni che gli altri importano senza rischi. Metti il lavoro in una funzione, di solito chiamata main, e chiamala sotto la guardia.`,
          `Tu verras ces deux lignes en bas de presque tous les fichiers Python du monde.

Python donne un nom à chaque fichier pendant qu'il tourne. Quand tu lances un fichier directement (python3 hello.py), son nom est "__main__". Quand un autre fichier l'importe (import hello), son nom est "hello".

Donc if __name__ == "__main__": veut dire : exécute cette partie seulement quand le fichier démarre tout seul, pas quand un autre programme l'emprunte.

Ainsi un fichier peut être à la fois un programme et une boîte à outils de fonctions que les autres importent sans risque. Mets le travail dans une fonction, souvent appelée main, et appelle-la sous la garde.`],
        d: ['Add a second function and call it from main().', 'Aggiungi una seconda funzione e chiamala da main().', 'Ajoute une deuxième fonction et appelle-la depuis main().']
      },
      {
        c: c`import argparse

parser = argparse.ArgumentParser(description="Greets people")
parser.add_argument("name", nargs="?", default="friend")
parser.add_argument("--shout", action="store_true")
args = parser.parse_args()

message = "Hello, " + args.name
if args.shout:
    message = message.upper() + "!"
print(message)`,
        t: ['argparse: arguments with names and help', 'argparse: argomenti con nomi e aiuto', 'argparse : des arguments avec des noms et une aide'],
        x: [`When a program has many options, reading sys.argv by hand gets messy. The module argparse does it for you, and it gives a free help page.

You describe the arguments you accept: add_argument("name") is a word, and add_argument("--shout", action="store_true") is a switch that is either given or not.

Then parse_args() reads the command line and fills an object: args.name and args.shout.

In a terminal:

python3 greet.py Ada --shout
python3 greet.py --help

The first prints HELLO, ADA! and the second prints a help page that argparse wrote by itself. A wrong option gets a clear error and exit code 2.`,
          `Quando un programma ha molte opzioni, leggere sys.argv a mano diventa un pasticcio. Il modulo argparse lo fa per te, e dà una pagina di aiuto gratis.

Descrivi gli argomenti che accetti: add_argument("name") è una parola, e add_argument("--shout", action="store_true") è un interruttore che c'è oppure no.

Poi parse_args() legge la riga di comando e riempie un oggetto: args.name e args.shout.

In un terminale:

python3 greet.py Ada --shout
python3 greet.py --help

Il primo scrive HELLO, ADA! e il secondo scrive una pagina di aiuto che argparse ha scritto da solo. Un'opzione sbagliata riceve un errore chiaro e il codice di uscita 2.`,
          `Quand un programme a beaucoup d'options, lire sys.argv à la main devient confus. Le module argparse le fait pour toi, et il donne une page d'aide gratuite.

Tu décris les arguments acceptés : add_argument("name") est un mot, et add_argument("--shout", action="store_true") est un interrupteur qui est donné ou non.

Puis parse_args() lit la ligne de commande et remplit un objet : args.name et args.shout.

Dans un terminal :

python3 greet.py Ada --shout
python3 greet.py --help

Le premier affiche HELLO, ADA! et le deuxième affiche une page d'aide qu'argparse a écrite tout seul. Une mauvaise option reçoit une erreur claire et le code de sortie 2.`],
        d: ['Add a second switch, --twice, that prints the message two times.', 'Aggiungi un secondo interruttore, --twice, che scrive il messaggio due volte.', 'Ajoute un deuxième interrupteur, --twice, qui affiche le message deux fois.']
      }
    ]
  },
  {
    title: ['Tools around Python', 'Gli strumenti attorno a Python', 'Les outils autour de Python'],
    subtitle: ['Modules, pip, virtual environments, tracebacks and scripts', 'Moduli, pip, ambienti virtuali, traceback e script', 'Modules, pip, environnements virtuels, tracebacks et scripts'],
    steps: [
      {
        c: c`import json

data = {"name": "Ada", "scores": [3, 5, 8]}
text = json.dumps(data, indent=2)
print(text)`,
        t: ['Run a module: python3 -m', 'Eseguire un modulo: python3 -m', 'Lancer un module : python3 -m'],
        x: [`-m means module. Python can run a module from its big library as if it were a program.

python3 -m json.tool data.json shows a JSON file nicely indented. The program on this page does the same job from the inside, with json.dumps.

Some modules that are useful every day:

python3 -m http.server shares the current folder on your computer, at the address localhost:8000.
python3 -m unittest runs your tests.
python3 -m venv .venv makes a virtual environment, see the next step.
python3 -m pip install requests installs a package.

Writing python3 -m pip instead of just pip makes sure that you use the pip of the same Python.`,
          `-m vuol dire modulo. Python può eseguire un modulo della sua grande libreria come se fosse un programma.

python3 -m json.tool data.json mostra un file JSON ben rientrato. Il programma di questa pagina fa lo stesso lavoro da dentro, con json.dumps.

Alcuni moduli utili ogni giorno:

python3 -m http.server condivide la cartella attuale sul tuo computer, all'indirizzo localhost:8000.
python3 -m unittest esegue i tuoi test.
python3 -m venv .venv crea un ambiente virtuale, vedi il passo dopo.
python3 -m pip install requests installa un pacchetto.

Scrivere python3 -m pip invece di solo pip assicura che usi il pip dello stesso Python.`,
          `-m veut dire module. Python peut lancer un module de sa grande bibliothèque comme si c'était un programme.

python3 -m json.tool data.json affiche un fichier JSON bien indenté. Le programme de cette page fait le même travail de l'intérieur, avec json.dumps.

Quelques modules utiles tous les jours :

python3 -m http.server partage le dossier actuel sur ton ordinateur, à l'adresse localhost:8000.
python3 -m unittest lance tes tests.
python3 -m venv .venv crée un environnement virtuel, voir l'étape suivante.
python3 -m pip install requests installe un paquet.

Écrire python3 -m pip au lieu de pip seul garantit que tu utilises le pip du même Python.`],
        d: ['In a terminal, run python3 -m http.server and open localhost:8000 in the browser. Stop it with Ctrl+C.', 'In un terminale esegui python3 -m http.server e apri localhost:8000 nel browser. Fermalo con Ctrl+C.', 'Dans un terminal, lance python3 -m http.server et ouvre localhost:8000 dans le navigateur. Arrête-le avec Ctrl+C.']
      },
      {
        c: c`import sys

inside = sys.prefix != sys.base_prefix
print("Inside a virtual environment:", inside)`,
        t: ['pip and virtual environments', 'pip e gli ambienti virtuali', 'pip et les environnements virtuels'],
        x: [`Python has a huge shop of free packages that other people wrote, called PyPI. pip is the tool that downloads them.

python3 -m pip install requests

But if every project installs into the same place, they start to fight over versions. The cure is a virtual environment: a private folder with its own Python and its own packages, one for each project.

python3 -m venv .venv
source .venv/bin/activate (Mac and Linux)
.venv\\Scripts\\activate (Windows)

After activating, the terminal line starts with (.venv), and pip installs only in there. Type deactivate to come back.

The program checks whether you are inside one. In Pyviel the answer is False.`,
          `Python ha un enorme negozio di pacchetti gratuiti scritti da altri, chiamato PyPI. pip è lo strumento che li scarica.

python3 -m pip install requests

Ma se ogni progetto installa nello stesso posto, iniziano a litigare per le versioni. La cura è un ambiente virtuale: una cartella privata con il suo Python e i suoi pacchetti, una per ogni progetto.

python3 -m venv .venv
source .venv/bin/activate (Mac e Linux)
.venv\\Scripts\\activate (Windows)

Dopo l'attivazione la riga del terminale inizia con (.venv), e pip installa solo là dentro. Scrivi deactivate per tornare indietro.

Il programma controlla se sei dentro uno. In Pyviel la risposta è False.`,
          `Python a une énorme boutique de paquets gratuits écrits par d'autres, appelée PyPI. pip est l'outil qui les télécharge.

python3 -m pip install requests

Mais si chaque projet installe au même endroit, les versions se disputent. Le remède est un environnement virtuel : un dossier privé avec son propre Python et ses propres paquets, un pour chaque projet.

python3 -m venv .venv
source .venv/bin/activate (Mac et Linux)
.venv\\Scripts\\activate (Windows)

Après l'activation, la ligne du terminal commence par (.venv), et pip n'installe que là-dedans. Tape deactivate pour revenir.

Le programme vérifie si tu es dans un environnement. Dans Pyviel la réponse est False.`],
        d: ['Make a virtual environment in a new folder and run this program inside it. The answer changes to True.', 'Crea un ambiente virtuale in una cartella nuova ed esegui questo programma dentro. La risposta diventa True.', 'Crée un environnement virtuel dans un nouveau dossier et lance ce programme dedans. La réponse devient True.']
      },
      {
        c: c`def divide(a, b):
    return a / b

print(divide(10, 2))
print(divide(1, 0))`,
        e: 'ZeroDivisionError',
        t: ['Reading a real traceback', 'Leggere un traceback vero', 'Lire un vrai traceback'],
        x: [`In a terminal, an error is not shown in friendly words. Python prints a traceback, and it is the same text that the View full error button shows in Pyviel.

Traceback (most recent call last):
  File "divide.py", line 5, in <module>
    print(divide(1, 0))
  File "divide.py", line 2, in divide
    return a / b
ZeroDivisionError: division by zero

Read it from the bottom up. The last line is the kind of error and what happened. Above it are the steps that led there, the last step at the bottom: the file, the line number and the line itself.

Here line 5 called divide, and line 2 inside divide broke. Fix the place that is at the bottom, then look up if the cause started higher.`,
          `In un terminale un errore non è mostrato in parole amichevoli. Python scrive un traceback, ed è lo stesso testo che mostra il pulsante View full error in Pyviel.

Traceback (most recent call last):
  File "divide.py", line 5, in <module>
    print(divide(1, 0))
  File "divide.py", line 2, in divide
    return a / b
ZeroDivisionError: division by zero

Leggilo dal basso verso l'alto. L'ultima riga è il tipo di errore e cosa è successo. Sopra ci sono i passi che hanno portato fin lì, l'ultimo passo in fondo: il file, il numero di riga e la riga stessa.

Qui la riga 5 ha chiamato divide, e la riga 2 dentro divide si è rotta. Correggi il punto che sta in fondo, poi guarda se la causa è iniziata più in alto.`,
          `Dans un terminal, une erreur n'est pas montrée avec des mots amicaux. Python affiche un traceback, et c'est le même texte que montre le bouton View full error dans Pyviel.

Traceback (most recent call last):
  File "divide.py", line 5, in <module>
    print(divide(1, 0))
  File "divide.py", line 2, in divide
    return a / b
ZeroDivisionError: division by zero

Lis-le de bas en haut. La dernière ligne est le genre d'erreur et ce qui s'est passé. Au-dessus il y a les étapes qui y ont mené, la dernière étape en bas : le fichier, le numéro de ligne et la ligne elle-même.

Ici la ligne 5 a appelé divide, et la ligne 2 dans divide a cassé. Corrige l'endroit qui est en bas, puis regarde si la cause a commencé plus haut.`],
        d: ['Press Run, then View full error, and find the file, the line and the last line.', 'Premi Esegui, poi View full error, e trova il file, la riga e l\'ultima riga.', 'Appuie sur Lancer, puis View full error, et trouve le fichier, la ligne et la dernière ligne.']
      },
      {
        c: c`#!/usr/bin/env python3
# A script you can run by its name alone.
import sys

print("Script", "ran" if sys.version_info.major == 3 else "not ran")`,
        t: ['Scripts you run by name', 'Script che esegui dal nome', 'Des scripts lancés par leur nom'],
        x: [`On Mac and Linux a file can be a command of its own. Two small things make it so.

First, the very first line, the shebang: #!/usr/bin/env python3. It tells the system which program must read the file. For Python, it ends up in the same python3 that you type by hand.

Second, tell the system that the file may be run: chmod +x hello.py

Now you run it with ./hello.py, with no python3 before. The dot and slash mean "the file in this folder".

On Windows the shebang does nothing and the way is py hello.py. The line is only a comment for Python, so it is safe everywhere.`,
          `Su Mac e Linux un file può essere un comando a sé. Due piccole cose lo permettono.

Primo, la primissima riga, lo shebang: #!/usr/bin/env python3. Dice al sistema quale programma deve leggere il file. Per Python, finisce nello stesso python3 che scrivi a mano.

Secondo, dì al sistema che il file può essere eseguito: chmod +x hello.py

Ora lo esegui con ./hello.py, senza python3 prima. Il punto e la barra vogliono dire "il file in questa cartella".

Su Windows lo shebang non fa niente e la strada è py hello.py. Per Python la riga è solo un commento, quindi è sicura ovunque.`,
          `Sur Mac et Linux un fichier peut être une commande à part entière. Deux petites choses le permettent.

D'abord, la toute première ligne, le shebang : #!/usr/bin/env python3. Elle dit au système quel programme doit lire le fichier. Pour Python, cela mène au même python3 que tu tapes à la main.

Ensuite, dis au système que le fichier peut être lancé : chmod +x hello.py

Maintenant tu le lances avec ./hello.py, sans python3 devant. Le point et la barre veulent dire "le fichier de ce dossier".

Sous Windows le shebang ne fait rien et le chemin est py hello.py. Pour Python la ligne n'est qu'un commentaire, donc elle est sans danger partout.`],
        d: ['Save the program, make it executable and run it as ./script.py.', 'Salva il programma, rendilo eseguibile ed eseguilo come ./script.py.', 'Enregistre le programme, rends-le exécutable et lance-le avec ./script.py.']
      }
    ]
  }
];
