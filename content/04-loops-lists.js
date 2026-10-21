// Stage 1 · while, lists and reading mistakes. See tools/build-course.js for the format.
const c = String.raw;

module.exports = [
  {
    title: ['Keep going', 'Vai avanti', 'Continue'],
    subtitle: ['The while loop', 'Il ciclo while', 'La boucle while'],
    steps: [
      {
        c: [c`n = 1
while n <= 5:
    print("n is", n)
    n += 1
print("Done")`, c`n = 1
while n <= 5:
    print("n è", n)
    n += 1
print("Fatto")`, c`n = 1
while n <= 5:
    print("n est", n)
    n += 1
print("Terminé")`],
        n: ['while'],
        t: ['Keep going while it is true', 'Vai avanti finché è vero', 'Continue tant que c\'est vrai'],
        x: [`while repeats the pushed-in lines for as long as its question is True. Before each turn, Python asks the question again.

Inside, n += 1 changes n. Without it, n would never change, and the loop would never end.`,
          `while ripete le righe rientrate finché la sua domanda è True. Prima di ogni giro, Python fa di nuovo la domanda.

Dentro, n += 1 cambia n. Senza, n non cambierebbe mai e il ciclo non finirebbe mai.`,
          `while répète les lignes décalées tant que sa question est True. Avant chaque tour, Python repose la question.

Dedans, n += 1 change n. Sans ça, n ne changerait jamais et la boucle ne finirait jamais.`],
        ex: {
          t: ['Change the program so that it counts up to 8 instead of 5.', 'Cambia il programma così che conti fino a 8 invece di 5.', 'Change le programme pour qu\'il compte jusqu\'à 8 au lieu de 5.'],
          h: ['Change the 5 in the question of the while.', 'Cambia il 5 nella domanda del while.', 'Change le 5 dans la question du while.'],
          start: [c`n = 1
while n <= 5:
    print("n is", n)
    n += 1
print("Done")`, c`n = 1
while n <= 5:
    print("n è", n)
    n += 1
print("Fatto")`, c`n = 1
while n <= 5:
    print("n est", n)
    n += 1
print("Terminé")`],
          sol: [c`n = 1
while n <= 8:
    print("n is", n)
    n += 1
print("Done")`, c`n = 1
while n <= 8:
    print("n è", n)
    n += 1
print("Fatto")`, c`n = 1
while n <= 8:
    print("n est", n)
    n += 1
print("Terminé")`],
          exact: true
        },
        w: ['Always change something inside a while loop, or it never ends. If that happens, the Stop button is there.', 'Cambia sempre qualcosa dentro un ciclo while, o non finisce mai. Se succede, c\'è il pulsante Stop.', 'Change toujours quelque chose dans une boucle while, sinon elle ne finit jamais. Si ça arrive, le bouton Stop est là.']
      },
      {
        c: [c`import random
secret = random.randint(1, 10)
guess = 0
tries = 0
while guess != secret:
    guess = int(input("Guess the number from 1 to 10: "))
    tries += 1
print("You got it in", tries, "tries!")`, c`import random
secret = random.randint(1, 10)
guess = 0
tries = 0
while guess != secret:
    guess = int(input("Indovina il numero da 1 a 10: "))
    tries += 1
print("Ce l'hai fatta in", tries, "tentativi!")`, c`import random
secret = random.randint(1, 10)
guess = 0
tries = 0
while guess != secret:
    guess = int(input("Devine le nombre de 1 à 10 : "))
    tries += 1
print("Tu as réussi en", tries, "essais !")`],
        i: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], r: true,
        s: ['Guess the number from 1 to 10: 5\nGuess the number from 1 to 10: 8\nYou got it in 2 tries!', 'Indovina il numero da 1 a 10: 5\nIndovina il numero da 1 a 10: 8\nCe l\'hai fatta in 2 tentativi!', 'Devine le nombre de 1 à 10 : 5\nDevine le nombre de 1 à 10 : 8\nTu as réussi en 2 essais !'],
        n: ['import', 'module:random', 'random.randint'],
        t: ['A guessing game', 'Un gioco a indovinare', 'Un jeu de devinettes'],
        x: [`while is perfect when you do not know how many turns you need. Here the program thinks of a secret number, and keeps asking until you find it.

To pick a secret number by luck, the program uses a tool box called random. This is the first time you see import: do not worry, you will meet it properly in a later lesson.`,
          `while è perfetto quando non sai quanti giri ti servono. Qui il programma pensa a un numero segreto e continua a chiedere finché lo trovi.

Per scegliere un numero segreto a caso, il programma usa una cassetta di attrezzi che si chiama random. È la prima volta che vedi import: non preoccuparti, lo conoscerai bene in una lezione più avanti.`,
          `while est parfait quand tu ne sais pas combien de tours il te faut. Ici le programme pense à un nombre secret et continue à demander jusqu'à ce que tu le trouves.

Pour choisir un nombre secret au hasard, le programme utilise une boîte à outils qui s'appelle random. C'est la première fois que tu vois import : ne t'inquiète pas, tu le connaîtras bien dans une leçon plus loin.`],
        ex: {
          t: ['Change the game so that the secret number is from 1 to 3 instead of 1 to 10.', 'Cambia il gioco così che il numero segreto sia da 1 a 3 invece di 1 a 10.', 'Change le jeu pour que le nombre secret soit de 1 à 3 au lieu de 1 à 10.'],
          h: ['Change the numbers inside random.randint( ).', 'Cambia i numeri dentro random.randint( ).', 'Change les nombres dans random.randint( ).'],
          start: [c`import random
secret = random.randint(1, 10)
guess = 0
while guess != secret:
    guess = int(input("Guess: "))
print("Yes!")`, c`import random
secret = random.randint(1, 10)
guess = 0
while guess != secret:
    guess = int(input("Indovina: "))
print("Sì!")`, c`import random
secret = random.randint(1, 10)
guess = 0
while guess != secret:
    guess = int(input("Devine : "))
print("Oui !")`],
          sol: [c`import random
secret = random.randint(1, 3)
guess = 0
while guess != secret:
    guess = int(input("Guess: "))
print("Yes!")`, c`import random
secret = random.randint(1, 3)
guess = 0
while guess != secret:
    guess = int(input("Indovina: "))
print("Sì!")`, c`import random
secret = random.randint(1, 3)
guess = 0
while guess != secret:
    guess = int(input("Devine : "))
print("Oui !")`],
          i: ['1', '2', '3'], m: ['Yes!$', 'Sì!$', 'Oui !$'], c: 'randint\\(1, 3\\)'
        }
      },
      {
        c: c`for n in range(1, 10):
    if n == 4:
        break
    print(n)
print("---")
for n in range(1, 6):
    if n == 3:
        continue
    print(n)`,
        n: ['break', 'continue'],
        t: ['Leave early: break and continue', 'Esci prima: break e continue', 'Sors plus tôt : break et continue'],
        x: [`break leaves the loop right now. continue skips the rest of this turn and goes straight to the next one.

Both work in for loops and in while loops. In the first loop, 4 is never shown, and the loop stops. In the second, only 3 is skipped.`,
          `break esce subito dal ciclo. continue salta il resto di questo giro e passa subito al successivo.

Funzionano tutti e due nei cicli for e nei cicli while. Nel primo ciclo il 4 non viene mai mostrato e il ciclo si ferma. Nel secondo viene saltato solo il 3.`,
          `break sort tout de suite de la boucle. continue saute le reste de ce tour et passe tout de suite au suivant.

Les deux marchent dans les boucles for et dans les boucles while. Dans la première boucle, le 4 n'est jamais affiché et la boucle s'arrête. Dans la deuxième, seul le 3 est sauté.`],
        ex: {
          t: ['Show the numbers from 1 to 10, but stop as soon as you reach 6. The 6 must not be shown.', 'Mostra i numeri da 1 a 10, ma fermati appena arrivi a 6. Il 6 non deve essere mostrato.', 'Affiche les nombres de 1 à 10, mais arrête-toi dès que tu arrives à 6. Le 6 ne doit pas être affiché.'],
          h: ['if n == 6: and then break, before the print.', 'if n == 6: e poi break, prima di print.', 'if n == 6: puis break, avant print.'],
          sol: 'for n in range(1, 11):\n    if n == 6:\n        break\n    print(n)', out: '1\n2\n3\n4\n5', c: 'break'
        }
      },
      {
        c: [c`while True:
    answer = input("Type quit to stop: ")
    if answer == "quit":
        break
    print("You typed:", answer)
print("Bye!")`, c`while True:
    answer = input("Scrivi quit per fermarti: ")
    if answer == "quit":
        break
    print("Hai scritto:", answer)
print("Ciao!")`, c`while True:
    answer = input("Tape quit pour t'arrêter : ")
    if answer == "quit":
        break
    print("Tu as tapé :", answer)
print("Au revoir !")`],
        i: ['hello', 'python', 'quit'],
        t: ['A loop with no end, on purpose', 'Un ciclo senza fine, apposta', 'Une boucle sans fin, exprès'],
        x: [`while True is a loop that never ends by itself, because True is always true. You leave it with break, when something happens inside.

It is a very common pattern for menus and games: keep asking until the person wants to stop.`,
          `while True è un ciclo che non finisce mai da solo, perché True è sempre vero. Lo lasci con break, quando dentro succede qualcosa.

È uno schema molto comune per menu e giochi: continua a chiedere finché la persona vuole fermarsi.`,
          `while True est une boucle qui ne finit jamais toute seule, parce que True est toujours vrai. Tu en sors avec break, quand quelque chose arrive dedans.

C'est un schéma très courant pour les menus et les jeux : continue à demander jusqu'à ce que la personne veuille s'arrêter.`],
        ex: {
          t: ['Change the program so that the word to type is stop instead of quit.', 'Cambia il programma così che la parola da scrivere sia stop invece di quit.', 'Change le programme pour que le mot à taper soit stop au lieu de quit.'],
          h: ['Change the word in the if, and the word in the question.', 'Cambia la parola nell\'if e quella nella domanda.', 'Change le mot dans le if et celui de la question.'],
          start: [c`while True:
    answer = input("Type quit to stop: ")
    if answer == "quit":
        break
    print("You typed:", answer)`, c`while True:
    answer = input("Scrivi quit per fermarti: ")
    if answer == "quit":
        break
    print("Hai scritto:", answer)`, c`while True:
    answer = input("Tape quit pour t'arrêter : ")
    if answer == "quit":
        break
    print("Tu as tapé :", answer)`],
          sol: [c`while True:
    answer = input("Type stop to stop: ")
    if answer == "stop":
        break
    print("You typed:", answer)`, c`while True:
    answer = input("Scrivi stop per fermarti: ")
    if answer == "stop":
        break
    print("Hai scritto:", answer)`, c`while True:
    answer = input("Tape stop pour t'arrêter : ")
    if answer == "stop":
        break
    print("Tu as tapé :", answer)`],
          i: ['hello', 'stop'], m: ['You typed: hello', 'Hai scritto: hello', 'Tu as tapé : hello'], c: '"stop"'
        }
      },
      {
        c: [c`n = 27
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Reached 1 after", steps, "steps")`, c`n = 27
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Arrivato a 1 dopo", steps, "passi")`, c`n = 27
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Arrivé à 1 après", steps, "étapes")`],
        t: ['A famous number puzzle', 'Un famoso rompicapo di numeri', 'Un célèbre casse-tête de nombres'],
        x: [`The Collatz puzzle: take a number. If it is even, halve it. If it is odd, triple it and add 1. Repeat. Nobody has ever found a number that does not reach 1 in the end.

It puts together everything from this lesson: while, if, else and a counter.`,
          `Il rompicapo di Collatz: prendi un numero. Se è pari, dividilo a metà. Se è dispari, triplicalo e aggiungi 1. Ripeti. Nessuno ha mai trovato un numero che alla fine non arrivi a 1.

Mette insieme tutto quello di questa lezione: while, if, else e un contatore.`,
          `Le casse-tête de Collatz : prends un nombre. S'il est pair, divise-le par deux. S'il est impair, triple-le et ajoute 1. Recommence. Personne n'a jamais trouvé un nombre qui n'arrive pas à 1 à la fin.

Il rassemble tout ce qu'il y a dans cette leçon : while, if, else et un compteur.`],
        ex: {
          t: ['Start from 6 instead of 27, and see how many steps it needs.', 'Parti da 6 invece di 27 e guarda di quanti passi ha bisogno.', 'Pars de 6 au lieu de 27 et regarde de combien d\'étapes il a besoin.'],
          h: ['Change only the first line.', 'Cambia solo la prima riga.', 'Change seulement la première ligne.'],
          start: [c`n = 27
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Reached 1 after", steps, "steps")`, c`n = 27
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Arrivato a 1 dopo", steps, "passi")`, c`n = 27
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Arrivé à 1 après", steps, "étapes")`],
          sol: [c`n = 6
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Reached 1 after", steps, "steps")`, c`n = 6
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Arrivato a 1 dopo", steps, "passi")`, c`n = 6
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Arrivé à 1 après", steps, "étapes")`],
          exact: true
        }
      }
    ]
  },
  {
    title: ['Lists', 'Le liste', 'Les listes'],
    subtitle: ['Many things in one place', 'Molte cose in un posto solo', 'Plein de choses au même endroit'],
    steps: [
      {
        c: [c`pets = ["cat", "dog", "fox"]
print(pets)
print(pets[0])
print(pets[-1])
print(len(pets))`, c`pets = ["gatto", "cane", "volpe"]
print(pets)
print(pets[0])
print(pets[-1])
print(len(pets))`, c`pets = ["chat", "chien", "renard"]
print(pets)
print(pets[0])
print(pets[-1])
print(len(pets))`],
        n: ['list'],
        t: ['A list of things', 'Una lista di cose', 'Une liste de choses'],
        x: [`Square brackets make a list. Its items are separated by commas. A list works like a text: the first item is at place 0, the second at place 1, and a minus place counts from the end.

len tells how many items there are. You already know all of this from text: a list is a row of anything.`,
          `Le parentesi quadre fanno una lista. I suoi elementi sono separati da virgole. Una lista funziona come un testo: il primo elemento è al posto 0, il secondo al posto 1, e un posto con il meno conta dalla fine.

len dice quanti elementi ci sono. Tutto questo lo conosci già dal testo: una lista è una fila di qualsiasi cosa.`,
          `Les crochets font une liste. Ses éléments sont séparés par des virgules. Une liste marche comme un texte : le premier élément est à la place 0, le deuxième à la place 1, et une place avec un moins compte depuis la fin.

len dit combien d'éléments il y a. Tu connais déjà tout ça avec le texte : une liste est une rangée de n'importe quoi.`],
        ex: {
          t: ['Show the second pet of the list (remember: the places start at 0).', 'Mostra il secondo animale della lista (ricorda: i posti partono da 0).', 'Affiche le deuxième animal de la liste (souviens-toi : les places commencent à 0).'],
          h: ['The second item is at place 1.', 'Il secondo elemento è al posto 1.', 'Le deuxième élément est à la place 1.'],
          start: ['pets = ["cat", "dog", "fox"]', 'pets = ["gatto", "cane", "volpe"]', 'pets = ["chat", "chien", "renard"]'],
          sol: ['pets = ["cat", "dog", "fox"]\nprint(pets[1])', 'pets = ["gatto", "cane", "volpe"]\nprint(pets[1])', 'pets = ["chat", "chien", "renard"]\nprint(pets[1])'],
          out: ['dog', 'cane', 'chien'], c: '\\[1\\]'
        },
        w: ['Asking for pets[3] in a list of three stops with an error: there is no place 3.', 'Chiedere pets[3] in una lista di tre si ferma con un errore: non c\'è il posto 3.', 'Demander pets[3] dans une liste de trois s\'arrête avec une erreur : il n\'y a pas de place 3.']
      },
      {
        c: [c`pets = ["cat", "dog", "fox"]
pets[1] = "kitten"
print(pets)`, c`pets = ["gatto", "cane", "volpe"]
pets[1] = "cucciolo"
print(pets)`, c`pets = ["chat", "chien", "renard"]
pets[1] = "chaton"
print(pets)`],
        n: ['list-set'],
        t: ['Change an item', 'Cambia un elemento', 'Change un élément'],
        x: [`Unlike a text, a list can be changed. Write the list, the place in square brackets, an equal sign and the new value: the old item is replaced.

This is why lists are so useful: they can grow and change while the program runs.`,
          `A differenza di un testo, una lista si può cambiare. Scrivi la lista, il posto tra parentesi quadre, un segno uguale e il nuovo valore: il vecchio elemento viene sostituito.

Per questo le liste sono così utili: possono crescere e cambiare mentre il programma gira.`,
          `Contrairement à un texte, une liste peut être changée. Écris la liste, la place entre crochets, un signe égal et la nouvelle valeur : l'ancien élément est remplacé.

C'est pourquoi les listes sont si utiles : elles peuvent grandir et changer pendant que le programme tourne.`],
        ex: {
          t: ['Replace the first item of the list with the word owl and show the list.', 'Sostituisci il primo elemento della lista con la parola gufo e mostra la lista.', 'Remplace le premier élément de la liste par le mot hibou et affiche la liste.'],
          h: ['pets[0] = ... on its own line, before the print.', 'pets[0] = ... su una riga a parte, prima di print.', 'pets[0] = ... sur une ligne à part, avant print.'],
          start: ['pets = ["cat", "dog", "fox"]', 'pets = ["gatto", "cane", "volpe"]', 'pets = ["chat", "chien", "renard"]'],
          sol: ['pets = ["cat", "dog", "fox"]\npets[0] = "owl"\nprint(pets)', 'pets = ["gatto", "cane", "volpe"]\npets[0] = "gufo"\nprint(pets)', 'pets = ["chat", "chien", "renard"]\npets[0] = "hibou"\nprint(pets)'],
          exact: true, c: '\\[0\\] ='
        }
      },
      {
        c: [c`pets = ["cat", "dog"]
pets.append("fox")
print(pets)
pets.insert(0, "owl")
print(pets)`, c`pets = ["gatto", "cane"]
pets.append("volpe")
print(pets)
pets.insert(0, "gufo")
print(pets)`, c`pets = ["chat", "chien"]
pets.append("renard")
print(pets)
pets.insert(0, "hibou")
print(pets)`],
        n: ['.append', '.insert'],
        t: ['Add things', 'Aggiungi cose', 'Ajoute des choses'],
        x: [`A list has its own helpers. Their name comes after a dot, and they work on that list. Programmers call them methods.

append adds an item at the end. insert puts an item at a place you choose, and the others move over.`,
          `Una lista ha i suoi aiutanti. Il loro nome viene dopo un punto, e lavorano su quella lista. I programmatori li chiamano metodi.

append aggiunge un elemento in fondo. insert mette un elemento in un posto a tua scelta, e gli altri si spostano.`,
          `Une liste a ses propres assistants. Leur nom vient après un point, et ils travaillent sur cette liste. Les programmeurs les appellent des méthodes.

append ajoute un élément à la fin. insert met un élément à une place de ton choix, et les autres se décalent.`],
        ex: {
          t: ['The list has two items. Add a third one, with append, and show the list.', 'La lista ha due elementi. Aggiungine un terzo, con append, e mostra la lista.', 'La liste a deux éléments. Ajoute-en un troisième, avec append, et affiche la liste.'],
          h: ['pets.append("...") and then print(pets).', 'pets.append("...") e poi print(pets).', 'pets.append("...") puis print(pets).'],
          start: ['pets = ["cat", "dog"]', 'pets = ["gatto", "cane"]', 'pets = ["chat", "chien"]'],
          sol: ['pets = ["cat", "dog"]\npets.append("bird")\nprint(pets)', 'pets = ["gatto", "cane"]\npets.append("uccello")\nprint(pets)', 'pets = ["chat", "chien"]\npets.append("oiseau")\nprint(pets)'],
          exact: true, c: 'append'
        }
      },
      {
        c: [c`pets = ["cat", "dog", "fox", "owl"]
pets.remove("dog")
print(pets)
last = pets.pop()
print(last, pets)
del pets[0]
print(pets)`, c`pets = ["gatto", "cane", "volpe", "gufo"]
pets.remove("cane")
print(pets)
last = pets.pop()
print(last, pets)
del pets[0]
print(pets)`, c`pets = ["chat", "chien", "renard", "hibou"]
pets.remove("chien")
print(pets)
last = pets.pop()
print(last, pets)
del pets[0]
print(pets)`],
        n: ['.remove', '.pop', 'del'],
        t: ['Take things out', 'Togli cose', 'Enlève des choses'],
        x: [`remove takes out the first item that has the value you give. pop takes out the last item and gives it back to you, so you can keep it in a box. del takes out the item at a place.

remove stops with an error if the item is not in the list. Check with in first.`,
          `remove toglie il primo elemento che ha il valore che gli dai. pop toglie l'ultimo elemento e te lo restituisce, così lo puoi tenere in una scatola. del toglie l'elemento che sta a un posto.

remove si ferma con un errore se l'elemento non è nella lista. Controlla prima con in.`,
          `remove enlève le premier élément qui a la valeur que tu donnes. pop enlève le dernier élément et te le rend, donc tu peux le garder dans une boîte. del enlève l'élément qui est à une place.

remove s'arrête avec une erreur si l'élément n'est pas dans la liste. Vérifie d'abord avec in.`],
        ex: {
          t: ['Take the item dog out of the list, and show the list.', 'Togli l\'elemento cane dalla lista e mostra la lista.', 'Enlève l\'élément chien de la liste et affiche la liste.'],
          h: ['pets.remove("dog") and then print(pets).', 'pets.remove("cane") e poi print(pets).', 'pets.remove("chien") puis print(pets).'],
          start: ['pets = ["cat", "dog", "fox"]', 'pets = ["gatto", "cane", "volpe"]', 'pets = ["chat", "chien", "renard"]'],
          sol: ['pets = ["cat", "dog", "fox"]\npets.remove("dog")\nprint(pets)', 'pets = ["gatto", "cane", "volpe"]\npets.remove("cane")\nprint(pets)', 'pets = ["chat", "chien", "renard"]\npets.remove("chien")\nprint(pets)'],
          exact: true, c: 'remove'
        }
      },
      {
        c: [c`scores = [70, 95, 82, 64]
total = 0
for s in scores:
    total += s
print("Total:", total)
print("Average:", total / len(scores))
print(sum(scores), min(scores), max(scores))`, c`scores = [70, 95, 82, 64]
total = 0
for s in scores:
    total += s
print("Totale:", total)
print("Media:", total / len(scores))
print(sum(scores), min(scores), max(scores))`, c`scores = [70, 95, 82, 64]
total = 0
for s in scores:
    total += s
print("Total :", total)
print("Moyenne :", total / len(scores))
print(sum(scores), min(scores), max(scores))`],
        n: ['sum'],
        t: ['Use all the items', 'Usa tutti gli elementi', 'Utilise tous les éléments'],
        x: [`A for loop can walk through all the items of a list, like it walked through the letters of a text. Here it adds them up, and the average is the total divided by how many there are.

Python also has a ready-made helper: sum adds up a whole list in one go. min and max work on a whole list too.`,
          `Un ciclo for può scorrere tutti gli elementi di una lista, come scorreva le lettere di un testo. Qui li somma, e la media è il totale diviso quanti sono.

Python ha anche un aiutante già pronto: sum somma un'intera lista in un colpo solo. Anche min e max funzionano su un'intera lista.`,
          `Une boucle for peut parcourir tous les éléments d'une liste, comme elle parcourait les lettres d'un texte. Ici elle les additionne, et la moyenne est le total divisé par leur nombre.

Python a aussi un assistant tout prêt : sum additionne toute une liste d'un coup. min et max marchent aussi sur toute une liste.`],
        ex: {
          t: ['Show the sum of the list [3, 5, 8, 4] with sum.', 'Mostra la somma della lista [3, 5, 8, 4] con sum.', 'Affiche la somme de la liste [3, 5, 8, 4] avec sum.'],
          h: ['print(sum([3, 5, 8, 4]))', 'print(sum([3, 5, 8, 4]))', 'print(sum([3, 5, 8, 4]))'],
          sol: 'print(sum([3, 5, 8, 4]))', out: '20', c: 'sum'
        }
      },
      {
        c: c`numbers = [3, 1, 2]
numbers.sort()
print(numbers)
print(sorted([9, 4, 7]))
names = ["Zoe", "Ada", "Max"]
print(sorted(names))`,
        n: ['.sort', 'sorted'],
        t: ['Put in order', 'Metti in ordine', 'Mets dans l\'ordre'],
        x: [`sort puts the items of the list itself in order, smallest first. The list changes.

sorted gives a new list in order and leaves the old one as it was. Both work on numbers and on texts (in alphabetical order).`,
          `sort mette in ordine gli elementi della lista stessa, dal più piccolo. La lista cambia.

sorted dà una lista nuova in ordine e lascia la vecchia com'era. Funzionano tutti e due con i numeri e con i testi (in ordine alfabetico).`,
          `sort met dans l'ordre les éléments de la liste elle-même, du plus petit au plus grand. La liste change.

sorted donne une nouvelle liste dans l'ordre et laisse l'ancienne comme elle était. Les deux marchent avec des nombres et avec des textes (dans l'ordre alphabétique).`],
        ex: {
          t: ['Show the list [5, 2, 9, 1] in order, using sorted.', 'Mostra la lista [5, 2, 9, 1] in ordine, usando sorted.', 'Affiche la liste [5, 2, 9, 1] dans l\'ordre, en utilisant sorted.'],
          h: ['print(sorted([5, 2, 9, 1]))', 'print(sorted([5, 2, 9, 1]))', 'print(sorted([5, 2, 9, 1]))'],
          sol: 'print(sorted([5, 2, 9, 1]))', out: '[1, 2, 5, 9]', c: 'sorted'
        }
      },
      {
        c: c`names = ["Zoe", "Ada", "Max", "Ada"]
names.reverse()
print(names)
print(names.index("Max"))
print(names.count("Ada"))`,
        n: ['.reverse', '.index', '.count'],
        t: ['Turn around, find and count', 'Gira, trova e conta', 'Retourne, trouve et compte'],
        x: [`reverse turns the list around. index tells the place where an item is found. count tells how many times an item appears.

Together with the others you know, these are almost everything you need to work with lists.`,
          `reverse gira la lista. index dice il posto in cui si trova un elemento. count dice quante volte compare un elemento.

Insieme agli altri che conosci, sono quasi tutto quello che ti serve per lavorare con le liste.`,
          `reverse retourne la liste. index dit la place où se trouve un élément. count dit combien de fois un élément apparaît.

Avec les autres que tu connais, c'est presque tout ce qu'il te faut pour travailler avec les listes.`],
        ex: {
          t: ['Show how many times the name Ada is in the list.', 'Mostra quante volte il nome Ada è nella lista.', 'Affiche combien de fois le nom Ada est dans la liste.'],
          h: ['names.count("Ada") inside print.', 'names.count("Ada") dentro print.', 'names.count("Ada") dans print.'],
          start: 'names = ["Zoe", "Ada", "Max", "Ada"]', sol: 'names = ["Zoe", "Ada", "Max", "Ada"]\nprint(names.count("Ada"))', out: '2', c: 'count'
        }
      }
    ]
  },
  {
    title: ['Reading mistakes', 'Leggere gli errori', 'Lire les erreurs'],
    subtitle: ['They happen. It is fine.', 'Capitano. Va bene così.', 'Ça arrive. C\'est normal.'],
    steps: [
      {
        c: c`if 5 > 3
    print("yes")`,
        e: 'SyntaxError',
        t: ['Python cannot read the line', 'Python non riesce a leggere la riga', 'Python ne peut pas lire la ligne'],
        x: [`A syntax error means a line is not written the way Python expects: a missing colon, a missing bracket, a missing quote. Python finds these before running anything, so nothing is shown.

Pyviel says which line and what is missing. The line number is where Python noticed it, so look at the line just before too.`,
          `Un errore di sintassi vuol dire che una riga non è scritta come Python si aspetta: manca un due punti, una parentesi, una virgoletta. Python li trova prima di eseguire qualsiasi cosa, quindi non si vede niente.

Pyviel dice quale riga e cosa manca. Il numero di riga è dove Python se n'è accorto, quindi guarda anche la riga appena prima.`,
          `Une erreur de syntaxe veut dire qu'une ligne n'est pas écrite comme Python l'attend : il manque deux points, une parenthèse, un guillemet. Python les trouve avant de lancer quoi que ce soit, donc rien ne s'affiche.

Pyviel dit quelle ligne et ce qui manque. Le numéro de ligne est celui où Python l'a remarqué, donc regarde aussi la ligne juste avant.`],
        ex: {
          t: ['Fix the line so the program shows yes.', 'Correggi la riga così il programma mostra sì.', 'Corrige la ligne pour que le programme affiche oui.'],
          h: ['Something is missing at the end of the if line.', 'Manca qualcosa alla fine della riga if.', 'Il manque quelque chose à la fin de la ligne if.'],
          start: [c`if 5 > 3
    print("yes")`, c`if 5 > 3
    print("sì")`, c`if 5 > 3
    print("oui")`],
          sol: [c`if 5 > 3:
    print("yes")`, c`if 5 > 3:
    print("sì")`, c`if 5 > 3:
    print("oui")`],
          out: ['yes', 'sì', 'oui']
        }
      },
      {
        c: c`if 5 > 3:
print("yes")`,
        e: 'IndentationError',
        t: ['Pushed in too little', 'Rientrato troppo poco', 'Pas assez décalé'],
        x: [`After a line that ends with a colon, the next line must be pushed to the right by four spaces. Python uses this space to know what belongs together.

All the lines of one block must start at exactly the same place.`,
          `Dopo una riga che finisce con i due punti, la riga successiva deve essere spostata a destra di quattro spazi. Python usa questo spazio per sapere cosa sta insieme.

Tutte le righe di uno stesso blocco devono iniziare esattamente nello stesso punto.`,
          `Après une ligne qui finit par deux points, la ligne suivante doit être décalée vers la droite de quatre espaces. Python utilise cet espace pour savoir ce qui va ensemble.

Toutes les lignes d'un même bloc doivent commencer exactement au même endroit.`],
        ex: {
          t: ['Fix the line so the program shows yes.', 'Correggi la riga così il programma mostra sì.', 'Corrige la ligne pour que le programme affiche oui.'],
          h: ['Put four spaces before the print line.', 'Metti quattro spazi prima della riga print.', 'Mets quatre espaces avant la ligne print.'],
          start: [c`if 5 > 3:
print("yes")`, c`if 5 > 3:
print("sì")`, c`if 5 > 3:
print("oui")`],
          sol: [c`if 5 > 3:
    print("yes")`, c`if 5 > 3:
    print("sì")`, c`if 5 > 3:
    print("oui")`],
          out: ['yes', 'sì', 'oui']
        },
        w: ['The Tab key puts four spaces in the Pyviel editor. Do not mix tabs and spaces.', 'Il tasto Tab mette quattro spazi nell\'editor di Pyviel. Non mescolare tabulazioni e spazi.', 'La touche Tab met quatre espaces dans l\'éditeur de Pyviel. Ne mélange pas tabulations et espaces.']
      },
      {
        c: c`score = 10
print(scroe)`,
        e: 'NameError',
        t: ['A name that does not exist', 'Un nome che non esiste', 'Un nom qui n\'existe pas'],
        x: [`This mistake only shows up while the program runs. Here a box is called score, but the next line asks for scroe: a typo. Python does not know that name.

When a name is not found, check how it is spelled, and that the box was filled before you use it.`,
          `Questo errore compare solo mentre il programma gira. Qui una scatola si chiama score, ma la riga dopo chiede scroe: un errore di battitura. Python non conosce quel nome.

Quando un nome non si trova, controlla come è scritto e che la scatola sia stata riempita prima di usarla.`,
          `Cette erreur n'apparaît que pendant que le programme tourne. Ici une boîte s'appelle score, mais la ligne suivante demande scroe : une faute de frappe. Python ne connaît pas ce nom.

Quand un nom n'est pas trouvé, vérifie comment il est écrit, et que la boîte a été remplie avant de l'utiliser.`],
        ex: {
          t: ['Fix the typo so the program shows 10.', 'Correggi l\'errore di battitura così il programma mostra 10.', 'Corrige la faute de frappe pour que le programme affiche 10.'],
          h: ['The name in the print must be spelled like the box.', 'Il nome in print deve essere scritto come la scatola.', 'Le nom dans print doit être écrit comme la boîte.'],
          start: 'score = 10\nprint(scroe)', sol: 'score = 10\nprint(score)', out: '10'
        }
      },
      {
        c: c`items = ["a", "b", "c"]
print(items[0])
print(items[3])`,
        e: 'IndexError',
        t: ['A place that does not exist', 'Un posto che non esiste', 'Une place qui n\'existe pas'],
        x: [`The list has 3 items, at places 0, 1 and 2. Asking for place 3 stops the program, but the lines before it have already done their work.

Read the sentence: it names the problem. Then press View full error and find the line "File ..., line 3": it is the same line number.`,
          `La lista ha 3 elementi, ai posti 0, 1 e 2. Chiedere il posto 3 ferma il programma, ma le righe prima hanno già fatto il loro lavoro.

Leggi la frase: nomina il problema. Poi premi View full error e trova la riga "File ..., line 3": è lo stesso numero di riga.`,
          `La liste a 3 éléments, aux places 0, 1 et 2. Demander la place 3 arrête le programme, mais les lignes d'avant ont déjà fait leur travail.

Lis la phrase : elle nomme le problème. Puis appuie sur View full error et trouve la ligne "File ..., line 3" : c'est le même numéro de ligne.`],
        ex: {
          t: ['Fix the program so it shows the last item, c.', 'Correggi il programma così mostra l\'ultimo elemento, c.', 'Corrige le programme pour qu\'il affiche le dernier élément, c.'],
          h: ['The last item of three is at place 2, or at place -1.', 'L\'ultimo di tre elementi è al posto 2, o al posto -1.', 'Le dernier de trois éléments est à la place 2, ou à la place -1.'],
          start: 'items = ["a", "b", "c"]\nprint(items[3])', sol: 'items = ["a", "b", "c"]\nprint(items[2])', out: 'c'
        }
      },
      {
        c: c`print(10 / 2)
print(10 / 0)`,
        e: 'ZeroDivisionError',
        t: ['Dividing by zero', 'Dividere per zero', 'Diviser par zéro'],
        x: [`Dividing by zero has no answer, even in maths. Python stops and tells you so. The first line worked and showed its answer before the stop.

Mistakes like this one often come from a box that holds 0 when you did not expect it. Show the box with print to find out.`,
          `Dividere per zero non ha risposta, nemmeno in matematica. Python si ferma e te lo dice. La prima riga ha funzionato e ha mostrato la sua risposta prima dello stop.

Errori come questo vengono spesso da una scatola che contiene 0 quando non te lo aspettavi. Mostra la scatola con print per scoprirlo.`,
          `Diviser par zéro n'a pas de réponse, même en maths. Python s'arrête et te le dit. La première ligne a marché et a affiché sa réponse avant l'arrêt.

Les erreurs comme celle-ci viennent souvent d'une boîte qui contient 0 alors que tu ne t'y attendais pas. Affiche la boîte avec print pour le découvrir.`],
        ex: {
          t: ['Fix the second line so it divides 10 by 5.', 'Correggi la seconda riga così divide 10 per 5.', 'Corrige la deuxième ligne pour qu\'elle divise 10 par 5.'],
          h: ['Change the 0 into a 5.', 'Cambia lo 0 in 5.', 'Change le 0 en 5.'],
          start: 'print(10 / 2)\nprint(10 / 0)', sol: 'print(10 / 2)\nprint(10 / 5)', out: '5.0\n2.0'
        }
      },
      {
        c: [c`print("Start")
number = int("abc")
print("Never reached")`, c`print("Inizio")
number = int("abc")
print("Mai raggiunta")`, c`print("Début")
number = int("abc")
print("Jamais atteinte")`],
        e: 'ValueError',
        t: ['A checklist for any mistake', 'Una lista di controllo per ogni errore', 'Une liste de contrôle pour toute erreur'],
        x: [`When something breaks, do this: 1) read the sentence from Pyviel, 2) look at the line it points to, and the one before, 3) press View full error and read the last line, 4) check spelling, brackets, quotes and colons, 5) add a print to see what the values really are.

Nobody writes a program without mistakes. Programmers are just fast at finding them.`,
          `Quando qualcosa si rompe, fai così: 1) leggi la frase di Pyviel, 2) guarda la riga che indica, e quella prima, 3) premi View full error e leggi l'ultima riga, 4) controlla ortografia, parentesi, virgolette e due punti, 5) aggiungi un print per vedere cosa contengono davvero i valori.

Nessuno scrive un programma senza errori. I programmatori sono solo veloci a trovarli.`,
          `Quand quelque chose casse, fais ceci : 1) lis la phrase de Pyviel, 2) regarde la ligne qu'elle indique, et celle d'avant, 3) appuie sur View full error et lis la dernière ligne, 4) vérifie l'orthographe, les parenthèses, les guillemets et les deux points, 5) ajoute un print pour voir ce que contiennent vraiment les valeurs.

Personne n'écrit un programme sans erreurs. Les programmeurs sont juste rapides pour les trouver.`],
        ex: {
          t: ['The text "abc" is not a number. Change it to "42" and show the number at the end.', 'Il testo "abc" non è un numero. Cambialo in "42" e mostra il numero alla fine.', 'Le texte "abc" n\'est pas un nombre. Change-le en "42" et affiche le nombre à la fin.'],
          h: ['int("42") works. Then print(number) at the end.', 'int("42") funziona. Poi print(number) alla fine.', 'int("42") marche. Puis print(number) à la fin.'],
          start: [c`print("Start")
number = int("abc")
print("Never reached")`, c`print("Inizio")
number = int("abc")
print("Mai raggiunta")`, c`print("Début")
number = int("abc")
print("Jamais atteinte")`],
          sol: [c`print("Start")
number = int("42")
print(number)`, c`print("Inizio")
number = int("42")
print(number)`, c`print("Début")
number = int("42")
print(number)`],
          out: ['Start\n42', 'Inizio\n42', 'Début\n42']
        }
      }
    ]
  }
];
