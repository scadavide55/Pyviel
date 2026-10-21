// Stage 1 · Comparing, choosing and repeating. See tools/build-course.js for the format.
const c = String.raw;

module.exports = [
  {
    title: ['True and false', 'Vero e falso', 'Vrai et faux'],
    subtitle: ['Comparing things', 'Confrontare le cose', 'Comparer des choses'],
    steps: [
      {
        c: c`print(5 > 3)
print(5 < 3)
print(10 > 20)`,
        n: ['>', '<'],
        t: ['Yes or no', 'Sì o no', 'Oui ou non'],
        x: [`A program often needs to ask a question. A comparison is a question, and the answer is always True or False.

5 > 3 asks "is 5 bigger than 3?" and the answer is True. 5 < 3 asks "is 5 smaller than 3?" and the answer is False. Note the capital letter: True, not true.`,
          `Un programma ha spesso bisogno di fare una domanda. Un confronto è una domanda, e la risposta è sempre True o False.

5 > 3 chiede "5 è più grande di 3?" e la risposta è True. 5 < 3 chiede "5 è più piccolo di 3?" e la risposta è False. Nota la lettera maiuscola: True, non true.`,
          `Un programme a souvent besoin de poser une question. Une comparaison est une question, et la réponse est toujours True ou False.

5 > 3 demande "5 est-il plus grand que 3 ?" et la réponse est True. 5 < 3 demande "5 est-il plus petit que 3 ?" et la réponse est False. Remarque la majuscule : True, pas true.`],
        ex: {
          uses: ['>'],
          t: ['Ask if 10 is bigger than 20, and show the answer.', 'Chiedi se 10 è più grande di 20 e mostra la risposta.', 'Demande si 10 est plus grand que 20 et affiche la réponse.'],
          h: ['The sign > asks "is the left one bigger?". Put the whole question inside print.', 'Il segno > chiede "quello a sinistra è più grande?". Metti tutta la domanda dentro print.', 'Le signe > demande "celui de gauche est-il plus grand ?". Mets toute la question dans print.'],
          sol: 'print(10 > 20)', out: 'False'
        }
      },
      {
        c: c`age = 12
print(age == 12)
print(age != 12)
print(age == 13)`,
        n: ['==', '!='],
        t: ['Equal, or not equal', 'Uguale, o diverso', 'Égal, ou différent'],
        x: [`To ask "are these two equal?" you write two equal signs: ==. To ask "are they different?" you write !=.

Careful: one equal sign = puts a value in a box. Two equal signs == ask a question. They are very different.`,
          `Per chiedere "questi due sono uguali?" scrivi due segni uguale: ==. Per chiedere "sono diversi?" scrivi !=.

Attenzione: un segno uguale = mette un valore in una scatola. Due segni uguale == fanno una domanda. Sono molto diversi.`,
          `Pour demander "ces deux-là sont-ils égaux ?" tu écris deux signes égal : ==. Pour demander "sont-ils différents ?" tu écris !=.

Attention : un seul signe égal = met une valeur dans une boîte. Deux signes égal == posent une question. Ils sont très différents.`],
        ex: {
          t: ['Ask if 3 + 4 is equal to 7, and show the answer.', 'Chiedi se 3 + 4 è uguale a 7 e mostra la risposta.', 'Demande si 3 + 4 est égal à 7 et affiche la réponse.'],
          h: ['To ask "is it equal?" use two equal signs. One = would put a value in a box.', 'Per chiedere "è uguale?" usa due segni uguale. Un solo = metterebbe un valore in una scatola.', 'Pour demander "est-ce égal ?" utilise deux signes égal. Un seul = mettrait une valeur dans une boîte.'],
          sol: 'print(3 + 4 == 7)', out: 'True', c: '=='
        },
        w: ['Writing age = 12 where you wanted age == 12 is the most common slip. Pyviel will tell you.', 'Scrivere age = 12 dove volevi age == 12 è la distrazione più comune. Pyviel te lo dice.', 'Écrire age = 12 là où tu voulais age == 12 est la distraction la plus courante. Pyviel te le dit.']
      },
      {
        c: c`age = 12
print(age >= 10)
print(age <= 10)
print(age >= 12)`,
        n: ['>=', '<='],
        t: ['Bigger or equal', 'Più grande o uguale', 'Plus grand ou égal'],
        x: [`>= means "bigger than, or equal to". <= means "smaller than, or equal to".

The equal sign always comes second: >=, not =>. 12 >= 12 is True, because 12 is equal to 12.`,
          `>= vuol dire "più grande di, o uguale a". <= vuol dire "più piccolo di, o uguale a".

Il segno uguale viene sempre per secondo: >=, non =>. 12 >= 12 è True, perché 12 è uguale a 12.`,
          `>= veut dire "plus grand que, ou égal à". <= veut dire "plus petit que, ou égal à".

Le signe égal vient toujours en second : >=, pas =>. 12 >= 12 est True, parce que 12 est égal à 12.`],
        ex: {
          t: ['Ask if 18 is at least 18 (bigger or equal), and show the answer.', 'Chiedi se 18 è almeno 18 (più grande o uguale) e mostra la risposta.', 'Demande si 18 est au moins 18 (plus grand ou égal) et affiche la réponse.'],
          h: ['"Bigger or equal" is written with two signs next to each other: first >, then =.', '"Maggiore o uguale" si scrive con due segni vicini: prima >, poi =.', '"Plus grand ou égal" s\'écrit avec deux signes collés : d\'abord >, puis =.'],
          sol: 'print(18 >= 18)', out: 'True', c: '>='
        }
      },
      {
        c: [c`print("cat" == "cat")
print("cat" == "Cat")
print("apple" < "banana")`, c`print("gatto" == "gatto")
print("gatto" == "Gatto")
print("mela" < "pera")`, c`print("chat" == "chat")
print("chat" == "Chat")
print("abricot" < "banane")`],
        t: ['Comparing text', 'Confrontare il testo', 'Comparer du texte'],
        x: [`Texts can be compared too. == is True only if they are exactly the same, capital letters included.

< and > follow the order of the alphabet: "apple" comes before "banana", so "apple" < "banana" is True.`,
          `Anche i testi si possono confrontare. == è True solo se sono esattamente uguali, maiuscole comprese.

< e > seguono l'ordine dell'alfabeto: "mela" viene prima di "pera", quindi "mela" < "pera" è True.`,
          `Les textes aussi peuvent être comparés. == est True seulement s'ils sont exactement pareils, majuscules comprises.

< et > suivent l'ordre de l'alphabet : "abricot" vient avant "banane", donc "abricot" < "banane" est True.`],
        ex: {
          t: ['Ask if "apple" is equal to "Apple", and show the answer.', 'Chiedi se "mela" è uguale a "Mela" e mostra la risposta.', 'Demande si "pomme" est égal à "Pomme" et affiche la réponse.'],
          h: ['Compare the two texts with ==. Think: does a capital letter count as the same letter?', 'Confronta i due testi con ==. Pensa: una lettera maiuscola conta come la stessa lettera?', 'Compare les deux textes avec ==. Réfléchis : une majuscule compte-t-elle comme la même lettre ?'],
          sol: ['print("apple" == "Apple")', 'print("mela" == "Mela")', 'print("pomme" == "Pomme")'], out: 'False', c: '=='
        }
      },
      {
        c: [c`print("a" in "banana")
print("z" in "banana")
print("nan" in "banana")`, c`print("a" in "banana")
print("z" in "banana")
print("nan" in "banana")`, c`print("a" in "banane")
print("z" in "banane")
print("nan" in "banane")`],
        n: ['in'],
        t: ['Is it inside?', 'Sta dentro?', 'Est-ce dedans ?'],
        x: [`The word in asks "is this one inside that one?". For a text, it asks whether some letters are part of it.

"a" in "banana" is True. "z" in "banana" is False. It can look for a longer piece too.`,
          `La parola in chiede "questo sta dentro quello?". Per un testo, chiede se alcune lettere ne fanno parte.

"a" in "banana" è True. "z" in "banana" è False. Può cercare anche un pezzo più lungo.`,
          `Le mot in demande "celui-ci est-il dans celui-là ?". Pour un texte, il demande si des lettres en font partie.

"a" in "banane" est True. "z" in "banane" est False. Il peut chercher aussi un morceau plus long.`],
        ex: {
          t: ['Ask if "py" is inside "python", and show the answer.', 'Chiedi se "py" sta dentro "python" e mostra la risposta.', 'Demande si "py" est dans "python" et affiche la réponse.'],
          h: ['The word in asks if one text is inside another: the small text goes on the left.', 'La parola in chiede se un testo è dentro un altro: il testo piccolo va a sinistra.', 'Le mot in demande si un texte est dans un autre : le petit texte va à gauche.'],
          sol: 'print("py" in "python")', out: 'True', c: ' in '
        }
      },
      {
        c: c`age = 12
print(age > 10 and age < 15)
print(age < 10 or age == 12)
print(not age == 12)`,
        n: ['and', 'or', 'not'],
        t: ['and, or, not', 'and, or, not: unire le domande', 'and, or, not : relier des questions'],
        x: [`You can join questions. and needs both questions to be True. or needs at least one of them to be True. not turns True into False.

The first line asks "is age bigger than 10 and smaller than 15?". Both are true, so the answer is True.`,
          `Puoi unire le domande. and vuole che tutte e due le domande siano True. or vuole che almeno una sia True. not trasforma True in False.

La prima riga chiede "age è più grande di 10 e più piccolo di 15?". Sono vere tutte e due, quindi la risposta è True.`,
          `Tu peux relier des questions. and veut que les deux questions soient True. or veut qu'au moins une soit True. not transforme True en False.

La première ligne demande "age est-il plus grand que 10 et plus petit que 15 ?". Les deux sont vraies, donc la réponse est True.`],
        ex: {
          t: ['The number is 150. Ask if it is smaller than 0 or bigger than 100, and show the answer.', 'Il numero è 150. Chiedi se è più piccolo di 0 o più grande di 100 e mostra la risposta.', 'Le nombre est 150. Demande s\'il est plus petit que 0 ou plus grand que 100 et affiche la réponse.'],
          h: ['Two comparisons joined by or: the answer is True if at least one of them is true.', 'Due confronti uniti da or: la risposta è True se almeno uno dei due è vero.', 'Deux comparaisons reliées par or : la réponse est True si au moins l\'une est vraie.'],
          start: 'number = 150', sol: 'number = 150\nprint(number < 0 or number > 100)', out: 'True', c: ' or '
        }
      },
      {
        c: c`age = 12
print(10 < age < 15)
print(10 < age < 11)`,
        t: ['Between two numbers', 'Tra due numeri', 'Entre deux nombres'],
        x: [`Python lets you chain comparisons like in maths: 10 < age < 15 asks "is age between 10 and 15?".

It is the same as age > 10 and age < 15, but shorter and easy to read.`,
          `Python ti lascia concatenare i confronti come in matematica: 10 < age < 15 chiede "age è tra 10 e 15?".

È come age > 10 and age < 15, ma più corto e facile da leggere.`,
          `Python te laisse enchaîner les comparaisons comme en maths : 10 < age < 15 demande "age est-il entre 10 et 15 ?".

C'est pareil que age > 10 and age < 15, mais plus court et facile à lire.`],
        ex: {
          t: ['Ask if 5 is between 1 and 10, with one chained comparison, and show the answer.', 'Chiedi se 5 è tra 1 e 10, con un solo confronto concatenato, e mostra la risposta.', 'Demande si 5 est entre 1 et 10, avec une seule comparaison enchaînée, et affiche la réponse.'],
          h: ['Write it as in maths: the small number, <, the number to test, <, the big number.', 'Scrivilo come in matematica: il numero piccolo, <, il numero da provare, <, il numero grande.', 'Écris-le comme en maths : le petit nombre, <, le nombre à tester, <, le grand nombre.'],
          sol: 'print(1 < 5 < 10)', out: 'True', c: '<.*<'
        }
      },
      {
        c: [c`print(bool(0), bool(1))
print(bool(""), bool("hi"))
name = ""
print(not name)`, c`print(bool(0), bool(1))
print(bool(""), bool("ciao"))
name = ""
print(not name)`, c`print(bool(0), bool(1))
print(bool(""), bool("salut"))
name = ""
print(not name)`],
        n: ['bool'],
        t: ['What counts as false', 'Cosa conta come falso', 'Ce qui compte pour faux'],
        x: [`In a question, Python also treats some values as False: the number 0 and an empty text "". Almost everything else counts as True.

bool(...) shows how Python sees a value. It is a handy way to ask "is there anything in it?".`,
          `In una domanda, Python tratta come False anche alcuni valori: il numero 0 e un testo vuoto "". Quasi tutto il resto conta come True.

bool(...) mostra come Python vede un valore. È un modo comodo per chiedere "c'è qualcosa dentro?".`,
          `Dans une question, Python traite aussi certaines valeurs comme False : le nombre 0 et un texte vide "". Presque tout le reste compte pour True.

bool(...) montre comment Python voit une valeur. C'est une façon pratique de demander "y a-t-il quelque chose dedans ?".`],
        ex: {
          t: ['Predict first: what does bool("False") show? Then run it and check.', 'Prima prevedi: cosa mostra bool("Falso")? Poi eseguilo e controlla.', 'Prévois d\'abord : que montre bool("Faux") ? Puis lance-le et vérifie.'],
          h: ['The text "False" is not empty, so it counts as...', 'Il testo "Falso" non è vuoto, quindi conta come...', 'Le texte "Faux" n\'est pas vide, donc il compte comme...'],
          sol: ['print(bool("False"))', 'print(bool("Falso"))', 'print(bool("Faux"))'], out: 'True', c: 'bool'
        },
        w: ['bool("False") is True: any text that is not empty is True, whatever it says.', 'bool("Falso") è True: qualsiasi testo non vuoto è True, qualunque cosa dica.', 'bool("Faux") est True : tout texte non vide est True, quoi qu\'il dise.']
      },
      {
        c: c`result = None
print(result)
print(type(result))
print(None == 0)`,
        n: ['None'],
        t: ['Nothing: None', 'Niente: None', 'Rien : None'],
        x: [`None is a special value that means "nothing here". It is not 0 and it is not an empty text: it is the lack of a value.

Python uses it when something has no answer.`,
          `None è un valore speciale che vuol dire "qui non c'è niente". Non è 0 e non è un testo vuoto: è l'assenza di un valore.

Python lo usa quando qualcosa non ha una risposta.`,
          `None est une valeur spéciale qui veut dire "rien ici". Ce n'est pas 0 et ce n'est pas un texte vide : c'est l'absence de valeur.

Python l'utilise quand quelque chose n'a pas de réponse.`],
        ex: {
          uses: ['=', 'None'],
          t: ['Put None in a box called answer and show the box.', 'Metti None in una scatola che si chiama answer e mostra la scatola.', 'Mets None dans une boîte qui s\'appelle answer et affiche la boîte.'],
          h: ['None is written with a capital N and no quotes. Then show the box.', 'None si scrive con la N maiuscola e senza virgolette. Poi mostra la scatola.', 'None s\'écrit avec un N majuscule et sans guillemets. Puis affiche la boîte.'],
          sol: 'answer = None\nprint(answer)', out: 'None', c: 'None'
        }
      },
      {
        c: c`age = 15
has_ticket = True
print(age >= 12 and has_ticket)
print("a" in "cat" or age > 18)
print(not has_ticket)`,
        t: ['Challenge: a password check', 'Sfida: controlla una password', 'Défi : vérifie un mot de passe'],
        x: [`Comparisons give True or False, and and, or and not join them into bigger questions.

and needs both sides to be true, or needs at least one, and not turns the answer around.`,
          `I confronti danno True o False, e si possono unire in domande più grandi.

and vuole veri tutti e due i lati, or ne vuole almeno uno, e not rovescia la risposta.`,
          `Les comparaisons donnent True ou False, et on peut les relier en questions plus grandes.

and veut que les deux côtés soient vrais, or en veut au moins un, et not retourne la réponse.`],
        ex: {
          t: ['A password is good when it has at least 8 letters and does not have the word password inside. The box pw holds sunflower7. Show whether it is good (True).', 'Una password è buona quando ha almeno 8 caratteri e non ha dentro la parola password. La scatola pw contiene girasole77. Mostra se è buona (True).', 'Un mot de passe est bon quand il a au moins 8 caractères et ne contient pas le mot password. La boîte pw contient tournesol7. Affiche s\'il est bon (True).'],
          h: ['Two questions joined by and: one uses len and >=, the other uses not with in.', 'Due domande unite da and: una usa len e >=, l\'altra usa not con in.', 'Deux questions reliées par and : l\'une utilise len et >=, l\'autre utilise not avec in.'],
          start: ['pw = "sunflower7"', 'pw = "girasole77"', 'pw = "tournesol7"'],
          sol: ['pw = "sunflower7"\nprint(len(pw) >= 8 and not "password" in pw)', 'pw = "girasole77"\nprint(len(pw) >= 8 and not "password" in pw)', 'pw = "tournesol7"\nprint(len(pw) >= 8 and not "password" in pw)'],
          out: 'True', c: 'len\\([\\s\\S]*and'
        }
      }
    ]
  },
  {
    title: ['Make choices', 'Fai scelte', 'Fais des choix'],
    subtitle: ['if, else and elif', 'if, else ed elif', 'if, else et elif'],
    steps: [
      {
        c: [c`age = 12
if age >= 10:
    print("You can come in")
print("The end")`, c`age = 12
if age >= 10:
    print("Puoi entrare")
print("Fine")`, c`age = 12
if age >= 10:
    print("Tu peux entrer")
print("Fin")`],
        n: ['if'],
        t: ['If this, then that', 'Se questo, allora quello', 'Si ceci, alors cela'],
        x: [`Now the program can choose. if is followed by a question and a colon. The lines pushed in under it (4 spaces) run only when the answer is True.

Here the age is 12, so the pushed-in line runs. The last line is not pushed in, so it always runs.`,
          `Ora il programma può scegliere. if è seguito da una domanda e dai due punti. Le righe rientrate sotto (di 4 spazi) girano solo quando la risposta è True.

Qui l'età è 12, quindi la riga rientrata gira. L'ultima riga non è rientrata, quindi gira sempre.`,
          `Maintenant le programme peut choisir. if est suivi d'une question et de deux points. Les lignes décalées dessous (de 4 espaces) ne tournent que quand la réponse est True.

Ici l'âge est 12, donc la ligne décalée tourne. La dernière ligne n'est pas décalée, donc elle tourne toujours.`],
        ex: {
          t: ['Make the program say Welcome only if number is 18 or more. The number is 20, so Welcome must appear.', 'Fai dire al programma Benvenuto solo se number è 18 o più. Il numero è 20, quindi Benvenuto deve comparire.', 'Fais dire Bienvenue au programme seulement si number vaut 18 ou plus. Le nombre est 20, donc Bienvenue doit apparaître.'],
          h: ['The if line ends with a colon. The line that must run only sometimes goes under it, pushed in with 4 spaces.', 'La riga if finisce con i due punti. La riga che deve girare solo a volte va sotto, rientrata di 4 spazi.', 'La ligne if se termine par deux-points. La ligne qui ne doit tourner que parfois va dessous, décalée de 4 espaces.'],
          start: ['number = 20\nprint("Welcome")', 'number = 20\nprint("Benvenuto")', 'number = 20\nprint("Bienvenue")'],
          sol: ['number = 20\nif number >= 18:\n    print("Welcome")', 'number = 20\nif number >= 18:\n    print("Benvenuto")', 'number = 20\nif number >= 18:\n    print("Bienvenue")'], out: ['Welcome', 'Benvenuto', 'Bienvenue'], c: 'if '
        },
        w: ['Do not forget the colon at the end of the if line, and the 4 spaces before the lines inside.', 'Non dimenticare i due punti alla fine della riga if e i 4 spazi prima delle righe dentro.', 'N\'oublie pas les deux points à la fin de la ligne if et les 4 espaces avant les lignes dedans.']
      },
      {
        c: [c`age = 8
if age >= 10:
    print("You can come in")
else:
    print("Too young, sorry")`, c`age = 8
if age >= 10:
    print("Puoi entrare")
else:
    print("Troppo piccolo, scusa")`, c`age = 8
if age >= 10:
    print("Tu peux entrer")
else:
    print("Trop jeune, désolé")`],
        n: ['else'],
        t: ['Otherwise: else', 'Altrimenti: else', 'Sinon : else'],
        x: [`else means "otherwise". Its lines run when the question of the if was not True.

So exactly one of the two groups of lines runs: never both, never none.`,
          `else vuol dire "altrimenti". Le sue righe girano quando la domanda dell'if non era True.

Quindi gira esattamente uno dei due gruppi di righe: mai tutti e due, mai nessuno.`,
          `else veut dire "sinon". Ses lignes tournent quand la question du if n'était pas True.

Donc exactement un des deux groupes de lignes tourne : jamais les deux, jamais aucun.`],
        ex: {
          t: ['The number is 12. Show Adult if it is 18 or more, and Child if not.', 'Il numero è 12. Mostra Adulto se è 18 o più, e Bambino se no.', 'Le nombre est 12. Affiche Adulte s\'il vaut 18 ou plus, et Enfant sinon.'],
          h: ['An if with its pushed-in print, then else: at the same level as the if, with its own pushed-in print.', 'Un if con il suo print rientrato, poi else: allo stesso livello dell\'if, con il suo print rientrato.', 'Un if avec son print décalé, puis else: au même niveau que le if, avec son propre print décalé.'],
          start: 'number = 12', sol: ['number = 12\nif number >= 18:\n    print("Adult")\nelse:\n    print("Child")', 'number = 12\nif number >= 18:\n    print("Adulto")\nelse:\n    print("Bambino")', 'number = 12\nif number >= 18:\n    print("Adulte")\nelse:\n    print("Enfant")'], out: ['Child', 'Bambino', 'Enfant'], c: 'else'
        }
      },
      {
        c: c`score = 75
if score >= 90:
    print("A")
elif score >= 70:
    print("B")
else:
    print("C")`,
        n: ['elif'],
        t: ['Many roads: elif', 'Molte strade: elif', 'Plusieurs routes : elif'],
        x: [`When there are more than two roads, use elif, which means "else, if". Python asks the questions in order and takes the first road whose question is True.

Only one road is taken. Here 75 is not 90 or more, but it is 70 or more, so the answer is B.`,
          `Quando le strade sono più di due, usa elif, che vuol dire "altrimenti, se". Python fa le domande in ordine e prende la prima strada la cui domanda è True.

Si prende una sola strada. Qui 75 non è 90 o più, ma è 70 o più, quindi la risposta è B.`,
          `Quand il y a plus de deux routes, utilise elif, qui veut dire "sinon, si". Python pose les questions dans l'ordre et prend la première route dont la question est True.

On ne prend qu'une seule route. Ici 75 n'est pas 90 ou plus, mais est 70 ou plus, donc la réponse est B.`],
        ex: {
          t: ['The score is 55. Show A for 90 or more, B for 70 or more, C for 50 or more, and F otherwise.', 'Il punteggio è 55. Mostra A per 90 o più, B per 70 o più, C per 50 o più, e F altrimenti.', 'Le score est 55. Affiche A pour 90 ou plus, B pour 70 ou plus, C pour 50 ou plus, et F sinon.'],
          h: ['Use if, then two elif lines, then else.', 'Usa if, poi due righe elif, poi else.', 'Utilise if, puis deux lignes elif, puis else.'],
          start: 'score = 55', sol: 'score = 55\nif score >= 90:\n    print("A")\nelif score >= 70:\n    print("B")\nelif score >= 50:\n    print("C")\nelse:\n    print("F")', out: 'C', c: 'elif'
        }
      },
      {
        c: [c`age = 15
has_ticket = True
if age >= 12 and has_ticket:
    print("Welcome to the show")
if age < 5 or age > 65:
    print("Free entry")`, c`age = 15
has_ticket = True
if age >= 12 and has_ticket:
    print("Benvenuto allo spettacolo")
if age < 5 or age > 65:
    print("Ingresso gratuito")`, c`age = 15
has_ticket = True
if age >= 12 and has_ticket:
    print("Bienvenue au spectacle")
if age < 5 or age > 65:
    print("Entrée gratuite")`],
        t: ['Combine questions', 'Combina le domande', 'Combine des questions'],
        x: [`Remember and and or? They fit well inside an if. The lines run only when the whole question is True.

Here the first if needs the age and the ticket. The second needs a very young or a very old visitor. Here it is False, so nothing shows.`,
          `Ricordi and e or? Stanno bene dentro un if. Le righe girano solo quando tutta la domanda è True.

Qui il primo if vuole sia l'età sia il biglietto. Il secondo vuole un visitatore molto piccolo o molto anziano. Qui è False, quindi non si vede niente.`,
          `Tu te souviens de and et or ? Ils vont bien dans un if. Les lignes ne tournent que quand toute la question est True.

Ici le premier if veut l'âge et le billet. Le deuxième veut un visiteur très jeune ou très âgé. Ici c'est False, donc rien ne s'affiche.`],
        ex: {
          t: ['The number is 15. Show Ok only if it is bigger than 10 and smaller than 20.', 'Il numero è 15. Mostra Ok solo se è più grande di 10 e più piccolo di 20.', 'Le nombre est 15. Affiche Ok seulement s\'il est plus grand que 10 et plus petit que 20.'],
          h: ['Write if, then the two questions joined with and, then a colon.', 'Scrivi if, poi le due domande unite da and, poi i due punti.', 'Écris if, puis les deux questions reliées par and, puis deux points.'],
          start: 'number = 15', sol: 'number = 15\nif number > 10 and number < 20:\n    print("Ok")', out: 'Ok', c: ' and '
        }
      },
      {
        c: [c`age = 20
has_ticket = False
if age >= 12:
    if has_ticket:
        print("Come in")
    else:
        print("Buy a ticket first")
else:
    print("Too young")`, c`age = 20
has_ticket = False
if age >= 12:
    if has_ticket:
        print("Entra")
    else:
        print("Prima compra il biglietto")
else:
    print("Troppo piccolo")`, c`age = 20
has_ticket = False
if age >= 12:
    if has_ticket:
        print("Entre")
    else:
        print("Achète d'abord un billet")
else:
    print("Trop jeune")`],
        t: ['A choice inside a choice', 'Una scelta dentro una scelta', 'Un choix dans un choix'],
        x: [`A line pushed in under an if can be another if. Each level of pushing in belongs to the line above it.

Read it from the top: first the age is checked, and only for people who are old enough, the ticket is checked next.`,
          `Una riga rientrata sotto un if può essere un altro if. Ogni livello di rientro appartiene alla riga sopra.

Leggilo dall'alto: prima si controlla l'età, e solo per chi è abbastanza grande si controlla poi il biglietto.`,
          `Une ligne décalée sous un if peut être un autre if. Chaque niveau de décalage appartient à la ligne du dessus.

Lis-le depuis le haut : on vérifie d'abord l'âge, et seulement pour les personnes assez grandes on vérifie ensuite le billet.`],
        ex: {
          t: ['The number is 8. If it is bigger than 0, then show Even for a number that leaves 0 when divided by 2 (use %), and Odd otherwise. If it is not bigger than 0, show Not positive.', 'Il numero è 8. Se è più grande di 0, mostra Pari se la divisione per 2 non avanza niente (usa %), e Dispari altrimenti. Se non è più grande di 0, mostra Non positivo.', 'Le nombre est 8. S\'il est plus grand que 0, affiche Pair si le reste de la division par 2 est 0 (utilise %), et Impair sinon. S\'il n\'est pas plus grand que 0, affiche Pas positif.'],
          h: ['Two levels of if. The outer if asks if the number is bigger than 0; inside it, pushed in further, a second if with % asks if it is even, with its own else. The outer if gets an else too.', 'Due livelli di if. L\'if di fuori chiede se il numero è più grande di 0; dentro, rientrato di più, un secondo if con % chiede se è pari, con il suo else. Anche l\'if di fuori ha un else.', 'Deux niveaux de if. Le if extérieur demande si le nombre est plus grand que 0 ; dedans, plus décalé, un second if avec % demande s\'il est pair, avec son propre else. Le if extérieur a aussi un else.'],
          start: 'number = 8',
          sol: ['number = 8\nif number > 0:\n    if number % 2 == 0:\n        print("Even")\n    else:\n        print("Odd")\nelse:\n    print("Not positive")', 'number = 8\nif number > 0:\n    if number % 2 == 0:\n        print("Pari")\n    else:\n        print("Dispari")\nelse:\n    print("Non positivo")', 'number = 8\nif number > 0:\n    if number % 2 == 0:\n        print("Pair")\n    else:\n        print("Impair")\nelse:\n    print("Pas positif")'],
          out: ['Even', 'Pari', 'Pair'], c: 'if[\\s\\S]*if'
        }
      },
      {
        c: [c`age = 20
status = "adult" if age >= 18 else "child"
print(status)`, c`age = 20
status = "adulto" if age >= 18 else "bambino"
print(status)`, c`age = 20
status = "adulte" if age >= 18 else "enfant"
print(status)`],
        n: ['one-line-if'],
        t: ['A choice in one line', 'Una scelta in una riga', 'Un choix sur une ligne'],
        x: [`For a simple choice of a value, you can write it all in one line: the value for True, then if, the question, else, and the value for False.

It reads almost like English: "adult if age is 18 or more, else child".`,
          `Per una scelta semplice di un valore puoi scrivere tutto in una riga: il valore per True, poi if, la domanda, else e il valore per False.

Si legge quasi come in inglese: "adulto se age è 18 o più, altrimenti bambino".`,
          `Pour un choix simple d'une valeur, tu peux tout écrire sur une ligne : la valeur pour True, puis if, la question, else et la valeur pour False.

Ça se lit presque comme en anglais : "adulte si age vaut 18 ou plus, sinon enfant".`],
        ex: {
          t: ['The number is 7. In one line, make a box kind that holds even or odd, and show it. Use %.', 'Il numero è 7. In una riga, fai una scatola kind che contenga pari o dispari, e mostrala. Usa %.', 'Le nombre est 7. En une ligne, fais une boîte kind qui contient pair ou impair, et affiche-la. Utilise %.'],
          h: ['One line that reads like a sentence: the first value, if, the question, else, the other value. The question uses % to see if the number is even.', 'Una riga che si legge come una frase: il primo valore, if, la domanda, else, l\'altro valore. La domanda usa % per vedere se il numero è pari.', 'Une ligne qui se lit comme une phrase : la première valeur, if, la question, else, l\'autre valeur. La question utilise % pour voir si le nombre est pair.'],
          start: 'number = 7', sol: ['number = 7\nkind = "even" if number % 2 == 0 else "odd"\nprint(kind)', 'number = 7\nkind = "pari" if number % 2 == 0 else "dispari"\nprint(kind)', 'number = 7\nkind = "pair" if number % 2 == 0 else "impair"\nprint(kind)'], out: ['odd', 'dispari', 'impair'], c: ' if .* else '
        }
      },
      {
        c: [c`x = 5
if x = 5:
    print("five")`, c`x = 5
if x = 5:
    print("cinque")`, c`x = 5
if x = 5:
    print("cinq")`],
        e: 'SyntaxError',
        t: ['Find the mistake: one equal sign or two?', 'Trova l\'errore: un uguale o due?', 'Trouve l\'erreur : un signe égal ou deux ?'],
        x: [`One = puts a value in a box. Two == ask "is it equal?". An if needs a question, so one = there is a mistake.

Press Try it: Python even guesses what you meant.`,
          `Un = mette un valore in una scatola. Due == chiedono "è uguale?". Un if ha bisogno di una domanda, quindi lì un solo = è un errore.

Premi Provalo: Python indovina perfino cosa volevi dire.`,
          `Un = met une valeur dans une boîte. Deux == demandent "est-ce égal ?". Un if a besoin d'une question, donc un seul = y est une erreur.

Appuie sur Essaie : Python devine même ce que tu voulais dire.`],
        ex: {
          t: ['Fix the if, so that the program shows five.', 'Correggi l\'if, così il programma mostra cinque.', 'Corrige le if, pour que le programme affiche cinq.'],
          h: ['The question "is it equal?" is written with two equal signs.', 'La domanda "è uguale?" si scrive con due segni uguale.', 'La question "est-ce égal ?" s\'écrit avec deux signes égal.'],
          start: ['x = 5\nif x = 5:\n    print("five")', 'x = 5\nif x = 5:\n    print("cinque")', 'x = 5\nif x = 5:\n    print("cinq")'],
          sol: ['x = 5\nif x == 5:\n    print("five")', 'x = 5\nif x == 5:\n    print("cinque")', 'x = 5\nif x == 5:\n    print("cinq")'],
          out: ['five', 'cinque', 'cinq'], uses: ['if', '==']
        }
      },
      {
        c: [c`score = 72
if score >= 90:
    print("Great")
elif score >= 60:
    print("Pass")
else:
    print("Try again")`, c`score = 72
if score >= 90:
    print("Ottimo")
elif score >= 60:
    print("Promosso")
else:
    print("Riprova")`, c`score = 72
if score >= 90:
    print("Excellent")
elif score >= 60:
    print("Réussi")
else:
    print("Réessaie")`],
        t: ['Challenge: three roads', 'Sfida: tre strade', 'Défi : trois routes'],
        x: [`if, elif and else choose one road out of three. Python asks the questions from the top and takes the first road whose answer is True; else catches everything left.

That is why the order matters: the biggest limit is asked first.`,
          `if, elif ed else scelgono una strada su tre. Python fa le domande dall'alto e prende la prima strada la cui risposta è True; else prende tutto quello che resta.

Per questo l'ordine conta: il limite più grande si chiede per primo.`,
          `if, elif et else choisissent une route sur trois. Python pose les questions depuis le haut et prend la première route dont la réponse est True ; else attrape tout le reste.

C'est pour ça que l'ordre compte : la plus grande limite est demandée en premier.`],
        ex: {
          t: ['The box temp holds 25. Show cold when it is below 10, nice from 10 to 24, and hot from 25 up. Here it must show hot.', 'La scatola temp contiene 25. Mostra freddo quando è sotto 10, bello da 10 a 24, e caldo da 25 in su. Qui deve mostrare caldo.', 'La boîte temp contient 25. Affiche froid quand c\'est sous 10, doux de 10 à 24, et chaud à partir de 25. Ici il doit afficher chaud.'],
          h: ['if for the first limit, elif for the second, else for the rest. Each print is pushed in under its line.', 'if per il primo limite, elif per il secondo, else per il resto. Ogni print è rientrato sotto la sua riga.', 'if pour la première limite, elif pour la deuxième, else pour le reste. Chaque print est décalé sous sa ligne.'],
          start: 'temp = 25',
          sol: ['temp = 25\nif temp < 10:\n    print("cold")\nelif temp < 25:\n    print("nice")\nelse:\n    print("hot")', 'temp = 25\nif temp < 10:\n    print("freddo")\nelif temp < 25:\n    print("bello")\nelse:\n    print("caldo")', 'temp = 25\nif temp < 10:\n    print("froid")\nelif temp < 25:\n    print("doux")\nelse:\n    print("chaud")'],
          out: ['hot', 'caldo', 'chaud'], c: 'elif'
        }
      }
    ]
  },
  {
    title: ['Again and again', 'Ancora e ancora', 'Encore et encore'],
    subtitle: ['Repeating with for', 'Ripetere con for', 'Répéter avec for'],
    steps: [
      {
        c: [c`for i in range(3):
    print("Hello")`, c`for i in range(3):
    print("Ciao")`, c`for i in range(3):
    print("Bonjour")`],
        n: ['for', 'range'],
        t: ['Repeat a few times', 'Ripeti alcune volte', 'Répète quelques fois'],
        x: [`A loop repeats lines. for i in range(3): runs the lines pushed in under it 3 times.

range(3) makes the numbers 0, 1 and 2, and the name i holds the current number on each turn. Here we do not use i, we only repeat.`,
          `Un ciclo ripete delle righe. for i in range(3): fa girare 3 volte le righe rientrate sotto.

range(3) fa i numeri 0, 1 e 2, e il nome i contiene il numero del momento a ogni giro. Qui non usiamo i, ripetiamo e basta.`,
          `Une boucle répète des lignes. for i in range(3): fait tourner 3 fois les lignes décalées dessous.

range(3) fait les nombres 0, 1 et 2, et le nom i contient le nombre du moment à chaque tour. Ici on n'utilise pas i, on répète seulement.`],
        ex: {
          t: ['Make the program say Hello 4 times.', 'Fai dire al programma Ciao 4 volte.', 'Fais dire Bonjour 4 fois au programme.'],
          h: ['Which number in the for line says how many times the loop runs?', 'Quale numero nella riga del for dice quante volte gira il ciclo?', 'Quel nombre dans la ligne for dit combien de fois la boucle tourne ?'],
          start: ['for i in range(3):\n    print("Hello")', 'for i in range(3):\n    print("Ciao")', 'for i in range(3):\n    print("Bonjour")'],
          sol: ['for i in range(4):\n    print("Hello")', 'for i in range(4):\n    print("Ciao")', 'for i in range(4):\n    print("Bonjour")'], exact: true, c: 'for '
        },
        w: ['Do not forget the colon after range(...), and push the lines in with 4 spaces.', 'Non dimenticare i due punti dopo range(...) e rientra le righe di 4 spazi.', 'N\'oublie pas les deux points après range(...) et décale les lignes de 4 espaces.']
      },
      {
        c: c`for i in range(5):
    print(i)`,
        t: ['What i holds', 'Cosa contiene i', 'Ce que contient i'],
        x: [`On every turn, i holds the next number, starting from 0. So range(5) gives 0, 1, 2, 3 and 4. It stops before 5.

You can use i inside the loop like any other box.`,
          `A ogni giro, i contiene il numero successivo, partendo da 0. Quindi range(5) dà 0, 1, 2, 3 e 4. Si ferma prima del 5.

Puoi usare i dentro il ciclo come qualsiasi altra scatola.`,
          `À chaque tour, i contient le nombre suivant, en partant de 0. Donc range(5) donne 0, 1, 2, 3 et 4. Il s'arrête avant 5.

Tu peux utiliser i dans la boucle comme n'importe quelle autre boîte.`],
        ex: {
          t: ['Show the numbers 0 to 6, one on each line.', 'Mostra i numeri da 0 a 6, uno per riga.', 'Affiche les nombres de 0 à 6, un par ligne.'],
          h: ['A loop with range, and a print of i inside it. range stops just before the number you give it.', 'Un ciclo con range, e dentro un print di i. range si ferma subito prima del numero che gli dai.', 'Une boucle avec range, et dedans un print de i. range s\'arrête juste avant le nombre que tu lui donnes.'],
          sol: 'for i in range(7):\n    print(i)', out: '0\n1\n2\n3\n4\n5\n6', c: 'for '
        }
      },
      {
        c: c`for i in range(1, 6):
    print(i)
print("---")
for i in range(0, 10, 2):
    print(i)`,
        t: ['Start, stop and step', 'Inizio, fine e passo', 'Début, fin et pas'],
        x: [`range can take two numbers: range(1, 6) starts at 1 and stops before 6. So it gives 1, 2, 3, 4 and 5.

With a third number you choose the step: range(0, 10, 2) goes 0, 2, 4, 6, 8.`,
          `range può prendere due numeri: range(1, 6) parte da 1 e si ferma prima del 6. Quindi dà 1, 2, 3, 4 e 5.

Con un terzo numero scegli il passo: range(0, 10, 2) va 0, 2, 4, 6, 8.`,
          `range peut prendre deux nombres : range(1, 6) commence à 1 et s'arrête avant 6. Donc il donne 1, 2, 3, 4 et 5.

Avec un troisième nombre tu choisis le pas : range(0, 10, 2) va 0, 2, 4, 6, 8.`],
        ex: {
          t: ['Show 10, 20 and 30, one on each line, with a range that has a step.', 'Mostra 10, 20 e 30, uno per riga, con un range che ha un passo.', 'Affiche 10, 20 et 30, un par ligne, avec un range qui a un pas.'],
          h: ['range can take three numbers: where to start, where to stop (it stops just before) and how big each jump is.', 'range può prendere tre numeri: da dove partire, dove fermarsi (si ferma subito prima) e quanto è grande ogni salto.', 'range peut prendre trois nombres : où commencer, où s\'arrêter (il s\'arrête juste avant) et la taille de chaque saut.'],
          sol: 'for i in range(10, 40, 10):\n    print(i)', out: '10\n20\n30', c: 'range\\(.*,.*,.*\\)'
        }
      },
      {
        c: c`for i in range(1, 6):
    print(i, "x 3 =", i * 3)`,
        t: ['Count with a loop', 'Conta con un ciclo', 'Compte avec une boucle'],
        x: [`Because i changes on every turn, you can use it in a sum. This loop writes the table of 3.

You wrote five lines of work, and the loop did it with two.`,
          `Siccome i cambia a ogni giro, puoi usarla in un conto. Questo ciclo scrive la tabellina del 3.

Tu hai scritto due righe e il ciclo ha fatto il lavoro di cinque.`,
          `Comme i change à chaque tour, tu peux l'utiliser dans un calcul. Cette boucle écrit la table de 3.

Tu as écrit deux lignes et la boucle a fait le travail de cinq.`],
        ex: {
          uses: ['for'],
          t: ['Change the loop to write the table of 2, for the numbers 1 to 5.', 'Cambia il ciclo per scrivere la tabellina del 2, per i numeri da 1 a 5.', 'Change la boucle pour écrire la table de 2, pour les nombres de 1 à 5.'],
          h: ['Change both 3s: the one in the text and the one in the sum.', 'Cambia tutti e due i 3: quello nel testo e quello nel conto.', 'Change les deux 3 : celui du texte et celui du calcul.'],
          start: 'for i in range(1, 6):\n    print(i, "x 3 =", i * 3)', sol: 'for i in range(1, 6):\n    print(i, "x 2 =", i * 2)', out: '1 x 2 = 2\n2 x 2 = 4\n3 x 2 = 6\n4 x 2 = 8\n5 x 2 = 10'
        }
      },
      {
        c: c`total = 0
for i in range(1, 6):
    total += i
print(total)`,
        t: ['Add things up', 'Somma le cose', 'Additionne des choses'],
        x: [`A very common job: a box starts at 0, and the loop adds something to it on every turn. When the loop ends, the box holds the total.

Here: 1 + 2 + 3 + 4 + 5 = 15. Notice that print is not pushed in: it runs once, after the loop.`,
          `Un lavoro molto comune: una scatola parte da 0 e il ciclo ci aggiunge qualcosa a ogni giro. Quando il ciclo finisce, la scatola contiene il totale.

Qui: 1 + 2 + 3 + 4 + 5 = 15. Nota che print non è rientrata: gira una volta sola, dopo il ciclo.`,
          `Un travail très courant : une boîte commence à 0, et la boucle y ajoute quelque chose à chaque tour. Quand la boucle finit, la boîte contient le total.

Ici : 1 + 2 + 3 + 4 + 5 = 15. Remarque que print n'est pas décalée : elle tourne une seule fois, après la boucle.`],
        ex: {
          uses: ['for'],
          t: ['Change the program to add the numbers from 1 to 10. It must show 55.', 'Cambia il programma per sommare i numeri da 1 a 10. Deve mostrare 55.', 'Change le programme pour additionner les nombres de 1 à 10. Il doit afficher 55.'],
          h: ['Which number decides where the loop stops? Remember that range stops just before it.', 'Quale numero decide dove si ferma il ciclo? Ricorda che range si ferma subito prima.', 'Quel nombre décide où la boucle s\'arrête ? Souviens-toi que range s\'arrête juste avant.'],
          start: 'total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)', sol: 'total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)', out: '55'
        },
        w: ['If you push print in, it shows the total on every turn instead of once.', 'Se rientri print, mostra il totale a ogni giro invece di una volta sola.', 'Si tu décales print, il affiche le total à chaque tour au lieu d\'une seule fois.']
      },
      {
        c: c`for letter in "Python":
    print(letter)`,
        t: ['Walk through the letters', 'Scorri le lettere', 'Parcours les lettres'],
        x: [`for can walk through more than numbers. After in you can put a text, and the name holds one letter on each turn.

Later you will use the same idea for lists and other things.`,
          `for può scorrere più dei soli numeri. Dopo in puoi mettere un testo, e il nome contiene una lettera a ogni giro.

Più avanti userai la stessa idea per le liste e altre cose.`,
          `for peut parcourir plus que des nombres. Après in tu peux mettre un texte, et le nom contient une lettre à chaque tour.

Plus tard tu utiliseras la même idée pour les listes et d'autres choses.`],
        ex: {
          t: ['Show each letter of the word cat on its own line.', 'Mostra ogni lettera della parola gatto su una riga a parte.', 'Affiche chaque lettre du mot chat sur sa propre ligne.'],
          h: ['A for loop can walk through a text: at each turn, the name after for holds the next letter. Show it inside the loop.', 'Un ciclo for può percorrere un testo: a ogni giro, il nome dopo for contiene la lettera seguente. Mostralo dentro il ciclo.', 'Une boucle for peut parcourir un texte : à chaque tour, le nom après for contient la lettre suivante. Affiche-le dans la boucle.'],
          sol: ['for letter in "cat":\n    print(letter)', 'for letter in "gatto":\n    print(letter)', 'for letter in "chat":\n    print(letter)'], exact: true, c: 'for '
        }
      },
      {
        c: c`for row in range(3):
    for column in range(4):
        print("*", end="")
    print()`,
        t: ['A loop inside a loop', 'Un ciclo dentro un ciclo', 'Une boucle dans une boucle'],
        x: [`A loop can have another loop inside. The inside loop runs completely for every turn of the outside loop.

Here, for each of the 3 rows, the inside loop writes 4 stars without changing line, and then print() with nothing inside ends the line.`,
          `Un ciclo può averne un altro dentro. Il ciclo interno gira per intero a ogni giro di quello esterno.

Qui, per ognuna delle 3 righe, il ciclo interno scrive 4 stelle senza andare a capo, e poi print() con niente dentro finisce la riga.`,
          `Une boucle peut en avoir une autre dedans. La boucle intérieure tourne en entier à chaque tour de la boucle extérieure.

Ici, pour chacune des 3 lignes, la boucle intérieure écrit 4 étoiles sans changer de ligne, puis print() avec rien dedans termine la ligne.`],
        ex: {
          uses: ['for'],
          t: ['Change the program to draw 2 rows of 5 stars.', 'Cambia il programma per disegnare 2 righe di 5 stelle.', 'Change le programme pour dessiner 2 lignes de 5 étoiles.'],
          h: ['The outer range says how many rows, the inner one how many stars in each row.', 'Il range di fuori dice quante righe, quello di dentro quante stelle per riga.', 'Le range extérieur dit combien de lignes, celui de l\'intérieur combien d\'étoiles par ligne.'],
          start: 'for row in range(3):\n    for column in range(4):\n        print("*", end="")\n    print()', sol: 'for row in range(2):\n    for column in range(5):\n        print("*", end="")\n    print()', out: '*****\n*****'
        }
      },
      {
        c: c`for i in range(5)
    print(i)`,
        e: 'SyntaxError',
        t: ['Find the mistake: the missing colon', 'Trova l\'errore: i due punti che mancano', 'Trouve l\'erreur : les deux-points qui manquent'],
        x: [`Every line that opens a block (for, while, if, def) ends with a colon. Without it, Python does not know that the lines below belong to it.

Press Try it: the message points at the line, and says what it expected.`,
          `Ogni riga che apre un blocco (for, while, if, def) finisce con i due punti. Senza, Python non sa che le righe sotto le appartengono.

Premi Provalo: il messaggio indica la riga e dice cosa si aspettava.`,
          `Chaque ligne qui ouvre un bloc (for, while, if, def) se termine par deux-points. Sans eux, Python ne sait pas que les lignes dessous lui appartiennent.

Appuie sur Essaie : le message montre la ligne et dit ce qu'il attendait.`],
        ex: {
          t: ['Fix it, so that it shows the numbers 0 to 4.', 'Correggilo, così mostra i numeri da 0 a 4.', 'Corrige-le, pour qu\'il affiche les nombres de 0 à 4.'],
          h: ['Add one character at the end of the first line.', 'Aggiungi un carattere alla fine della prima riga.', 'Ajoute un caractère à la fin de la première ligne.'],
          start: 'for i in range(5)\n    print(i)', sol: 'for i in range(5):\n    print(i)', out: '0\n1\n2\n3\n4', uses: ['for']
        }
      },
      {
        c: [c`total = 0
for n in range(1, 11):
    total += n
print("The sum of 1 to 10 is", total)`, c`total = 0
for n in range(1, 11):
    total += n
print("La somma da 1 a 10 è", total)`, c`total = 0
for n in range(1, 11):
    total += n
print("La somme de 1 à 10 est", total)`],
        t: ['Challenge: a times table', 'Sfida: una tabellina', 'Défi : une table de multiplication'],
        x: [`A loop and a box that adds up: n takes every value from 1 to 10, and each time total grows by n. The print is not pushed in, so it runs once, after the loop.

Change 11 into 101 and the same three lines add up a hundred numbers.`,
          `Un ciclo e una scatola che somma: n prende ogni valore da 1 a 10, e ogni volta total cresce di n. Il print non è rientrato, quindi gira una volta sola, dopo il ciclo.

Cambia 11 in 101 e le stesse tre righe sommano cento numeri.`,
          `Une boucle et une boîte qui additionne : n prend chaque valeur de 1 à 10, et à chaque fois total grandit de n. Le print n'est pas décalé, donc il tourne une seule fois, après la boucle.

Change 11 en 101 et les trois mêmes lignes additionnent cent nombres.`],
        ex: {
          t: ['From an empty page: show the 5 times table from 5 x 1 to 5 x 5, one line each, like 5 x 3 = 15', 'Partendo da una pagina vuota: mostra la tabellina del 5 da 5 x 1 a 5 x 5, una riga ciascuna, come 5 x 3 = 15', 'En partant d\'une page vide : affiche la table de 5 de 5 x 1 à 5 x 5, une ligne chacune, comme 5 x 3 = 15'],
          h: ['A for loop over range(1, 6). Inside, one print with commas: 5, the text x, the number of the loop, the text =, and the product.', 'Un ciclo for su range(1, 6). Dentro, un print con le virgole: 5, il testo x, il numero del ciclo, il testo = e il prodotto.', 'Une boucle for sur range(1, 6). Dedans, un print avec des virgules : 5, le texte x, le nombre de la boucle, le texte = et le produit.'],
          start: '',
          sol: 'for i in range(1, 6):\n    print(5, "x", i, "=", 5 * i)',
          out: '5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25', c: 'for '
        }
      }
    ]
  }
];
