/* Lesson texts for Pyviel, in English, Italiano and Français.
   The code of every step lives in tutorials.js and never changes with the language.
   A step is [title, explanation, what you will see, your turn, watch out].
   Paragraphs inside the explanation are separated by a blank line. */
window.PyvielLessons = {
  en: {
    ui: {
      lesson: 'Lesson', step: 'step', of: 'of', steps: 'steps',
      lineByLine: 'Line by line', see: 'What you will see', turn: 'Your turn', slip: 'Watch out',
      typeIt: 'Type it yourself', putIt: 'Put it in the editor', typeNote: 'Empty page ready. Type the lines you see in the lesson, then press Run.',
      listen: 'Listen', stopReading: 'Stop reading',
      startLessons: 'New here? Start with lesson 1', continueLesson: 'Continue: lesson {n}', lessonsDone: '{done} of {total} lessons done',
      allDoneTitle: 'You know the whole language!', allDoneText: 'Now open the examples, change them, and make a program of your own.', seeExamples: 'See the examples'
    },
    explain: {
      comment: 'A note for people. Python skips it.',
      print: 'Shows this on the screen.',
      askNow: 'Asks the question and keeps what the person types in the name on the left.',
      askNumber: 'Asks the question, then turns the typed text into a whole number.',
      importIt: 'Brings in a tool box that Python has ready.',
      ifBlock: 'Checks something. The lines pushed in below run only if it is true.',
      elifBlock: 'If the first check was false, checks this one.',
      elseBlock: 'If none of the checks was true, the lines pushed in below run.',
      forLoop: 'Repeats the lines pushed in below, once for each thing.',
      whileLoop: 'Repeats the lines pushed in below while the check is true.',
      fnDef: 'Starts your own function, called {name}. The lines pushed in below are what it does.',
      returnIt: 'Sends this value back to the place that used the function.',
      breakIt: 'Leaves the loop right now.',
      continueIt: 'Skips to the next turn of the loop.',
      passIt: 'Does nothing, on purpose. A block needs at least one line.',
      assign: 'Puts a value in the name {name}. If it already holds something, the old value is gone.'
    },
    lessons: [
      ['Meet Pyviel', 'Your very first program', [
        [`Make the computer talk`, `A program is a list of instructions. The computer reads them from the top to the bottom.

print is a word that Python already knows. It makes the computer say something. What you want it to say goes inside the round brackets, between quotes.`, `Hello!`, `Click the green Run button. Look at the Output box.`, `Spell print correctly, with brackets and quotes. If you write prnt, Pyviel tells you which line is wrong.`],
        [`Say more than one thing`, `Each print line says one line. The computer does them in order, just like you read a book.

The quotes tell Python that the words are text, not instructions.`, `Hello!
My name is Pyviel.
Nice to meet you.`, `Add one more line that says your own name.`, `Every opening bracket and every opening quote needs its closing one.`],
        [`When something breaks`, `Everybody makes mistakes, all the time. Here pirnt is a typo: Python does not know that name.

Pyviel tells you in one sentence what happened and on which line. The button View full error shows the whole message that Python wrote, for when you want to learn to read it.`, `Before
(then a problem on line 2: the name pirnt does not exist, and Python asks: did you mean print?)`, `Fix the typo, then run it again. All three lines will appear.`, `Python stops at the first mistake. The lines after it do not run until you fix it.`]
      ]]
    ]
  },
  it: {
    ui: {
      lesson: 'Lezione', step: 'passo', of: 'di', steps: 'passi',
      lineByLine: 'Riga per riga', see: 'Cosa vedrai', turn: 'Tocca a te', slip: 'Attenzione',
      typeIt: 'Scrivilo tu', putIt: 'Mettilo nell\'editor', typeNote: 'Pagina vuota pronta. Scrivi le righe che vedi nella lezione, poi premi Esegui.',
      listen: 'Ascolta', stopReading: 'Ferma la lettura',
      startLessons: 'Sei nuovo? Inizia dalla lezione 1', continueLesson: 'Continua: lezione {n}', lessonsDone: '{done} lezioni su {total} fatte',
      allDoneTitle: 'Conosci tutto il linguaggio!', allDoneText: 'Ora apri gli esempi, cambiali e crea un programma tutto tuo.', seeExamples: 'Vedi gli esempi'
    },
    explain: {
      comment: 'Una nota per le persone. Python la salta.',
      print: 'Mostra questo sullo schermo.',
      askNow: 'Fa la domanda e tiene ciò che la persona scrive nel nome a sinistra.',
      askNumber: 'Fa la domanda, poi trasforma il testo scritto in un numero intero.',
      importIt: 'Porta una scatola di strumenti che Python ha già pronta.',
      ifBlock: 'Controlla qualcosa. Le righe rientrate sotto girano solo se è vero.',
      elifBlock: 'Se il primo controllo era falso, controlla questo.',
      elseBlock: 'Se nessun controllo era vero, girano le righe rientrate sotto.',
      forLoop: 'Ripete le righe rientrate sotto, una volta per ogni cosa.',
      whileLoop: 'Ripete le righe rientrate sotto finché il controllo è vero.',
      fnDef: 'Inizia una tua funzione, chiamata {name}. Le righe rientrate sotto sono ciò che fa.',
      returnIt: 'Rimanda questo valore al posto che ha usato la funzione.',
      breakIt: 'Esce subito dal ciclo.',
      continueIt: 'Salta al giro successivo del ciclo.',
      passIt: 'Non fa niente, apposta. Un blocco ha bisogno di almeno una riga.',
      assign: 'Mette un valore nel nome {name}. Se conteneva già qualcosa, il vecchio valore sparisce.'
    },
    lessons: [
      ['Conosci Pyviel', 'Il tuo primo programma', [
        [`Fai parlare il computer`, `Un programma è un elenco di istruzioni. Il computer le legge dall'alto verso il basso.

print è una parola che Python conosce già. Fa dire qualcosa al computer. Quello che vuoi fargli dire va dentro le parentesi tonde, tra virgolette.`, `Ciao!`, `Premi il pulsante verde Esegui. Guarda la casella Risultato.`, `Scrivi bene print, con le parentesi e le virgolette. Se scrivi prnt, Pyviel ti dice quale riga è sbagliata.`],
        [`Di' più di una cosa`, `Ogni riga print dice una riga. Il computer le fa in ordine, proprio come leggi un libro.

Le virgolette dicono a Python che le parole sono testo, non istruzioni.`, `Ciao!
Mi chiamo Pyviel.
Piacere di conoscerti.`, `Aggiungi un'altra riga che dice il tuo nome.`, `Ogni parentesi aperta e ogni virgoletta aperta ha bisogno della sua chiusura.`],
        [`Quando qualcosa si rompe`, `Tutti sbagliano, sempre. Qui pirnt è un errore di battitura: Python non conosce quel nome.

Pyviel ti dice in una frase cosa è successo e in che riga. Il pulsante Mostra l'errore completo fa vedere tutto il messaggio che Python ha scritto, per quando vuoi imparare a leggerlo.`, `Prima
(poi un problema alla riga 2: il nome pirnt non esiste, e Python chiede: volevi scrivere print?)`, `Correggi l'errore, poi riesegui. Compariranno tutte e tre le righe.`, `Python si ferma al primo errore. Le righe dopo non girano finché non lo correggi.`]
      ]]
    ]
  },
  fr: {
    ui: {
      lesson: 'Leçon', step: 'étape', of: 'sur', steps: 'étapes',
      lineByLine: 'Ligne par ligne', see: 'Ce que tu verras', turn: 'À toi', slip: 'Attention',
      typeIt: 'Écris-le toi-même', putIt: 'Mets-le dans l\'éditeur', typeNote: 'Page vide prête. Écris les lignes que tu vois dans la leçon, puis appuie sur Lancer.',
      listen: 'Écouter', stopReading: 'Arrêter la lecture',
      startLessons: 'Tu débutes ? Commence par la leçon 1', continueLesson: 'Continue : leçon {n}', lessonsDone: '{done} leçons sur {total} faites',
      allDoneTitle: 'Tu connais tout le langage !', allDoneText: 'Ouvre maintenant les exemples, change-les et crée ton propre programme.', seeExamples: 'Voir les exemples'
    },
    explain: {
      comment: 'Une note pour les humains. Python la saute.',
      print: 'Montre ceci à l\'écran.',
      askNow: 'Pose la question et garde ce que la personne écrit dans le nom à gauche.',
      askNumber: 'Pose la question, puis transforme le texte écrit en nombre entier.',
      importIt: 'Apporte une boîte à outils que Python a déjà prête.',
      ifBlock: 'Vérifie quelque chose. Les lignes décalées dessous ne tournent que si c\'est vrai.',
      elifBlock: 'Si le premier test était faux, vérifie celui-ci.',
      elseBlock: 'Si aucun test n\'était vrai, les lignes décalées dessous tournent.',
      forLoop: 'Répète les lignes décalées dessous, une fois pour chaque chose.',
      whileLoop: 'Répète les lignes décalées dessous tant que le test est vrai.',
      fnDef: 'Commence ta propre fonction, appelée {name}. Les lignes décalées dessous sont ce qu\'elle fait.',
      returnIt: 'Renvoie cette valeur à l\'endroit qui a utilisé la fonction.',
      breakIt: 'Sort de la boucle tout de suite.',
      continueIt: 'Passe au tour suivant de la boucle.',
      passIt: 'Ne fait rien, exprès. Un bloc a besoin d\'au moins une ligne.',
      assign: 'Met une valeur dans le nom {name}. S\'il contenait déjà quelque chose, l\'ancienne valeur disparaît.'
    },
    lessons: [
      ['Découvre Pyviel', 'Ton tout premier programme', [
        [`Fais parler l'ordinateur`, `Un programme est une liste d'instructions. L'ordinateur les lit de haut en bas.

print est un mot que Python connaît déjà. Il fait dire quelque chose à l'ordinateur. Ce que tu veux lui faire dire va entre les parenthèses, entre guillemets.`, `Salut!`, `Appuie sur le bouton vert Lancer. Regarde la boîte Résultat.`, `Écris bien print, avec les parenthèses et les guillemets. Si tu écris prnt, Pyviel te dit quelle ligne est fausse.`],
        [`Dis plus d'une chose`, `Chaque ligne print dit une ligne. L'ordinateur les fait dans l'ordre, comme tu lis un livre.

Les guillemets disent à Python que les mots sont du texte, pas des instructions.`, `Salut!
Je m'appelle Pyviel.
Enchanté de te connaître.`, `Ajoute une ligne de plus qui dit ton prénom.`, `Chaque parenthèse ouverte et chaque guillemet ouvert a besoin de sa fermeture.`],
        [`Quand quelque chose casse`, `Tout le monde se trompe, tout le temps. Ici pirnt est une faute de frappe : Python ne connaît pas ce nom.

Pyviel te dit en une phrase ce qui s'est passé et à quelle ligne. Le bouton Voir l'erreur complète montre tout le message que Python a écrit, pour quand tu veux apprendre à le lire.`, `Avant
(puis un problème à la ligne 2 : le nom pirnt n'existe pas, et Python demande : tu voulais écrire print ?)`, `Corrige la faute, puis relance. Les trois lignes apparaîtront.`, `Python s'arrête à la première erreur. Les lignes d'après ne tournent pas tant que tu ne l'as pas corrigée.`]
      ]]
    ]
  }
};
