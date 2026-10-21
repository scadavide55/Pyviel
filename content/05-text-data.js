// Stage 2 · More about text and lists, tuples, dictionaries, sets. See tools/build-course.js for the format.
const c = String.raw;
const G2 = ['Stage 2 · Keeping data', 'Fase 2 · Tenere i dati', 'Étape 2 · Garder des données'];

module.exports = [
  {
    group: G2,
    title: ['More about text', 'Ancora sul testo', 'Encore sur le texte'],
    subtitle: ['Tools that every text has', 'Gli attrezzi di ogni testo', 'Les outils de chaque texte'],
    steps: [
      {
        c: c`word = "Python"
print(word.upper())
print(word.lower())
print(word)`,
        n: ['.upper', '.lower'],
        t: ['Capital letters', 'Lettere maiuscole', 'Les majuscules'],
        x: [`A text has tools of its own, called methods. You write the text (or the box that holds it), a dot, the name of the tool and round brackets: word.upper().

upper gives the text in capital letters, and lower gives it in small letters. The original text does not change: you get a new one, as the last line shows.`,
          `Un testo ha degli attrezzi suoi, chiamati metodi. Scrivi il testo (o la scatola che lo contiene), un punto, il nome dell'attrezzo e le parentesi tonde: word.upper().

upper dà il testo in lettere maiuscole e lower lo dà in lettere minuscole. Il testo originale non cambia: ne ottieni uno nuovo, come mostra l'ultima riga.`,
          `Un texte a ses propres outils, appelés méthodes. Tu écris le texte (ou la boîte qui le contient), un point, le nom de l'outil et des parenthèses rondes : word.upper().

upper donne le texte en majuscules et lower le donne en minuscules. Le texte d'origine ne change pas : tu en obtiens un nouveau, comme le montre la dernière ligne.`],
        ex: {
          t: ['Show the word hello in capital letters.', 'Mostra la parola ciao in lettere maiuscole.', 'Affiche le mot salut en majuscules.'],
          h: ['"hello".upper() inside print.', '"ciao".upper() dentro print.', '"salut".upper() dans print.'],
          sol: ['print("hello".upper())', 'print("ciao".upper())', 'print("salut".upper())'], out: ['HELLO', 'CIAO', 'SALUT'], c: 'upper'
        }
      },
      {
        c: [c`text = "  Hello, Python!  "
print(text.strip())
print(text.title())
print(len(text), len(text.strip()))`, c`text = "  Ciao, Python!  "
print(text.strip())
print(text.title())
print(len(text), len(text.strip()))`, c`text = "  Bonjour, Python !  "
print(text.strip())
print(text.title())
print(len(text), len(text.strip()))`],
        n: ['.strip', '.title'],
        t: ['Spaces and titles', 'Spazi e titoli', 'Espaces et titres'],
        x: [`strip cuts off the spaces at the start and at the end of a text. It is perfect for cleaning what a person typed.

title makes every word start with a capital letter. The last line shows that strip really made the text shorter.`,
          `strip taglia gli spazi all'inizio e alla fine di un testo. È perfetto per pulire quello che ha scritto una persona.

title fa iniziare ogni parola con la lettera maiuscola. L'ultima riga mostra che strip ha davvero accorciato il testo.`,
          `strip coupe les espaces au début et à la fin d'un texte. C'est parfait pour nettoyer ce qu'une personne a tapé.

title fait commencer chaque mot par une majuscule. La dernière ligne montre que strip a vraiment raccourci le texte.`],
        ex: {
          t: ['The text has spaces around it. Show it without them.', 'Il testo ha degli spazi intorno. Mostralo senza.', 'Le texte a des espaces autour. Affiche-le sans.'],
          h: ['text.strip() inside print.', 'text.strip() dentro print.', 'text.strip() dans print.'],
          start: ['text = "   hi   "', 'text = "   ciao   "', 'text = "   salut   "'],
          sol: ['text = "   hi   "\nprint(text.strip())', 'text = "   ciao   "\nprint(text.strip())', 'text = "   salut   "\nprint(text.strip())'], out: ['hi', 'ciao', 'salut'], c: 'strip'
        }
      },
      {
        c: [c`sentence = "the quick brown fox"
print(sentence.replace("quick", "slow"))
print(sentence)`, c`sentence = "la volpe veloce salta"
print(sentence.replace("veloce", "lenta"))
print(sentence)`, c`sentence = "le renard rapide saute"
print(sentence.replace("rapide", "lent"))
print(sentence)`],
        n: ['.replace'],
        t: ['Search and replace', 'Cerca e sostituisci', 'Cherche et remplace'],
        x: [`replace swaps a piece of text for another one. Give it the old piece and the new piece, between the brackets.

Again, the original does not change: you get a new text. The second print proves it.`,
          `replace cambia un pezzo di testo con un altro. Dagli il pezzo vecchio e il pezzo nuovo, tra le parentesi.

Anche qui l'originale non cambia: ottieni un testo nuovo. Il secondo print lo dimostra.`,
          `replace remplace un morceau de texte par un autre. Donne-lui l'ancien morceau et le nouveau, entre les parenthèses.

Là encore l'original ne change pas : tu obtiens un nouveau texte. Le deuxième print le prouve.`],
        ex: {
          t: ['Replace the word cat with dog in the text and show it.', 'Sostituisci la parola gatto con cane nel testo e mostralo.', 'Remplace le mot chat par chien dans le texte et affiche-le.'],
          h: ['text.replace("cat", "dog") inside print.', 'text.replace("gatto", "cane") dentro print.', 'text.replace("chat", "chien") dans print.'],
          start: ['text = "my cat is big"', 'text = "il mio gatto è grande"', 'text = "mon chat est grand"'],
          sol: ['text = "my cat is big"\nprint(text.replace("cat", "dog"))', 'text = "il mio gatto è grande"\nprint(text.replace("gatto", "cane"))', 'text = "mon chat est grand"\nprint(text.replace("chat", "chien"))'], exact: true, c: 'replace'
        }
      },
      {
        c: [c`sentence = "the quick brown fox"
print(sentence.find("brown"))
print(sentence.find("cat"))
print(sentence.count("o"))`, c`sentence = "la volpe veloce salta"
print(sentence.find("veloce"))
print(sentence.find("gatto"))
print(sentence.count("o"))`, c`sentence = "le renard rapide saute"
print(sentence.find("rapide"))
print(sentence.find("chat"))
print(sentence.count("e"))`],
        n: ['.find', '.count'],
        t: ['Find and count', 'Trova e conta', 'Trouve et compte'],
        x: [`find tells at which place a piece of text starts. If the piece is not there, it says -1. Remember that the first letter is at place 0.

count tells how many times a piece appears in the text.`,
          `find dice a quale posto inizia un pezzo di testo. Se il pezzo non c'è, dice -1. Ricorda che la prima lettera è al posto 0.

count dice quante volte un pezzo compare nel testo.`,
          `find dit à quelle place commence un morceau de texte. Si le morceau n'y est pas, il dit -1. Souviens-toi que la première lettre est à la place 0.

count dit combien de fois un morceau apparaît dans le texte.`],
        ex: {
          t: ['Show how many times the letter a is in the word banana.', 'Mostra quante volte la lettera a è nella parola banana.', 'Affiche combien de fois la lettre a est dans le mot banane.'],
          h: ['"banana".count("a") inside print.', '"banana".count("a") dentro print.', '"banane".count("a") dans print.'],
          sol: ['print("banana".count("a"))', 'print("banana".count("a"))', 'print("banane".count("a"))'], out: ['3', '3', '2'], c: 'count'
        }
      },
      {
        c: [c`sentence = "the quick brown fox"
print(sentence.startswith("the"))
print(sentence.endswith("dog"))`, c`sentence = "la volpe veloce salta"
print(sentence.startswith("la"))
print(sentence.endswith("cane"))`, c`sentence = "le renard rapide saute"
print(sentence.startswith("le"))
print(sentence.endswith("chien"))`],
        n: ['.startswith', '.endswith'],
        t: ['Start and end', 'Inizio e fine', 'Début et fin'],
        x: [`startswith asks "does the text begin with this?". endswith asks "does it end with this?". The answer is True or False.

They are handy to look at the beginning of a name or the end of a file name.`,
          `startswith chiede "il testo inizia con questo?". endswith chiede "finisce con questo?". La risposta è True o False.

Sono comodi per guardare l'inizio di un nome o la fine del nome di un file.`,
          `startswith demande "le texte commence-t-il par ceci ?". endswith demande "finit-il par ceci ?". La réponse est True ou False.

Ils sont pratiques pour regarder le début d'un nom ou la fin du nom d'un fichier.`],
        ex: {
          t: ['Ask if the text "python" ends with "on", and show the answer.', 'Chiedi se il testo "python" finisce con "on" e mostra la risposta.', 'Demande si le texte "python" finit par "on" et affiche la réponse.'],
          h: ['"python".endswith("on") inside print.', '"python".endswith("on") dentro print.', '"python".endswith("on") dans print.'],
          sol: 'print("python".endswith("on"))', out: 'True', c: 'endswith'
        }
      },
      {
        c: [c`line = "red,green,blue"
colours = line.split(",")
print(colours)
print("-".join(colours))
print("one two  three".split())`, c`line = "rosso,verde,blu"
colours = line.split(",")
print(colours)
print("-".join(colours))
print("uno due  tre".split())`, c`line = "rouge,vert,bleu"
colours = line.split(",")
print(colours)
print("-".join(colours))
print("un deux  trois".split())`],
        n: ['.split', '.join'],
        t: ['Split and join', 'Dividi e unisci', 'Coupe et colle'],
        x: [`split cuts a text into a list, wherever it finds the separator you give. With nothing between the brackets, it cuts at the spaces, however many there are.

join does the opposite: it glues the texts of a list into one text. The text in front goes between the pieces.`,
          `split taglia un testo in una lista, dove trova il separatore che gli dai. Senza niente tra le parentesi taglia agli spazi, quanti che siano.

join fa il contrario: incolla i testi di una lista in un solo testo. Il testo davanti va in mezzo ai pezzi.`,
          `split coupe un texte en une liste, là où il trouve le séparateur donné. Sans rien entre les parenthèses il coupe aux espaces, combien qu'il y en ait.

join fait le contraire : il colle les textes d'une liste en un seul texte. Le texte de devant va entre les morceaux.`],
        ex: {
          t: ['Show how many words are in the text "a b c d" (split it, then count with len).', 'Mostra quante parole ci sono nel testo "a b c d" (dividilo, poi conta con len).', 'Affiche combien de mots il y a dans le texte "a b c d" (coupe-le, puis compte avec len).'],
          h: ['len("a b c d".split()) inside print.', 'len("a b c d".split()) dentro print.', 'len("a b c d".split()) dans print.'],
          sol: 'print(len("a b c d".split()))', out: '4', c: 'split'
        }
      },
      {
        c: c`word = "Python"
print(word[1:4])
print(word[::2])
print(word[::-1])`,
        n: ['slice-step'],
        t: ['Slices with a step', 'Fette con un passo', 'Tranches avec un pas'],
        x: [`You already know word[1:4]. A slice can have a third number, the step: word[::2] takes every second letter.

A negative step goes backwards, so word[::-1] reads the whole text from the end. It is the quickest way to turn a text around.`,
          `Conosci già word[1:4]. Una fetta può avere un terzo numero, il passo: word[::2] prende una lettera su due.

Un passo negativo va all'indietro, quindi word[::-1] legge tutto il testo dalla fine. È il modo più rapido per girare un testo.`,
          `Tu connais déjà word[1:4]. Une tranche peut avoir un troisième nombre, le pas : word[::2] prend une lettre sur deux.

Un pas négatif va en arrière, donc word[::-1] lit tout le texte depuis la fin. C'est la façon la plus rapide de retourner un texte.`],
        ex: {
          t: ['Show the word "Python" backwards.', 'Mostra la parola "Python" al contrario.', 'Affiche le mot "Python" à l\'envers.'],
          h: ['word[::-1]', 'word[::-1]', 'word[::-1]'],
          start: 'word = "Python"', sol: 'word = "Python"\nprint(word[::-1])', out: 'nohtyP', c: '\\[::-1\\]'
        }
      },
      {
        c: c`print("hello".isalpha())
print("123".isdigit())
print("abc123".isalnum())
print("abc 123".isalnum())`,
        n: ['.isalpha', '.isdigit', '.isalnum'],
        t: ['Questions about a text', 'Domande su un testo', 'Questions sur un texte'],
        x: [`Many methods ask a question and answer True or False. isalpha asks "are they all letters?", isdigit asks "are they all digits?" and isalnum asks "are they all letters or digits?".

They are perfect to check what a person typed before you use it.`,
          `Molti metodi fanno una domanda e rispondono True o False. isalpha chiede "sono tutte lettere?", isdigit chiede "sono tutte cifre?" e isalnum chiede "sono tutte lettere o cifre?".

Sono perfetti per controllare quello che ha scritto una persona prima di usarlo.`,
          `Beaucoup de méthodes posent une question et répondent True ou False. isalpha demande "ce sont toutes des lettres ?", isdigit demande "ce sont tous des chiffres ?" et isalnum demande "ce sont toutes des lettres ou des chiffres ?".

Elles sont parfaites pour vérifier ce qu'une personne a tapé avant de l'utiliser.`],
        ex: {
          t: ['Ask if the text "2024" is made only of digits, and show the answer.', 'Chiedi se il testo "2024" è fatto solo di cifre e mostra la risposta.', 'Demande si le texte "2024" n\'est fait que de chiffres et affiche la réponse.'],
          h: ['"2024".isdigit() inside print.', '"2024".isdigit() dentro print.', '"2024".isdigit() dans print.'],
          sol: 'print("2024".isdigit())', out: 'True', c: 'isdigit'
        }
      },
      {
        c: c`print("HELLO".isupper())
print("Hello".isupper())
print("hello".islower())`,
        n: ['.isupper', '.islower'],
        t: ['Capitals or not?', 'Maiuscole o no?', 'Majuscules ou pas ?'],
        x: [`isupper asks "are all the letters capitals?" and islower asks "are they all small?". Both answer True or False.

"Hello" has a capital and small letters, so it is neither of the two.`,
          `isupper chiede "le lettere sono tutte maiuscole?" e islower chiede "sono tutte minuscole?". Tutte e due rispondono True o False.

"Hello" ha una maiuscola e delle minuscole, quindi non è né l'una né l'altra cosa.`,
          `isupper demande "les lettres sont-elles toutes en majuscules ?" et islower demande "sont-elles toutes en minuscules ?". Les deux répondent True ou False.

"Hello" a une majuscule et des minuscules, donc ce n'est ni l'un ni l'autre.`],
        ex: {
          t: ['Ask if "python" has only small letters, and show the answer.', 'Chiedi se "python" ha solo lettere minuscole e mostra la risposta.', 'Demande si "python" n\'a que des minuscules et affiche la réponse.'],
          h: ['"python".islower() inside print.', '"python".islower() dentro print.', '"python".islower() dans print.'],
          sol: 'print("python".islower())', out: 'True', c: 'islower'
        }
      },
      {
        c: c`print(ord("A"))
print(ord("a"))
print(chr(66))
print(chr(ord("A") + 2))`,
        n: ['ord', 'chr'],
        t: ['Letters and numbers', 'Lettere e numeri', 'Lettres et nombres'],
        x: [`The computer keeps every letter as a number. ord gives the number of a letter, and chr gives back the letter of a number.

So chr(ord("A") + 2) moves two letters along the alphabet: it gives C. It is the start of every secret code.`,
          `Il computer tiene ogni lettera come un numero. ord dà il numero di una lettera e chr restituisce la lettera di un numero.

Quindi chr(ord("A") + 2) si sposta di due lettere nell'alfabeto: dà C. È l'inizio di ogni codice segreto.`,
          `L'ordinateur garde chaque lettre comme un nombre. ord donne le nombre d'une lettre et chr redonne la lettre d'un nombre.

Donc chr(ord("A") + 2) avance de deux lettres dans l'alphabet : il donne C. C'est le début de tout code secret.`],
        ex: {
          t: ['Show the letter after "B" in the alphabet, using ord and chr.', 'Mostra la lettera dopo "B" nell\'alfabeto, usando ord e chr.', 'Affiche la lettre après "B" dans l\'alphabet, en utilisant ord et chr.'],
          h: ['chr(ord("B") + 1) inside print.', 'chr(ord("B") + 1) dentro print.', 'chr(ord("B") + 1) dans print.'],
          sol: 'print(chr(ord("B") + 1))', out: 'C', c: 'chr'
        }
      },
      {
        c: [c`word = "banana"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "has", vowels, "vowels")
print(word.replace("a", "").upper())`, c`word = "banana"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "ha", vowels, "vocali")
print(word.replace("a", "").upper())`, c`word = "banane"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "a", vowels, "voyelles")
print(word.replace("a", "").upper())`],
        t: ['A little text program', 'Un piccolo programma sul testo', 'Un petit programme sur le texte'],
        x: [`Put it together: a loop over the letters, an if with in, and a counter. This counts the vowels of any word.

The last line shows two methods one after the other: replace makes a new text, and upper works on that new text.`,
          `Mettiamo tutto insieme: un ciclo sulle lettere, un if con in e un contatore. Questo conta le vocali di una parola qualsiasi.

L'ultima riga mostra due metodi uno dopo l'altro: replace fa un testo nuovo, e upper lavora su quel testo nuovo.`,
          `Mets tout ensemble : une boucle sur les lettres, un if avec in et un compteur. Ça compte les voyelles de n'importe quel mot.

La dernière ligne montre deux méthodes l'une après l'autre : replace fait un nouveau texte, et upper travaille sur ce nouveau texte.`],
        ex: {
          t: ['Change the word to count the vowels of a word of your choice: use the word "education".', 'Cambia la parola per contare le vocali di una parola a tua scelta: usa la parola "educazione".', 'Change le mot pour compter les voyelles du mot "education".'],
          h: ['Change only the first line.', 'Cambia solo la prima riga.', 'Change seulement la première ligne.'],
          start: [c`word = "banana"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "has", vowels, "vowels")`, c`word = "banana"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "ha", vowels, "vocali")`, c`word = "banane"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "a", vowels, "voyelles")`],
          sol: [c`word = "education"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "has", vowels, "vowels")`, c`word = "educazione"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "ha", vowels, "vocali")`, c`word = "education"
vowels = 0
for letter in word:
    if letter in "aeiou":
        vowels += 1
print(word, "a", vowels, "voyelles")`],
          exact: true
        }
      }
    ]
  },
  {
    title: ['More about lists', 'Ancora sulle liste', 'Encore sur les listes'],
    subtitle: ['Slices, copies and tables', 'Fette, copie e tabelle', 'Tranches, copies et tableaux'],
    steps: [
      {
        c: c`nums = [10, 20, 30, 40, 50]
print(nums[1:4])
print(nums[-2:])
print(nums[::-1])
print(nums)`,
        t: ['Slices of a list', 'Fette di una lista', 'Tranches d\'une liste'],
        x: [`A list can be sliced exactly like a text: list[start:stop:step]. You get a new list with the chosen items, and the original stays as it was.

nums[-2:] takes the last two items. nums[::-1] is the list backwards.`,
          `Una lista si può affettare esattamente come un testo: lista[inizio:fine:passo]. Ottieni una lista nuova con gli elementi scelti e l'originale resta com'era.

nums[-2:] prende gli ultimi due elementi. nums[::-1] è la lista al contrario.`,
          `Une liste se découpe exactement comme un texte : liste[début:fin:pas]. Tu obtiens une nouvelle liste avec les éléments choisis, et l'original reste comme il était.

nums[-2:] prend les deux derniers éléments. nums[::-1] est la liste à l'envers.`],
        ex: {
          t: ['Show the first three items of the list.', 'Mostra i primi tre elementi della lista.', 'Affiche les trois premiers éléments de la liste.'],
          h: ['nums[:3]', 'nums[:3]', 'nums[:3]'],
          start: 'nums = [10, 20, 30, 40, 50]', sol: 'nums = [10, 20, 30, 40, 50]\nprint(nums[:3])', out: '[10, 20, 30]', c: '\\[:3\\]'
        }
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
        n: ['.copy', 'is'],
        t: ['One list, two names', 'Una lista, due nomi', 'Une liste, deux noms'],
        x: [`b = a does not make a new list: it puts a second label on the same list. Changing one changes "both", because there is only one list.

To get a real copy, use a.copy(). The word is asks "are these exactly the same thing?": a is b is True, but a is c is False.`,
          `b = a non fa una lista nuova: mette una seconda etichetta sulla stessa lista. Cambiarne una cambia "tutte e due", perché c'è una lista sola.

Per avere una vera copia usa a.copy(). La parola is chiede "queste sono esattamente la stessa cosa?": a is b è True, ma a is c è False.`,
          `b = a ne fait pas une nouvelle liste : il met une deuxième étiquette sur la même liste. En changer une change "les deux", parce qu'il n'y a qu'une seule liste.

Pour avoir une vraie copie, utilise a.copy(). Le mot is demande "ces deux-là sont-ils exactement la même chose ?" : a is b est True, mais a is c est False.`],
        ex: {
          t: ['Change the program so that b is a real copy of a. Then a must still show [1, 2, 3] at the end.', 'Cambia il programma così che b sia una vera copia di a. Poi a deve mostrare ancora [1, 2, 3] alla fine.', 'Change le programme pour que b soit une vraie copie de a. Alors a doit toujours afficher [1, 2, 3] à la fin.'],
          h: ['b = a gives the same list a second name. Ask the list for a copy of itself instead.', 'b = a dà alla stessa lista un secondo nome. Chiedi invece alla lista una copia di sé.', 'b = a donne un deuxième nom à la même liste. Demande plutôt à la liste une copie d\'elle-même.'],
          start: 'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)', sol: 'a = [1, 2, 3]\nb = a.copy()\nb.append(4)\nprint(a)', out: '[1, 2, 3]', c: 'copy'
        }
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
        n: ['nested-list'],
        t: ['A table: lists inside lists', 'Una tabella: liste dentro liste', 'Un tableau : des listes dans des listes'],
        x: [`A list can hold other lists. This makes a table: grid[1] is a whole row, and grid[1][2] is the item in row 1, column 2 (both counted from 0).

Tables are everywhere: game boards, photos, spreadsheets.`,
          `Una lista può contenere altre liste. Così si fa una tabella: grid[1] è una riga intera, e grid[1][2] è l'elemento nella riga 1, colonna 2 (tutti e due contati da 0).

Le tabelle sono dappertutto: scacchiere dei giochi, foto, fogli di calcolo.`,
          `Une liste peut contenir d'autres listes. Cela fait un tableau : grid[1] est une ligne entière, et grid[1][2] est l'élément de la ligne 1, colonne 2 (tous deux comptés à partir de 0).

Les tableaux sont partout : plateaux de jeux, photos, tableurs.`],
        ex: {
          t: ['Show the item in the middle of the table (row 1, column 1).', 'Mostra l\'elemento in mezzo alla tabella (riga 1, colonna 1).', 'Affiche l\'élément au milieu du tableau (ligne 1, colonne 1).'],
          h: ['grid[1][1]', 'grid[1][1]', 'grid[1][1]'],
          start: 'grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', sol: 'grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nprint(grid[1][1])', out: '5', c: '\\]\\['
        }
      },
      {
        c: c`players = ["Ada", "Max", "Zoe"]
points = [12, 7, 15]
for name, score in zip(players, points):
    print(f"{name}: {score}")
for position, name in enumerate(players, start=1):
    print(position, name)`,
        n: ['zip', 'enumerate', 'arg:start'],
        t: ['Walk through two lists', 'Scorri due liste', 'Parcours deux listes'],
        x: [`zip walks through two lists together, pair by pair: Ada with 12, Max with 7, Zoe with 15. Each pair is put into two names in the for line.

enumerate gives every item with its number, and start=1 makes the counting begin at 1. Both are nicer than counting places by hand.`,
          `zip scorre due liste insieme, a coppie: Ada con 12, Max con 7, Zoe con 15. Ogni coppia viene messa in due nomi nella riga for.

enumerate dà ogni elemento con il suo numero, e start=1 fa iniziare il conteggio da 1. Tutti e due sono più belli che contare i posti a mano.`,
          `zip parcourt deux listes ensemble, par paires : Ada avec 12, Max avec 7, Zoe avec 15. Chaque paire est mise dans deux noms sur la ligne for.

enumerate donne chaque élément avec son numéro, et start=1 fait commencer le comptage à 1. Les deux sont plus agréables que de compter les places à la main.`],
        ex: {
          t: ['Number the players from 1, and show each number with the name, one per line.', 'Numera i giocatori da 1 e mostra ogni numero con il nome, uno per riga.', 'Numérote les joueurs à partir de 1 et affiche chaque numéro avec le nom, un par ligne.'],
          h: ['for position, name in enumerate(players, start=1):', 'for position, name in enumerate(players, start=1):', 'for position, name in enumerate(players, start=1):'],
          start: 'players = ["Ada", "Max", "Zoe"]', sol: 'players = ["Ada", "Max", "Zoe"]\nfor position, name in enumerate(players, start=1):\n    print(position, name)', out: '1 Ada\n2 Max\n3 Zoe', c: 'enumerate'
        }
      },
      {
        c: [c`words = ["pear", "fig", "banana", "kiwi"]
print(sorted(words))
print(sorted(words, key=len))
print(sorted(words, reverse=True))
print(max(words, key=len))`, c`words = ["pera", "fico", "banana", "kiwi"]
print(sorted(words))
print(sorted(words, key=len))
print(sorted(words, reverse=True))
print(max(words, key=len))`, c`words = ["poire", "figue", "banane", "kiwi"]
print(sorted(words))
print(sorted(words, key=len))
print(sorted(words, reverse=True))
print(max(words, key=len))`],
        n: ['arg:key', 'arg:reverse'],
        t: ['Sort the way you want', 'Ordina come vuoi', 'Trie comme tu veux'],
        x: [`sorted, sort, max and min can take key=: a helper that tells what to look at. key=len orders the words by their length, not alphabetically.

reverse=True turns the order around. And max(words, key=len) finds the longest word.`,
          `sorted, sort, max e min possono prendere key=: un aiutante che dice cosa guardare. key=len ordina le parole per la loro lunghezza, non alfabeticamente.

reverse=True gira l'ordine. E max(words, key=len) trova la parola più lunga.`,
          `sorted, sort, max et min peuvent prendre key= : un assistant qui dit ce qu'il faut regarder. key=len ordonne les mots par leur longueur, pas alphabétiquement.

reverse=True retourne l'ordre. Et max(words, key=len) trouve le mot le plus long.`],
        ex: {
          t: ['Show the numbers [5, 2, 9, 1] from the biggest to the smallest.', 'Mostra i numeri [5, 2, 9, 1] dal più grande al più piccolo.', 'Affiche les nombres [5, 2, 9, 1] du plus grand au plus petit.'],
          h: ['sorted([5, 2, 9, 1], reverse=True)', 'sorted([5, 2, 9, 1], reverse=True)', 'sorted([5, 2, 9, 1], reverse=True)'],
          sol: 'print(sorted([5, 2, 9, 1], reverse=True))', out: '[9, 5, 2, 1]', c: 'reverse'
        }
      },
      {
        c: c`print(list("abc"))
print(list(range(5)))
numbers = [5, 3, 8, 1]
print(sum(numbers) / len(numbers))
print(list(range(10, 0, -3)))`,
        n: ['list'],
        t: ['A list from anything', 'Una lista da qualsiasi cosa', 'Une liste à partir de n\'importe quoi'],
        x: [`list(...) turns any row of things into a list: the letters of a text, the numbers of a range.

You already know range. list(range(5)) is the quickest way to see what it makes. A step can be negative to count down.`,
          `list(...) trasforma qualsiasi fila di cose in una lista: le lettere di un testo, i numeri di un range.

Conosci già range. list(range(5)) è il modo più rapido per vedere cosa fa. Il passo può essere negativo per contare all'indietro.`,
          `list(...) transforme n'importe quelle rangée de choses en liste : les lettres d'un texte, les nombres d'un range.

Tu connais déjà range. list(range(5)) est la façon la plus rapide de voir ce qu'il fait. Le pas peut être négatif pour compter à rebours.`],
        ex: {
          t: ['Show the list of the numbers from 1 to 5, with list and range.', 'Mostra la lista dei numeri da 1 a 5, con list e range.', 'Affiche la liste des nombres de 1 à 5, avec list et range.'],
          h: ['list(range(1, 6))', 'list(range(1, 6))', 'list(range(1, 6))'],
          sol: 'print(list(range(1, 6)))', out: '[1, 2, 3, 4, 5]', c: 'list'
        }
      }
    ]
  },
  {
    title: ['Tuples', 'Tuple', 'Les tuples'],
    subtitle: ['A list that cannot change', 'Una lista che non può cambiare', 'Une liste qui ne peut pas changer'],
    steps: [
      {
        c: c`point = (3, 4)
print(point)
print(point[0], point[1])
print(len(point))`,
        n: ['tuple-literal'],
        t: ['Values that stay together', 'Valori che stanno insieme', 'Des valeurs qui restent ensemble'],
        x: [`A tuple is written with round brackets. It works like a list: you can ask for a place and use len. But once made, it cannot be changed.

That is useful for things that belong together and should stay fixed, like the x and the y of a point on a map.`,
          `Una tupla si scrive con le parentesi tonde. Funziona come una lista: puoi chiedere un posto e usare len. Ma una volta fatta, non si può cambiare.

È utile per le cose che stanno insieme e devono restare ferme, come la x e la y di un punto su una mappa.`,
          `Un tuple s'écrit avec des parenthèses rondes. Il marche comme une liste : tu peux demander une place et utiliser len. Mais une fois fait, il ne peut plus être changé.

C'est utile pour des choses qui vont ensemble et doivent rester fixes, comme le x et le y d'un point sur une carte.`],
        ex: {
          t: ['Make a tuple called size with the numbers 5 and 8, and show its second item.', 'Fai una tupla che si chiama size con i numeri 5 e 8 e mostra il suo secondo elemento.', 'Fais un tuple qui s\'appelle size avec les nombres 5 et 8 et affiche son deuxième élément.'],
          h: ['A tuple is written with round brackets. Places start from 0, so the second item is at place 1.', 'Una tupla si scrive con le parentesi tonde. I posti partono da 0, quindi il secondo elemento è al posto 1.', 'Un tuple s\'écrit avec des parenthèses. Les places commencent à 0, donc le deuxième élément est à la place 1.'],
          sol: 'size = (5, 8)\nprint(size[1])', out: '8', c: '\\(5, 8\\)'
        }
      },
      {
        c: c`single = (5,)
print(type(single))
not_a_tuple = (5)
print(type(not_a_tuple))`,
        n: ['one-tuple'],
        t: ['A tuple with one item', 'Una tupla con un elemento', 'Un tuple avec un élément'],
        x: [`A tuple with only one item needs a comma after it: (5,). Without the comma, (5) is just the number 5 in brackets, like in a sum.

It looks like a small thing, but it is a famous trap.`,
          `Una tupla con un solo elemento ha bisogno di una virgola dopo: (5,). Senza la virgola, (5) è solo il numero 5 tra parentesi, come in un conto.

Sembra una piccolezza, ma è una trappola famosa.`,
          `Un tuple avec un seul élément a besoin d'une virgule après : (5,). Sans la virgule, (5) n'est que le nombre 5 entre parenthèses, comme dans un calcul.

Ça a l'air d'un détail, mais c'est un piège célèbre.`],
        ex: {
          t: ['Make a tuple with only the number 7, and show its type.', 'Fai una tupla con solo il numero 7 e mostra il suo tipo.', 'Fais un tuple avec seulement le nombre 7 et affiche son type.'],
          h: ['(7,) with the comma.', '(7,) con la virgola.', '(7,) avec la virgule.'],
          sol: 'seven = (7,)\nprint(type(seven))', out: "<class 'tuple'>", c: '\\(7,\\)'
        }
      },
      {
        c: [c`point = (3, 4)
x, y = point
print(x, y)
name, age, city = ("Ada", 12, "Rome")
print(f"{name} is {age} and lives in {city}")`, c`point = (3, 4)
x, y = point
print(x, y)
name, age, city = ("Ada", 12, "Roma")
print(f"{name} ha {age} anni e vive a {city}")`, c`point = (3, 4)
x, y = point
print(x, y)
name, age, city = ("Ada", 12, "Rome")
print(f"{name} a {age} ans et habite à {city}")`],
        n: ['unpack'],
        t: ['Unpack a tuple', 'Apri una tupla', 'Ouvre un tuple'],
        x: [`You can put the items of a tuple into several names in one line: x, y = point puts 3 in x and 4 in y. The number of names must be the same as the number of items.

You can write the tuple right there too: name, age, city = ("Ada", 12, "Rome"). It also works with lists.`,
          `Puoi mettere gli elementi di una tupla in più nomi in una riga: x, y = point mette 3 in x e 4 in y. Il numero di nomi deve essere uguale al numero di elementi.

Puoi scrivere la tupla anche lì: name, age, city = ("Ada", 12, "Roma"). Funziona anche con le liste.`,
          `Tu peux mettre les éléments d'un tuple dans plusieurs noms en une ligne : x, y = point met 3 dans x et 4 dans y. Le nombre de noms doit être le même que le nombre d'éléments.

Tu peux aussi écrire le tuple tout de suite : name, age, city = ("Ada", 12, "Rome"). Ça marche aussi avec les listes.`],
        ex: {
          t: ['Unpack the tuple (7, 9) into the names a and b, and show a + b.', 'Apri la tupla (7, 9) nei nomi a e b e mostra a + b.', 'Ouvre le tuple (7, 9) dans les noms a et b et affiche a + b.'],
          h: ['Two names on the left of =, separated by a comma, take the two items in order.', 'Due nomi a sinistra di =, separati da una virgola, prendono i due elementi in ordine.', 'Deux noms à gauche de =, séparés par une virgule, prennent les deux éléments dans l\'ordre.'],
          sol: 'a, b = (7, 9)\nprint(a + b)', out: '16', c: 'a, b ='
        }
      },
      {
        c: c`point = (3, 4)
print(point)
point[0] = 9`,
        e: 'TypeError',
        t: ['The wall: tuples are fixed', 'Il muro: le tuple sono fisse', 'Le mur : les tuples sont fixes'],
        x: [`Try to change an item of a tuple and Python refuses: a tuple is fixed on purpose. Read the explanation.

If you need to change things, use a list. If you need a list that is allowed to change, you can make one from the tuple, in the next step.`,
          `Prova a cambiare un elemento di una tupla e Python rifiuta: una tupla è ferma apposta. Leggi la spiegazione.

Se ti serve cambiare le cose, usa una lista. Se ti serve una lista che si può cambiare, la puoi fare dalla tupla, nel passo dopo.`,
          `Essaie de changer un élément d'un tuple et Python refuse : un tuple est fixe exprès. Lis l'explication.

Si tu as besoin de changer des choses, utilise une liste. Si tu as besoin d'une liste qui a le droit de changer, tu peux en faire une à partir du tuple, à l'étape suivante.`],
        ex: {
          t: ['Make it work: use a list in square brackets instead of a tuple, so the first item can be changed. Show the list.', 'Fallo funzionare: usa una lista tra parentesi quadre invece di una tupla, così il primo elemento si può cambiare. Mostra la lista.', 'Fais-le marcher : utilise une liste entre crochets au lieu d\'un tuple, pour que le premier élément puisse être changé. Affiche la liste.'],
          h: ['Only the brackets change: a list uses square brackets [ ], and a list can be changed.', 'Cambiano solo le parentesi: una lista usa le quadre [ ], e una lista si può cambiare.', 'Seules les parenthèses changent : une liste utilise des crochets [ ], et une liste peut être changée.'],
          start: 'point = (3, 4)\nprint(point)\npoint[0] = 9', sol: 'point = [3, 4]\npoint[0] = 9\nprint(point)', out: '[9, 4]'
        }
      },
      {
        c: c`items = ["a", "b", "c"]
as_tuple = tuple(items)
back = list(as_tuple)
print(as_tuple, back)
print((1, 2) + (3,))
print((1, 2) == (1, 2))`,
        n: ['tuple'],
        t: ['Tuples and lists', 'Tuple e liste', 'Tuples et listes'],
        x: [`tuple(...) and list(...) turn one into the other. Tuples can be joined with +, compared with ==, and asked about with in.

Choose a list when the content will change, and a tuple when it should stay exactly as it is.`,
          `tuple(...) e list(...) trasformano l'una nell'altra. Le tuple si possono unire con +, confrontare con == e interrogare con in.

Scegli una lista quando il contenuto cambierà e una tupla quando deve restare esattamente com'è.`,
          `tuple(...) et list(...) transforment l'un en l'autre. Les tuples peuvent être collés avec +, comparés avec == et interrogés avec in.

Choisis une liste quand le contenu va changer, et un tuple quand il doit rester exactement comme il est.`],
        ex: {
          t: ['Turn the list [1, 2, 3] into a tuple and show it.', 'Trasforma la lista [1, 2, 3] in una tupla e mostrala.', 'Transforme la liste [1, 2, 3] en tuple et affiche-le.'],
          h: ['tuple(...) builds a tuple out of what you give it.', 'tuple(...) costruisce una tupla con quello che gli dai.', 'tuple(...) construit un tuple avec ce que tu lui donnes.'],
          sol: 'print(tuple([1, 2, 3]))', out: '(1, 2, 3)', c: 'tuple'
        }
      }
    ]
  },
  {
    title: ['Dictionaries', 'I dizionari', 'Les dictionnaires'],
    subtitle: ['Look things up by name', 'Cerca le cose per nome', 'Cherche les choses par leur nom'],
    steps: [
      {
        c: c`ages = {"Ada": 12, "Max": 9}
print(ages)
print(ages["Ada"])
ages["Zoe"] = 15
print(ages)
print(len(ages))`,
        n: ['dict-literal', 'dict-index'],
        t: ['A dictionary: key and value', 'Un dizionario: chiave e valore', 'Un dictionnaire : clé et valeur'],
        x: [`A dictionary keeps pairs: a key and its value, written key: value between curly brackets. You look a value up by its key, not by a place: ages["Ada"] gives 12.

Putting a value in a key that does not exist yet adds it. Think of a real dictionary: the word is the key, the meaning is the value.`,
          `Un dizionario tiene delle coppie: una chiave e il suo valore, scritti chiave: valore tra parentesi graffe. Cerchi un valore dalla sua chiave, non da un posto: ages["Ada"] dà 12.

Mettere un valore in una chiave che non esiste ancora la aggiunge. Pensa a un vero dizionario: la parola è la chiave, il significato è il valore.`,
          `Un dictionnaire garde des paires : une clé et sa valeur, écrites clé: valeur entre accolades. Tu cherches une valeur par sa clé, pas par une place : ages["Ada"] donne 12.

Mettre une valeur dans une clé qui n'existe pas encore l'ajoute. Pense à un vrai dictionnaire : le mot est la clé, le sens est la valeur.`],
        ex: {
          t: ['Add a new key, Leo, with the value 11, and show the whole dictionary.', 'Aggiungi una chiave nuova, Leo, con il valore 11, e mostra tutto il dizionario.', 'Ajoute une nouvelle clé, Leo, avec la valeur 11, et affiche tout le dictionnaire.'],
          h: ['Write the dictionary name, the new key in square brackets, then = and the value.', 'Scrivi il nome del dizionario, la nuova chiave tra quadre, poi = e il valore.', 'Écris le nom du dictionnaire, la nouvelle clé entre crochets, puis = et la valeur.'],
          start: 'ages = {"Ada": 12, "Max": 9}', sol: 'ages = {"Ada": 12, "Max": 9}\nages["Leo"] = 11\nprint(ages)', out: "{'Ada': 12, 'Max': 9, 'Leo': 11}", c: '\\["Leo"\\]'
        }
      },
      {
        c: [c`ages = {"Ada": 12, "Max": 9}
print("Ada" in ages)
print("Zoe" in ages)
print(ages.get("Zoe"))
print(ages.get("Zoe", "unknown"))
print(ages["Zoe"])`, c`ages = {"Ada": 12, "Max": 9}
print("Ada" in ages)
print("Zoe" in ages)
print(ages.get("Zoe"))
print(ages.get("Zoe", "sconosciuta"))
print(ages["Zoe"])`, c`ages = {"Ada": 12, "Max": 9}
print("Ada" in ages)
print("Zoe" in ages)
print(ages.get("Zoe"))
print(ages.get("Zoe", "inconnue"))
print(ages["Zoe"])`],
        e: 'KeyError',
        n: ['.get'],
        t: ['Is the key there?', 'La chiave c\'è?', 'La clé est-elle là ?'],
        x: [`in asks if a key exists. get gives the value of a key, or None if the key is missing, and with a second thing it gives that instead of None.

The last line uses the dangerous way, with square brackets, and Python stops with a KeyError: that key does not exist. Read the explanation.`,
          `in chiede se una chiave esiste. get dà il valore di una chiave, o None se la chiave manca, e con un secondo valore dà quello al posto di None.

L'ultima riga usa il modo pericoloso, con le parentesi quadre, e Python si ferma con un KeyError: quella chiave non esiste. Leggi la spiegazione.`,
          `in demande si une clé existe. get donne la valeur d'une clé, ou None si la clé manque, et avec une deuxième chose il donne celle-ci au lieu de None.

La dernière ligne utilise la façon dangereuse, avec les crochets, et Python s'arrête avec une KeyError : cette clé n'existe pas. Lis l'explication.`],
        ex: {
          t: ['Show the age of Zoe, safely with get, giving 0 when she is not in the dictionary.', 'Mostra l\'età di Zoe, in modo sicuro con get, dando 0 quando non è nel dizionario.', 'Affiche l\'âge de Zoe, en sécurité avec get, en donnant 0 quand elle n\'est pas dans le dictionnaire.'],
          h: ['ages.get("Zoe", 0)', 'ages.get("Zoe", 0)', 'ages.get("Zoe", 0)'],
          start: 'ages = {"Ada": 12, "Max": 9}', sol: 'ages = {"Ada": 12, "Max": 9}\nprint(ages.get("Zoe", 0))', out: '0', c: 'get'
        }
      },
      {
        c: c`stock = {"apples": 5, "pears": 2}
stock["apples"] = 4
stock["kiwis"] = 10
del stock["pears"]
print(stock)
print(stock.pop("kiwis"))
stock.update({"plums": 3, "apples": 6})
print(stock)`,
        n: ['.update'],
        t: ['Change, add, remove', 'Cambia, aggiungi, togli', 'Change, ajoute, enlève'],
        x: [`Putting a value in an existing key changes it. Putting a value in a new key adds it. del removes a key, and pop(key) removes it and gives you the value, like pop did for lists.

update puts all the pairs of another dictionary into this one. A dictionary remembers the order in which the keys were added.`,
          `Mettere un valore in una chiave esistente la cambia. Mettere un valore in una chiave nuova la aggiunge. del toglie una chiave, e pop(chiave) la toglie e ti dà il valore, come pop faceva con le liste.

update mette in questo dizionario tutte le coppie di un altro dizionario. Un dizionario ricorda l'ordine in cui le chiavi sono state aggiunte.`,
          `Mettre une valeur dans une clé existante la change. Mettre une valeur dans une nouvelle clé l'ajoute. del enlève une clé, et pop(clé) l'enlève et te donne la valeur, comme pop le faisait pour les listes.

update met dans ce dictionnaire toutes les paires d'un autre dictionnaire. Un dictionnaire se souvient de l'ordre dans lequel les clés ont été ajoutées.`],
        ex: {
          t: ['Take the key pears out of the dictionary, and show the dictionary.', 'Togli la chiave pears dal dizionario e mostra il dizionario.', 'Enlève la clé pears du dictionnaire et affiche le dictionnaire.'],
          h: ['del, then the dictionary with the key in square brackets, takes that key away.', 'del, poi il dizionario con la chiave tra quadre, toglie quella chiave.', 'del, puis le dictionnaire avec la clé entre crochets, enlève cette clé.'],
          start: 'stock = {"apples": 5, "pears": 2}', sol: 'stock = {"apples": 5, "pears": 2}\ndel stock["pears"]\nprint(stock)', out: "{'apples': 5}", c: 'del'
        }
      },
      {
        c: c`ages = {"Ada": 12, "Max": 9, "Zoe": 15}
for name in ages:
    print(name)
print(list(ages.keys()))
print(list(ages.values()))
for name, age in ages.items():
    print(f"{name} is {age}")`,
        n: ['.keys', '.values', '.items'],
        t: ['Walk through a dictionary', 'Scorri un dizionario', 'Parcours un dictionnaire'],
        x: [`A for loop over a dictionary gives the keys. keys() and values() give all the keys and all the values. items() gives each key together with its value, as pairs that you can put in two names.

items() is the one you will use most.`,
          `Un ciclo for su un dizionario dà le chiavi. keys() e values() danno tutte le chiavi e tutti i valori. items() dà ogni chiave insieme al suo valore, a coppie che puoi mettere in due nomi.

items() è quello che userai di più.`,
          `Une boucle for sur un dictionnaire donne les clés. keys() et values() donnent toutes les clés et toutes les valeurs. items() donne chaque clé avec sa valeur, par paires que tu peux mettre dans deux noms.

items() est celui que tu utiliseras le plus.`],
        ex: {
          t: ['Show every name with its age like this: Ada 12 (one per line), using items().', 'Mostra ogni nome con la sua età così: Ada 12 (uno per riga), usando items().', 'Affiche chaque nom avec son âge comme ceci : Ada 12 (un par ligne), en utilisant items().'],
          h: ['items() gives pairs: a for loop can take each pair into two names at once.', 'items() dà delle coppie: un ciclo for può prendere ogni coppia in due nomi insieme.', 'items() donne des paires : une boucle for peut prendre chaque paire dans deux noms à la fois.'],
          start: 'ages = {"Ada": 12, "Max": 9}', sol: 'ages = {"Ada": 12, "Max": 9}\nfor name, age in ages.items():\n    print(name, age)', out: 'Ada 12\nMax 9', c: 'items'
        }
      },
      {
        c: [c`text = "the cat and the dog and the bird"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
best = max(counts, key=counts.get)
print(best, counts[best])`, c`text = "il gatto e il cane e il uccello"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
best = max(counts, key=counts.get)
print(best, counts[best])`, c`text = "le chat et le chien et le oiseau"
counts = {}
for word in text.split():
    counts[word] = counts.get(word, 0) + 1
print(counts)
best = max(counts, key=counts.get)
print(best, counts[best])`],
        t: ['Count things', 'Conta le cose', 'Compte des choses'],
        x: [`A very common job: count how many times each thing appears. Start with an empty dictionary {}. For each word, take its current count (0 if it is new) with get, and add one.

max(counts, key=counts.get) finds the key with the biggest value.`,
          `Un lavoro molto comune: contare quante volte compare ogni cosa. Parti da un dizionario vuoto {}. Per ogni parola prendi il suo conteggio attuale (0 se è nuova) con get e aggiungi uno.

max(counts, key=counts.get) trova la chiave con il valore più grande.`,
          `Un travail très courant : compter combien de fois chaque chose apparaît. Commence avec un dictionnaire vide {}. Pour chaque mot, prends son compte actuel (0 s'il est nouveau) avec get et ajoute un.

max(counts, key=counts.get) trouve la clé avec la plus grande valeur.`],
        ex: {
          t: ['Count the letters of the word "hello" with a dictionary, and show the dictionary.', 'Conta le lettere della parola "hello" con un dizionario e mostra il dizionario.', 'Compte les lettres du mot "hello" avec un dictionnaire et affiche le dictionnaire.'],
          h: ['A for loop over the letters, and counts[letter] = counts.get(letter, 0) + 1.', 'Un ciclo for sulle lettere e counts[letter] = counts.get(letter, 0) + 1.', 'Une boucle for sur les lettres et counts[letter] = counts.get(letter, 0) + 1.'],
          start: 'counts = {}', sol: 'counts = {}\nfor letter in "hello":\n    counts[letter] = counts.get(letter, 0) + 1\nprint(counts)', out: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}", c: 'get'
        }
      },
      {
        c: [c`person = {
    "name": "Ada",
    "age": 12,
    "pets": ["cat", "dog"],
    "address": {"city": "Rome", "zip": "00100"},
}
print(person["pets"][1])
print(person["address"]["city"])
person["pets"].append("fox")
print(len(person["pets"]))`, c`person = {
    "name": "Ada",
    "age": 12,
    "pets": ["gatto", "cane"],
    "address": {"city": "Roma", "zip": "00100"},
}
print(person["pets"][1])
print(person["address"]["city"])
person["pets"].append("volpe")
print(len(person["pets"]))`, c`person = {
    "name": "Ada",
    "age": 12,
    "pets": ["chat", "chien"],
    "address": {"city": "Paris", "zip": "75001"},
}
print(person["pets"][1])
print(person["address"]["city"])
person["pets"].append("renard")
print(len(person["pets"]))`],
        t: ['Things inside things', 'Cose dentro cose', 'Des choses dans des choses'],
        x: [`The values of a dictionary can be anything: texts, numbers, lists, even other dictionaries. Chain the brackets to go deeper: person["address"]["city"].

This is how real data looks, for example what websites send to each other.`,
          `I valori di un dizionario possono essere qualsiasi cosa: testi, numeri, liste, perfino altri dizionari. Concatena le parentesi per andare più a fondo: person["address"]["city"].

È così che sono fatti i dati veri, per esempio quelli che i siti si mandano tra loro.`,
          `Les valeurs d'un dictionnaire peuvent être n'importe quoi : des textes, des nombres, des listes, même d'autres dictionnaires. Enchaîne les crochets pour aller plus profond : person["address"]["city"].

C'est ainsi que sont faites les vraies données, par exemple celles que les sites s'envoient entre eux.`],
        ex: {
          t: ['Show the zip code of the address of the person.', 'Mostra il codice postale dell\'indirizzo della persona.', 'Affiche le code postal de l\'adresse de la personne.'],
          h: ['person["address"]["zip"]', 'person["address"]["zip"]', 'person["address"]["zip"]'],
          start: ['person = {"name": "Ada", "address": {"city": "Rome", "zip": "00100"}}', 'person = {"name": "Ada", "address": {"city": "Roma", "zip": "00100"}}', 'person = {"name": "Ada", "address": {"city": "Paris", "zip": "75001"}}'],
          sol: ['person = {"name": "Ada", "address": {"city": "Rome", "zip": "00100"}}\nprint(person["address"]["zip"])', 'person = {"name": "Ada", "address": {"city": "Roma", "zip": "00100"}}\nprint(person["address"]["zip"])', 'person = {"name": "Ada", "address": {"city": "Paris", "zip": "75001"}}\nprint(person["address"]["zip"])'],
          out: ['00100', '00100', '75001'], c: '\\["zip"\\]'
        }
      }
    ]
  },
  {
    title: ['Sets', 'Gli insiemi', 'Les ensembles'],
    subtitle: ['Each thing only once', 'Ogni cosa una volta sola', 'Chaque chose une seule fois'],
    steps: [
      {
        c: [c`colours = {"red", "green", "red", "blue", "green"}
print(len(colours))
print("red" in colours)
print(set([1, 2, 2, 3, 3, 3]))
print(sorted(set("hello")))`, c`colours = {"rosso", "verde", "rosso", "blu", "verde"}
print(len(colours))
print("rosso" in colours)
print(set([1, 2, 2, 3, 3, 3]))
print(sorted(set("ciao")))`, c`colours = {"rouge", "vert", "rouge", "bleu", "vert"}
print(len(colours))
print("rouge" in colours)
print(set([1, 2, 2, 3, 3, 3]))
print(sorted(set("salut")))`],
        n: ['set-literal', 'set'],
        t: ['A bunch without repeats', 'Un gruppo senza ripetizioni', 'Un groupe sans répétitions'],
        x: [`A set is a bunch of different things, with no repeats and no order. Curly brackets with no colons make a set. If you put the same thing in twice, it is kept once.

set(...) builds a set from a list or a text. It is the quickest way to remove repeats.`,
          `Un insieme è un gruppo di cose diverse, senza ripetizioni e senza ordine. Le parentesi graffe senza i due punti fanno un insieme. Se metti la stessa cosa due volte, viene tenuta una volta sola.

set(...) costruisce un insieme da una lista o da un testo. È il modo più rapido per togliere le ripetizioni.`,
          `Un ensemble est un groupe de choses différentes, sans répétition et sans ordre. Des accolades sans deux points font un ensemble. Si tu mets deux fois la même chose, elle n'est gardée qu'une fois.

set(...) construit un ensemble à partir d'une liste ou d'un texte. C'est la façon la plus rapide d'enlever les répétitions.`],
        ex: {
          t: ['Show how many different numbers are in the list [1, 1, 2, 3, 3, 3].', 'Mostra quanti numeri diversi ci sono nella lista [1, 1, 2, 3, 3, 3].', 'Affiche combien de nombres différents il y a dans la liste [1, 1, 2, 3, 3, 3].'],
          h: ['len(set([1, 1, 2, 3, 3, 3]))', 'len(set([1, 1, 2, 3, 3, 3]))', 'len(set([1, 1, 2, 3, 3, 3]))'],
          sol: 'print(len(set([1, 1, 2, 3, 3, 3])))', out: '3', c: 'set'
        }
      },
      {
        c: [c`tags = {"python", "code"}
tags.add("fun")
tags.add("code")
print(len(tags))
tags.remove("python")
tags.discard("nothing")
print(sorted(tags))`, c`tags = {"python", "codice"}
tags.add("divertente")
tags.add("codice")
print(len(tags))
tags.remove("python")
tags.discard("niente")
print(sorted(tags))`, c`tags = {"python", "code"}
tags.add("amusant")
tags.add("code")
print(len(tags))
tags.remove("python")
tags.discard("rien")
print(sorted(tags))`],
        n: ['.add', '.discard'],
        t: ['Add and remove', 'Aggiungi e togli', 'Ajoute et enlève'],
        x: [`add puts a thing in. Adding something that is already there changes nothing. remove takes a thing out but stops with an error if it is not there. discard does the same without the error.

A set has no order, so use sorted(...) when you want to show it in a clean order.`,
          `add mette una cosa dentro. Aggiungere qualcosa che c'è già non cambia niente. remove toglie una cosa ma si ferma con un errore se non c'è. discard fa lo stesso senza l'errore.

Un insieme non ha ordine, quindi usa sorted(...) quando vuoi mostrarlo in un ordine pulito.`,
          `add met une chose dedans. Ajouter quelque chose qui y est déjà ne change rien. remove enlève une chose mais s'arrête avec une erreur si elle n'y est pas. discard fait pareil sans l'erreur.

Un ensemble n'a pas d'ordre, donc utilise sorted(...) quand tu veux l'afficher dans un ordre propre.`],
        ex: {
          t: ['Add the number 4 to the set and show the set in order.', 'Aggiungi il numero 4 all\'insieme e mostra l\'insieme in ordine.', 'Ajoute le nombre 4 à l\'ensemble et affiche l\'ensemble dans l\'ordre.'],
          h: ['Sets use .add(...). To show them in order, put the set inside sorted(...).', 'Gli insiemi usano .add(...). Per mostrarli in ordine, metti l\'insieme dentro sorted(...).', 'Les ensembles utilisent .add(...). Pour les afficher dans l\'ordre, mets l\'ensemble dans sorted(...).'],
          start: 'numbers = {1, 2, 3}', sol: 'numbers = {1, 2, 3}\nnumbers.add(4)\nprint(sorted(numbers))', out: '[1, 2, 3, 4]', c: 'add'
        }
      },
      {
        c: c`a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a | b))
print(sorted(a & b))
print(sorted(a - b))
print(sorted(a ^ b))
print({1, 2} <= a)`,
        n: ['|', '&', '^'],
        t: ['Combine two sets', 'Combina due insiemi', 'Combine deux ensembles'],
        x: [`Sets work like in maths class. | is the union: everything that is in one or in the other. & is what they have in common. - is what is in the first but not in the second. ^ is what is in only one of them.

<= asks if one set is inside the other. Great to find what two groups share.`,
          `Gli insiemi funzionano come in matematica. | è l'unione: tutto quello che sta nell'uno o nell'altro. & è quello che hanno in comune. - è quello che sta nel primo ma non nel secondo. ^ è quello che sta in uno solo dei due.

<= chiede se un insieme sta dentro l'altro. Ottimo per trovare cosa hanno in comune due gruppi.`,
          `Les ensembles marchent comme en maths. | est la réunion : tout ce qui est dans l'un ou dans l'autre. & est ce qu'ils ont en commun. - est ce qui est dans le premier mais pas dans le deuxième. ^ est ce qui est dans un seul des deux.

<= demande si un ensemble est dans l'autre. Très bien pour trouver ce que deux groupes ont en commun.`],
        ex: {
          t: ['Show what the sets {1, 2, 3} and {2, 3, 4} have in common, as a sorted list.', 'Mostra cosa hanno in comune gli insiemi {1, 2, 3} e {2, 3, 4}, come lista ordinata.', 'Affiche ce que les ensembles {1, 2, 3} et {2, 3, 4} ont en commun, sous forme de liste triée.'],
          h: ['sorted({1, 2, 3} & {2, 3, 4})', 'sorted({1, 2, 3} & {2, 3, 4})', 'sorted({1, 2, 3} & {2, 3, 4})'],
          sol: 'print(sorted({1, 2, 3} & {2, 3, 4}))', out: '[2, 3]', c: '&'
        }
      },
      {
        c: [c`visits = ["Rome", "Paris", "Rome", "Oslo", "Paris", "Rome"]
print(len(visits))
unique = set(visits)
print(len(unique))
ordered = []
for v in visits:
    if v not in ordered:
        ordered.append(v)
print(ordered)`, c`visits = ["Roma", "Parigi", "Roma", "Oslo", "Parigi", "Roma"]
print(len(visits))
unique = set(visits)
print(len(unique))
ordered = []
for v in visits:
    if v not in ordered:
        ordered.append(v)
print(ordered)`, c`visits = ["Rome", "Paris", "Rome", "Oslo", "Paris", "Rome"]
print(len(visits))
unique = set(visits)
print(len(unique))
ordered = []
for v in visits:
    if v not in ordered:
        ordered.append(v)
print(ordered)`],
        n: ['not in'],
        t: ['Remove repeats', 'Togli le ripetizioni', 'Enlève les répétitions'],
        x: [`To count the different things, turn the list into a set and use len. To keep the order in which things first appeared, loop and add to a new list only if the thing is not already there.

not in is the opposite of in: it is True when the thing is not inside.`,
          `Per contare le cose diverse, trasforma la lista in un insieme e usa len. Per tenere l'ordine in cui le cose sono comparse la prima volta, fai un ciclo e aggiungi a una lista nuova solo se la cosa non c'è già.

not in è il contrario di in: è True quando la cosa non c'è dentro.`,
          `Pour compter les choses différentes, transforme la liste en ensemble et utilise len. Pour garder l'ordre dans lequel les choses sont apparues la première fois, fais une boucle et ajoute à une nouvelle liste seulement si la chose n'y est pas déjà.

not in est le contraire de in : il est True quand la chose n'est pas dedans.`],
        ex: {
          t: ['Remove the repeats from [3, 1, 3, 2, 1] keeping the first order: the result must be [3, 1, 2].', 'Togli le ripetizioni da [3, 1, 3, 2, 1] tenendo l\'ordine di arrivo: il risultato deve essere [3, 1, 2].', 'Enlève les répétitions de [3, 1, 3, 2, 1] en gardant l\'ordre d\'arrivée : le résultat doit être [3, 1, 2].'],
          h: ['Loop, and use if n not in result: then result.append(n).', 'Fai un ciclo e usa if n not in result: poi result.append(n).', 'Fais une boucle et utilise if n not in result: puis result.append(n).'],
          start: 'numbers = [3, 1, 3, 2, 1]\nresult = []', sol: 'numbers = [3, 1, 3, 2, 1]\nresult = []\nfor n in numbers:\n    if n not in result:\n        result.append(n)\nprint(result)', out: '[3, 1, 2]', c: 'not in'
        }
      }
    ]
  }
];
