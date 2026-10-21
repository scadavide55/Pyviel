// Stage 1 · The first programs. See tools/build-course.js for the format.
// Rules of this course: one new idea per step; everything new is listed in n and explained in the glossary;
// every step ends with a small task that is checked; the words inside the quotes of every example are
// translated: c, ex.start, ex.sol and the checks are [en, it, fr] when they contain words.
const c = String.raw;
const G1 = ['Stage 1 · The very first steps', 'Fase 1 · I primissimi passi', 'Étape 1 · Les tout premiers pas'];

module.exports = [
  {
    group: G1,
    title: ['Meet Pyviel', 'Conosci Pyviel', 'Découvre Pyviel'],
    subtitle: ['Your very first program', 'Il tuo primissimo programma', 'Ton tout premier programme'],
    steps: [
      {
        c: [c`print("Hello!")`, c`print("Ciao!")`, c`print("Bonjour!")`],
        n: ['print', 'string'],
        t: ['Make the computer talk', 'Fai parlare il computer', 'Fais parler l\'ordinateur'],
        x: [`A program is a list of instructions. The computer reads them from the top to the bottom, one by one.

This program has one instruction. It makes the computer say "Hello!". Press Try it to see it work.`,
          `Un programma è una lista di istruzioni. Il computer le legge dall'alto verso il basso, una alla volta.

Questo programma ha una sola istruzione. Fa dire al computer "Ciao!". Premi Provalo per vederla in azione.`,
          `Un programme est une liste d'instructions. L'ordinateur les lit de haut en bas, une par une.

Ce programme n'a qu'une instruction. Elle fait dire "Bonjour!" à l'ordinateur. Appuie sur Essaie pour la voir marcher.`],
        ex: {
          plain: true,
          t: ['Change the words between the quotes, so that the computer says: Good morning', 'Cambia le parole tra le virgolette, così il computer dice: Buongiorno', 'Change les mots entre les guillemets, pour que l\'ordinateur dise : Bonne journée'],
          h: ['Change only the words inside the quotes. Keep the round brackets and both quotes.', 'Cambia solo le parole dentro le virgolette. Tieni le parentesi tonde e tutte e due le virgolette.', 'Change seulement les mots à l\'intérieur des guillemets. Garde les parenthèses rondes et les deux guillemets.'],
          start: [c`print("Hello!")`, c`print("Ciao!")`, c`print("Bonjour!")`],
          sol: [c`print("Good morning")`, c`print("Buongiorno")`, c`print("Bonne journée")`],
          out: ['Good morning', 'Buongiorno', 'Bonne journée']
        },
        w: ['Spell print with small letters, and keep the brackets and the quotes. If you write prnt, Pyviel tells you which line is wrong.', 'Scrivi print con le lettere piccole e tieni le parentesi e le virgolette. Se scrivi prnt, Pyviel ti dice quale riga è sbagliata.', 'Écris print en petites lettres et garde les parenthèses et les guillemets. Si tu écris prnt, Pyviel te dit quelle ligne est fausse.']
      },
      {
        c: [c`print("Hello!")
print("My name is Pyviel.")
print("Nice to meet you.")`, c`print("Ciao!")
print("Mi chiamo Pyviel.")
print("Piacere di conoscerti.")`, c`print("Bonjour!")
print("Je m'appelle Pyviel.")
print("Ravi de te rencontrer.")`],
        t: ['Say more than one thing', 'Di\' più di una cosa', 'Dis plus d\'une chose'],
        x: [`Each print line says one line on the screen. The computer does them in order, like you read a book.

To say three things, write three print lines.`,
          `Ogni riga print dice una riga sullo schermo. Il computer le fa in ordine, come leggi un libro.

Per dire tre cose, scrivi tre righe print.`,
          `Chaque ligne print dit une ligne à l'écran. L'ordinateur les fait dans l'ordre, comme tu lis un livre.

Pour dire trois choses, écris trois lignes print.`],
        ex: {
          plain: true,
          t: ['Add one more line, at the end, that says your own name.', 'Aggiungi una riga in più, alla fine, che dica il tuo nome.', 'Ajoute une ligne de plus, à la fin, qui dit ton prénom.'],
          h: ['Copy a print line and change the words. Every print goes on its own line.', 'Copia una riga print e cambia le parole. Ogni print va su una riga a parte.', 'Copie une ligne print et change les mots. Chaque print va sur sa propre ligne.'],
          start: [c`print("Hello!")
print("My name is Pyviel.")
print("Nice to meet you.")`, c`print("Ciao!")
print("Mi chiamo Pyviel.")
print("Piacere di conoscerti.")`, c`print("Bonjour!")
print("Je m'appelle Pyviel.")
print("Ravi de te rencontrer.")`],
          sol: [c`print("Hello!")
print("My name is Pyviel.")
print("Nice to meet you.")
print("I am Ada.")`, c`print("Ciao!")
print("Mi chiamo Pyviel.")
print("Piacere di conoscerti.")
print("Sono Ada.")`, c`print("Bonjour!")
print("Je m'appelle Pyviel.")
print("Ravi de te rencontrer.")
print("Je suis Ada.")`],
          m: '^(?:.*\\n){3}.+$'
        },
        w: ['Every opening bracket and every opening quote needs its closing one.', 'Ogni parentesi aperta e ogni virgoletta aperta ha bisogno della sua chiusura.', 'Chaque parenthèse ouverte et chaque guillemet ouvert a besoin de sa fermeture.']
      },
      {
        c: [c`print("The answer is")
print(7)
print(2 + 3)`, c`print("La risposta è")
print(7)
print(2 + 3)`, c`print("La réponse est")
print(7)
print(2 + 3)`],
        n: ['number', '+'],
        t: ['Numbers need no quotes', 'I numeri non vogliono virgolette', 'Les nombres n\'ont pas besoin de guillemets'],
        x: [`Words are text, and text lives between quotes. A number is written plain, with no quotes at all.

Python can even do the sum for you: print(2 + 3) shows 5, not "2 + 3".`,
          `Le parole sono testo, e il testo sta tra virgolette. Un numero si scrive semplice, senza nessuna virgoletta.

Python può anche fare il conto per te: print(2 + 3) mostra 5, non "2 + 3".`,
          `Les mots sont du texte, et le texte vit entre guillemets. Un nombre s'écrit simplement, sans aucun guillemet.

Python peut même faire le calcul pour toi : print(2 + 3) affiche 5, pas "2 + 3".`],
        ex: {
          uses: ['+'],
          t: ['Make the computer show the result of 20 + 22.', 'Fai mostrare al computer il risultato di 20 + 22.', 'Fais afficher à l\'ordinateur le résultat de 20 + 22.'],
          h: ['Write print, brackets, and the sum inside. No quotes.', 'Scrivi print, le parentesi e il conto dentro. Niente virgolette.', 'Écris print, les parenthèses et le calcul dedans. Pas de guillemets.'],
          sol: 'print(20 + 22)', out: '42'
        },
        w: ['"2 + 3" with quotes is only text, and Python shows it exactly as it is.', '"2 + 3" con le virgolette è solo testo, e Python lo mostra esattamente così.', '"2 + 3" avec des guillemets n\'est que du texte, et Python l\'affiche tel quel.']
      },
      {
        c: [c`# This line is only a note
print("The note above is invisible.")  # a note can go here too`, c`# Questa riga è solo una nota
print("La nota qui sopra è invisibile.")  # una nota può stare anche qui`, c`# Cette ligne est seulement une note
print("La note au-dessus est invisible.")  # une note peut aussi aller ici`],
        n: ['comment'],
        t: ['Notes for people', 'Note per le persone', 'Des notes pour les humains'],
        x: [`Sometimes you want to write something for people, not for the computer. A line that starts with # is a note, and Python skips it.

Notes help you remember, later, why you wrote a line.`,
          `A volte vuoi scrivere qualcosa per le persone, non per il computer. Una riga che inizia con # è una nota, e Python la salta.

Le note ti aiutano a ricordare, più tardi, perché hai scritto una riga.`,
          `Parfois tu veux écrire quelque chose pour les humains, pas pour l'ordinateur. Une ligne qui commence par # est une note, et Python la saute.

Les notes t'aident à te rappeler, plus tard, pourquoi tu as écrit une ligne.`],
        ex: {
          t: ['Write your own note, starting with #, above the print line. The program must still say Hi.', 'Scrivi una tua nota, che inizia con #, sopra la riga print. Il programma deve dire ancora Salve.', 'Écris ta propre note, qui commence par #, au-dessus de la ligne print. Le programme doit toujours dire Salut.'],
          h: ['A # and then any words, on a line of its own, before the print.', 'Un # e poi parole a piacere, su una riga a parte, prima di print.', 'Un # puis des mots au choix, sur une ligne à part, avant print.'],
          start: [c`print("Hi")`, c`print("Salve")`, c`print("Salut")`],
          sol: [c`# I say hi
print("Hi")`, c`# Dico salve
print("Salve")`, c`# Je dis salut
print("Salut")`],
          out: ['Hi', 'Salve', 'Salut'], c: '#'
        }
      },
      {
        c: [c`print("Before")
prnt("Hello")
print("After")`, c`print("Prima")
prnt("Ciao")
print("Dopo")`, c`print("Avant")
prnt("Bonjour")
print("Après")`],
        e: 'NameError',
        t: ['When something breaks', 'Quando qualcosa si rompe', 'Quand quelque chose casse'],
        x: [`Everybody makes mistakes, all the time. Here prnt is a typo: Python does not know that word.

Pyviel tells you in one sentence what happened and on which line, and often how to fix it. The button View full error shows the whole message that Python wrote.`,
          `Tutti fanno errori, in continuazione. Qui prnt è un errore di battitura: Python non conosce quella parola.

Pyviel ti dice in una frase cos'è successo e in quale riga, e spesso come sistemarlo. Il pulsante View full error mostra tutto il messaggio che Python ha scritto.`,
          `Tout le monde fait des erreurs, tout le temps. Ici prnt est une faute de frappe : Python ne connaît pas ce mot.

Pyviel te dit en une phrase ce qui s'est passé et à quelle ligne, et souvent comment le réparer. Le bouton View full error montre tout le message que Python a écrit.`],
        ex: {
          plain: true,
          t: ['Fix the typo, then run the program again. All three lines must appear.', 'Correggi l\'errore di battitura e riesegui il programma. Devono comparire tutte e tre le righe.', 'Corrige la faute de frappe, puis relance le programme. Les trois lignes doivent apparaître.'],
          h: ['The word on line 2 should be print.', 'La parola alla riga 2 deve essere print.', 'Le mot de la ligne 2 doit être print.'],
          start: [c`print("Before")
prnt("Hello")
print("After")`, c`print("Prima")
prnt("Ciao")
print("Dopo")`, c`print("Avant")
prnt("Bonjour")
print("Après")`],
          sol: [c`print("Before")
print("Hello")
print("After")`, c`print("Prima")
print("Ciao")
print("Dopo")`, c`print("Avant")
print("Bonjour")
print("Après")`],
          exact: true
        },
        w: ['Python stops at the first mistake. The lines after it do not run until you fix it.', 'Python si ferma al primo errore. Le righe dopo non girano finché non lo correggi.', 'Python s\'arrête à la première erreur. Les lignes d\'après ne tournent pas tant que tu ne l\'as pas corrigée.']
      },
      {
        c: [c`# A small card about me
print("Hi, I am Pyviel.")
print("I can count:")
print(40 + 2)`, c`# Un piccolo biglietto su di me
print("Ciao, sono Pyviel.")
print("So contare:")
print(40 + 2)`, c`# Une petite carte sur moi
print("Salut, je suis Pyviel.")
print("Je sais compter :")
print(40 + 2)`],
        t: ['Challenge: a small card', 'Sfida: un piccolo biglietto', 'Défi : une petite carte'],
        x: [`Time to put the whole lesson together: a note, a few lines of text, and a sum that Python works out.

Read the program, guess what it shows, then try it. After that, your turn: you write one from an empty page.`,
          `È ora di mettere insieme tutta la lezione: una nota, qualche riga di testo e un conto che Python fa da solo.

Leggi il programma, indovina cosa mostra, poi provalo. Dopo tocca a te: ne scrivi uno partendo da una pagina vuota.`,
          `C'est le moment de rassembler toute la leçon : une note, quelques lignes de texte et un calcul que Python fait tout seul.

Lis le programme, devine ce qu'il affiche, puis essaie-le. Ensuite c'est à toi : tu en écris un en partant d'une page vide.`],
        ex: {
          t: ['From an empty page, write a program with a note on the first line, then three lines on the screen: your name, the result of 12 + 30 (let Python do it), and Bye!', 'Partendo da una pagina vuota, scrivi un programma con una nota sulla prima riga e poi tre righe sullo schermo: il tuo nome, il risultato di 12 + 30 (fallo fare a Python) e Ciao ciao!', 'En partant d\'une page vide, écris un programme avec une note sur la première ligne, puis trois lignes à l\'écran : ton prénom, le résultat de 12 + 30 (laisse Python le faire) et Au revoir !'],
          h: ['A note starts with #. Text goes between quotes; the sum goes inside print without quotes.', 'Una nota inizia con #. Il testo va tra virgolette; il conto va dentro print senza virgolette.', 'Une note commence par #. Le texte va entre guillemets ; le calcul va dans print sans guillemets.'],
          start: '',
          sol: [c`# My first card
print("Ada")
print(12 + 30)
print("Bye!")`, c`# Il mio primo biglietto
print("Ada")
print(12 + 30)
print("Ciao ciao!")`, c`# Ma première carte
print("Ada")
print(12 + 30)
print("Au revoir !")`],
          m: ['^.+\\n42\\nBye!$', '^.+\\n42\\nCiao ciao!$', '^.+\\n42\\nAu revoir !$'], c: ['^#[^\\n]*\\n', '^#[^\\n]*\\n', '^#[^\\n]*\\n']
        }
      }
    ]
  },
  {
    title: ['Names and boxes', 'Nomi e scatole', 'Des noms et des boîtes'],
    subtitle: ['Remember things for later', 'Ricorda le cose per dopo', 'Se souvenir des choses pour plus tard'],
    steps: [
      {
        c: c`name = "Ada"
print(name)
print(name)`,
        n: ['='],
        t: ['A box with a name', 'Una scatola con un nome', 'Une boîte avec un nom'],
        x: [`Imagine a box with a label on it. You put something inside, and later you ask for it by reading the label.

name = "Ada" puts the text Ada in a box called name. After that, every time you write name, Python opens the box and uses what is inside.`,
          `Immagina una scatola con un'etichetta. Ci metti dentro qualcosa e dopo lo chiedi leggendo l'etichetta.

name = "Ada" mette il testo Ada in una scatola che si chiama name. Dopo, ogni volta che scrivi name, Python apre la scatola e usa quello che c'è dentro.`,
          `Imagine une boîte avec une étiquette. Tu mets quelque chose dedans, et plus tard tu le demandes en lisant l'étiquette.

name = "Ada" met le texte Ada dans une boîte qui s'appelle name. Ensuite, chaque fois que tu écris name, Python ouvre la boîte et utilise ce qu'il y a dedans.`],
        ex: {
          uses: ['='],
          t: ['Put the word Moon in the box, so the program shows Moon two times.', 'Metti la parola Luna nella scatola, così il programma mostra Luna due volte.', 'Mets le mot Lune dans la boîte, pour que le programme affiche Lune deux fois.'],
          h: ['Change only the word between the quotes on the first line.', 'Cambia solo la parola tra le virgolette sulla prima riga.', 'Change seulement le mot entre les guillemets sur la première ligne.'],
          start: 'name = "Ada"\nprint(name)\nprint(name)',
          sol: ['name = "Moon"\nprint(name)\nprint(name)', 'name = "Luna"\nprint(name)\nprint(name)', 'name = "Lune"\nprint(name)\nprint(name)'],
          exact: true, c: ['Moon', 'Luna', 'Lune']
        },
        w: ['The = sign here does not ask a question. It means "put this value in this name".', 'Il segno = qui non fa una domanda. Vuol dire "metti questo valore in questo nome".', 'Le signe = ici ne pose pas de question. Il veut dire "mets cette valeur dans ce nom".']
      },
      {
        c: c`age = 7
print(age)
age = 8
print(age)
age = age + 1
print(age)`,
        t: ['Change what is inside', 'Cambia quello che c\'è dentro', 'Change ce qu\'il y a dedans'],
        x: [`Putting a new value in a box that already has one throws the old value away.

age = age + 1 looks strange, but it works. Python first works out the right side (the old age plus one), then puts the answer back in the box.`,
          `Mettere un valore nuovo in una scatola che ne ha già uno butta via quello vecchio.

age = age + 1 sembra strano, ma funziona. Python prima calcola il lato destro (la vecchia age più uno), poi rimette il risultato nella scatola.`,
          `Mettre une nouvelle valeur dans une boîte qui en a déjà une jette l'ancienne.

age = age + 1 a l'air étrange, mais ça marche. Python calcule d'abord le côté droit (l'ancien age plus un), puis remet le résultat dans la boîte.`],
        ex: {
          uses: ['=', '+'],
          t: ['The age starts at 10. Add 5 to it with age = age + 5, then show it. It must show 15.', 'L\'età parte da 10. Aggiungi 5 con age = age + 5 e poi mostrala. Deve mostrare 15.', 'L\'âge commence à 10. Ajoute-lui 5 avec age = age + 5, puis affiche-le. Il doit afficher 15.'],
          h: ['The order matters: the line that adds 5 must come after the box is filled and before it is shown.', 'Conta l\'ordine: la riga che aggiunge 5 deve venire dopo che la scatola è riempita e prima che venga mostrata.', 'L\'ordre compte : la ligne qui ajoute 5 doit venir après que la boîte est remplie et avant qu\'elle soit affichée.'],
          start: 'age = 10\nprint(age)', sol: 'age = 10\nage = age + 5\nprint(age)', out: '15'
        }
      },
      {
        c: c`my_age = 12
player_name = "Ada"
score2 = 100
print(player_name)
print(my_age)
print(score2)`,
        t: ['Good names', 'Nomi buoni', 'De bons noms'],
        x: [`You choose the name of a box. It can have letters, digits and the underscore _ , but it cannot start with a digit and it cannot have spaces.

Capital letters count: Age and age are two different boxes. Python programmers write names in small letters, with underscores: player_name. Choose names that say what is inside.`,
          `Il nome di una scatola lo scegli tu. Può avere lettere, cifre e il trattino basso _ , ma non può iniziare con una cifra e non può avere spazi.

Le maiuscole contano: Age e age sono due scatole diverse. Chi programma in Python scrive i nomi con le minuscole e i trattini bassi: player_name. Scegli nomi che dicono cosa c'è dentro.`,
          `Tu choisis le nom d'une boîte. Il peut avoir des lettres, des chiffres et le tiret bas _ , mais il ne peut pas commencer par un chiffre ni avoir d'espaces.

Les majuscules comptent : Age et age sont deux boîtes différentes. Les programmeurs Python écrivent les noms en minuscules, avec des tirets bas : player_name. Choisis des noms qui disent ce qu'il y a dedans.`],
        ex: {
          t: ['Make a box called favourite_colour that holds the text blue, and show it.', 'Fai una scatola che si chiama favourite_colour con dentro il testo blu e mostrala.', 'Fais une boîte qui s\'appelle favourite_colour et qui contient le texte bleu, et affiche-la.'],
          h: ['Two lines: the first puts the text in the box with =, the second shows the box. The name has no quotes around it, the text does.', 'Due righe: la prima mette il testo nella scatola con =, la seconda mostra la scatola. Il nome non ha virgolette, il testo sì.', 'Deux lignes : la première met le texte dans la boîte avec =, la seconde affiche la boîte. Le nom n\'a pas de guillemets, le texte oui.'],
          sol: ['favourite_colour = "blue"\nprint(favourite_colour)', 'favourite_colour = "blu"\nprint(favourite_colour)', 'favourite_colour = "bleu"\nprint(favourite_colour)'],
          out: ['blue', 'blu', 'bleu'], c: 'favourite_colour'
        },
        w: ['Words that Python already uses, like print, are better not used as names.', 'Le parole che Python usa già, come print, è meglio non usarle come nomi.', 'Les mots que Python utilise déjà, comme print, il vaut mieux ne pas les utiliser comme noms.']
      },
      {
        c: [c`name = "Ada"
age = 12
print(name, "is", age, "years old")
print("Hello", name)`, c`name = "Ada"
age = 12
print(name, "ha", age, "anni")
print("Ciao", name)`, c`name = "Ada"
age = 12
print(name, "a", age, "ans")
print("Bonjour", name)`],
        n: ['many-args'],
        t: ['Show several things at once', 'Mostra più cose insieme', 'Affiche plusieurs choses à la fois'],
        x: [`print can show many things in one line. Put commas between them, and Python adds a space between each.

You can mix text, boxes and numbers in the same line.`,
          `print può mostrare molte cose in una riga. Metti le virgole tra l'una e l'altra e Python aggiunge uno spazio in mezzo.

Puoi mescolare testo, scatole e numeri nella stessa riga.`,
          `print peut afficher plusieurs choses sur une ligne. Mets des virgules entre elles et Python ajoute une espace entre chaque.

Tu peux mélanger du texte, des boîtes et des nombres dans la même ligne.`],
        ex: {
          uses: ['many-args'],
          t: ['Use print with commas to show this line: Ada is 12 years old. Use the boxes name and age.', 'Usa print con le virgole per mostrare questa riga: Ada ha 12 anni. Usa le scatole name e age.', 'Utilise print avec des virgules pour afficher cette ligne : Ada a 12 ans. Utilise les boîtes name et age.'],
          h: ['print(name, "is", age, ...) and the last piece is the text "years old".', 'print(name, "ha", age, ...) e l\'ultimo pezzo è il testo "anni".', 'print(name, "a", age, ...) et le dernier morceau est le texte "ans".'],
          start: 'name = "Ada"\nage = 12',
          sol: ['name = "Ada"\nage = 12\nprint(name, "is", age, "years old")', 'name = "Ada"\nage = 12\nprint(name, "ha", age, "anni")', 'name = "Ada"\nage = 12\nprint(name, "a", age, "ans")'],
          out: ['Ada is 12 years old', 'Ada ha 12 anni', 'Ada a 12 ans']
        }
      },
      {
        c: [c`print("a", "b", "c", sep="-")
print("Loading", end="...")
print("done")`, c`print("a", "b", "c", sep="-")
print("Caricamento", end="...")
print("fatto")`, c`print("a", "b", "c", sep="-")
print("Chargement", end="...")
print("terminé")`],
        n: ['arg:sep', 'arg:end'],
        t: ['Choose what goes between', 'Scegli cosa mettere in mezzo', 'Choisis ce qu\'on met entre'],
        x: [`Normally print puts a space between the things and a new line at the end. You can change both.

sep= says what goes between the things. end= says what goes at the end.`,
          `Di solito print mette uno spazio tra le cose e una riga nuova alla fine. Puoi cambiare tutte e due.

sep= dice cosa mettere tra le cose. end= dice cosa mettere alla fine.`,
          `D'habitude print met une espace entre les choses et un retour à la ligne à la fin. Tu peux changer les deux.

sep= dit ce qu'on met entre les choses. end= dit ce qu'on met à la fin.`],
        ex: {
          uses: ['kw:sep'],
          t: ['Show red, green and blue in one line, with a + sign between them: red+green+blue', 'Mostra rosso, verde e blu in una riga, con un segno + in mezzo: rosso+verde+blu', 'Affiche rouge, vert et bleu sur une ligne, avec un signe + entre eux : rouge+vert+bleu'],
          h: ['Give print the three words with commas, then sep="+" at the end.', 'Dai a print le tre parole con le virgole, poi sep="+" alla fine.', 'Donne à print les trois mots avec des virgules, puis sep="+" à la fin.'],
          sol: ['print("red", "green", "blue", sep="+")', 'print("rosso", "verde", "blu", sep="+")', 'print("rouge", "vert", "bleu", sep="+")'],
          out: ['red+green+blue', 'rosso+verde+blu', 'rouge+vert+bleu']
        },
        w: ['sep and end go after the things to show, and the text after the = needs quotes.', 'sep e end vanno dopo le cose da mostrare, e il testo dopo il = vuole le virgolette.', 'sep et end vont après les choses à afficher, et le texte après le = veut des guillemets.']
      },
      {
        c: [c`name = "Ada"
age = 12
age = age + 1
print(name, "will be", age)
print(name, "will be", age, sep="...")`, c`name = "Ada"
age = 12
age = age + 1
print(name, "avrà", age, "anni")
print(name, "avrà", age, "anni", sep="...")`, c`name = "Ada"
age = 12
age = age + 1
print(name, "aura", age, "ans")
print(name, "aura", age, "ans", sep="...")`],
        t: ['Challenge: boxes that work together', 'Sfida: scatole che lavorano insieme', 'Défi : des boîtes qui travaillent ensemble'],
        x: [`Everything from this lesson in one program: two boxes, one box that changes, a print with commas, and a print with sep.

Notice that age is changed before it is shown, so both lines show the new age.`,
          `Tutto quello di questa lezione in un programma: due scatole, una scatola che cambia, un print con le virgole e un print con sep.

Nota che age cambia prima di essere mostrata, quindi tutte e due le righe mostrano l'età nuova.`,
          `Tout ce qu'il y a dans cette leçon en un programme : deux boîtes, une boîte qui change, un print avec des virgules et un print avec sep.

Remarque que age change avant d'être affiché, donc les deux lignes montrent le nouvel âge.`],
        ex: {
          t: ['From an empty page: make a box pet with the text Rex and a box legs with the number 4. Show Rex has 4 legs using the boxes and commas. Then show the same words joined by dashes: Rex-has-4-legs', 'Partendo da una pagina vuota: fai una scatola pet con il testo Rex e una scatola legs con il numero 4. Mostra Rex ha 4 zampe usando le scatole e le virgole. Poi mostra le stesse parole unite da trattini: Rex-ha-4-zampe', 'En partant d\'une page vide : fais une boîte pet avec le texte Rex et une boîte legs avec le nombre 4. Affiche Rex a 4 pattes en utilisant les boîtes et des virgules. Puis affiche les mêmes mots reliés par des tirets : Rex-a-4-pattes'],
          h: ['Two boxes, then two print lines with the same four things. The second print ends with sep= and the dash between quotes.', 'Due scatole, poi due righe print con le stesse quattro cose. Il secondo print finisce con sep= e il trattino tra virgolette.', 'Deux boîtes, puis deux lignes print avec les mêmes quatre choses. Le second print se termine par sep= et le tiret entre guillemets.'],
          start: '',
          sol: ['pet = "Rex"\nlegs = 4\nprint(pet, "has", legs, "legs")\nprint(pet, "has", legs, "legs", sep="-")', 'pet = "Rex"\nlegs = 4\nprint(pet, "ha", legs, "zampe")\nprint(pet, "ha", legs, "zampe", sep="-")', 'pet = "Rex"\nlegs = 4\nprint(pet, "a", legs, "pattes")\nprint(pet, "a", legs, "pattes", sep="-")'],
          out: ['Rex has 4 legs\nRex-has-4-legs', 'Rex ha 4 zampe\nRex-ha-4-zampe', 'Rex a 4 pattes\nRex-a-4-pattes'], c: 'sep\\s*='
        }
      }
    ]
  },
  {
    title: ['Text', 'Il testo', 'Le texte'],
    subtitle: ['Words between quotes', 'Parole tra virgolette', 'Des mots entre guillemets'],
    steps: [
      {
        c: [c`print("Double quotes")
print('Single quotes')`, c`print("Virgolette doppie")
print('Virgolette singole')`, c`print("Guillemets doubles")
print('Guillemets simples')`],
        t: ['Two kinds of quotes', 'Due tipi di virgolette', 'Deux sortes de guillemets'],
        x: [`Text can be written with double quotes " or with single quotes '. Both mean exactly the same.

The only rule: the quote that closes must be the same kind as the quote that opens.`,
          `Il testo si può scrivere con le virgolette doppie " o con quelle singole '. Significano esattamente la stessa cosa.

L'unica regola: la virgoletta che chiude deve essere dello stesso tipo di quella che apre.`,
          `Le texte peut s'écrire avec des guillemets doubles " ou avec des guillemets simples '. Les deux veulent dire exactement la même chose.

La seule règle : le guillemet qui ferme doit être du même genre que celui qui ouvre.`],
        ex: {
          t: ['Show the word hello, written with single quotes.', 'Mostra la parola ciao, scritta con le virgolette singole.', 'Affiche le mot salut, écrit avec des guillemets simples.'],
          h: ['Like the double quotes, but use the key \' before and after the word.', 'Come con le virgolette doppie, ma usa il tasto \' prima e dopo la parola.', 'Comme avec les guillemets doubles, mais utilise la touche \' avant et après le mot.'],
          sol: ["print('hello')", "print('ciao')", "print('salut')"],
          out: ['hello', 'ciao', 'salut'], c: ["print\\('hello'\\)", "print\\('ciao'\\)", "print\\('salut'\\)"]
        },
        w: ['"hello\' mixes two kinds and Python cannot read it.', '"ciao\' mescola due tipi e Python non riesce a leggerlo.', '"salut\' mélange deux sortes et Python ne peut pas le lire.']
      },
      {
        c: [c`print("It's a nice day")
print('She said "hello" to me')`, c`print("L'albero è alto")
print('Ha detto "ciao" a tutti')`, c`print("C'est une belle journée")
print('Il a dit "salut" à tout le monde')`],
        t: ['A quote inside a text', 'Una virgoletta dentro un testo', 'Un guillemet dans un texte'],
        x: [`What if the text itself has a quote inside? Use the other kind around it.

"It's a nice day" has a single quote inside, so the quotes around it are double.`,
          `E se il testo ha dentro una virgoletta? Usa l'altro tipo per racchiuderlo.

"L'albero è alto" ha dentro una virgoletta singola (l'apostrofo), quindi quelle intorno sono doppie.`,
          `Et si le texte a lui-même un guillemet dedans ? Utilise l'autre sorte tout autour.

"C'est une belle journée" a un guillemet simple dedans (l'apostrophe), donc ceux autour sont doubles.`],
        ex: {
          plain: true,
          t: ['Show this text, with its double quotes: He said "wow"', 'Mostra questo testo, con le sue virgolette doppie: Ha detto "wow"', 'Affiche ce texte, avec ses guillemets doubles : Il a dit "wow"'],
          h: ['Put single quotes around the whole text, and double quotes inside it.', 'Metti le virgolette singole attorno a tutto il testo e quelle doppie dentro.', 'Mets des guillemets simples autour de tout le texte, et des doubles à l\'intérieur.'],
          sol: ['print(\'He said "wow"\')', 'print(\'Ha detto "wow"\')', 'print(\'Il a dit "wow"\')'],
          out: ['He said "wow"', 'Ha detto "wow"', 'Il a dit "wow"']
        }
      },
      {
        c: [c`first = "Py"
second = "viel"
print(first + second)
print("Hello, " + "Ada")`, c`first = "Py"
second = "viel"
print(first + second)
print("Ciao, " + "Ada")`, c`first = "Py"
second = "viel"
print(first + second)
print("Bonjour, " + "Ada")`],
        n: ['+text'],
        t: ['Join texts', 'Unisci i testi', 'Colle des textes'],
        x: [`The plus sign + also works on text: it glues two texts together, with nothing in the middle.

It does not add a space for you. If you want one, put it inside the text, like "Hello, ".`,
          `Il segno più + funziona anche con il testo: incolla due testi insieme, senza niente in mezzo.

Non aggiunge uno spazio al posto tuo. Se ne vuoi uno, mettilo dentro il testo, come in "Ciao, ".`,
          `Le signe plus + marche aussi avec le texte : il colle deux textes ensemble, sans rien au milieu.

Il n'ajoute pas d'espace à ta place. Si tu en veux une, mets-la dans le texte, comme dans "Bonjour, ".`],
        ex: {
          t: ['Join the texts "Py" and "thon" so the program shows Python.', 'Unisci i testi "Py" e "thon" così il programma mostra Python.', 'Colle les textes "Py" et "thon" pour que le programme affiche Python.'],
          h: ['Inside the brackets of print, write the first text, a + sign, and the second text.', 'Dentro le parentesi di print scrivi il primo testo, un segno + e il secondo testo.', 'Dans les parenthèses de print, écris le premier texte, un signe + et le deuxième texte.'],
          sol: 'print("Py" + "thon")', out: 'Python', c: '\\+'
        },
        w: ['Joining a text and a number with + is a mistake. You will learn the reason, and the fix, soon.', 'Unire un testo e un numero con + è un errore. Presto imparerai il motivo e come rimediare.', 'Coller un texte et un nombre avec + est une erreur. Tu en apprendras bientôt la raison et le remède.']
      },
      {
        c: c`print("Ha" * 3)
print("-" * 20)
print("ab" * 2 + "c")`,
        n: ['*'],
        t: ['Repeat a text', 'Ripeti un testo', 'Répète un texte'],
        x: [`The star * repeats a text, as many times as the number says. "Ha" * 3 makes HaHaHa.

It is handy for drawing lines: "-" * 20 makes twenty dashes.`,
          `La stella * ripete un testo, tante volte quante dice il numero. "Ha" * 3 fa HaHaHa.

È comoda per disegnare righe: "-" * 20 fa venti trattini.`,
          `L'étoile * répète un texte, autant de fois que le nombre le dit. "Ha" * 3 donne HaHaHa.

C'est pratique pour dessiner des lignes : "-" * 20 donne vingt tirets.`],
        ex: {
          uses: ['*'],
          t: ['Show a row of 10 stars: **********', 'Mostra una fila di 10 stelle: **********', 'Affiche une rangée de 10 étoiles : **********'],
          h: ['The star repeats a text: first the text in quotes, then the star, then how many times.', 'La stella ripete un testo: prima il testo tra virgolette, poi la stella, poi quante volte.', 'L\'étoile répète un texte : d\'abord le texte entre guillemets, puis l\'étoile, puis combien de fois.'],
          sol: 'print("*" * 10)', out: '**********', c: '\\*'
        }
      },
      {
        c: [c`word = "Python"
print(len(word))
print(len("Hi there"))
print(len(""))`, c`word = "Python"
print(len(word))
print(len("Ciao a tutti"))
print(len(""))`, c`word = "Python"
print(len(word))
print(len("Salut tout le monde"))
print(len(""))`],
        n: ['len'],
        t: ['Count the letters', 'Conta le lettere', 'Compte les lettres'],
        x: [`len counts how many letters a text has. Spaces count too. An empty text "" has 0.

Put the text, or a box that holds it, inside the brackets.`,
          `len conta quante lettere ha un testo. Anche gli spazi contano. Un testo vuoto "" ne ha 0.

Metti tra le parentesi il testo, o una scatola che lo contiene.`,
          `len compte combien de lettres a un texte. Les espaces comptent aussi. Un texte vide "" en a 0.

Mets entre les parenthèses le texte, ou une boîte qui le contient.`],
        ex: {
          t: ['Show how many letters the word banana has.', 'Mostra quante lettere ha la parola banana.', 'Affiche combien de lettres a le mot banane.'],
          h: ['len(...) counts the letters of the text you put in its brackets. Then print the result.', 'len(...) conta le lettere del testo che metti tra le sue parentesi. Poi mostra il risultato con print.', 'len(...) compte les lettres du texte que tu mets dans ses parenthèses. Puis affiche le résultat avec print.'],
          sol: ['print(len("banana"))', 'print(len("banana"))', 'print(len("banane"))'], out: '6', c: 'len'
        }
      },
      {
        c: [c`print("Good morning')`, c`print("Buongiorno')`, c`print("Bonjour')`],
        e: 'SyntaxError',
        t: ['Find the mistake: quotes that do not match', 'Trova l\'errore: virgolette che non vanno d\'accordo', 'Trouve l\'erreur : des guillemets qui ne vont pas ensemble'],
        x: [`This program does not even start. Python reads the text from the first quote and looks for the same kind of quote to close it, but the closing one is different.

Press Try it and read the message: it says the text never ends.`,
          `Questo programma non parte nemmeno. Python legge il testo dalla prima virgoletta e cerca una virgoletta dello stesso tipo per chiuderlo, ma quella che chiude è diversa.

Premi Provalo e leggi il messaggio: dice che il testo non finisce mai.`,
          `Ce programme ne démarre même pas. Python lit le texte depuis le premier guillemet et cherche le même genre de guillemet pour le fermer, mais celui qui ferme est différent.

Appuie sur Essaie et lis le message : il dit que le texte ne se termine jamais.`],
        ex: {
          t: ['Fix the line so that the program shows Good morning.', 'Correggi la riga così il programma mostra Buongiorno.', 'Corrige la ligne pour que le programme affiche Bonjour.'],
          h: ['Look at the two quotes around the text: they must be the same kind.', 'Guarda le due virgolette intorno al testo: devono essere dello stesso tipo.', 'Regarde les deux guillemets autour du texte : ils doivent être du même genre.'],
          start: [c`print("Good morning')`, c`print("Buongiorno')`, c`print("Bonjour')`],
          sol: [c`print("Good morning")`, c`print("Buongiorno")`, c`print("Bonjour")`],
          out: ['Good morning', 'Buongiorno', 'Bonjour'], plain: true
        }
      },
      {
        c: [c`greeting = "Hello" + " " + "world"
print(greeting)
print("-" * len(greeting))
print("It's", len(greeting), "letters long")`, c`greeting = "Ciao" + " " + "mondo"
print(greeting)
print("-" * len(greeting))
print("Sono", len(greeting), "caratteri")`, c`greeting = "Bonjour" + " " + "le monde"
print(greeting)
print("-" * len(greeting))
print("C'est long de", len(greeting), "caractères")`],
        t: ['Challenge: play with text', 'Sfida: gioca con il testo', 'Défi : joue avec le texte'],
        x: [`Join, repeat and count, all in one program. The line of dashes is exactly as long as the greeting, because len counts the letters and * repeats the dash that many times.

A space counts as a letter too.`,
          `Unire, ripetere e contare, tutto in un programma. La riga di trattini è lunga esattamente come il saluto, perché len conta i caratteri e * ripete il trattino quel numero di volte.

Anche uno spazio conta come carattere.`,
          `Joindre, répéter et compter, tout dans un programme. La ligne de tirets est exactement aussi longue que la salutation, parce que len compte les caractères et * répète le tiret autant de fois.

Une espace compte aussi comme un caractère.`],
        ex: {
          t: ['From an empty page: put ha in a box called laugh. Show it 3 times with an ! at the end (hahaha!), then show how many letters that has (7).', 'Partendo da una pagina vuota: metti ha in una scatola che si chiama laugh. Mostrala 3 volte con un ! alla fine (hahaha!), poi mostra quanti caratteri ha (7).', 'En partant d\'une page vide : mets ha dans une boîte qui s\'appelle laugh. Affiche-la 3 fois avec un ! à la fin (hahaha!), puis affiche combien de caractères ça fait (7).'],
          h: ['laugh * 3 repeats it, and + "!" joins the mark. len(...) can count the whole thing, brackets and all.', 'laugh * 3 la ripete, e + "!" attacca il punto esclamativo. len(...) può contare tutto, con le parentesi.', 'laugh * 3 la répète, et + "!" colle le point d\'exclamation. len(...) peut tout compter, avec les parenthèses.'],
          start: '',
          sol: 'laugh = "ha"\nprint(laugh * 3 + "!")\nprint(len(laugh * 3 + "!"))',
          out: 'hahaha!\n7', c: 'laugh\\s*\\*'
        }
      }
    ]
  },
  {
    title: ['Special text', 'Testo speciale', 'Texte spécial'],
    subtitle: ['Many lines, letters and pieces', 'Molte righe, lettere e pezzi', 'Plusieurs lignes, des lettres et des morceaux'],
    steps: [
      {
        c: [c`print("Line one\nLine two")
print("Name:\tAda")`, c`print("Riga uno\nRiga due")
print("Nome:\tAda")`, c`print("Ligne un\nLigne deux")
print("Nom :\tAda")`],
        n: ['escape'],
        t: ['New lines and tabs', 'Righe nuove e tabulazioni', 'Retours à la ligne et tabulations'],
        x: [`Some things cannot be typed inside a text, like "start a new line". For these, Python has special codes that start with a backslash \\.

\\n means "new line" and \\t means "a wide space". They work inside any text.`,
          `Alcune cose non si possono scrivere dentro un testo, come "vai a capo". Per queste Python ha dei codici speciali che iniziano con una barra rovesciata \\.

\\n vuol dire "riga nuova" e \\t vuol dire "uno spazio largo". Funzionano dentro qualsiasi testo.`,
          `Certaines choses ne se tapent pas dans un texte, comme "va à la ligne". Pour cela, Python a des codes spéciaux qui commencent par une barre oblique inversée \\.

\\n veut dire "nouvelle ligne" et \\t veut dire "une grande espace". Ils marchent dans n'importe quel texte.`],
        ex: {
          plain: true,
          t: ['With only one print, show Hello and World on two lines.', 'Con un solo print, mostra Ciao e Mondo su due righe.', 'Avec un seul print, affiche Bonjour et Monde sur deux lignes.'],
          h: ['Put \\n between the two words, inside the same quotes.', 'Metti \\n tra le due parole, dentro le stesse virgolette.', 'Mets \\n entre les deux mots, dans les mêmes guillemets.'],
          sol: ['print("Hello\\nWorld")', 'print("Ciao\\nMondo")', 'print("Bonjour\\nMonde")'],
          out: ['Hello\nWorld', 'Ciao\nMondo', 'Bonjour\nMonde'], c: '\\\\n'
        },
        w: ['The backslash leans to the left: \\ . A slash / does nothing special.', 'La barra rovesciata pende a sinistra: \\ . Una barra / non fa niente di speciale.', 'La barre oblique inversée penche à gauche : \\ . Une barre / ne fait rien de spécial.']
      },
      {
        c: [c`print("She said \"hi\"")
print("A backslash: \\")`, c`print("Ha detto \"ciao\"")
print("Una barra rovesciata: \\")`, c`print("Il a dit \"salut\"")
print("Une barre oblique inversée : \\")`],
        t: ['A quote and a backslash inside a text', 'Una virgoletta e una barra dentro un testo', 'Un guillemet et une barre dans un texte'],
        x: [`The backslash can also protect a quote: \\" puts a quote in the text without ending the text.

And to show a real backslash, write two of them: \\\\.`,
          `La barra rovesciata può anche proteggere una virgoletta: \\" mette una virgoletta nel testo senza chiudere il testo.

E per mostrare una vera barra rovesciata ne scrivi due: \\\\.`,
          `La barre oblique inversée peut aussi protéger un guillemet : \\" met un guillemet dans le texte sans fermer le texte.

Et pour afficher une vraie barre oblique inversée, écris-en deux : \\\\.`],
        ex: {
          plain: true,
          t: ['Show: She said "ok" . Use double quotes around the text, and \\" for the quotes inside.', 'Mostra: Ha detto "ok" . Usa le virgolette doppie attorno al testo e \\" per quelle dentro.', 'Affiche : Il a dit "ok" . Utilise des guillemets doubles autour du texte, et \\" pour ceux de l\'intérieur.'],
          h: ['Write a backslash just before each quote that is inside the text.', 'Scrivi una barra rovesciata subito prima di ogni virgoletta che sta dentro il testo.', 'Écris une barre oblique inversée juste avant chaque guillemet qui est dans le texte.'],
          sol: ['print("She said \\"ok\\"")', 'print("Ha detto \\"ok\\"")', 'print("Il a dit \\"ok\\"")'],
          out: ['She said "ok"', 'Ha detto "ok"', 'Il a dit "ok"'], c: '\\\\"'
        }
      },
      {
        c: [c`poem = """Roses are red,
Violets are blue,
Python is fun,
And so are you."""
print(poem)`, c`poem = """Le rose sono rosse,
Le viole sono blu,
Python è bello,
E anche tu."""
print(poem)`, c`poem = """Les roses sont rouges,
Les violettes sont bleues,
Python est génial,
Et toi aussi."""
print(poem)`],
        n: ['triple-quote'],
        t: ['A long text on many lines', 'Un testo lungo su più righe', 'Un long texte sur plusieurs lignes'],
        x: [`Three quotes in a row start a text that can go over many lines. Three quotes again end it.

Every new line you type inside is kept in the text.`,
          `Tre virgolette di fila iniziano un testo che può andare su molte righe. Altre tre lo chiudono.

Ogni riga nuova che scrivi dentro viene tenuta nel testo.`,
          `Trois guillemets de suite commencent un texte qui peut s'étendre sur plusieurs lignes. Trois autres le terminent.

Chaque nouvelle ligne que tu écris dedans est gardée dans le texte.`],
        ex: {
          t: ['Write a poem of your own, with three lines, between triple quotes, and show it.', 'Scrivi una poesia tua, di tre righe, tra tre virgolette, e mostrala.', 'Écris un poème à toi, de trois lignes, entre trois guillemets, et affiche-le.'],
          h: ['poem = """ then your three lines, then """ and print(poem).', 'poem = """ poi le tue tre righe, poi """ e print(poem).', 'poem = """ puis tes trois lignes, puis """ et print(poem).'],
          sol: ['poem = """Roses are red,\nViolets are blue,\nI like Python"""\nprint(poem)', 'poem = """Le rose sono rosse,\nLe viole sono blu,\nMi piace Python"""\nprint(poem)', 'poem = """Les roses sont rouges,\nLes violettes sont bleues,\nJ\'aime Python"""\nprint(poem)'],
          m: '^.+\\n.+\\n.+$', c: '"""'
        }
      },
      {
        c: c`word = "Python"
print(word[0])
print(word[2])
print(word[5])`,
        n: ['index'],
        t: ['The letter at a place', 'La lettera a un posto', 'La lettre à une place'],
        x: [`A text is a row of letters. Each one has a place, and the places are counted from 0.

So "Python" has P at place 0, y at place 1, t at place 2, and so on. Square brackets after the text pick the letter: word[0] is P.`,
          `Un testo è una fila di lettere. Ognuna ha un posto, e i posti si contano da 0.

Quindi in "Python" la P è al posto 0, la y al posto 1, la t al posto 2, e così via. Le parentesi quadre dopo il testo scelgono la lettera: word[0] è P.`,
          `Un texte est une rangée de lettres. Chacune a une place, et les places se comptent à partir de 0.

Donc dans "Python" le P est à la place 0, le y à la place 1, le t à la place 2, et ainsi de suite. Les crochets après le texte choisissent la lettre : word[0] est P.`],
        ex: {
          t: ['Show the letter n, the last letter of "Python", using its place.', 'Mostra la lettera n, l\'ultima di "Python", usando il suo posto.', 'Affiche la lettre n, la dernière de "Python", en utilisant sa place.'],
          h: ['P y t h o n are places 0, 1, 2, 3, 4 and 5.', 'P y t h o n sono i posti 0, 1, 2, 3, 4 e 5.', 'P y t h o n sont les places 0, 1, 2, 3, 4 et 5.'],
          start: 'word = "Python"', sol: 'word = "Python"\nprint(word[5])', out: 'n', c: '\\[5\\]'
        },
        w: ['Places start at 0, not at 1. The third letter is word[2].', 'I posti partono da 0, non da 1. La terza lettera è word[2].', 'Les places commencent à 0, pas à 1. La troisième lettre est word[2].']
      },
      {
        c: c`word = "Python"
print(word[-1])
print(word[-2])`,
        n: ['negative-index'],
        t: ['Count from the end', 'Conta dalla fine', 'Compte depuis la fin'],
        x: [`How do you take the last letter if you do not know how long the text is? Count from the end, with a minus: word[-1] is the last letter and word[-2] the one before it.`,
          `Come prendi l'ultima lettera se non sai quanto è lungo il testo? Conta dalla fine, con un meno: word[-1] è l'ultima lettera e word[-2] quella prima.`,
          `Comment prendre la dernière lettre si tu ne sais pas quelle est la longueur du texte ? Compte depuis la fin, avec un moins : word[-1] est la dernière lettre et word[-2] celle d'avant.`],
        ex: {
          t: ['Show the last letter of the word "banana", using a minus place.', 'Mostra l\'ultima lettera della parola "banana", usando un posto con il meno.', 'Affiche la dernière lettre du mot "banane", en utilisant une place avec un moins.'],
          h: ['Places with a minus count from the end: -1 is the last letter, -2 the one before it.', 'I posti con il meno contano dalla fine: -1 è l\'ultima lettera, -2 quella prima.', 'Les places avec un moins comptent depuis la fin : -1 est la dernière lettre, -2 celle d\'avant.'],
          start: ['word = "banana"', 'word = "banana"', 'word = "banane"'],
          sol: ['word = "banana"\nprint(word[-1])', 'word = "banana"\nprint(word[-1])', 'word = "banane"\nprint(word[-1])'],
          out: ['a', 'a', 'e'], c: '\\[-1\\]'
        }
      },
      {
        c: c`word = "Python"
print(word[0:2])
print(word[2:5])
print(word[:3])
print(word[3:])`,
        n: ['slice'],
        t: ['A piece of a text', 'Un pezzo di testo', 'Un morceau de texte'],
        x: [`A colon between two places takes a piece: word[0:2] goes from place 0 up to, but not including, place 2. So it gives Py.

If you leave the first place out, it starts at the beginning. If you leave the last place out, it goes to the end.`,
          `I due punti tra due posti prendono un pezzo: word[0:2] va dal posto 0 fino al posto 2, escluso. Quindi dà Py.

Se lasci fuori il primo posto, parte dall'inizio. Se lasci fuori l'ultimo posto, arriva fino alla fine.`,
          `Deux points entre deux places prennent un morceau : word[0:2] va de la place 0 jusqu'à la place 2, non incluse. Donc il donne Py.

Si tu laisses de côté la première place, ça commence au début. Si tu laisses de côté la dernière place, ça va jusqu'à la fin.`],
        ex: {
          t: ['Take the piece tho out of "Python" and show it.', 'Prendi il pezzo tho da "Python" e mostralo.', 'Prends le morceau tho dans "Python" et affiche-le.'],
          h: ['t is at place 2 and the o after the h is at place 4: use [2:5].', 't è al posto 2 e la o dopo la h è al posto 4: usa [2:5].', 't est à la place 2 et le o après le h est à la place 4 : utilise [2:5].'],
          start: 'word = "Python"', sol: 'word = "Python"\nprint(word[2:5])', out: 'tho', c: '\\[\\s*2\\s*:\\s*5\\s*\\]'
        },
        w: ['The last place is not included: word[0:2] gives two letters, not three.', 'L\'ultimo posto non è incluso: word[0:2] dà due lettere, non tre.', 'La dernière place n\'est pas incluse : word[0:2] donne deux lettres, pas trois.']
      },
      {
        c: [c`word = "banana"
print(word[0], word[-1])
print(word[2:5])
print("first\tlast\nend")`, c`word = "banana"
print(word[0], word[-1])
print(word[2:5])
print("prima\tultima\nfine")`, c`word = "banane"
print(word[0], word[-1])
print(word[2:5])
print("première\tdernière\nfin")`],
        t: ['Challenge: take a word apart', 'Sfida: smonta una parola', 'Défi : démonte un mot'],
        x: [`Places, places from the end, and pieces, in one program. Remember: the first place is 0, the last is -1, and a piece [2:5] takes places 2, 3 and 4, not 5.

The last line mixes a tab and a new line inside one text.`,
          `Posti, posti dalla fine e pezzi, in un programma. Ricorda: il primo posto è 0, l'ultimo è -1, e un pezzo [2:5] prende i posti 2, 3 e 4, non il 5.

L'ultima riga mescola un tab e una riga nuova dentro un solo testo.`,
          `Des places, des places depuis la fin et des morceaux, dans un programme. Rappelle-toi : la première place est 0, la dernière est -1, et un morceau [2:5] prend les places 2, 3 et 4, pas la 5.

La dernière ligne mélange une tabulation et un retour à la ligne dans un seul texte.`],
        ex: {
          t: ['From an empty page: put Python in a box called word. Show its first three letters (Pyt), then its last two letters (on), each on its own line.', 'Partendo da una pagina vuota: metti Python in una scatola che si chiama word. Mostra le sue prime tre lettere (Pyt), poi le sue ultime due lettere (on), ognuna su una riga.', 'En partant d\'une page vide : mets Python dans une boîte qui s\'appelle word. Affiche ses trois premières lettres (Pyt), puis ses deux dernières lettres (on), chacune sur sa ligne.'],
          h: ['Count the places: P is 0, y is 1, t is 2, h is 3, o is 4, n is 5. A piece [a:b] stops just before b.', 'Conta i posti: P è 0, y è 1, t è 2, h è 3, o è 4, n è 5. Un pezzo [a:b] si ferma appena prima di b.', 'Compte les places : P est 0, y est 1, t est 2, h est 3, o est 4, n est 5. Un morceau [a:b] s\'arrête juste avant b.'],
          start: '',
          sol: 'word = "Python"\nprint(word[0:3])\nprint(word[4:6])',
          out: 'Pyt\non', c: 'word\\['
        }
      }
    ]
  }
];
