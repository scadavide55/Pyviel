// Stage 1: comparing, choosing, repeating, lists.
module.exports = {
  '>': {
    w: '>  <',
    d: ['> asks "is the left one bigger?" and < asks "is the left one smaller?". The answer is True or False.',
      '> chiede "il primo è più grande?" e < chiede "il primo è più piccolo?". La risposta è True o False.',
      '> demande "celui de gauche est-il plus grand ?" et < demande "est-il plus petit ?". La réponse est True ou False.'],
    s: 'print(5 > 3)'
  },
  '<': {
    w: '<',
    d: ['< asks "is the left one smaller?". The answer is True or False.',
      '< chiede "il primo è più piccolo?". La risposta è True o False.',
      '< demande "celui de gauche est-il plus petit ?". La réponse est True ou False.'],
    s: 'print(2 < 9)'
  },
  '==': {
    w: '==',
    d: ['== asks "are these two equal?". Two equal signs ask a question; one equal sign puts a value in a box. They are very different.',
      '== chiede "questi due sono uguali?". Due segni uguale fanno una domanda; un segno uguale mette un valore in una scatola. Sono molto diversi.',
      '== demande "ces deux-là sont-ils égaux ?". Deux signes égal posent une question ; un signe égal met une valeur dans une boîte. Ils sont très différents.'],
    s: 'print(age == 12)'
  },
  '!=': {
    w: '!=',
    d: ['!= asks "are these two different?". It is True when they are not equal.',
      '!= chiede "questi due sono diversi?". È True quando non sono uguali.',
      '!= demande "ces deux-là sont-ils différents ?". C\'est True quand ils ne sont pas égaux.'],
    s: 'print(age != 12)'
  },
  '>=': {
    w: '>=  <=',
    d: ['>= asks "bigger or equal?" and <= asks "smaller or equal?". The equal sign always comes second.',
      '>= chiede "più grande o uguale?" e <= chiede "più piccolo o uguale?". Il segno uguale viene sempre per secondo.',
      '>= demande "plus grand ou égal ?" et <= demande "plus petit ou égal ?". Le signe égal vient toujours en second.'],
    s: 'print(age >= 10)'
  },
  '<=': {
    w: '<=',
    d: ['<= asks "smaller or equal?".',
      '<= chiede "più piccolo o uguale?".',
      '<= demande "plus petit ou égal ?".'],
    s: 'print(age <= 10)'
  },
  'in': {
    w: 'in',
    d: ['in asks "is this one inside that one?". For a text it asks if some letters are part of it. The answer is True or False.',
      'in chiede "questo sta dentro quello?". Per un testo chiede se alcune lettere ne fanno parte. La risposta è True o False.',
      'in demande "celui-ci est-il dans celui-là ?". Pour un texte, il demande si des lettres en font partie. La réponse est True ou False.'],
    s: ['print("a" in "banana")', 'print("a" in "banana")', 'print("a" in "banane")']
  },
  'and': {
    w: 'and',
    d: ['and joins two questions: the answer is True only when both are True.',
      'and unisce due domande: la risposta è True solo quando tutte e due sono True.',
      'and relie deux questions : la réponse est True seulement quand les deux sont True.'],
    s: 'age > 10 and age < 15'
  },
  'or': {
    w: 'or',
    d: ['or joins two questions: the answer is True when at least one is True.',
      'or unisce due domande: la risposta è True quando almeno una è True.',
      'or relie deux questions : la réponse est True quand au moins une est True.'],
    s: 'age < 10 or age == 12'
  },
  'not': {
    w: 'not',
    d: ['not turns True into False, and False into True.',
      'not trasforma True in False e False in True.',
      'not transforme True en False et False en True.'],
    s: 'not age == 12'
  },
  'bool': {
    w: 'bool( )',
    d: ['bool shows how Python sees a value as a yes or a no. 0, an empty text and a few other "empty" things are False. Almost everything else is True.',
      'bool mostra come Python vede un valore, come un sì o un no. 0, un testo vuoto e poche altre cose "vuote" sono False. Quasi tutto il resto è True.',
      'bool montre comment Python voit une valeur, comme un oui ou un non. 0, un texte vide et quelques autres choses "vides" sont False. Presque tout le reste est True.'],
    s: 'bool("")'
  },
  'None': {
    w: 'None',
    d: ['None is a special value that means "nothing here". It is not 0 and it is not an empty text: it is the lack of a value.',
      'None è un valore speciale che vuol dire "qui non c\'è niente". Non è 0 e non è un testo vuoto: è l\'assenza di un valore.',
      'None est une valeur spéciale qui veut dire "rien ici". Ce n\'est pas 0 et ce n\'est pas un texte vide : c\'est l\'absence de valeur.'],
    s: 'result = None'
  },
  'if': {
    w: 'if',
    d: ['if lets the program choose. Write if, a question, and a colon. The lines pushed in under it (with 4 spaces) run only when the answer is True.',
      'if fa scegliere il programma. Scrivi if, una domanda e i due punti. Le righe rientrate sotto (di 4 spazi) girano solo quando la risposta è True.',
      'if fait choisir le programme. Écris if, une question et deux points. Les lignes décalées dessous (de 4 espaces) ne tournent que quand la réponse est True.'],
    s: ['if age >= 10:\n    print("Come in")', 'if age >= 10:\n    print("Entra")', 'if age >= 10:\n    print("Entre")']
  },
  'else': {
    w: 'else',
    d: ['else is for "otherwise": its lines run when the if before it was not True.',
      'else vuol dire "altrimenti": le sue righe girano quando l\'if prima non era True.',
      'else veut dire "sinon" : ses lignes tournent quand le if d\'avant n\'était pas True.'],
    s: ['else:\n    print("Too young")', 'else:\n    print("Troppo piccolo")', 'else:\n    print("Trop jeune")']
  },
  'elif': {
    w: 'elif',
    d: ['elif is "else if": one more question to ask when the ones before it were not True. You can have as many as you like.',
      'elif è "else if", cioè "altrimenti se": un\'altra domanda da fare quando quelle prima non erano True. Ne puoi avere quante vuoi.',
      'elif veut dire "sinon si" : une autre question à poser quand les précédentes n\'étaient pas True. Tu peux en avoir autant que tu veux.'],
    s: 'elif score >= 70:\n    print("B")'
  },
  'one-line-if': {
    w: 'a if q else b',
    d: ['A choice in one line: write the value for True, then if, the question, else, and the value for False.',
      'Una scelta in una riga: scrivi il valore per True, poi if, la domanda, else e il valore per False.',
      'Un choix sur une ligne : écris la valeur pour True, puis if, la question, else et la valeur pour False.'],
    s: ['status = "adult" if age >= 18 else "child"', 'status = "adulto" if age >= 18 else "bambino"', 'status = "adulte" if age >= 18 else "enfant"']
  },
  'for': {
    w: 'for',
    d: ['for repeats lines. Write for, a name, in, what to go through, and a colon. The lines pushed in run once for each item, and the name holds the current item.',
      'for ripete delle righe. Scrivi for, un nome, in, cosa scorrere e i due punti. Le righe rientrate girano una volta per ogni elemento, e il nome contiene l\'elemento di quel momento.',
      'for répète des lignes. Écris for, un nom, in, ce qu\'il faut parcourir et deux points. Les lignes décalées tournent une fois pour chaque élément, et le nom contient l\'élément du moment.'],
    s: 'for i in range(3):\n    print(i)'
  },
  'range': {
    w: 'range( )',
    d: ['range(3) makes the numbers 0, 1 and 2: it counts from 0 and stops before the number you give. With two numbers, range(1, 4) goes from 1 to 3. A third number is the step.',
      'range(3) fa i numeri 0, 1 e 2: conta da 0 e si ferma prima del numero che gli dai. Con due numeri, range(1, 4) va da 1 a 3. Un terzo numero è il passo.',
      'range(3) fait les nombres 0, 1 et 2 : il compte à partir de 0 et s\'arrête avant le nombre donné. Avec deux nombres, range(1, 4) va de 1 à 3. Un troisième nombre est le pas.'],
    s: 'range(1, 4)'
  },
  'while': {
    w: 'while',
    d: ['while repeats lines for as long as a question is True. Write while, a question and a colon. The question is asked again before every turn.',
      'while ripete delle righe finché una domanda è True. Scrivi while, una domanda e i due punti. La domanda viene fatta di nuovo prima di ogni giro.',
      'while répète des lignes tant qu\'une question est True. Écris while, une question et deux points. La question est reposée avant chaque tour.'],
    s: 'while count > 0:\n    count -= 1'
  },
  'break': {
    w: 'break',
    d: ['break leaves the loop at once, and the program goes on with the lines after it.',
      'break esce subito dal ciclo, e il programma continua con le righe dopo.',
      'break sort tout de suite de la boucle, et le programme continue avec les lignes d\'après.'],
    s: 'if n == 3:\n    break'
  },
  'continue': {
    w: 'continue',
    d: ['continue skips the rest of this turn and goes straight to the next one.',
      'continue salta il resto di questo giro e passa subito al successivo.',
      'continue saute le reste de ce tour et passe tout de suite au suivant.'],
    s: 'if n == 3:\n    continue'
  },
  'list': {
    w: '[ ]',
    d: ['A list keeps many values in order. Write them between square brackets, with commas. Its items have places counted from 0, like the letters of a text.',
      'Una lista tiene molti valori in ordine. Scrivili tra parentesi quadre, con le virgole. I suoi elementi hanno posti contati da 0, come le lettere di un testo.',
      'Une liste garde plusieurs valeurs dans l\'ordre. Écris-les entre crochets, avec des virgules. Ses éléments ont des places comptées à partir de 0, comme les lettres d\'un texte.'],
    s: ['fruits = ["apple", "banana"]', 'fruits = ["mela", "banana"]', 'fruits = ["pomme", "banane"]']
  },
  'list-set': {
    w: 'list[0] = x',
    d: ['You can change one item of a list by its place: write the list, the place in square brackets, an equal sign and the new value.',
      'Puoi cambiare un elemento di una lista dal suo posto: scrivi la lista, il posto tra parentesi quadre, un segno uguale e il nuovo valore.',
      'Tu peux changer un élément d\'une liste par sa place : écris la liste, la place entre crochets, un signe égal et la nouvelle valeur.'],
    s: ['fruits[0] = "pear"', 'fruits[0] = "pera"', 'fruits[0] = "poire"']
  },
  '.append': {
    w: '.append( )',
    d: ['.append adds one item at the end of a list. Write the list, a dot, append, and the item in brackets. The word after the dot is a method: a helper that belongs to the list.',
      '.append aggiunge un elemento in fondo a una lista. Scrivi la lista, un punto, append e l\'elemento tra parentesi. La parola dopo il punto è un metodo: un aiutante che appartiene alla lista.',
      '.append ajoute un élément à la fin d\'une liste. Écris la liste, un point, append et l\'élément entre parenthèses. Le mot après le point est une méthode : un assistant qui appartient à la liste.'],
    s: ['fruits.append("plum")', 'fruits.append("prugna")', 'fruits.append("prune")']
  },
  '.insert': {
    w: '.insert( )',
    d: ['.insert puts an item at a place of your choice: the place first, then the item. The others move over.',
      '.insert mette un elemento in un posto a tua scelta: prima il posto, poi l\'elemento. Gli altri si spostano.',
      '.insert met un élément à une place de ton choix : d\'abord la place, puis l\'élément. Les autres se décalent.'],
    s: 'fruits.insert(0, "kiwi")'
  },
  '.remove': {
    w: '.remove( )',
    d: ['.remove takes out the first item that is equal to the one you give.',
      '.remove toglie il primo elemento uguale a quello che gli dai.',
      '.remove enlève le premier élément égal à celui que tu donnes.'],
    s: ['fruits.remove("banana")', 'fruits.remove("banana")', 'fruits.remove("banane")']
  },
  '.pop': {
    w: '.pop( )',
    d: ['.pop takes out an item and gives it back to you. With no place, it is the last one.',
      '.pop toglie un elemento e te lo restituisce. Senza posto, è l\'ultimo.',
      '.pop enlève un élément et te le rend. Sans place, c\'est le dernier.'],
    s: 'last = fruits.pop()'
  },
  'sum': {
    w: 'sum( )',
    d: ['sum adds up all the numbers of a list.',
      'sum somma tutti i numeri di una lista.',
      'sum additionne tous les nombres d\'une liste.'],
    s: 'sum([1, 2, 3])'
  },
  'sorted': {
    w: 'sorted( )',
    d: ['sorted gives a new list with the same items in order, smallest first. The old list stays as it was.',
      'sorted dà una lista nuova con gli stessi elementi in ordine, dal più piccolo. La vecchia lista resta com\'era.',
      'sorted donne une nouvelle liste avec les mêmes éléments dans l\'ordre, du plus petit au plus grand. L\'ancienne liste reste comme elle était.'],
    s: 'sorted([3, 1, 2])'
  },
  '.sort': {
    w: '.sort( )',
    d: ['.sort puts the items of the list itself in order. The list changes; nothing is given back.',
      '.sort mette in ordine gli elementi della lista stessa. La lista cambia; non restituisce niente.',
      '.sort met dans l\'ordre les éléments de la liste elle-même. La liste change ; il ne rend rien.'],
    s: 'numbers.sort()'
  }
};
