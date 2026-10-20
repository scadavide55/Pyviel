// Stage 5 · Whole programs. See tools/build-course.js for the format.
const c = String.raw;
const G5 = ['Stage 5 · Whole programs', 'Livello 5 · Programmi interi', 'Niveau 5 · Des programmes entiers'];

module.exports = [
  // ------------------------------------------------------------------ 49
  {
    group: G5,
    title: ['Project 1: Guess the number', 'Progetto 1: Indovina il numero', 'Projet 1 : Devine le nombre'],
    subtitle: ['From an empty page to a finished game', 'Da una pagina vuota a un gioco finito', 'D\'une page vide à un jeu fini'],
    steps: [
      {
        c: c`secret = 42
guess = int(input("Guess the number: "))
if guess < secret:
    print("Too low")
elif guess > secret:
    print("Too high")
else:
    print("You got it!")`,
        i: ['30'],
        t: ['Step 1: one guess', 'Passo 1: un tentativo', 'Étape 1 : une tentative'],
        x: [`A big program is built in small steps that each work. First the smallest version: the secret is fixed, you guess once, and the program says if it is too low, too high or right.

Run it and try a few guesses. Only when this works do we make it bigger.`,
          `Un programma grande si costruisce con piccoli passi che funzionano ognuno. Prima la versione più piccola: il segreto è fisso, tu indovini una volta, e il programma dice se è troppo basso, troppo alto o giusto.

Eseguilo e prova qualche tentativo. Solo quando questo funziona lo facciamo più grande.`,
          `Un gros programme se construit par petites étapes qui marchent chacune. D'abord la plus petite version : le secret est fixe, tu devines une fois, et le programme dit si c'est trop bas, trop haut ou juste.

Lance-le et essaie quelques tentatives. Seulement quand ça marche, on le rend plus grand.`],
        d: ['Run it with 42 and with 99 to see all three answers.', 'Eseguilo con 42 e con 99 per vedere tutte e tre le risposte.', 'Lance-le avec 42 et avec 99 pour voir les trois réponses.']
      },
      {
        c: c`secret = 42
tries = 0
while True:
    guess = int(input("Guess the number: "))
    tries += 1
    if guess < secret:
        print("Too low")
    elif guess > secret:
        print("Too high")
    else:
        print(f"You got it in {tries} tries!")
        break`,
        i: ['50', '30', '42'],
        t: ['Step 2: keep guessing', 'Passo 2: continua a indovinare', 'Étape 2 : continuer à deviner'],
        x: [`Now a loop that keeps asking until the guess is right, and a counter of the tries. The loop is while True, and break leaves it when the player wins.

The program works as a game already. The next steps make it safe and nicer.`,
          `Ora un ciclo che continua a chiedere finché il tentativo è giusto, e un contatore dei tentativi. Il ciclo è while True, e break lo lascia quando il giocatore vince.

Il programma funziona già come gioco. I prossimi passi lo rendono sicuro e più bello.`,
          `Maintenant une boucle qui continue de demander jusqu'à ce que la tentative soit juste, et un compteur d'essais. La boucle est while True, et break la quitte quand le joueur gagne.

Le programme marche déjà comme un jeu. Les étapes suivantes le rendent sûr et plus joli.`],
        d: ['Play it until you win.', 'Giocaci finché vinci.', 'Joue jusqu\'à ce que tu gagnes.']
      },
      {
        c: c`def ask_number(question, low, high):
    """Ask until the person types a whole number from low to high."""
    while True:
        text = input(question)
        if not text.strip().isdigit():
            print("Please type a whole number.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"It must be between {low} and {high}.")

secret = 42
tries = 0
while True:
    guess = ask_number("Guess (1-100): ", 1, 100)
    tries += 1
    if guess == secret:
        print(f"You got it in {tries} tries!")
        break
    print("Too low" if guess < secret else "Too high")`,
        i: ['abc', '500', '50', '42'],
        t: ['Step 3: trust nothing typed', 'Passo 3: non fidarti di niente di scritto', 'Étape 3 : ne fais confiance à rien de tapé'],
        x: [`What if the player types letters, or 500? A function ask_number keeps asking until the answer is a whole number in the right range. Writing it once in a function means it works for every question in the program.

The main loop is also shorter now.`,
          `E se il giocatore scrive lettere, o 500? Una funzione ask_number continua a chiedere finché la risposta è un numero intero nell'intervallo giusto. Scriverla una volta in una funzione vuol dire che funziona per ogni domanda del programma.

Anche il ciclo principale ora è più corto.`,
          `Et si le joueur écrit des lettres, ou 500 ? Une fonction ask_number continue de demander jusqu'à ce que la réponse soit un nombre entier dans la bonne plage. L'écrire une fois dans une fonction veut dire qu'elle marche pour chaque question du programme.

La boucle principale est aussi plus courte maintenant.`],
        d: ['Try typing a word, then 0, then a good number.', 'Prova a scrivere una parola, poi 0, poi un numero buono.', 'Essaie d\'écrire un mot, puis 0, puis un bon nombre.']
      },
      {
        c: c`import random

LEVELS = {"easy": 10, "medium": 100, "hard": 1000}

def ask_level():
    while True:
        level = input("Level (easy/medium/hard): ").strip().lower()
        if level in LEVELS:
            return level
        print("Choose one of:", ", ".join(LEVELS))

random.seed(11)
level = ask_level()
top = LEVELS[level]
secret = random.randint(1, top)
print(f"I am thinking of a number from 1 to {top}.")
print("Secret for this demo:", secret)`,
        i: ['expert', 'Medium'],
        t: ['Step 4: levels and a random secret', 'Passo 4: livelli e un segreto casuale', 'Étape 4 : niveaux et un secret aléatoire'],
        x: [`A dictionary of levels, with the biggest number for each. The program asks until the level is one of its keys, then picks a random secret up to that number.

The seed makes the secret the same here so the lesson is predictable. In the real game you leave it out.`,
          `Un dizionario di livelli, con il numero più grande per ognuno. Il programma chiede finché il livello è una delle sue chiavi, poi sceglie un segreto casuale fino a quel numero.

Il seme qui rende il segreto sempre uguale, così la lezione è prevedibile. Nel gioco vero lo togli.`,
          `Un dictionnaire de niveaux, avec le plus grand nombre pour chacun. Le programme demande jusqu'à ce que le niveau soit une de ses clés, puis choisit un secret aléatoire jusqu'à ce nombre.

La graine rend ici le secret toujours le même pour que la leçon soit prévisible. Dans le vrai jeu tu l'enlèves.`],
        d: ['Add a level called "insane" with 100000.', 'Aggiungi un livello chiamato "insane" con 100000.', 'Ajoute un niveau appelé "insane" avec 100000.']
      },
      {
        c: c`import json, os

SCORE_FILE = "best.json"

def load_best():
    if os.path.exists(SCORE_FILE):
        with open(SCORE_FILE) as f:
            return json.load(f)
    return {}

def save_best(best):
    with open(SCORE_FILE, "w") as f:
        json.dump(best, f)

best = load_best()
print("Best scores so far:", best)
best["easy"] = min(best.get("easy", 99), 4)
save_best(best)
print("After this game:", load_best())
best["easy"] = min(best.get("easy", 99), 6)
save_best(best)
print("A worse game keeps the record:", load_best())`,
        t: ['Step 5: remember the best score', 'Passo 5: ricorda il miglior punteggio', 'Étape 5 : se souvenir du meilleur score'],
        x: [`A game is more fun when it remembers. These two functions load and save a dictionary of best scores in a file, using what you learned about json and os. min keeps the smaller number of tries, which is the better score.

In Pyviel the file stays only while the page is open, but on a real computer it would stay for ever.`,
          `Un gioco è più divertente quando ricorda. Queste due funzioni caricano e salvano un dizionario di migliori punteggi in un file, usando quello che hai imparato su json e os. min tiene il numero più piccolo di tentativi, che è il punteggio migliore.

In Pyviel il file resta solo finché la pagina è aperta, ma su un computer vero resterebbe per sempre.`,
          `Un jeu est plus amusant quand il se souvient. Ces deux fonctions chargent et sauvegardent un dictionnaire de meilleurs scores dans un fichier, en utilisant ce que tu as appris sur json et os. min garde le plus petit nombre d'essais, qui est le meilleur score.

Dans Pyviel le fichier ne reste que tant que la page est ouverte, mais sur un vrai ordinateur il resterait pour toujours.`],
        d: ['Add a "hard" record too.', 'Aggiungi anche un record "hard".', 'Ajoute aussi un record "hard".']
      },
      {
        c: c`import random

LEVELS = {"easy": 10, "medium": 100}

def ask_number(question, low, high):
    while True:
        text = input(question)
        if text.strip().isdigit() and low <= int(text) <= high:
            return int(text)
        print(f"Please type a whole number from {low} to {high}.")

def play(top):
    secret = random.randint(1, top)
    tries = 0
    while True:
        guess = ask_number(f"Guess (1-{top}): ", 1, top)
        tries += 1
        if guess == secret:
            return tries
        print("Too low" if guess < secret else "Too high")

def main():
    random.seed(3)
    best = {}
    for level, top in LEVELS.items():
        print(f"--- {level} ---")
        tries = play(top)
        print(f"You got it in {tries} tries!")
        best[level] = min(best.get(level, 999), tries)
    print("Best:", best)

if __name__ == "__main__":
    main()`,
        i: ['5', '9', '3', '4', '50', '500', '99', '76'],
        r: false,
        t: ['Step 6: the whole program', 'Passo 6: il programma intero', 'Étape 6 : le programme entier'],
        x: [`Everything put together in the shape of a good program: small functions that each do one job, a main() that runs the game for each level, constants in capitals, and the line that starts main.

You built it from a ten-line sketch. This is how every real program grows: one small working step at a time.`,
          `Tutto messo insieme nella forma di un buon programma: piccole funzioni che fanno ognuna un lavoro, un main() che fa girare il gioco per ogni livello, costanti in maiuscolo, e la riga che fa partire main.

L'hai costruito da uno schizzo di dieci righe. È così che cresce ogni programma vero: un piccolo passo funzionante alla volta.`,
          `Tout mis ensemble sous la forme d'un bon programme : de petites fonctions qui font chacune un travail, un main() qui fait tourner le jeu pour chaque niveau, des constantes en majuscules, et la ligne qui démarre main.

Tu l'as construit à partir d'un croquis de dix lignes. C'est ainsi que grandit tout vrai programme : une petite étape qui marche à la fois.`],
        d: ['Add a third level and a message when you beat your best score.', 'Aggiungi un terzo livello e un messaggio quando batti il tuo record.', 'Ajoute un troisième niveau et un message quand tu bats ton record.']
      }
    ]
  },

  // ------------------------------------------------------------------ 50
  {
    title: ['Project 2: Hangman', 'Progetto 2: L\'impiccato', 'Projet 2 : Le pendu'],
    subtitle: ['Texts, sets and a game loop', 'Testi, insiemi e un ciclo di gioco', 'Textes, ensembles et une boucle de jeu'],
    steps: [
      {
        c: c`word = "python"
guessed = {"p", "o"}
shown = ""
for letter in word:
    shown += letter if letter in guessed else "_"
print(shown)
print(" ".join(shown))`,
        t: ['Step 1: show the word with blanks', 'Passo 1: mostra la parola con gli spazi vuoti', 'Étape 1 : montrer le mot avec des blancs'],
        x: [`In hangman you see the word with the guessed letters shown and the others hidden. A set keeps the letters guessed so far, and a loop builds the display one letter at a time.

join with a space makes it easier to read: p _ _ _ o _.`,
          `Nell'impiccato vedi la parola con le lettere indovinate mostrate e le altre nascoste. Un insieme tiene le lettere indovinate finora, e un ciclo costruisce la visualizzazione una lettera alla volta.

join con uno spazio la rende più leggibile: p _ _ _ o _.`,
          `Au pendu tu vois le mot avec les lettres devinées montrées et les autres cachées. Un ensemble garde les lettres devinées jusqu'ici, et une boucle construit l'affichage une lettre à la fois.

join avec un espace le rend plus facile à lire : p _ _ _ o _.`],
        d: ['Change the guessed letters and watch the display change.', 'Cambia le lettere indovinate e guarda cambiare la visualizzazione.', 'Change les lettres devinées et regarde l\'affichage changer.']
      },
      {
        c: c`def mask(word, guessed):
    return " ".join(letter if letter in guessed else "_" for letter in word)

word = "python"
guessed = set()
for guess in ["t", "z", "p", "t"]:
    if guess in guessed:
        print(guess, "- you already tried that")
    elif guess in word:
        guessed.add(guess)
        print(guess, "- yes!", mask(word, guessed))
    else:
        guessed.add(guess)
        print(guess, "- no", mask(word, guessed))`,
        t: ['Step 2: check a guess', 'Passo 2: controlla un tentativo', 'Étape 2 : vérifier une tentative'],
        x: [`The display becomes a small function mask. Then each guess is checked three ways: already tried, in the word, or not in the word. Here the guesses come from a list so you can see every case in one run.

Doing a small thing and seeing it work is the whole secret of building games.`,
          `La visualizzazione diventa una piccola funzione mask. Poi ogni tentativo viene controllato in tre modi: già provato, nella parola, o non nella parola. Qui i tentativi vengono da una lista così vedi ogni caso in un'esecuzione.

Fare una piccola cosa e vederla funzionare è tutto il segreto per costruire giochi.`,
          `L'affichage devient une petite fonction mask. Puis chaque tentative est vérifiée de trois façons : déjà essayée, dans le mot, ou pas dans le mot. Ici les tentatives viennent d'une liste pour que tu voies chaque cas en une exécution.

Faire une petite chose et la voir marcher est tout le secret pour construire des jeux.`],
        d: ['Add another guess to the list.', 'Aggiungi un altro tentativo alla lista.', 'Ajoute une autre tentative à la liste.']
      },
      {
        c: c`def mask(word, guessed):
    return " ".join(letter if letter in guessed else "_" for letter in word)

word = "python"
guessed = set()
lives = 4
for guess in ["x", "p", "y", "q", "t", "z", "h", "o", "n"]:
    if lives == 0 or set(word) <= guessed:
        break
    guessed.add(guess)
    if guess not in word:
        lives -= 1
    print(f"{guess}: {mask(word, guessed)}   lives: {lives}")
if set(word) <= guessed:
    print("You win!")
else:
    print(f"You lose. The word was {word}.")`,
        t: ['Step 3: lives, win and lose', 'Passo 3: vite, vittoria e sconfitta', 'Étape 3 : vies, victoire et défaite'],
        x: [`Add lives that go down on a wrong guess. The game ends when lives run out, or when every letter of the word is in the guessed set. set(word) <= guessed asks "are all the letters of the word guessed?".

The two ending conditions are checked at the start of each turn.`,
          `Aggiungi delle vite che scendono a ogni tentativo sbagliato. Il gioco finisce quando le vite finiscono, o quando ogni lettera della parola è nell'insieme degli indovinati. set(word) <= guessed chiede "tutte le lettere della parola sono state indovinate?".

Le due condizioni di fine vengono controllate all'inizio di ogni turno.`,
          `Ajoute des vies qui baissent à chaque mauvaise tentative. Le jeu se termine quand les vies sont épuisées, ou quand chaque lettre du mot est dans l'ensemble des devinées. set(word) <= guessed demande « toutes les lettres du mot sont-elles devinées ? ».

Les deux conditions de fin sont vérifiées au début de chaque tour.`],
        d: ['Give the player 6 lives.', 'Dai al giocatore 6 vite.', 'Donne 6 vies au joueur.']
      },
      {
        c: c`STAGES = [
    "  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========",
]
for wrong in (0, 2, 4):
    print(STAGES[wrong])
    print()`,
        t: ['Step 4: draw the gallows', 'Passo 4: disegna la forca', 'Étape 4 : dessiner la potence'],
        x: [`A list of drawings, one for each number of mistakes, is all you need to show the gallows. The text with \\n goes over several lines, and the backslash that you want to show is written twice.

The picture to show is just STAGES[number_of_mistakes].`,
          `Una lista di disegni, uno per ogni numero di errori, è tutto quello che serve per mostrare la forca. Il testo con \\n va su più righe, e la barra rovesciata che vuoi mostrare si scrive due volte.

Il disegno da mostrare è semplicemente STAGES[numero_di_errori].`,
          `Une liste de dessins, un pour chaque nombre d'erreurs, est tout ce qu'il faut pour montrer la potence. Le texte avec \\n passe sur plusieurs lignes, et l'antislash que tu veux montrer s'écrit deux fois.

Le dessin à montrer est simplement STAGES[nombre_d_erreurs].`],
        d: ['Draw your own sixth stage.', 'Disegna il tuo sesto stadio.', 'Dessine ton sixième stade.']
      },
      {
        c: c`import random

WORDS = ["python", "kaviel", "bridge", "garden", "planet", "rocket"]
MAX_MISTAKES = 4

def mask(word, guessed):
    return " ".join(letter if letter in guessed else "_" for letter in word)

def play(word):
    guessed = set()
    mistakes = 0
    while mistakes < MAX_MISTAKES and not set(word) <= guessed:
        print(mask(word, guessed), f"  mistakes: {mistakes}/{MAX_MISTAKES}")
        guess = input("Letter: ").strip().lower()
        if len(guess) != 1 or not guess.isalpha():
            print("One letter, please.")
        elif guess in guessed:
            print("You already tried", guess)
        else:
            guessed.add(guess)
            if guess not in word:
                mistakes += 1
    return set(word) <= guessed

random.seed(2)
word = random.choice(WORDS)
won = play(word)
print("You win!" if won else f"You lose. It was {word}.")`,
        i: ['a', 'e', '12', 'p', 'p', 'y', 't', 'h', 'o', 'n'],
        r: false,
        t: ['Step 5: the whole game', 'Passo 5: il gioco intero', 'Étape 5 : le jeu entier'],
        x: [`The pieces together: a list of words, a random choice, a play function with the loop, and checks that refuse anything that is not one new letter. play gives back True or False and the main code announces the result.

Add your own words, a drawing for each mistake, and a question at the end to play again.`,
          `I pezzi insieme: una lista di parole, una scelta casuale, una funzione play con il ciclo, e controlli che rifiutano tutto ciò che non è una lettera nuova. play restituisce True o False e il codice principale annuncia il risultato.

Aggiungi le tue parole, un disegno per ogni errore, e una domanda alla fine per giocare ancora.`,
          `Les morceaux ensemble : une liste de mots, un choix aléatoire, une fonction play avec la boucle, et des vérifications qui refusent tout ce qui n'est pas une nouvelle lettre. play rend True ou False et le code principal annonce le résultat.

Ajoute tes propres mots, un dessin pour chaque erreur, et une question à la fin pour rejouer.`],
        d: ['Add ten more words to the list.', 'Aggiungi altre dieci parole alla lista.', 'Ajoute dix mots de plus à la liste.']
      }
    ]
  },

  // ------------------------------------------------------------------ 51
  {
    title: ['Project 3: A to-do list that remembers', 'Progetto 3: Una lista di cose da fare che ricorda', 'Projet 3 : Une liste de choses à faire qui se souvient'],
    subtitle: ['Dictionaries, functions, a menu and files', 'Dizionari, funzioni, un menu e file', 'Dictionnaires, fonctions, un menu et fichiers'],
    steps: [
      {
        c: c`tasks = [
    {"title": "Learn Python", "done": False},
    {"title": "Walk the dog", "done": True},
]
for number, task in enumerate(tasks, start=1):
    mark = "x" if task["done"] else " "
    print(f"{number}. [{mark}] {task['title']}")`,
        t: ['Step 1: the data', 'Passo 1: i dati', 'Étape 1 : les données'],
        x: [`Before the program, think about the data. A task has a title and a done flag, so it is a small dictionary. The list of tasks is a list of dictionaries.

Showing it is just a loop with enumerate, to number the lines starting from 1.`,
          `Prima del programma, pensa ai dati. Un compito ha un titolo e un segno di fatto, quindi è un piccolo dizionario. La lista dei compiti è una lista di dizionari.

Mostrarla è solo un ciclo con enumerate, per numerare le righe da 1.`,
          `Avant le programme, pense aux données. Une tâche a un titre et un indicateur de fait, c'est donc un petit dictionnaire. La liste des tâches est une liste de dictionnaires.

La montrer n'est qu'une boucle avec enumerate, pour numéroter les lignes à partir de 1.`],
        d: ['Add a third task.', 'Aggiungi un terzo compito.', 'Ajoute une troisième tâche.']
      },
      {
        c: c`def add_task(tasks, title):
    tasks.append({"title": title, "done": False})

def complete(tasks, number):
    if 1 <= number <= len(tasks):
        tasks[number - 1]["done"] = True
        return True
    return False

def show(tasks):
    if not tasks:
        print("Nothing to do!")
    for number, task in enumerate(tasks, start=1):
        mark = "x" if task["done"] else " "
        print(f"{number}. [{mark}] {task['title']}")

tasks = []
add_task(tasks, "Buy milk")
add_task(tasks, "Do homework")
print(complete(tasks, 2), complete(tasks, 9))
show(tasks)`,
        t: ['Step 2: one function for each action', 'Passo 2: una funzione per ogni azione', 'Étape 2 : une fonction pour chaque action'],
        x: [`Each thing the program can do becomes a small function: add a task, complete a task, show the tasks. complete gives back True or False so the caller knows if the number was valid.

The functions receive the list as a parameter, so they are easy to test one by one.`,
          `Ogni cosa che il programma può fare diventa una piccola funzione: aggiungere un compito, completare un compito, mostrare i compiti. complete restituisce True o False così chi chiama sa se il numero era valido.

Le funzioni ricevono la lista come parametro, quindi sono facili da provare una per una.`,
          `Chaque chose que le programme peut faire devient une petite fonction : ajouter une tâche, terminer une tâche, montrer les tâches. complete rend True ou False pour que l'appelant sache si le numéro était valide.

Les fonctions reçoivent la liste en paramètre, elles sont donc faciles à tester une par une.`],
        d: ['Add a function remove(tasks, number).', 'Aggiungi una funzione remove(tasks, number).', 'Ajoute une fonction remove(tasks, number).']
      },
      {
        c: c`tasks = [{"title": "Buy milk", "done": False}]

def show(tasks):
    for number, task in enumerate(tasks, start=1):
        mark = "x" if task["done"] else " "
        print(f"{number}. [{mark}] {task['title']}")

while True:
    print("\n1) show  2) add  3) done  4) quit")
    choice = input("Choose: ").strip()
    if choice == "1":
        show(tasks)
    elif choice == "2":
        tasks.append({"title": input("Title: "), "done": False})
    elif choice == "3":
        number = int(input("Number: "))
        tasks[number - 1]["done"] = True
    elif choice == "4":
        print("Bye!")
        break
    else:
        print("Please choose 1, 2, 3 or 4.")`,
        i: ['2', 'Call grandma', '1', '3', '9'],
        t: ['Step 3: a menu', 'Passo 3: un menu', 'Étape 3 : un menu'],
        x: [`A menu is a while True loop that shows the choices, reads one, and does the matching action. Choosing 4 breaks out of the loop. Anything else is politely refused.

Run it and use every choice. The one with a wrong number will stop the program with an error: the next step fixes it.`,
          `Un menu è un ciclo while True che mostra le scelte, ne legge una, e fa l'azione corrispondente. Scegliere 4 esce dal ciclo. Tutto il resto viene rifiutato con garbo.

Eseguilo e usa ogni scelta. Quella con un numero sbagliato fermerà il programma con un errore: il prossimo passo lo corregge.`,
          `Un menu est une boucle while True qui montre les choix, en lit un, et fait l'action correspondante. Choisir 4 sort de la boucle. Tout le reste est poliment refusé.

Lance-le et utilise chaque choix. Celui avec un mauvais numéro arrêtera le programme avec une erreur : l'étape suivante le corrige.`],
        e: 'IndexError',
        d: ['Run it and read the explanation of the error at the end.', 'Eseguilo e leggi la spiegazione dell\'errore alla fine.', 'Lance-le et lis l\'explication de l\'erreur à la fin.']
      },
      {
        c: c`import json, os

FILE = "tasks.json"

def load():
    if os.path.exists(FILE):
        with open(FILE) as f:
            return json.load(f)
    return []

def save(tasks):
    with open(FILE, "w") as f:
        json.dump(tasks, f, indent=2)

def show(tasks):
    for number, task in enumerate(tasks, start=1):
        mark = "x" if task["done"] else " "
        print(f"{number}. [{mark}] {task['title']}")

tasks = load()
print("Loaded", len(tasks), "tasks")
tasks.append({"title": "Finish the project", "done": False})
save(tasks)

again = load()
show(again)
print("Same data after loading:", again == tasks)`,
        t: ['Step 4: remember between runs', 'Passo 4: ricorda tra un\'esecuzione e l\'altra', 'Étape 4 : se souvenir entre les exécutions'],
        x: [`Two functions, load and save, keep the tasks in a JSON file. At the start the program loads what was saved, and after each change it saves again. If there is no file yet, load gives an empty list.

This small trick turns a toy into a useful tool.`,
          `Due funzioni, load e save, tengono i compiti in un file JSON. All'inizio il programma carica quello che era stato salvato, e dopo ogni cambiamento salva di nuovo. Se non c'è ancora un file, load dà una lista vuota.

Questo piccolo trucco trasforma un giocattolo in uno strumento utile.`,
          `Deux fonctions, load et save, gardent les tâches dans un fichier JSON. Au début le programme charge ce qui avait été sauvegardé, et après chaque changement il sauvegarde à nouveau. S'il n'y a pas encore de fichier, load donne une liste vide.

Ce petit truc transforme un jouet en outil utile.`],
        d: ['Save after every change, not just at the end.', 'Salva dopo ogni cambiamento, non solo alla fine.', 'Sauvegarde après chaque changement, pas seulement à la fin.']
      },
      {
        c: c`import json, os

FILE = "todo.json"

def load():
    if os.path.exists(FILE):
        with open(FILE) as f:
            return json.load(f)
    return []

def save(tasks):
    with open(FILE, "w") as f:
        json.dump(tasks, f)

def show(tasks):
    if not tasks:
        print("Nothing to do!")
    for number, task in enumerate(tasks, start=1):
        mark = "x" if task["done"] else " "
        print(f"{number}. [{mark}] {task['title']}")

def ask_task_number(tasks):
    text = input("Number: ").strip()
    if text.isdigit() and 1 <= int(text) <= len(tasks):
        return int(text) - 1
    print("There is no such task.")
    return None

def main():
    tasks = load()
    while True:
        print("\n1) show  2) add  3) done  4) delete  5) quit")
        choice = input("Choose: ").strip()
        if choice == "1":
            show(tasks)
        elif choice == "2":
            title = input("Title: ").strip()
            if title:
                tasks.append({"title": title, "done": False})
                save(tasks)
        elif choice in ("3", "4"):
            index = ask_task_number(tasks)
            if index is not None:
                if choice == "3":
                    tasks[index]["done"] = True
                else:
                    tasks.pop(index)
                save(tasks)
        elif choice == "5":
            print("Bye!")
            break
        else:
            print("Please choose 1 to 5.")

main()`,
        i: ['2', 'Learn Python', '2', 'Be proud', '3', '1', '3', '7', '1', '4', '2', '1', '9', '5'],
        t: ['Step 5: the finished program', 'Passo 5: il programma finito', 'Étape 5 : le programme fini'],
        x: [`The complete to-do manager: a menu, add, done, delete, saving after each change, and checks for every wrong input: an empty title, a number that does not exist, a choice that is not on the menu.

Nothing in it is new. You built it from pieces you already know, which is exactly what programming is.`,
          `Il gestore completo di cose da fare: un menu, aggiungi, fatto, cancella, salvataggio dopo ogni cambiamento, e controlli per ogni input sbagliato: un titolo vuoto, un numero che non esiste, una scelta che non è nel menu.

Niente in esso è nuovo. L'hai costruito con pezzi che già conosci, ed è esattamente questo che è programmare.`,
          `Le gestionnaire de tâches complet : un menu, ajouter, fait, supprimer, sauvegarde après chaque changement, et des vérifications pour chaque mauvaise entrée : un titre vide, un numéro qui n'existe pas, un choix qui n'est pas au menu.

Rien dedans n'est nouveau. Tu l'as construit avec des morceaux que tu connais déjà, et c'est exactement ça, programmer.`],
        d: ['Add a priority to each task and show the high ones first.', 'Aggiungi una priorità a ogni compito e mostra prima quelli alti.', 'Ajoute une priorité à chaque tâche et montre d\'abord les hautes.']
      }
    ]
  },

  // ------------------------------------------------------------------ 52
  {
    title: ['Project 4: A text adventure', 'Progetto 4: Un\'avventura testuale', 'Projet 4 : Une aventure textuelle'],
    subtitle: ['Classes, dictionaries and match together', 'Classi, dizionari e match insieme', 'Classes, dictionnaires et match ensemble'],
    steps: [
      {
        c: c`rooms = {
    "hall": {"text": "A dusty hall.", "exits": {"north": "library", "east": "kitchen"}},
    "library": {"text": "Books everywhere.", "exits": {"south": "hall"}},
    "kitchen": {"text": "It smells of soup.", "exits": {"west": "hall"}},
}
here = "hall"
print(rooms[here]["text"])
print("Exits:", ", ".join(rooms[here]["exits"]))
here = rooms[here]["exits"]["north"]
print(rooms[here]["text"])`,
        t: ['Step 1: a map', 'Passo 1: una mappa', 'Étape 1 : une carte'],
        x: [`A text adventure is a map of places. Here each room is a dictionary with a description and its exits, and each exit points to the name of another room. The player is just a name: here.

Moving means putting a new room name in here. The whole world is data.`,
          `Un'avventura testuale è una mappa di luoghi. Qui ogni stanza è un dizionario con una descrizione e le sue uscite, e ogni uscita punta al nome di un'altra stanza. Il giocatore è solo un nome: here.

Muoversi vuol dire mettere in here il nome di una nuova stanza. Tutto il mondo è dati.`,
          `Une aventure textuelle est une carte de lieux. Ici chaque pièce est un dictionnaire avec une description et ses sorties, et chaque sortie pointe vers le nom d'une autre pièce. Le joueur n'est qu'un nom : here.

Se déplacer veut dire mettre un nouveau nom de pièce dans here. Tout le monde est des données.`],
        d: ['Add a garden room reachable from the kitchen.', 'Aggiungi una stanza giardino raggiungibile dalla cucina.', 'Ajoute une pièce jardin accessible depuis la cuisine.']
      },
      {
        c: c`rooms = {
    "hall": {"text": "A dusty hall.", "exits": {"north": "library"}},
    "library": {"text": "Books everywhere.", "exits": {"south": "hall"}},
}
here = "hall"
print(rooms[here]["text"])
for command in ["go north", "go west", "look", "go south", "dance"]:
    print(">", command)
    words = command.split()
    if words[0] == "go":
        direction = words[1]
        if direction in rooms[here]["exits"]:
            here = rooms[here]["exits"][direction]
            print(rooms[here]["text"])
        else:
            print("You cannot go that way.")
    elif words[0] == "look":
        print(rooms[here]["text"])
    else:
        print("I do not understand.")`,
        t: ['Step 2: understand commands', 'Passo 2: capire i comandi', 'Étape 2 : comprendre les commandes'],
        x: [`The player types commands like "go north". split cuts it into words: the first is the verb, the second is the direction. The program checks that the exit exists before moving, and answers politely to anything it does not know.

Here the commands come from a list so you can watch a whole game in one run.`,
          `Il giocatore scrive comandi come "go north". split lo taglia in parole: la prima è il verbo, la seconda è la direzione. Il programma controlla che l'uscita esista prima di muoversi, e risponde con garbo a tutto quello che non conosce.

Qui i comandi vengono da una lista così puoi vedere un'intera partita in un'esecuzione.`,
          `Le joueur écrit des commandes comme « go north ». split la coupe en mots : le premier est le verbe, le deuxième est la direction. Le programme vérifie que la sortie existe avant de bouger, et répond poliment à tout ce qu'il ne connaît pas.

Ici les commandes viennent d'une liste pour que tu voies toute une partie en une exécution.`],
        d: ['Add the verb "help" that lists the verbs.', 'Aggiungi il verbo "help" che elenca i verbi.', 'Ajoute le verbe « help » qui liste les verbes.']
      },
      {
        c: c`class Player:
    def __init__(self, room):
        self.room = room
        self.inventory = []

    def take(self, item, rooms):
        items = rooms[self.room]["items"]
        if item in items:
            items.remove(item)
            self.inventory.append(item)
            return f"You take the {item}."
        return f"There is no {item} here."

rooms = {"hall": {"items": ["lamp", "key"]}}
player = Player("hall")
print(player.take("lamp", rooms))
print(player.take("sword", rooms))
print(player.inventory, rooms["hall"]["items"])`,
        t: ['Step 3: a player with things', 'Passo 3: un giocatore con degli oggetti', 'Étape 3 : un joueur avec des objets'],
        x: [`The player now deserves a class: it knows the room it is in and an inventory of things carried. A method take moves an item from the room to the inventory, and gives back a sentence to show.

Methods that return a text keep the game logic apart from the printing.`,
          `Ora il giocatore merita una classe: sa in che stanza si trova e ha un inventario delle cose che porta. Un metodo take sposta un oggetto dalla stanza all'inventario, e restituisce una frase da mostrare.

I metodi che restituiscono un testo tengono la logica del gioco separata dalla stampa.`,
          `Le joueur mérite maintenant une classe : il connaît la pièce où il est et un inventaire des choses portées. Une méthode take déplace un objet de la pièce à l'inventaire, et rend une phrase à montrer.

Les méthodes qui rendent un texte gardent la logique du jeu séparée de l'affichage.`],
        d: ['Add a method drop that puts an item back in the room.', 'Aggiungi un metodo drop che rimette un oggetto nella stanza.', 'Ajoute une méthode drop qui remet un objet dans la pièce.']
      },
      {
        c: c`def handle(command, state):
    match command.split():
        case ["go", direction]:
            exits = state["rooms"][state["here"]]["exits"]
            if direction in exits:
                state["here"] = exits[direction]
                return state["rooms"][state["here"]]["text"]
            return "You cannot go that way."
        case ["take", item]:
            items = state["rooms"][state["here"]]["items"]
            if item in items:
                items.remove(item)
                state["bag"].append(item)
                return f"Taken: {item}"
            return f"No {item} here."
        case ["inventory"]:
            return "You carry: " + (", ".join(state["bag"]) or "nothing")
        case ["quit"]:
            return None
        case _:
            return "I do not understand."

state = {
    "here": "hall", "bag": [],
    "rooms": {
        "hall": {"text": "A dusty hall.", "exits": {"north": "vault"}, "items": ["key"]},
        "vault": {"text": "A treasure vault!", "exits": {"south": "hall"}, "items": []},
    },
}
for command in ["inventory", "take key", "go north", "inventory", "quit"]:
    print(">", command)
    answer = handle(command, state)
    if answer is None:
        print("Bye!")
        break
    print(answer)`,
        t: ['Step 4: match for the commands', 'Passo 4: match per i comandi', 'Étape 4 : match pour les commandes'],
        x: [`match is perfect here: each case is the shape of a command. ["go", direction] catches any "go" with one word after it and puts the word in direction. ["quit"] is a command with nothing else.

One function, handle, takes a command and the state of the game and gives back the sentence to show, or None to stop.`,
          `match è perfetto qui: ogni caso è la forma di un comando. ["go", direction] prende qualunque "go" con una parola dopo e mette la parola in direction. ["quit"] è un comando senza altro.

Una funzione, handle, prende un comando e lo stato del gioco e restituisce la frase da mostrare, o None per fermarsi.`,
          `match est parfait ici : chaque cas est la forme d'une commande. ["go", direction] attrape n'importe quel « go » avec un mot après et met le mot dans direction. ["quit"] est une commande sans rien d'autre.

Une fonction, handle, prend une commande et l'état du jeu et rend la phrase à montrer, ou None pour s'arrêter.`],
        d: ['Add a command ["look"] that describes the room.', 'Aggiungi un comando ["look"] che descrive la stanza.', 'Ajoute une commande ["look"] qui décrit la pièce.']
      },
      {
        c: c`class Game:
    def __init__(self):
        self.here = "cellar"
        self.bag = []
        self.rooms = {
            "cellar": {"text": "A damp cellar. A door leads up.", "exits": {"up": "kitchen"}, "items": ["torch"]},
            "kitchen": {"text": "A quiet kitchen. A locked door leads east.", "exits": {"down": "cellar", "east": "garden"}, "items": ["key"]},
            "garden": {"text": "A sunny garden. You are free!", "exits": {}, "items": []},
        }
        self.won = False

    def room(self):
        return self.rooms[self.here]

    def do(self, command):
        match command.lower().split():
            case ["look"]:
                return self.room()["text"] + " Items: " + (", ".join(self.room()["items"]) or "none")
            case ["take", item] if item in self.room()["items"]:
                self.room()["items"].remove(item)
                self.bag.append(item)
                return f"You take the {item}."
            case ["take", item]:
                return f"There is no {item} here."
            case ["go", direction] if direction in self.room()["exits"]:
                if direction == "east" and "key" not in self.bag:
                    return "The door is locked. You need a key."
                self.here = self.room()["exits"][direction]
                self.won = self.here == "garden"
                return self.room()["text"]
            case ["go", _]:
                return "You cannot go that way."
            case ["bag"]:
                return "You carry: " + (", ".join(self.bag) or "nothing")
            case _:
                return "I do not understand."

game = Game()
print(game.room()["text"])
script = ["go east", "take torch", "go up", "go east", "take key", "go east", "bag"]
for command in script:
    print(">", command)
    print(game.do(command))
    if game.won:
        print("*** You escaped! ***")
        break`,
        t: ['Step 5: the whole adventure', 'Passo 5: l\'avventura intera', 'Étape 5 : l\'aventure entière'],
        x: [`Everything together in a class Game: the world, the player, the commands with match, a locked door that needs a key, and a way to win. The script lists the commands that play one whole game.

To play it yourself, replace the loop over the script with a loop that uses input("> "). Then add rooms, monsters and secrets of your own.`,
          `Tutto insieme in una classe Game: il mondo, il giocatore, i comandi con match, una porta chiusa che richiede una chiave, e un modo per vincere. Lo script elenca i comandi che giocano un'intera partita.

Per giocarci tu stesso, sostituisci il ciclo sullo script con un ciclo che usa input("> "). Poi aggiungi stanze, mostri e segreti tuoi.`,
          `Tout ensemble dans une classe Game : le monde, le joueur, les commandes avec match, une porte fermée qui demande une clé, et une façon de gagner. Le script liste les commandes qui jouent une partie entière.

Pour y jouer toi-même, remplace la boucle sur le script par une boucle qui utilise input("> "). Puis ajoute des pièces, des monstres et des secrets à toi.`],
        d: ['Make it playable with input and add a fourth room.', 'Rendilo giocabile con input e aggiungi una quarta stanza.', 'Rends-le jouable avec input et ajoute une quatrième pièce.']
      }
    ]
  },

  // ------------------------------------------------------------------ 53
  {
    title: ['Project 5: Your own program', 'Progetto 5: Il tuo programma', 'Projet 5 : Ton propre programme'],
    subtitle: ['Plan it, build it, test it, make it yours', 'Pianificalo, costruiscilo, provalo, rendilo tuo', 'Planifie-le, construis-le, teste-le, fais-en le tien'],
    steps: [
      {
        c: c`# PROJECT: Expense tracker
# 1. Keep a list of expenses (what, how much, which day)
# 2. Add a new expense
# 3. Show the total, and the total for each kind
# 4. Save and load from a file
# 5. Refuse bad input
print("Plan written. Now build it one step at a time.")`,
        t: ['Step 1: choose and plan', 'Passo 1: scegli e pianifica', 'Étape 1 : choisir et planifier'],
        x: [`Now it is your turn to make a whole program. Pick something you would really use: an expense tracker, a flashcard quiz, a habit counter, a recipe book, a trivia game, a unit converter.

Before the code, write the plan as comments: a numbered list of what the program must do. A good plan has small steps you can test one by one. This example plans an expense tracker; the next steps build it.`,
          `Ora tocca a te fare un programma intero. Scegli qualcosa che useresti davvero: un registro di spese, un quiz con le schede, un contatore di abitudini, un libro di ricette, un gioco a quiz, un convertitore di unità.

Prima del codice, scrivi il piano come commenti: un elenco numerato di cosa deve fare il programma. Un buon piano ha piccoli passi che puoi provare uno per uno. Questo esempio pianifica un registro di spese; i prossimi passi lo costruiscono.`,
          `C'est maintenant à toi de faire un programme entier. Choisis quelque chose que tu utiliserais vraiment : un suivi de dépenses, un quiz de cartes, un compteur d'habitudes, un livre de recettes, un jeu de questions, un convertisseur d'unités.

Avant le code, écris le plan en commentaires : une liste numérotée de ce que le programme doit faire. Un bon plan a de petites étapes que tu peux tester une par une. Cet exemple planifie un suivi de dépenses ; les étapes suivantes le construisent.`],
        d: ['Write the plan of your own project in comments.', 'Scrivi il piano del tuo progetto in commenti.', 'Écris le plan de ton propre projet en commentaires.']
      },
      {
        c: c`from dataclasses import dataclass

@dataclass
class Expense:
    what: str
    amount: float
    kind: str

expenses = [
    Expense("bus ticket", 2.5, "travel"),
    Expense("lunch", 7.0, "food"),
    Expense("book", 12.0, "fun"),
    Expense("snack", 1.5, "food"),
]

def total(items):
    return sum(e.amount for e in items)

def by_kind(items):
    result = {}
    for e in items:
        result[e.kind] = result.get(e.kind, 0) + e.amount
    return result

print(f"Total: {total(expenses):.2f}")
for kind, amount in sorted(by_kind(expenses).items()):
    print(f"{kind:>8}: {amount:6.2f}")`,
        t: ['Step 2: the data and the sums', 'Passo 2: i dati e i conti', 'Étape 2 : les données et les calculs'],
        x: [`Start with the data and the calculations, before any questions to the user. A dataclass describes an expense, two small functions work out the total and the total by kind, and an f-string with a format lines up the table.

Test it with data you know the answer to: here 23.00 in all, of which food is 8.50.`,
          `Parti dai dati e dai calcoli, prima di qualunque domanda all'utente. Una dataclass descrive una spesa, due piccole funzioni calcolano il totale e il totale per tipo, e una f-string con un formato allinea la tabella.

Provalo con dati di cui conosci la risposta: qui 23.00 in tutto, di cui il cibo è 8.50.`,
          `Commence par les données et les calculs, avant toute question à l'utilisateur. Une dataclass décrit une dépense, deux petites fonctions calculent le total et le total par genre, et une f-string avec un format aligne le tableau.

Teste-le avec des données dont tu connais la réponse : ici 23.00 en tout, dont la nourriture fait 8.50.`],
        d: ['Add a fifth expense and check the numbers by hand.', 'Aggiungi una quinta spesa e controlla i numeri a mano.', 'Ajoute une cinquième dépense et vérifie les nombres à la main.']
      },
      {
        c: c`from dataclasses import dataclass, asdict
import json, os

@dataclass
class Expense:
    what: str
    amount: float
    kind: str

FILE = "expenses.json"

def save(expenses):
    with open(FILE, "w") as f:
        json.dump([asdict(e) for e in expenses], f)

def load():
    if not os.path.exists(FILE):
        return []
    with open(FILE) as f:
        return [Expense(**item) for item in json.load(f)]

def parse_amount(text):
    try:
        amount = float(text.replace(",", "."))
    except ValueError:
        raise ValueError(f"{text!r} is not a number")
    if amount <= 0:
        raise ValueError("the amount must be more than zero")
    return amount

save([Expense("lunch", 7.0, "food")])
print(load())
for text in ["3,50", "abc", "-4"]:
    try:
        print(parse_amount(text))
    except ValueError as error:
        print("Refused:", error)`,
        t: ['Step 3: save, load and refuse bad input', 'Passo 3: salva, carica e rifiuta input sbagliati', 'Étape 3 : sauvegarder, charger et refuser les mauvaises entrées'],
        x: [`Two more pieces. asdict turns a dataclass into a dictionary for json, and Expense(**item) builds it back. parse_amount accepts a comma as the decimal mark, because people type it, and raises a clear error for text or for an amount that makes no sense.

The program decides what is acceptable once, in one function.`,
          `Altri due pezzi. asdict trasforma una dataclass in un dizionario per json, e Expense(**item) la ricostruisce. parse_amount accetta la virgola come segno decimale, perché le persone la scrivono, e solleva un errore chiaro per un testo o per un importo senza senso.

Il programma decide cosa è accettabile una volta sola, in una funzione.`,
          `Deux morceaux de plus. asdict transforme une dataclass en dictionnaire pour json, et Expense(**item) la reconstruit. parse_amount accepte la virgule comme séparateur décimal, parce que les gens la tapent, et lève une erreur claire pour un texte ou un montant qui n'a pas de sens.

Le programme décide ce qui est acceptable une seule fois, dans une fonction.`],
        d: ['Refuse an empty name for an expense.', 'Rifiuta un nome vuoto per una spesa.', 'Refuse un nom vide pour une dépense.']
      },
      {
        c: c`def total(items):
    return sum(items)

def average(items):
    return sum(items) / len(items)

def test_total():
    assert total([1, 2, 3]) == 6
    assert total([]) == 0

def test_average():
    assert average([2, 4]) == 3
    try:
        average([])
    except ZeroDivisionError:
        return
    raise AssertionError("average of nothing should fail")

for test in (test_total, test_average):
    test()
    print(test.__name__, "passed")`,
        t: ['Step 4: tests protect your work', 'Passo 4: i test proteggono il tuo lavoro', 'Étape 4 : les tests protègent ton travail'],
        x: [`Small tests for each function let you change the program later with confidence: if you break something, a test says so at once. A test is a function with asserts, and a runner calls each one.

Writing the test for a mistake that you expect, like an empty list, is as important as writing the ones that should work.`,
          `Piccoli test per ogni funzione ti permettono di cambiare il programma più avanti con fiducia: se rompi qualcosa, un test lo dice subito. Un test è una funzione con degli assert, e un esecutore chiama ognuno.

Scrivere il test per un errore che ti aspetti, come una lista vuota, è importante quanto scrivere quelli che dovrebbero funzionare.`,
          `De petits tests pour chaque fonction te permettent de changer le programme plus tard en confiance : si tu casses quelque chose, un test le dit tout de suite. Un test est une fonction avec des assert, et un lanceur appelle chacun.

Écrire le test pour une erreur que tu attends, comme une liste vide, est aussi important qu'écrire ceux qui devraient marcher.`],
        d: ['Write a test for a function of your own project.', 'Scrivi un test per una funzione del tuo progetto.', 'Écris un test pour une fonction de ton projet.']
      },
      {
        c: c`from datetime import date

SKILLS = {
    "basics": ["print", "variables", "numbers", "input", "if", "loops", "lists"],
    "data": ["text methods", "tuples", "dictionaries", "sets", "functions", "recursion"],
    "language": ["modules", "files", "exceptions", "json", "regex", "tests"],
    "objects": ["classes", "inheritance", "generators", "decorators", "async"],
}

name = input("Your name: ")
print("=" * 44)
print(f"  CERTIFICATE: {name} knows Python")
print("=" * 44)
total = 0
for stage, topics in SKILLS.items():
    total += len(topics)
    print(f"{stage.title():>9}: {', '.join(topics[:3])}...")
print(f"You met {total} big ideas, and built 4 programs.")
print("Date:", date(2026, 10, 20).strftime("%d %B %Y"))
print("Now go and build something that is yours.")`,
        i: ['Ada'],
        t: ['Step 5: the end, and the start', 'Passo 5: la fine, e l\'inizio', 'Étape 5 : la fin, et le début'],
        x: [`You reached the end. This little program uses a dictionary of lists, a loop, an f-string with format, a date and input: a bit of everything that you learned.

You know Python now: the basics, data, functions, files, errors, objects, generators, decorators, tests and more. What is left is practice. Build something every week, read other people's code, and never be afraid of an error message: you know how to read them.`,
          `Sei arrivato alla fine. Questo piccolo programma usa un dizionario di liste, un ciclo, una f-string con formato, una data e input: un po' di tutto quello che hai imparato.

Ora conosci Python: le basi, i dati, le funzioni, i file, gli errori, gli oggetti, i generatori, i decoratori, i test e altro. Quello che resta è la pratica. Costruisci qualcosa ogni settimana, leggi il codice degli altri, e non aver mai paura di un messaggio di errore: sai come leggerli.`,
          `Tu es arrivé à la fin. Ce petit programme utilise un dictionnaire de listes, une boucle, une f-string avec format, une date et input : un peu de tout ce que tu as appris.

Tu connais Python maintenant : les bases, les données, les fonctions, les fichiers, les erreurs, les objets, les générateurs, les décorateurs, les tests et plus. Ce qui reste, c'est la pratique. Construis quelque chose chaque semaine, lis le code des autres, et n'aie jamais peur d'un message d'erreur : tu sais les lire.`],
        d: ['Change the program so the certificate is about the things you liked best.', 'Cambia il programma così che il certificato parli delle cose che ti sono piaciute di più.', 'Change le programme pour que le certificat parle des choses que tu as préférées.']
      }
    ]
  }
];
