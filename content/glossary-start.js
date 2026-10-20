// Stage 1: the first programs.
module.exports = {
  'print': {
    w: 'print( )',
    d: ['print is a helper that Python already knows (programmers call it a function). It shows something on the screen. Write its name, then round brackets, and put what you want to show inside them.',
      'print è un aiutante che Python conosce già (i programmatori lo chiamano funzione). Mostra qualcosa sullo schermo. Scrivi il suo nome, poi le parentesi tonde, e dentro metti quello che vuoi mostrare.',
      'print est un assistant que Python connaît déjà (les programmeurs l\'appellent une fonction). Il affiche quelque chose à l\'écran. Écris son nom, puis des parenthèses rondes, et mets dedans ce que tu veux afficher.'],
    s: 'print("Hello!")'
  },
  'string': {
    w: '" "',
    d: ['Text goes between quotes. The quotes are not shown: they only tell Python where the text starts and where it ends. A piece of text is called a string.',
      'Il testo va tra virgolette. Le virgolette non si vedono: dicono solo a Python dove il testo inizia e dove finisce. Un pezzo di testo si chiama stringa.',
      'Le texte va entre guillemets. Les guillemets ne s\'affichent pas : ils disent seulement à Python où le texte commence et où il finit. Un morceau de texte s\'appelle une chaîne.'],
    s: '"Hello!"'
  },
  'number': {
    w: '7',
    d: ['A number is written plain, with no quotes. Python can do sums with numbers, and it shows them as they are.',
      'Un numero si scrive semplice, senza virgolette. Python può fare i conti con i numeri e li mostra così come sono.',
      'Un nombre s\'écrit simplement, sans guillemets. Python peut faire des calculs avec les nombres et les affiche tels quels.'],
    s: 'print(7)'
  },
  '+': {
    w: '+',
    d: ['Between two numbers, + adds them. Python does the sum and shows the result.',
      'Tra due numeri, + li somma. Python fa il conto e mostra il risultato.',
      'Entre deux nombres, + les additionne. Python fait le calcul et affiche le résultat.'],
    s: 'print(2 + 3)'
  },
  'comment': {
    w: '#',
    d: ['A line that starts with # is a note for people. Python skips it. A note can also go at the end of a line.',
      'Una riga che inizia con # è una nota per le persone. Python la salta. Una nota può stare anche alla fine di una riga.',
      'Une ligne qui commence par # est une note pour les humains. Python la saute. Une note peut aussi se mettre à la fin d\'une ligne.'],
    s: '# this is a note'
  },
  '=': {
    w: '=',
    d: ['= puts a value into a box that has a name. The name goes on the left and the value on the right. A name that holds a value is called a variable.',
      '= mette un valore in una scatola che ha un nome. Il nome va a sinistra e il valore a destra. Un nome che contiene un valore si chiama variabile.',
      '= met une valeur dans une boîte qui a un nom. Le nom va à gauche et la valeur à droite. Un nom qui contient une valeur s\'appelle une variable.'],
    s: 'name = "Ada"'
  },
  'many-args': {
    w: 'a, b',
    d: ['Between the brackets you can put many things, with a comma between them. print shows them in one line, with a space between each.',
      'Tra le parentesi puoi mettere molte cose, con una virgola tra l\'una e l\'altra. print le mostra in una riga, con uno spazio in mezzo.',
      'Entre les parenthèses tu peux mettre plusieurs choses, avec une virgule entre elles. print les affiche sur une ligne, avec une espace entre chaque.'],
    s: 'print("I am", 12)'
  },
  'arg:sep': {
    w: 'sep=',
    d: ['sep says what goes between the things that print shows. Normally it is a space; you can choose another text.',
      'sep dice cosa mettere tra le cose che print mostra. Di solito è uno spazio; puoi scegliere un altro testo.',
      'sep dit ce qu\'il faut mettre entre les choses que print affiche. D\'habitude c\'est une espace ; tu peux choisir un autre texte.'],
    s: 'print("a", "b", sep="-")'
  },
  'arg:end': {
    w: 'end=',
    d: ['end says what goes after everything that print shows. Normally it is a new line; you can choose another text, even an empty one.',
      'end dice cosa mettere dopo tutto quello che print mostra. Di solito è una riga nuova; puoi scegliere un altro testo, anche vuoto.',
      'end dit ce qu\'il faut mettre après tout ce que print affiche. D\'habitude c\'est un retour à la ligne ; tu peux choisir un autre texte, même vide.'],
    s: 'print("Loading", end="...")'
  },
  '+text': {
    w: '+ for text',
    d: ['Between two texts, + glues them together, with nothing in the middle. It does not add a space for you.',
      'Tra due testi, + li incolla insieme, senza niente in mezzo. Non aggiunge uno spazio al posto tuo.',
      'Entre deux textes, + les colle ensemble, sans rien au milieu. Il n\'ajoute pas d\'espace à ta place.'],
    s: '"Py" + "viel"'
  },
  '*': {
    w: '*',
    d: ['With a text and a number, * repeats the text that many times. (With two numbers, * multiplies them.)',
      'Con un testo e un numero, * ripete il testo quel numero di volte. (Con due numeri, * li moltiplica.)',
      'Avec un texte et un nombre, * répète le texte autant de fois. (Avec deux nombres, * les multiplie.)'],
    s: '"Ha" * 3'
  },
  'len': {
    w: 'len( )',
    d: ['len counts how many letters a text has, spaces included. Put the text inside the brackets. It gives the answer back, so you can show it with print.',
      'len conta quante lettere ha un testo, spazi compresi. Metti il testo tra le parentesi. Restituisce la risposta, così puoi mostrarla con print.',
      'len compte combien de lettres a un texte, espaces compris. Mets le texte entre les parenthèses. Il rend la réponse, donc tu peux l\'afficher avec print.'],
    s: 'len("Python")'
  },
  'escape': {
    w: '\\n  \\t  \\"',
    d: ['A backslash \\ inside a text starts a special code. \\n means "start a new line", \\t means "a wide space (a tab)", and \\" puts a quote in the text without ending it.',
      'Una barra rovesciata \\ dentro un testo inizia un codice speciale. \\n vuol dire "vai a capo", \\t vuol dire "uno spazio largo (una tabulazione)" e \\" mette una virgoletta nel testo senza chiuderlo.',
      'Une barre oblique inversée \\ dans un texte commence un code spécial. \\n veut dire "va à la ligne", \\t veut dire "une grande espace (une tabulation)" et \\" met un guillemet dans le texte sans le fermer.'],
    s: 'print("one\\ntwo")'
  },
  'triple-quote': {
    w: '""" """',
    d: ['Three quotes in a row start a text that can go over many lines, and three quotes again end it. Every new line you type inside is kept.',
      'Tre virgolette di fila iniziano un testo che può andare su molte righe, e altre tre lo chiudono. Ogni riga nuova che scrivi dentro viene tenuta.',
      'Trois guillemets de suite commencent un texte qui peut s\'étendre sur plusieurs lignes, et trois autres le terminent. Chaque nouvelle ligne que tu écris dedans est gardée.'],
    s: 'poem = """one\ntwo"""'
  },
  'index': {
    w: 'text[ ]',
    d: ['Square brackets after a text pick one letter. The place is a number, and the count starts at 0: the first letter is at place 0, the second at place 1.',
      'Le parentesi quadre dopo un testo scelgono una lettera. Il posto è un numero e si conta da 0: la prima lettera è al posto 0, la seconda al posto 1.',
      'Les crochets après un texte choisissent une lettre. La place est un nombre et on compte à partir de 0 : la première lettre est à la place 0, la deuxième à la place 1.'],
    s: 'word[0]'
  },
  'negative-index': {
    w: 'text[-1]',
    d: ['A minus number counts from the end: place -1 is the last letter, -2 the one before it.',
      'Un numero con il meno conta dalla fine: il posto -1 è l\'ultima lettera, -2 quella prima.',
      'Un nombre avec un moins compte depuis la fin : la place -1 est la dernière lettre, -2 celle d\'avant.'],
    s: 'word[-1]'
  },
  'slice': {
    w: 'text[a:b]',
    d: ['A colon between two places takes a piece: from the first place up to, but not including, the second. Leave one out to go to the start or to the end.',
      'I due punti tra due posti prendono un pezzo: dal primo posto fino al secondo, escluso. Se ne lasci uno fuori vai fino all\'inizio o alla fine.',
      'Deux points entre deux places prennent un morceau : de la première place jusqu\'à la seconde, non incluse. Si tu en laisses une de côté, tu vas jusqu\'au début ou jusqu\'à la fin.'],
    s: 'word[0:2]'
  }
};
