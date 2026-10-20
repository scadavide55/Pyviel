/* Turns a Python error into a short sentence a beginner can read, in three languages.

   explain(error, lang) takes what pyviel-runner.py describes ({type, message, line, suggestion})
   and returns {title, caption, suggestion}:
     title    what happened, in one sentence
     caption  what it means and what to try
   The full Python error is never hidden: the page shows it behind "View full error".

   Each pattern matches the type of the error and its message. {1} {2} {3} are the
   pieces captured from the message. Words that belong to Python (int, str, list, print)
   stay in English in every language, because that is what the student will see in code. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PyvielErrors = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // id: {en: [title, caption], it: [...], fr: [...]}
  var TEXTS = {
    colon: {
      en: ['A colon `:` is missing at the end of this line.', 'Lines like if, for, while, def and class end with a colon. It tells Python that an indented block comes next.'],
      it: ['Manca i due punti `:` alla fine di questa riga.', 'Le righe come if, for, while, def e class finiscono con i due punti. Dicono a Python che subito dopo viene un blocco rientrato.'],
      fr: ['Il manque les deux-points `:` à la fin de cette ligne.', 'Les lignes comme if, for, while, def et class se terminent par deux-points. Ils disent à Python qu\'un bloc décalé suit.']
    },
    never_closed: {
      en: ['The bracket `{1}` was opened but never closed.', 'Every opening bracket needs its closing one: ( with ), [ with ], { with }. Look at this line and the ones just before it.'],
      it: ['La parentesi `{1}` è stata aperta ma non è mai stata chiusa.', 'Ogni parentesi aperta ha bisogno della sua chiusura: ( con ), [ con ], { con }. Guarda questa riga e quelle appena prima.'],
      fr: ['La parenthèse `{1}` a été ouverte mais jamais fermée.', 'Chaque parenthèse ouverte a besoin de sa fermeture : ( avec ), [ avec ], { avec }. Regarde cette ligne et celles juste avant.']
    },
    unmatched: {
      en: ['There is a closing `{1}` with nothing to close.', 'A closing bracket needs an opening one before it. Remove it, or add the opening bracket.'],
      it: ['C\'è una `{1}` di chiusura che non chiude niente.', 'Una parentesi chiusa ha bisogno di una aperta prima di sé. Toglila oppure aggiungi la parentesi di apertura.'],
      fr: ['Il y a un `{1}` fermant qui ne ferme rien.', 'Une parenthèse fermante a besoin d\'une ouvrante avant elle. Enlève-la ou ajoute l\'ouvrante.']
    },
    mismatch: {
      en: ['The brackets do not match: `{2}` was opened, but `{1}` closes it.', 'Each kind of bracket closes only its own kind: ( with ), [ with ], { with }.'],
      it: ['Le parentesi non corrispondono: è stata aperta `{2}`, ma la chiude `{1}`.', 'Ogni tipo di parentesi si chiude solo con la sua: ( con ), [ con ], { con }.'],
      fr: ['Les parenthèses ne correspondent pas : `{2}` a été ouverte, mais `{1}` la ferme.', 'Chaque sorte de parenthèse se ferme avec la sienne : ( avec ), [ avec ], { avec }.']
    },
    unterminated_string: {
      en: ['A text starts here but its closing quote is missing.', 'Text goes between two quotes of the same kind, like "hello". Add the missing quote at the end.'],
      it: ['Qui comincia un testo ma manca la virgoletta che lo chiude.', 'Il testo sta tra due virgolette uguali, come "ciao". Aggiungi la virgoletta mancante alla fine.'],
      fr: ['Un texte commence ici mais il manque le guillemet qui le ferme.', 'Un texte se met entre deux guillemets pareils, comme "salut". Ajoute le guillemet manquant à la fin.']
    },
    unterminated_triple: {
      en: ['A long text with triple quotes was never closed.', 'A text that starts with """ must end with """ too.'],
      it: ['Un testo lungo con le triple virgolette non è mai stato chiuso.', 'Un testo che comincia con """ deve finire anche con """.'],
      fr: ['Un long texte entre triples guillemets n\'a jamais été fermé.', 'Un texte qui commence par """ doit aussi finir par """.']
    },
    print_parens: {
      en: ['`print` needs brackets in Python 3.', 'Write print("hello") with the text inside round brackets, not print "hello".'],
      it: ['`print` ha bisogno delle parentesi in Python 3.', 'Scrivi print("ciao") con il testo dentro le parentesi tonde, non print "ciao".'],
      fr: ['`print` a besoin de parenthèses en Python 3.', 'Écris print("salut") avec le texte entre parenthèses, et pas print "salut".']
    },
    forgot_comma: {
      en: ['Two things are next to each other with no comma between them.', 'Between the values inside brackets (a list, a call...) a comma is needed. Check this line.'],
      it: ['Due cose sono vicine senza una virgola in mezzo.', 'Tra i valori dentro le parentesi (una lista, una chiamata...) serve una virgola. Controlla questa riga.'],
      fr: ['Deux choses sont côte à côte sans virgule entre elles.', 'Entre les valeurs dans des parenthèses (une liste, un appel...) il faut une virgule. Vérifie cette ligne.']
    },
    assign_equals: {
      en: ['A single `=` stores a value. To compare, use `==`.', 'Inside an if or a while you want to ask a question, so write ==. One = puts a value in a variable.'],
      it: ['Un solo `=` mette un valore in una variabile. Per confrontare si usa `==`.', 'Dentro un if o un while vuoi fare una domanda, quindi scrivi ==. Un solo = mette un valore in una variabile.'],
      fr: ['Un seul `=` range une valeur. Pour comparer, on utilise `==`.', 'Dans un if ou un while tu veux poser une question, alors écris ==. Un seul = range une valeur dans une variable.']
    },
    cannot_assign: {
      en: ['Python cannot store a value in `{1}`.', 'On the left of = there must be a name, like score = 3. Check what is written before the =.'],
      it: ['Python non può mettere un valore in `{1}`.', 'A sinistra di = ci vuole un nome, come score = 3. Controlla cosa c\'è scritto prima del =.'],
      fr: ['Python ne peut pas ranger une valeur dans `{1}`.', 'À gauche du = il faut un nom, comme score = 3. Vérifie ce qui est écrit avant le =.']
    },
    return_outside: {
      en: ['`return` can only be used inside a function.', 'return sends a result out of a function defined with def. Outside a function, use print to show something.'],
      it: ['`return` si può usare solo dentro una funzione.', 'return manda un risultato fuori da una funzione definita con def. Fuori da una funzione usa print per mostrare qualcosa.'],
      fr: ['`return` ne s\'utilise que dans une fonction.', 'return renvoie un résultat depuis une fonction définie avec def. Hors d\'une fonction, utilise print pour montrer quelque chose.']
    },
    loop_outside: {
      en: ['`{1}` can only be used inside a loop.', 'break and continue work inside for and while loops.'],
      it: ['`{1}` si può usare solo dentro un ciclo.', 'break e continue funzionano dentro i cicli for e while.'],
      fr: ['`{1}` ne s\'utilise que dans une boucle.', 'break et continue marchent dans les boucles for et while.']
    },
    bad_number: {
      en: ['This number is not written correctly.', 'A number has only digits (and a point for decimals). A name cannot start with a digit.'],
      it: ['Questo numero non è scritto bene.', 'Un numero ha solo cifre (e un punto per i decimali). Un nome non può cominciare con una cifra.'],
      fr: ['Ce nombre n\'est pas bien écrit.', 'Un nombre n\'a que des chiffres (et un point pour les décimaux). Un nom ne peut pas commencer par un chiffre.']
    },
    bad_char: {
      en: ['There is a character here that Python does not understand.', 'It is often a curly quote “ ” copied from a document. Use straight quotes: " or \'.'],
      it: ['Qui c\'è un carattere che Python non capisce.', 'Spesso è una virgoletta ricurva “ ” copiata da un documento. Usa le virgolette dritte: " o \'.'],
      fr: ['Il y a ici un caractère que Python ne comprend pas.', 'C\'est souvent un guillemet courbe “ ” copié d\'un document. Utilise des guillemets droits : " ou \'.']
    },
    fstring: {
      en: ['Something is wrong inside this f-string.', 'In an f-string, the parts in curly brackets {} must be valid Python, and every quote must be closed.'],
      it: ['C\'è qualcosa che non va dentro questa f-string.', 'In una f-string, le parti tra graffe {} devono essere Python valido, e ogni virgoletta va chiusa.'],
      fr: ['Quelque chose ne va pas dans cette f-string.', 'Dans une f-string, les parties entre accolades {} doivent être du Python valide, et chaque guillemet doit être fermé.']
    },
    expected_indent: {
      en: ['An indented line is expected here.', 'After a line that ends with a colon, the next line must be pushed to the right (4 spaces). That is how Python knows what belongs inside.'],
      it: ['Qui ci vuole una riga rientrata.', 'Dopo una riga che finisce con i due punti, la riga successiva deve essere spostata a destra (4 spazi). Così Python capisce cosa sta dentro.'],
      fr: ['Une ligne décalée est attendue ici.', 'Après une ligne qui finit par deux-points, la ligne suivante doit être décalée vers la droite (4 espaces). C\'est ainsi que Python sait ce qui est dedans.']
    },
    unexpected_indent: {
      en: ['This line is pushed to the right for no reason.', 'Only the lines after a colon are indented. Move this line back to the left, in line with the one above.'],
      it: ['Questa riga è spostata a destra senza motivo.', 'Si rientrano solo le righe dopo i due punti. Riporta questa riga a sinistra, allineata con quella sopra.'],
      fr: ['Cette ligne est décalée à droite sans raison.', 'On ne décale que les lignes après deux-points. Remets cette ligne à gauche, alignée avec celle du dessus.']
    },
    unindent_mismatch: {
      en: ['The indentation of this line does not match any block above it.', 'Lines in the same block start at exactly the same place. Use 4 spaces for each level.'],
      it: ['Il rientro di questa riga non corrisponde a nessun blocco sopra.', 'Le righe dello stesso blocco cominciano esattamente nello stesso punto. Usa 4 spazi per ogni livello.'],
      fr: ['Le décalage de cette ligne ne correspond à aucun bloc au-dessus.', 'Les lignes d\'un même bloc commencent exactement au même endroit. Utilise 4 espaces par niveau.']
    },
    tabs: {
      en: ['Tabs and spaces are mixed in this line.', 'Pick one way to indent, ideally 4 spaces, and use it everywhere.'],
      it: ['In questa riga ci sono tabulazioni e spazi mescolati.', 'Scegli un solo modo di rientrare, meglio 4 spazi, e usalo ovunque.'],
      fr: ['Cette ligne mélange tabulations et espaces.', 'Choisis une seule façon de décaler, de préférence 4 espaces, et utilise-la partout.']
    },
    try_without_except: {
      en: ['A `try` needs an `except` (or a `finally`) after it.', 'try says "attempt this". except says what to do if it fails. Add an except block under it.'],
      it: ['Un `try` ha bisogno di un `except` (o di un `finally`) dopo di sé.', 'try dice "prova questo". except dice cosa fare se non riesce. Aggiungi un blocco except sotto.'],
      fr: ['Un `try` a besoin d\'un `except` (ou d\'un `finally`) après lui.', 'try dit « essaie ça ». except dit quoi faire si ça échoue. Ajoute un bloc except dessous.']
    },
    unexpected_eof: {
      en: ['The program ends too early.', 'Something was started and not finished: a bracket, a text, or a block. Check the end of the program.'],
      it: ['Il programma finisce troppo presto.', 'Qualcosa è stato cominciato e non finito: una parentesi, un testo o un blocco. Controlla la fine del programma.'],
      fr: ['Le programme se termine trop tôt.', 'Quelque chose a été commencé sans être fini : une parenthèse, un texte ou un bloc. Vérifie la fin du programme.']
    },
    syntax_other: {
      en: ['Python cannot read this line.', 'The line is not written the way Python expects. Check the words, the brackets and the quotes. The full error below says exactly where.'],
      it: ['Python non riesce a leggere questa riga.', 'La riga non è scritta come Python si aspetta. Controlla le parole, le parentesi e le virgolette. L\'errore completo qui sotto dice dove.'],
      fr: ['Python n\'arrive pas à lire cette ligne.', 'La ligne n\'est pas écrite comme Python l\'attend. Vérifie les mots, les parenthèses et les guillemets. L\'erreur complète ci-dessous dit où.']
    },
    name_undefined: {
      en: ['`{1}` does not exist yet.', 'Python does not know this name. Either it has a typo, or it is used before a line like {1} = something creates it. A text needs quotes: "{1}".'],
      it: ['`{1}` non esiste ancora.', 'Python non conosce questo nome. O c\'è un errore di battitura, o lo usi prima che una riga come {1} = qualcosa lo crei. Un testo vuole le virgolette: "{1}".'],
      fr: ['`{1}` n\'existe pas encore.', 'Python ne connaît pas ce nom. Soit il y a une faute de frappe, soit tu l\'utilises avant qu\'une ligne comme {1} = quelque chose le crée. Un texte demande des guillemets : "{1}".']
    },
    unbound_local: {
      en: ['`{1}` is used inside a function before it has a value.', 'A variable that is changed inside a function is a new local one. Give it a value first inside the function, or pass it in as a parameter.'],
      it: ['`{1}` è usata dentro una funzione prima di avere un valore.', 'Una variabile cambiata dentro una funzione è una nuova variabile locale. Dalle prima un valore dentro la funzione, oppure passala come parametro.'],
      fr: ['`{1}` est utilisée dans une fonction avant d\'avoir une valeur.', 'Une variable modifiée dans une fonction est une nouvelle variable locale. Donne-lui d\'abord une valeur dans la fonction, ou passe-la en paramètre.']
    },
    concat_str: {
      en: ['A text and a number cannot be joined with `+`.', 'The text is "str" and the other thing is "{1}". Turn the number into text with str(...), or use an f-string like f"Age: {age}".'],
      it: ['Un testo e un numero non si possono unire con `+`.', 'Il testo è "str" e l\'altra cosa è "{1}". Trasforma il numero in testo con str(...), oppure usa una f-string come f"Età: {eta}".'],
      fr: ['Un texte et un nombre ne peuvent pas être joints avec `+`.', 'Le texte est « str » et l\'autre chose est « {1} ». Transforme le nombre en texte avec str(...), ou utilise une f-string comme f"Âge : {age}".']
    },
    unsupported_operands: {
      en: ['`{1}` cannot be used between a {2} and a {3}.', 'The two values have different types, so Python does not know how to combine them. Turn one into the other, for example with int(...) or str(...).'],
      it: ['`{1}` non si può usare tra un {2} e un {3}.', 'I due valori hanno tipi diversi, quindi Python non sa come combinarli. Trasforma uno nell\'altro, per esempio con int(...) o str(...).'],
      fr: ['`{1}` ne s\'utilise pas entre un {2} et un {3}.', 'Les deux valeurs ont des types différents, donc Python ne sait pas les combiner. Transforme l\'une en l\'autre, par exemple avec int(...) ou str(...).']
    },
    not_callable: {
      en: ['A {1} is used like a function, but it is not one.', 'Brackets after a name mean "run this". If it holds a value, remove the brackets. Also check you did not use a name like list or str for your own variable.'],
      it: ['Un {1} è usato come una funzione, ma non lo è.', 'Le parentesi dopo un nome vogliono dire "eseguilo". Se contiene un valore, togli le parentesi. Controlla anche di non aver usato nomi come list o str per le tue variabili.'],
      fr: ['Un {1} est utilisé comme une fonction, mais ce n\'en est pas une.', 'Des parenthèses après un nom veulent dire « exécute-le ». S\'il contient une valeur, enlève les parenthèses. Vérifie aussi que tu n\'as pas utilisé un nom comme list ou str pour ta variable.']
    },
    not_subscriptable: {
      en: ['A {1} cannot be opened with square brackets.', 'Square brackets like x[0] work on lists, texts, tuples and dictionaries. This value is something else. If it is None, a function probably forgot to return a value.'],
      it: ['Un {1} non si può aprire con le parentesi quadre.', 'Le parentesi quadre come x[0] funzionano su liste, testi, tuple e dizionari. Questo valore è altro. Se è None, forse una funzione ha dimenticato di fare return.'],
      fr: ['Un {1} ne s\'ouvre pas avec des crochets.', 'Les crochets comme x[0] marchent sur les listes, les textes, les tuples et les dictionnaires. Cette valeur est autre chose. Si c\'est None, une fonction a peut-être oublié de faire return.']
    },
    no_item_assignment: {
      en: ['A {1} cannot be changed in place.', 'Texts and tuples are fixed once made. To change a text, build a new one. To change items, use a list.'],
      it: ['Un {1} non si può cambiare sul posto.', 'I testi e le tuple restano fissi una volta creati. Per cambiare un testo ne crei uno nuovo. Per cambiare elementi usa una lista.'],
      fr: ['Un {1} ne peut pas être modifié sur place.', 'Les textes et les tuples sont fixes une fois créés. Pour changer un texte, on en construit un nouveau. Pour changer des éléments, utilise une liste.']
    },
    no_len: {
      en: ['A {1} has no length.', 'len(...) counts the items of a list, a text, a tuple or a dictionary. A number has nothing to count.'],
      it: ['Un {1} non ha una lunghezza.', 'len(...) conta gli elementi di una lista, di un testo, di una tupla o di un dizionario. Un numero non ha niente da contare.'],
      fr: ['Un {1} n\'a pas de longueur.', 'len(...) compte les éléments d\'une liste, d\'un texte, d\'un tuple ou d\'un dictionnaire. Un nombre n\'a rien à compter.']
    },
    not_iterable: {
      en: ['A {1} cannot be walked through one item at a time.', 'A for loop needs something with several items: a list, a text, range(...). For a number, use range(number).'],
      it: ['Un {1} non si può scorrere un elemento alla volta.', 'Un ciclo for ha bisogno di qualcosa con più elementi: una lista, un testo, range(...). Per un numero usa range(numero).'],
      fr: ['Un {1} ne peut pas être parcouru élément par élément.', 'Une boucle for a besoin de quelque chose avec plusieurs éléments : une liste, un texte, range(...). Pour un nombre, utilise range(nombre).']
    },
    missing_args: {
      en: ['`{1}` needs {2} more value(s): {3}.', 'The function was called with too few values. Give a value for each name in its brackets.'],
      it: ['`{1}` ha bisogno di altri {2} valori: {3}.', 'La funzione è stata chiamata con troppi pochi valori. Dai un valore per ogni nome tra le sue parentesi.'],
      fr: ['`{1}` a besoin de {2} valeur(s) de plus : {3}.', 'La fonction a été appelée avec trop peu de valeurs. Donne une valeur pour chaque nom entre ses parenthèses.']
    },
    too_many_args: {
      en: ['`{1}` takes {2} value(s) but {3} were given.', 'The function was called with the wrong number of values. Compare the call with the line that starts with def.'],
      it: ['`{1}` prende {2} valore/i ma ne sono stati dati {3}.', 'La funzione è stata chiamata con un numero sbagliato di valori. Confronta la chiamata con la riga che comincia con def.'],
      fr: ['`{1}` prend {2} valeur(s) mais {3} ont été données.', 'La fonction a été appelée avec un mauvais nombre de valeurs. Compare l\'appel avec la ligne qui commence par def.']
    },
    unexpected_kw: {
      en: ['`{1}` has no option called `{2}`.', 'A name written as name=value in a call must match a name the function knows. Check the spelling.'],
      it: ['`{1}` non ha un\'opzione chiamata `{2}`.', 'Un nome scritto come nome=valore in una chiamata deve coincidere con uno che la funzione conosce. Controlla come è scritto.'],
      fr: ['`{1}` n\'a pas d\'option appelée `{2}`.', 'Un nom écrit nom=valeur dans un appel doit correspondre à un nom que la fonction connaît. Vérifie l\'orthographe.']
    },
    not_ordered: {
      en: ['A {2} and a {3} cannot be compared with `{1}`.', 'Comparing with < or > works between two numbers or two texts, not between different types. Turn one into the other, for example int(...).'],
      it: ['Un {2} e un {3} non si possono confrontare con `{1}`.', 'Confrontare con < o > funziona tra due numeri o due testi, non tra tipi diversi. Trasforma uno nell\'altro, per esempio int(...).'],
      fr: ['Un {2} et un {3} ne peuvent pas être comparés avec `{1}`.', 'Comparer avec < ou > marche entre deux nombres ou deux textes, pas entre des types différents. Transforme l\'un en l\'autre, par exemple int(...).']
    },
    unhashable: {
      en: ['A {1} cannot be used as a dictionary key or in a set.', 'Keys and set items must be fixed values: numbers, texts or tuples. A list can change, so it is not allowed.'],
      it: ['Un {1} non si può usare come chiave di un dizionario o in un insieme.', 'Le chiavi e gli elementi di un insieme devono essere valori fissi: numeri, testi o tuple. Una lista può cambiare, quindi non è permessa.'],
      fr: ['Un {1} ne peut pas servir de clé de dictionnaire ni être dans un ensemble.', 'Les clés et les éléments d\'un ensemble doivent être des valeurs fixes : nombres, textes ou tuples. Une liste peut changer, donc elle n\'est pas permise.']
    },
    not_integer: {
      en: ['A {1} was used where a whole number is needed.', 'Positions and counts must be whole numbers (int). For example use int(x) or x // 2 instead of x / 2.'],
      it: ['Un {1} è stato usato dove serve un numero intero.', 'Le posizioni e i conteggi devono essere numeri interi (int). Per esempio usa int(x) o x // 2 invece di x / 2.'],
      fr: ['Un {1} a été utilisé là où il faut un nombre entier.', 'Les positions et les comptes doivent être des nombres entiers (int). Par exemple utilise int(x) ou x // 2 au lieu de x / 2.']
    },
    mult_seq: {
      en: ['A text or a list can only be multiplied by a whole number.', 'You can write "ab" * 3, but not "ab" * 1.5 or "ab" * "3". Use int(...) on the number.'],
      it: ['Un testo o una lista si può moltiplicare solo per un numero intero.', 'Puoi scrivere "ab" * 3, ma non "ab" * 1.5 né "ab" * "3". Usa int(...) sul numero.'],
      fr: ['Un texte ou une liste ne se multiplie que par un nombre entier.', 'Tu peux écrire "ab" * 3, mais pas "ab" * 1.5 ni "ab" * "3". Utilise int(...) sur le nombre.']
    },
    type_other: {
      en: ['A value of the wrong type was used.', 'Python says: {m}. Check what kind of value (number, text, list...) each part of this line holds.'],
      it: ['È stato usato un valore del tipo sbagliato.', 'Python dice: {m}. Controlla che tipo di valore (numero, testo, lista...) ha ogni parte di questa riga.'],
      fr: ['Une valeur du mauvais type a été utilisée.', 'Python dit : {m}. Vérifie quel genre de valeur (nombre, texte, liste...) contient chaque partie de cette ligne.']
    },
    int_literal: {
      en: ['{1} cannot be turned into a whole number.', 'int(...) only works on text that is a whole number, like "42". Spaces are fine, letters and points are not.'],
      it: ['{1} non si può trasformare in un numero intero.', 'int(...) funziona solo su un testo che è un numero intero, come "42". Gli spazi vanno bene, le lettere e i punti no.'],
      fr: ['{1} ne peut pas devenir un nombre entier.', 'int(...) ne marche que sur un texte qui est un nombre entier, comme "42". Les espaces passent, les lettres et les points non.']
    },
    float_literal: {
      en: ['{1} cannot be turned into a number with a point.', 'float(...) only works on text like "3.5". Use a point, not a comma, and no letters.'],
      it: ['{1} non si può trasformare in un numero con la virgola.', 'float(...) funziona solo su un testo come "3.5". Usa il punto, non la virgola, e niente lettere.'],
      fr: ['{1} ne peut pas devenir un nombre à virgule.', 'float(...) ne marche que sur un texte comme "3.5". Utilise le point, pas la virgule, et aucune lettre.']
    },
    math_domain: {
      en: ['This maths operation has no answer for this number.', 'For example a square root or a logarithm cannot be taken of a negative number.'],
      it: ['Questa operazione matematica non ha risposta per questo numero.', 'Per esempio non si può fare la radice quadrata o il logaritmo di un numero negativo.'],
      fr: ['Cette opération mathématique n\'a pas de réponse pour ce nombre.', 'Par exemple on ne peut pas prendre la racine carrée ou le logarithme d\'un nombre négatif.']
    },
    unpack_few: {
      en: ['There are too few values: {2} found, {1} needed.', 'Unpacking like a, b = something needs exactly as many values as names.'],
      it: ['Ci sono troppo pochi valori: {2} trovati, {1} necessari.', 'Spacchettare come a, b = qualcosa richiede esattamente tanti valori quanti nomi.'],
      fr: ['Il y a trop peu de valeurs : {2} trouvées, {1} nécessaires.', 'Dépaqueter comme a, b = quelque chose demande exactement autant de valeurs que de noms.']
    },
    unpack_many: {
      en: ['There are too many values: only {1} fit.', 'Unpacking like a, b = something needs exactly as many values as names.'],
      it: ['Ci sono troppi valori: ne entrano solo {1}.', 'Spacchettare come a, b = qualcosa richiede esattamente tanti valori quanti nomi.'],
      fr: ['Il y a trop de valeurs : seulement {1} rentrent.', 'Dépaqueter comme a, b = quelque chose demande exactement autant de valeurs que de noms.']
    },
    not_in_list: {
      en: ['That value is not in the list.', 'Check the value with `in` first: if x in my_list. It is also case sensitive.'],
      it: ['Quel valore non è nella lista.', 'Controlla prima il valore con `in`: if x in mia_lista. Conta anche la differenza tra maiuscole e minuscole.'],
      fr: ['Cette valeur n\'est pas dans la liste.', 'Vérifie d\'abord avec `in` : if x in ma_liste. Les majuscules et minuscules comptent aussi.']
    },
    value_other: {
      en: ['A value is right in type but wrong in content.', 'Python says: {m}.'],
      it: ['Un valore è del tipo giusto ma ha un contenuto sbagliato.', 'Python dice: {m}.'],
      fr: ['Une valeur a le bon type mais un mauvais contenu.', 'Python dit : {m}.']
    },
    index_list: {
      en: ['That position does not exist in the list.', 'A list with n items has positions 0 to n-1, and -1 is the last one. Check the position you ask for and len(list).'],
      it: ['Quella posizione non esiste nella lista.', 'Una lista con n elementi ha le posizioni da 0 a n-1, e -1 è l\'ultima. Controlla la posizione che chiedi e len(lista).'],
      fr: ['Cette position n\'existe pas dans la liste.', 'Une liste de n éléments a les positions de 0 à n-1, et -1 est la dernière. Vérifie la position demandée et len(liste).']
    },
    index_string: {
      en: ['That position does not exist in the text.', 'A text with n letters has positions 0 to n-1. Check the position you ask for and len(text).'],
      it: ['Quella posizione non esiste nel testo.', 'Un testo con n lettere ha le posizioni da 0 a n-1. Controlla la posizione che chiedi e len(testo).'],
      fr: ['Cette position n\'existe pas dans le texte.', 'Un texte de n lettres a les positions de 0 à n-1. Vérifie la position demandée et len(texte).']
    },
    index_tuple: {
      en: ['That position does not exist in the tuple.', 'A tuple with n items has positions 0 to n-1. Check the position you ask for.'],
      it: ['Quella posizione non esiste nella tupla.', 'Una tupla con n elementi ha le posizioni da 0 a n-1. Controlla la posizione che chiedi.'],
      fr: ['Cette position n\'existe pas dans le tuple.', 'Un tuple de n éléments a les positions de 0 à n-1. Vérifie la position demandée.']
    },
    pop_empty: {
      en: ['The list is empty, so nothing can be taken out.', 'Check with `if my_list:` before using pop().'],
      it: ['La lista è vuota, quindi non si può togliere niente.', 'Controlla con `if mia_lista:` prima di usare pop().'],
      fr: ['La liste est vide, on ne peut donc rien retirer.', 'Vérifie avec `if ma_liste:` avant d\'utiliser pop().']
    },
    index_other: {
      en: ['That position does not exist.', 'Python says: {m}.'],
      it: ['Quella posizione non esiste.', 'Python dice: {m}.'],
      fr: ['Cette position n\'existe pas.', 'Python dit : {m}.']
    },
    key_missing: {
      en: ['The key {1} is not in the dictionary.', 'A dictionary only knows the keys put in it. Check the spelling, or ask safely with my_dict.get(key).'],
      it: ['La chiave {1} non è nel dizionario.', 'Un dizionario conosce solo le chiavi che ci hai messo. Controlla come è scritta, oppure chiedi in modo sicuro con mio_dizionario.get(chiave).'],
      fr: ['La clé {1} n\'est pas dans le dictionnaire.', 'Un dictionnaire ne connaît que les clés qu\'on y a mises. Vérifie l\'orthographe, ou demande en sécurité avec mon_dico.get(clé).']
    },
    zero_division: {
      en: ['A number was divided by zero.', 'Dividing by zero has no answer. Check the value you divide by, or test it first with an if.'],
      it: ['Un numero è stato diviso per zero.', 'Dividere per zero non ha risposta. Controlla il valore per cui dividi, oppure provalo prima con un if.'],
      fr: ['Un nombre a été divisé par zéro.', 'Diviser par zéro n\'a pas de réponse. Vérifie la valeur par laquelle tu divises, ou teste-la d\'abord avec un if.']
    },
    no_attribute: {
      en: ['A {1} has no `{2}`.', 'The name after the dot is not something this kind of value can do or hold. Check the spelling and the type. If the value is None, an earlier step returned nothing.'],
      it: ['Un {1} non ha `{2}`.', 'Il nome dopo il punto non è qualcosa che questo tipo di valore sa fare o contenere. Controlla come è scritto e il tipo. Se il valore è None, un passo prima non ha restituito niente.'],
      fr: ['Un {1} n\'a pas de `{2}`.', 'Le nom après le point n\'est pas quelque chose que ce genre de valeur sait faire ou contenir. Vérifie l\'orthographe et le type. Si la valeur est None, une étape avant n\'a rien renvoyé.']
    },
    module_attr: {
      en: ['The module `{1}` has no `{2}`.', 'Check the spelling of the name after the dot, and what that module really offers.'],
      it: ['Il modulo `{1}` non ha `{2}`.', 'Controlla come è scritto il nome dopo il punto, e cosa offre davvero quel modulo.'],
      fr: ['Le module `{1}` n\'a pas de `{2}`.', 'Vérifie l\'orthographe du nom après le point, et ce que ce module offre vraiment.']
    },
    module_missing: {
      en: ['There is no module called `{1}`.', 'Check the spelling. Pyviel includes the standard library (math, random, datetime...) but not extra packages you would install.'],
      it: ['Non esiste un modulo chiamato `{1}`.', 'Controlla come è scritto. Pyviel include la libreria standard (math, random, datetime...) ma non i pacchetti extra che si installerebbero.'],
      fr: ['Il n\'existe pas de module appelé `{1}`.', 'Vérifie l\'orthographe. Pyviel inclut la bibliothèque standard (math, random, datetime...) mais pas les paquets supplémentaires qu\'on installerait.']
    },
    import_name: {
      en: ['`{2}` has no `{1}` to import.', 'Check the spelling of the name after import, and what that module really offers.'],
      it: ['`{2}` non ha niente chiamato `{1}` da importare.', 'Controlla come è scritto il nome dopo import, e cosa offre davvero quel modulo.'],
      fr: ['`{2}` n\'a rien appelé `{1}` à importer.', 'Vérifie l\'orthographe du nom après import, et ce que ce module offre vraiment.']
    },
    file_missing: {
      en: ['The file {1} was not found.', 'Python looks for files in its own small workspace. In Pyviel, create the file first by writing to it with open(name, "w").'],
      it: ['Il file {1} non è stato trovato.', 'Python cerca i file nel suo piccolo spazio di lavoro. In Pyviel, crea prima il file scrivendoci con open(nome, "w").'],
      fr: ['Le fichier {1} est introuvable.', 'Python cherche les fichiers dans son petit espace de travail. Dans Pyviel, crée d\'abord le fichier en y écrivant avec open(nom, "w").']
    },
    recursion: {
      en: ['A function kept calling itself and never stopped.', 'A recursive function needs a stopping case that returns without calling itself again. Check that each call gets closer to it.'],
      it: ['Una funzione ha continuato a richiamare se stessa senza fermarsi.', 'Una funzione ricorsiva ha bisogno di un caso di arresto che fa return senza richiamarsi. Controlla che ogni chiamata si avvicini a quel caso.'],
      fr: ['Une fonction s\'est rappelée elle-même sans jamais s\'arrêter.', 'Une fonction récursive a besoin d\'un cas d\'arrêt qui fait return sans se rappeler. Vérifie que chaque appel s\'en rapproche.']
    },
    eof: {
      en: ['The program asked for an answer, but there is nothing more to read.', 'input() waits for the person to type something. Here the input ended before an answer came.'],
      it: ['Il programma ha chiesto una risposta, ma non c\'è più niente da leggere.', 'input() aspetta che la persona scriva qualcosa. Qui l\'input è finito prima che arrivasse una risposta.'],
      fr: ['Le programme a demandé une réponse, mais il n\'y a plus rien à lire.', 'input() attend que la personne écrive quelque chose. Ici l\'entrée s\'est terminée avant qu\'une réponse arrive.']
    },
    assertion: {
      en: ['An assert failed: something that should be true is not.', 'assert checks that a condition is true. Here it was false, so Python stopped the program.'],
      it: ['Un assert è fallito: qualcosa che doveva essere vero non lo è.', 'assert controlla che una condizione sia vera. Qui era falsa, quindi Python ha fermato il programma.'],
      fr: ['Un assert a échoué : quelque chose qui devait être vrai ne l\'est pas.', 'assert vérifie qu\'une condition est vraie. Ici elle était fausse, donc Python a arrêté le programme.']
    },
    overflow: {
      en: ['The number is too big for this operation.', 'Python integers can be huge, but a decimal (float) cannot go past about 1e308.'],
      it: ['Il numero è troppo grande per questa operazione.', 'Gli interi di Python possono essere enormi, ma un decimale (float) non supera circa 1e308.'],
      fr: ['Le nombre est trop grand pour cette opération.', 'Les entiers de Python peuvent être énormes, mais un décimal (float) ne dépasse pas environ 1e308.']
    },
    stop_iteration: {
      en: ['There are no more items to take.', 'next(...) was called on something that has already given everything it had.'],
      it: ['Non ci sono più elementi da prendere.', 'next(...) è stato chiamato su qualcosa che ha già dato tutto quello che aveva.'],
      fr: ['Il n\'y a plus d\'éléments à prendre.', 'next(...) a été appelé sur quelque chose qui a déjà donné tout ce qu\'il avait.']
    },
    process_ended: {
      en: ['The program closed Python before it was done.', 'This happens with os._exit, or when a very low-level tool crashes. Nothing is wrong with Pyviel: change the program and press Run again.'],
      it: ['Il programma ha chiuso Python prima di finire.', 'Succede con os._exit, o quando uno strumento di bassissimo livello va in crash. Pyviel non ha niente che non va: cambia il programma e premi di nuovo Esegui.'],
      fr: ['Le programme a fermé Python avant d\'avoir fini.', 'Cela arrive avec os._exit, ou quand un outil de très bas niveau plante. Pyviel n\'a rien : change le programme et appuie à nouveau sur Lancer.']
    },
    internal: {
      en: ['Pyviel could not run your program.', 'The message is: {m}. Close Pyviel and open it again. If it keeps happening, tell us on GitHub.'],
      it: ['Pyviel non è riuscito a eseguire il tuo programma.', 'Il messaggio è: {m}. Chiudi Pyviel e aprilo di nuovo. Se continua, dillo a noi su GitHub.'],
      fr: ['Pyviel n\'a pas pu lancer ton programme.', 'Le message est : {m}. Ferme Pyviel et rouvre-le. Si cela continue, dis-le-nous sur GitHub.']
    },
    old_browser: {
      en: ['This browser cannot pause Python, so async and await cannot run here.', 'async needs a recent browser (Chrome, Edge or Brave 137 or later, or a recent Firefox or Safari). The rest of Python works as usual.'],
      it: ['Questo browser non riesce a mettere in pausa Python, quindi async e await non possono girare qui.', 'async ha bisogno di un browser recente (Chrome, Edge o Brave 137 o successivo, o un Firefox o Safari recente). Il resto di Python funziona come al solito.'],
      fr: ['Ce navigateur ne peut pas mettre Python en pause, donc async et await ne peuvent pas tourner ici.', 'async a besoin d\'un navigateur récent (Chrome, Edge ou Brave 137 ou plus récent, ou un Firefox ou Safari récent). Le reste de Python marche comme d\'habitude.']
    },
    raised: {
      en: ['The program raised a `{1}`.', 'The message is: {m}. It was raised on purpose with raise, or by a Python tool when something was not right.'],
      it: ['Il programma ha sollevato un `{1}`.', 'Il messaggio è: {m}. È stato sollevato apposta con raise, oppure da uno strumento di Python quando qualcosa non andava.'],
      fr: ['Le programme a levé un `{1}`.', 'Le message est : {m}. Il a été levé exprès avec raise, ou par un outil de Python quand quelque chose n\'allait pas.']
    }
  };

  var SUGGEST = {
    en: 'Did you mean {s}?',
    it: 'Volevi scrivere {s}?',
    fr: 'Tu voulais écrire {s} ?'
  };
  var LINE = {en: 'Line', it: 'Riga', fr: 'Ligne'};
  var FULL = {en: 'View full error', it: 'Mostra l\'errore completo', fr: 'Voir l\'erreur complète'};
  var HIDE = {en: 'Hide full error', it: 'Nascondi l\'errore completo', fr: 'Cacher l\'erreur complète'};
  var STOPPED = {en: 'The program was stopped.', it: 'Il programma è stato fermato.', fr: 'Le programme a été arrêté.'};

  // [error type or null for any, regular expression on the message, id]
  var PATTERNS = [
    ['SyntaxError', /^expected ':'/, 'colon'],
    ['SyntaxError', /^'(.)' was never closed/, 'never_closed'],
    ['SyntaxError', /^unterminated triple-quoted/, 'unterminated_triple'],
    ['SyntaxError', /^unterminated (?:string|f-string)/, 'unterminated_string'],
    ['SyntaxError', /^closing parenthesis '(.)' does not match opening parenthesis '(.)'/, 'mismatch'],
    ['SyntaxError', /^unmatched '(.)'/, 'unmatched'],
    ['SyntaxError', /^Missing parentheses in call to 'print'/, 'print_parens'],
    ['SyntaxError', /Perhaps you forgot a comma/, 'forgot_comma'],
    ['SyntaxError', /^cannot assign to (.+?)(?: here|$)/, 'cannot_assign'],
    ['SyntaxError', /Maybe you meant '==' (?:or ':=' )?instead of '='/, 'assign_equals'],
    ['SyntaxError', /^'return' outside function/, 'return_outside'],
    ['SyntaxError', /^'(break|continue)' outside loop|^'(break|continue)' not properly in loop/, 'loop_outside'],
    ['SyntaxError', /^invalid decimal literal|^invalid (?:hexadecimal|octal|binary) literal/, 'bad_number'],
    ['SyntaxError', /^invalid character|^invalid non-printable character/, 'bad_char'],
    ['SyntaxError', /^f-string/, 'fstring'],
    ['SyntaxError', /^expected 'except' or 'finally' block/, 'try_without_except'],
    ['SyntaxError', /^unexpected EOF/, 'unexpected_eof'],
    ['IndentationError', /^expected an indented block/, 'expected_indent'],
    ['IndentationError', /^unexpected indent/, 'unexpected_indent'],
    ['IndentationError', /^unindent does not match/, 'unindent_mismatch'],
    ['TabError', /^/, 'tabs'],
    ['IndentationError', /^/, 'syntax_other'],
    ['SyntaxError', /^/, 'syntax_other'],
    ['NameError', /^name '(.+)' is not defined/, 'name_undefined'],
    ['UnboundLocalError', /'(.+)'/, 'unbound_local'],
    ['TypeError', /^can only concatenate str \(not "(.+)"\) to str/, 'concat_str'],
    ['TypeError', /^unsupported operand type\(s\) for (.+?): '(.+?)' and '(.+?)'/, 'unsupported_operands'],
    ['TypeError', /^'(.+?)' object is not callable/, 'not_callable'],
    ['TypeError', /^'(.+?)' object is not subscriptable/, 'not_subscriptable'],
    ['TypeError', /^'(.+?)' object does not support item assignment/, 'no_item_assignment'],
    ['TypeError', /^object of type '(.+?)' has no len\(\)/, 'no_len'],
    ['TypeError', /^'(.+?)' object is not iterable/, 'not_iterable'],
    ['TypeError', /^(.+?)\(\) missing (\d+) required (?:positional|keyword-only) arguments?: (.+)/, 'missing_args'],
    ['TypeError', /^(.+?)\(\) takes (.+?) positional arguments? but (\d+) (?:was|were) given/, 'too_many_args'],
    ['TypeError', /^(.+?)\(\) got an unexpected keyword argument '(.+?)'/, 'unexpected_kw'],
    ['TypeError', /^'(<|>|<=|>=)' not supported between instances of '(.+?)' and '(.+?)'/, 'not_ordered'],
    ['TypeError', /unhashable type: '(.+?)'/, 'unhashable'],
    ['TypeError', /^'(.+?)' object cannot be interpreted as an integer/, 'not_integer'],
    ['TypeError', /indices must be integers or slices, not (.+)/, 'not_integer'],
    ['TypeError', /^can't multiply sequence by non-int of type '(.+?)'/, 'mult_seq'],
    ['TypeError', /^/, 'type_other'],
    ['ValueError', /^invalid literal for int\(\) with base 10: (.+)/, 'int_literal'],
    ['ValueError', /^could not convert string to float: (.+)/, 'float_literal'],
    ['ValueError', /^math domain error|^expected a (?:nonnegative|positive) input/, 'math_domain'],
    ['ValueError', /^not enough values to unpack \(expected (\d+), got (\d+)\)/, 'unpack_few'],
    ['ValueError', /^too many values to unpack \(expected (\d+)/, 'unpack_many'],
    ['ValueError', /not in list|\.remove\(x\): x not in list/, 'not_in_list'],
    ['ValueError', /^/, 'value_other'],
    ['IndexError', /^list index out of range|^list assignment index out of range/, 'index_list'],
    ['IndexError', /^string index out of range/, 'index_string'],
    ['IndexError', /^tuple index out of range/, 'index_tuple'],
    ['IndexError', /^pop from empty list/, 'pop_empty'],
    ['IndexError', /^/, 'index_other'],
    ['KeyError', /^(.*)$/, 'key_missing'],
    ['ZeroDivisionError', /^/, 'zero_division'],
    ['AttributeError', /^'(.+?)' object has no attribute '(.+?)'/, 'no_attribute'],
    ['AttributeError', /^module '(.+?)' has no attribute '(.+?)'/, 'module_attr'],
    ['ModuleNotFoundError', /^No module named '(.+?)'/, 'module_missing'],
    ['ImportError', /^cannot import name '(.+?)' from '(.+?)'/, 'import_name'],
    ['FileNotFoundError', /: '(.+)'$/, 'file_missing'],
    ['RecursionError', /^/, 'recursion'],
    ['EOFError', /^/, 'eof'],
    ['RuntimeError', /stack switch|WebAssembly stack switching/, 'old_browser'],
    ['InternalError', /^Python stopped on its own/, 'process_ended'],
    ['InternalError', /^/, 'internal'],
    ['AssertionError', /^/, 'assertion'],
    ['OverflowError', /^/, 'overflow'],
    ['StopIteration', /^/, 'stop_iteration']
  ];

  function fill(text, parts, message) {
    return text
      .replace(/\{(\d)\}/g, function (_, n) { return parts[Number(n)] === undefined ? '' : parts[Number(n)]; })
      .replace(/\{m\}/g, message)
      .replace(/\{s\}/g, parts.s === undefined ? '' : parts.s);
  }

  function pick(error) {
    var kind = error.type, message = error.message || '';
    for (var i = 0; i < PATTERNS.length; i++) {
      var rule = PATTERNS[i];
      if (rule[0] !== kind) continue;
      var m = rule[1].exec(message);
      if (m) return {id: rule[2], parts: m};
    }
    return {id: 'raised', parts: [message, kind]};
  }

  function explain(error, lang) {
    lang = TEXTS.colon[lang] ? lang : 'en';
    var found = pick(error);
    var parts = found.parts.slice();
    if (found.id === 'raised') parts = ['', error.type];
    if (found.id === 'file_missing' && parts[1]) parts[1] = "'" + parts[1] + "'";
    if (found.id === 'loop_outside') parts[1] = parts[1] || parts[2];
    var text = TEXTS[found.id][lang];
    var message = error.message || '';
    var title = fill(text[0], parts, message);
    var caption = fill(text[1], parts, message);
    var suggestion = error.suggestion ? fill(SUGGEST[lang], {s: '`' + error.suggestion + '`'}, message) : '';
    return {id: found.id, title: title, caption: caption, suggestion: suggestion};
  }

  return {
    explain: explain,
    ids: function () { return Object.keys(TEXTS); },
    languages: ['en', 'it', 'fr'],
    words: {line: LINE, viewFull: FULL, hideFull: HIDE, stopped: STOPPED},
    texts: TEXTS
  };
});
