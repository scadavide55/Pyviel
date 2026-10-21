/* The example programs of the Examples tab, in three languages.
   Only the words people read are translated (texts, comments); names in the code stay English.
   Each example: id, file (the name it gets in the editor), group, title and about [en, it, fr],
   code [en, it, fr], and i: the answers that tools/check-examples.js types when it runs it.
   Adding an example means adding it here: the list, the menu and the file name all come from this file. */
(function () {
  'use strict';
  var c = String.raw;

  var GROUPS = {
    start: ['First steps', 'Primi passi', 'Premiers pas'],
    games: ['Games', 'Giochi', 'Jeux'],
    maths: ['Numbers and maths', 'Numeri e matematica', 'Nombres et maths'],
    text: ['Playing with text', 'Giocare con il testo', 'Jouer avec le texte'],
    drawing: ['Drawing with text', 'Disegnare con il testo', 'Dessiner avec du texte'],
    data: ['Lists and data', 'Liste e dati', 'Listes et données'],
    objects: ['Your own objects', 'I tuoi oggetti', 'Tes propres objets'],
    tools: ['Useful little tools', 'Piccoli strumenti utili', 'Petits outils utiles']
  };

  var EXAMPLES = [
    // ---- First steps
    {id: 'hello', file: 'hello.py', group: 'start',
      title: ['Hello', 'Ciao', 'Bonjour'], about: ['Say hello', 'Saluta', 'Dire bonjour'],
      code: [c`print("Hello!")
print("My first Python program")
`, c`print("Ciao!")
print("Il mio primo programma in Python")
`, c`print("Bonjour !")
print("Mon premier programme en Python")
`]},
    {id: 'questions', file: 'questions.py', group: 'start', i: ['Ada'],
      title: ['A question', 'Una domanda', 'Une question'], about: ['Ask a name', 'Chiedi un nome', 'Demander un prénom'],
      code: [c`name = input("What is your name? ")
print("Hello", name)
`, c`name = input("Come ti chiami? ")
print("Ciao", name)
`, c`name = input("Comment t'appelles-tu ? ")
print("Bonjour", name)
`]},
    {id: 'age', file: 'age.py', group: 'start', i: ['15'],
      title: ['Under or over', 'Sotto o sopra', 'Moins ou plus'], about: ['Are you 18 yet?', 'Hai già 18 anni?', 'As-tu déjà 18 ans ?'],
      code: [c`age = int(input("How old are you? "))
if age < 18:
    print("Under 18")
elif age == 18:
    print("Exactly 18")
else:
    print("Over 18")
`, c`age = int(input("Quanti anni hai? "))
if age < 18:
    print("Meno di 18")
elif age == 18:
    print("Esattamente 18")
else:
    print("Più di 18")
`, c`age = int(input("Quel âge as-tu ? "))
if age < 18:
    print("Moins de 18")
elif age == 18:
    print("Exactement 18")
else:
    print("Plus de 18")
`]},
    {id: 'loop', file: 'times_table.py', group: 'start',
      title: ['Times table', 'Tabellina', 'Table de multiplication'], about: ['Counting with a loop', 'Contare con un ciclo', 'Compter avec une boucle'],
      code: [c`for i in range(1, 11):
    print(i, "x 7 =", i * 7)
`, c`for i in range(1, 11):
    print(i, "x 7 =", i * 7)
`, c`for i in range(1, 11):
    print(i, "x 7 =", i * 7)
`]},
    {id: 'lists', file: 'pets.py', group: 'start',
      title: ['A list of pets', 'Una lista di animali', 'Une liste d\'animaux'], about: ['Many things in one', 'Tante cose in una', 'Plusieurs choses en une'],
      code: [c`pets = ["cat", "dog", "fox"]
for pet in pets:
    print(pet.upper())
print("How many:", len(pets))
`, c`pets = ["gatto", "cane", "volpe"]
for pet in pets:
    print(pet.upper())
print("Quanti:", len(pets))
`, c`pets = ["chat", "chien", "renard"]
for pet in pets:
    print(pet.upper())
print("Combien :", len(pets))
`]},
    {id: 'functions', file: 'functions.py', group: 'start',
      title: ['Your own functions', 'Le tue funzioni', 'Tes propres fonctions'], about: ['def and return', 'def e return', 'def et return'],
      code: [c`def greet(name):
    return "Hello " + name + "!"

print(greet("Ada"))
print(greet("Luca"))
`, c`def greet(name):
    return "Ciao " + name + "!"

print(greet("Ada"))
print(greet("Luca"))
`, c`def greet(name):
    return "Bonjour " + name + " !"

print(greet("Ada"))
print(greet("Luca"))
`]},
    {id: 'errors', file: 'mistakes.py', group: 'start', error: true,
      title: ['Mistakes', 'Errori', 'Erreurs'], about: ['See what a mistake looks like', 'Guarda com\'è fatto un errore', 'Voir à quoi ressemble une erreur'],
      code: [c`print("Before")
print(pirnt)
print("After")
`, c`print("Prima")
print(pirnt)
print("Dopo")
`, c`print("Avant")
print(pirnt)
print("Après")
`]},

    // ---- Games
    {id: 'guess', file: 'guess_the_number.py', group: 'games', i: ['50', '25', '75'],
      title: ['Guess the number', 'Indovina il numero', 'Devine le nombre'], about: ['The computer thinks, you guess', 'Il computer pensa, tu indovini', 'L\'ordinateur pense, tu devines'],
      code: [c`import random

secret = random.randint(1, 100)
tries = 0
print("I am thinking of a number from 1 to 100.")
while True:
    guess = int(input("Your guess: "))
    tries += 1
    if guess < secret:
        print("Higher!")
    elif guess > secret:
        print("Lower!")
    else:
        print(f"Yes! {secret} in {tries} tries.")
        break
`, c`import random

secret = random.randint(1, 100)
tries = 0
print("Sto pensando a un numero da 1 a 100.")
while True:
    guess = int(input("Il tuo tentativo: "))
    tries += 1
    if guess < secret:
        print("Più alto!")
    elif guess > secret:
        print("Più basso!")
    else:
        print(f"Sì! {secret} in {tries} tentativi.")
        break
`, c`import random

secret = random.randint(1, 100)
tries = 0
print("Je pense à un nombre de 1 à 100.")
while True:
    guess = int(input("Ton essai : "))
    tries += 1
    if guess < secret:
        print("Plus grand !")
    elif guess > secret:
        print("Plus petit !")
    else:
        print(f"Oui ! {secret} en {tries} essais.")
        break
`]},
    {id: 'rps', file: 'rock_paper_scissors.py', group: 'games', i: ['rock'],
      title: ['Rock, paper, scissors', 'Sasso, carta, forbici', 'Pierre, feuille, ciseaux'], about: ['One round against the computer', 'Una partita contro il computer', 'Une manche contre l\'ordinateur'],
      code: [c`import random

choices = ["rock", "paper", "scissors"]
beats = {"rock": "scissors", "paper": "rock", "scissors": "paper"}

you = input("rock, paper or scissors? ").strip().lower()
computer = random.choice(choices)
print("The computer chose", computer)

if you not in choices:
    print("That is not one of the three.")
elif you == computer:
    print("A draw!")
elif beats[you] == computer:
    print("You win!")
else:
    print("The computer wins.")
`, c`import random

choices = ["sasso", "carta", "forbici"]
beats = {"sasso": "forbici", "carta": "sasso", "forbici": "carta"}

you = input("sasso, carta o forbici? ").strip().lower()
computer = random.choice(choices)
print("Il computer ha scelto", computer)

if you not in choices:
    print("Non è una delle tre.")
elif you == computer:
    print("Pareggio!")
elif beats[you] == computer:
    print("Hai vinto!")
else:
    print("Vince il computer.")
`, c`import random

choices = ["pierre", "feuille", "ciseaux"]
beats = {"pierre": "ciseaux", "feuille": "pierre", "ciseaux": "feuille"}

you = input("pierre, feuille ou ciseaux ? ").strip().lower()
computer = random.choice(choices)
print("L'ordinateur a choisi", computer)

if you not in choices:
    print("Ce n'est pas l'un des trois.")
elif you == computer:
    print("Égalité !")
elif beats[you] == computer:
    print("Tu as gagné !")
else:
    print("L'ordinateur gagne.")
`]},
    {id: 'dice', file: 'dice.py', group: 'games',
      title: ['Roll the dice', 'Tira i dadi', 'Lance les dés'], about: ['Ten throws of two dice', 'Dieci lanci di due dadi', 'Dix lancers de deux dés'],
      code: [c`import random

best = 0
for throw in range(1, 11):
    a = random.randint(1, 6)
    b = random.randint(1, 6)
    total = a + b
    print(f"Throw {throw}: {a} + {b} = {total}")
    if total > best:
        best = total
print("Best throw:", best)
`, c`import random

best = 0
for throw in range(1, 11):
    a = random.randint(1, 6)
    b = random.randint(1, 6)
    total = a + b
    print(f"Lancio {throw}: {a} + {b} = {total}")
    if total > best:
        best = total
print("Lancio migliore:", best)
`, c`import random

best = 0
for throw in range(1, 11):
    a = random.randint(1, 6)
    b = random.randint(1, 6)
    total = a + b
    print(f"Lancer {throw} : {a} + {b} = {total}")
    if total > best:
        best = total
print("Meilleur lancer :", best)
`]},
    {id: 'quiz', file: 'quiz.py', group: 'games', i: ['Paris', '4', 'blue'],
      title: ['A small quiz', 'Un piccolo quiz', 'Un petit quiz'], about: ['Questions in a dictionary', 'Domande in un dizionario', 'Des questions dans un dictionnaire'],
      code: [c`questions = {
    "Capital of France?": "paris",
    "2 + 2?": "4",
    "Colour of the sky?": "blue",
}
score = 0
for question, answer in questions.items():
    given = input(question + " ")
    if given.strip().lower() == answer:
        print("Right!")
        score += 1
    else:
        print("No, it was", answer)
print(f"You scored {score} out of {len(questions)}.")
`, c`questions = {
    "Capitale della Francia?": "parigi",
    "2 + 2?": "4",
    "Colore del cielo?": "blu",
}
score = 0
for question, answer in questions.items():
    given = input(question + " ")
    if given.strip().lower() == answer:
        print("Giusto!")
        score += 1
    else:
        print("No, era", answer)
print(f"Hai fatto {score} punti su {len(questions)}.")
`, c`questions = {
    "Capitale de la France ?": "paris",
    "2 + 2 ?": "4",
    "Couleur du ciel ?": "bleu",
}
score = 0
for question, answer in questions.items():
    given = input(question + " ")
    if given.strip().lower() == answer:
        print("Juste !")
        score += 1
    else:
        print("Non, c'était", answer)
print(f"Tu as {score} points sur {len(questions)}.")
`]},
    {id: 'coin', file: 'coin_flips.py', group: 'games',
      title: ['Flip a coin', 'Lancia una moneta', 'Pile ou face'], about: ['A hundred flips, counted', 'Cento lanci, contati', 'Cent lancers, comptés'],
      code: [c`import random

heads = 0
for flip in range(100):
    if random.choice(["heads", "tails"]) == "heads":
        heads += 1
print("Heads:", heads)
print("Tails:", 100 - heads)
print("Almost half each, but rarely exactly 50.")
`, c`import random

heads = 0
for flip in range(100):
    if random.choice(["testa", "croce"]) == "testa":
        heads += 1
print("Testa:", heads)
print("Croce:", 100 - heads)
print("Circa metà ciascuno, ma raramente proprio 50.")
`, c`import random

heads = 0
for flip in range(100):
    if random.choice(["pile", "face"]) == "pile":
        heads += 1
print("Pile :", heads)
print("Face :", 100 - heads)
print("Presque la moitié chacun, mais rarement 50 pile.")
`]},

    // ---- Numbers and maths
    {id: 'fizzbuzz', file: 'fizzbuzz.py', group: 'maths',
      title: ['FizzBuzz', 'FizzBuzz', 'FizzBuzz'], about: ['The classic counting game', 'Il classico gioco del contare', 'Le grand classique pour compter'],
      code: [c`# Say Fizz for multiples of 3, Buzz for multiples of 5, FizzBuzz for both.
for n in range(1, 21):
    if n % 15 == 0:
        print("FizzBuzz")
    elif n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)
`, c`# Di' Fizz per i multipli di 3, Buzz per i multipli di 5, FizzBuzz per tutti e due.
for n in range(1, 21):
    if n % 15 == 0:
        print("FizzBuzz")
    elif n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)
`, c`# Dis Fizz pour les multiples de 3, Buzz pour ceux de 5, FizzBuzz pour les deux.
for n in range(1, 21):
    if n % 15 == 0:
        print("FizzBuzz")
    elif n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)
`]},
    {id: 'primes', file: 'primes.py', group: 'maths',
      title: ['Prime numbers', 'Numeri primi', 'Nombres premiers'], about: ['Find them up to 100', 'Trovali fino a 100', 'Les trouver jusqu\'à 100'],
      code: [c`def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

primes = [n for n in range(1, 101) if is_prime(n)]
print(primes)
print("There are", len(primes), "primes up to 100.")
`, c`def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

primes = [n for n in range(1, 101) if is_prime(n)]
print(primes)
print("Ci sono", len(primes), "numeri primi fino a 100.")
`, c`def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

primes = [n for n in range(1, 101) if is_prime(n)]
print(primes)
print("Il y a", len(primes), "nombres premiers jusqu'à 100.")
`]},
    {id: 'fibonacci', file: 'fibonacci.py', group: 'maths',
      title: ['Fibonacci', 'Fibonacci', 'Fibonacci'], about: ['Each number is the sum of the two before', 'Ogni numero è la somma dei due prima', 'Chaque nombre est la somme des deux d\'avant'],
      code: [c`a, b = 0, 1
for i in range(15):
    print(a, end=" ")
    a, b = b, a + b
print()
print("They grow almost 1.618 times each step.")
`, c`a, b = 0, 1
for i in range(15):
    print(a, end=" ")
    a, b = b, a + b
print()
print("Crescono di quasi 1,618 volte a ogni passo.")
`, c`a, b = 0, 1
for i in range(15):
    print(a, end=" ")
    a, b = b, a + b
print()
print("Ils grandissent de presque 1,618 fois à chaque pas.")
`]},
    {id: 'average', file: 'average.py', group: 'maths', i: ['7', '8', '6.5', ''],
      title: ['Average of marks', 'Media dei voti', 'Moyenne des notes'], about: ['Type numbers, an empty line to stop', 'Scrivi numeri, una riga vuota per finire', 'Tape des nombres, une ligne vide pour finir'],
      code: [c`marks = []
while True:
    text = input("A mark (empty to stop): ")
    if text == "":
        break
    marks.append(float(text))

if marks:
    print(f"{len(marks)} marks, average {sum(marks) / len(marks):.2f}")
    print("Best:", max(marks), "Worst:", min(marks))
else:
    print("No marks.")
`, c`marks = []
while True:
    text = input("Un voto (vuoto per finire): ")
    if text == "":
        break
    marks.append(float(text))

if marks:
    print(f"{len(marks)} voti, media {sum(marks) / len(marks):.2f}")
    print("Migliore:", max(marks), "Peggiore:", min(marks))
else:
    print("Nessun voto.")
`, c`marks = []
while True:
    text = input("Une note (vide pour finir) : ")
    if text == "":
        break
    marks.append(float(text))

if marks:
    print(f"{len(marks)} notes, moyenne {sum(marks) / len(marks):.2f}")
    print("Meilleure :", max(marks), "Pire :", min(marks))
else:
    print("Aucune note.")
`]},
    {id: 'temperature', file: 'temperature.py', group: 'maths',
      title: ['Celsius and Fahrenheit', 'Celsius e Fahrenheit', 'Celsius et Fahrenheit'], about: ['A conversion table', 'Una tabella di conversione', 'Un tableau de conversion'],
      code: [c`print("Celsius  Fahrenheit")
for celsius in range(-10, 41, 10):
    fahrenheit = celsius * 9 / 5 + 32
    print(f"{celsius:>7}  {fahrenheit:>10.1f}")
`, c`print("Celsius  Fahrenheit")
for celsius in range(-10, 41, 10):
    fahrenheit = celsius * 9 / 5 + 32
    print(f"{celsius:>7}  {fahrenheit:>10.1f}")
`, c`print("Celsius  Fahrenheit")
for celsius in range(-10, 41, 10):
    fahrenheit = celsius * 9 / 5 + 32
    print(f"{celsius:>7}  {fahrenheit:>10.1f}")
`]},
    {id: 'piggybank', file: 'savings.py', group: 'maths',
      title: ['Savings that grow', 'Risparmi che crescono', 'Des économies qui grandissent'], about: ['Interest year after year', 'Interessi anno dopo anno', 'Les intérêts année après année'],
      code: [c`money = 100.0
rate = 0.05
for year in range(1, 11):
    money = money * (1 + rate)
    print(f"Year {year:2}: {money:8.2f}")
print("Doubling takes about", round(72 / (rate * 100)), "years.")
`, c`money = 100.0
rate = 0.05
for year in range(1, 11):
    money = money * (1 + rate)
    print(f"Anno {year:2}: {money:8.2f}")
print("Per raddoppiare servono circa", round(72 / (rate * 100)), "anni.")
`, c`money = 100.0
rate = 0.05
for year in range(1, 11):
    money = money * (1 + rate)
    print(f"Année {year:2} : {money:8.2f}")
print("Pour doubler il faut environ", round(72 / (rate * 100)), "ans.")
`]},

    // ---- Playing with text
    {id: 'palindrome', file: 'palindrome.py', group: 'text', i: ['Never odd or even'],
      title: ['Palindromes', 'Palindromi', 'Palindromes'], about: ['Does it read the same backwards?', 'Si legge uguale al contrario?', 'Se lit-il pareil à l\'envers ?'],
      code: [c`text = input("A word or a sentence: ")
letters = "".join(ch.lower() for ch in text if ch.isalnum())
if letters == letters[::-1]:
    print("Yes, it reads the same backwards!")
else:
    print("No. Backwards it is:", text[::-1])
`, c`text = input("Una parola o una frase: ")
letters = "".join(ch.lower() for ch in text if ch.isalnum())
if letters == letters[::-1]:
    print("Sì, si legge uguale al contrario!")
else:
    print("No. Al contrario è:", text[::-1])
`, c`text = input("Un mot ou une phrase : ")
letters = "".join(ch.lower() for ch in text if ch.isalnum())
if letters == letters[::-1]:
    print("Oui, ça se lit pareil à l'envers !")
else:
    print("Non. À l'envers c'est :", text[::-1])
`]},
    {id: 'wordcount', file: 'word_count.py', group: 'text',
      title: ['Count the words', 'Conta le parole', 'Compte les mots'], about: ['Which words come back most', 'Quali parole tornano di più', 'Quels mots reviennent le plus'],
      code: [c`text = """the cat saw the dog and the dog saw the cat
then the cat ran"""

counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1

print("Words:", len(text.split()))
for word, n in sorted(counts.items(), key=lambda pair: -pair[1])[:3]:
    print(word, n)
`, c`text = """il gatto vide il cane e il cane vide il gatto
poi il gatto scappò"""

counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1

print("Parole:", len(text.split()))
for word, n in sorted(counts.items(), key=lambda pair: -pair[1])[:3]:
    print(word, n)
`, c`text = """le chat vit le chien et le chien vit le chat
puis le chat partit"""

counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1

print("Mots :", len(text.split()))
for word, n in sorted(counts.items(), key=lambda pair: -pair[1])[:3]:
    print(word, n)
`]},
    {id: 'secret', file: 'secret_code.py', group: 'text', i: ['meet me at noon'],
      title: ['Secret code', 'Codice segreto', 'Code secret'], about: ['Caesar\'s cipher: shift every letter', 'Il cifrario di Cesare: sposta ogni lettera', 'Le chiffre de César : décale chaque lettre'],
      code: [c`def shift(text, steps):
    result = ""
    for ch in text:
        if ch.isalpha() and ch.isascii():
            start = ord("a") if ch.islower() else ord("A")
            result += chr((ord(ch) - start + steps) % 26 + start)
        else:
            result += ch
    return result

message = input("A message: ")
hidden = shift(message, 3)
print("Hidden: ", hidden)
print("Back again:", shift(hidden, -3))
`, c`def shift(text, steps):
    result = ""
    for ch in text:
        if ch.isalpha() and ch.isascii():
            start = ord("a") if ch.islower() else ord("A")
            result += chr((ord(ch) - start + steps) % 26 + start)
        else:
            result += ch
    return result

message = input("Un messaggio: ")
hidden = shift(message, 3)
print("Nascosto:", hidden)
print("Di nuovo:", shift(hidden, -3))
`, c`def shift(text, steps):
    result = ""
    for ch in text:
        if ch.isalpha() and ch.isascii():
            start = ord("a") if ch.islower() else ord("A")
            result += chr((ord(ch) - start + steps) % 26 + start)
        else:
            result += ch
    return result

message = input("Un message : ")
hidden = shift(message, 3)
print("Caché :", hidden)
print("Retrouvé :", shift(hidden, -3))
`]},
    {id: 'vowels', file: 'vowels.py', group: 'text', i: ['programming is fun'],
      title: ['Vowels and consonants', 'Vocali e consonanti', 'Voyelles et consonnes'], about: ['Count each kind of letter', 'Conta ogni tipo di lettera', 'Compte chaque sorte de lettre'],
      code: [c`text = input("Type something: ").lower()
vowels = 0
consonants = 0
for ch in text:
    if ch in "aeiou":
        vowels += 1
    elif ch.isalpha():
        consonants += 1
print("Vowels:", vowels)
print("Consonants:", consonants)
`, c`text = input("Scrivi qualcosa: ").lower()
vowels = 0
consonants = 0
for ch in text:
    if ch in "aeiouàèéìòù":
        vowels += 1
    elif ch.isalpha():
        consonants += 1
print("Vocali:", vowels)
print("Consonanti:", consonants)
`, c`text = input("Écris quelque chose : ").lower()
vowels = 0
consonants = 0
for ch in text:
    if ch in "aeiouyàâéèêëîïôùûü":
        vowels += 1
    elif ch.isalpha():
        consonants += 1
print("Voyelles :", vowels)
print("Consonnes :", consonants)
`]},
    {id: 'initials', file: 'initials.py', group: 'text', i: ['ada augusta lovelace'],
      title: ['Initials and title', 'Iniziali e maiuscole', 'Initiales et majuscules'], about: ['split, join and title', 'split, join e title', 'split, join et title'],
      code: [c`full = input("Your full name: ")
words = full.split()
print("Nicely written:", full.title())
print("Initials:", ".".join(w[0].upper() for w in words) + ".")
print("Backwards:", " ".join(reversed(words)))
`, c`full = input("Il tuo nome completo: ")
words = full.split()
print("Scritto bene:", full.title())
print("Iniziali:", ".".join(w[0].upper() for w in words) + ".")
print("Al contrario:", " ".join(reversed(words)))
`, c`full = input("Ton nom complet : ")
words = full.split()
print("Bien écrit :", full.title())
print("Initiales :", ".".join(w[0].upper() for w in words) + ".")
print("À l'envers :", " ".join(reversed(words)))
`]},

    // ---- Drawing with text
    {id: 'pyramid', file: 'pyramid.py', group: 'drawing',
      title: ['A pyramid', 'Una piramide', 'Une pyramide'], about: ['Spaces and stars', 'Spazi e stelle', 'Des espaces et des étoiles'],
      code: [c`height = 6
for row in range(1, height + 1):
    print(" " * (height - row) + "*" * (2 * row - 1))
`, c`height = 6
for row in range(1, height + 1):
    print(" " * (height - row) + "*" * (2 * row - 1))
`, c`height = 6
for row in range(1, height + 1):
    print(" " * (height - row) + "*" * (2 * row - 1))
`]},
    {id: 'tree', file: 'tree.py', group: 'drawing',
      title: ['A Christmas tree', 'Un albero di Natale', 'Un sapin de Noël'], about: ['A pyramid with a trunk', 'Una piramide con il tronco', 'Une pyramide avec un tronc'],
      code: [c`size = 5
for row in range(size):
    print(" " * (size - row) + "^" * (2 * row + 1))
print(" " * size + "|")
print("Merry Christmas!".center(2 * size + 1))
`, c`size = 5
for row in range(size):
    print(" " * (size - row) + "^" * (2 * row + 1))
print(" " * size + "|")
print("Buon Natale!".center(2 * size + 1))
`, c`size = 5
for row in range(size):
    print(" " * (size - row) + "^" * (2 * row + 1))
print(" " * size + "|")
print("Joyeux Noël !".center(2 * size + 1))
`]},
    {id: 'chessboard', file: 'chessboard.py', group: 'drawing',
      title: ['A chessboard', 'Una scacchiera', 'Un échiquier'], about: ['A loop inside a loop', 'Un ciclo dentro un ciclo', 'Une boucle dans une boucle'],
      code: [c`for row in range(8):
    line = ""
    for col in range(8):
        if (row + col) % 2 == 0:
            line += "██"
        else:
            line += "  "
    print(line)
`, c`for row in range(8):
    line = ""
    for col in range(8):
        if (row + col) % 2 == 0:
            line += "██"
        else:
            line += "  "
    print(line)
`, c`for row in range(8):
    line = ""
    for col in range(8):
        if (row + col) % 2 == 0:
            line += "██"
        else:
            line += "  "
    print(line)
`]},
    {id: 'bars', file: 'bar_chart.py', group: 'drawing',
      title: ['A bar chart', 'Un grafico a barre', 'Un diagramme en barres'], about: ['Numbers become bars', 'I numeri diventano barre', 'Les nombres deviennent des barres'],
      code: [c`sales = {"Mon": 3, "Tue": 7, "Wed": 5, "Thu": 9, "Fri": 4}
for day, amount in sales.items():
    print(f"{day} {'#' * amount} {amount}")
print("Best day:", max(sales, key=sales.get))
`, c`sales = {"Lun": 3, "Mar": 7, "Mer": 5, "Gio": 9, "Ven": 4}
for day, amount in sales.items():
    print(f"{day} {'#' * amount} {amount}")
print("Giorno migliore:", max(sales, key=sales.get))
`, c`sales = {"Lun": 3, "Mar": 7, "Mer": 5, "Jeu": 9, "Ven": 4}
for day, amount in sales.items():
    print(f"{day} {'#' * amount} {amount}")
print("Meilleur jour :", max(sales, key=sales.get))
`]},

    // ---- Lists and data
    {id: 'shopping', file: 'shopping.py', group: 'data',
      title: ['Shopping bill', 'Lo scontrino', 'Le ticket de caisse'], about: ['Prices in a dictionary', 'Prezzi in un dizionario', 'Des prix dans un dictionnaire'],
      code: [c`prices = {"bread": 1.20, "milk": 0.95, "apples": 2.50}
basket = [("bread", 2), ("milk", 1), ("apples", 3)]

total = 0
for item, quantity in basket:
    cost = prices[item] * quantity
    total += cost
    print(f"{item:<8} {quantity} x {prices[item]:.2f} = {cost:6.2f}")
print(f"{'Total':<20} {total:6.2f}")
`, c`prices = {"pane": 1.20, "latte": 0.95, "mele": 2.50}
basket = [("pane", 2), ("latte", 1), ("mele", 3)]

total = 0
for item, quantity in basket:
    cost = prices[item] * quantity
    total += cost
    print(f"{item:<8} {quantity} x {prices[item]:.2f} = {cost:6.2f}")
print(f"{'Totale':<20} {total:6.2f}")
`, c`prices = {"pain": 1.20, "lait": 0.95, "pommes": 2.50}
basket = [("pain", 2), ("lait", 1), ("pommes", 3)]

total = 0
for item, quantity in basket:
    cost = prices[item] * quantity
    total += cost
    print(f"{item:<8} {quantity} x {prices[item]:.2f} = {cost:6.2f}")
print(f"{'Total':<20} {total:6.2f}")
`]},
    {id: 'grades', file: 'class_report.py', group: 'data',
      title: ['Class report', 'La pagella della classe', 'Le bulletin de la classe'], about: ['A list of dictionaries, sorted', 'Una lista di dizionari, ordinata', 'Une liste de dictionnaires, triée'],
      code: [c`students = [
    {"name": "Ada", "marks": [9, 8, 10]},
    {"name": "Bo", "marks": [6, 7, 5]},
    {"name": "Cy", "marks": [8, 8, 7]},
]
for s in students:
    s["average"] = sum(s["marks"]) / len(s["marks"])

for s in sorted(students, key=lambda s: s["average"], reverse=True):
    result = "pass" if s["average"] >= 6 else "fail"
    print(f"{s['name']:<4} {s['average']:.1f} {result}")
`, c`students = [
    {"name": "Ada", "marks": [9, 8, 10]},
    {"name": "Bo", "marks": [6, 7, 5]},
    {"name": "Cy", "marks": [8, 8, 7]},
]
for s in students:
    s["average"] = sum(s["marks"]) / len(s["marks"])

for s in sorted(students, key=lambda s: s["average"], reverse=True):
    result = "promosso" if s["average"] >= 6 else "bocciato"
    print(f"{s['name']:<4} {s['average']:.1f} {result}")
`, c`students = [
    {"name": "Ada", "marks": [9, 8, 10]},
    {"name": "Bo", "marks": [6, 7, 5]},
    {"name": "Cy", "marks": [8, 8, 7]},
]
for s in students:
    s["average"] = sum(s["marks"]) / len(s["marks"])

for s in sorted(students, key=lambda s: s["average"], reverse=True):
    result = "reçu" if s["average"] >= 6 else "recalé"
    print(f"{s['name']:<4} {s['average']:.1f} {result}")
`]},
    {id: 'todo', file: 'todo.py', group: 'data', i: ['add buy milk', 'add feed the cat', 'done 1', 'list', 'quit'],
      title: ['A to-do list', 'Una lista di cose da fare', 'Une liste de choses à faire'], about: ['Commands: add, done, list, quit', 'Comandi: add, done, list, quit', 'Commandes : add, done, list, quit'],
      code: [c`todo = []
print("Commands: add <thing>, done <number>, list, quit")
while True:
    command = input("> ").strip()
    if command == "quit":
        break
    elif command.startswith("add "):
        todo.append(command[4:])
    elif command.startswith("done "):
        number = int(command[5:])
        if 1 <= number <= len(todo):
            print("Done:", todo.pop(number - 1))
    elif command == "list":
        for n, thing in enumerate(todo, start=1):
            print(n, thing)
    else:
        print("I do not know that command.")
print("Bye!")
`, c`todo = []
print("Comandi: add <cosa>, done <numero>, list, quit")
while True:
    command = input("> ").strip()
    if command == "quit":
        break
    elif command.startswith("add "):
        todo.append(command[4:])
    elif command.startswith("done "):
        number = int(command[5:])
        if 1 <= number <= len(todo):
            print("Fatto:", todo.pop(number - 1))
    elif command == "list":
        for n, thing in enumerate(todo, start=1):
            print(n, thing)
    else:
        print("Non conosco questo comando.")
print("Ciao!")
`, c`todo = []
print("Commandes : add <chose>, done <numéro>, list, quit")
while True:
    command = input("> ").strip()
    if command == "quit":
        break
    elif command.startswith("add "):
        todo.append(command[4:])
    elif command.startswith("done "):
        number = int(command[5:])
        if 1 <= number <= len(todo):
            print("Fait :", todo.pop(number - 1))
    elif command == "list":
        for n, thing in enumerate(todo, start=1):
            print(n, thing)
    else:
        print("Je ne connais pas cette commande.")
print("Au revoir !")
`]},

    // ---- Your own objects
    {id: 'bank', file: 'bank_account.py', group: 'objects',
      title: ['A bank account', 'Un conto in banca', 'Un compte en banque'], about: ['A class with methods', 'Una classe con metodi', 'Une classe avec des méthodes'],
      code: [c`class Account:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Not enough money!")
        else:
            self.balance -= amount

ada = Account("Ada")
ada.deposit(50)
ada.withdraw(20)
ada.withdraw(100)
print(ada.owner, "has", ada.balance)
`, c`class Account:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Non ci sono abbastanza soldi!")
        else:
            self.balance -= amount

ada = Account("Ada")
ada.deposit(50)
ada.withdraw(20)
ada.withdraw(100)
print(ada.owner, "ha", ada.balance)
`, c`class Account:
    def __init__(self, owner):
        self.owner = owner
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount > self.balance:
            print("Pas assez d'argent !")
        else:
            self.balance -= amount

ada = Account("Ada")
ada.deposit(50)
ada.withdraw(20)
ada.withdraw(100)
print(ada.owner, "a", ada.balance)
`]},
    {id: 'pets', file: 'virtual_pet.py', group: 'objects',
      title: ['A virtual pet', 'Un cucciolo virtuale', 'Un animal virtuel'], about: ['An object that changes over time', 'Un oggetto che cambia nel tempo', 'Un objet qui change avec le temps'],
      code: [c`class Pet:
    def __init__(self, name):
        self.name = name
        self.hunger = 5

    def feed(self):
        self.hunger = max(0, self.hunger - 3)

    def wait(self):
        self.hunger += 2

    def mood(self):
        if self.hunger < 3:
            return "happy"
        elif self.hunger < 7:
            return "fine"
        return "very hungry"

rex = Pet("Rex")
for action in ["wait", "wait", "feed", "feed"]:
    getattr(rex, action)()
    print(f"after {action}: {rex.name} is {rex.mood()} (hunger {rex.hunger})")
`, c`class Pet:
    def __init__(self, name):
        self.name = name
        self.hunger = 5

    def feed(self):
        self.hunger = max(0, self.hunger - 3)

    def wait(self):
        self.hunger += 2

    def mood(self):
        if self.hunger < 3:
            return "felice"
        elif self.hunger < 7:
            return "tranquillo"
        return "affamatissimo"

rex = Pet("Rex")
for action in ["wait", "wait", "feed", "feed"]:
    getattr(rex, action)()
    print(f"dopo {action}: {rex.name} è {rex.mood()} (fame {rex.hunger})")
`, c`class Pet:
    def __init__(self, name):
        self.name = name
        self.hunger = 5

    def feed(self):
        self.hunger = max(0, self.hunger - 3)

    def wait(self):
        self.hunger += 2

    def mood(self):
        if self.hunger < 3:
            return "content"
        elif self.hunger < 7:
            return "tranquille"
        return "affamé"

rex = Pet("Rex")
for action in ["wait", "wait", "feed", "feed"]:
    getattr(rex, action)()
    print(f"après {action} : {rex.name} est {rex.mood()} (faim {rex.hunger})")
`]},
    {id: 'shapes', file: 'shapes.py', group: 'objects',
      title: ['Shapes', 'Forme', 'Formes'], about: ['Classes that share a parent', 'Classi con lo stesso genitore', 'Des classes qui ont le même parent'],
      code: [c`import math

class Shape:
    def describe(self):
        return f"{self.name} with area {self.area():.1f}"

class Square(Shape):
    name = "A square"
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2

class Circle(Shape):
    name = "A circle"
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return math.pi * self.radius ** 2

for shape in [Square(3), Circle(2), Square(1.5)]:
    print(shape.describe())
`, c`import math

class Shape:
    def describe(self):
        return f"{self.name} con area {self.area():.1f}"

class Square(Shape):
    name = "Un quadrato"
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2

class Circle(Shape):
    name = "Un cerchio"
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return math.pi * self.radius ** 2

for shape in [Square(3), Circle(2), Square(1.5)]:
    print(shape.describe())
`, c`import math

class Shape:
    def describe(self):
        return f"{self.name} d'aire {self.area():.1f}"

class Square(Shape):
    name = "Un carré"
    def __init__(self, side):
        self.side = side
    def area(self):
        return self.side ** 2

class Circle(Shape):
    name = "Un cercle"
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return math.pi * self.radius ** 2

for shape in [Square(3), Circle(2), Square(1.5)]:
    print(shape.describe())
`]},

    // ---- Useful little tools
    {id: 'password', file: 'password.py', group: 'tools',
      title: ['Password maker', 'Crea password', 'Créateur de mots de passe'], about: ['Random and strong, with secrets', 'Casuali e robuste, con secrets', 'Aléatoires et solides, avec secrets'],
      code: [c`import secrets
import string

letters = string.ascii_letters + string.digits + "!?#%"
for n in range(3):
    password = "".join(secrets.choice(letters) for i in range(14))
    print(password)
print("Each one is new every time you press Run.")
`, c`import secrets
import string

letters = string.ascii_letters + string.digits + "!?#%"
for n in range(3):
    password = "".join(secrets.choice(letters) for i in range(14))
    print(password)
print("Ogni volta che premi Esegui sono nuove.")
`, c`import secrets
import string

letters = string.ascii_letters + string.digits + "!?#%"
for n in range(3):
    password = "".join(secrets.choice(letters) for i in range(14))
    print(password)
print("Ils sont nouveaux à chaque fois que tu appuies sur Lancer.")
`]},
    {id: 'birthday', file: 'birthday.py', group: 'tools', i: ['3', '14'],
      title: ['Days to my birthday', 'Giorni al mio compleanno', 'Jours avant mon anniversaire'], about: ['Dates with datetime', 'Le date con datetime', 'Les dates avec datetime'],
      code: [c`from datetime import date

month = int(input("Birthday month (1-12): "))
day = int(input("Birthday day: "))
today = date.today()
next_one = date(today.year, month, day)
if next_one < today:
    next_one = date(today.year + 1, month, day)
days = (next_one - today).days
if days == 0:
    print("Happy birthday!")
else:
    print(f"{days} days to go, on {next_one.strftime('%A')}.")
`, c`from datetime import date

month = int(input("Mese del compleanno (1-12): "))
day = int(input("Giorno del compleanno: "))
today = date.today()
next_one = date(today.year, month, day)
if next_one < today:
    next_one = date(today.year + 1, month, day)
days = (next_one - today).days
if days == 0:
    print("Buon compleanno!")
else:
    print(f"Mancano {days} giorni.")
`, c`from datetime import date

month = int(input("Mois de l'anniversaire (1-12) : "))
day = int(input("Jour de l'anniversaire : "))
today = date.today()
next_one = date(today.year, month, day)
if next_one < today:
    next_one = date(today.year + 1, month, day)
days = (next_one - today).days
if days == 0:
    print("Joyeux anniversaire !")
else:
    print(f"Encore {days} jours.")
`]},
    {id: 'timer', file: 'countdown.py', group: 'tools',
      title: ['Countdown', 'Conto alla rovescia', 'Compte à rebours'], about: ['Wait a second with time.sleep', 'Aspetta un secondo con time.sleep', 'Attendre une seconde avec time.sleep'],
      code: [c`import time

for n in range(5, 0, -1):
    print(n)
    time.sleep(1)
print("Lift off!")
`, c`import time

for n in range(5, 0, -1):
    print(n)
    time.sleep(1)
print("Partenza!")
`, c`import time

for n in range(5, 0, -1):
    print(n)
    time.sleep(1)
print("Décollage !")
`]},
    {id: 'units', file: 'units.py', group: 'tools', i: ['10'],
      title: ['Unit converter', 'Convertitore di unità', 'Convertisseur d\'unités'], about: ['Kilometres, miles and more', 'Chilometri, miglia e altro', 'Kilomètres, miles et plus'],
      code: [c`km = float(input("How many kilometres? "))
print(f"{km} km = {km * 0.621371:.2f} miles")
print(f"{km} km = {km * 1000:.0f} metres")
print(f"Walking at 5 km/h takes {km / 5 * 60:.0f} minutes")
`, c`km = float(input("Quanti chilometri? "))
print(f"{km} km = {km * 0.621371:.2f} miglia")
print(f"{km} km = {km * 1000:.0f} metri")
print(f"A piedi a 5 km/h servono {km / 5 * 60:.0f} minuti")
`, c`km = float(input("Combien de kilomètres ? "))
print(f"{km} km = {km * 0.621371:.2f} miles")
print(f"{km} km = {km * 1000:.0f} mètres")
print(f"À pied à 5 km/h il faut {km / 5 * 60:.0f} minutes")
`]}
  ];

  var LANGS = ['en', 'it', 'fr'];
  var lang = (window.PyvielI18n && window.PyvielI18n.lang) || document.documentElement.lang || 'en';
  var at = Math.max(0, LANGS.indexOf(lang));
  window.PyvielExamples = {
    groups: Object.keys(GROUPS).map(function (key) { return {id: key, title: GROUPS[key][at]}; }),
    list: EXAMPLES.map(function (e) {
      return {id: e.id, file: e.file, group: e.group, title: e.title[at], about: e.about[at], code: e.code[at], error: !!e.error, answers: e.i || []};
    }),
    all: EXAMPLES,
    LANGS: LANGS
  };
})();
