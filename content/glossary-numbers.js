// Stage 1: numbers, kinds of values, asking, messages.
module.exports = {
  '-': {
    w: '-',
    d: ['Between two numbers, - takes the second away from the first.',
      'Tra due numeri, - toglie il secondo dal primo.',
      'Entre deux nombres, - enlève le deuxième du premier.'],
    s: 'print(7 - 3)'
  },
  'multiply': {
    w: '* for numbers',
    d: ['Between two numbers, * multiplies them. Python uses a star because the sign × is not on the keyboard.',
      'Tra due numeri, * li moltiplica. Python usa la stella perché il segno × non è sulla tastiera.',
      'Entre deux nombres, * les multiplie. Python utilise une étoile parce que le signe × n\'est pas sur le clavier.'],
    s: 'print(7 * 3)'
  },
  '/': {
    w: '/',
    d: ['Between two numbers, / divides the first by the second. The answer always has a point, even when it comes out round: 6 / 2 is 3.0.',
      'Tra due numeri, / divide il primo per il secondo. La risposta ha sempre il punto, anche quando viene tonda: 6 / 2 è 3.0.',
      'Entre deux nombres, / divise le premier par le deuxième. La réponse a toujours un point, même quand elle tombe rond : 6 / 2 donne 3.0.'],
    s: 'print(7 / 2)'
  },
  '//': {
    w: '//',
    d: ['// divides and keeps only the whole part of the answer: 7 // 2 is 3.',
      '// divide e tiene solo la parte intera della risposta: 7 // 2 è 3.',
      '// divise et ne garde que la partie entière de la réponse : 7 // 2 donne 3.'],
    s: 'print(7 // 2)'
  },
  '%': {
    w: '%',
    d: ['% gives what is left over after a division: 7 % 2 is 1, because 2 fits three times in 7 and 1 is left. Programmers call it the rest, or the remainder.',
      '% dà quello che avanza dopo una divisione: 7 % 2 è 1, perché il 2 sta tre volte nel 7 e ne avanza 1. I programmatori lo chiamano resto.',
      '% donne ce qui reste après une division : 7 % 2 donne 1, parce que 2 entre trois fois dans 7 et il reste 1. Les programmeurs l\'appellent le reste.'],
    s: 'print(7 % 2)'
  },
  '**': {
    w: '**',
    d: ['** is the power: 2 ** 3 means 2 times itself 3 times, so 2 * 2 * 2 = 8.',
      '** è la potenza: 2 ** 3 vuol dire 2 per se stesso 3 volte, cioè 2 * 2 * 2 = 8.',
      '** est la puissance : 2 ** 3 veut dire 2 fois lui-même 3 fois, donc 2 * 2 * 2 = 8.'],
    s: 'print(2 ** 3)'
  },
  'order': {
    w: '( )',
    d: ['Python does the sums in the order you learned in maths: power first, then * and /, then + and -. Round brackets go before everything. When in doubt, add brackets: they are free.',
      'Python fa i conti nell\'ordine che hai imparato in matematica: prima la potenza, poi * e /, poi + e -. Le parentesi tonde vanno prima di tutto. Nel dubbio, aggiungi parentesi: sono gratis.',
      'Python fait les calculs dans l\'ordre appris en maths : d\'abord la puissance, puis * et /, puis + et -. Les parenthèses rondes passent avant tout. Dans le doute, ajoute des parenthèses : elles sont gratuites.'],
    s: 'print((2 + 3) * 4)'
  },
  'decimal': {
    w: '3.5',
    d: ['A number with a point is called a float. Python writes the point, not a comma. Computers keep these numbers with a tiny error: 0.1 + 0.2 shows 0.30000000000000004. It is normal, it happens in every language.',
      'Un numero con il punto si chiama float. Python scrive il punto, non la virgola. I computer tengono questi numeri con un piccolissimo errore: 0.1 + 0.2 mostra 0.30000000000000004. È normale, succede in ogni linguaggio.',
      'Un nombre avec un point s\'appelle un float. Python écrit le point, pas la virgule. Les ordinateurs gardent ces nombres avec une toute petite erreur : 0.1 + 0.2 affiche 0.30000000000000004. C\'est normal, ça arrive dans tous les langages.'],
    s: 'print(3.5)'
  },
  'round': {
    w: 'round( )',
    d: ['round gives a number cut to the number of decimals you ask: round(3.14159, 2) is 3.14. With no second number it gives a whole number.',
      'round dà un numero tagliato al numero di decimali che chiedi: round(3.14159, 2) è 3.14. Senza il secondo numero dà un numero intero.',
      'round donne un nombre coupé au nombre de décimales demandé : round(3.14159, 2) donne 3.14. Sans le deuxième nombre, il donne un nombre entier.'],
    s: 'round(3.14159, 2)'
  },
  'abs': {
    w: 'abs( )',
    d: ['abs gives a number without its minus sign: abs(-5) is 5.',
      'abs dà un numero senza il segno meno: abs(-5) è 5.',
      'abs donne un nombre sans son signe moins : abs(-5) donne 5.'],
    s: 'abs(-5)'
  },
  'min': {
    w: 'min( )',
    d: ['min gives the smallest of the numbers you give it: min(4, 9, 2) is 2.',
      'min dà il più piccolo dei numeri che gli dai: min(4, 9, 2) è 2.',
      'min donne le plus petit des nombres que tu lui donnes : min(4, 9, 2) donne 2.'],
    s: 'min(4, 9, 2)'
  },
  'max': {
    w: 'max( )',
    d: ['max gives the biggest of the numbers you give it: max(4, 9, 2) is 9.',
      'max dà il più grande dei numeri che gli dai: max(4, 9, 2) è 9.',
      'max donne le plus grand des nombres que tu lui donnes : max(4, 9, 2) donne 9.'],
    s: 'max(4, 9, 2)'
  },
  '+=': {
    w: '+=',
    d: ['total += 5 is a shortcut for total = total + 5: it adds 5 to what is in the box. There is also -=, *= and /= for the other sums.',
      'total += 5 è una scorciatoia per total = total + 5: aggiunge 5 a quello che c\'è nella scatola. Esistono anche -=, *= e /= per gli altri conti.',
      'total += 5 est un raccourci pour total = total + 5 : il ajoute 5 à ce qu\'il y a dans la boîte. Il existe aussi -=, *= et /= pour les autres calculs.'],
    s: 'total += 5'
  },
  '*=': {
    w: '*=',
    d: ['total *= 2 is a shortcut for total = total * 2: it multiplies what is in the box by 2.',
      'total *= 2 è una scorciatoia per total = total * 2: moltiplica per 2 quello che c\'è nella scatola.',
      'total *= 2 est un raccourci pour total = total * 2 : il multiplie par 2 ce qu\'il y a dans la boîte.'],
    s: 'total *= 2'
  },
  'type': {
    w: 'type( )',
    d: ['type tells you what kind a value is. str is a text, int is a whole number, float is a number with a point.',
      'type ti dice di che tipo è un valore. str è un testo, int è un numero intero, float è un numero con il punto.',
      'type te dit de quelle sorte est une valeur. str est un texte, int est un nombre entier, float est un nombre avec un point.'],
    s: 'type(7)'
  },
  'true-false': {
    w: 'True  False',
    d: ['True and False are the two answers to a yes-or-no question. They are written with a capital letter and no quotes. Their kind is called bool.',
      'True e False sono le due risposte a una domanda sì-o-no. Si scrivono con la lettera maiuscola e senza virgolette. Il loro tipo si chiama bool.',
      'True et False sont les deux réponses à une question oui-ou-non. On les écrit avec une majuscule et sans guillemets. Leur sorte s\'appelle bool.'],
    s: 'print(True)'
  },
  'int': {
    w: 'int( )',
    d: ['int turns something into a whole number: int("42") is the number 42. If you give it a number with a point, it cuts the point and what comes after.',
      'int trasforma qualcosa in un numero intero: int("42") è il numero 42. Se gli dai un numero con il punto, taglia il punto e quello che viene dopo.',
      'int transforme quelque chose en nombre entier : int("42") donne le nombre 42. Si tu lui donnes un nombre avec un point, il coupe le point et ce qui suit.'],
    s: 'int("42")'
  },
  'float': {
    w: 'float( )',
    d: ['float turns something into a number with a point: float("2.5") is the number 2.5.',
      'float trasforma qualcosa in un numero con il punto: float("2.5") è il numero 2.5.',
      'float transforme quelque chose en nombre avec un point : float("2.5") donne le nombre 2.5.'],
    s: 'float("2.5")'
  },
  'str': {
    w: 'str( )',
    d: ['str turns something into text: str(7) is the text "7". You need it to glue a number to a text with +.',
      'str trasforma qualcosa in testo: str(7) è il testo "7". Ti serve per incollare un numero a un testo con +.',
      'str transforme quelque chose en texte : str(7) donne le texte "7". Il t\'en faut pour coller un nombre à un texte avec +.'],
    s: 'str(7)'
  },
  'input': {
    w: 'input( )',
    d: ['input shows a question and waits for the person to type an answer and press Enter. The answer comes back as text, so you keep it in a box.',
      'input mostra una domanda e aspetta che la persona scriva una risposta e prema Invio. La risposta torna come testo, quindi la tieni in una scatola.',
      'input affiche une question et attend que la personne tape une réponse et appuie sur Entrée. La réponse revient sous forme de texte, donc tu la gardes dans une boîte.'],
    s: 'name = input("Your name? ")'
  },
  'f-string': {
    w: 'f" "  { }',
    d: ['Put an f just before the opening quote and you make an f-string. Anything inside curly brackets { } is replaced by its value. It is the easy way to build a message.',
      'Metti una f subito prima della virgoletta di apertura e ottieni una f-string. Tutto quello che sta tra parentesi graffe { } viene sostituito dal suo valore. È il modo facile di costruire un messaggio.',
      'Mets un f juste avant le guillemet d\'ouverture et tu obtiens une f-string. Tout ce qui est entre accolades { } est remplacé par sa valeur. C\'est la façon facile de construire un message.'],
    s: 'f"{name} is {age}"'
  },
  'format-spec': {
    w: '{x:.2f}',
    d: ['After the value you can add a colon and a format. :.2f means "show 2 digits after the point". It is how you make prices and measures look clean.',
      'Dopo il valore puoi aggiungere i due punti e un formato. :.2f vuol dire "mostra 2 cifre dopo il punto". È il modo per far venire bene prezzi e misure.',
      'Après la valeur tu peux ajouter deux points et un format. :.2f veut dire "affiche 2 chiffres après le point". C\'est ainsi que prix et mesures sont bien présentés.'],
    s: 'f"{2.5:.2f}"'
  },
  'format-more': {
    w: ':,  :>8  :03d',
    d: [':, puts commas in big numbers. :>8 pushes the value to the right inside 8 places and :<8 to the left. :03d fills with zeros up to 3 digits.',
      ':, mette le virgole nei numeri grandi. :>8 spinge il valore a destra dentro 8 posti e :<8 a sinistra. :03d riempie di zeri fino a 3 cifre.',
      ':, met des virgules dans les grands nombres. :>8 pousse la valeur à droite dans 8 places et :<8 à gauche. :03d remplit de zéros jusqu\'à 3 chiffres.'],
    s: 'f"{1234567:,}"'
  }
};
