// Stage 1 · The basics. See tools/build-course.js for the format.
const c = String.raw;
const G1 = ['Stage 1 · The basics', 'Livello 1 · Le basi', 'Niveau 1 · Les bases'];

module.exports = [
  // ------------------------------------------------------------------ 1
  {
    group: G1,
    title: ['Meet Pyviel', 'Conosci Pyviel', 'Découvre Pyviel'],
    subtitle: ['Your very first program', 'Il tuo primo programma', 'Ton tout premier programme'],
    steps: [
      {
        c: c`print("Hello!")`,
        t: ['Make the computer talk', 'Fai parlare il computer', "Fais parler l'ordinateur"],
        x: [`A program is a list of instructions. The computer reads them from the top to the bottom.

print is a word that Python already knows. It makes the computer say something. What you want it to say goes inside the round brackets, between quotes.`,
          `Un programma è un elenco di istruzioni. Il computer le legge dall'alto verso il basso.

print è una parola che Python conosce già. Fa dire qualcosa al computer. Quello che vuoi fargli dire va dentro le parentesi tonde, tra virgolette.`,
          `Un programme est une liste d'instructions. L'ordinateur les lit de haut en bas.

print est un mot que Python connaît déjà. Il fait dire quelque chose à l'ordinateur. Ce que tu veux lui faire dire va entre les parenthèses, entre guillemets.`],
        d: ['Click the green Run button. Look at the Output box.', 'Premi il pulsante verde Esegui. Guarda la casella Risultato.', 'Appuie sur le bouton vert Lancer. Regarde la boîte Résultat.'],
        w: ['Spell print correctly, with brackets and quotes. If you write prnt, Pyviel tells you which line is wrong.', 'Scrivi bene print, con le parentesi e le virgolette. Se scrivi prnt, Pyviel ti dice quale riga è sbagliata.', 'Écris bien print, avec les parenthèses et les guillemets. Si tu écris prnt, Pyviel te dit quelle ligne est fausse.']
      },
      {
        c: c`print("Hello!")
print("My name is Pyviel.")
print("Nice to meet you.")`,
        t: ['Say more than one thing', "Di' più di una cosa", "Dis plus d'une chose"],
        x: [`Each print line says one line. The computer does them in order, just like you read a book.

The quotes tell Python that the words are text, not instructions.`,
          `Ogni riga print dice una riga. Il computer le fa in ordine, proprio come leggi un libro.

Le virgolette dicono a Python che le parole sono testo, non istruzioni.`,
          `Chaque ligne print dit une ligne. L'ordinateur les fait dans l'ordre, comme tu lis un livre.

Les guillemets disent à Python que les mots sont du texte, pas des instructions.`],
        d: ['Add one more line that says your own name.', 'Aggiungi un\'altra riga che dice il tuo nome.', 'Ajoute une ligne de plus qui dit ton prénom.'],
        w: ['Every opening bracket and every opening quote needs its closing one.', 'Ogni parentesi aperta e ogni virgoletta aperta ha bisogno della sua chiusura.', 'Chaque parenthèse ouverte et chaque guillemet ouvert a besoin de sa fermeture.']
      },
      {
        c: c`print("The answer is")
print(7)
print(2 + 3)`,
        t: ['Numbers do not need quotes', 'I numeri non vogliono virgolette', 'Les nombres n\'ont pas besoin de guillemets'],
        x: [`Words are called text, and they live between quotes. Numbers are written plain, without quotes.

Python can even do the sum for you: print(2 + 3) shows 5, not "2 + 3".`,
          `Le parole si chiamano testo e stanno tra virgolette. I numeri si scrivono semplici, senza virgolette.

Python sa anche fare il conto per te: print(2 + 3) mostra 5, non "2 + 3".`,
          `Les mots s'appellent du texte et se mettent entre guillemets. Les nombres s'écrivent tels quels, sans guillemets.

Python sait même faire le calcul pour toi : print(2 + 3) montre 5, pas "2 + 3".`],
        d: ['Change the 7 to your age. Then try print(10 - 4).', 'Cambia il 7 con la tua età. Poi prova print(10 - 4).', 'Remplace le 7 par ton âge. Puis essaie print(10 - 4).'],
        w: ['"2 + 3" with quotes is only text, and Python shows it as it is.', '"2 + 3" con le virgolette è solo testo, e Python lo mostra così com\'è.', '"2 + 3" avec des guillemets n\'est que du texte, et Python le montre tel quel.']
      },
      {
        c: c`# This line is only a note
print("The note above is invisible.")  # a note can go here too`,
        t: ['Notes for people', 'Note per le persone', 'Des notes pour les humains'],
        x: [`A line that starts with # is a note. Python skips it. Notes help people understand the code later, even you, next week.

A note can also go at the end of a line.`,
          `Una riga che comincia con # è una nota. Python la salta. Le note aiutano le persone a capire il codice più tardi, anche te, la settimana prossima.

Una nota può stare anche alla fine di una riga.`,
          `Une ligne qui commence par # est une note. Python la saute. Les notes aident les gens à comprendre le code plus tard, toi aussi, la semaine prochaine.

Une note peut aussi aller à la fin d'une ligne.`],
        d: ['Write your own note with a # at the start.', 'Scrivi una tua nota con un # all\'inizio.', 'Écris ta propre note avec un # au début.']
      },
      {
        c: c`print("Before")
print(pirnt)
print("After")`,
        e: 'NameError',
        t: ['When something breaks', 'Quando qualcosa si rompe', 'Quand quelque chose casse'],
        x: [`Everybody makes mistakes, all the time. Here pirnt is a typo: Python does not know that name.

Pyviel tells you in one sentence what happened and on which line. The button View full error shows the whole message that Python wrote, for when you want to learn to read it.`,
          `Tutti sbagliano, sempre. Qui pirnt è un errore di battitura: Python non conosce quel nome.

Pyviel ti dice in una frase cosa è successo e in che riga. Il pulsante Mostra l'errore completo fa vedere tutto il messaggio che Python ha scritto, per quando vuoi imparare a leggerlo.`,
          `Tout le monde se trompe, tout le temps. Ici pirnt est une faute de frappe : Python ne connaît pas ce nom.

Pyviel te dit en une phrase ce qui s'est passé et à quelle ligne. Le bouton Voir l'erreur complète montre tout le message que Python a écrit, pour quand tu veux apprendre à le lire.`],
        d: ['Fix the typo, then run it again. All three lines will appear.', 'Correggi l\'errore, poi riesegui. Compariranno tutte e tre le righe.', 'Corrige la faute, puis relance. Les trois lignes apparaîtront.'],
        w: ['Python stops at the first mistake. The lines after it do not run until you fix it.', 'Python si ferma al primo errore. Le righe dopo non girano finché non lo correggi.', 'Python s\'arrête à la première erreur. Les lignes d\'après ne tournent pas tant que tu ne l\'as pas corrigée.']
      }
    ]
  },

  // ------------------------------------------------------------------ 2
  {
    title: ['Text', 'Il testo', 'Le texte'],
    subtitle: ['Words between quotes', 'Parole tra virgolette', 'Des mots entre guillemets'],
    steps: [
      {
        c: c`print("Double quotes")
print('Single quotes')`,
        t: ['Two kinds of quotes', 'Due tipi di virgolette', 'Deux sortes de guillemets'],
        x: [`Text can be written with double quotes " or with single quotes '. Both mean exactly the same.

The only rule: the quote that closes must be the same kind as the quote that opens.`,
          `Il testo si può scrivere con le virgolette doppie " o con quelle singole '. Significano esattamente la stessa cosa.

L'unica regola: la virgoletta che chiude deve essere dello stesso tipo di quella che apre.`,
          `Le texte peut s'écrire avec des guillemets doubles " ou simples '. Les deux veulent dire exactement la même chose.

La seule règle : le guillemet qui ferme doit être du même genre que celui qui ouvre.`],
        d: ['Print your name with single quotes.', 'Stampa il tuo nome con le virgolette singole.', 'Affiche ton prénom avec des guillemets simples.'],
        w: ['"hello\' mixes two kinds and Python cannot read it.', '"ciao\' mescola due tipi e Python non riesce a leggerlo.', '"salut\' mélange deux sortes et Python ne peut pas le lire.']
      },
      {
        c: c`print("It's a nice day")
print('She said "hello" to me')`,
        t: ['A quote inside a text', 'Una virgoletta dentro un testo', 'Un guillemet dans un texte'],
        x: [`What if the text contains a quote? Use the other kind around it.

"It's a nice day" has a single quote inside, so the outside uses double quotes.`,
          `E se il testo contiene una virgoletta? Usa l'altro tipo all'esterno.

"It's a nice day" ha una virgoletta singola dentro, quindi fuori si usano le doppie.`,
          `Et si le texte contient un guillemet ? Utilise l'autre sorte autour.

"It's a nice day" a un guillemet simple dedans, donc dehors on met des doubles.`],
        d: ['Print: He said "wow". Use the right quotes.', 'Stampa: Ha detto "wow". Usa le virgolette giuste.', 'Affiche : Il a dit "wow". Utilise les bons guillemets.']
      },
      {
        c: c`first = "Py"
second = "viel"
print(first + second)
print("Ha" * 3)
print("-" * 20)`,
        t: ['Join and repeat texts', 'Unire e ripetere i testi', 'Joindre et répéter les textes'],
        x: [`The plus sign + glues two texts together. The star * repeats a text, as many times as the number says.

This is handy for drawing lines: "-" * 20 makes twenty dashes.`,
          `Il segno più + incolla due testi insieme. La stella * ripete un testo, tante volte quante dice il numero.

È comodo per disegnare righe: "-" * 20 fa venti trattini.`,
          `Le signe plus + colle deux textes ensemble. L'étoile * répète un texte, autant de fois que le nombre le dit.

C'est pratique pour dessiner des lignes : "-" * 20 fait vingt tirets.`],
        d: ['Print a row of 10 stars: "*" * 10.', 'Stampa una fila di 10 stelle: "*" * 10.', 'Affiche une rangée de 10 étoiles : "*" * 10.'],
        w: ['Joining a text and a number with + is a mistake. You will learn why, and the fix, soon.', 'Unire un testo e un numero con + è un errore. Tra poco imparerai perché, e come si corregge.', 'Joindre un texte et un nombre avec + est une erreur. Tu apprendras bientôt pourquoi, et comment la corriger.']
      },
      {
        c: c`print("Line one\nLine two")
print("Name:\tAda")
print("She said \"hi\"")
print("A backslash: \\")`,
        t: ['New lines and tabs', 'A capo e tabulazioni', 'Retours à la ligne et tabulations'],
        x: [`The backslash \\ starts a special code inside a text. \\n means "new line", \\t means "a tab" (a wide space), and \\" puts a quote inside the text without closing it.

To show a real backslash, write two: \\\\.`,
          `La barra rovesciata \\ comincia un codice speciale dentro un testo. \\n vuol dire "a capo", \\t vuol dire "una tabulazione" (uno spazio largo), e \\" mette una virgoletta nel testo senza chiuderlo.

Per mostrare una vera barra rovesciata se ne scrivono due: \\\\.`,
          `L'antislash \\ commence un code spécial dans un texte. \\n veut dire « à la ligne », \\t veut dire « une tabulation » (un grand espace), et \\" met un guillemet dans le texte sans le fermer.

Pour montrer un vrai antislash, on en écrit deux : \\\\.`],
        d: ['Print your name and your age on two lines with only one print.', 'Stampa il tuo nome e la tua età su due righe con un solo print.', 'Affiche ton prénom et ton âge sur deux lignes avec un seul print.'],
        w: ['The backslash leans to the left: \\ . A slash / does nothing special.', 'La barra rovesciata pende a sinistra: \\ . La barra normale / non fa niente di speciale.', 'L\'antislash penche vers la gauche : \\ . La barre normale / n\'a rien de spécial.']
      },
      {
        c: c`poem = """Roses are red,
Violets are blue,
Python is fun,
And so are you."""
print(poem)`,
        t: ['A long text on many lines', 'Un testo lungo su più righe', 'Un long texte sur plusieurs lignes'],
        x: [`Three quotes in a row """ start a text that can go over many lines. It ends with three quotes again.

Every new line you type inside is kept in the text.`,
          `Tre virgolette di fila """ iniziano un testo che può andare su più righe. Finisce di nuovo con tre virgolette.

Ogni riga nuova che scrivi dentro viene tenuta nel testo.`,
          `Trois guillemets d'affilée """ commencent un texte qui peut aller sur plusieurs lignes. Il se termine de nouveau par trois guillemets.

Chaque nouvelle ligne que tu écris dedans est gardée dans le texte.`],
        d: ['Write a poem of your own with four lines.', 'Scrivi una poesia tua di quattro righe.', 'Écris un poème à toi de quatre lignes.']
      },
      {
        c: c`word = "Python"
print(len(word))
print(word[0])
print(word[-1])
print(word[0:2])
print(word.upper())`,
        t: ['Look inside a text', 'Guardare dentro un testo', 'Regarder dans un texte'],
        x: [`len(text) counts the letters. A text is a row of letters, and each one has a position that starts at 0: the first letter is word[0].

A negative position counts from the end: word[-1] is the last letter. word[0:2] takes the letters from position 0 up to, but not including, position 2. word.upper() makes capital letters.`,
          `len(testo) conta le lettere. Un testo è una fila di lettere, e ognuna ha una posizione che parte da 0: la prima lettera è word[0].

Una posizione negativa conta dalla fine: word[-1] è l'ultima lettera. word[0:2] prende le lettere dalla posizione 0 fino alla 2, esclusa. word.upper() fa le lettere maiuscole.`,
          `len(texte) compte les lettres. Un texte est une rangée de lettres, et chacune a une position qui commence à 0 : la première lettre est word[0].

Une position négative compte depuis la fin : word[-1] est la dernière lettre. word[0:2] prend les lettres de la position 0 jusqu'à la 2, non comprise. word.upper() met des majuscules.`],
        d: ['Print the third letter of "Python" and its last two letters.', 'Stampa la terza lettera di "Python" e le sue ultime due lettere.', 'Affiche la troisième lettre de "Python" et ses deux dernières lettres.'],
        w: ['Positions start at 0, not at 1. The third letter is word[2].', 'Le posizioni partono da 0, non da 1. La terza lettera è word[2].', 'Les positions commencent à 0, pas à 1. La troisième lettre est word[2].']
      }
    ]
  },

  // ------------------------------------------------------------------ 3
  {
    title: ['Names and boxes', 'Nomi e scatole', 'Noms et boîtes'],
    subtitle: ['Remember things for later', 'Ricorda le cose per dopo', 'Retenir des choses pour plus tard'],
    steps: [
      {
        c: c`name = "Ada"
print(name)
print("Hello", name)`,
        t: ['A box with a name', 'Una scatola con un nome', 'Une boîte avec un nom'],
        x: [`Imagine a box with a label on it. You put something inside, and later you ask for it by reading the label.

name = "Ada" puts the text Ada in a box called name. After that, whenever you write name, Python opens the box and uses what is inside. This is called a variable.`,
          `Immagina una scatola con un'etichetta. Ci metti qualcosa dentro, e più tardi la chiedi leggendo l'etichetta.

name = "Ada" mette il testo Ada in una scatola chiamata name. Dopo, ogni volta che scrivi name, Python apre la scatola e usa quello che c'è dentro. Si chiama variabile.`,
          `Imagine une boîte avec une étiquette. Tu mets quelque chose dedans, et plus tard tu la demandes en lisant l'étiquette.

name = "Ada" met le texte Ada dans une boîte appelée name. Ensuite, chaque fois que tu écris name, Python ouvre la boîte et utilise ce qu'il y a dedans. On appelle ça une variable.`],
        d: ['Put your own name in the box.', 'Metti il tuo nome nella scatola.', 'Mets ton propre prénom dans la boîte.'],
        w: ['The = sign here does not ask a question. It means "put this value in this name".', 'Il segno = qui non fa una domanda. Vuol dire "metti questo valore in questo nome".', 'Le signe = ici ne pose pas une question. Il veut dire « mets cette valeur dans ce nom ».']
      },
      {
        c: c`age = 7
print("Now:", age)
age = 8
print("Next year:", age)
age = age + 1
print("The year after:", age)`,
        t: ['Change what is inside', 'Cambia quello che c\'è dentro', 'Change ce qu\'il y a dedans'],
        x: [`Putting a new value in a box that already exists throws the old one away.

age = age + 1 looks strange but it works: Python first works out the right side (the old age plus one), then puts the result back in the box.`,
          `Mettere un nuovo valore in una scatola che esiste già butta via il vecchio.

age = age + 1 sembra strano ma funziona: Python prima calcola la parte a destra (la vecchia età più uno), poi rimette il risultato nella scatola.`,
          `Mettre une nouvelle valeur dans une boîte qui existe déjà jette l'ancienne.

age = age + 1 a l'air étrange mais ça marche : Python calcule d'abord la partie de droite (l'ancien âge plus un), puis remet le résultat dans la boîte.`],
        d: ['Make the age 10, then add 5 to it.', 'Metti l\'età a 10, poi aggiungici 5.', 'Mets l\'âge à 10, puis ajoutes-en 5.']
      },
      {
        c: c`name = "Ada"
age = 7
print(name, "is", age, "years old")
print(name, age, sep=" - ")
print("Loading", end="...")
print("done")`,
        t: ['Show several things at once', 'Mostrare più cose insieme', 'Montrer plusieurs choses à la fois'],
        x: [`print can show many things in one line. Put commas between them, and Python adds a space between each.

You can change that: sep= says what goes between the things, and end= says what goes at the end (normally a new line).`,
          `print può mostrare tante cose in una riga. Metti le virgole tra l'una e l'altra, e Python aggiunge uno spazio in mezzo.

Si può cambiare: sep= dice cosa va in mezzo alle cose, e end= dice cosa va alla fine (normalmente un a capo).`,
          `print peut montrer plein de choses sur une ligne. Mets des virgules entre elles, et Python ajoute un espace entre chacune.

Tu peux changer ça : sep= dit ce qui va entre les choses, et end= dit ce qui va à la fin (normalement un retour à la ligne).`],
        d: ['Print three words with sep="+" between them.', 'Stampa tre parole con sep="+" in mezzo.', 'Affiche trois mots avec sep="+" entre eux.']
      },
      {
        c: c`my_age = 12
player_name = "Ada"
score2 = 100
print(player_name, my_age, score2)`,
        t: ['Good names', 'Buoni nomi', 'De bons noms'],
        x: [`A name can have letters, digits and the underscore _. It cannot start with a digit and it cannot have spaces.

Capital letters count: Age and age are two different boxes. Python programmers write names in small letters with underscores, like player_name. Choose names that say what is inside.`,
          `Un nome può avere lettere, cifre e il trattino basso _. Non può cominciare con una cifra e non può avere spazi.

Le maiuscole contano: Age e age sono due scatole diverse. Chi programma in Python scrive i nomi in minuscolo con i trattini bassi, come player_name. Scegli nomi che dicono cosa c'è dentro.`,
          `Un nom peut avoir des lettres, des chiffres et le tiret bas _. Il ne peut pas commencer par un chiffre ni avoir d'espaces.

Les majuscules comptent : Age et age sont deux boîtes différentes. Les gens qui programment en Python écrivent les noms en minuscules avec des tirets bas, comme player_name. Choisis des noms qui disent ce qu'il y a dedans.`],
        d: ['Make a box called favourite_colour and print it.', 'Crea una scatola chiamata colore_preferito e stampala.', 'Crée une boîte appelée couleur_preferee et affiche-la.'],
        w: ['Words like if, for, while and print have a meaning in Python. Do not use them as names.', 'Parole come if, for, while hanno un significato in Python. Non usarle come nomi.', 'Des mots comme if, for, while ont un sens en Python. Ne les utilise pas comme noms.']
      },
      {
        c: c`a, b = 1, 2
print(a, b)
a, b = b, a
print(a, b)
x = y = 0
print(x, y)`,
        t: ['Many boxes at once', 'Tante scatole insieme', 'Plusieurs boîtes à la fois'],
        x: [`You can fill several boxes in one line: a, b = 1, 2 puts 1 in a and 2 in b.

That makes swapping easy: a, b = b, a. And x = y = 0 puts the same value in two boxes.`,
          `Puoi riempire più scatole in una riga: a, b = 1, 2 mette 1 in a e 2 in b.

Così scambiare è facile: a, b = b, a. E x = y = 0 mette lo stesso valore in due scatole.`,
          `Tu peux remplir plusieurs boîtes en une ligne : a, b = 1, 2 met 1 dans a et 2 dans b.

Ça rend l'échange facile : a, b = b, a. Et x = y = 0 met la même valeur dans deux boîtes.`],
        d: ['Make three boxes in one line, then print them.', 'Crea tre scatole in una riga, poi stampale.', 'Crée trois boîtes en une ligne, puis affiche-les.']
      }
    ]
  },

  // ------------------------------------------------------------------ 4
  {
    title: ['Numbers', 'I numeri', 'Les nombres'],
    subtitle: ['Sums, and a few surprises', 'Conti, e qualche sorpresa', 'Des calculs, et quelques surprises'],
    steps: [
      {
        c: c`print(7 + 3)
print(7 - 3)
print(7 * 3)
print(7 / 2)`,
        t: ['The four operations', 'Le quattro operazioni', 'Les quatre opérations'],
        x: [`Python is a very good calculator. + adds, - subtracts, * multiplies and / divides.

A division with / always gives a number with a point, even when it comes out round: 6 / 2 is 3.0.`,
          `Python è un'ottima calcolatrice. + somma, - sottrae, * moltiplica e / divide.

Una divisione con / dà sempre un numero con la virgola (il punto), anche quando viene tonda: 6 / 2 fa 3.0.`,
          `Python est une très bonne calculatrice. + additionne, - soustrait, * multiplie et / divise.

Une division avec / donne toujours un nombre avec un point, même quand le résultat est rond : 6 / 2 fait 3.0.`],
        d: ['How many minutes are in a day? Multiply 24 by 60.', 'Quanti minuti ci sono in un giorno? Moltiplica 24 per 60.', 'Combien de minutes y a-t-il dans un jour ? Multiplie 24 par 60.'],
        w: ['Python writes decimals with a point, not a comma: 3.5.', 'Python scrive i decimali con il punto, non con la virgola: 3.5.', 'Python écrit les décimaux avec un point, pas une virgule : 3.5.']
      },
      {
        c: c`print(7 // 2)
print(7 % 2)
print(2 ** 10)
print(-7 // 2)`,
        t: ['Whole division, rest and power', 'Divisione intera, resto e potenza', 'Division entière, reste et puissance'],
        x: [`// divides and keeps only the whole part: 7 // 2 is 3. % gives what is left over: 7 % 2 is 1.

** is the power: 2 ** 10 means 2 times itself ten times. The rest operator % is great for checking if a number is even: n % 2 is 0 for even numbers.`,
          `// divide e tiene solo la parte intera: 7 // 2 fa 3. % dà quello che avanza: 7 % 2 fa 1.

** è la potenza: 2 ** 10 vuol dire 2 moltiplicato per sé stesso dieci volte. Il resto % è ottimo per controllare se un numero è pari: n % 2 fa 0 per i numeri pari.`,
          `// divise et garde seulement la partie entière : 7 // 2 fait 3. % donne ce qui reste : 7 % 2 fait 1.

** est la puissance : 2 ** 10 veut dire 2 multiplié par lui-même dix fois. Le reste % est parfait pour vérifier si un nombre est pair : n % 2 vaut 0 pour les nombres pairs.`],
        d: ['What is 100 % 7? And 3 ** 4?', 'Quanto fa 100 % 7? E 3 ** 4?', 'Combien font 100 % 7 ? Et 3 ** 4 ?'],
        w: ['-7 // 2 gives -4, not -3: whole division rounds down.', '-7 // 2 dà -4, non -3: la divisione intera arrotonda per difetto.', '-7 // 2 donne -4, pas -3 : la division entière arrondit vers le bas.']
      },
      {
        c: c`print(2 + 3 * 4)
print((2 + 3) * 4)
print(10 - 2 - 3)
print(2 ** 3 ** 2)`,
        t: ['Which sum goes first?', 'Quale conto va per primo?', 'Quel calcul passe en premier ?'],
        x: [`Python follows the rules from maths class: power first, then multiplication and division, then addition and subtraction.

Round brackets go before everything. When you are not sure, add brackets: they are free and they make the code clear.`,
          `Python segue le regole della matematica: prima la potenza, poi moltiplicazione e divisione, poi somma e sottrazione.

Le parentesi tonde vengono prima di tutto. Quando non sei sicuro, aggiungi le parentesi: sono gratis e rendono il codice chiaro.`,
          `Python suit les règles des maths : d'abord la puissance, puis la multiplication et la division, puis l'addition et la soustraction.

Les parenthèses passent avant tout. Quand tu n'es pas sûr, ajoute des parenthèses : elles sont gratuites et rendent le code clair.`],
        d: ['Put brackets so that 1 + 2 * 3 gives 9.', 'Metti le parentesi in modo che 1 + 2 * 3 faccia 9.', 'Mets des parenthèses pour que 1 + 2 * 3 fasse 9.']
      },
      {
        c: c`print(3.14159)
print(0.1 + 0.2)
print(round(3.14159, 2))
print(round(2.5))
print(abs(-5))
print(min(4, 9, 2), max(4, 9, 2))`,
        t: ['Numbers with a point', 'Numeri con la virgola', 'Nombres à virgule'],
        x: [`A number with a point is called a float. Computers keep them in a way that is not perfect: 0.1 + 0.2 shows 0.30000000000000004. It is normal, it happens in every language.

round(x, 2) cuts to 2 decimals. abs gives the size without the minus sign. min and max find the smallest and the biggest.`,
          `Un numero con la virgola si chiama float. I computer li tengono in un modo non perfetto: 0.1 + 0.2 mostra 0.30000000000000004. È normale, succede in ogni linguaggio.

round(x, 2) taglia a 2 decimali. abs dà la grandezza senza il segno meno. min e max trovano il più piccolo e il più grande.`,
          `Un nombre à virgule s'appelle un float. Les ordinateurs les gardent d'une façon pas parfaite : 0.1 + 0.2 montre 0.30000000000000004. C'est normal, ça arrive dans tous les langages.

round(x, 2) coupe à 2 décimales. abs donne la taille sans le signe moins. min et max trouvent le plus petit et le plus grand.`],
        d: ['Round 9.87654 to one decimal.', 'Arrotonda 9.87654 a un decimale.', 'Arrondis 9.87654 à une décimale.'],
        w: ['round(2.5) gives 2, not 3: Python rounds halves to the nearest even number.', 'round(2.5) dà 2, non 3: Python arrotonda le metà al numero pari più vicino.', 'round(2.5) donne 2, pas 3 : Python arrondit les moitiés au nombre pair le plus proche.']
      },
      {
        c: c`total = 0
total = total + 5
total += 5
total *= 2
print(total)
big = 1_000_000
print(big)`,
        t: ['A shorter way to change', 'Un modo più corto di cambiare', 'Une façon plus courte de changer'],
        x: [`total += 5 is a shortcut for total = total + 5. The same exists for the other operations: -=, *=, /=, //=, %= and **=.

Big numbers can have underscores to be easier to read: 1_000_000. Python ignores them.`,
          `total += 5 è una scorciatoia per total = total + 5. Esiste lo stesso per le altre operazioni: -=, *=, /=, //=, %= e **=.

I numeri grandi possono avere i trattini bassi per leggerli meglio: 1_000_000. Python li ignora.`,
          `total += 5 est un raccourci pour total = total + 5. Il existe la même chose pour les autres opérations : -=, *=, /=, //=, %= et **=.

Les grands nombres peuvent avoir des tirets bas pour être plus faciles à lire : 1_000_000. Python les ignore.`],
        d: ['Start with 100 and take away 30 using -=.', 'Parti da 100 e togli 30 usando -=.', 'Pars de 100 et enlève 30 avec -=.']
      }
    ]
  },

  // ------------------------------------------------------------------ 5
  {
    title: ['Kinds of values', 'Tipi di valori', 'Sortes de valeurs'],
    subtitle: ['Text, whole numbers, decimals and more', 'Testo, interi, decimali e altro', 'Texte, entiers, décimaux et plus'],
    steps: [
      {
        c: c`print(type("hello"))
print(type(7))
print(type(7.5))
print(type(True))`,
        t: ['Every value has a type', 'Ogni valore ha un tipo', 'Chaque valeur a un type'],
        x: [`Every value in Python is of some kind. type(...) tells you which: str is a text, int is a whole number, float is a number with a point, bool is True or False.

The kind decides what you can do with the value. You can multiply numbers, but you cannot multiply a text by a text.`,
          `Ogni valore in Python è di un certo tipo. type(...) ti dice quale: str è un testo, int è un numero intero, float è un numero con la virgola, bool è True o False.

Il tipo decide cosa puoi fare con il valore. Puoi moltiplicare i numeri, ma non puoi moltiplicare un testo per un testo.`,
          `Chaque valeur en Python est d'une certaine sorte. type(...) te dit laquelle : str est un texte, int est un nombre entier, float est un nombre à virgule, bool est True ou False.

La sorte décide ce que tu peux faire avec la valeur. Tu peux multiplier des nombres, mais pas un texte par un texte.`],
        d: ['Find the type of 3.0 and of "3".', 'Trova il tipo di 3.0 e di "3".', 'Trouve le type de 3.0 et de "3".']
      },
      {
        c: c`print("5" + "5")
print(5 + 5)
print("5" * 3)`,
        t: ['"5" is not 5', '"5" non è 5', '"5" n\'est pas 5'],
        x: [`"5" with quotes is a text, the drawing of the digit. 5 without quotes is the number.

The same + does different things: joining for texts ("5" + "5" is "55") and adding for numbers (5 + 5 is 10).`,
          `"5" con le virgolette è un testo, il disegno della cifra. 5 senza virgolette è il numero.

Lo stesso + fa cose diverse: unire per i testi ("5" + "5" è "55") e sommare per i numeri (5 + 5 è 10).`,
          `"5" avec des guillemets est un texte, le dessin du chiffre. 5 sans guillemets est le nombre.

Le même + fait des choses différentes : joindre pour les textes ("5" + "5" donne "55") et additionner pour les nombres (5 + 5 donne 10).`],
        d: ['Predict what "ab" * 2 + "c" shows, then run it.', 'Prevedi cosa mostra "ab" * 2 + "c", poi eseguilo.', 'Prévois ce que montre "ab" * 2 + "c", puis lance-le.']
      },
      {
        c: c`print(int("42") + 1)
print(float("2.5") * 2)
print(str(7) + " days")
print(int(9.99))
print(int(True), bool(0), bool("hi"))`,
        t: ['Changing the type', 'Cambiare il tipo', 'Changer le type'],
        x: [`int(...) makes a whole number, float(...) makes a number with a point, str(...) makes a text, bool(...) makes True or False. They are the tools to move from one kind to another.

int(9.99) cuts the decimals, it does not round. bool gives False for 0 and for an empty text, and True for everything else.`,
          `int(...) fa un numero intero, float(...) fa un numero con la virgola, str(...) fa un testo, bool(...) fa True o False. Sono gli strumenti per passare da un tipo all'altro.

int(9.99) taglia i decimali, non arrotonda. bool dà False per 0 e per un testo vuoto, e True per tutto il resto.`,
          `int(...) fait un nombre entier, float(...) fait un nombre à virgule, str(...) fait un texte, bool(...) fait True ou False. Ce sont les outils pour passer d'une sorte à l'autre.

int(9.99) coupe les décimales, il n'arrondit pas. bool donne False pour 0 et pour un texte vide, et True pour tout le reste.`],
        d: ['Turn the text "15" into a number and double it.', 'Trasforma il testo "15" in numero e raddoppialo.', 'Transforme le texte "15" en nombre et double-le.']
      },
      {
        c: c`age = 12
print("I am " + str(age) + " years old")
print("I am", age, "years old")`,
        t: ['Mixing text and numbers', 'Mescolare testo e numeri', 'Mélanger texte et nombres'],
        x: [`You cannot glue a text and a number with +. Two ways out: turn the number into text with str(age), or use print with commas, which accepts anything.

Python is strict on purpose: it does not guess, so you always know what is happening.`,
          `Non puoi incollare un testo e un numero con +. Due soluzioni: trasformare il numero in testo con str(age), oppure usare print con le virgole, che accetta tutto.

Python è severo di proposito: non indovina, così sai sempre cosa succede.`,
          `Tu ne peux pas coller un texte et un nombre avec +. Deux solutions : transformer le nombre en texte avec str(age), ou utiliser print avec des virgules, qui accepte tout.

Python est strict exprès : il ne devine pas, ainsi tu sais toujours ce qui se passe.`],
        d: ['Try the same with your age and your name.', 'Prova lo stesso con la tua età e il tuo nome.', 'Essaie la même chose avec ton âge et ton prénom.'],
        w: ['"I am " + age (without str) stops with an error. Try it and read the explanation.', '"I am " + age (senza str) si ferma con un errore. Provalo e leggi la spiegazione.', '"I am " + age (sans str) s\'arrête avec une erreur. Essaie et lis l\'explication.']
      },
      {
        c: c`print("I am " + 12)`,
        e: 'TypeError',
        t: ['The mistake behind it', 'L\'errore che c\'è dietro', 'L\'erreur derrière'],
        x: [`This is the mistake you get when you mix a text and a number with +. Read what Pyviel says: it names both types and tells you the fix.

Press View full error to see the real Python words: "can only concatenate str (not "int") to str". Learning to read them is a superpower.`,
          `Questo è l'errore che si ottiene mescolando un testo e un numero con +. Leggi cosa dice Pyviel: nomina entrambi i tipi e ti dice come correggere.

Premi Mostra l'errore completo per vedere le vere parole di Python: "can only concatenate str (not "int") to str". Imparare a leggerle è un superpotere.`,
          `C'est l'erreur qu'on obtient en mélangeant un texte et un nombre avec +. Lis ce que dit Pyviel : il nomme les deux types et te dit comment corriger.

Appuie sur Voir l'erreur complète pour voir les vrais mots de Python : « can only concatenate str (not "int") to str ». Apprendre à les lire est un super-pouvoir.`],
        d: ['Fix it with str(12) and run it again.', 'Correggilo con str(12) e riesegui.', 'Corrige-le avec str(12) et relance.']
      }
    ]
  },

  // ------------------------------------------------------------------ 6
  {
    title: ['Ask questions', 'Fai domande', 'Pose des questions'],
    subtitle: ['Talk with the person using your program', 'Parla con chi usa il tuo programma', 'Parle avec la personne qui utilise ton programme'],
    steps: [
      {
        c: c`name = input("What is your name? ")
print("Hello", name)`,
        i: ['Ada'],
        t: ['Ask and listen', 'Chiedi e ascolta', 'Demande et écoute'],
        x: [`input("question") shows the question and waits for the person to type an answer and press Enter. The answer comes back as a text, and here it is kept in the box name.

When you run it, a box appears where you can type.`,
          `input("domanda") mostra la domanda e aspetta che la persona scriva una risposta e prema Invio. La risposta torna come testo, e qui viene tenuta nella scatola name.

Quando lo esegui, compare una casella dove puoi scrivere.`,
          `input("question") montre la question et attend que la personne écrive une réponse et appuie sur Entrée. La réponse revient sous forme de texte, et ici elle est gardée dans la boîte name.

Quand tu le lances, une case apparaît où tu peux écrire.`],
        d: ['Run it and type your name.', 'Eseguilo e scrivi il tuo nome.', 'Lance-le et écris ton prénom.'],
        w: ['Put a space at the end of the question, so the answer does not touch it.', 'Metti uno spazio alla fine della domanda, così la risposta non la tocca.', 'Mets un espace à la fin de la question, pour que la réponse ne la touche pas.']
      },
      {
        c: c`age = input("How old are you? ")
print(age + 1)`,
        i: ['10'],
        e: 'TypeError',
        t: ['An answer is always text', 'Una risposta è sempre testo', 'Une réponse est toujours du texte'],
        x: [`Even when the person types 10, input gives back the text "10", not the number 10. So age + 1 tries to add a number to a text, and Python stops.

This is the most common mistake of beginners. The next step shows how to fix it.`,
          `Anche quando la persona scrive 10, input restituisce il testo "10", non il numero 10. Quindi age + 1 prova a sommare un numero a un testo, e Python si ferma.

È l'errore più comune di chi comincia. Il prossimo passo mostra come correggerlo.`,
          `Même quand la personne écrit 10, input rend le texte "10", pas le nombre 10. Donc age + 1 essaie d'additionner un nombre à un texte, et Python s'arrête.

C'est l'erreur la plus courante des débutants. L'étape suivante montre comment la corriger.`],
        d: ['Run it, type a number, and read the explanation.', 'Eseguilo, scrivi un numero e leggi la spiegazione.', 'Lance-le, écris un nombre et lis l\'explication.']
      },
      {
        c: c`age = int(input("How old are you? "))
print("Next year you will be", age + 1)`,
        i: ['10'],
        t: ['Turn the answer into a number', 'Trasforma la risposta in numero', 'Transforme la réponse en nombre'],
        x: [`Wrap the answer in int(...) to get a whole number, or float(...) for a number with a point. Now you can do sums with it.

Read it from the inside out: input asks, int turns the answer into a number, and age keeps it.`,
          `Avvolgi la risposta in int(...) per avere un numero intero, o float(...) per un numero con la virgola. Ora ci puoi fare i conti.

Leggilo da dentro verso fuori: input chiede, int trasforma la risposta in numero, e age la tiene.`,
          `Entoure la réponse de int(...) pour avoir un nombre entier, ou float(...) pour un nombre à virgule. Maintenant tu peux faire des calculs avec.

Lis-le de l'intérieur vers l'extérieur : input demande, int transforme la réponse en nombre, et age la garde.`],
        d: ['Ask for a number and print its double.', 'Chiedi un numero e stampa il suo doppio.', 'Demande un nombre et affiche son double.'],
        w: ['If the person types letters, int(...) stops with an error. Later you will learn to handle that.', 'Se la persona scrive lettere, int(...) si ferma con un errore. Più avanti imparerai a gestirlo.', 'Si la personne écrit des lettres, int(...) s\'arrête avec une erreur. Plus tard tu apprendras à gérer ça.']
      },
      {
        c: c`first = input("First number: ")
second = input("Second number: ")
total = int(first) + int(second)
print("The sum is", total)`,
        i: ['4', '9'],
        t: ['A small calculator', 'Una piccola calcolatrice', 'Une petite calculatrice'],
        x: [`Questions can be as many as you like. Each one waits for its answer, in order.

Here two answers are asked, both turned into numbers, and then added.`,
          `Le domande possono essere quante vuoi. Ognuna aspetta la sua risposta, in ordine.

Qui si chiedono due risposte, si trasformano entrambe in numeri, e poi si sommano.`,
          `Les questions peuvent être aussi nombreuses que tu veux. Chacune attend sa réponse, dans l'ordre.

Ici on demande deux réponses, on transforme les deux en nombres, puis on les additionne.`],
        d: ['Change it to multiply the two numbers.', 'Cambialo per moltiplicare i due numeri.', 'Change-le pour multiplier les deux nombres.']
      }
    ]
  },

  // ------------------------------------------------------------------ 7
  {
    title: ['Nice messages', 'Messaggi ben fatti', 'De jolis messages'],
    subtitle: ['f-strings: texts with values inside', 'f-string: testi con valori dentro', 'f-strings : des textes avec des valeurs dedans'],
    steps: [
      {
        c: c`name = "Ada"
age = 12
print(f"{name} is {age} years old")`,
        t: ['A text with holes', 'Un testo con dei buchi', 'Un texte avec des trous'],
        x: [`Put an f just before the opening quote and you make an f-string. Inside it, anything between curly brackets { } is replaced by its value.

It is the easiest way to build a message from your variables, and it works with any type, no str(...) needed.`,
          `Metti una f subito prima della virgoletta di apertura e hai una f-string. Dentro, tutto quello che sta tra le graffe { } viene sostituito dal suo valore.

È il modo più facile per costruire un messaggio con le tue variabili, e funziona con ogni tipo, senza bisogno di str(...).`,
          `Mets un f juste avant le guillemet d'ouverture et tu as une f-string. Dedans, tout ce qui est entre accolades { } est remplacé par sa valeur.

C'est la façon la plus facile de construire un message avec tes variables, et ça marche avec tous les types, sans besoin de str(...).`],
        d: ['Make a message with your name, your age and your city.', 'Fai un messaggio con il tuo nome, la tua età e la tua città.', 'Fais un message avec ton prénom, ton âge et ta ville.'],
        w: ['Do not forget the f before the quote, or the curly brackets are shown as they are.', 'Non dimenticare la f prima della virgoletta, o le graffe vengono mostrate così come sono.', 'N\'oublie pas le f avant le guillemet, ou les accolades sont montrées telles quelles.']
      },
      {
        c: c`price = 4
count = 3
print(f"{count} x {price} = {count * price}")
print(f"Half of {price} is {price / 2}")
print(f"{'hello'.upper()}!")`,
        t: ['A sum inside the holes', 'Un conto dentro i buchi', 'Un calcul dans les trous'],
        x: [`Between the curly brackets you can put any piece of Python that gives a value: a sum, a call, even a method.

Python works it out and puts the result in the text.`,
          `Tra le graffe puoi mettere qualunque pezzo di Python che dà un valore: un conto, una chiamata, perfino un metodo.

Python lo calcola e mette il risultato nel testo.`,
          `Entre les accolades tu peux mettre n'importe quel morceau de Python qui donne une valeur : un calcul, un appel, même une méthode.

Python le calcule et met le résultat dans le texte.`],
        d: ['Show the area of a 6 by 4 room in a sentence.', 'Mostra l\'area di una stanza 6 per 4 in una frase.', 'Montre l\'aire d\'une pièce de 6 sur 4 dans une phrase.']
      },
      {
        c: c`pi = 3.14159265
print(f"{pi:.2f}")
print(f"{pi:.4f}")
big = 1234567
print(f"{big:,}")
print(f"{7:03d}")
print(f"{'left':<8}|{'right':>8}|")`,
        t: ['Make numbers look nice', 'Far apparire bene i numeri', 'Faire de beaux nombres'],
        x: [`After the value you can add a colon and a format. :.2f means "2 digits after the point", :, adds commas to big numbers, :03d fills with zeros up to 3 digits, and :<8 or :>8 line the text to the left or to the right in 8 places.

You will not need them every day, but they make tables and prices look clean.`,
          `Dopo il valore puoi aggiungere i due punti e un formato. :.2f vuol dire "2 cifre dopo la virgola", :, aggiunge le virgole ai numeri grandi, :03d riempie di zeri fino a 3 cifre, e :<8 o :>8 allineano il testo a sinistra o a destra in 8 posti.

Non ti serviranno ogni giorno, ma fanno apparire puliti tabelle e prezzi.`,
          `Après la valeur tu peux ajouter deux-points et un format. :.2f veut dire « 2 chiffres après la virgule », :, ajoute des virgules aux grands nombres, :03d remplit de zéros jusqu'à 3 chiffres, et :<8 ou :>8 alignent le texte à gauche ou à droite sur 8 places.

Tu n'en auras pas besoin tous les jours, mais ils rendent propres les tableaux et les prix.`],
        d: ['Show 2.5 as a price with two decimals: 2.50.', 'Mostra 2.5 come un prezzo con due decimali: 2.50.', 'Montre 2.5 comme un prix avec deux décimales : 2.50.']
      },
      {
        c: c`name = input("Your name? ")
city = input("Your city? ")
print(f"Hi {name}! {city} is a nice place.")`,
        i: ['Ada', 'Rome'],
        t: ['Questions and messages together', 'Domande e messaggi insieme', 'Questions et messages ensemble'],
        x: [`Now put the two things together: ask with input, keep the answers in boxes, and build the reply with an f-string.

This is the heart of most small programs: ask, think, answer.`,
          `Ora metti insieme le due cose: chiedi con input, tieni le risposte nelle scatole, e costruisci la risposta con una f-string.

È il cuore di molti piccoli programmi: chiedi, pensa, rispondi.`,
          `Maintenant mets les deux choses ensemble : demande avec input, garde les réponses dans des boîtes, et construis la réponse avec une f-string.

C'est le cœur de beaucoup de petits programmes : demande, réfléchis, réponds.`],
        d: ['Ask for a favourite animal and say something about it.', 'Chiedi un animale preferito e di\' qualcosa su di lui.', 'Demande un animal préféré et dis quelque chose à son sujet.']
      }
    ]
  },

  // ------------------------------------------------------------------ 8
  {
    title: ['True and false', 'Vero e falso', 'Vrai et faux'],
    subtitle: ['Comparing things', 'Confrontare le cose', 'Comparer des choses'],
    steps: [
      {
        c: c`print(5 > 3)
print(5 < 3)
print(type(5 > 3))
print(True, False)`,
        t: ['Yes or no', 'Sì o no', 'Oui ou non'],
        x: [`A comparison asks a question and the answer is True or False. These two words are the whole kind called bool. Note the capital letter: True, not true.

5 > 3 asks "is 5 bigger than 3?" and the answer is True.`,
          `Un confronto fa una domanda e la risposta è True o False. Queste due parole sono tutto il tipo chiamato bool. Nota la maiuscola: True, non true.

5 > 3 chiede "5 è più grande di 3?" e la risposta è True.`,
          `Une comparaison pose une question et la réponse est True ou False. Ces deux mots sont tout le type appelé bool. Note la majuscule : True, pas true.

5 > 3 demande « 5 est-il plus grand que 3 ? » et la réponse est True.`],
        d: ['Ask if 10 is bigger than 20.', 'Chiedi se 10 è più grande di 20.', 'Demande si 10 est plus grand que 20.']
      },
      {
        c: c`age = 12
print(age == 12)
print(age != 12)
print(age >= 10)
print(age <= 10)`,
        t: ['The six comparisons', 'I sei confronti', 'Les six comparaisons'],
        x: [`== is equal, != is not equal, > is bigger, < is smaller, >= is bigger or equal, <= is smaller or equal.

Careful: = puts a value in a box, == asks if two things are equal. They are very different.`,
          `== è uguale, != è diverso, > è maggiore, < è minore, >= è maggiore o uguale, <= è minore o uguale.

Attenzione: = mette un valore in una scatola, == chiede se due cose sono uguali. Sono molto diversi.`,
          `== est égal, != est différent, > est plus grand, < est plus petit, >= est plus grand ou égal, <= est plus petit ou égal.

Attention : = met une valeur dans une boîte, == demande si deux choses sont égales. Ils sont très différents.`],
        d: ['Check if your age is not equal to 13.', 'Controlla se la tua età è diversa da 13.', 'Vérifie si ton âge est différent de 13.'],
        w: ['Writing age = 12 where you wanted age == 12 is the most common slip. Pyviel will tell you.', 'Scrivere age = 12 dove volevi age == 12 è la distrazione più comune. Pyviel te lo dirà.', 'Écrire age = 12 là où tu voulais age == 12 est la distraction la plus courante. Pyviel te le dira.']
      },
      {
        c: c`print("cat" == "cat")
print("cat" == "Cat")
print("apple" < "banana")
print("a" in "banana")
print("z" in "banana")
print(3 in [1, 2, 3])`,
        t: ['Comparing text, and "in"', 'Confrontare il testo, e "in"', 'Comparer du texte, et « in »'],
        x: [`Texts can be compared too. == is true only if they are exactly the same, capital letters included. < and > follow the order of the alphabet.

The word in asks "is this inside that?" It works for letters in a text and for items in a list.`,
          `Anche i testi si possono confrontare. == è vero solo se sono esattamente uguali, maiuscole comprese. < e > seguono l'ordine dell'alfabeto.

La parola in chiede "questo è dentro quello?" Funziona per le lettere in un testo e per gli elementi in una lista.`,
          `Les textes aussi peuvent être comparés. == n'est vrai que s'ils sont exactement pareils, majuscules comprises. < et > suivent l'ordre de l'alphabet.

Le mot in demande « ceci est-il dedans ? » Il marche pour les lettres dans un texte et pour les éléments dans une liste.`],
        d: ['Ask if "py" is inside "python".', 'Chiedi se "py" è dentro "python".', 'Demande si "py" est dans "python".']
      },
      {
        c: c`age = 12
print(age > 10 and age < 15)
print(age < 10 or age == 12)
print(not age == 12)
print(10 < age < 15)`,
        t: ['and, or, not: join questions', 'and, or, not: unire le domande', 'and, or, not : joindre les questions'],
        x: [`Join questions with and (both must be true), or (at least one must be true) and not (turns True into False).

Python even lets you chain: 10 < age < 15 asks if age is between 10 and 15.`,
          `Unisci le domande con and (devono essere vere entrambe), or (almeno una deve essere vera) e not (trasforma True in False).

Python permette perfino di concatenare: 10 < age < 15 chiede se age è tra 10 e 15.`,
          `Joins des questions avec and (les deux doivent être vraies), or (au moins une doit être vraie) et not (change True en False).

Python permet même d'enchaîner : 10 < age < 15 demande si age est entre 10 et 15.`],
        d: ['Check if a number is smaller than 0 or bigger than 100.', 'Controlla se un numero è minore di 0 o maggiore di 100.', 'Vérifie si un nombre est plus petit que 0 ou plus grand que 100.']
      },
      {
        c: c`print(bool(0), bool(1), bool(""), bool("hi"), bool([]), bool([0]))
name = ""
print(not name)
print(None)
print(type(None))
print(None == 0)`,
        t: ['What counts as false', 'Cosa conta come falso', 'Ce qui compte comme faux'],
        x: [`In a question, Python treats some values as False: the number 0, an empty text "", an empty list [] and None. Almost everything else counts as True.

None is a special value that means "nothing here". It is not 0 and it is not an empty text: it is the lack of a value.`,
          `In una domanda, Python considera False alcuni valori: il numero 0, un testo vuoto "", una lista vuota [] e None. Quasi tutto il resto conta come True.

None è un valore speciale che vuol dire "qui non c'è niente". Non è 0 e non è un testo vuoto: è l'assenza di un valore.`,
          `Dans une question, Python traite certaines valeurs comme False : le nombre 0, un texte vide "", une liste vide [] et None. Presque tout le reste compte comme True.

None est une valeur spéciale qui veut dire « rien ici ». Ce n'est pas 0 et ce n'est pas un texte vide : c'est l'absence de valeur.`],
        d: ['Predict bool("False"), then run it.', 'Prevedi bool("False"), poi eseguilo.', 'Prévois bool("False"), puis lance-le.'],
        w: ['bool("False") is True: any text that is not empty is True, whatever it says.', 'bool("False") è True: ogni testo non vuoto è True, qualunque cosa dica.', 'bool("False") est True : tout texte non vide est True, quoi qu\'il dise.']
      }
    ]
  },

  // ------------------------------------------------------------------ 9
  {
    title: ['Make choices', 'Fai scelte', 'Fais des choix'],
    subtitle: ['Let the program decide', 'Lascia decidere il programma', 'Laisse le programme décider'],
    steps: [
      {
        c: c`age = 16
if age >= 18:
    print("You are an adult.")
print("The end")`,
        t: ['If this, then that', 'Se questo, allora quello', 'Si ceci, alors cela'],
        x: [`A program can choose. if looks at a question. The lines pushed in below it (four spaces to the right) run only when the answer is True.

Two things to remember: the line with if ends with a colon :, and the lines that belong to it are pushed in. The line without push-in runs always.`,
          `Un programma può scegliere. if guarda una domanda. Le righe rientrate sotto (quattro spazi a destra) girano solo quando la risposta è True.

Due cose da ricordare: la riga con if finisce con i due punti :, e le righe che le appartengono sono rientrate. La riga senza rientro gira sempre.`,
          `Un programme peut choisir. if regarde une question. Les lignes décalées dessous (quatre espaces vers la droite) ne tournent que quand la réponse est True.

Deux choses à retenir : la ligne avec if se termine par deux-points :, et les lignes qui lui appartiennent sont décalées. La ligne sans décalage tourne toujours.`],
        d: ['Change the age to 20 and run it again.', 'Cambia l\'età in 20 e riesegui.', 'Change l\'âge en 20 et relance.'],
        w: ['Forgetting the colon is a very common mistake. Pyviel will say where it is missing.', 'Dimenticare i due punti è un errore molto comune. Pyviel dirà dove mancano.', 'Oublier les deux-points est une erreur très courante. Pyviel dira où ils manquent.']
      },
      {
        c: c`age = 12
if age >= 18:
    print("You can vote.")
else:
    print("You are too young to vote.")`,
        t: ['Otherwise: else', 'Altrimenti: else', 'Sinon : else'],
        x: [`else gives the other road: its lines run when the question was False. One of the two roads is always taken, never both.

else has no question of its own, but it ends with a colon too.`,
          `else dà l'altra strada: le sue righe girano quando la domanda era False. Una delle due strade viene sempre presa, mai entrambe.

else non ha una domanda sua, ma finisce anch'esso con i due punti.`,
          `else donne l'autre chemin : ses lignes tournent quand la question était False. Un des deux chemins est toujours pris, jamais les deux.

else n'a pas de question à lui, mais se termine aussi par deux-points.`],
        d: ['Make it say something different for a 12-year-old and for a 30-year-old.', 'Fagli dire qualcosa di diverso per un dodicenne e per un trentenne.', 'Fais-lui dire quelque chose de différent pour un enfant de 12 ans et pour un adulte de 30 ans.']
      },
      {
        c: c`score = 72
if score >= 90:
    print("Great")
elif score >= 70:
    print("Good")
elif score >= 50:
    print("Fine")
else:
    print("Try again")`,
        t: ['Many roads: elif', 'Tante strade: elif', 'Plusieurs chemins : elif'],
        x: [`elif means "else, if...". Python checks the questions from top to bottom and takes the first road whose question is True, then skips the rest.

So the order matters: put the most special question first.`,
          `elif vuol dire "altrimenti, se...". Python controlla le domande dall'alto in basso e prende la prima strada la cui domanda è True, poi salta il resto.

Quindi l'ordine conta: metti per prima la domanda più particolare.`,
          `elif veut dire « sinon, si... ». Python vérifie les questions de haut en bas et prend le premier chemin dont la question est True, puis saute le reste.

Donc l'ordre compte : mets d'abord la question la plus particulière.`],
        d: ['Try a score of 95, then of 40.', 'Prova un punteggio di 95, poi di 40.', 'Essaie un score de 95, puis de 40.'],
        w: ['If you swapped the first two questions, a score of 95 would be called "Good". Order matters.', 'Se invertissi le prime due domande, un punteggio di 95 sarebbe "Good". L\'ordine conta.', 'Si tu inversais les deux premières questions, un score de 95 serait « Good ». L\'ordre compte.']
      },
      {
        c: c`age = int(input("Your age? "))
has_ticket = input("Do you have a ticket? (yes/no) ") == "yes"
if age >= 12 and has_ticket:
    print("Come in!")
elif not has_ticket:
    print("You need a ticket.")
else:
    print("Too young for this film.")`,
        i: ['14', 'yes'],
        t: ['Combine questions', 'Combina le domande', 'Combine les questions'],
        x: [`The questions of the last lesson, and, or and not, fit right into an if. A True or False can also be kept in a box, like has_ticket.

Here the answer yes is compared with == and the result, True or False, is kept.`,
          `Le domande della lezione scorsa, and, or e not, stanno benissimo dentro un if. Un True o False si può anche tenere in una scatola, come has_ticket.

Qui la risposta yes viene confrontata con == e il risultato, True o False, viene tenuto.`,
          `Les questions de la leçon précédente, and, or et not, vont très bien dans un if. Un True ou False peut aussi être gardé dans une boîte, comme has_ticket.

Ici la réponse yes est comparée avec == et le résultat, True ou False, est gardé.`],
        d: ['Run it with age 9 and again without a ticket.', 'Eseguilo con età 9 e poi senza biglietto.', 'Lance-le avec l\'âge 9 puis sans ticket.']
      },
      {
        c: c`temperature = 25
raining = False
if temperature > 20:
    if raining:
        print("Warm, but take an umbrella.")
    else:
        print("A perfect day.")
else:
    print("Take a jacket.")`,
        t: ['A choice inside a choice', 'Una scelta dentro una scelta', 'Un choix dans un choix'],
        x: [`An if can sit inside another if. Each level is pushed in four more spaces.

Read it like a map: first the outside question, then, only on that road, the inside question.`,
          `Un if può stare dentro un altro if. Ogni livello è rientrato di altri quattro spazi.

Leggilo come una mappa: prima la domanda esterna, poi, solo su quella strada, la domanda interna.`,
          `Un if peut être dans un autre if. Chaque niveau est décalé de quatre espaces de plus.

Lis-le comme une carte : d'abord la question de l'extérieur, puis, seulement sur ce chemin, la question de l'intérieur.`],
        d: ['Change raining to True.', 'Cambia raining in True.', 'Change raining en True.']
      },
      {
        c: c`n = 7
kind = "even" if n % 2 == 0 else "odd"
print(n, "is", kind)`,
        t: ['A choice in one line', 'Una scelta in una riga', 'Un choix en une ligne'],
        x: [`When you only need to pick between two values, you can do it in one line: value_if_true if question else value_if_false.

It is short and it reads almost like English.`,
          `Quando devi solo scegliere tra due valori, puoi farlo in una riga: valore_se_vero if domanda else valore_se_falso.

È corto e si legge quasi come inglese.`,
          `Quand tu dois seulement choisir entre deux valeurs, tu peux le faire en une ligne : valeur_si_vrai if question else valeur_si_faux.

C'est court et ça se lit presque comme de l'anglais.`],
        d: ['Make it say "adult" or "child" for an age.', 'Fagli dire "adult" o "child" per un\'età.', 'Fais-lui dire « adult » ou « child » pour un âge.']
      }
    ]
  },

  // ------------------------------------------------------------------ 10
  {
    title: ['Again and again', 'Ancora e ancora', 'Encore et encore'],
    subtitle: ['The for loop', 'Il ciclo for', 'La boucle for'],
    steps: [
      {
        c: c`for i in range(5):
    print("Hello!", i)`,
        t: ['Repeat a few times', 'Ripeti qualche volta', 'Répète quelques fois'],
        x: [`A loop repeats lines for you. for i in range(5) runs the pushed-in lines 5 times, and i takes the values 0, 1, 2, 3, 4 one after the other.

Notice that it starts at 0 and stops before 5: range(5) has exactly 5 values.`,
          `Un ciclo ripete righe per te. for i in range(5) fa girare 5 volte le righe rientrate, e i prende i valori 0, 1, 2, 3, 4 uno dopo l'altro.

Nota che parte da 0 e si ferma prima del 5: range(5) ha esattamente 5 valori.`,
          `Une boucle répète des lignes pour toi. for i in range(5) fait tourner 5 fois les lignes décalées, et i prend les valeurs 0, 1, 2, 3, 4 l'une après l'autre.

Remarque que ça commence à 0 et s'arrête avant 5 : range(5) a exactement 5 valeurs.`],
        d: ['Change 5 to 10.', 'Cambia 5 in 10.', 'Change 5 en 10.'],
        w: ['The line with for ends with a colon, and the lines to repeat are pushed in.', 'La riga con for finisce con i due punti, e le righe da ripetere sono rientrate.', 'La ligne avec for se termine par deux-points, et les lignes à répéter sont décalées.']
      },
      {
        c: c`for n in range(1, 6):
    print(n)
print("---")
for n in range(0, 20, 5):
    print(n)
print("---")
for n in range(5, 0, -1):
    print(n)`,
        t: ['Start, stop and step', 'Inizio, fine e passo', 'Début, fin et pas'],
        x: [`range can take up to three numbers: range(start, stop, step). It goes from start, stops before stop, and jumps by step.

range(1, 6) is 1 to 5. range(0, 20, 5) is 0, 5, 10, 15. A negative step counts down.`,
          `range può prendere fino a tre numeri: range(inizio, fine, passo). Parte da inizio, si ferma prima di fine, e salta di passo.

range(1, 6) è da 1 a 5. range(0, 20, 5) è 0, 5, 10, 15. Un passo negativo conta all'indietro.`,
          `range peut prendre jusqu'à trois nombres : range(début, fin, pas). Il part de début, s'arrête avant fin, et saute de pas.

range(1, 6) va de 1 à 5. range(0, 20, 5) donne 0, 5, 10, 15. Un pas négatif compte à l'envers.`],
        d: ['Print the even numbers from 2 to 20.', 'Stampa i numeri pari da 2 a 20.', 'Affiche les nombres pairs de 2 à 20.']
      },
      {
        c: c`for n in range(1, 11):
    print(n, "x 7 =", n * 7)`,
        t: ['Count with a loop', 'Conta con un ciclo', 'Compte avec une boucle'],
        x: [`The loop variable is a normal box. Here n goes from 1 to 10 and each turn prints one line of the seven times table.

With only two lines you get ten lines of output. Change one number and the whole table changes.`,
          `La variabile del ciclo è una scatola normale. Qui n va da 1 a 10 e a ogni giro stampa una riga della tabellina del sette.

Con solo due righe ottieni dieci righe di risultato. Cambia un numero e cambia tutta la tabellina.`,
          `La variable de la boucle est une boîte normale. Ici n va de 1 à 10 et à chaque tour affiche une ligne de la table de sept.

Avec seulement deux lignes tu obtiens dix lignes de résultat. Change un nombre et toute la table change.`],
        d: ['Make it the times table of 9.', 'Fai la tabellina del 9.', 'Fais la table de 9.']
      },
      {
        c: c`total = 0
for n in range(1, 101):
    total += n
print("The sum of 1 to 100 is", total)`,
        t: ['Add things up', 'Sommare le cose', 'Additionner des choses'],
        x: [`A loop and a box make a counter or a total. total starts at 0, and each turn adds one more number.

The famous sum of 1 to 100 is found in a blink. Notice that print is not pushed in: it runs once, at the end.`,
          `Un ciclo e una scatola fanno un contatore o un totale. total parte da 0, e a ogni giro aggiunge un numero in più.

La famosa somma da 1 a 100 si trova in un lampo. Nota che print non è rientrato: gira una volta sola, alla fine.`,
          `Une boucle et une boîte font un compteur ou un total. total part de 0, et chaque tour ajoute un nombre de plus.

La célèbre somme de 1 à 100 se trouve en un éclair. Remarque que print n'est pas décalé : il tourne une seule fois, à la fin.`],
        d: ['Sum only the even numbers up to 100.', 'Somma solo i numeri pari fino a 100.', 'Additionne seulement les nombres pairs jusqu\'à 100.']
      },
      {
        c: c`for letter in "Python":
    print(letter)
for word in ["red", "green", "blue"]:
    print(word.upper())`,
        t: ['Walk through things', 'Scorrere le cose', 'Parcourir des choses'],
        x: [`A for loop can walk through any row of things: the letters of a text, the items of a list. The loop variable takes each one in turn.

This is the most Python way of looping: you do not count positions, you just say "for each thing in this".`,
          `Un ciclo for può scorrere qualunque fila di cose: le lettere di un testo, gli elementi di una lista. La variabile del ciclo prende ognuno a turno.

È il modo più tipico di Python di fare un ciclo: non conti le posizioni, dici solo "per ogni cosa in questo".`,
          `Une boucle for peut parcourir n'importe quelle rangée de choses : les lettres d'un texte, les éléments d'une liste. La variable de la boucle prend chacun à son tour.

C'est la façon la plus typique de Python de faire une boucle : tu ne comptes pas les positions, tu dis juste « pour chaque chose dans ceci ».`],
        d: ['Loop through your own name.', 'Scorri il tuo nome.', 'Parcours ton propre prénom.']
      },
      {
        c: c`for row in range(1, 5):
    print("*" * row)
print()
for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end=" ")
    print()`,
        t: ['A loop inside a loop', 'Un ciclo dentro un ciclo', 'Une boucle dans une boucle'],
        x: [`Loops can be nested. The inside loop runs completely for each turn of the outside loop. Each level is pushed in four more spaces.

Here the outside loop picks a row, and the inside loop fills it. print() with nothing inside makes an empty line, and end=" " keeps the next print on the same line.`,
          `I cicli si possono annidare. Il ciclo interno gira per intero a ogni giro del ciclo esterno. Ogni livello è rientrato di altri quattro spazi.

Qui il ciclo esterno sceglie una riga, e quello interno la riempie. print() senza niente dentro fa una riga vuota, ed end=" " tiene il print successivo sulla stessa riga.`,
          `Les boucles peuvent être imbriquées. La boucle intérieure tourne en entier à chaque tour de la boucle extérieure. Chaque niveau est décalé de quatre espaces de plus.

Ici la boucle extérieure choisit une ligne, et celle de l'intérieur la remplit. print() sans rien dedans fait une ligne vide, et end=" " garde le print suivant sur la même ligne.`],
        d: ['Draw a triangle of 6 rows.', 'Disegna un triangolo di 6 righe.', 'Dessine un triangle de 6 lignes.']
      }
    ]
  },

  // ------------------------------------------------------------------ 11
  {
    title: ['Keep going', 'Continua finché', 'Continue tant que'],
    subtitle: ['The while loop', 'Il ciclo while', 'La boucle while'],
    steps: [
      {
        c: c`n = 1
while n <= 5:
    print("n is", n)
    n += 1
print("Done")`,
        t: ['Keep going while it is true', 'Continua finché è vero', 'Continue tant que c\'est vrai'],
        x: [`while repeats the pushed-in lines for as long as the question is True. Before each turn Python checks the question again.

Inside, n += 1 changes n. Without it, n would never change and the loop would never end.`,
          `while ripete le righe rientrate finché la domanda è True. Prima di ogni giro Python ricontrolla la domanda.

Dentro, n += 1 cambia n. Senza, n non cambierebbe mai e il ciclo non finirebbe mai.`,
          `while répète les lignes décalées tant que la question est True. Avant chaque tour Python revérifie la question.

Dedans, n += 1 change n. Sans ça, n ne changerait jamais et la boucle ne finirait jamais.`],
        d: ['Change 5 to 10.', 'Cambia 5 in 10.', 'Change 5 en 10.'],
        w: ['Always change something inside a while loop, or it never ends. If that happens, the Stop button is there.', 'Cambia sempre qualcosa dentro un ciclo while, o non finisce mai. Se succede, c\'è il pulsante Stop.', 'Change toujours quelque chose dans une boucle while, sinon elle ne finit jamais. Si ça arrive, le bouton Stop est là.']
      },
      {
        c: c`import random
secret = random.randint(1, 10)
guess = 0
tries = 0
while guess != secret:
    guess = int(input("Guess the number from 1 to 10: "))
    tries += 1
print("You got it in", tries, "tries!")`,
        r: true,
        i: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        s: ['Guess the number from 1 to 10: 5\nGuess the number from 1 to 10: 5\n...\nYou got it in 3 tries!\n(different every time)', 'Guess the number from 1 to 10: 5\nGuess the number from 1 to 10: 5\n...\nYou got it in 3 tries!\n(diverso ogni volta)', 'Guess the number from 1 to 10: 5\nGuess the number from 1 to 10: 5\n...\nYou got it in 3 tries!\n(différent à chaque fois)'],
        t: ['A guessing game', 'Un gioco a indovinare', 'Un jeu de devinettes'],
        x: [`while is perfect when you do not know how many turns you need. Here the program thinks of a secret number and keeps asking until you find it.

random.randint(1, 10) gives a whole number from 1 to 10. You will meet the random tool box properly later; for now just enjoy the game.`,
          `while è perfetto quando non sai quanti giri ti servono. Qui il programma pensa a un numero segreto e continua a chiedere finché non lo trovi.

random.randint(1, 10) dà un numero intero da 1 a 10. Conoscerai bene la scatola di strumenti random più avanti; per ora goditi il gioco.`,
          `while est parfait quand tu ne sais pas combien de tours il te faut. Ici le programme pense à un nombre secret et continue de demander jusqu'à ce que tu le trouves.

random.randint(1, 10) donne un nombre entier de 1 à 10. Tu feras bien connaissance avec la boîte à outils random plus tard ; pour l'instant, profite du jeu.`],
        d: ['Play it a few times. Can you guess in fewer tries?', 'Giocaci qualche volta. Riesci a indovinare in meno tentativi?', 'Joue-y quelques fois. Arrives-tu à deviner en moins d\'essais ?']
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
        t: ['Leave early: break and continue', 'Uscire prima: break e continue', 'Sortir plus tôt : break et continue'],
        x: [`break leaves the loop right now. continue skips the rest of this turn and goes straight to the next one.

Both work in for loops and in while loops. In the first loop, 4 is never printed and the loop stops. In the second, only 3 is skipped.`,
          `break esce subito dal ciclo. continue salta il resto di questo giro e va dritto al successivo.

Funzionano sia nei cicli for sia nei cicli while. Nel primo ciclo, il 4 non viene mai stampato e il ciclo si ferma. Nel secondo, viene saltato solo il 3.`,
          `break sort de la boucle tout de suite. continue saute le reste de ce tour et passe directement au suivant.

Les deux marchent dans les boucles for et dans les boucles while. Dans la première boucle, 4 n'est jamais affiché et la boucle s'arrête. Dans la seconde, seul 3 est sauté.`],
        d: ['Skip the number 2 in the first loop too.', 'Salta anche il numero 2 nel primo ciclo.', 'Saute aussi le nombre 2 dans la première boucle.']
      },
      {
        c: c`while True:
    answer = input("Type quit to stop: ")
    if answer == "quit":
        break
    print("You typed:", answer)
print("Bye!")`,
        i: ['hello', 'python', 'quit'],
        t: ['A loop with no end, on purpose', 'Un ciclo senza fine, apposta', 'Une boucle sans fin, exprès'],
        x: [`while True is a loop that never ends by itself, because True is always true. You leave it with break, when something happens inside.

It is a very common pattern for menus and games: keep asking until the person wants to stop.`,
          `while True è un ciclo che non finisce mai da solo, perché True è sempre vero. Lo lasci con break, quando dentro succede qualcosa.

È uno schema molto comune per i menu e i giochi: continua a chiedere finché la persona vuole fermarsi.`,
          `while True est une boucle qui ne finit jamais toute seule, parce que True est toujours vrai. On la quitte avec break, quand quelque chose arrive dedans.

C'est un schéma très courant pour les menus et les jeux : continue de demander jusqu'à ce que la personne veuille arrêter.`],
        d: ['Make it also stop when the person types "exit".', 'Fallo fermare anche quando la persona scrive "exit".', 'Fais-le aussi s\'arrêter quand la personne écrit « exit ».']
      },
      {
        c: c`n = 27
steps = 0
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
print("Reached 1 after", steps, "steps")`,
        t: ['A famous number puzzle', 'Un famoso rompicapo di numeri', 'Un célèbre casse-tête de nombres'],
        x: [`The Collatz puzzle: take a number. If it is even, halve it; if it is odd, triple it and add 1. Repeat. Nobody has ever found a number that does not reach 1 in the end.

It puts together everything from this lesson: while, if, else and counters.`,
          `Il rompicapo di Collatz: prendi un numero. Se è pari, dimezzalo; se è dispari, triplicalo e aggiungi 1. Ripeti. Nessuno ha mai trovato un numero che non arrivi a 1 alla fine.

Mette insieme tutto di questa lezione: while, if, else e contatori.`,
          `Le casse-tête de Collatz : prends un nombre. S'il est pair, divise-le par deux ; s'il est impair, triple-le et ajoute 1. Recommence. Personne n'a jamais trouvé un nombre qui n'arrive pas à 1 à la fin.

Il rassemble tout de cette leçon : while, if, else et compteurs.`],
        d: ['Try the starting numbers 6 and 97.', 'Prova i numeri di partenza 6 e 97.', 'Essaie les nombres de départ 6 et 97.']
      }
    ]
  },

  // ------------------------------------------------------------------ 12
  {
    title: ['Lists', 'Le liste', 'Les listes'],
    subtitle: ['Many things in one place', 'Tante cose in un posto', 'Plein de choses au même endroit'],
    steps: [
      {
        c: c`pets = ["cat", "dog", "fox"]
print(pets)
print(pets[0])
print(pets[2])
print(pets[-1])
print(len(pets))`,
        t: ['A list of things', 'Una lista di cose', 'Une liste de choses'],
        x: [`Square brackets make a list. Items are separated by commas. The first item is number 0, the second is number 1, and so on. A negative number counts from the end: -1 is the last.

len(list) tells you how many items there are.`,
          `Le parentesi quadre fanno una lista. Gli elementi sono separati da virgole. Il primo elemento è il numero 0, il secondo è il numero 1, e così via. Un numero negativo conta dalla fine: -1 è l'ultimo.

len(lista) ti dice quanti elementi ci sono.`,
          `Les crochets font une liste. Les éléments sont séparés par des virgules. Le premier élément est le numéro 0, le deuxième est le numéro 1, et ainsi de suite. Un nombre négatif compte depuis la fin : -1 est le dernier.

len(liste) te dit combien d'éléments il y a.`],
        d: ['Print the second pet.', 'Stampa il secondo animale.', 'Affiche le deuxième animal.'],
        w: ['Asking for pets[3] in a list of three stops with an error: there is no position 3.', 'Chiedere pets[3] in una lista di tre si ferma con un errore: la posizione 3 non c\'è.', 'Demander pets[3] dans une liste de trois s\'arrête avec une erreur : la position 3 n\'existe pas.']
      },
      {
        c: c`pets = ["cat", "dog"]
pets.append("fox")
pets.insert(0, "owl")
print(pets)
pets[1] = "kitten"
print(pets)
print(pets + ["bat"])`,
        t: ['Add and change', 'Aggiungere e cambiare', 'Ajouter et changer'],
        x: [`append adds an item at the end. insert(position, item) puts it in a chosen place. Putting something in pets[1] replaces what was there.

Lists can change, that is why they are very useful. You can also glue two lists with +.`,
          `append aggiunge un elemento alla fine. insert(posizione, elemento) lo mette in un posto a scelta. Mettere qualcosa in pets[1] sostituisce quello che c'era.

Le liste possono cambiare, ed è per questo che sono molto utili. Puoi anche incollare due liste con +.`,
          `append ajoute un élément à la fin. insert(position, élément) le met à un endroit choisi. Mettre quelque chose dans pets[1] remplace ce qui y était.

Les listes peuvent changer, c'est pour ça qu'elles sont très utiles. Tu peux aussi coller deux listes avec +.`],
        d: ['Add a fourth animal of your choice.', 'Aggiungi un quarto animale a tua scelta.', 'Ajoute un quatrième animal de ton choix.']
      },
      {
        c: c`pets = ["cat", "dog", "fox", "owl"]
pets.remove("dog")
print(pets)
last = pets.pop()
print(last, pets)
del pets[0]
print(pets)
print("fox" in pets)`,
        t: ['Take things out', 'Togliere le cose', 'Retirer des choses'],
        x: [`remove(item) takes out the first item with that value. pop() takes out the last one and gives it back to you. del list[position] deletes by position. And in checks if something is inside.

Careful: remove stops with an error if the item is not there. Check with in first.`,
          `remove(elemento) toglie il primo elemento con quel valore. pop() toglie l'ultimo e te lo restituisce. del lista[posizione] cancella per posizione. E in controlla se qualcosa c'è dentro.

Attenzione: remove si ferma con un errore se l'elemento non c'è. Controlla prima con in.`,
          `remove(élément) retire le premier élément avec cette valeur. pop() retire le dernier et te le rend. del liste[position] supprime par position. Et in vérifie si quelque chose est dedans.

Attention : remove s'arrête avec une erreur si l'élément n'y est pas. Vérifie d'abord avec in.`],
        d: ['Take out the first pet with pop(0).', 'Togli il primo animale con pop(0).', 'Retire le premier animal avec pop(0).']
      },
      {
        c: c`scores = [70, 95, 82, 64]
total = 0
for s in scores:
    total += s
print("Total:", total)
print("Average:", total / len(scores))
print(sum(scores), min(scores), max(scores))`,
        t: ['Use all the items', 'Usare tutti gli elementi', 'Utiliser tous les éléments'],
        x: [`A for loop walks through all the items of a list. Here it adds them up, and then the average is the total divided by how many there are.

Python also has ready-made tools: sum, min and max work on a whole list.`,
          `Un ciclo for scorre tutti gli elementi di una lista. Qui li somma, e poi la media è il totale diviso quanti sono.

Python ha anche strumenti già pronti: sum, min e max funzionano su un'intera lista.`,
          `Une boucle for parcourt tous les éléments d'une liste. Ici elle les additionne, puis la moyenne est le total divisé par leur nombre.

Python a aussi des outils tout prêts : sum, min et max marchent sur une liste entière.`],
        d: ['Add a fifth score and see the average change.', 'Aggiungi un quinto voto e guarda come cambia la media.', 'Ajoute une cinquième note et regarde la moyenne changer.']
      },
      {
        c: c`names = ["Zoe", "Ada", "Max"]
names.sort()
print(names)
names.reverse()
print(names)
print(sorted([3, 1, 2]))
print(names.index("Ada"))
print(names.count("Max"))`,
        t: ['Order and find', 'Ordinare e trovare', 'Ordonner et trouver'],
        x: [`sort() puts the list in order, and reverse() turns it around. Both change the list itself. sorted(list) gives a new ordered list and leaves the old one alone.

index(item) tells the position, and count(item) tells how many times it appears.`,
          `sort() mette la lista in ordine, e reverse() la capovolge. Entrambi cambiano la lista stessa. sorted(lista) dà una nuova lista ordinata e lascia in pace la vecchia.

index(elemento) dice la posizione, e count(elemento) dice quante volte compare.`,
          `sort() met la liste en ordre, et reverse() la retourne. Les deux changent la liste elle-même. sorted(liste) donne une nouvelle liste ordonnée et laisse l'ancienne tranquille.

index(élément) dit la position, et count(élément) dit combien de fois il apparaît.`],
        d: ['Sort a list of five numbers from biggest to smallest.', 'Ordina una lista di cinque numeri dal più grande al più piccolo.', 'Trie une liste de cinq nombres du plus grand au plus petit.']
      }
    ]
  },

  // ------------------------------------------------------------------ 13
  {
    title: ['Reading mistakes', 'Leggere gli errori', 'Lire les erreurs'],
    subtitle: ['They happen. It is fine.', 'Capitano. Va bene così.', 'Ça arrive. Ce n\'est pas grave.'],
    steps: [
      {
        c: c`if 5 > 3
    print("yes")`,
        e: 'SyntaxError',
        t: ['Python cannot read the line', 'Python non riesce a leggere la riga', 'Python n\'arrive pas à lire la ligne'],
        x: [`A syntax error means the line is not written the way Python expects: a missing colon, a missing bracket, a missing quote. Python finds these before running anything, so nothing is shown.

Pyviel says which line and what is missing. The line number is where Python noticed it, so look at the line just before too.`,
          `Un errore di sintassi vuol dire che la riga non è scritta come Python si aspetta: due punti mancanti, una parentesi mancante, una virgoletta mancante. Python li trova prima di eseguire qualsiasi cosa, quindi non viene mostrato niente.

Pyviel dice quale riga e cosa manca. Il numero di riga è dove Python se n'è accorto, quindi guarda anche la riga appena prima.`,
          `Une erreur de syntaxe veut dire que la ligne n'est pas écrite comme Python l'attend : un deux-points manquant, une parenthèse manquante, un guillemet manquant. Python les trouve avant d'exécuter quoi que ce soit, donc rien n'est affiché.

Pyviel dit quelle ligne et ce qui manque. Le numéro de ligne est l'endroit où Python l'a remarqué, regarde donc aussi la ligne juste avant.`],
        d: ['Add the missing colon after 3 and run it again.', 'Aggiungi i due punti mancanti dopo il 3 e riesegui.', 'Ajoute les deux-points manquants après le 3 et relance.']
      },
      {
        c: c`if 5 > 3:
print("yes")`,
        e: 'IndentationError',
        t: ['Pushed in too little', 'Rientrato troppo poco', 'Pas assez décalé'],
        x: [`After a line that ends with a colon, the next line must be pushed to the right by four spaces. Python uses this space to know what belongs together.

All the lines of one block must start at exactly the same place.`,
          `Dopo una riga che finisce con i due punti, la riga successiva deve essere spostata a destra di quattro spazi. Python usa questo spazio per capire cosa sta insieme.

Tutte le righe di un blocco devono cominciare esattamente nello stesso punto.`,
          `Après une ligne qui se termine par deux-points, la ligne suivante doit être décalée de quatre espaces vers la droite. Python utilise cet espace pour savoir ce qui va ensemble.

Toutes les lignes d'un bloc doivent commencer exactement au même endroit.`],
        d: ['Push the print line four spaces to the right.', 'Sposta la riga print di quattro spazi a destra.', 'Décale la ligne print de quatre espaces vers la droite.'],
        w: ['The Tab key puts four spaces in the Pyviel editor. Do not mix tabs and spaces.', 'Il tasto Tab mette quattro spazi nell\'editor di Pyviel. Non mescolare tabulazioni e spazi.', 'La touche Tab met quatre espaces dans l\'éditeur de Pyviel. Ne mélange pas tabulations et espaces.']
      },
      {
        c: c`items = ["a", "b", "c"]
print(items[0])
print(items[3])`,
        e: 'IndexError',
        t: ['A place that does not exist', 'Un posto che non esiste', 'Une place qui n\'existe pas'],
        x: [`Some mistakes only appear while the program runs. Here the list has 3 items, at positions 0, 1 and 2. Asking for position 3 stops the program, but the lines before it have already done their work.

Read the sentence: it names the problem. Then press View full error and find the line "File ..., line 3": it is the same line number.`,
          `Alcuni errori compaiono solo mentre il programma gira. Qui la lista ha 3 elementi, nelle posizioni 0, 1 e 2. Chiedere la posizione 3 ferma il programma, ma le righe prima hanno già fatto il loro lavoro.

Leggi la frase: nomina il problema. Poi premi Mostra l'errore completo e trova la riga "File ..., line 3": è lo stesso numero di riga.`,
          `Certaines erreurs n'apparaissent que pendant que le programme tourne. Ici la liste a 3 éléments, aux positions 0, 1 et 2. Demander la position 3 arrête le programme, mais les lignes d'avant ont déjà fait leur travail.

Lis la phrase : elle nomme le problème. Puis appuie sur Voir l'erreur complète et trouve la ligne « File ..., line 3 » : c'est le même numéro de ligne.`],
        d: ['Change 3 to 2 to fix it.', 'Cambia 3 in 2 per correggerlo.', 'Change 3 en 2 pour corriger.']
      },
      {
        c: c`def divide(a, b):
    return a / b

print(divide(10, 2))
print(divide(5, 0))`,
        e: 'ZeroDivisionError',
        t: ['Errors inside functions', 'Errori dentro le funzioni', 'Erreurs dans les fonctions'],
        x: [`When the mistake happens inside a function, the full error lists the calls one by one, like a trail: first where it was called, then the line inside the function that really failed. The last line says what happened.

Always read the full error from the bottom: that is the cause. The lines above show how Python got there.`,
          `Quando l'errore avviene dentro una funzione, l'errore completo elenca le chiamate una per una, come una pista: prima dove è stata chiamata, poi la riga dentro la funzione che ha davvero fallito. L'ultima riga dice cosa è successo.

Leggi sempre l'errore completo dal basso: quella è la causa. Le righe sopra mostrano come Python ci è arrivato.`,
          `Quand l'erreur arrive dans une fonction, l'erreur complète liste les appels un par un, comme une piste : d'abord où elle a été appelée, puis la ligne dans la fonction qui a vraiment échoué. La dernière ligne dit ce qui s'est passé.

Lis toujours l'erreur complète à partir du bas : c'est la cause. Les lignes au-dessus montrent comment Python y est arrivé.`],
        d: ['Press View full error and find the two lines of the trail.', 'Premi Mostra l\'errore completo e trova le due righe della pista.', 'Appuie sur Voir l\'erreur complète et trouve les deux lignes de la piste.']
      },
      {
        c: c`print("Start")
number = int("abc")
print("Never reached")`,
        e: 'ValueError',
        t: ['A checklist for any mistake', 'Una lista di controllo per ogni errore', 'Une liste de contrôle pour toute erreur'],
        x: [`When something breaks, do this: 1) read the sentence from Pyviel, 2) look at the line it points to, and the one before, 3) press View full error and read the last line, 4) check spelling, brackets, quotes and colons, 5) add a print to see what the values really are.

Nobody writes a program without mistakes. Programmers are just fast at finding them.`,
          `Quando qualcosa si rompe, fai così: 1) leggi la frase di Pyviel, 2) guarda la riga che indica, e quella prima, 3) premi Mostra l'errore completo e leggi l'ultima riga, 4) controlla ortografia, parentesi, virgolette e due punti, 5) aggiungi un print per vedere cosa valgono davvero i valori.

Nessuno scrive un programma senza errori. Chi programma è solo veloce a trovarli.`,
          `Quand quelque chose casse, fais ceci : 1) lis la phrase de Pyviel, 2) regarde la ligne indiquée, et celle d'avant, 3) appuie sur Voir l'erreur complète et lis la dernière ligne, 4) vérifie l'orthographe, les parenthèses, les guillemets et les deux-points, 5) ajoute un print pour voir ce que valent vraiment les valeurs.

Personne n'écrit un programme sans erreurs. Les gens qui programment sont juste rapides pour les trouver.`],
        d: ['Change "abc" to "42" and run it again.', 'Cambia "abc" in "42" e riesegui.', 'Change "abc" en "42" et relance.']
      }
    ]
  }
];
