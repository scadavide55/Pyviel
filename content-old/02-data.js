// Stage 2 · Data and functions. See tools/build-course.js for the format.
const c = String.raw;
const G2 = ['Stage 2 · Data and functions', 'Livello 2 · Dati e funzioni', 'Niveau 2 · Données et fonctions'];

module.exports = [
  // ------------------------------------------------------------------ 14
  {
    group: G2,
    title: ['More about text', 'Ancora sul testo', 'Encore sur le texte'],
    subtitle: ['Tools that every text has', 'Strumenti che ogni testo ha', 'Des outils que chaque texte a'],
    steps: [
      {
        c: c`text = "  Hello, Python!  "
print(text.upper())
print(text.lower())
print(text.strip())
print(text.title())
print(len(text))`,
        t: ['Change how a text looks', 'Cambiare l\'aspetto di un testo', 'Changer l\'aspect d\'un texte'],
        x: [`A text has tools of its own, called methods. You write the text, a dot, the name of the tool and brackets: text.upper().

upper and lower change the size of the letters, title makes each word start with a capital, strip removes the spaces at both ends. None of them changes the original: they give you a new text.`,
          `Un testo ha strumenti suoi, chiamati metodi. Scrivi il testo, un punto, il nome dello strumento e le parentesi: text.upper().

upper e lower cambiano la grandezza delle lettere, title fa cominciare ogni parola con la maiuscola, strip toglie gli spazi alle due estremità. Nessuno cambia l'originale: ti danno un nuovo testo.`,
          `Un texte a ses propres outils, appelés méthodes. Tu écris le texte, un point, le nom de l'outil et les parenthèses : text.upper().

upper et lower changent la taille des lettres, title fait commencer chaque mot par une majuscule, strip enlève les espaces aux deux bouts. Aucun ne change l'original : ils te donnent un nouveau texte.`],
        d: ['Clean the text "  ada LOVELACE " so it reads "Ada Lovelace".', 'Pulisci il testo "  ada LOVELACE " così che diventi "Ada Lovelace".', 'Nettoie le texte "  ada LOVELACE " pour qu\'il devienne "Ada Lovelace".'],
        w: ['text.upper() alone changes nothing: keep the result, for example text = text.upper().', 'text.upper() da solo non cambia niente: tieni il risultato, per esempio text = text.upper().', 'text.upper() tout seul ne change rien : garde le résultat, par exemple text = text.upper().']
      },
      {
        c: c`sentence = "the quick brown fox"
print(sentence.replace("quick", "slow"))
print(sentence.find("brown"))
print(sentence.find("cat"))
print(sentence.count("o"))
print(sentence.startswith("the"), sentence.endswith("dog"))`,
        t: ['Search and replace', 'Cercare e sostituire', 'Chercher et remplacer'],
        x: [`replace(old, new) swaps a piece of text for another. find(piece) tells at which position the piece starts, or -1 if it is not there. count(piece) counts how many times it shows up. startswith and endswith answer True or False.

Remember that the first letter is at position 0.`,
          `replace(vecchio, nuovo) scambia un pezzo di testo con un altro. find(pezzo) dice a che posizione comincia il pezzo, o -1 se non c'è. count(pezzo) conta quante volte compare. startswith e endswith rispondono True o False.

Ricorda che la prima lettera è alla posizione 0.`,
          `replace(ancien, nouveau) échange un morceau de texte contre un autre. find(morceau) dit à quelle position commence le morceau, ou -1 s'il n'y est pas. count(morceau) compte combien de fois il apparaît. startswith et endswith répondent True ou False.

Rappelle-toi que la première lettre est à la position 0.`],
        d: ['Replace every space of the sentence with a dash.', 'Sostituisci ogni spazio della frase con un trattino.', 'Remplace chaque espace de la phrase par un tiret.']
      },
      {
        c: c`line = "red,green,blue"
colours = line.split(",")
print(colours)
print("-".join(colours))
words = "one two  three".split()
print(words)`,
        t: ['Split and join', 'Dividere e unire', 'Découper et réunir'],
        x: [`split(separator) cuts a text wherever it finds the separator and gives you a list. With nothing inside the brackets it cuts at spaces, however many there are.

join does the opposite: "-".join(list) glues the pieces of a list, with the text in front between them.`,
          `split(separatore) taglia un testo dovunque trovi il separatore e ti dà una lista. Con niente dentro le parentesi taglia agli spazi, quanti che siano.

join fa il contrario: "-".join(lista) incolla i pezzi di una lista, con il testo davanti in mezzo.`,
          `split(séparateur) coupe un texte partout où il trouve le séparateur et te donne une liste. Avec rien entre les parenthèses il coupe aux espaces, quel que soit leur nombre.

join fait le contraire : "-".join(liste) colle les morceaux d'une liste, avec le texte devant au milieu.`],
        d: ['Split "2026-10-20" into year, month and day.', 'Dividi "2026-10-20" in anno, mese e giorno.', 'Découpe "2026-10-20" en année, mois et jour.']
      },
      {
        c: c`word = "Python"
print(word[1:4])
print(word[:2])
print(word[2:])
print(word[::2])
print(word[::-1])`,
        t: ['Slices', 'Fette di testo', 'Des tranches de texte'],
        x: [`word[start:stop] takes a slice: from start up to, but not including, stop. Leave one out and it goes to the edge: word[:2] are the first two letters, word[2:] is everything from position 2.

A third number is the step: word[::2] takes every second letter, and word[::-1] reads the text backwards.`,
          `word[inizio:fine] prende una fetta: da inizio fino a fine, esclusa. Lasciane fuori una e va fino al bordo: word[:2] sono le prime due lettere, word[2:] è tutto da posizione 2.

Un terzo numero è il passo: word[::2] prende una lettera su due, e word[::-1] legge il testo al contrario.`,
          `word[début:fin] prend une tranche : du début jusqu'à la fin, non comprise. Laisses-en une de côté et ça va jusqu'au bord : word[:2] sont les deux premières lettres, word[2:] est tout à partir de la position 2.

Un troisième nombre est le pas : word[::2] prend une lettre sur deux, et word[::-1] lit le texte à l'envers.`],
        d: ['Check if a word is a palindrome: does it read the same backwards?', 'Controlla se una parola è palindroma: si legge uguale al contrario?', 'Vérifie si un mot est un palindrome : se lit-il pareil à l\'envers ?']
      },
      {
        c: c`print("hello".isalpha(), "123".isdigit(), "abc123".isalnum())
print("Hello".isupper(), "HELLO".isupper(), "hello".islower())
print("42".zfill(5))
print("ab".center(8, "*"))
print("ab".ljust(5) + "|", "ab".rjust(5) + "|")`,
        t: ['Questions about a text', 'Domande su un testo', 'Questions sur un texte'],
        x: [`Many methods ask a question and answer True or False: isalpha (only letters), isdigit (only digits), isalnum (letters or digits), isupper, islower. They are perfect to check what a person typed.

Others decorate: zfill adds zeros in front, center, ljust and rjust fill with spaces to a width.`,
          `Molti metodi fanno una domanda e rispondono True o False: isalpha (solo lettere), isdigit (solo cifre), isalnum (lettere o cifre), isupper, islower. Sono perfetti per controllare cosa ha scritto una persona.

Altri decorano: zfill aggiunge zeri davanti, center, ljust e rjust riempiono di spazi fino a una larghezza.`,
          `Beaucoup de méthodes posent une question et répondent True ou False : isalpha (seulement des lettres), isdigit (seulement des chiffres), isalnum (lettres ou chiffres), isupper, islower. Elles sont parfaites pour vérifier ce qu'une personne a tapé.

D'autres décorent : zfill ajoute des zéros devant, center, ljust et rjust remplissent d'espaces jusqu'à une largeur.`],
        d: ['Check if the text "2026" contains only digits.', 'Controlla se il testo "2026" contiene solo cifre.', 'Vérifie si le texte "2026" ne contient que des chiffres.']
      },
      {
        c: c`word = "banana"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "has", vowels, "vowels")
print(word.replace("a", "").upper())
print(ord("A"), chr(66))`,
        t: ['Little text programs', 'Piccoli programmi con il testo', 'Petits programmes avec du texte'],
        x: [`Put it together: a loop over the letters, an if with in, and a counter. This counts the vowels of any word.

ord(letter) gives the number of a letter in the computer's alphabet, and chr(number) goes back. It is the start of every secret code.`,
          `Metti tutto insieme: un ciclo sulle lettere, un if con in, e un contatore. Questo conta le vocali di qualunque parola.

ord(lettera) dà il numero di una lettera nell'alfabeto del computer, e chr(numero) torna indietro. È l'inizio di ogni codice segreto.`,
          `Mets tout ensemble : une boucle sur les lettres, un if avec in, et un compteur. Ça compte les voyelles de n'importe quel mot.

ord(lettre) donne le numéro d'une lettre dans l'alphabet de l'ordinateur, et chr(nombre) revient en arrière. C'est le début de tout code secret.`],
        d: ['Count the consonants instead.', 'Conta invece le consonanti.', 'Compte plutôt les consonnes.']
      }
    ]
  },

  // ------------------------------------------------------------------ 15
  {
    title: ['More about lists', 'Ancora sulle liste', 'Encore sur les listes'],
    subtitle: ['Slices, copies and tables', 'Fette, copie e tabelle', 'Tranches, copies et tableaux'],
    steps: [
      {
        c: c`nums = [10, 20, 30, 40, 50]
print(nums[1:4])
print(nums[:2])
print(nums[-2:])
print(nums[::2])
print(nums[::-1])`,
        t: ['Slices of a list', 'Fette di una lista', 'Des tranches de liste'],
        x: [`Lists can be sliced exactly like texts: list[start:stop:step]. You get a new list with the chosen items, and the original stays as it was.

nums[-2:] takes the last two. nums[::-1] is the list backwards.`,
          `Le liste si possono affettare esattamente come i testi: lista[inizio:fine:passo]. Ottieni una nuova lista con gli elementi scelti, e l'originale resta com'era.

nums[-2:] prende gli ultimi due. nums[::-1] è la lista al contrario.`,
          `Les listes se découpent exactement comme les textes : liste[début:fin:pas]. Tu obtiens une nouvelle liste avec les éléments choisis, et l'original reste comme il était.

nums[-2:] prend les deux derniers. nums[::-1] est la liste à l'envers.`],
        d: ['Print the middle three numbers.', 'Stampa i tre numeri di mezzo.', 'Affiche les trois nombres du milieu.']
      },
      {
        c: c`a = [1, 2, 3]
b = a
b.append(4)
print(a)
c = a.copy()
c.append(5)
print(a, c)
print(a is b, a is c)`,
        t: ['One list, two names', 'Una lista, due nomi', 'Une liste, deux noms'],
        x: [`b = a does not make a new list: it puts a second label on the same list. Changing one changes "both", because there is only one list.

To get a real copy, use a.copy() or a[:]. The word is asks "is it exactly the same thing?".`,
          `b = a non crea una nuova lista: mette una seconda etichetta sulla stessa lista. Cambiarne una le cambia "entrambe", perché la lista è una sola.

Per avere una vera copia, usa a.copy() o a[:]. La parola is chiede "è esattamente la stessa cosa?".`,
          `b = a ne crée pas une nouvelle liste : il met une deuxième étiquette sur la même liste. En changer une change « les deux », parce qu'il n'y a qu'une seule liste.

Pour avoir une vraie copie, utilise a.copy() ou a[:]. Le mot is demande « est-ce exactement la même chose ? ».`],
        d: ['Make a copy of a list of names and change only the copy.', 'Fai una copia di una lista di nomi e cambia solo la copia.', 'Fais une copie d\'une liste de noms et change seulement la copie.'],
        w: ['Texts and numbers cannot be changed in place, so this surprise happens only with lists and other changeable things.', 'I testi e i numeri non si possono cambiare sul posto, quindi questa sorpresa capita solo con le liste e le altre cose modificabili.', 'Les textes et les nombres ne peuvent pas être changés sur place, donc cette surprise n\'arrive qu\'avec les listes et les autres choses modifiables.']
      },
      {
        c: c`grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
print(grid[0])
print(grid[1][2])
grid[2][0] = 0
for row in grid:
    print(row)`,
        t: ['A table: lists inside lists', 'Una tabella: liste dentro liste', 'Un tableau : des listes dans des listes'],
        x: [`A list can hold other lists. This makes a table: grid[1] is a whole row, and grid[1][2] is the item in row 1, column 2 (both counted from 0).

Tables are everywhere: game boards, photos, spreadsheets.`,
          `Una lista può contenere altre liste. Questo fa una tabella: grid[1] è un'intera riga, e grid[1][2] è l'elemento nella riga 1, colonna 2 (entrambe contate da 0).

Le tabelle sono ovunque: tabelloni di giochi, foto, fogli di calcolo.`,
          `Une liste peut contenir d'autres listes. Ça fait un tableau : grid[1] est une ligne entière, et grid[1][2] est l'élément de la ligne 1, colonne 2 (les deux comptées depuis 0).

Les tableaux sont partout : plateaux de jeux, photos, tableurs.`],
        d: ['Print the middle number of the table.', 'Stampa il numero al centro della tabella.', 'Affiche le nombre du milieu du tableau.']
      },
      {
        c: c`players = ["Ada", "Max", "Zoe"]
points = [12, 7, 15]
for i in range(len(players)):
    print(players[i], points[i])
print()
for name, score in zip(players, points):
    print(f"{name}: {score}")
print()
for position, name in enumerate(players, start=1):
    print(position, name)`,
        t: ['Walk through two lists, or count', 'Scorrere due liste, o contare', 'Parcourir deux listes, ou compter'],
        x: [`zip(a, b) walks through two lists together, pair by pair. enumerate(list) gives each item together with its number, and start=1 begins to count at 1.

Both are nicer than counting positions by hand with range(len(...)).`,
          `zip(a, b) scorre due liste insieme, coppia per coppia. enumerate(lista) dà ogni elemento insieme al suo numero, e start=1 comincia a contare da 1.

Entrambi sono più belli che contare le posizioni a mano con range(len(...)).`,
          `zip(a, b) parcourt deux listes ensemble, paire par paire. enumerate(liste) donne chaque élément avec son numéro, et start=1 commence à compter à 1.

Les deux sont plus agréables que de compter les positions à la main avec range(len(...)).`],
        d: ['Add a fourth player and a fourth score.', 'Aggiungi un quarto giocatore e un quarto punteggio.', 'Ajoute un quatrième joueur et un quatrième score.']
      },
      {
        c: c`words = ["pear", "fig", "banana", "kiwi"]
print(sorted(words))
print(sorted(words, key=len))
print(sorted(words, reverse=True))
words.sort(key=len, reverse=True)
print(words)
print(max(words, key=len))`,
        t: ['Sort the way you want', 'Ordinare come vuoi', 'Trier comme tu veux'],
        x: [`sorted and sort can take key=: a function that tells what to look at. key=len orders words by their length, not alphabetically. reverse=True turns the order around.

max and min accept key= too: max(words, key=len) finds the longest word.`,
          `sorted e sort possono prendere key=: una funzione che dice cosa guardare. key=len ordina le parole per lunghezza, non alfabeticamente. reverse=True capovolge l'ordine.

Anche max e min accettano key=: max(words, key=len) trova la parola più lunga.`,
          `sorted et sort peuvent prendre key= : une fonction qui dit quoi regarder. key=len trie les mots par leur longueur, pas par ordre alphabétique. reverse=True retourne l'ordre.

max et min acceptent aussi key= : max(words, key=len) trouve le mot le plus long.`],
        d: ['Sort the words by their last letter: key=lambda w: w[-1].', 'Ordina le parole per l\'ultima lettera: key=lambda w: w[-1].', 'Trie les mots par leur dernière lettre : key=lambda w: w[-1].']
      },
      {
        c: c`numbers = [5, 3, 8, 1]
print(list(range(5)))
print(list("abc"))
print(any(n > 7 for n in numbers))
print(all(n > 0 for n in numbers))
print(sum(numbers) / len(numbers))
first, *rest = numbers
print(first, rest)`,
        t: ['Handy tools for lists', 'Strumenti utili per le liste', 'Outils pratiques pour les listes'],
        x: [`list(...) turns any row of things into a list. any(...) is True if at least one item passes the question, all(...) is True if every item does.

first, *rest = numbers puts the first item in first and all the others in the list rest.`,
          `list(...) trasforma qualunque fila di cose in una lista. any(...) è True se almeno un elemento passa la domanda, all(...) è True se la passano tutti.

first, *rest = numbers mette il primo elemento in first e tutti gli altri nella lista rest.`,
          `list(...) transforme n'importe quelle rangée de choses en liste. any(...) est True si au moins un élément passe la question, all(...) est True si tous la passent.

first, *rest = numbers met le premier élément dans first et tous les autres dans la liste rest.`],
        d: ['Check if all the numbers are even.', 'Controlla se tutti i numeri sono pari.', 'Vérifie si tous les nombres sont pairs.']
      }
    ]
  },

  // ------------------------------------------------------------------ 16
  {
    title: ['Tuples', 'Le tuple', 'Les tuples'],
    subtitle: ['A list that cannot change', 'Una lista che non cambia', 'Une liste qui ne change pas'],
    steps: [
      {
        c: c`point = (3, 4)
print(point)
print(point[0], point[1])
print(len(point))
single = (5,)
print(type(single), type(point))`,
        t: ['Values that stay together', 'Valori che stanno insieme', 'Des valeurs qui restent ensemble'],
        x: [`A tuple is written with round brackets. It is like a list, but once made it cannot be changed. That is useful for things that belong together and should stay fixed, like the x and y of a point.

A tuple with one item needs a comma: (5,). Without the comma it is just a number in brackets.`,
          `Una tupla si scrive con le parentesi tonde. È come una lista, ma una volta creata non si può cambiare. È utile per cose che stanno insieme e devono restare fisse, come la x e la y di un punto.

Una tupla con un solo elemento vuole la virgola: (5,). Senza virgola è solo un numero tra parentesi.`,
          `Un tuple s'écrit avec des parenthèses. C'est comme une liste, mais une fois créé il ne peut plus être changé. C'est utile pour des choses qui vont ensemble et doivent rester fixes, comme le x et le y d'un point.

Un tuple avec un seul élément veut la virgule : (5,). Sans la virgule, c'est juste un nombre entre parenthèses.`],
        d: ['Make a tuple with your name and your age.', 'Crea una tupla con il tuo nome e la tua età.', 'Crée un tuple avec ton prénom et ton âge.']
      },
      {
        c: c`point = (3, 4)
x, y = point
print(x, y)
name, age, city = ("Ada", 12, "Rome")
print(f"{name} is {age} and lives in {city}")
point[0] = 9`,
        e: 'TypeError',
        t: ['Unpack, and the wall', 'Spacchettare, e il muro', 'Déballer, et le mur'],
        x: [`You can unpack a tuple into several names in one line: x, y = point. The number of names must match.

The last line tries to change a tuple and Python refuses: tuples are fixed. Read the explanation. If you need to change things, use a list.`,
          `Puoi spacchettare una tupla in più nomi in una riga: x, y = point. Il numero di nomi deve corrispondere.

L'ultima riga prova a cambiare una tupla e Python rifiuta: le tuple sono fisse. Leggi la spiegazione. Se ti serve cambiare le cose, usa una lista.`,
          `Tu peux déballer un tuple en plusieurs noms en une ligne : x, y = point. Le nombre de noms doit correspondre.

La dernière ligne essaie de changer un tuple et Python refuse : les tuples sont fixes. Lis l'explication. Si tu as besoin de changer des choses, utilise une liste.`],
        d: ['Remove the last line and unpack a tuple of three numbers.', 'Togli l\'ultima riga e spacchetta una tupla di tre numeri.', 'Enlève la dernière ligne et déballe un tuple de trois nombres.']
      },
      {
        c: c`def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([4, 9, 2, 7])
print(low, high)
result = min_max([1, 5])
print(result, type(result))`,
        t: ['A function can give back many values', 'Una funzione può restituire più valori', 'Une fonction peut rendre plusieurs valeurs'],
        x: [`return a, b really returns one tuple. When you unpack it into two names, it looks like the function gives back two things at once.

This is how Python functions return several answers.`,
          `return a, b restituisce davvero una tupla. Quando la spacchetti in due nomi, sembra che la funzione restituisca due cose insieme.

È così che le funzioni di Python restituiscono più risposte.`,
          `return a, b rend vraiment un tuple. Quand tu le déballes en deux noms, on dirait que la fonction rend deux choses à la fois.

C'est ainsi que les fonctions de Python rendent plusieurs réponses.`],
        d: ['Write a function that gives back the sum and the product of two numbers.', 'Scrivi una funzione che restituisce la somma e il prodotto di due numeri.', 'Écris une fonction qui rend la somme et le produit de deux nombres.']
      },
      {
        c: c`items = ["a", "b", "c"]
as_tuple = tuple(items)
back = list(as_tuple)
print(as_tuple, back)
print((1, 2) + (3,))
print((1, 2) * 2)
print(2 in (1, 2, 3))
print((1, 2) == (1, 2), (1, 2) < (1, 3))`,
        t: ['Tuples and lists', 'Tuple e liste', 'Tuples et listes'],
        x: [`tuple(...) and list(...) convert one into the other. Tuples can be joined with + and repeated with *, and you can ask in. They are compared item by item, from the left.

Choose a list when the content will change and a tuple when it should stay as it is.`,
          `tuple(...) e list(...) convertono l'una nell'altra. Le tuple si possono unire con + e ripetere con *, e puoi chiedere in. Si confrontano elemento per elemento, da sinistra.

Scegli una lista quando il contenuto cambierà e una tupla quando deve restare com'è.`,
          `tuple(...) et list(...) convertissent l'un en l'autre. Les tuples peuvent être joints avec + et répétés avec *, et tu peux demander in. Ils se comparent élément par élément, depuis la gauche.

Choisis une liste quand le contenu va changer et un tuple quand il doit rester tel quel.`],
        d: ['Make a tuple of three colours and print the last one.', 'Crea una tupla di tre colori e stampa l\'ultimo.', 'Crée un tuple de trois couleurs et affiche la dernière.']
      }
    ]
  },

  // ------------------------------------------------------------------ 17
  {
    title: ['Dictionaries', 'I dizionari', 'Les dictionnaires'],
    subtitle: ['Look things up by name', 'Cercare le cose per nome', 'Chercher les choses par leur nom'],
    steps: [
      {
        c: c`ages = {"Ada": 12, "Max": 9}
print(ages)
print(ages["Ada"])
ages["Zoe"] = 15
print(ages)
print(len(ages))`,
        t: ['A dictionary: key and value', 'Un dizionario: chiave e valore', 'Un dictionnaire : clé et valeur'],
        x: [`A dictionary keeps pairs: a key and its value, written key: value inside curly brackets. You look a value up by its key, not by a position: ages["Ada"].

Adding a new key is just putting a value in it. Think of a real dictionary: the word is the key, the meaning is the value.`,
          `Un dizionario tiene coppie: una chiave e il suo valore, scritte chiave: valore dentro le graffe. Cerchi un valore con la sua chiave, non con una posizione: ages["Ada"].

Aggiungere una nuova chiave vuol dire solo metterci un valore. Pensa a un vero dizionario: la parola è la chiave, il significato è il valore.`,
          `Un dictionnaire garde des paires : une clé et sa valeur, écrites clé: valeur entre accolades. Tu cherches une valeur par sa clé, pas par une position : ages["Ada"].

Ajouter une nouvelle clé, c'est juste mettre une valeur dedans. Pense à un vrai dictionnaire : le mot est la clé, le sens est la valeur.`],
        d: ['Make a dictionary of three friends and their favourite colour.', 'Crea un dizionario di tre amici e del loro colore preferito.', 'Crée un dictionnaire de trois amis et de leur couleur préférée.'],
        w: ['Asking for a key that is not there stops with an error. The next step shows the safe way.', 'Chiedere una chiave che non c\'è si ferma con un errore. Il prossimo passo mostra il modo sicuro.', 'Demander une clé qui n\'y est pas s\'arrête avec une erreur. L\'étape suivante montre la façon sûre.']
      },
      {
        c: c`ages = {"Ada": 12, "Max": 9}
print("Ada" in ages)
print("Zoe" in ages)
print(ages.get("Zoe"))
print(ages.get("Zoe", "unknown"))
print(ages["Zoe"])`,
        e: 'KeyError',
        t: ['Is the key there?', 'La chiave c\'è?', 'La clé est-elle là ?'],
        x: [`in asks if a key exists. get(key) gives the value, or None if the key is missing, and get(key, default) gives the default you choose instead.

The last line uses the dangerous way, with square brackets, and Python stops with a KeyError. Read the explanation.`,
          `in chiede se una chiave esiste. get(chiave) dà il valore, o None se la chiave manca, e get(chiave, default) dà invece il default che scegli.

L'ultima riga usa il modo pericoloso, con le parentesi quadre, e Python si ferma con un KeyError. Leggi la spiegazione.`,
          `in demande si une clé existe. get(clé) donne la valeur, ou None si la clé manque, et get(clé, défaut) donne à la place le défaut que tu choisis.

La dernière ligne utilise la façon dangereuse, avec des crochets, et Python s'arrête avec une KeyError. Lis l'explication.`],
        d: ['Remove the last line and look up a name safely.', 'Togli l\'ultima riga e cerca un nome in modo sicuro.', 'Enlève la dernière ligne et cherche un nom en sécurité.']
      },
      {
        c: c`stock = {"apples": 5, "pears": 2}
stock["apples"] = 4
stock["kiwis"] = 10
del stock["pears"]
print(stock)
print(stock.pop("kiwis"))
print(stock)
stock.update({"plums": 3, "apples": 6})
print(stock)`,
        t: ['Change, add, remove', 'Cambiare, aggiungere, togliere', 'Changer, ajouter, retirer'],
        x: [`Putting a value in an existing key changes it. Putting a value in a new key adds it. del removes a key, and pop(key) removes it and gives the value back. update merges another dictionary in.

A dictionary remembers the order in which keys were added.`,
          `Mettere un valore in una chiave esistente la cambia. Mettere un valore in una nuova chiave la aggiunge. del toglie una chiave, e pop(chiave) la toglie e restituisce il valore. update unisce dentro un altro dizionario.

Un dizionario ricorda l'ordine in cui sono state aggiunte le chiavi.`,
          `Mettre une valeur dans une clé existante la change. Mettre une valeur dans une nouvelle clé l'ajoute. del retire une clé, et pop(clé) la retire et rend la valeur. update fusionne un autre dictionnaire dedans.

Un dictionnaire se souvient de l'ordre dans lequel les clés ont été ajoutées.`],
        d: ['Add one more fruit and remove another.', 'Aggiungi un altro frutto e togline un altro.', 'Ajoute un autre fruit et retires-en un autre.']
      },
      {
        c: c`ages = {"Ada": 12, "Max": 9, "Zoe": 15}
for name in ages:
    print(name)
print(list(ages.keys()))
print(list(ages.values()))
for name, age in ages.items():
    print(f"{name} is {age}")`,
        t: ['Walk through a dictionary', 'Scorrere un dizionario', 'Parcourir un dictionnaire'],
        x: [`A for loop over a dictionary gives the keys. keys() and values() give the keys and the values, and items() gives both together as pairs, which you can unpack into two names.

items() is the one you will use most.`,
          `Un ciclo for su un dizionario dà le chiavi. keys() e values() danno le chiavi e i valori, e items() dà entrambi insieme come coppie, che puoi spacchettare in due nomi.

items() è quello che userai di più.`,
          `Une boucle for sur un dictionnaire donne les clés. keys() et values() donnent les clés et les valeurs, et items() donne les deux ensemble sous forme de paires, que tu peux déballer en deux noms.

items() est celui que tu utiliseras le plus.`],
        d: ['Print the total of all the ages.', 'Stampa il totale di tutte le età.', 'Affiche le total de tous les âges.']
      },
      {
        c: c`text = "the cat and the dog and the bird"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
best = max(counts, key=counts.get)
print(best, counts[best])`,
        t: ['Count things', 'Contare le cose', 'Compter des choses'],
        x: [`A very common job: counting how many times each thing appears. Start with an empty dictionary {}. For each word, take its current count (0 if it is new) and add one.

max(counts, key=counts.get) finds the key with the biggest value.`,
          `Un lavoro molto comune: contare quante volte compare ogni cosa. Parti con un dizionario vuoto {}. Per ogni parola, prendi il suo conteggio attuale (0 se è nuova) e aggiungi uno.

max(counts, key=counts.get) trova la chiave con il valore più grande.`,
          `Un travail très courant : compter combien de fois chaque chose apparaît. Commence avec un dictionnaire vide {}. Pour chaque mot, prends son compte actuel (0 s'il est nouveau) et ajoute un.

max(counts, key=counts.get) trouve la clé avec la plus grande valeur.`],
        d: ['Count the letters of a word instead of words.', 'Conta le lettere di una parola invece delle parole.', 'Compte les lettres d\'un mot plutôt que des mots.']
      },
      {
        c: c`person = {
    "name": "Ada",
    "age": 12,
    "pets": ["cat", "dog"],
    "address": {"city": "Rome", "zip": "00100"},
}
print(person["pets"][1])
print(person["address"]["city"])
person["pets"].append("fox")
print(len(person["pets"]))`,
        t: ['Things inside things', 'Cose dentro altre cose', 'Des choses dans d\'autres choses'],
        x: [`The values of a dictionary can be anything: texts, numbers, lists, even other dictionaries. Chain the brackets to go deeper: person["address"]["city"].

This is how real data looks, for example what websites send to each other.`,
          `I valori di un dizionario possono essere qualunque cosa: testi, numeri, liste, perfino altri dizionari. Concatena le parentesi per andare più a fondo: person["address"]["city"].

È così che appaiono i dati veri, per esempio quelli che i siti si mandano tra loro.`,
          `Les valeurs d'un dictionnaire peuvent être n'importe quoi : textes, nombres, listes, même d'autres dictionnaires. Enchaîne les crochets pour aller plus profond : person["address"]["city"].

C'est ainsi que les vraies données ressemblent, par exemple ce que les sites s'envoient entre eux.`],
        d: ['Add a "friends" list to the dictionary.', 'Aggiungi una lista "friends" al dizionario.', 'Ajoute une liste "friends" au dictionnaire.']
      }
    ]
  },

  // ------------------------------------------------------------------ 18
  {
    title: ['Sets', 'Gli insiemi', 'Les ensembles'],
    subtitle: ['Each thing only once', 'Ogni cosa una volta sola', 'Chaque chose une seule fois'],
    steps: [
      {
        c: c`colours = {"red", "green", "red", "blue", "green"}
print(len(colours))
print("red" in colours)
print(set([1, 2, 2, 3, 3, 3]))
print(sorted(set("hello")))`,
        t: ['A bunch without repeats', 'Un gruppo senza ripetizioni', 'Un groupe sans répétitions'],
        x: [`A set is a bunch of different things, with no repeats and no order. Curly brackets with no colons make a set. If you put the same thing in twice, it is kept once.

set(...) builds a set from a list or a text, which is the quickest way to remove repeats.`,
          `Un insieme è un gruppo di cose diverse, senza ripetizioni e senza ordine. Le graffe senza i due punti fanno un insieme. Se metti la stessa cosa due volte, viene tenuta una volta sola.

set(...) costruisce un insieme da una lista o da un testo, ed è il modo più rapido per togliere le ripetizioni.`,
          `Un ensemble est un groupe de choses différentes, sans répétitions et sans ordre. Les accolades sans deux-points font un ensemble. Si tu mets la même chose deux fois, elle n'est gardée qu'une fois.

set(...) construit un ensemble à partir d'une liste ou d'un texte, ce qui est la façon la plus rapide de retirer les répétitions.`],
        d: ['Count the different letters in "mississippi".', 'Conta le lettere diverse in "mississippi".', 'Compte les lettres différentes dans "mississippi".'],
        w: ['{} with nothing inside is an empty dictionary, not an empty set. For an empty set write set().', '{} senza niente dentro è un dizionario vuoto, non un insieme vuoto. Per un insieme vuoto scrivi set().', '{} sans rien dedans est un dictionnaire vide, pas un ensemble vide. Pour un ensemble vide écris set().']
      },
      {
        c: c`tags = {"python", "code"}
tags.add("fun")
tags.add("code")
print(len(tags))
tags.remove("python")
tags.discard("nothing")
print(sorted(tags))
for t in sorted(tags):
    print(t)`,
        t: ['Add and remove', 'Aggiungere e togliere', 'Ajouter et retirer'],
        x: [`add puts a thing in. Adding something that is already there changes nothing. remove takes it out but stops with an error if it is not there; discard is the same without the error.

Sets have no order, so use sorted(...) when you want to show them in a clean order.`,
          `add mette una cosa dentro. Aggiungere qualcosa che c'è già non cambia niente. remove la toglie ma si ferma con un errore se non c'è; discard è lo stesso senza errore.

Gli insiemi non hanno ordine, quindi usa sorted(...) quando vuoi mostrarli in un ordine pulito.`,
          `add met une chose dedans. Ajouter quelque chose qui y est déjà ne change rien. remove la retire mais s'arrête avec une erreur si elle n'y est pas ; discard fait pareil sans l'erreur.

Les ensembles n'ont pas d'ordre, utilise donc sorted(...) quand tu veux les montrer dans un ordre propre.`],
        d: ['Make a set of your three favourite foods and add a fourth.', 'Crea un insieme dei tuoi tre cibi preferiti e aggiungine un quarto.', 'Crée un ensemble de tes trois nourritures préférées et ajoutes-en une quatrième.']
      },
      {
        c: c`a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a | b))
print(sorted(a & b))
print(sorted(a - b))
print(sorted(a ^ b))
print({1, 2} <= a)`,
        t: ['Combine two sets', 'Combinare due insiemi', 'Combiner deux ensembles'],
        x: [`Sets work like in maths class. | is the union (everything of both), & is what they have in common, - is what is in the first but not in the second, and ^ is what is in only one of them. <= asks if one is inside the other.

Great to find what two groups share.`,
          `Gli insiemi funzionano come a scuola di matematica. | è l'unione (tutto di entrambi), & è quello che hanno in comune, - è quello che è nel primo ma non nel secondo, e ^ è quello che è in uno solo dei due. <= chiede se uno sta dentro l'altro.

Ottimo per trovare cosa condividono due gruppi.`,
          `Les ensembles marchent comme en cours de maths. | est l'union (tout des deux), & est ce qu'ils ont en commun, - est ce qui est dans le premier mais pas dans le second, et ^ est ce qui est dans un seul des deux. <= demande si l'un est dans l'autre.

Génial pour trouver ce que deux groupes partagent.`],
        d: ['Find the friends that Ada and Max have in common.', 'Trova gli amici che Ada e Max hanno in comune.', 'Trouve les amis qu\'Ada et Max ont en commun.']
      },
      {
        c: c`visits = ["Rome", "Paris", "Rome", "Oslo", "Paris", "Rome"]
print(len(visits))
unique = set(visits)
print(len(unique))
ordered = []
for v in visits:
    if v not in ordered:
        ordered.append(v)
print(ordered)`,
        t: ['Remove repeats', 'Togliere le ripetizioni', 'Retirer les répétitions'],
        x: [`To count the different things, turn the list into a set and use len. To keep the first appearance order, loop and add to a new list only if it is not already there.

not in is the opposite of in.`,
          `Per contare le cose diverse, trasforma la lista in un insieme e usa len. Per tenere l'ordine di prima comparsa, scorri e aggiungi a una nuova lista solo se non c'è già.

not in è il contrario di in.`,
          `Pour compter les choses différentes, transforme la liste en ensemble et utilise len. Pour garder l'ordre de première apparition, parcours et ajoute à une nouvelle liste seulement si l'élément n'y est pas déjà.

not in est le contraire de in.`],
        d: ['Count how many different words a sentence has.', 'Conta quante parole diverse ha una frase.', 'Compte combien de mots différents a une phrase.']
      }
    ]
  },

  // ------------------------------------------------------------------ 19
  {
    title: ['Your own functions', 'Le tue funzioni', 'Tes propres fonctions'],
    subtitle: ['Give a few lines a name', 'Dai un nome a qualche riga', 'Donne un nom à quelques lignes'],
    steps: [
      {
        c: c`def greet():
    print("Hello!")
    print("Welcome to Pyviel.")

greet()
greet()`,
        t: ['Make a function', 'Crea una funzione', 'Fais une fonction'],
        x: [`A function is a few lines with a name. def starts it, then the name, brackets and a colon. The lines pushed in below are what it does.

Defining it does not run it. To run it you call it by name with brackets: greet(). You can call it as many times as you like.`,
          `Una funzione è qualche riga con un nome. def la comincia, poi il nome, le parentesi e i due punti. Le righe rientrate sotto sono quello che fa.

Definirla non la fa girare. Per farla girare la chiami per nome con le parentesi: greet(). La puoi chiamare quante volte vuoi.`,
          `Une fonction est quelques lignes avec un nom. def la commence, puis le nom, les parenthèses et deux-points. Les lignes décalées dessous sont ce qu'elle fait.

La définir ne la fait pas tourner. Pour la faire tourner tu l'appelles par son nom avec des parenthèses : greet(). Tu peux l'appeler autant de fois que tu veux.`],
        d: ['Add a third print to the function and call it once.', 'Aggiungi un terzo print alla funzione e chiamala una volta.', 'Ajoute un troisième print à la fonction et appelle-la une fois.'],
        w: ['Writing greet without brackets does not run it. The brackets are the call.', 'Scrivere greet senza parentesi non la fa girare. Le parentesi sono la chiamata.', 'Écrire greet sans parenthèses ne la fait pas tourner. Les parenthèses sont l\'appel.']
      },
      {
        c: c`def greet(name):
    print("Hello", name)

greet("Ada")
greet("Max")

def add(a, b):
    print(a + b)

add(3, 4)`,
        t: ['Give it something to work with', 'Dagli qualcosa con cui lavorare', 'Donne-lui quelque chose avec quoi travailler'],
        x: [`Names inside the brackets are parameters: boxes that exist only inside the function and are filled when you call it. greet("Ada") puts "Ada" in name.

A function can have as many parameters as it needs, separated by commas.`,
          `I nomi dentro le parentesi sono parametri: scatole che esistono solo dentro la funzione e si riempiono quando la chiami. greet("Ada") mette "Ada" in name.

Una funzione può avere tanti parametri quanti ne servono, separati da virgole.`,
          `Les noms entre parenthèses sont des paramètres : des boîtes qui n'existent qu'à l'intérieur de la fonction et sont remplies quand tu l'appelles. greet("Ada") met "Ada" dans name.

Une fonction peut avoir autant de paramètres qu'il lui en faut, séparés par des virgules.`],
        d: ['Write a function that prints the double of a number.', 'Scrivi una funzione che stampa il doppio di un numero.', 'Écris une fonction qui affiche le double d\'un nombre.']
      },
      {
        c: c`def square(n):
    return n * n

result = square(5)
print(result)
print(square(3) + square(4))
print(square(square(2)))`,
        t: ['Give back an answer: return', 'Restituire una risposta: return', 'Rendre une réponse : return'],
        x: [`return sends a value back to the place that called the function, so you can keep it in a box or use it in a sum. The function ends at the return line.

Calls can be nested, because a call is a value like any other.`,
          `return manda un valore al posto che ha chiamato la funzione, così puoi tenerlo in una scatola o usarlo in un conto. La funzione finisce alla riga return.

Le chiamate si possono annidare, perché una chiamata è un valore come ogni altro.`,
          `return renvoie une valeur à l'endroit qui a appelé la fonction, pour que tu puisses la garder dans une boîte ou l'utiliser dans un calcul. La fonction s'arrête à la ligne return.

Les appels peuvent s'imbriquer, parce qu'un appel est une valeur comme une autre.`],
        d: ['Write a function cube that gives back n * n * n.', 'Scrivi una funzione cube che restituisce n * n * n.', 'Écris une fonction cube qui rend n * n * n.']
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
        x: [`print only shows something on the screen. The function still gives back nothing, which Python calls None. return gives back a value you can keep.

If you want to use the answer later in the program, use return.`,
          `print mostra solo qualcosa sullo schermo. La funzione continua a restituire niente, che Python chiama None. return restituisce un valore che puoi tenere.

Se vuoi usare la risposta più avanti nel programma, usa return.`,
          `print montre seulement quelque chose à l'écran. La fonction ne rend toujours rien, ce que Python appelle None. return rend une valeur que tu peux garder.

Si tu veux utiliser la réponse plus tard dans le programme, utilise return.`],
        d: ['Why is a None? Explain it in your own words.', 'Perché a è None? Spiegalo con parole tue.', 'Pourquoi a vaut None ? Explique-le avec tes mots.']
      },
      {
        c: c`def is_even(n):
    """Tell if a whole number is even."""
    return n % 2 == 0

def grade(score):
    if score >= 90:
        return "A"
    if score >= 70:
        return "B"
    return "C"

print(is_even(4), is_even(7))
print(grade(95), grade(72), grade(10))
print(is_even.__doc__)`,
        t: ['Functions that decide', 'Funzioni che decidono', 'Des fonctions qui décident'],
        x: [`A function can return True or False, or choose what to return with if. The first return that is reached ends the function, so the lines after it do not run.

The text between triple quotes right under def is a description of the function. Good functions have one.`,
          `Una funzione può restituire True o False, o scegliere cosa restituire con un if. Il primo return raggiunto fa finire la funzione, quindi le righe dopo non girano.

Il testo tra triple virgolette subito sotto def è una descrizione della funzione. Le buone funzioni ne hanno una.`,
          `Une fonction peut rendre True ou False, ou choisir quoi rendre avec un if. Le premier return atteint termine la fonction, donc les lignes d'après ne tournent pas.

Le texte entre triples guillemets juste sous def est une description de la fonction. Les bonnes fonctions en ont une.`],
        d: ['Write is_adult(age) that gives back True for 18 and more.', 'Scrivi is_adult(age) che restituisce True da 18 in su.', 'Écris is_adult(age) qui rend True à partir de 18.']
      },
      {
        c: c`def average(numbers):
    total = 0
    for n in numbers:
        total += n
    return total / len(numbers)

def describe(name, scores):
    print(f"{name}: average {average(scores):.1f}")

describe("Ada", [8, 9, 7])
describe("Max", [6, 6, 9, 10])`,
        t: ['Small functions that work together', 'Piccole funzioni che lavorano insieme', 'Petites fonctions qui travaillent ensemble'],
        x: [`Big programs are made of small functions, each doing one thing well. describe uses average, and average could be used anywhere else.

If you catch yourself copying the same lines twice, it is a sign: put them in a function.`,
          `I programmi grandi sono fatti di piccole funzioni, ognuna che fa bene una cosa. describe usa average, e average si potrebbe usare ovunque.

Se ti accorgi di copiare le stesse righe due volte, è un segnale: mettile in una funzione.`,
          `Les gros programmes sont faits de petites fonctions, chacune faisant bien une chose. describe utilise average, et average pourrait être utilisée n'importe où ailleurs.

Si tu te surprends à copier les mêmes lignes deux fois, c'est un signe : mets-les dans une fonction.`],
        d: ['Add a function best(scores) that gives the highest score.', 'Aggiungi una funzione best(scores) che dà il punteggio più alto.', 'Ajoute une fonction best(scores) qui donne le score le plus haut.']
      }
    ]
  },

  // ------------------------------------------------------------------ 20
  {
    title: ['Function options', 'Opzioni delle funzioni', 'Options des fonctions'],
    subtitle: ['Defaults, names and many values', 'Valori predefiniti, nomi e tanti valori', 'Valeurs par défaut, noms et beaucoup de valeurs'],
    steps: [
      {
        c: c`def greet(name, greeting="Hello"):
    print(greeting, name)

greet("Ada")
greet("Max", "Hi")
greet("Zoe", greeting="Hey")`,
        t: ['A default value', 'Un valore predefinito', 'Une valeur par défaut'],
        x: [`A parameter can have a default: greeting="Hello". If the caller gives nothing, the default is used. If the caller gives a value, it wins.

Parameters with a default must come after those without.`,
          `Un parametro può avere un valore predefinito: greeting="Hello". Se chi chiama non dà niente, si usa il predefinito. Se chi chiama dà un valore, vince quello.

I parametri con un predefinito devono venire dopo quelli senza.`,
          `Un paramètre peut avoir une valeur par défaut : greeting="Hello". Si l'appelant ne donne rien, la valeur par défaut est utilisée. Si l'appelant donne une valeur, c'est elle qui gagne.

Les paramètres avec une valeur par défaut doivent venir après ceux qui n'en ont pas.`],
        d: ['Add a default "!" for an ending.', 'Aggiungi un predefinito "!" per il finale.', 'Ajoute un défaut "!" pour la fin.']
      },
      {
        c: c`def box(width, height, char="#"):
    for _ in range(height):
        print(char * width)

box(5, 2)
box(3, 3, "*")
box(height=1, width=8, char="-")`,
        t: ['Call with names', 'Chiamare con i nomi', 'Appeler avec des noms'],
        x: [`When you call a function you can write the name of each parameter: height=1. The order no longer matters, and the call reads like a sentence.

By the way, _ is a normal name that people use for a value they do not need.`,
          `Quando chiami una funzione puoi scrivere il nome di ogni parametro: height=1. L'ordine non conta più, e la chiamata si legge come una frase.

A proposito, _ è un nome normale che si usa per un valore che non serve.`,
          `Quand tu appelles une fonction tu peux écrire le nom de chaque paramètre : height=1. L'ordre ne compte plus, et l'appel se lit comme une phrase.

Au fait, _ est un nom normal que les gens utilisent pour une valeur dont ils n'ont pas besoin.`],
        d: ['Call box with a width of 10, a height of 1 and the character "=".', 'Chiama box con larghezza 10, altezza 1 e il carattere "=".', 'Appelle box avec une largeur de 10, une hauteur de 1 et le caractère "=".']
      },
      {
        c: c`def total(*numbers):
    print(numbers)
    return sum(numbers)

print(total(1, 2, 3))
print(total(10))
print(total())`,
        t: ['As many values as you like', 'Tanti valori quanti vuoi', 'Autant de valeurs que tu veux'],
        x: [`A star before a parameter, *numbers, collects every value given into one tuple. The function can then be called with any number of values.

print itself works like that: it takes as many things as you give it.`,
          `Una stella davanti a un parametro, *numbers, raccoglie tutti i valori dati in una tupla. La funzione si può quindi chiamare con un numero qualunque di valori.

Anche print funziona così: prende tante cose quante gliene dai.`,
          `Une étoile devant un paramètre, *numbers, rassemble toutes les valeurs données dans un tuple. La fonction peut alors être appelée avec n'importe quel nombre de valeurs.

print lui-même marche comme ça : il prend autant de choses que tu lui en donnes.`],
        d: ['Write a function biggest(*numbers) with max.', 'Scrivi una funzione biggest(*numbers) con max.', 'Écris une fonction biggest(*numbers) avec max.']
      },
      {
        c: c`def profile(**details):
    for key, value in details.items():
        print(key, "=", value)

profile(name="Ada", age=12, city="Rome")

numbers = [4, 8, 15]
print(*numbers)
data = {"sep": " | "}
print("a", "b", **data)`,
        t: ['Many named values', 'Tanti valori con nome', 'Beaucoup de valeurs nommées'],
        x: [`Two stars, **details, collect all the named values into a dictionary. And the stars work the other way too, when calling: *list spreads a list into separate values, **dict spreads a dictionary into named ones.

You will see this in real code all the time.`,
          `Due stelle, **details, raccolgono tutti i valori con nome in un dizionario. E le stelle funzionano anche al contrario, quando chiami: *lista spande una lista in valori separati, **dict spande un dizionario in valori con nome.

Lo vedrai nel codice vero in continuazione.`,
          `Deux étoiles, **details, rassemblent toutes les valeurs nommées dans un dictionnaire. Et les étoiles marchent aussi dans l'autre sens, à l'appel : *liste étale une liste en valeurs séparées, **dict étale un dictionnaire en valeurs nommées.

Tu verras ça tout le temps dans le vrai code.`],
        d: ['Call profile with three details of your own.', 'Chiama profile con tre dettagli tuoi.', 'Appelle profile avec trois détails à toi.']
      },
      {
        c: c`def power(base, exponent=2):
    """Raise base to the exponent (the square by default)."""
    return base ** exponent

print(power(5))
print(power(2, 10))
print(power(exponent=3, base=2))
help_text = power.__doc__
print(help_text)
print(callable(power), type(power))`,
        t: ['A function is a value too', 'Anche una funzione è un valore', 'Une fonction est aussi une valeur'],
        x: [`In Python a function is a thing like any other: you can keep it in a box, give it to another function, or ask about it with callable and type.

Remember this idea. It opens a whole new way of writing programs, which you will use soon.`,
          `In Python una funzione è una cosa come le altre: la puoi tenere in una scatola, darla a un'altra funzione, o chiedere di lei con callable e type.

Ricorda questa idea. Apre un modo tutto nuovo di scrivere programmi, che userai presto.`,
          `En Python une fonction est une chose comme les autres : tu peux la garder dans une boîte, la donner à une autre fonction, ou t'informer d'elle avec callable et type.

Retiens cette idée. Elle ouvre une façon toute nouvelle d'écrire des programmes, que tu utiliseras bientôt.`],
        d: ['Put the function in another name and call it: p = power.', 'Metti la funzione in un altro nome e chiamala: p = power.', 'Mets la fonction dans un autre nom et appelle-la : p = power.']
      }
    ]
  },

  // ------------------------------------------------------------------ 21
  {
    title: ['Where names live', 'Dove vivono i nomi', 'Où vivent les noms'],
    subtitle: ['Inside and outside a function', 'Dentro e fuori una funzione', 'Dans et hors d\'une fonction'],
    steps: [
      {
        c: c`def hello():
    message = "inside"
    print(message)

hello()
print(message)`,
        e: 'NameError',
        t: ['A box that only lives inside', 'Una scatola che vive solo dentro', 'Une boîte qui ne vit qu\'à l\'intérieur'],
        x: [`A name made inside a function is local: it exists only while the function runs. Outside, Python does not know it, and the last line stops with a NameError.

It is a good thing: every function has its own private boxes, so names inside cannot clash with names outside.`,
          `Un nome creato dentro una funzione è locale: esiste solo mentre la funzione gira. Fuori, Python non lo conosce, e l'ultima riga si ferma con un NameError.

È una cosa buona: ogni funzione ha le sue scatole private, quindi i nomi dentro non possono scontrarsi con quelli fuori.`,
          `Un nom créé dans une fonction est local : il n'existe que pendant que la fonction tourne. Dehors, Python ne le connaît pas, et la dernière ligne s'arrête avec une NameError.

C'est une bonne chose : chaque fonction a ses boîtes privées, donc les noms de l'intérieur ne peuvent pas se heurter à ceux de l'extérieur.`],
        d: ['Run it, read the explanation, then print inside the function only.', 'Eseguilo, leggi la spiegazione, poi stampa solo dentro la funzione.', 'Lance-le, lis l\'explication, puis affiche seulement dans la fonction.']
      },
      {
        c: c`rate = 2

def double_price(price):
    return price * rate

print(double_price(10))

rate = 3
print(double_price(10))`,
        t: ['Looking outside', 'Guardare fuori', 'Regarder dehors'],
        x: [`A function can read a name from outside (a global one), if it has no local one with the same name. Python looks inside first, then outside.

Reading is easy. Changing is where care is needed, as the next step shows.`,
          `Una funzione può leggere un nome da fuori (uno globale), se non ne ha uno locale con lo stesso nome. Python guarda prima dentro, poi fuori.

Leggere è facile. Cambiare è dove serve attenzione, come mostra il prossimo passo.`,
          `Une fonction peut lire un nom de l'extérieur (un global), si elle n'en a pas un local avec le même nom. Python regarde d'abord dedans, puis dehors.

Lire est facile. Changer est là où il faut faire attention, comme le montre l'étape suivante.`],
        d: ['Change rate to 5 and call it again.', 'Cambia rate in 5 e richiamala.', 'Change rate en 5 et rappelle-la.']
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

The honest fix is next: say that the name is the global one.`,
          `Siccome add_one dà un valore a counter, Python decide che counter è un nome locale della funzione. Ma allora leggerlo prima che abbia un valore fallisce: UnboundLocalError.

La correzione onesta è la prossima: dire che il nome è quello globale.`,
          `Comme add_one donne une valeur à counter, Python décide que counter est un nom local de la fonction. Mais alors le lire avant qu'il ait une valeur échoue : UnboundLocalError.

La correction honnête vient ensuite : dire que le nom est le global.`],
        d: ['Run it and read the sentence from Pyviel.', 'Eseguilo e leggi la frase di Pyviel.', 'Lance-le et lis la phrase de Pyviel.']
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
        t: ['global, and a better way', 'global, e un modo migliore', 'global, et une meilleure façon'],
        x: [`global counter says "I mean the name outside". It works, but programmers avoid it, because many functions changing the same box make programs hard to follow.

A better way: give the function the value and take the result back with return, as in better.`,
          `global counter dice "intendo il nome di fuori". Funziona, ma chi programma lo evita, perché tante funzioni che cambiano la stessa scatola rendono i programmi difficili da seguire.

Un modo migliore: dare alla funzione il valore e riprendere il risultato con return, come in better.`,
          `global counter dit « je veux dire le nom de l'extérieur ». Ça marche, mais les gens qui programment l'évitent, parce que beaucoup de fonctions qui changent la même boîte rendent les programmes difficiles à suivre.

Une meilleure façon : donner la valeur à la fonction et reprendre le résultat avec return, comme dans better.`],
        d: ['Write a function reset() that sets a global score to 0.', 'Scrivi una funzione reset() che mette a 0 un punteggio globale.', 'Écris une fonction reset() qui met un score global à 0.']
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
        t: ['A function inside a function', 'Una funzione dentro una funzione', 'Une fonction dans une fonction'],
        x: [`A function can make another function and give it back. The inner step remembers count even after make_counter has finished, and nonlocal lets it change that box.

Each call to make_counter makes its own separate counter. This is called a closure. It is a little advanced, so read it twice.`,
          `Una funzione può creare un'altra funzione e restituirla. La step interna ricorda count anche dopo che make_counter è finita, e nonlocal le permette di cambiare quella scatola.

Ogni chiamata di make_counter crea il suo contatore separato. Si chiama closure. È un po' avanzato, quindi leggilo due volte.`,
          `Une fonction peut en fabriquer une autre et la rendre. La step intérieure se souvient de count même après que make_counter a fini, et nonlocal lui permet de changer cette boîte.

Chaque appel de make_counter fabrique son propre compteur séparé. On appelle ça une closure. C'est un peu avancé, relis-le deux fois.`],
        d: ['Make a counter that counts by 10.', 'Crea un contatore che conta di 10 in 10.', 'Crée un compteur qui compte de 10 en 10.']
      }
    ]
  },

  // ------------------------------------------------------------------ 22
  {
    title: ['A function that calls itself', 'Una funzione che richiama se stessa', 'Une fonction qui s\'appelle elle-même'],
    subtitle: ['Recursion', 'La ricorsione', 'La récursion'],
    steps: [
      {
        c: c`def countdown(n):
    if n == 0:
        print("Liftoff!")
    else:
        print(n)
        countdown(n - 1)

countdown(3)`,
        t: ['The idea', 'L\'idea', 'L\'idée'],
        x: [`A function may call itself, as long as every call gets closer to an end. This is called recursion.

countdown(3) prints 3 and asks countdown(2) to do the rest, and so on down to 0, where it stops calling. That stopping case is called the base case, and every recursive function needs one.`,
          `Una funzione può richiamare se stessa, purché ogni chiamata si avvicini a una fine. Si chiama ricorsione.

countdown(3) stampa 3 e chiede a countdown(2) di fare il resto, e così via fino a 0, dove smette di chiamare. Quel caso di arresto si chiama caso base, e ogni funzione ricorsiva ne ha bisogno.`,
          `Une fonction peut s'appeler elle-même, tant que chaque appel se rapproche d'une fin. On appelle ça la récursion.

countdown(3) affiche 3 et demande à countdown(2) de faire le reste, et ainsi de suite jusqu'à 0, où elle arrête d'appeler. Ce cas d'arrêt s'appelle le cas de base, et toute fonction récursive en a besoin.`],
        d: ['Make it count down from 5.', 'Fallo contare alla rovescia da 5.', 'Fais-le compter à rebours depuis 5.']
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
          `5! (cinque fattoriale) vuol dire 5 x 4 x 3 x 2 x 1. E questo è 5 per 4!. Quindi factorial(5) è 5 * factorial(4), che è 5 * 4 * factorial(3), giù fino a factorial(1), che è semplicemente 1.

Ogni chiamata aspetta la risposta della successiva, poi moltiplica.`,
          `5! (cinq factorielle) veut dire 5 x 4 x 3 x 2 x 1. Et c'est 5 fois 4!. Donc factorial(5) est 5 * factorial(4), qui est 5 * 4 * factorial(3), jusqu'à factorial(1), qui vaut simplement 1.

Chaque appel attend la réponse du suivant, puis multiplie.`],
        d: ['Try factorial(20).', 'Prova factorial(20).', 'Essaie factorial(20).']
      },
      {
        c: c`def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print([fib(i) for i in range(10)])`,
        t: ['Fibonacci numbers', 'I numeri di Fibonacci', 'Les nombres de Fibonacci'],
        x: [`Each Fibonacci number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8... The function says it almost word by word, with two base cases.

It is beautiful, but slow for big numbers, because it recalculates the same things many times. Later you will learn to speed it up.`,
          `Ogni numero di Fibonacci è la somma dei due precedenti: 0, 1, 1, 2, 3, 5, 8... La funzione lo dice quasi parola per parola, con due casi base.

È bella, ma lenta con i numeri grandi, perché ricalcola le stesse cose molte volte. Più avanti imparerai a velocizzarla.`,
          `Chaque nombre de Fibonacci est la somme des deux précédents : 0, 1, 1, 2, 3, 5, 8... La fonction le dit presque mot pour mot, avec deux cas de base.

Elle est belle, mais lente pour les grands nombres, parce qu'elle recalcule les mêmes choses plusieurs fois. Plus tard tu apprendras à l'accélérer.`],
        d: ['Print the first 15 numbers.', 'Stampa i primi 15 numeri.', 'Affiche les 15 premiers nombres.']
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
        t: ['Recursion on lists and texts', 'Ricorsione su liste e testi', 'Récursion sur des listes et des textes'],
        x: [`Recursion fits things made of smaller pieces. The sum of a list is its first item plus the sum of the rest. A reversed text is the reversed rest followed by the first letter.

The base case is the smallest piece: an empty list, or a text of one letter.`,
          `La ricorsione si adatta alle cose fatte di pezzi più piccoli. La somma di una lista è il suo primo elemento più la somma del resto. Un testo capovolto è il resto capovolto seguito dalla prima lettera.

Il caso base è il pezzo più piccolo: una lista vuota, o un testo di una lettera.`,
          `La récursion convient aux choses faites de morceaux plus petits. La somme d'une liste est son premier élément plus la somme du reste. Un texte retourné est le reste retourné suivi de la première lettre.

Le cas de base est le plus petit morceau : une liste vide, ou un texte d'une lettre.`],
        d: ['Write a recursive function that counts the items of a list.', 'Scrivi una funzione ricorsiva che conta gli elementi di una lista.', 'Écris une fonction récursive qui compte les éléments d\'une liste.']
      },
      {
        c: c`def forever(n):
    return forever(n + 1)

forever(1)`,
        e: 'RecursionError',
        t: ['When it never stops', 'Quando non si ferma mai', 'Quand elle ne s\'arrête jamais'],
        x: [`Without a base case a function calls itself forever. Python protects you: after about a thousand nested calls it stops with a RecursionError.

If you see it, check the base case and check that every call really gets closer to it.`,
          `Senza un caso base una funzione richiama se stessa per sempre. Python ti protegge: dopo circa mille chiamate annidate si ferma con un RecursionError.

Se lo vedi, controlla il caso base e controlla che ogni chiamata si avvicini davvero ad esso.`,
          `Sans cas de base, une fonction s'appelle elle-même pour toujours. Python te protège : après environ mille appels imbriqués il s'arrête avec une RecursionError.

Si tu le vois, vérifie le cas de base et vérifie que chaque appel s'en rapproche vraiment.`],
        d: ['Fix the function with a base case: stop when n is 5.', 'Correggi la funzione con un caso base: fermati quando n è 5.', 'Corrige la fonction avec un cas de base : arrête-toi quand n vaut 5.']
      }
    ]
  },

  // ------------------------------------------------------------------ 23
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
        t: ['A list in one line', 'Una lista in una riga', 'Une liste en une ligne'],
        x: [`A list comprehension builds a list in one line: [what for item in things]. It says the same as the loop above it, but shorter.

Read it like English: "n times n, for each n in the range".`,
          `Una comprensione di lista costruisce una lista in una riga: [cosa for elemento in cose]. Dice la stessa cosa del ciclo sopra, ma più corta.

Leggila come inglese: "n per n, per ogni n nell'intervallo".`,
          `Une compréhension de liste construit une liste en une ligne : [quoi for élément in choses]. Elle dit la même chose que la boucle au-dessus, mais en plus court.

Lis-la comme de l'anglais : « n fois n, pour chaque n dans la plage ».`],
        d: ['Make a list of the double of each number from 1 to 10.', 'Fai una lista del doppio di ogni numero da 1 a 10.', 'Fais une liste du double de chaque nombre de 1 à 10.']
      },
      {
        c: c`nums = [1, 2, 3, 4, 5, 6, 7, 8]
evens = [n for n in nums if n % 2 == 0]
print(evens)
words = ["apple", "fig", "banana"]
print([w.upper() for w in words if len(w) > 3])
print([n * 10 if n > 5 else n for n in nums])`,
        t: ['Filter while building', 'Filtrare mentre si costruisce', 'Filtrer en construisant'],
        x: [`Add if at the end to keep only some items: [n for n in nums if n % 2 == 0] keeps the even numbers.

If you want to change the value depending on a question, put the choice at the front: n * 10 if n > 5 else n.`,
          `Aggiungi if alla fine per tenere solo alcuni elementi: [n for n in nums if n % 2 == 0] tiene i numeri pari.

Se vuoi cambiare il valore in base a una domanda, metti la scelta davanti: n * 10 if n > 5 else n.`,
          `Ajoute if à la fin pour ne garder que certains éléments : [n for n in nums if n % 2 == 0] garde les nombres pairs.

Si tu veux changer la valeur selon une question, mets le choix devant : n * 10 if n > 5 else n.`],
        d: ['Keep only the numbers bigger than 3.', 'Tieni solo i numeri maggiori di 3.', 'Garde seulement les nombres plus grands que 3.']
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

Dictionary comprehensions are great to swap keys and values or to make a lookup table.`,
          `Lo stesso trucco funziona con le graffe. {chiave: valore for ...} costruisce un dizionario, e {elemento for ...} costruisce un insieme.

Le comprensioni di dizionario sono ottime per scambiare chiavi e valori o per fare una tabella di ricerca.`,
          `Le même truc marche avec les accolades. {clé: valeur for ...} construit un dictionnaire, et {élément for ...} construit un ensemble.

Les compréhensions de dictionnaire sont parfaites pour échanger clés et valeurs ou faire une table de recherche.`],
        d: ['Make a dictionary of each number from 1 to 5 and its square.', 'Fai un dizionario di ogni numero da 1 a 5 e del suo quadrato.', 'Fais un dictionnaire de chaque nombre de 1 à 5 et de son carré.']
      },
      {
        c: c`grid = [[row * col for col in range(1, 4)] for row in range(1, 4)]
print(grid)
flat = [x for line in grid for x in line]
print(flat)
pairs = [(a, b) for a in "ab" for b in (1, 2)]
print(pairs)`,
        t: ['Two loops in one', 'Due cicli in uno', 'Deux boucles en une'],
        x: [`A comprehension can have two for parts, like nested loops. Read them in the same order as you would write the loops: first the outer, then the inner.

Use this sparingly. When a comprehension gets hard to read, a normal loop is kinder.`,
          `Una comprensione può avere due parti for, come cicli annidati. Leggile nello stesso ordine in cui scriveresti i cicli: prima l'esterno, poi l'interno.

Usalo con parsimonia. Quando una comprensione diventa difficile da leggere, un ciclo normale è più gentile.`,
          `Une compréhension peut avoir deux parties for, comme des boucles imbriquées. Lis-les dans le même ordre que tu écrirais les boucles : d'abord l'extérieure, puis l'intérieure.

Utilise ça avec modération. Quand une compréhension devient difficile à lire, une boucle normale est plus gentille.`],
        d: ['Flatten the grid with one comprehension, as in the second line.', 'Appiattisci la griglia con una comprensione, come nella seconda riga.', 'Aplatis la grille avec une compréhension, comme à la deuxième ligne.']
      },
      {
        c: c`double = lambda n: n * 2
print(double(21))
print((lambda a, b: a + b)(3, 4))
words = ["pear", "fig", "banana"]
print(sorted(words, key=lambda w: len(w)))
print(list(map(lambda n: n + 1, [1, 2, 3])))
print(list(filter(lambda n: n > 1, [1, 2, 3])))`,
        t: ['A tiny function: lambda', 'Una piccola funzione: lambda', 'Une toute petite fonction : lambda'],
        x: [`lambda makes a small function with no name, in one line: lambda inputs: result. It is handy when you need a function for a moment, as with key= in sorted.

map applies a function to every item, and filter keeps the items that pass. Comprehensions usually read better, but you will meet these in other people's code.`,
          `lambda crea una piccola funzione senza nome, in una riga: lambda ingressi: risultato. È comoda quando ti serve una funzione per un momento, come con key= in sorted.

map applica una funzione a ogni elemento, e filter tiene gli elementi che passano. Le comprensioni di solito si leggono meglio, ma incontrerai questi nel codice di altri.`,
          `lambda fabrique une toute petite fonction sans nom, en une ligne : lambda entrées: résultat. C'est pratique quand tu as besoin d'une fonction pour un instant, comme avec key= dans sorted.

map applique une fonction à chaque élément, et filter garde les éléments qui passent. Les compréhensions se lisent d'habitude mieux, mais tu rencontreras ceux-là dans le code des autres.`],
        d: ['Sort a list of numbers by how far they are from 10.', 'Ordina una lista di numeri in base a quanto sono lontani da 10.', 'Trie une liste de nombres selon leur distance à 10.']
      }
    ]
  },

  // ------------------------------------------------------------------ 24
  {
    title: ['A quiz game', 'Un gioco a quiz', 'Un jeu de quiz'],
    subtitle: ['Put stage 2 together', 'Metti insieme il livello 2', 'Rassemble le niveau 2'],
    steps: [
      {
        c: c`questions = {
    "Capital of Italy?": "rome",
    "How many legs has a spider?": "8",
    "Opposite of hot?": "cold",
}
for question, answer in questions.items():
    print(question, "->", answer)`,
        t: ['The questions', 'Le domande', 'Le domande'],
        x: [`A good program starts with its data. Here a dictionary holds each question with its right answer, so adding a question is adding one line.

First let us just walk through it and check that the data is right.`,
          `Un buon programma comincia dai suoi dati. Qui un dizionario tiene ogni domanda con la sua risposta giusta, quindi aggiungere una domanda vuol dire aggiungere una riga.

Per prima cosa scorriamolo e controlliamo che i dati siano giusti.`,
          `Un bon programme commence par ses données. Ici un dictionnaire garde chaque question avec sa bonne réponse, donc ajouter une question, c'est ajouter une ligne.

Pour commencer, parcourons-le et vérifions que les données sont justes.`],
        d: ['Add two questions of your own.', 'Aggiungi due domande tue.', 'Ajoute deux questions à toi.']
      },
      {
        c: c`def check(given, right):
    return given.strip().lower() == right

print(check("  Rome ", "rome"))
print(check("Milan", "rome"))`,
        t: ['A function to judge', 'Una funzione per giudicare', 'Une fonction pour juger'],
        x: [`One small function with one job: tell if an answer is right. strip removes stray spaces and lower makes small letters, so "  Rome " counts.

Writing the judging in its own function means that you can improve it later without touching the rest.`,
          `Una piccola funzione con un solo compito: dire se una risposta è giusta. strip toglie gli spazi in più e lower mette le lettere minuscole, quindi "  Rome " vale.

Scrivere il giudizio in una funzione a parte vuol dire che puoi migliorarlo dopo senza toccare il resto.`,
          `Une petite fonction avec un seul travail : dire si une réponse est juste. strip enlève les espaces en trop et lower met en minuscules, donc "  Rome " compte.

Écrire le jugement dans sa propre fonction veut dire que tu peux l'améliorer plus tard sans toucher au reste.`],
        d: ['Make check ignore a full stop at the end of the answer, with strip(" .").', 'Fai ignorare a check un punto alla fine della risposta, con strip(" .").', 'Fais ignorer à check un point à la fin de la réponse, avec strip(" .").']
      },
      {
        c: c`questions = {
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
print(f"You scored {score} out of {len(questions)}")`,
        i: ['Rome', '6', 'cold'],
        t: ['The whole game', 'Il gioco intero', 'Le jeu entier'],
        x: [`Everything together: a dictionary of questions, a function to judge, a loop that asks, a counter for the score, and an f-string to finish.

Run it and answer. Then change the questions and make it yours.`,
          `Tutto insieme: un dizionario di domande, una funzione per giudicare, un ciclo che chiede, un contatore per il punteggio, e una f-string per finire.

Eseguilo e rispondi. Poi cambia le domande e rendilo tuo.`,
          `Tout ensemble : un dictionnaire de questions, une fonction pour juger, une boucle qui demande, un compteur pour le score, et une f-string pour finir.

Lance-le et réponds. Puis change les questions et fais-en le tien.`],
        d: ['Add five more questions and a message for a perfect score.', 'Aggiungi altre cinque domande e un messaggio per il punteggio perfetto.', 'Ajoute cinq autres questions et un message pour le score parfait.']
      },
      {
        c: c`import random

questions = {"2 + 2?": "4", "3 x 3?": "9", "10 - 7?": "3", "5 + 6?": "11"}
asked = random.sample(list(questions), 3)
for q in asked:
    print(q, "->", questions[q])`,
        r: true,
        s: ['3 x 3? -> 9\n5 + 6? -> 11\n2 + 2? -> 4\n(a different order every time)', '3 x 3? -> 9\n5 + 6? -> 11\n2 + 2? -> 4\n(un ordine diverso ogni volta)', '3 x 3? -> 9\n5 + 6? -> 11\n2 + 2? -> 4\n(un ordre différent à chaque fois)'],
        t: ['Make it different each time', 'Farlo diverso ogni volta', 'Le rendre différent à chaque fois'],
        x: [`random.sample(list, 3) picks 3 different items at random. With it, every game asks the questions in another order, and not always the same ones.

list(questions) gives the keys of the dictionary as a list. You will learn the random tool box in detail in the next stage.`,
          `random.sample(lista, 3) sceglie 3 elementi diversi a caso. Con esso, ogni partita fa le domande in un altro ordine, e non sempre le stesse.

list(questions) dà le chiavi del dizionario come lista. Imparerai la scatola di strumenti random in dettaglio nel prossimo livello.`,
          `random.sample(liste, 3) choisit 3 éléments différents au hasard. Avec ça, chaque partie pose les questions dans un autre ordre, et pas toujours les mêmes.

list(questions) donne les clés du dictionnaire sous forme de liste. Tu apprendras la boîte à outils random en détail au niveau suivant.`],
        d: ['Put this random choice inside your own quiz.', 'Metti questa scelta casuale dentro il tuo quiz.', 'Mets ce choix au hasard dans ton propre quiz.']
      }
    ]
  }
];
