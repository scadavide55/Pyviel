// Stage 7 · Whole programs. See tools/build-course.js for the format.
// The files that the projects make start with demo_, so they never touch a file of the student.
const c = String.raw;
const G7 = ['Stage 7 · Whole programs', 'Fase 7 · Programmi interi', 'Étape 7 · Des programmes entiers'];

module.exports = [
  {
    group: G7,
    title: ['Project 1: Guess the number', 'Progetto 1: Indovina il numero', 'Projet 1 : Devine le nombre'],
    subtitle: ['From an empty page to a finished game', 'Da una pagina vuota a un gioco finito', 'D\'une page vide à un jeu terminé'],
    steps: [
      {
        c: [c`secret = 42
guess = int(input("Guess the number: "))
if guess < secret:
    print("Too low")
elif guess > secret:
    print("Too high")
else:
    print("You got it!")`, c`secret = 42
guess = int(input("Indovina il numero: "))
if guess < secret:
    print("Troppo basso")
elif guess > secret:
    print("Troppo alto")
else:
    print("Ce l'hai fatta!")`, c`secret = 42
guess = int(input("Devine le nombre : "))
if guess < secret:
    print("Trop petit")
elif guess > secret:
    print("Trop grand")
else:
    print("Tu as réussi !")`],
        i: ['30'],
        t: ['Step 1: one guess', 'Passo 1: un tentativo', 'Étape 1 : un essai'],
        x: [`A big program is built in small steps that each work. First the smallest version: the secret number is fixed, you guess once, and the program says if the guess is too low, too high or right.

Run it and try a few numbers. Nothing here is new: it is input, int, and if, elif, else.`,
          `Un programma grande si costruisce con piccoli passi che funzionano ognuno. Prima la versione più piccola: il numero segreto è fisso, indovini una volta e il programma dice se il tentativo è troppo basso, troppo alto o giusto.

Eseguilo e prova qualche numero. Qui non c'è niente di nuovo: sono input, int e if, elif, else.`,
          `Un grand programme se construit en petites étapes qui marchent chacune. D'abord la plus petite version : le nombre secret est fixe, tu devines une fois, et le programme dit si l'essai est trop petit, trop grand ou juste.

Lance-le et essaie quelques nombres. Rien de nouveau ici : ce sont input, int, et if, elif, else.`],
        ex: {
          uses: ['input', 'if'],
          t: ['Change the secret number to 7 and answer 7: it must say you got it.', 'Cambia il numero segreto in 7 e rispondi 7: deve dire che hai indovinato.', 'Change le nombre secret en 7 et réponds 7 : il doit dire que tu as réussi.'],
          h: ['Change the first line, and type 7 when it asks.', 'Cambia la prima riga e scrivi 7 quando chiede.', 'Change la première ligne et tape 7 quand il demande.'],
          start: [c`secret = 42
guess = int(input("Guess the number: "))
if guess < secret:
    print("Too low")
elif guess > secret:
    print("Too high")
else:
    print("You got it!")`, c`secret = 42
guess = int(input("Indovina il numero: "))
if guess < secret:
    print("Troppo basso")
elif guess > secret:
    print("Troppo alto")
else:
    print("Ce l'hai fatta!")`, c`secret = 42
guess = int(input("Devine le nombre : "))
if guess < secret:
    print("Trop petit")
elif guess > secret:
    print("Trop grand")
else:
    print("Tu as réussi !")`],
          sol: [c`secret = 7
guess = int(input("Guess the number: "))
if guess < secret:
    print("Too low")
elif guess > secret:
    print("Too high")
else:
    print("You got it!")`, c`secret = 7
guess = int(input("Indovina il numero: "))
if guess < secret:
    print("Troppo basso")
elif guess > secret:
    print("Troppo alto")
else:
    print("Ce l'hai fatta!")`, c`secret = 7
guess = int(input("Devine le nombre : "))
if guess < secret:
    print("Trop petit")
elif guess > secret:
    print("Trop grand")
else:
    print("Tu as réussi !")`],
          i: ['7'], m: ['You got it!$', 'Ce l\'hai fatta!$', 'Tu as réussi !$']
        }
      },
      {
        c: [c`secret = 42
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
        break`, c`secret = 42
tries = 0
while True:
    guess = int(input("Indovina il numero: "))
    tries += 1
    if guess < secret:
        print("Troppo basso")
    elif guess > secret:
        print("Troppo alto")
    else:
        print(f"Ce l'hai fatta in {tries} tentativi!")
        break`, c`secret = 42
tries = 0
while True:
    guess = int(input("Devine le nombre : "))
    tries += 1
    if guess < secret:
        print("Trop petit")
    elif guess > secret:
        print("Trop grand")
    else:
        print(f"Tu as réussi en {tries} essais !")
        break`],
        i: ['50', '30', '42'],
        t: ['Step 2: keep guessing', 'Passo 2: continua a provare', 'Étape 2 : continue à deviner'],
        x: [`Now a loop that keeps asking until the guess is right, and a counter of the tries. The loop is while True, and break leaves it when the player wins.

The program already works as a game. The next steps make it safer and nicer.`,
          `Ora un ciclo che continua a chiedere finché il tentativo è giusto, e un contatore dei tentativi. Il ciclo è while True, e break lo lascia quando il giocatore vince.

Il programma funziona già come gioco. I passi dopo lo rendono più sicuro e più bello.`,
          `Maintenant une boucle qui continue à demander jusqu'à ce que l'essai soit juste, et un compteur des essais. La boucle est while True, et break en sort quand le joueur gagne.

Le programme marche déjà comme un jeu. Les étapes suivantes le rendent plus sûr et plus joli.`],
        ex: {
          t: ['This version keeps asking, but it does not count. Add the counter: tries = 0 before the loop, tries += 1 after each guess, and a last message that says how many tries it took. With the answers 50, 30 and 42 it must end with "You got it in 3 tries!".', 'Questa versione continua a chiedere, ma non conta. Aggiungi il contatore: tries = 0 prima del ciclo, tries += 1 dopo ogni tentativo, e un ultimo messaggio che dice quanti tentativi ci sono voluti. Con le risposte 50, 30 e 42 deve finire con "Ce l\'hai fatta in 3 tentativi!".', 'Cette version continue à demander, mais elle ne compte pas. Ajoute le compteur : tries = 0 avant la boucle, tries += 1 après chaque essai, et un dernier message qui dit combien d\'essais il a fallu. Avec les réponses 50, 30 et 42 il doit finir par "Tu as réussi en 3 essais !".'],
          h: ['The last print becomes an f-string: print(f"You got it in {tries} tries!").', 'L\'ultimo print diventa una f-string: print(f"Ce l\'hai fatta in {tries} tentativi!").', 'Le dernier print devient une f-string : print(f"Tu as réussi en {tries} essais !").'],
          start: [c`secret = 42
while True:
    guess = int(input("Guess the number: "))
    if guess < secret:
        print("Too low")
    elif guess > secret:
        print("Too high")
    else:
        print("You got it!")
        break`, c`secret = 42
while True:
    guess = int(input("Indovina il numero: "))
    if guess < secret:
        print("Troppo basso")
    elif guess > secret:
        print("Troppo alto")
    else:
        print("Ce l'hai fatta!")
        break`, c`secret = 42
while True:
    guess = int(input("Devine le nombre : "))
    if guess < secret:
        print("Trop petit")
    elif guess > secret:
        print("Trop grand")
    else:
        print("Tu as réussi !")
        break`],
          sol: [c`secret = 42
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
        break`, c`secret = 42
tries = 0
while True:
    guess = int(input("Indovina il numero: "))
    tries += 1
    if guess < secret:
        print("Troppo basso")
    elif guess > secret:
        print("Troppo alto")
    else:
        print(f"Ce l'hai fatta in {tries} tentativi!")
        break`, c`secret = 42
tries = 0
while True:
    guess = int(input("Devine le nombre : "))
    tries += 1
    if guess < secret:
        print("Trop petit")
    elif guess > secret:
        print("Trop grand")
    else:
        print(f"Tu as réussi en {tries} essais !")
        break`],
          i: ['50', '30', '42'], m: ['in 3 tries!$', 'in 3 tentativi!$', 'en 3 essais !$'], c: 'while True'
        }
      },
      {
        c: [c`def ask_number(question, low, high):
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
    print("Too low" if guess < secret else "Too high")`, c`def ask_number(question, low, high):
    """Chiede finché la persona scrive un numero intero da low a high."""
    while True:
        text = input(question)
        if not text.strip().isdigit():
            print("Scrivi un numero intero.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"Deve essere tra {low} e {high}.")

secret = 42
tries = 0
while True:
    guess = ask_number("Indovina (1-100): ", 1, 100)
    tries += 1
    if guess == secret:
        print(f"Ce l'hai fatta in {tries} tentativi!")
        break
    print("Troppo basso" if guess < secret else "Troppo alto")`, c`def ask_number(question, low, high):
    """Demande jusqu'à ce que la personne tape un nombre entier de low à high."""
    while True:
        text = input(question)
        if not text.strip().isdigit():
            print("Tape un nombre entier.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"Il doit être entre {low} et {high}.")

secret = 42
tries = 0
while True:
    guess = ask_number("Devine (1-100) : ", 1, 100)
    tries += 1
    if guess == secret:
        print(f"Tu as réussi en {tries} essais !")
        break
    print("Trop petit" if guess < secret else "Trop grand")`],
        i: ['abc', '500', '50', '42'],
        t: ['Step 3: trust nothing typed', 'Passo 3: non fidarti di quello che si scrive', 'Étape 3 : ne fais confiance à rien de ce qui est tapé'],
        x: [`What if the player types letters, or 500? A function ask_number keeps asking until the answer is a whole number in the right range. Writing it once, in a function, means it can be used for every question in the program.

Notice the last line of the loop: a one-line if chooses between "too low" and "too high".`,
          `E se il giocatore scrive delle lettere, o 500? Una funzione ask_number continua a chiedere finché la risposta è un numero intero nell'intervallo giusto. Scriverla una volta, in una funzione, vuol dire che si può usare per ogni domanda del programma.

Nota l'ultima riga del ciclo: un if in una riga sceglie tra "troppo basso" e "troppo alto".`,
          `Et si le joueur tape des lettres, ou 500 ? Une fonction ask_number continue à demander jusqu'à ce que la réponse soit un nombre entier dans la bonne plage. L'écrire une fois, dans une fonction, veut dire qu'on peut l'utiliser pour chaque question du programme.

Remarque la dernière ligne de la boucle : un if sur une ligne choisit entre "trop petit" et "trop grand".`],
        ex: {
          t: ['Make the game use ask_number for every guess. With the answers abc, 500, 50 and 42, the program must end by saying you got it in 2 tries: the refused answers do not count as tries.', 'Fai usare ask_number al gioco per ogni tentativo. Con le risposte abc, 500, 50 e 42, il programma deve finire dicendo che ce l\'hai fatta in 2 tentativi: le risposte rifiutate non contano come tentativi.', 'Fais utiliser ask_number au jeu pour chaque essai. Avec les réponses abc, 500, 50 et 42, le programme doit finir en disant que tu as réussi en 2 essais : les réponses refusées ne comptent pas comme essais.'],
          h: ['The function is already written, but nobody calls it: the guess still comes from int(input(...)), which stops with an error on abc. Replace that line with guess = ask_number("Guess (1-100): ", 1, 100).', 'La funzione è già scritta, ma nessuno la chiama: il tentativo viene ancora da int(input(...)), che si ferma con un errore su abc. Sostituisci quella riga con guess = ask_number("Indovina (1-100): ", 1, 100).', 'La fonction est déjà écrite, mais personne ne l\'appelle : l\'essai vient encore de int(input(...)), qui s\'arrête sur une erreur avec abc. Remplace cette ligne par guess = ask_number("Devine (1-100) : ", 1, 100).'],
          start: [c`def ask_number(question, low, high):
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
    guess = int(input("Guess (1-100): "))
    tries += 1
    if guess == secret:
        print(f"You got it in {tries} tries!")
        break
    print("Too low" if guess < secret else "Too high")`, c`def ask_number(question, low, high):
    while True:
        text = input(question)
        if not text.strip().isdigit():
            print("Scrivi un numero intero.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"Deve essere tra {low} e {high}.")

secret = 42
tries = 0
while True:
    guess = int(input("Indovina (1-100): "))
    tries += 1
    if guess == secret:
        print(f"Ce l'hai fatta in {tries} tentativi!")
        break
    print("Troppo basso" if guess < secret else "Troppo alto")`, c`def ask_number(question, low, high):
    while True:
        text = input(question)
        if not text.strip().isdigit():
            print("Tape un nombre entier.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"Il doit être entre {low} et {high}.")

secret = 42
tries = 0
while True:
    guess = int(input("Devine (1-100) : "))
    tries += 1
    if guess == secret:
        print(f"Tu as réussi en {tries} essais !")
        break
    print("Trop petit" if guess < secret else "Trop grand")`],
          sol: [c`def ask_number(question, low, high):
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
    print("Too low" if guess < secret else "Too high")`, c`def ask_number(question, low, high):
    while True:
        text = input(question)
        if not text.strip().isdigit():
            print("Scrivi un numero intero.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"Deve essere tra {low} e {high}.")

secret = 42
tries = 0
while True:
    guess = ask_number("Indovina (1-100): ", 1, 100)
    tries += 1
    if guess == secret:
        print(f"Ce l'hai fatta in {tries} tentativi!")
        break
    print("Troppo basso" if guess < secret else "Troppo alto")`, c`def ask_number(question, low, high):
    while True:
        text = input(question)
        if not text.strip().isdigit():
            print("Tape un nombre entier.")
            continue
        number = int(text)
        if low <= number <= high:
            return number
        print(f"Il doit être entre {low} et {high}.")

secret = 42
tries = 0
while True:
    guess = ask_number("Devine (1-100) : ", 1, 100)
    tries += 1
    if guess == secret:
        print(f"Tu as réussi en {tries} essais !")
        break
    print("Trop petit" if guess < secret else "Trop grand")`],
          i: ['abc', '500', '50', '42'], m: ['in 2 tries!$', 'in 2 tentativi!$', 'en 2 essais !$'], c: 'ask_number'
        }
      },
      {
        c: [c`import random

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
    main()`, c`import random

LEVELS = {"facile": 10, "medio": 100}

def ask_number(question, low, high):
    while True:
        text = input(question)
        if text.strip().isdigit() and low <= int(text) <= high:
            return int(text)
        print(f"Scrivi un numero intero da {low} a {high}.")

def play(top):
    secret = random.randint(1, top)
    tries = 0
    while True:
        guess = ask_number(f"Indovina (1-{top}): ", 1, top)
        tries += 1
        if guess == secret:
            return tries
        print("Troppo basso" if guess < secret else "Troppo alto")

def main():
    random.seed(3)
    best = {}
    for level, top in LEVELS.items():
        print(f"--- {level} ---")
        tries = play(top)
        print(f"Ce l'hai fatta in {tries} tentativi!")
        best[level] = min(best.get(level, 999), tries)
    print("Migliori:", best)

if __name__ == "__main__":
    main()`, c`import random

LEVELS = {"facile": 10, "moyen": 100}

def ask_number(question, low, high):
    while True:
        text = input(question)
        if text.strip().isdigit() and low <= int(text) <= high:
            return int(text)
        print(f"Tape un nombre entier de {low} à {high}.")

def play(top):
    secret = random.randint(1, top)
    tries = 0
    while True:
        guess = ask_number(f"Devine (1-{top}) : ", 1, top)
        tries += 1
        if guess == secret:
            return tries
        print("Trop petit" if guess < secret else "Trop grand")

def main():
    random.seed(3)
    best = {}
    for level, top in LEVELS.items():
        print(f"--- {level} ---")
        tries = play(top)
        print(f"Tu as réussi en {tries} essais !")
        best[level] = min(best.get(level, 999), tries)
    print("Meilleurs :", best)

if __name__ == "__main__":
    main()`],
        i: ['5', '9', '3', '4', '50', '500', '99', '76'],
        t: ['Step 4: the whole program', 'Passo 4: il programma intero', 'Étape 4 : le programme entier'],
        x: [`Everything put together in the shape of a good program: small functions that each do one job, a main() that plays the game for each level, constants in capitals, and the line that starts main.

You built it from an empty page, one working step at a time. That is how every big program is made.`,
          `Tutto messo insieme nella forma di un buon programma: piccole funzioni che fanno ognuna un compito, un main() che gioca per ogni livello, costanti in maiuscolo e la riga che fa partire main.

L'hai costruito da una pagina vuota, un passo funzionante alla volta. È così che si fa ogni programma grande.`,
          `Tout ensemble sous la forme d'un bon programme : de petites fonctions qui font chacune un travail, un main() qui joue la partie pour chaque niveau, des constantes en majuscules, et la ligne qui démarre main.

Tu l'as construit à partir d'une page vide, une étape qui marche à la fois. C'est ainsi que se fait chaque grand programme.`],
        ex: {
          uses: ['dict', 'for'],
          t: ['Add a third level, "hard", with the top number 1000, to the dictionary LEVELS, and show the three levels.', 'Aggiungi un terzo livello, "hard", con il numero massimo 1000, al dizionario LEVELS e mostra i tre livelli.', 'Ajoute un troisième niveau, "hard", avec le nombre maximum 1000, au dictionnaire LEVELS et affiche les trois niveaux.'],
          h: ['Add one more pair to the dictionary LEVELS.', 'Aggiungi una coppia in più al dizionario LEVELS.', 'Ajoute une paire de plus au dictionnaire LEVELS.'],
          start: 'LEVELS = {"easy": 10, "medium": 100}\nfor level, top in LEVELS.items():\n    print(level, top)',
          sol: 'LEVELS = {"easy": 10, "medium": 100, "hard": 1000}\nfor level, top in LEVELS.items():\n    print(level, top)', out: 'easy 10\nmedium 100\nhard 1000', c: 'hard'
        }
      }
    ]
  },
  {
    title: ['Project 2: Hangman', 'Progetto 2: Impiccato', 'Projet 2 : Pendu'],
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
        t: ['Step 1: show the word with blanks', 'Passo 1: mostra la parola con gli spazi', 'Étape 1 : montre le mot avec des blancs'],
        x: [`In hangman you see the word with the guessed letters shown and the others hidden. A set keeps the letters guessed so far, and a loop builds the display one letter at a time.

join with a space in between makes the letters easier to read: p _ _ _ o _.`,
          `Nell'impiccato vedi la parola con le lettere indovinate mostrate e le altre nascoste. Un insieme tiene le lettere indovinate finora e un ciclo costruisce il display una lettera alla volta.

join con uno spazio in mezzo rende le lettere più facili da leggere: p _ _ _ o _.`,
          `Dans le pendu tu vois le mot avec les lettres devinées montrées et les autres cachées. Un ensemble garde les lettres devinées jusqu'ici, et une boucle construit l'affichage une lettre à la fois.

join avec une espace au milieu rend les lettres plus faciles à lire : p _ _ _ o _.`],
        ex: {
          uses: ['for'],
          t: ['Change the guessed letters to {"y", "t", "n"} and show the display (_ y t _ _ n).', 'Cambia le lettere indovinate in {"y", "t", "n"} e mostra il display (_ y t _ _ n).', 'Change les lettres devinées en {"y", "t", "n"} et affiche l\'affichage (_ y t _ _ n).'],
          h: ['Change the set in the second line.', 'Cambia l\'insieme nella seconda riga.', 'Change l\'ensemble dans la deuxième ligne.'],
          start: 'word = "python"\nguessed = {"p", "o"}\nshown = ""\nfor letter in word:\n    shown += letter if letter in guessed else "_"\nprint(" ".join(shown))', sol: 'word = "python"\nguessed = {"y", "t", "n"}\nshown = ""\nfor letter in word:\n    shown += letter if letter in guessed else "_"\nprint(" ".join(shown))', out: '_ y t _ _ n'
        }
      },
      {
        c: c`def mask(word, guessed):
    return " ".join([letter if letter in guessed else "_" for letter in word])

word = "python"
guessed = set()
for guess in ["t", "z", "p", "t"]:
    if guess in guessed:
        print(guess, "- already tried")
    elif guess in word:
        guessed.add(guess)
        print(guess, "- yes!", mask(word, guessed))
    else:
        guessed.add(guess)
        print(guess, "- no", mask(word, guessed))`,
        t: ['Step 2: check a guess', 'Passo 2: controlla un tentativo', 'Étape 2 : vérifie un essai'],
        x: [`The display becomes a small function, mask. Then each guess is checked in three ways: already tried, in the word, or not in the word.

Here the guesses come from a list, so you can see every case in one run.`,
          `Il display diventa una piccola funzione, mask. Poi ogni tentativo viene controllato in tre modi: già provato, nella parola, o non nella parola.

Qui i tentativi vengono da una lista, così vedi ogni caso in una sola esecuzione.`,
          `L'affichage devient une petite fonction, mask. Puis chaque essai est vérifié de trois façons : déjà essayé, dans le mot, ou pas dans le mot.

Ici les essais viennent d'une liste, donc tu vois chaque cas en une seule exécution.`],
        ex: {
          t: ['Change the list of guesses to ["h", "h", "x"] and look at the three answers.', 'Cambia la lista dei tentativi in ["h", "h", "x"] e guarda le tre risposte.', 'Change la liste des essais en ["h", "h", "x"] et regarde les trois réponses.'],
          h: ['Change the list in the for line.', 'Cambia la lista nella riga for.', 'Change la liste dans la ligne for.'],
          start: 'def mask(word, guessed):\n    return " ".join([letter if letter in guessed else "_" for letter in word])\n\nword = "python"\nguessed = set()\nfor guess in ["t", "z"]:\n    if guess in guessed:\n        print(guess, "- already tried")\n    elif guess in word:\n        guessed.add(guess)\n        print(guess, "- yes!", mask(word, guessed))\n    else:\n        guessed.add(guess)\n        print(guess, "- no", mask(word, guessed))',
          sol: 'def mask(word, guessed):\n    return " ".join([letter if letter in guessed else "_" for letter in word])\n\nword = "python"\nguessed = set()\nfor guess in ["h", "h", "x"]:\n    if guess in guessed:\n        print(guess, "- already tried")\n    elif guess in word:\n        guessed.add(guess)\n        print(guess, "- yes!", mask(word, guessed))\n    else:\n        guessed.add(guess)\n        print(guess, "- no", mask(word, guessed))', exact: true, c: '"h", "h", "x"'
        }
      },
      {
        c: c`def mask(word, guessed):
    return " ".join([letter if letter in guessed else "_" for letter in word])

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
        x: [`Add lives that go down on a wrong guess. The game ends when the lives run out, or when every letter of the word is in the guessed set.

set(word) <= guessed asks "are all the letters of the word guessed?": it is the same comparison you used for sets.`,
          `Aggiungi delle vite che scendono a ogni tentativo sbagliato. Il gioco finisce quando le vite finiscono, o quando ogni lettera della parola è nell'insieme delle indovinate.

set(word) <= guessed chiede "tutte le lettere della parola sono state indovinate?": è lo stesso confronto che hai usato per gli insiemi.`,
          `Ajoute des vies qui baissent à chaque mauvais essai. Le jeu se termine quand les vies sont épuisées, ou quand chaque lettre du mot est dans l'ensemble des devinées.

set(word) <= guessed demande "toutes les lettres du mot sont-elles devinées ?" : c'est la même comparaison que tu as utilisée pour les ensembles.`],
        ex: {
          uses: ['for'],
          t: ['The player has only 1 life, so a wrong first guess loses the game. Give the player 2 lives, so that the guesses x, p, y, t, h, o, n win: it must show You win!', 'Il giocatore ha una sola vita, quindi un primo tentativo sbagliato fa perdere. Dai al giocatore 2 vite, così i tentativi x, p, y, t, h, o, n vincono: deve mostrare You win!', 'Le joueur n\'a qu\'une seule vie, donc un premier mauvais essai fait perdre. Donne 2 vies au joueur, pour que les essais x, p, y, t, h, o, n gagnent : il doit afficher You win!'],
          h: ['Change lives = 1 into lives = 2.', 'Cambia lives = 1 in lives = 2.', 'Change lives = 1 en lives = 2.'],
          start: 'word = "python"\nguessed = set()\nlives = 1\nfor guess in ["x", "p", "y", "t", "h", "o", "n"]:\n    if lives == 0 or set(word) <= guessed:\n        break\n    guessed.add(guess)\n    if guess not in word:\n        lives -= 1\nif set(word) <= guessed:\n    print("You win!")\nelse:\n    print("You lose.")', sol: 'word = "python"\nguessed = set()\nlives = 2\nfor guess in ["x", "p", "y", "t", "h", "o", "n"]:\n    if lives == 0 or set(word) <= guessed:\n        break\n    guessed.add(guess)\n    if guess not in word:\n        lives -= 1\nif set(word) <= guessed:\n    print("You win!")\nelse:\n    print("You lose.")', out: 'You win!'
        }
      },
      {
        c: [c`import random

WORDS = ["python", "pyviel", "bridge", "garden", "planet", "rocket"]
MAX_MISTAKES = 4

def mask(word, guessed):
    return " ".join([letter if letter in guessed else "_" for letter in word])

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
print("You win!" if won else f"You lose. It was {word}.")`, c`import random

WORDS = ["pitone", "pyviel", "ponte", "giardino", "pianeta", "razzo"]
MAX_MISTAKES = 4

def mask(word, guessed):
    return " ".join([letter if letter in guessed else "_" for letter in word])

def play(word):
    guessed = set()
    mistakes = 0
    while mistakes < MAX_MISTAKES and not set(word) <= guessed:
        print(mask(word, guessed), f"  errori: {mistakes}/{MAX_MISTAKES}")
        guess = input("Lettera: ").strip().lower()
        if len(guess) != 1 or not guess.isalpha():
            print("Una lettera, per favore.")
        elif guess in guessed:
            print("Hai già provato", guess)
        else:
            guessed.add(guess)
            if guess not in word:
                mistakes += 1
    return set(word) <= guessed

random.seed(2)
word = random.choice(WORDS)
won = play(word)
print("Hai vinto!" if won else f"Hai perso. Era {word}.")`, c`import random

WORDS = ["serpent", "pyviel", "pont", "jardin", "planète", "fusée"]
MAX_MISTAKES = 4

def mask(word, guessed):
    return " ".join([letter if letter in guessed else "_" for letter in word])

def play(word):
    guessed = set()
    mistakes = 0
    while mistakes < MAX_MISTAKES and not set(word) <= guessed:
        print(mask(word, guessed), f"  erreurs : {mistakes}/{MAX_MISTAKES}")
        guess = input("Lettre : ").strip().lower()
        if len(guess) != 1 or not guess.isalpha():
            print("Une lettre, s'il te plaît.")
        elif guess in guessed:
            print("Tu as déjà essayé", guess)
        else:
            guessed.add(guess)
            if guess not in word:
                mistakes += 1
    return set(word) <= guessed

random.seed(2)
word = random.choice(WORDS)
won = play(word)
print("Tu as gagné !" if won else f"Tu as perdu. C'était {word}.")`],
        i: {en: ['a', '12', 'p', 'p', 'y', 't', 'h', 'o', 'n'], it: ['a', '12', 'p', 'p', 'i', 't', 'o', 'n', 'e'], fr: ['a', '12', 's', 's', 'e', 'r', 'p', 'n', 't']},
        t: ['Step 4: the whole game', 'Passo 4: il gioco intero', 'Étape 4 : le jeu entier'],
        x: [`The pieces together: a list of words, a random choice, a play function with the loop, and checks that refuse anything that is not one new letter. play gives back True or False, and the main code announces the result.

Notice how each piece is small and does one thing. That is why you could build it step by step.`,
          `I pezzi insieme: una lista di parole, una scelta a caso, una funzione play con il ciclo, e controlli che rifiutano tutto ciò che non è una lettera nuova. play restituisce True o False e il codice principale annuncia il risultato.

Nota come ogni pezzo è piccolo e fa una cosa sola. Per questo l'hai potuto costruire passo dopo passo.`,
          `Les morceaux ensemble : une liste de mots, un choix au hasard, une fonction play avec la boucle, et des vérifications qui refusent tout ce qui n'est pas une nouvelle lettre. play rend True ou False, et le code principal annonce le résultat.

Remarque comme chaque morceau est petit et fait une seule chose. C'est pourquoi tu as pu le construire étape par étape.`],
        ex: {
          t: ['Add the word "snake" to the list and run the game once more (the rest stays the same). The program must still end.', 'Aggiungi una parola alla lista e riesegui il gioco (il resto resta uguale). Il programma deve comunque finire.', 'Ajoute un mot à la liste et relance le jeu (le reste ne change pas). Le programme doit quand même finir.'],
          h: ['Add one more word inside the square brackets of WORDS.', 'Aggiungi una parola dentro le parentesi quadre di WORDS.', 'Ajoute un mot dans les crochets de WORDS.'],
          start: 'WORDS = ["python", "pyviel"]\nprint(len(WORDS))', sol: 'WORDS = ["python", "pyviel", "snake"]\nprint(len(WORDS))', out: '3', c: 'snake'
        }
      }
    ]
  },
  {
    title: ['Project 3: A to-do list that remembers', 'Progetto 3: Una lista di cose da fare che ricorda', 'Projet 3 : Une liste de tâches qui se souvient'],
    subtitle: ['Dictionaries, functions, a menu and a file', 'Dizionari, funzioni, un menu e un file', 'Dictionnaires, fonctions, un menu et un fichier'],
    steps: [
      {
        c: [c`tasks = [
    {"title": "Learn Python", "done": False},
    {"title": "Walk the dog", "done": True},
]
for number, task in enumerate(tasks, start=1):
    mark = "x" if task["done"] else " "
    print(f"{number}. [{mark}] {task['title']}")`, c`tasks = [
    {"title": "Imparare Python", "done": False},
    {"title": "Portare fuori il cane", "done": True},
]
for number, task in enumerate(tasks, start=1):
    mark = "x" if task["done"] else " "
    print(f"{number}. [{mark}] {task['title']}")`, c`tasks = [
    {"title": "Apprendre Python", "done": False},
    {"title": "Promener le chien", "done": True},
]
for number, task in enumerate(tasks, start=1):
    mark = "x" if task["done"] else " "
    print(f"{number}. [{mark}] {task['title']}")`],
        t: ['Step 1: the data', 'Passo 1: i dati', 'Étape 1 : les données'],
        x: [`A program starts with its data. Each task is a small dictionary with a title and a done flag, and the tasks are a list of them.

The loop shows them with a number, using enumerate, and a mark: x when done, a space when not.`,
          `Un programma parte dai suoi dati. Ogni compito è un piccolo dizionario con un titolo e un segno done, e i compiti sono una lista di questi.

Il ciclo li mostra con un numero, usando enumerate, e un segno: x quando è fatto, uno spazio quando no.`,
          `Un programme commence par ses données. Chaque tâche est un petit dictionnaire avec un titre et un drapeau done, et les tâches sont une liste de ceux-ci.

La boucle les affiche avec un numéro, en utilisant enumerate, et une marque : x quand c'est fait, une espace sinon.`],
        ex: {
          uses: ['for', 'list'],
          t: ['Add a third task, not done, with the title "Read a book", and show the list.', 'Aggiungi un terzo compito, non fatto, con il titolo "Read a book", e mostra la lista.', 'Ajoute une troisième tâche, pas faite, avec le titre "Read a book", et affiche la liste.'],
          h: ['One more dictionary in the list, with a comma.', 'Un altro dizionario nella lista, con una virgola.', 'Un autre dictionnaire dans la liste, avec une virgule.'],
          start: 'tasks = [\n    {"title": "Learn Python", "done": False},\n]\nfor number, task in enumerate(tasks, start=1):\n    mark = "x" if task["done"] else " "\n    print(f"{number}. [{mark}] {task[\'title\']}")', sol: 'tasks = [\n    {"title": "Learn Python", "done": False},\n    {"title": "Read a book", "done": False},\n]\nfor number, task in enumerate(tasks, start=1):\n    mark = "x" if task["done"] else " "\n    print(f"{number}. [{mark}] {task[\'title\']}")', out: '1. [ ] Learn Python\n2. [ ] Read a book'
        }
      },
      {
        c: [c`def add_task(tasks, title):
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
show(tasks)`, c`def add_task(tasks, title):
    tasks.append({"title": title, "done": False})

def complete(tasks, number):
    if 1 <= number <= len(tasks):
        tasks[number - 1]["done"] = True
        return True
    return False

def show(tasks):
    if not tasks:
        print("Niente da fare!")
    for number, task in enumerate(tasks, start=1):
        mark = "x" if task["done"] else " "
        print(f"{number}. [{mark}] {task['title']}")

tasks = []
add_task(tasks, "Comprare il latte")
add_task(tasks, "Fare i compiti")
print(complete(tasks, 2), complete(tasks, 9))
show(tasks)`, c`def add_task(tasks, title):
    tasks.append({"title": title, "done": False})

def complete(tasks, number):
    if 1 <= number <= len(tasks):
        tasks[number - 1]["done"] = True
        return True
    return False

def show(tasks):
    if not tasks:
        print("Rien à faire !")
    for number, task in enumerate(tasks, start=1):
        mark = "x" if task["done"] else " "
        print(f"{number}. [{mark}] {task['title']}")

tasks = []
add_task(tasks, "Acheter du lait")
add_task(tasks, "Faire les devoirs")
print(complete(tasks, 2), complete(tasks, 9))
show(tasks)`],
        t: ['Step 2: one function for each action', 'Passo 2: una funzione per ogni azione', 'Étape 2 : une fonction pour chaque action'],
        x: [`Each action gets its own small function: add_task, complete and show. complete checks that the number exists, and tells with True or False whether it worked.

Because they are separate functions, you can test each one by itself, and the menu in the next step will just call them.`,
          `Ogni azione ha la sua piccola funzione: add_task, complete e show. complete controlla che il numero esista e dice con True o False se ha funzionato.

Siccome sono funzioni separate, puoi provare ognuna da sola, e il menu del passo dopo le chiamerà soltanto.`,
          `Chaque action a sa propre petite fonction : add_task, complete et show. complete vérifie que le numéro existe, et dit avec True ou False si ça a marché.

Comme ce sont des fonctions séparées, tu peux tester chacune toute seule, et le menu de l'étape suivante ne fera que les appeler.`],
        ex: {
          t: ['Add a function remove(tasks, number) that deletes the task with that number (use pop). Remove task 1 and show the number of tasks left (1).', 'Aggiungi una funzione remove(tasks, number) che cancella il compito con quel numero (usa pop). Rimuovi il compito 1 e mostra quanti compiti restano (1).', 'Ajoute une fonction remove(tasks, number) qui supprime la tâche avec ce numéro (utilise pop). Supprime la tâche 1 et affiche combien de tâches restent (1).'],
          h: ['tasks.pop(number - 1) inside remove.', 'tasks.pop(number - 1) dentro remove.', 'tasks.pop(number - 1) dans remove.'],
          sol: 'def remove(tasks, number):\n    tasks.pop(number - 1)\n\ntasks = [{"title": "a", "done": False}, {"title": "b", "done": False}]\nremove(tasks, 1)\nprint(len(tasks))', out: '1', c: 'def remove'
        }
      },
      {
        c: [c`import json, os

FILE = "demo_tasks.json"

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

tasks = []
save(tasks)
tasks.append({"title": "Finish the project", "done": False})
save(tasks)

again = load()
show(again)
print("Same data after loading:", again == tasks)`, c`import json, os

FILE = "demo_tasks.json"

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

tasks = []
save(tasks)
tasks.append({"title": "Finire il progetto", "done": False})
save(tasks)

again = load()
show(again)
print("Stessi dati dopo il caricamento:", again == tasks)`, c`import json, os

FILE = "demo_tasks.json"

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

tasks = []
save(tasks)
tasks.append({"title": "Finir le projet", "done": False})
save(tasks)

again = load()
show(again)
print("Mêmes données après le chargement :", again == tasks)`],
        t: ['Step 3: remember between runs', 'Passo 3: ricorda tra un\'esecuzione e l\'altra', 'Étape 3 : se souvenir d\'une exécution à l\'autre'],
        x: [`A to-do list is only useful if it remembers. Two functions do it, with what you learned about files: load reads the tasks from a JSON file (or gives an empty list if there is no file yet), and save writes them.

Call save after every change, and call load once at the start. The last line proves that what was saved is what you get back.`,
          `Una lista di cose da fare serve solo se ricorda. Due funzioni lo fanno, con quello che hai imparato sui file: load legge i compiti da un file JSON (o dà una lista vuota se il file non c'è ancora) e save li scrive.

Chiama save dopo ogni modifica e load una volta all'inizio. L'ultima riga dimostra che quello che è stato salvato è quello che ti torna.`,
          `Une liste de tâches n'est utile que si elle se souvient. Deux fonctions le font, avec ce que tu as appris sur les fichiers : load lit les tâches dans un fichier JSON (ou donne une liste vide s'il n'y a pas encore de fichier) et save les écrit.

Appelle save après chaque changement, et load une fois au début. La dernière ligne prouve que ce qui a été enregistré est ce que tu récupères.`],
        ex: {
          t: ['Save the list [{"title": "x", "done": true}] with the function save, load it again with load, and show the title of the first task (x).', 'Salva la lista [{"title": "x", "done": true}] con la funzione save, ricaricala con load e mostra il titolo del primo compito (x).', 'Enregistre la liste [{"title": "x", "done": true}] avec la fonction save, recharge-la avec load et affiche le titre de la première tâche (x).'],
          h: ['save([...]) then print(load()[0]["title"]).', 'save([...]) poi print(load()[0]["title"]).', 'save([...]) puis print(load()[0]["title"]).'],
          start: 'import json, os\n\nFILE = "demo_tasks2.json"\n\ndef load():\n    if os.path.exists(FILE):\n        with open(FILE) as f:\n            return json.load(f)\n    return []\n\ndef save(tasks):\n    with open(FILE, "w") as f:\n        json.dump(tasks, f)', sol: 'import json, os\n\nFILE = "demo_tasks2.json"\n\ndef load():\n    if os.path.exists(FILE):\n        with open(FILE) as f:\n            return json.load(f)\n    return []\n\ndef save(tasks):\n    with open(FILE, "w") as f:\n        json.dump(tasks, f)\n\nsave([{"title": "x", "done": True}])\nprint(load()[0]["title"])', out: 'x', c: 'save\\(\\['
        }
      },
      {
        c: [c`import json, os

FILE = "demo_todo.json"

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
    tasks = []
    save(tasks)
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

main()`, c`import json, os

FILE = "demo_todo.json"

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
        print("Niente da fare!")
    for number, task in enumerate(tasks, start=1):
        mark = "x" if task["done"] else " "
        print(f"{number}. [{mark}] {task['title']}")

def ask_task_number(tasks):
    text = input("Numero: ").strip()
    if text.isdigit() and 1 <= int(text) <= len(tasks):
        return int(text) - 1
    print("Non c'è un compito così.")
    return None

def main():
    tasks = []
    save(tasks)
    while True:
        print("\n1) mostra  2) aggiungi  3) fatto  4) cancella  5) esci")
        choice = input("Scegli: ").strip()
        if choice == "1":
            show(tasks)
        elif choice == "2":
            title = input("Titolo: ").strip()
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
            print("Ciao!")
            break
        else:
            print("Scegli da 1 a 5.")

main()`, c`import json, os

FILE = "demo_todo.json"

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
        print("Rien à faire !")
    for number, task in enumerate(tasks, start=1):
        mark = "x" if task["done"] else " "
        print(f"{number}. [{mark}] {task['title']}")

def ask_task_number(tasks):
    text = input("Numéro : ").strip()
    if text.isdigit() and 1 <= int(text) <= len(tasks):
        return int(text) - 1
    print("Il n'y a pas de tâche comme ça.")
    return None

def main():
    tasks = []
    save(tasks)
    while True:
        print("\n1) afficher  2) ajouter  3) fait  4) supprimer  5) quitter")
        choice = input("Choisis : ").strip()
        if choice == "1":
            show(tasks)
        elif choice == "2":
            title = input("Titre : ").strip()
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
            print("Au revoir !")
            break
        else:
            print("Choisis de 1 à 5.")

main()`],
        n: ['is not'],
        i: {en: ['2', 'Learn Python', '2', 'Be proud', '3', '1', '3', '7', '1', '4', '2', '1', '9', '5'], it: ['2', 'Imparare Python', '2', 'Essere fieri', '3', '1', '3', '7', '1', '4', '2', '1', '9', '5'], fr: ['2', 'Apprendre Python', '2', 'Être fier', '3', '1', '3', '7', '1', '4', '2', '1', '9', '5']},
        t: ['Step 4: the finished program', 'Passo 4: il programma finito', 'Étape 4 : le programme terminé'],
        x: [`The whole program: a menu in a loop, the functions from the earlier steps, a helper that checks the number the person types, and a save after every change. In a real run you would also call load at the start, so the tasks come back next time.

Read the menu loop slowly: each choice calls one function. This is the shape of almost every small tool you will write.`,
          `Tutto il programma: un menu in un ciclo, le funzioni dei passi precedenti, un aiutante che controlla il numero che la persona scrive, e un salvataggio dopo ogni modifica. In un'esecuzione vera chiameresti anche load all'inizio, così i compiti tornano la volta dopo.

Leggi il ciclo del menu piano piano: ogni scelta chiama una funzione. È la forma di quasi ogni piccolo strumento che scriverai.`,
          `Tout le programme : un menu dans une boucle, les fonctions des étapes précédentes, un assistant qui vérifie le numéro que la personne tape, et un enregistrement après chaque changement. Dans une vraie exécution tu appellerais aussi load au début, pour que les tâches reviennent la fois suivante.

Lis la boucle du menu lentement : chaque choix appelle une fonction. C'est la forme de presque tous les petits outils que tu écriras.`],
        ex: {
          uses: ['while', 'input'],
          t: ['In this small menu, change the goodbye from Bye! to See you!, and answer 5 to quit.', 'In questo piccolo menu, cambia il saluto da Bye! a Ci vediamo!, e rispondi 5 per uscire.', 'Dans ce petit menu, change l\'au revoir de Bye! en À bientôt !, et réponds 5 pour quitter.'],
          h: ['Change only the text inside the print.', 'Cambia solo il testo dentro print.', 'Change seulement le texte dans print.'],
          start: 'while True:\n    choice = input("Choose: ")\n    if choice == "5":\n        print("Bye!")\n        break',
          sol: ['while True:\n    choice = input("Choose: ")\n    if choice == "5":\n        print("See you!")\n        break', 'while True:\n    choice = input("Choose: ")\n    if choice == "5":\n        print("Ci vediamo!")\n        break', 'while True:\n    choice = input("Choose: ")\n    if choice == "5":\n        print("À bientôt !")\n        break'],
          i: ['5'], m: ['See you!$', 'Ci vediamo!$', 'À bientôt !$']
        }
      }
    ]
  },
  {
    title: ['Project 4: A text adventure', 'Progetto 4: Un\'avventura testuale', 'Projet 4 : Une aventure textuelle'],
    subtitle: ['Maps, commands, objects and match', 'Mappe, comandi, oggetti e match', 'Cartes, commandes, objets et match'],
    steps: [
      {
        c: [c`rooms = {
    "hall": {"text": "A dusty hall.", "exits": {"north": "library", "east": "kitchen"}},
    "library": {"text": "Books everywhere.", "exits": {"south": "hall"}},
    "kitchen": {"text": "It smells of soup.", "exits": {"west": "hall"}},
}
here = "hall"
print(rooms[here]["text"])
print("Exits:", ", ".join(rooms[here]["exits"]))
here = rooms[here]["exits"]["north"]
print(rooms[here]["text"])`, c`rooms = {
    "hall": {"text": "Un atrio polveroso.", "exits": {"nord": "biblioteca", "est": "cucina"}},
    "biblioteca": {"text": "Libri dappertutto.", "exits": {"sud": "hall"}},
    "cucina": {"text": "C'è profumo di minestra.", "exits": {"ovest": "hall"}},
}
here = "hall"
print(rooms[here]["text"])
print("Uscite:", ", ".join(rooms[here]["exits"]))
here = rooms[here]["exits"]["nord"]
print(rooms[here]["text"])`, c`rooms = {
    "hall": {"text": "Un hall poussiéreux.", "exits": {"nord": "bibliothèque", "est": "cuisine"}},
    "bibliothèque": {"text": "Des livres partout.", "exits": {"sud": "hall"}},
    "cuisine": {"text": "Ça sent la soupe.", "exits": {"ouest": "hall"}},
}
here = "hall"
print(rooms[here]["text"])
print("Sorties :", ", ".join(rooms[here]["exits"]))
here = rooms[here]["exits"]["nord"]
print(rooms[here]["text"])`],
        t: ['Step 1: a map', 'Passo 1: una mappa', 'Étape 1 : une carte'],
        x: [`A text adventure is a map of rooms. A dictionary holds every room, and each room has a description and its exits: which direction leads to which room.

The variable here says where the player is. Moving is just putting a new room name in here.`,
          `Un'avventura testuale è una mappa di stanze. Un dizionario contiene ogni stanza, e ogni stanza ha una descrizione e le sue uscite: quale direzione porta a quale stanza.

La variabile here dice dove si trova il giocatore. Muoversi è solo mettere in here il nome di una stanza nuova.`,
          `Une aventure textuelle est une carte de pièces. Un dictionnaire contient chaque pièce, et chaque pièce a une description et ses sorties : quelle direction mène à quelle pièce.

La variable here dit où se trouve le joueur. Se déplacer, c'est juste mettre le nom d'une nouvelle pièce dans here.`],
        ex: {
          t: ['Add a room called attic that is reached going "up" from the hall, and show the description of the attic.', 'Aggiungi una stanza che si chiama attic raggiungibile andando "up" dalla hall e mostra la descrizione dell\'attic.', 'Ajoute une pièce qui s\'appelle attic qu\'on atteint en allant "up" depuis le hall et affiche la description du attic.'],
          h: ['A new key "attic" in rooms, and "up": "attic" in the exits of the hall.', 'Una chiave nuova "attic" in rooms e "up": "attic" nelle uscite della hall.', 'Une nouvelle clé "attic" dans rooms et "up": "attic" dans les sorties du hall.'],
          sol: 'rooms = {\n    "hall": {"text": "A hall.", "exits": {"up": "attic"}},\n    "attic": {"text": "Dusty boxes.", "exits": {"down": "hall"}},\n}\nhere = rooms["hall"]["exits"]["up"]\nprint(rooms[here]["text"])', out: 'Dusty boxes.', c: 'attic'
        }
      },
      {
        c: [c`rooms = {
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
        print("I do not understand.")`, c`rooms = {
    "hall": {"text": "Un atrio polveroso.", "exits": {"nord": "biblioteca"}},
    "biblioteca": {"text": "Libri dappertutto.", "exits": {"sud": "hall"}},
}
here = "hall"
print(rooms[here]["text"])
for command in ["vai nord", "vai ovest", "guarda", "vai sud", "balla"]:
    print(">", command)
    words = command.split()
    if words[0] == "vai":
        direction = words[1]
        if direction in rooms[here]["exits"]:
            here = rooms[here]["exits"][direction]
            print(rooms[here]["text"])
        else:
            print("Non puoi andare da quella parte.")
    elif words[0] == "guarda":
        print(rooms[here]["text"])
    else:
        print("Non capisco.")`, c`rooms = {
    "hall": {"text": "Un hall poussiéreux.", "exits": {"nord": "bibliothèque"}},
    "bibliothèque": {"text": "Des livres partout.", "exits": {"sud": "hall"}},
}
here = "hall"
print(rooms[here]["text"])
for command in ["va nord", "va ouest", "regarde", "va sud", "danse"]:
    print(">", command)
    words = command.split()
    if words[0] == "va":
        direction = words[1]
        if direction in rooms[here]["exits"]:
            here = rooms[here]["exits"][direction]
            print(rooms[here]["text"])
        else:
            print("Tu ne peux pas aller par là.")
    elif words[0] == "regarde":
        print(rooms[here]["text"])
    else:
        print("Je ne comprends pas.")`],
        t: ['Step 2: understand commands', 'Passo 2: capire i comandi', 'Étape 2 : comprendre les commandes'],
        x: [`The player types commands like "go north". split cuts the command into words: the first word is the action, the second one the direction. An if-elif chain picks what to do, and a last else answers when the command is not understood.

Here the commands come from a list, so you can see every case in one run.`,
          `Il giocatore scrive comandi come "vai nord". split taglia il comando in parole: la prima è l'azione, la seconda la direzione. Una catena if-elif sceglie cosa fare, e un else finale risponde quando il comando non è capito.

Qui i comandi vengono da una lista, così vedi ogni caso in una sola esecuzione.`,
          `Le joueur tape des commandes comme "va nord". split coupe la commande en mots : le premier est l'action, le deuxième la direction. Une chaîne if-elif choisit quoi faire, et un dernier else répond quand la commande n'est pas comprise.

Ici les commandes viennent d'une liste, donc tu vois chaque cas en une seule exécution.`],
        ex: {
          uses: ['for'],
          t: ['Change the list of commands to ["look", "dance"] and look at the two answers.', 'Cambia la lista dei comandi in ["look", "dance"] e guarda le due risposte.', 'Change la liste de commandes en ["look", "dance"] et regarde les deux réponses.'],
          h: ['Use the word "look" for looking, as in the English code.', 'Usa la parola "look" per guardare, come nel codice inglese.', 'Utilise le mot "look" pour regarder, comme dans le code anglais.'],
          start: 'here = "hall"\ntext = "A dusty hall."\nfor command in ["go north"]:\n    words = command.split()\n    if words[0] == "look":\n        print(text)\n    else:\n        print("I do not understand.")', sol: 'here = "hall"\ntext = "A dusty hall."\nfor command in ["look", "dance"]:\n    words = command.split()\n    if words[0] == "look":\n        print(text)\n    else:\n        print("I do not understand.")', out: 'A dusty hall.\nI do not understand.'
        }
      },
      {
        c: [c`class Player:
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
print(player.inventory, rooms["hall"]["items"])`, c`class Player:
    def __init__(self, room):
        self.room = room
        self.inventory = []

    def take(self, item, rooms):
        items = rooms[self.room]["items"]
        if item in items:
            items.remove(item)
            self.inventory.append(item)
            return f"Prendi: {item}."
        return f"Qui non c'è: {item}."

rooms = {"hall": {"items": ["lampada", "chiave"]}}
player = Player("hall")
print(player.take("lampada", rooms))
print(player.take("spada", rooms))
print(player.inventory, rooms["hall"]["items"])`, c`class Player:
    def __init__(self, room):
        self.room = room
        self.inventory = []

    def take(self, item, rooms):
        items = rooms[self.room]["items"]
        if item in items:
            items.remove(item)
            self.inventory.append(item)
            return f"Tu prends : {item}."
        return f"Il n'y a pas de {item} ici."

rooms = {"hall": {"items": ["lampe", "clé"]}}
player = Player("hall")
print(player.take("lampe", rooms))
print(player.take("épée", rooms))
print(player.inventory, rooms["hall"]["items"])`],
        t: ['Step 3: a player with things', 'Passo 3: un giocatore con degli oggetti', 'Étape 3 : un joueur avec des objets'],
        x: [`Now the player is an object, from a class: it knows its room and what it carries (the inventory). The method take moves an item from the room into the inventory, if the item is there, and answers with a sentence.

An object that keeps its own data is easier to extend: later you can add health, a name, or a score.`,
          `Ora il giocatore è un oggetto, di una classe: conosce la sua stanza e quello che porta (l'inventario). Il metodo take sposta un oggetto dalla stanza all'inventario, se l'oggetto c'è, e risponde con una frase.

Un oggetto che tiene i suoi dati è più facile da ampliare: dopo puoi aggiungere la salute, un nome o un punteggio.`,
          `Maintenant le joueur est un objet, d'une classe : il connaît sa pièce et ce qu'il porte (l'inventaire). La méthode take déplace un objet de la pièce vers l'inventaire, si l'objet y est, et répond par une phrase.

Un objet qui garde ses propres données est plus facile à étendre : plus tard tu peux ajouter la santé, un nom ou un score.`],
        ex: {
          t: ['Add a method count() to Player that returns how many things it carries. Take the lamp and show the count (1).', 'Aggiungi a Player un metodo count() che restituisce quante cose porta. Prendi la lampada e mostra il conteggio (1).', 'Ajoute à Player une méthode count() qui rend combien de choses il porte. Prends la lampe et affiche le compte (1).'],
          h: ['def count(self): return len(self.inventory)', 'def count(self): return len(self.inventory)', 'def count(self): return len(self.inventory)'],
          sol: 'class Player:\n    def __init__(self):\n        self.inventory = []\n\n    def count(self):\n        return len(self.inventory)\n\nplayer = Player()\nplayer.inventory.append("lamp")\nprint(player.count())', out: '1', c: 'def count'
        }
      },
      {
        c: [c`class Game:
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
        break`, c`class Game:
    def __init__(self):
        self.here = "cantina"
        self.bag = []
        self.rooms = {
            "cantina": {"text": "Una cantina umida. Una porta porta su.", "exits": {"su": "cucina"}, "items": ["torcia"]},
            "cucina": {"text": "Una cucina silenziosa. Una porta chiusa porta a est.", "exits": {"giù": "cantina", "est": "giardino"}, "items": ["chiave"]},
            "giardino": {"text": "Un giardino soleggiato. Sei libero!", "exits": {}, "items": []},
        }
        self.won = False

    def room(self):
        return self.rooms[self.here]

    def do(self, command):
        match command.lower().split():
            case ["guarda"]:
                return self.room()["text"] + " Oggetti: " + (", ".join(self.room()["items"]) or "nessuno")
            case ["prendi", item] if item in self.room()["items"]:
                self.room()["items"].remove(item)
                self.bag.append(item)
                return f"Prendi: {item}."
            case ["prendi", item]:
                return f"Qui non c'è: {item}."
            case ["vai", direction] if direction in self.room()["exits"]:
                if direction == "est" and "chiave" not in self.bag:
                    return "La porta è chiusa. Ti serve una chiave."
                self.here = self.room()["exits"][direction]
                self.won = self.here == "giardino"
                return self.room()["text"]
            case ["vai", _]:
                return "Non puoi andare da quella parte."
            case ["zaino"]:
                return "Porti: " + (", ".join(self.bag) or "niente")
            case _:
                return "Non capisco."

game = Game()
print(game.room()["text"])
script = ["vai est", "prendi torcia", "vai su", "vai est", "prendi chiave", "vai est", "zaino"]
for command in script:
    print(">", command)
    print(game.do(command))
    if game.won:
        print("*** Sei scappato! ***")
        break`, c`class Game:
    def __init__(self):
        self.here = "cave"
        self.bag = []
        self.rooms = {
            "cave": {"text": "Une cave humide. Une porte mène en haut.", "exits": {"haut": "cuisine"}, "items": ["torche"]},
            "cuisine": {"text": "Une cuisine calme. Une porte fermée mène à l'est.", "exits": {"bas": "cave", "est": "jardin"}, "items": ["clé"]},
            "jardin": {"text": "Un jardin ensoleillé. Tu es libre !", "exits": {}, "items": []},
        }
        self.won = False

    def room(self):
        return self.rooms[self.here]

    def do(self, command):
        match command.lower().split():
            case ["regarde"]:
                return self.room()["text"] + " Objets : " + (", ".join(self.room()["items"]) or "aucun")
            case ["prends", item] if item in self.room()["items"]:
                self.room()["items"].remove(item)
                self.bag.append(item)
                return f"Tu prends : {item}."
            case ["prends", item]:
                return f"Il n'y a pas de {item} ici."
            case ["va", direction] if direction in self.room()["exits"]:
                if direction == "est" and "clé" not in self.bag:
                    return "La porte est fermée. Il te faut une clé."
                self.here = self.room()["exits"][direction]
                self.won = self.here == "jardin"
                return self.room()["text"]
            case ["va", _]:
                return "Tu ne peux pas aller par là."
            case ["sac"]:
                return "Tu portes : " + (", ".join(self.bag) or "rien")
            case _:
                return "Je ne comprends pas."

game = Game()
print(game.room()["text"])
script = ["va est", "prends torche", "va haut", "va est", "prends clé", "va est", "sac"]
for command in script:
    print(">", command)
    print(game.do(command))
    if game.won:
        print("*** Tu t'es échappé ! ***")
        break`],
        t: ['Step 4: the whole adventure', 'Passo 4: l\'avventura intera', 'Étape 4 : l\'aventure entière'],
        x: [`Everything together in one class, Game: the map, the player's place and bag, and a do method that uses match to understand the commands. match can add an if to a case, so "take" only works when the item is really in the room.

The key opens the way: going east is refused until the key is in the bag. The script at the end plays a whole game and escapes.`,
          `Tutto insieme in una classe, Game: la mappa, il posto e lo zaino del giocatore, e un metodo do che usa match per capire i comandi. match può aggiungere un if a un case, così "prendi" funziona solo quando l'oggetto è davvero nella stanza.

La chiave apre la strada: andare a est viene rifiutato finché la chiave non è nello zaino. Lo script alla fine gioca una partita intera e scappa.`,
          `Tout ensemble dans une classe, Game : la carte, la place et le sac du joueur, et une méthode do qui utilise match pour comprendre les commandes. match peut ajouter un if à un case, donc "prends" ne marche que quand l'objet est vraiment dans la pièce.

La clé ouvre le chemin : aller à l'est est refusé tant que la clé n'est pas dans le sac. Le script à la fin joue une partie entière et s'échappe.`],
        ex: {
          t: ['Write a function do(words) with a match: the list ["hello"] gives back "hi", and anything else gives back "I do not understand." Show do(["hello"]).', 'Scrivi una funzione do(words) con un match: la lista ["hello"] restituisce "ciao" e qualsiasi altra cosa restituisce "Non capisco." Mostra do(["hello"]).', 'Écris une fonction do(words) avec un match : la liste ["hello"] rend "salut" et tout le reste rend "Je ne comprends pas." Affiche do(["hello"]).'],
          h: ['match words: with case ["hello"]: return ... and case _: return ...', 'match words: con case ["hello"]: return ... e case _: return ...', 'match words: avec case ["hello"]: return ... et case _: return ...'],
          sol: ['def do(words):\n    match words:\n        case ["hello"]:\n            return "hi"\n        case _:\n            return "I do not understand."\n\nprint(do(["hello"]))', 'def do(words):\n    match words:\n        case ["hello"]:\n            return "ciao"\n        case _:\n            return "Non capisco."\n\nprint(do(["hello"]))', 'def do(words):\n    match words:\n        case ["hello"]:\n            return "salut"\n        case _:\n            return "Je ne comprends pas."\n\nprint(do(["hello"]))'],
          out: ['hi', 'ciao', 'salut'], c: 'match '
        }
      }
    ]
  },
  {
    title: ['Project 5: Your own program', 'Progetto 5: Il tuo programma', 'Projet 5 : Ton propre programme'],
    subtitle: ['Plan, build, save and finish', 'Pianifica, costruisci, salva e finisci', 'Planifie, construis, enregistre et termine'],
    steps: [
      {
        c: [c`# PROJECT: Expense tracker
# 1. Keep a list of expenses (what, how much, which kind)
# 2. Show the total, and the total for each kind
# 3. Save and load from a file
# 4. Refuse bad input
print("Plan written. Now build it one step at a time.")`, c`# PROGETTO: Registro delle spese
# 1. Tieni una lista di spese (cosa, quanto, di che tipo)
# 2. Mostra il totale e il totale per ogni tipo
# 3. Salva e carica da un file
# 4. Rifiuta i dati sbagliati
print("Piano scritto. Ora costruiscilo un passo alla volta.")`, c`# PROJET : Suivi des dépenses
# 1. Garde une liste de dépenses (quoi, combien, de quel genre)
# 2. Affiche le total, et le total pour chaque genre
# 3. Enregistre et charge depuis un fichier
# 4. Refuse les mauvaises données
print("Plan écrit. Maintenant construis-le une étape à la fois.")`],
        t: ['Step 1: choose and plan', 'Passo 1: scegli e pianifica', 'Étape 1 : choisis et planifie'],
        x: [`Now it is your turn to build something. First choose an idea that you like and keep it small. Then write a plan as notes at the top of the program: what it keeps, what it does, how it saves.

This example plans an expense tracker. You can follow it, or pick your own idea: a recipe book, a quiz about your hobby, a timetable, a game of your own.`,
          `Ora tocca a te costruire qualcosa. Per prima cosa scegli un'idea che ti piace e tienila piccola. Poi scrivi un piano come note in cima al programma: cosa tiene, cosa fa, come salva.

Questo esempio pianifica un registro delle spese. Lo puoi seguire, o scegliere un'idea tua: un libro di ricette, un quiz sul tuo hobby, un orario, un gioco tuo.`,
          `C'est maintenant à toi de construire quelque chose. D'abord choisis une idée qui te plaît et garde-la petite. Puis écris un plan sous forme de notes en haut du programme : ce qu'il garde, ce qu'il fait, comment il enregistre.

Cet exemple planifie un suivi de dépenses. Tu peux le suivre, ou choisir ton idée : un livre de recettes, un quiz sur ton passe-temps, un emploi du temps, un jeu à toi.`],
        ex: {
          t: ['Write your own plan: three comment lines (starting with #) that say what your program will do, and then a print line.', 'Scrivi il tuo piano: tre righe di commento (che iniziano con #) che dicono cosa farà il tuo programma, e poi una riga print.', 'Écris ton propre plan : trois lignes de commentaire (qui commencent par #) qui disent ce que fera ton programme, puis une ligne print.'],
          h: ['# one idea per line, then print("...").', '# un\'idea per riga, poi print("...").', '# une idée par ligne, puis print("...").'],
          sol: '# PROJECT: Recipe book\n# 1. Keep recipes\n# 2. Show a recipe\nprint("Plan written.")', m: 'Plan', c: '#[\\s\\S]*#[\\s\\S]*#'
        }
      },
      {
        c: [c`from dataclasses import dataclass

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
    return sum([e.amount for e in items])

def by_kind(items):
    result = {}
    for e in items:
        result[e.kind] = result.get(e.kind, 0) + e.amount
    return result

print(f"Total: {total(expenses):.2f}")
for kind, amount in sorted(by_kind(expenses).items()):
    print(f"{kind:>8}: {amount:6.2f}")`, c`from dataclasses import dataclass

@dataclass
class Expense:
    what: str
    amount: float
    kind: str

expenses = [
    Expense("biglietto dell'autobus", 2.5, "viaggi"),
    Expense("pranzo", 7.0, "cibo"),
    Expense("libro", 12.0, "svago"),
    Expense("merenda", 1.5, "cibo"),
]

def total(items):
    return sum([e.amount for e in items])

def by_kind(items):
    result = {}
    for e in items:
        result[e.kind] = result.get(e.kind, 0) + e.amount
    return result

print(f"Totale: {total(expenses):.2f}")
for kind, amount in sorted(by_kind(expenses).items()):
    print(f"{kind:>8}: {amount:6.2f}")`, c`from dataclasses import dataclass

@dataclass
class Expense:
    what: str
    amount: float
    kind: str

expenses = [
    Expense("ticket de bus", 2.5, "voyage"),
    Expense("déjeuner", 7.0, "repas"),
    Expense("livre", 12.0, "loisir"),
    Expense("goûter", 1.5, "repas"),
]

def total(items):
    return sum([e.amount for e in items])

def by_kind(items):
    result = {}
    for e in items:
        result[e.kind] = result.get(e.kind, 0) + e.amount
    return result

print(f"Total : {total(expenses):.2f}")
for kind, amount in sorted(by_kind(expenses).items()):
    print(f"{kind:>8}: {amount:6.2f}")`],
        t: ['Step 2: the data and the sums', 'Passo 2: i dati e i conti', 'Étape 2 : les données et les calculs'],
        x: [`Start with the data: a dataclass for one expense, and a list of them. Then the two sums that the plan asked for: the total, and the total for each kind, built with a dictionary and get, like the word counting.

f"{kind:>8}" and f"{amount:6.2f}" line up the columns, so the table looks neat.`,
          `Parti dai dati: una dataclass per una spesa e una lista di spese. Poi i due conti che il piano chiedeva: il totale e il totale per ogni tipo, costruito con un dizionario e get, come il conteggio delle parole.

f"{kind:>8}" e f"{amount:6.2f}" allineano le colonne, così la tabella è ordinata.`,
          `Commence par les données : une dataclass pour une dépense, et une liste de dépenses. Puis les deux calculs que le plan demandait : le total, et le total pour chaque genre, construit avec un dictionnaire et get, comme le comptage des mots.

f"{kind:>8}" et f"{amount:6.2f}" alignent les colonnes, donc le tableau est net.`],
        ex: {
          t: ['Add one more expense, "pen" for 1.0 of kind "fun", and show only the total (it must end with 25.00).', 'Aggiungi un\'altra spesa, "pen" per 1.0 di tipo "fun", e mostra solo il totale.', 'Ajoute une dépense de plus, "pen" pour 1.0 de genre "fun", et affiche seulement le total.'],
          h: ['One more Expense(...) in the list, then print the total.', 'Un altro Expense(...) nella lista, poi mostra il totale.', 'Un autre Expense(...) dans la liste, puis affiche le total.'],
          start: 'from dataclasses import dataclass\n\n@dataclass\nclass Expense:\n    what: str\n    amount: float\n    kind: str\n\nexpenses = [Expense("bus", 2.5, "travel"), Expense("lunch", 7.0, "food")]\nprint(sum([e.amount for e in expenses]))', sol: 'from dataclasses import dataclass\n\n@dataclass\nclass Expense:\n    what: str\n    amount: float\n    kind: str\n\nexpenses = [Expense("bus", 2.5, "travel"), Expense("lunch", 7.0, "food"), Expense("pen", 1.0, "fun")]\nprint(sum([e.amount for e in expenses]))', out: '10.5', c: 'pen'
        }
      },
      {
        c: [c`from dataclasses import dataclass, asdict
import json, os

@dataclass
class Expense:
    what: str
    amount: float
    kind: str

FILE = "demo_expenses.json"

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
        raise ValueError(f"{text} is not a number")
    if amount <= 0:
        raise ValueError("the amount must be more than zero")
    return amount

save([Expense("lunch", 7.0, "food")])
print(load())
for text in ["3,50", "abc", "-4"]:
    try:
        print(parse_amount(text))
    except ValueError as error:
        print("Refused:", error)`, c`from dataclasses import dataclass, asdict
import json, os

@dataclass
class Expense:
    what: str
    amount: float
    kind: str

FILE = "demo_expenses.json"

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
        raise ValueError(f"{text} non è un numero")
    if amount <= 0:
        raise ValueError("l'importo deve essere più di zero")
    return amount

save([Expense("pranzo", 7.0, "cibo")])
print(load())
for text in ["3,50", "abc", "-4"]:
    try:
        print(parse_amount(text))
    except ValueError as error:
        print("Rifiutato:", error)`, c`from dataclasses import dataclass, asdict
import json, os

@dataclass
class Expense:
    what: str
    amount: float
    kind: str

FILE = "demo_expenses.json"

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
        raise ValueError(f"{text} n'est pas un nombre")
    if amount <= 0:
        raise ValueError("le montant doit être supérieur à zéro")
    return amount

save([Expense("déjeuner", 7.0, "repas")])
print(load())
for text in ["3,50", "abc", "-4"]:
    try:
        print(parse_amount(text))
    except ValueError as error:
        print("Refusé :", error)`],
        n: ['dataclasses.asdict'],
        t: ['Step 3: save, load and refuse bad input', 'Passo 3: salva, carica e rifiuta i dati sbagliati', 'Étape 3 : enregistre, charge et refuse les mauvaises données'],
        x: [`Saving and loading use JSON. A dataclass is not JSON by itself: asdict turns an object into a dictionary, and Expense(**item) builds an object back from a dictionary, where the two stars spread the dictionary into named values.

parse_amount refuses bad input in the way a real program should: it raises a ValueError with a clear message, and the code that calls it catches the error. Notice that it also accepts a comma, like 3,50.`,
          `Salvare e caricare usano JSON. Una dataclass non è JSON da sola: asdict trasforma un oggetto in un dizionario, e Expense(**item) ricostruisce un oggetto da un dizionario, dove le due stelle spandono il dizionario in valori con nome.

parse_amount rifiuta i dati sbagliati come dovrebbe fare un programma vero: alza un ValueError con un messaggio chiaro e il codice che lo chiama prende l'errore. Nota che accetta anche la virgola, come 3,50.`,
          `Enregistrer et charger utilisent JSON. Une dataclass n'est pas du JSON toute seule : asdict transforme un objet en dictionnaire, et Expense(**item) reconstruit un objet à partir d'un dictionnaire, où les deux étoiles étalent le dictionnaire en valeurs nommées.

parse_amount refuse les mauvaises données comme le ferait un vrai programme : il lève une ValueError avec un message clair, et le code qui l'appelle attrape l'erreur. Remarque qu'il accepte aussi la virgule, comme 3,50.`],
        ex: {
          t: ['Use parse_amount to show the amount 12,5 as a number (12.5).', 'Usa parse_amount per mostrare l\'importo 12,5 come numero (12.5).', 'Utilise parse_amount pour afficher le montant 12,5 comme nombre (12.5).'],
          h: ['parse_amount takes the amount as text, with its comma, and gives back a number.', 'parse_amount prende l\'importo come testo, con la sua virgola, e restituisce un numero.', 'parse_amount prend le montant comme texte, avec sa virgule, et rend un nombre.'],
          start: 'def parse_amount(text):\n    try:\n        amount = float(text.replace(",", "."))\n    except ValueError:\n        raise ValueError(text + " is not a number")\n    if amount <= 0:\n        raise ValueError("the amount must be more than zero")\n    return amount', sol: 'def parse_amount(text):\n    try:\n        amount = float(text.replace(",", "."))\n    except ValueError:\n        raise ValueError(text + " is not a number")\n    if amount <= 0:\n        raise ValueError("the amount must be more than zero")\n    return amount\n\nprint(parse_amount("12,5"))', out: '12.5', c: 'parse_amount\\("12,5"\\)'
        }
      },
      {
        c: [c`from datetime import date

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
print(f"You met {total} big ideas, and built 5 programs.")
print("Now go and build something that is yours.")`, c`from datetime import date

SKILLS = {
    "basi": ["print", "variabili", "numeri", "input", "if", "cicli", "liste"],
    "dati": ["metodi del testo", "tuple", "dizionari", "insiemi", "funzioni", "ricorsione"],
    "linguaggio": ["moduli", "file", "eccezioni", "json", "regex", "test"],
    "oggetti": ["classi", "ereditarietà", "generatori", "decoratori", "async"],
}

name = input("Il tuo nome: ")
print("=" * 44)
print(f"  CERTIFICATO: {name} sa Python")
print("=" * 44)
total = 0
for stage, topics in SKILLS.items():
    total += len(topics)
    print(f"{stage.title():>10}: {', '.join(topics[:3])}...")
print(f"Hai incontrato {total} grandi idee e costruito 5 programmi.")
print("Ora vai a costruire qualcosa che sia tuo.")`, c`from datetime import date

SKILLS = {
    "bases": ["print", "variables", "nombres", "input", "if", "boucles", "listes"],
    "données": ["méthodes de texte", "tuples", "dictionnaires", "ensembles", "fonctions", "récursion"],
    "langage": ["modules", "fichiers", "exceptions", "json", "regex", "tests"],
    "objets": ["classes", "héritage", "générateurs", "décorateurs", "async"],
}

name = input("Ton prénom : ")
print("=" * 44)
print(f"  CERTIFICAT : {name} connaît Python")
print("=" * 44)
total = 0
for stage, topics in SKILLS.items():
    total += len(topics)
    print(f"{stage.title():>10}: {', '.join(topics[:3])}...")
print(f"Tu as rencontré {total} grandes idées et construit 5 programmes.")
print("Maintenant va construire quelque chose qui soit à toi.")`],
        i: ['Ada'],
        t: ['Step 4: the end, and the start', 'Passo 4: la fine, e l\'inizio', 'Étape 4 : la fin, et le début'],
        x: [`You reached the end. This little program uses a dictionary of lists, a loop, an f-string with format, and input: a bit of everything that you learned.

You know Python now: the basics, data, functions, files, errors, objects, generators, decorators, tests and more. What is left is practice. Build something every week, read other people's code, and never be afraid of an error message. You can read them now.`,
          `Sei arrivato alla fine. Questo piccolo programma usa un dizionario di liste, un ciclo, una f-string con formato e input: un po' di tutto quello che hai imparato.

Ora conosci Python: le basi, i dati, le funzioni, i file, gli errori, gli oggetti, i generatori, i decoratori, i test e altro. Quello che resta è la pratica. Costruisci qualcosa ogni settimana, leggi il codice degli altri e non aver mai paura di un messaggio d'errore. Ora li sai leggere.`,
          `Tu es arrivé à la fin. Ce petit programme utilise un dictionnaire de listes, une boucle, une f-string avec format et input : un peu de tout ce que tu as appris.

Tu connais Python maintenant : les bases, les données, les fonctions, les fichiers, les erreurs, les objets, les générateurs, les décorateurs, les tests et plus. Ce qui reste, c'est la pratique. Construis quelque chose chaque semaine, lis le code des autres et n'aie jamais peur d'un message d'erreur. Tu sais les lire maintenant.`],
        ex: {
          t: ['Make your own certificate: show a line with the word CERTIFICATE and your own name in it.', 'Fai il tuo certificato: mostra una riga con la parola CERTIFICATE e il tuo nome dentro.', 'Fais ton propre certificat : affiche une ligne avec le mot CERTIFICATE et ton propre prénom dedans.'],
          h: ['An f-string with {name} inside the text.', 'Una f-string con {name} dentro il testo.', 'Une f-string avec {name} dans le texte.'],
          sol: 'name = "Ada"\nprint(f"CERTIFICATE: {name} knows Python")', m: 'CERTIFICATE', c: 'f"'
        }
      }
    ]
  }
];
