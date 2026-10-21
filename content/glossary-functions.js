// Stage 3: functions.
module.exports = {
  'def': {
    w: 'def',
    d: ['def makes your own function: a few lines with a name. Write def, the name, round brackets and a colon. The lines pushed in below are what it does. Making it does not run it: you run it later by writing its name with brackets.',
      'def crea una funzione tua: poche righe con un nome. Scrivi def, il nome, le parentesi tonde e i due punti. Le righe rientrate sotto sono quello che fa. Crearla non la esegue: la esegui dopo scrivendo il suo nome con le parentesi.',
      'def crée ta propre fonction : quelques lignes avec un nom. Écris def, le nom, des parenthèses rondes et deux points. Les lignes décalées dessous sont ce qu\'elle fait. La créer ne la lance pas : tu la lances plus tard en écrivant son nom avec des parenthèses.'],
    s: ['def greet():\n    print("Hello!")\n\ngreet()', 'def greet():\n    print("Ciao!")\n\ngreet()', 'def greet():\n    print("Bonjour!")\n\ngreet()']
  },
  'parameter': {
    w: 'def f(name):',
    d: ['A name inside the brackets of def is a parameter: a box that exists only inside the function, and that is filled when you call it. greet("Ada") puts "Ada" in the box name. The values you give in the call are called arguments.',
      'Un nome dentro le parentesi di def è un parametro: una scatola che esiste solo dentro la funzione e che viene riempita quando la chiami. greet("Ada") mette "Ada" nella scatola name. I valori che dai nella chiamata si chiamano argomenti.',
      'Un nom entre les parenthèses de def est un paramètre : une boîte qui n\'existe qu\'à l\'intérieur de la fonction, et qui est remplie quand tu l\'appelles. greet("Ada") met "Ada" dans la boîte name. Les valeurs que tu donnes dans l\'appel s\'appellent des arguments.'],
    s: 'def greet(name):\n    print("Hello", name)'
  },
  'return': {
    w: 'return',
    d: ['return sends a value back to the place that called the function, so you can keep it in a box or use it in a sum. The function ends at the return line.',
      'return rimanda un valore al posto che ha chiamato la funzione, così lo puoi tenere in una scatola o usare in un conto. La funzione finisce alla riga return.',
      'return renvoie une valeur à l\'endroit qui a appelé la fonction, donc tu peux la garder dans une boîte ou l\'utiliser dans un calcul. La fonction se termine à la ligne return.'],
    s: 'def square(n):\n    return n * n'
  },
  'docstring': {
    w: '""" """',
    d: ['A text in triple quotes right under the def line describes the function. Python does not run it: it is there for people (and for tools that show help).',
      'Un testo tra tre virgolette subito sotto la riga def descrive la funzione. Python non lo esegue: è lì per le persone (e per gli strumenti che mostrano l\'aiuto).',
      'Un texte entre trois guillemets juste sous la ligne def décrit la fonction. Python ne l\'exécute pas : il est là pour les humains (et pour les outils qui affichent l\'aide).'],
    s: ['def is_even(n):\n    """Tell if n is even."""', 'def is_even(n):\n    """Dice se n è pari."""', 'def is_even(n):\n    """Dit si n est pair."""']
  },
  'default-value': {
    w: 'def f(a, b=1):',
    d: ['A parameter can have a default value, written with an equal sign: greeting="Hello". If the call gives nothing for it, the default is used. If the call gives a value, that value wins. Parameters with a default come after the others.',
      'Un parametro può avere un valore predefinito, scritto con un segno uguale: greeting="Ciao". Se la chiamata non dà niente per lui, si usa quello predefinito. Se la chiamata dà un valore, vince quel valore. I parametri con un valore predefinito vengono dopo gli altri.',
      'Un paramètre peut avoir une valeur par défaut, écrite avec un signe égal : greeting="Bonjour". Si l\'appel ne donne rien pour lui, la valeur par défaut est utilisée. Si l\'appel donne une valeur, c\'est celle-ci qui gagne. Les paramètres avec une valeur par défaut viennent après les autres.'],
    s: 'def greet(name, greeting="Hello"):'
  },
  'named-call': {
    w: 'f(height=1)',
    d: ['When you call a function you can write the name of each parameter before its value: height=1. The order no longer matters, and the call reads like a sentence.',
      'Quando chiami una funzione puoi scrivere il nome di ogni parametro davanti al suo valore: height=1. L\'ordine non conta più e la chiamata si legge come una frase.',
      'Quand tu appelles une fonction tu peux écrire le nom de chaque paramètre devant sa valeur : height=1. L\'ordre ne compte plus, et l\'appel se lit comme une phrase.'],
    s: 'box(height=1, width=8)'
  },
  '*args': {
    w: 'def f(*items):',
    d: ['A star before a parameter, *items, collects all the values given into one tuple. The function can then be called with any number of values, even none.',
      'Una stella davanti a un parametro, *items, raccoglie tutti i valori dati in una sola tupla. La funzione si può chiamare con un numero qualsiasi di valori, anche nessuno.',
      'Une étoile devant un paramètre, *items, rassemble toutes les valeurs données dans un seul tuple. La fonction peut alors être appelée avec n\'importe quel nombre de valeurs, même aucune.'],
    s: 'def total(*numbers):'
  },
  '**kwargs': {
    w: 'def f(**details):',
    d: ['Two stars before a parameter, **details, collect all the named values of the call into a dictionary.',
      'Due stelle davanti a un parametro, **details, raccolgono tutti i valori con nome della chiamata in un dizionario.',
      'Deux étoiles devant un paramètre, **details, rassemblent toutes les valeurs nommées de l\'appel dans un dictionnaire.'],
    s: 'def profile(**details):'
  },
  'star': {
    w: '*list',
    d: ['The star also works when you call: *numbers spreads a list into separate values, as if you had written them one by one. With two stars, **data spreads a dictionary into named values.',
      'La stella funziona anche quando chiami: *numbers spande una lista in valori separati, come se li avessi scritti uno a uno. Con due stelle, **data spande un dizionario in valori con nome.',
      'L\'étoile marche aussi quand tu appelles : *numbers étale une liste en valeurs séparées, comme si tu les avais écrites une par une. Avec deux étoiles, **data étale un dictionnaire en valeurs nommées.'],
    s: 'print(*numbers)'
  },
  'callable': {
    w: 'callable( )',
    d: ['In Python a function is a value like any other: you can keep it in a box or give it to another function. callable asks "can this be called like a function?".',
      'In Python una funzione è un valore come gli altri: la puoi tenere in una scatola o darla a un\'altra funzione. callable chiede "questo si può chiamare come una funzione?".',
      'En Python une fonction est une valeur comme les autres : tu peux la garder dans une boîte ou la donner à une autre fonction. callable demande "ceci peut-il être appelé comme une fonction ?".'],
    s: 'callable(print)'
  },
  'global': {
    w: 'global',
    d: ['global name says "I mean the name that lives outside". It lets a function change a box that was made outside it. It works, but programmers avoid it, because many functions changing the same box make a program hard to follow.',
      'global nome dice "intendo il nome che vive fuori". Permette a una funzione di cambiare una scatola fatta fuori. Funziona, ma i programmatori lo evitano, perché molte funzioni che cambiano la stessa scatola rendono il programma difficile da seguire.',
      'global nom dit "je parle du nom qui vit à l\'extérieur". Il permet à une fonction de changer une boîte faite à l\'extérieur. Ça marche, mais les programmeurs l\'évitent, parce que plusieurs fonctions qui changent la même boîte rendent un programme difficile à suivre.'],
    s: 'global counter'
  },
  'nonlocal': {
    w: 'nonlocal',
    d: ['nonlocal name says "I mean the box of the function around me". It lets an inner function change a box that belongs to the outer function.',
      'nonlocal nome dice "intendo la scatola della funzione che mi contiene". Permette a una funzione interna di cambiare una scatola della funzione esterna.',
      'nonlocal nom dit "je parle de la boîte de la fonction qui m\'entoure". Il permet à une fonction intérieure de changer une boîte de la fonction extérieure.'],
    s: 'nonlocal count'
  },
  'comprehension': {
    w: '[x for x in y]',
    d: ['A comprehension builds a list in one line: [what for item in things]. It says the same as a loop that appends, but shorter. Read it like English: "n times n, for each n in the range".',
      'Una comprensione costruisce una lista in una riga: [cosa for elemento in cose]. Dice la stessa cosa di un ciclo che aggiunge, ma più corto. Leggila come in inglese: "n per n, per ogni n nel range".',
      'Une compréhension construit une liste en une ligne : [quoi for élément in choses]. Elle dit la même chose qu\'une boucle qui ajoute, mais en plus court. Lis-la comme de l\'anglais : "n fois n, pour chaque n dans le range".'],
    s: '[n * n for n in range(1, 6)]'
  },
  'lambda': {
    w: 'lambda',
    d: ['lambda makes a small function with no name, in one line: lambda inputs: result. It is handy when you need a function just for a moment, like key= in sorted.',
      'lambda fa una piccola funzione senza nome, in una riga: lambda ingressi: risultato. È comoda quando ti serve una funzione solo per un momento, come key= in sorted.',
      'lambda fait une petite fonction sans nom, sur une ligne : lambda entrées: résultat. C\'est pratique quand tu as besoin d\'une fonction juste un instant, comme key= dans sorted.'],
    s: 'double = lambda n: n * 2'
  },
  'map': {
    w: 'map( )',
    d: ['map applies a function to every item. list(map(f, items)) gives the list of the results.',
      'map applica una funzione a ogni elemento. list(map(f, items)) dà la lista dei risultati.',
      'map applique une fonction à chaque élément. list(map(f, items)) donne la liste des résultats.'],
    s: 'list(map(len, words))'
  },
  'filter': {
    w: 'filter( )',
    d: ['filter keeps only the items for which a function answers True. list(filter(f, items)) gives the list of those items.',
      'filter tiene solo gli elementi per i quali una funzione risponde True. list(filter(f, items)) dà la lista di quegli elementi.',
      'filter ne garde que les éléments pour lesquels une fonction répond True. list(filter(f, items)) donne la liste de ces éléments.'],
    s: 'list(filter(is_even, numbers))'
  },
  'random.sample': {
    w: 'random.sample( )',
    d: ['random.sample(list, 3) picks 3 different items from a list, by luck. Every run gives other items, in another order.',
      'random.sample(lista, 3) sceglie 3 elementi diversi da una lista, a caso. Ogni esecuzione dà altri elementi, in un altro ordine.',
      'random.sample(liste, 3) choisit 3 éléments différents dans une liste, au hasard. Chaque exécution donne d\'autres éléments, dans un autre ordre.'],
    s: 'random.sample(items, 3)'
  }
};
