// Stage 1 · Numbers, kinds of values, asking and messages. See tools/build-course.js for the format.
const c = String.raw;

module.exports = [
  {
    title: ['Numbers', 'I numeri', 'Les nombres'],
    subtitle: ['Sums, and a few surprises', 'Conti, e qualche sorpresa', 'Des calculs, et quelques surprises'],
    steps: [
      {
        c: c`print(7 + 3)
print(7 - 3)
print(7 * 3)`,
        n: ['-', 'multiply'],
        t: ['Add, take away, multiply', 'Somma, togli, moltiplica', 'Ajoute, enlève, multiplie'],
        x: [`Python is a very good calculator. + adds, - takes away and * multiplies.

You already used + and *. Now you see them with numbers.`,
          `Python è una calcolatrice bravissima. + somma, - toglie e * moltiplica.

Hai già usato + e *. Adesso li vedi con i numeri.`,
          `Python est une très bonne calculatrice. + additionne, - enlève et * multiplie.

Tu as déjà utilisé + et *. Maintenant tu les vois avec des nombres.`],
        ex: {
          t: ['How many minutes are in a day? A day has 24 hours and every hour has 60 minutes. Show the answer.', 'Quanti minuti ci sono in un giorno? Un giorno ha 24 ore e ogni ora ha 60 minuti. Mostra la risposta.', 'Combien de minutes y a-t-il dans un jour ? Un jour a 24 heures et chaque heure a 60 minutes. Affiche la réponse.'],
          h: ['Multiply 24 by 60 inside print.', 'Moltiplica 24 per 60 dentro print.', 'Multiplie 24 par 60 dans print.'],
          sol: 'print(24 * 60)', out: '1440', c: '\\*'
        }
      },
      {
        c: c`print(7 / 2)
print(6 / 2)
print(1 / 4)`,
        n: ['/'],
        t: ['Divide', 'Dividi', 'Divise'],
        x: [`/ divides. The answer is always a number with a point, even when it comes out round: 6 / 2 shows 3.0.

Python writes decimals with a point, never with a comma.`,
          `/ divide. La risposta è sempre un numero con il punto, anche quando viene tonda: 6 / 2 mostra 3.0.

Python scrive i decimali con il punto, mai con la virgola.`,
          `/ divise. La réponse est toujours un nombre avec un point, même quand elle tombe rond : 6 / 2 affiche 3.0.

Python écrit les décimales avec un point, jamais avec une virgule.`],
        ex: {
          uses: ['/'],
          t: ['Share 12 sweets between 3 friends. Show how many each friend gets.', 'Dividi 12 caramelle tra 3 amici. Mostra quante ne prende ogni amico.', 'Partage 12 bonbons entre 3 amis. Affiche combien chaque ami en reçoit.'],
          h: ['12 divided by 3, inside print.', '12 diviso 3, dentro print.', '12 divisé par 3, dans print.'],
          sol: 'print(12 / 3)', out: '4.0'
        }
      },
      {
        c: c`print(7 // 2)
print(7 % 2)
print(20 // 6)
print(20 % 6)`,
        n: ['//', '%'],
        t: ['Whole division and what is left', 'Divisione intera e resto', 'Division entière et reste'],
        x: [`Sometimes you want a whole answer. // divides and keeps only the whole part. % gives what is left over.

20 // 6 is 3, because 6 fits 3 times in 20. And 20 % 6 is 2, because 18 is used and 2 are left.`,
          `A volte vuoi una risposta intera. // divide e tiene solo la parte intera. % dà quello che avanza.

20 // 6 è 3, perché il 6 sta 3 volte nel 20. E 20 % 6 è 2, perché ne usi 18 e ne avanzano 2.`,
          `Parfois tu veux une réponse entière. // divise et ne garde que la partie entière. % donne ce qui reste.

20 // 6 donne 3, parce que 6 entre 3 fois dans 20. Et 20 % 6 donne 2, parce que 18 sont utilisés et il en reste 2.`],
        ex: {
          uses: ['//', '%'],
          t: ['A year has 100 days left. How many full weeks (7 days) is that, and how many days remain? Show the weeks on one line and the days on the next.', 'Restano 100 giorni. Quante settimane intere (di 7 giorni) sono, e quanti giorni avanzano? Mostra le settimane su una riga e i giorni sulla riga dopo.', 'Il reste 100 jours. Combien de semaines entières (de 7 jours) cela fait-il, et combien de jours restent ? Affiche les semaines sur une ligne et les jours sur la suivante.'],
          h: ['100 // 7 for the weeks and 100 % 7 for the days.', '100 // 7 per le settimane e 100 % 7 per i giorni.', '100 // 7 pour les semaines et 100 % 7 pour les jours.'],
          sol: 'print(100 // 7)\nprint(100 % 7)', out: '14\n2'
        },
        w: ['A number % 2 is 0 for an even number and 1 for an odd one. You will use that a lot.', 'Un numero % 2 fa 0 se è pari e 1 se è dispari. Lo userai moltissimo.', 'Un nombre % 2 donne 0 s\'il est pair et 1 s\'il est impair. Tu l\'utiliseras beaucoup.']
      },
      {
        c: c`print(2 ** 3)
print(2 ** 10)
print(10 ** 6)`,
        n: ['**'],
        t: ['The power', 'La potenza', 'La puissance'],
        x: [`** is the power. 2 ** 3 means 2 times itself, 3 times: 2 * 2 * 2, which is 8.

Powers grow very fast: 2 ** 10 is already 1024.`,
          `** è la potenza. 2 ** 3 vuol dire 2 per se stesso, 3 volte: 2 * 2 * 2, cioè 8.

Le potenze crescono in fretta: 2 ** 10 è già 1024.`,
          `** est la puissance. 2 ** 3 veut dire 2 fois lui-même, 3 fois : 2 * 2 * 2, donc 8.

Les puissances grandissent très vite : 2 ** 10 fait déjà 1024.`],
        ex: {
          t: ['Show 3 to the power of 4.', 'Mostra 3 alla quarta.', 'Affiche 3 puissance 4.'],
          h: ['3 ** 4', '3 ** 4', '3 ** 4'],
          sol: 'print(3 ** 4)', out: '81', c: '\\*\\*'
        }
      },
      {
        c: c`print(2 + 3 * 4)
print((2 + 3) * 4)
print(10 - 2 - 3)`,
        n: ['order'],
        t: ['Which sum goes first?', 'Quale conto va per primo?', 'Quel calcul passe en premier ?'],
        x: [`Python follows the rules from maths class: multiplication and division go before addition and subtraction.

So 2 + 3 * 4 is 14, not 20. Round brackets go before everything: (2 + 3) * 4 is 20. When you are not sure, add brackets.`,
          `Python segue le regole della matematica: moltiplicazione e divisione vanno prima di somma e sottrazione.

Quindi 2 + 3 * 4 fa 14, non 20. Le parentesi tonde vanno prima di tutto: (2 + 3) * 4 fa 20. Quando non sei sicuro, aggiungi parentesi.`,
          `Python suit les règles des maths : la multiplication et la division passent avant l'addition et la soustraction.

Donc 2 + 3 * 4 fait 14, pas 20. Les parenthèses rondes passent avant tout : (2 + 3) * 4 fait 20. Quand tu n'es pas sûr, ajoute des parenthèses.`],
        ex: {
          uses: ['+', '*'],
          t: ['Put round brackets in 1 + 2 * 3 so that it shows 9.', 'Metti le parentesi tonde in 1 + 2 * 3 così che mostri 9.', 'Mets des parenthèses rondes dans 1 + 2 * 3 pour qu\'il affiche 9.'],
          h: ['The sum 1 + 2 has to be done first.', 'Il conto 1 + 2 va fatto per primo.', 'Le calcul 1 + 2 doit être fait en premier.'],
          start: 'print(1 + 2 * 3)', sol: 'print((1 + 2) * 3)', out: '9'
        }
      },
      {
        c: c`print(3.14159)
print(2.5 + 1.25)
print(0.1 + 0.2)`,
        n: ['decimal'],
        t: ['Numbers with a point', 'Numeri con il punto', 'Des nombres avec un point'],
        x: [`A number with a point is called a float. You can do all the sums you know with floats.

Look at the last line: 0.1 + 0.2 shows 0.30000000000000004. Computers keep these numbers with a tiny error. It is normal, and it happens in every language.`,
          `Un numero con il punto si chiama float. Con i float puoi fare tutti i conti che conosci.

Guarda l'ultima riga: 0.1 + 0.2 mostra 0.30000000000000004. I computer tengono questi numeri con un piccolissimo errore. È normale e succede in ogni linguaggio.`,
          `Un nombre avec un point s'appelle un float. Avec les floats tu peux faire tous les calculs que tu connais.

Regarde la dernière ligne : 0.1 + 0.2 affiche 0.30000000000000004. Les ordinateurs gardent ces nombres avec une toute petite erreur. C'est normal, et ça arrive dans tous les langages.`],
        ex: {
          uses: ['+'],
          t: ['Show the sum of 1.5 and 2.25.', 'Mostra la somma di 1.5 e 2.25.', 'Affiche la somme de 1.5 et 2.25.'],
          h: ['Decimal numbers use a dot, not a comma. Write the sum inside print, with no quotes.', 'I numeri decimali usano il punto, non la virgola. Scrivi la somma dentro print, senza virgolette.', 'Les nombres décimaux utilisent un point, pas une virgule. Écris la somme dans print, sans guillemets.'],
          sol: 'print(1.5 + 2.25)', out: '3.75'
        }
      },
      {
        c: c`print(round(3.14159, 2))
print(round(3.14159))
print(round(2.5))`,
        n: ['round'],
        t: ['Cut the decimals', 'Taglia i decimali', 'Coupe les décimales'],
        x: [`round cuts a number to the number of decimals you ask for. round(3.14159, 2) gives 3.14.

With only the number, it gives a whole number.`,
          `round taglia un numero al numero di decimali che chiedi. round(3.14159, 2) dà 3.14.

Con solo il numero, dà un numero intero.`,
          `round coupe un nombre au nombre de décimales demandé. round(3.14159, 2) donne 3.14.

Avec le nombre seul, il donne un nombre entier.`],
        ex: {
          t: ['Round 9.87654 to one decimal and show it.', 'Arrotonda 9.87654 a un decimale e mostralo.', 'Arrondis 9.87654 à une décimale et affiche-le.'],
          h: ['round(9.87654, 1) inside print.', 'round(9.87654, 1) dentro print.', 'round(9.87654, 1) dans print.'],
          sol: 'print(round(9.87654, 1))', out: '9.9', c: 'round'
        },
        w: ['round(2.5) gives 2, not 3: Python rounds a half to the even number next to it.', 'round(2.5) dà 2, non 3: Python arrotonda la metà al numero pari vicino.', 'round(2.5) donne 2, pas 3 : Python arrondit une moitié au nombre pair voisin.']
      },
      {
        c: c`print(abs(-5))
print(min(4, 9, 2))
print(max(4, 9, 2))`,
        n: ['abs', 'min', 'max'],
        t: ['Smallest, biggest, no minus', 'Il più piccolo, il più grande, senza meno', 'Le plus petit, le plus grand, sans moins'],
        x: [`Three more helpers for numbers. abs removes the minus sign. min finds the smallest number you give it, and max finds the biggest.

Like print, they take what you put between the brackets.`,
          `Altri tre aiutanti per i numeri. abs toglie il segno meno. min trova il numero più piccolo che gli dai, e max trova il più grande.

Come print, prendono quello che metti tra le parentesi.`,
          `Trois autres assistants pour les nombres. abs enlève le signe moins. min trouve le plus petit nombre que tu lui donnes, et max trouve le plus grand.

Comme print, ils prennent ce que tu mets entre les parenthèses.`],
        ex: {
          t: ['Show the biggest of the numbers 12, 7 and 30.', 'Mostra il più grande dei numeri 12, 7 e 30.', 'Affiche le plus grand des nombres 12, 7 et 30.'],
          h: ['max(12, 7, 30) inside print.', 'max(12, 7, 30) dentro print.', 'max(12, 7, 30) dans print.'],
          sol: 'print(max(12, 7, 30))', out: '30', c: 'max'
        }
      },
      {
        c: c`total = 0
total += 5
print(total)
total *= 2
print(total)`,
        n: ['+=', '*='],
        t: ['A shorter way to change a box', 'Un modo più corto per cambiare una scatola', 'Une façon plus courte de changer une boîte'],
        x: [`total = total + 5 is so common that it has a shortcut: total += 5. It adds 5 to what is in the box.

*= does the same with multiplication. There is one for each sum: -=, /= and the others.`,
          `total = total + 5 è così comune che ha una scorciatoia: total += 5. Aggiunge 5 a quello che c'è nella scatola.

*= fa lo stesso con la moltiplicazione. Ce n'è uno per ogni conto: -=, /= e gli altri.`,
          `total = total + 5 est si courant qu'il a un raccourci : total += 5. Il ajoute 5 à ce qu'il y a dans la boîte.

*= fait la même chose avec la multiplication. Il y en a un pour chaque calcul : -=, /= et les autres.`],
        ex: {
          t: ['Start with 100 in the box total, add 30 using +=, and show it.', 'Parti con 100 nella scatola total, aggiungi 30 usando += e mostralo.', 'Commence avec 100 dans la boîte total, ajoute 30 avec += et affiche-le.'],
          h: ['+= adds to what is already in the box. Write it between the line that makes total and the print.', '+= aggiunge a quello che c\'è già nella scatola. Scrivilo tra la riga che crea total e il print.', '+= ajoute à ce qu\'il y a déjà dans la boîte. Écris-le entre la ligne qui crée total et le print.'],
          start: 'total = 100', sol: 'total = 100\ntotal += 30\nprint(total)', out: '130', c: '\\+='
        }
      },
      {
        c: c`print(7 x 3)`,
        e: 'SyntaxError',
        t: ['Find the mistake: the times sign', 'Trova l\'errore: il segno per', 'Trouve l\'erreur : le signe fois'],
        x: [`At school you write 7 x 3. Python does not know that x: for Python, x is just a letter, a name.

Press Try it: the program stops before it starts, on line 1.`,
          `A scuola scrivi 7 x 3. Python non conosce quella x: per Python, x è solo una lettera, un nome.

Premi Provalo: il programma si ferma prima di partire, alla riga 1.`,
          `À l'école tu écris 7 x 3. Python ne connaît pas ce x : pour Python, x est juste une lettre, un nom.

Appuie sur Essaie : le programme s'arrête avant de démarrer, à la ligne 1.`],
        ex: {
          t: ['Fix it, so that it shows 21.', 'Correggilo, così mostra 21.', 'Corrige-le, pour qu\'il affiche 21.'],
          h: ['Python multiplies with the star.', 'Python moltiplica con l\'asterisco.', 'Python multiplie avec l\'étoile.'],
          start: 'print(7 x 3)', sol: 'print(7 * 3)', out: '21', uses: ['*']
        }
      },
      {
        c: c`total = 0
total += 7 * 3
total += 2 ** 3
print(total)
print(total // 10, total % 10)`,
        t: ['Challenge: share it fairly', 'Sfida: dividi in modo giusto', 'Défi : partage équitablement'],
        x: [`Several kinds of sums in one program, and a box that grows with +=. The last line takes the number apart: // gives how many whole tens, % gives what is left.

Whole division and the remainder are the tools for sharing things out.`,
          `Diversi tipi di conti in un programma, e una scatola che cresce con +=. L'ultima riga smonta il numero: // dà quante decine intere, % dà quello che resta.

La divisione intera e il resto sono gli strumenti per spartire le cose.`,
          `Plusieurs sortes de calculs dans un programme, et une boîte qui grandit avec +=. La dernière ligne démonte le nombre : // donne combien de dizaines entières, % donne ce qui reste.

La division entière et le reste sont les outils pour partager les choses.`],
        ex: {
          t: ['A pizza has 11 slices, and 3 friends share it with whole slices only. Show how many slices each friend gets (3), then how many are left over (2), each on its own line.', 'Una pizza ha 11 fette, e 3 amici se la dividono solo a fette intere. Mostra quante fette riceve ogni amico (3), poi quante ne avanzano (2), ognuno su una riga.', 'Une pizza a 11 parts, et 3 amis la partagent en parts entières seulement. Affiche combien de parts reçoit chaque ami (3), puis combien il en reste (2), chacun sur sa ligne.'],
          h: ['One sign gives the whole parts of a division, another gives what is left. Boxes for slices and friends make it easy to read.', 'Un segno dà le parti intere di una divisione, un altro dà quello che resta. Delle scatole per fette e amici lo rendono facile da leggere.', 'Un signe donne les parts entières d\'une division, un autre donne ce qui reste. Des boîtes pour les parts et les amis le rendent facile à lire.'],
          start: '',
          sol: 'slices = 11\nfriends = 3\nprint(slices // friends)\nprint(slices % friends)',
          out: '3\n2', c: ['//', '//', '//']
        }
      }
    ]
  },
  {
    title: ['Kinds of values', 'Tipi di valori', 'Sortes de valeurs'],
    subtitle: ['Text, whole numbers, decimals and more', 'Testo, numeri interi, decimali e altro', 'Texte, nombres entiers, décimaux et plus'],
    steps: [
      {
        c: [c`print(type("hello"))
print(type(7))
print(type(7.5))
print(type(True))`, c`print(type("ciao"))
print(type(7))
print(type(7.5))
print(type(True))`, c`print(type("salut"))
print(type(7))
print(type(7.5))
print(type(True))`],
        n: ['type', 'true-false'],
        t: ['Every value has a kind', 'Ogni valore ha un tipo', 'Chaque valeur a une sorte'],
        x: [`Every value in Python is of some kind. type(...) tells you which: str is a text, int is a whole number, float is a number with a point, and bool is True or False.

The kind decides what you can do with the value. You can multiply numbers, but you cannot multiply a text by a text.`,
          `Ogni valore in Python è di un certo tipo. type(...) ti dice quale: str è un testo, int è un numero intero, float è un numero con il punto e bool è True o False.

Il tipo decide cosa puoi fare con il valore. Puoi moltiplicare i numeri, ma non puoi moltiplicare un testo per un testo.`,
          `Chaque valeur en Python est d'une certaine sorte. type(...) te dit laquelle : str est un texte, int est un nombre entier, float est un nombre avec un point, et bool est True ou False.

La sorte décide ce que tu peux faire avec la valeur. Tu peux multiplier des nombres, mais pas un texte par un texte.`],
        ex: {
          t: ['Show the kind of the number 3.0.', 'Mostra il tipo del numero 3.0.', 'Affiche la sorte du nombre 3.0.'],
          h: ['type(...) tells the kind of the value in its brackets. Show it with print.', 'type(...) dice il tipo del valore tra le sue parentesi. Mostralo con print.', 'type(...) dit le genre de la valeur dans ses parenthèses. Affiche-le avec print.'],
          sol: 'print(type(3.0))', out: "<class 'float'>", c: 'type'
        }
      },
      {
        c: c`print("5" + "5")
print(5 + 5)
print("5" * 3)`,
        t: ['"5" is not 5', '"5" non è 5', '"5" n\'est pas 5'],
        x: [`"5" with quotes is a text: the drawing of the digit. 5 without quotes is a number.

The same + sign does two different things: it glues texts ("5" + "5" is "55") and it adds numbers (5 + 5 is 10).`,
          `"5" con le virgolette è un testo: il disegno della cifra. 5 senza virgolette è un numero.

Lo stesso segno + fa due cose diverse: incolla i testi ("5" + "5" è "55") e somma i numeri (5 + 5 è 10).`,
          `"5" avec des guillemets est un texte : le dessin du chiffre. 5 sans guillemets est un nombre.

Le même signe + fait deux choses différentes : il colle les textes ("5" + "5" donne "55") et il additionne les nombres (5 + 5 donne 10).`],
        ex: {
          t: ['Glue the text "12" and the text "34", so the program shows 1234.', 'Incolla il testo "12" e il testo "34", così il programma mostra 1234.', 'Colle le texte "12" et le texte "34", pour que le programme affiche 1234.'],
          h: ['Put both numbers between quotes, so they are texts.', 'Metti tutti e due i numeri tra virgolette, così sono testi.', 'Mets les deux nombres entre guillemets, pour que ce soient des textes.'],
          sol: 'print("12" + "34")', out: '1234', c: '"12"'
        }
      },
      {
        c: c`print(int("42") + 1)
print(float("2.5") * 2)
print(int(9.99))`,
        n: ['int', 'float'],
        t: ['Turn a text into a number', 'Trasforma un testo in numero', 'Transforme un texte en nombre'],
        x: [`int(...) makes a whole number and float(...) makes a number with a point. They are the tools to change the kind of a value.

int("42") turns the text 42 into the number 42, so you can do sums with it. int(9.99) cuts the decimals: it does not round.`,
          `int(...) fa un numero intero e float(...) fa un numero con il punto. Sono gli strumenti per cambiare il tipo di un valore.

int("42") trasforma il testo 42 nel numero 42, così puoi farci i conti. int(9.99) taglia i decimali: non arrotonda.`,
          `int(...) fait un nombre entier et float(...) fait un nombre avec un point. Ce sont les outils pour changer la sorte d'une valeur.

int("42") transforme le texte 42 en nombre 42, donc tu peux faire des calculs avec. int(9.99) coupe les décimales : il n'arrondit pas.`],
        ex: {
          uses: ['int', '*'],
          t: ['Turn the text "15" into a number, double it, and show it.', 'Trasforma il testo "15" in numero, raddoppialo e mostralo.', 'Transforme le texte "15" en nombre, double-le et affiche-le.'],
          h: ['int("15") * 2 inside print.', 'int("15") * 2 dentro print.', 'int("15") * 2 dans print.'],
          sol: 'print(int("15") * 2)', out: '30', c: 'int'
        }
      },
      {
        c: [c`print(str(7) + " days")
print("I have " + str(3) + " cats")`, c`print(str(7) + " giorni")
print("Ho " + str(3) + " gatti")`, c`print(str(7) + " jours")
print("J'ai " + str(3) + " chats")`],
        n: ['str'],
        t: ['Turn a number into a text', 'Trasforma un numero in testo', 'Transforme un nombre en texte'],
        x: [`str(...) does the opposite: it makes a text from anything. str(7) is the text "7".

You need it when you want to glue a number to a text with +, because + only glues texts to texts.`,
          `str(...) fa il contrario: fa un testo da qualsiasi cosa. str(7) è il testo "7".

Ti serve quando vuoi incollare un numero a un testo con +, perché + incolla solo testi con testi.`,
          `str(...) fait le contraire : il fait un texte de n'importe quoi. str(7) donne le texte "7".

Il t'en faut quand tu veux coller un nombre à un texte avec +, parce que + ne colle que des textes avec des textes.`],
        ex: {
          t: ['Show: 5 apples. Make the number 5 into a text with str and glue " apples" to it.', 'Mostra: 5 mele. Trasforma il numero 5 in testo con str e incolla " mele".', 'Affiche : 5 pommes. Transforme le nombre 5 en texte avec str et colle " pommes".'],
          h: ['str(5) + " apples" inside print.', 'str(5) + " mele" dentro print.', 'str(5) + " pommes" dans print.'],
          sol: ['print(str(5) + " apples")', 'print(str(5) + " mele")', 'print(str(5) + " pommes")'], out: ['5 apples', '5 mele', '5 pommes'], c: 'str'
        }
      },
      {
        c: [c`print("I am " + 12)`, c`print("Ho " + 12)`, c`print("J'ai " + 12)`],
        e: 'TypeError',
        t: ['The most common mistake', 'L\'errore più comune', 'L\'erreur la plus courante'],
        x: [`What happens if you glue a text and a number with +? Python stops, because it does not guess what you mean.

Read what Pyviel says: it names the two kinds that do not match. Press View full error to see the real Python words. Learning to read them is a superpower.`,
          `Cosa succede se incolli un testo e un numero con +? Python si ferma, perché non indovina cosa intendi.

Leggi cosa dice Pyviel: nomina i due tipi che non vanno d'accordo. Premi View full error per vedere le parole vere di Python. Imparare a leggerle è un superpotere.`,
          `Que se passe-t-il si tu colles un texte et un nombre avec + ? Python s'arrête, parce qu'il ne devine pas ce que tu veux dire.

Lis ce que dit Pyviel : il nomme les deux sortes qui ne vont pas ensemble. Appuie sur View full error pour voir les vrais mots de Python. Apprendre à les lire est un superpouvoir.`],
        ex: {
          uses: ['str', '+'],
          t: ['Fix it with str, so the program shows: I am 12', 'Correggilo con str, così il programma mostra: Ho 12', 'Corrige-le avec str, pour que le programme affiche : J\'ai 12'],
          h: ['Put str( ) around the number 12.', 'Metti str( ) intorno al numero 12.', 'Mets str( ) autour du nombre 12.'],
          start: ['print("I am " + 12)', 'print("Ho " + 12)', 'print("J\'ai " + 12)'],
          sol: ['print("I am " + str(12))', 'print("Ho " + str(12))', 'print("J\'ai " + str(12))'],
          out: ['I am 12', 'Ho 12', "J'ai 12"]
        }
      },
      {
        c: c`age = "12"
print(age + 1)`,
        e: 'TypeError',
        t: ['Find the mistake: text plus a number', 'Trova l\'errore: testo più un numero', 'Trouve l\'erreur : du texte plus un nombre'],
        x: [`age holds "12" with quotes: it is text, not a number. Python cannot add the number 1 to a text, and stops.

Press Try it and read the sentence: it tells you which two kinds do not go together.`,
          `age contiene "12" con le virgolette: è testo, non un numero. Python non può aggiungere il numero 1 a un testo, e si ferma.

Premi Provalo e leggi la frase: ti dice quali due tipi non vanno insieme.`,
          `age contient "12" avec des guillemets : c'est du texte, pas un nombre. Python ne peut pas ajouter le nombre 1 à un texte, et s'arrête.

Appuie sur Essaie et lis la phrase : elle te dit quels deux genres ne vont pas ensemble.`],
        ex: {
          t: ['Keep the first line as it is, and fix the second, so that it shows 13.', 'Lascia la prima riga così com\'è e correggi la seconda, così mostra 13.', 'Garde la première ligne telle quelle et corrige la seconde, pour qu\'elle affiche 13.'],
          h: ['Turn the text into a number before adding 1.', 'Trasforma il testo in un numero prima di aggiungere 1.', 'Transforme le texte en nombre avant d\'ajouter 1.'],
          start: 'age = "12"\nprint(age + 1)', sol: 'age = "12"\nprint(int(age) + 1)', out: '13', uses: ['int'], c: 'age = "12"'
        }
      },
      {
        c: c`price = "5"
quantity = 3
total = int(price) * quantity
print("Total: " + str(total))
print(type(price), type(total))`,
        t: ['Challenge: text and numbers together', 'Sfida: testo e numeri insieme', 'Défi : du texte et des nombres ensemble'],
        x: [`price holds the text "5", not the number 5. int turns it into a number so it can be multiplied. Then str turns the answer back into text, so + can join it to another text.

type shows the kind of each box: the first is still text, the second is a whole number.`,
          `price contiene il testo "5", non il numero 5. int lo trasforma in numero, così si può moltiplicare. Poi str ritrasforma la risposta in testo, così + la può unire a un altro testo.

type mostra il tipo di ogni scatola: la prima è ancora testo, la seconda è un numero intero.`,
          `price contient le texte "5", pas le nombre 5. int le transforme en nombre pour qu'on puisse le multiplier. Puis str retransforme la réponse en texte, pour que + puisse la joindre à un autre texte.

type montre le genre de chaque boîte : la première est encore du texte, la seconde est un nombre entier.`],
        ex: {
          t: ['The box age holds the text "12". Show the sentence Next year: 13 by joining with + only (no commas in print).', 'La scatola age contiene il testo "12". Mostra la frase L\'anno prossimo: 13 unendo solo con + (niente virgole nel print).', 'La boîte age contient le texte "12". Affiche la phrase L\'an prochain : 13 en joignant seulement avec + (pas de virgules dans le print).'],
          h: ['Two changes of kind: first to a number to add 1, then back to text to join it.', 'Due cambi di tipo: prima in numero per aggiungere 1, poi di nuovo in testo per unirlo.', 'Deux changements de genre : d\'abord en nombre pour ajouter 1, puis de nouveau en texte pour le joindre.'],
          start: 'age = "12"',
          sol: ['age = "12"\nprint("Next year: " + str(int(age) + 1))', 'age = "12"\nprint("L\'anno prossimo: " + str(int(age) + 1))', 'age = "12"\nprint("L\'an prochain : " + str(int(age) + 1))'],
          out: ['Next year: 13', 'L\'anno prossimo: 13', 'L\'an prochain : 13'], c: 'str\\('
        }
      }
    ]
  },
  {
    title: ['Ask questions', 'Fai domande', 'Pose des questions'],
    subtitle: ['Talk with the person using your program', 'Parla con chi usa il tuo programma', 'Parle avec la personne qui utilise ton programme'],
    steps: [
      {
        c: [c`name = input("What is your name? ")
print("Hello", name)`, c`name = input("Come ti chiami? ")
print("Ciao", name)`, c`name = input("Comment t'appelles-tu ? ")
print("Bonjour", name)`],
        i: ['Ada'],
        n: ['input'],
        t: ['Ask and listen', 'Chiedi e ascolta', 'Demande et écoute'],
        x: [`input shows a question and waits. The person types an answer and presses Enter. The answer comes back as text, and here it goes into the box name.

When you press Run, a box appears where you can type.`,
          `input mostra una domanda e aspetta. La persona scrive una risposta e preme Invio. La risposta torna come testo, e qui finisce nella scatola name.

Quando premi Esegui, compare una casella dove puoi scrivere.`,
          `input affiche une question et attend. La personne tape une réponse et appuie sur Entrée. La réponse revient sous forme de texte, et ici elle va dans la boîte name.

Quand tu appuies sur Lancer, une case apparaît où tu peux taper.`],
        ex: {
          t: ['Ask the question: Favourite colour?  Then show: You like and the answer.', 'Fai la domanda: Colore preferito?  Poi mostra: Ti piace e la risposta.', 'Pose la question : Couleur préférée ?  Puis affiche : Tu aimes et la réponse.'],
          h: ['Put the answer of input in a box. Then print two things with a comma between them: the text and the box.', 'Metti la risposta di input in una scatola. Poi mostra con print due cose separate da una virgola: il testo e la scatola.', 'Mets la réponse de input dans une boîte. Puis affiche avec print deux choses séparées par une virgule : le texte et la boîte.'],
          sol: ['colour = input("Favourite colour? ")\nprint("You like", colour)', 'colour = input("Colore preferito? ")\nprint("Ti piace", colour)', 'colour = input("Couleur préférée ? ")\nprint("Tu aimes", colour)'],
          i: {en: ['blue'], it: ['blu'], fr: ['bleu']}, m: ['You like blue$', 'Ti piace blu$', 'Tu aimes bleu$'], c: 'input'
        },
        w: ['Put a space at the end of the question, so the answer does not touch it.', 'Metti uno spazio alla fine della domanda, così la risposta non la tocca.', 'Mets une espace à la fin de la question, pour que la réponse ne la touche pas.']
      },
      {
        c: [c`age = input("How old are you? ")
print(age + 1)`, c`age = input("Quanti anni hai? ")
print(age + 1)`, c`age = input("Quel âge as-tu ? ")
print(age + 1)`],
        i: ['10'], e: 'TypeError',
        t: ['An answer is always text', 'Una risposta è sempre testo', 'Une réponse est toujours du texte'],
        x: [`Even when the person types 10, input gives back the text "10", not the number 10. So age + 1 tries to add a number to a text, and Python stops.

This is the most common mistake of beginners. Read the explanation, then fix it in the next step.`,
          `Anche quando la persona scrive 10, input restituisce il testo "10", non il numero 10. Quindi age + 1 prova a sommare un numero a un testo e Python si ferma.

È l'errore più comune di chi comincia. Leggi la spiegazione, poi correggilo nel passo dopo.`,
          `Même quand la personne tape 10, input rend le texte "10", pas le nombre 10. Donc age + 1 essaie d'ajouter un nombre à un texte, et Python s'arrête.

C'est l'erreur la plus courante des débutants. Lis l'explication, puis corrige-la à l'étape suivante.`],
        ex: {
          uses: ['input', 'int'],
          t: ['Fix it: turn the answer into a number with int, so that typing 10 shows 11.', 'Correggilo: trasforma la risposta in numero con int, così scrivendo 10 si vede 11.', 'Corrige-le : transforme la réponse en nombre avec int, pour que taper 10 affiche 11.'],
          h: ['input always gives text. Wrap the whole input(...) inside int( ... ), so the box gets a number.', 'input dà sempre del testo. Metti tutto input(...) dentro int( ... ), così la scatola riceve un numero.', 'input donne toujours du texte. Mets tout le input(...) dans int( ... ), pour que la boîte reçoive un nombre.'],
          start: ['age = input("How old are you? ")\nprint(age + 1)', 'age = input("Quanti anni hai? ")\nprint(age + 1)', 'age = input("Quel âge as-tu ? ")\nprint(age + 1)'],
          sol: ['age = int(input("How old are you? "))\nprint(age + 1)', 'age = int(input("Quanti anni hai? "))\nprint(age + 1)', 'age = int(input("Quel âge as-tu ? "))\nprint(age + 1)'],
          i: ['10'], m: '11$', c: 'int'
        }
      },
      {
        c: [c`age = int(input("How old are you? "))
print("Next year you will be", age + 1)`, c`age = int(input("Quanti anni hai? "))
print("L'anno prossimo avrai", age + 1)`, c`age = int(input("Quel âge as-tu ? "))
print("L'année prochaine tu auras", age + 1)`],
        i: ['10'],
        t: ['Turn the answer into a number', 'Trasforma la risposta in numero', 'Transforme la réponse en nombre'],
        x: [`Wrap the input in int(...) to get a whole number, or in float(...) for a number with a point. Now you can do sums with the answer.

Read it from the inside out: input asks, int turns the answer into a number, and age keeps it.`,
          `Avvolgi input in int(...) per avere un numero intero, o in float(...) per un numero con il punto. Ora puoi fare i conti con la risposta.

Leggilo dall'interno verso l'esterno: input chiede, int trasforma la risposta in numero e age la tiene.`,
          `Entoure input de int(...) pour obtenir un nombre entier, ou de float(...) pour un nombre avec un point. Maintenant tu peux faire des calculs avec la réponse.

Lis-le de l'intérieur vers l'extérieur : input demande, int transforme la réponse en nombre et age la garde.`],
        ex: {
          uses: ['input', 'int', '*'],
          t: ['Ask for a number, and show its double.', 'Chiedi un numero e mostra il suo doppio.', 'Demande un nombre et affiche son double.'],
          h: ['Two steps: turn the answer into a number with int, then show that number times 2.', 'Due passi: trasforma la risposta in numero con int, poi mostra quel numero per 2.', 'Deux étapes : transforme la réponse en nombre avec int, puis affiche ce nombre fois 2.'],
          sol: ['number = int(input("Number? "))\nprint(number * 2)', 'number = int(input("Numero? "))\nprint(number * 2)', 'number = int(input("Nombre ? "))\nprint(number * 2)'], i: ['21'], m: '42$', c: 'int'
        },
        w: ['If the person types letters, int(...) stops with an error. Later you will learn to handle that.', 'Se la persona scrive lettere, int(...) si ferma con un errore. Più avanti imparerai a gestirlo.', 'Si la personne tape des lettres, int(...) s\'arrête avec une erreur. Plus tard tu apprendras à gérer ça.']
      },
      {
        c: [c`first = int(input("First number: "))
second = int(input("Second number: "))
total = first + second
print("The sum is", total)`, c`first = int(input("Primo numero: "))
second = int(input("Secondo numero: "))
total = first + second
print("La somma è", total)`, c`first = int(input("Premier nombre : "))
second = int(input("Deuxième nombre : "))
total = first + second
print("La somme est", total)`],
        i: ['4', '9'],
        t: ['A small calculator', 'Una piccola calcolatrice', 'Une petite calculatrice'],
        x: [`You can ask as many questions as you like. Each one waits for its answer, in order.

This program asks two numbers, adds them and shows the sum. It is the heart of most small programs: ask, think, answer.`,
          `Puoi fare quante domande vuoi. Ognuna aspetta la sua risposta, in ordine.

Questo programma chiede due numeri, li somma e mostra la somma. È il cuore di quasi tutti i piccoli programmi: chiedi, pensa, rispondi.`,
          `Tu peux poser autant de questions que tu veux. Chacune attend sa réponse, dans l'ordre.

Ce programme demande deux nombres, les additionne et affiche la somme. C'est le cœur de presque tous les petits programmes : demande, réfléchis, réponds.`],
        ex: {
          uses: ['input', '*'],
          t: ['Change the program so that it multiplies the two numbers instead of adding them.', 'Cambia il programma così che moltiplichi i due numeri invece di sommarli.', 'Change le programme pour qu\'il multiplie les deux nombres au lieu de les additionner.'],
          h: ['Replace the + with a *.', 'Sostituisci il + con un *.', 'Remplace le + par un *.'],
          start: ['first = int(input("First number: "))\nsecond = int(input("Second number: "))\ntotal = first + second\nprint("The sum is", total)', 'first = int(input("Primo numero: "))\nsecond = int(input("Secondo numero: "))\ntotal = first + second\nprint("La somma è", total)', 'first = int(input("Premier nombre : "))\nsecond = int(input("Deuxième nombre : "))\ntotal = first + second\nprint("La somme est", total)'],
          sol: ['first = int(input("First number: "))\nsecond = int(input("Second number: "))\ntotal = first * second\nprint("The sum is", total)', 'first = int(input("Primo numero: "))\nsecond = int(input("Secondo numero: "))\ntotal = first * second\nprint("La somma è", total)', 'first = int(input("Premier nombre : "))\nsecond = int(input("Deuxième nombre : "))\ntotal = first * second\nprint("La somme est", total)'], i: ['6', '7'], m: '42$'
        }
      },
      {
        c: [c`number = input("Number? ")
print(number * 2)`, c`number = input("Numero? ")
print(number * 2)`, c`number = input("Nombre ? ")
print(number * 2)`],
        i: ['4'],
        t: ['Find the mistake: 4 times 2 is 44?', 'Trova l\'errore: 4 per 2 fa 44?', 'Trouve l\'erreur : 4 fois 2 font 44 ?'],
        x: [`Not every mistake stops the program. This one runs, but the answer is wrong: typing 4 shows 44.

The answer of input is always text, and a text times 2 is the text written twice. Python did exactly what the program says.`,
          `Non tutti gli errori fermano il programma. Questo gira, ma la risposta è sbagliata: scrivendo 4 mostra 44.

La risposta di input è sempre testo, e un testo per 2 è il testo scritto due volte. Python ha fatto esattamente quello che dice il programma.`,
          `Toutes les erreurs n'arrêtent pas le programme. Celui-ci tourne, mais la réponse est fausse : en tapant 4 il affiche 44.

La réponse de input est toujours du texte, et un texte fois 2, c'est le texte écrit deux fois. Python a fait exactement ce que dit le programme.`],
        ex: {
          t: ['Fix it: with the answer 4, the last line must be 8.', 'Correggilo: con la risposta 4, l\'ultima riga deve essere 8.', 'Corrige-le : avec la réponse 4, la dernière ligne doit être 8.'],
          h: ['The answer must become a number before it is multiplied.', 'La risposta deve diventare un numero prima di essere moltiplicata.', 'La réponse doit devenir un nombre avant d\'être multipliée.'],
          start: ['number = input("Number? ")\nprint(number * 2)', 'number = input("Numero? ")\nprint(number * 2)', 'number = input("Nombre ? ")\nprint(number * 2)'],
          sol: ['number = int(input("Number? "))\nprint(number * 2)', 'number = int(input("Numero? "))\nprint(number * 2)', 'number = int(input("Nombre ? "))\nprint(number * 2)'],
          i: ['4'], m: '\\n8$', uses: ['int']
        }
      },
      {
        c: [c`apples = int(input("Apples? "))
pears = int(input("Pears? "))
print("Fruit in the basket:", apples + pears)`, c`apples = int(input("Mele? "))
pears = int(input("Pere? "))
print("Frutta nel cestino:", apples + pears)`, c`apples = int(input("Pommes ? "))
pears = int(input("Poires ? "))
print("Fruits dans le panier :", apples + pears)`],
        i: ['3', '4'],
        t: ['Challenge: two questions', 'Sfida: due domande', 'Défi : deux questions'],
        x: [`A program can ask as many questions as it needs: each input waits for its own answer. Both answers become numbers with int, so they can be added.

Here the answers are 3 and 4.`,
          `Un programma può fare tutte le domande che gli servono: ogni input aspetta la sua risposta. Tutte e due le risposte diventano numeri con int, così si possono sommare.

Qui le risposte sono 3 e 4.`,
          `Un programme peut poser autant de questions qu'il lui faut : chaque input attend sa propre réponse. Les deux réponses deviennent des nombres avec int, pour pouvoir les additionner.

Ici les réponses sont 3 et 4.`],
        ex: {
          t: ['From an empty page: ask for the length of a room, then its width, and show its area. With the answers 6 and 4, the last line must end with 24.', 'Partendo da una pagina vuota: chiedi la lunghezza di una stanza, poi la sua larghezza, e mostra la sua area. Con le risposte 6 e 4, l\'ultima riga deve finire con 24.', 'En partant d\'une page vide : demande la longueur d\'une pièce, puis sa largeur, et affiche son aire. Avec les réponses 6 et 4, la dernière ligne doit finir par 24.'],
          h: ['Two input lines, each wrapped in int and kept in its own box. The area is one box times the other.', 'Due righe input, ognuna dentro int e tenuta in una sua scatola. L\'area è una scatola per l\'altra.', 'Deux lignes input, chacune dans int et gardée dans sa propre boîte. L\'aire est une boîte fois l\'autre.'],
          start: '',
          sol: ['length = int(input("Length? "))\nwidth = int(input("Width? "))\nprint("Area:", length * width)', 'length = int(input("Lunghezza? "))\nwidth = int(input("Larghezza? "))\nprint("Area:", length * width)', 'length = int(input("Longueur ? "))\nwidth = int(input("Largeur ? "))\nprint("Aire :", length * width)'],
          i: ['6', '4'], m: '24$', c: 'input[\\s\\S]*input'
        }
      }
    ]
  },
  {
    title: ['Nice messages', 'Messaggi belli', 'De jolis messages'],
    subtitle: ['f-strings: texts with values inside', 'f-string: testi con valori dentro', 'Les f-strings : des textes avec des valeurs dedans'],
    steps: [
      {
        c: [c`name = "Ada"
age = 12
print(f"{name} is {age} years old")`, c`name = "Ada"
age = 12
print(f"{name} ha {age} anni")`, c`name = "Ada"
age = 12
print(f"{name} a {age} ans")`],
        n: ['f-string'],
        t: ['A text with holes', 'Un testo con dei buchi', 'Un texte avec des trous'],
        x: [`Gluing texts and numbers with + and str gets tiring. There is an easier way: put an f just before the opening quote.

Inside that text, anything between curly brackets { } is replaced by its value. It works with any kind of value, with no str needed.`,
          `Incollare testi e numeri con + e str stanca. C'è un modo più facile: metti una f subito prima della virgoletta di apertura.

Dentro quel testo, tutto quello che sta tra parentesi graffe { } viene sostituito dal suo valore. Funziona con qualsiasi tipo di valore, senza bisogno di str.`,
          `Coller des textes et des nombres avec + et str est fatigant. Il y a une façon plus facile : mets un f juste avant le guillemet d'ouverture.

Dans ce texte, tout ce qui est entre accolades { } est remplacé par sa valeur. Ça marche avec n'importe quelle sorte de valeur, sans str.`],
        ex: {
          uses: ['f-string'],
          t: ['Make the program show: Ada is 13 years old   Change the age in the box, and keep the f-string.', 'Fai mostrare al programma: Ada ha 13 anni   Cambia l\'età nella scatola e tieni la f-string.', 'Fais afficher au programme : Ada a 13 ans   Change l\'âge dans la boîte et garde la f-string.'],
          h: ['Change the 12 to 13 in the box, and keep the f-string.', 'Cambia il 12 in 13 nella scatola e tieni la f-string.', 'Change le 12 en 13 dans la boîte et garde la f-string.'],
          start: ['name = "Ada"\nage = 12\nprint(f"{name} is {age} years old")', 'name = "Ada"\nage = 12\nprint(f"{name} ha {age} anni")', 'name = "Ada"\nage = 12\nprint(f"{name} a {age} ans")'],
          sol: ['name = "Ada"\nage = 13\nprint(f"{name} is {age} years old")', 'name = "Ada"\nage = 13\nprint(f"{name} ha {age} anni")', 'name = "Ada"\nage = 13\nprint(f"{name} a {age} ans")'],
          out: ['Ada is 13 years old', 'Ada ha 13 anni', 'Ada a 13 ans']
        },
        w: ['Do not forget the f before the quote, or the curly brackets are shown as they are.', 'Non dimenticare la f prima della virgoletta, o le parentesi graffe vengono mostrate così come sono.', 'N\'oublie pas le f avant le guillemet, ou les accolades sont affichées telles quelles.']
      },
      {
        c: [c`price = 4
count = 3
print(f"{count} x {price} = {count * price}")
print(f"Half of {price} is {price / 2}")`, c`price = 4
count = 3
print(f"{count} x {price} = {count * price}")
print(f"La metà di {price} è {price / 2}")`, c`price = 4
count = 3
print(f"{count} x {price} = {count * price}")
print(f"La moitié de {price} est {price / 2}")`],
        t: ['A sum inside the holes', 'Un conto dentro i buchi', 'Un calcul dans les trous'],
        x: [`Between the curly brackets you can put any piece of Python that gives a value: a sum, a box, a call.

Python works it out and puts the result in the text.`,
          `Tra le parentesi graffe puoi mettere qualsiasi pezzo di Python che dia un valore: un conto, una scatola, una chiamata.

Python lo calcola e mette il risultato nel testo.`,
          `Entre les accolades tu peux mettre n'importe quel morceau de Python qui donne une valeur : un calcul, une boîte, un appel.

Python le calcule et met le résultat dans le texte.`],
        ex: {
          t: ['A room is 6 long and 4 wide. Show: The area is 24   but let Python do the sum inside the curly brackets.', 'Una stanza è lunga 6 e larga 4. Mostra: L\'area è 24   ma lascia che sia Python a fare il conto dentro le parentesi graffe.', 'Une pièce fait 6 de long et 4 de large. Affiche : L\'aire est 24   mais laisse Python faire le calcul dans les accolades.'],
          h: ['Put an f before the quotes. Inside the text, the curly brackets can hold a sum: Python replaces it with the result.', 'Metti una f prima delle virgolette. Dentro il testo, le parentesi graffe possono contenere un conto: Python lo sostituisce con il risultato.', 'Mets un f avant les guillemets. Dans le texte, les accolades peuvent contenir un calcul : Python le remplace par le résultat.'],
          sol: ['print(f"The area is {6 * 4}")', 'print(f"L\'area è {6 * 4}")', 'print(f"L\'aire est {6 * 4}")'], out: ['The area is 24', "L'area è 24", "L'aire est 24"], c: '\\{.*\\*.*\\}'
        }
      },
      {
        c: [c`pi = 3.14159265
print(f"{pi:.2f}")
print(f"{pi:.4f}")
print(f"Price: {2.5:.2f}")`, c`pi = 3.14159265
print(f"{pi:.2f}")
print(f"{pi:.4f}")
print(f"Prezzo: {2.5:.2f}")`, c`pi = 3.14159265
print(f"{pi:.2f}")
print(f"{pi:.4f}")
print(f"Prix : {2.5:.2f}")`],
        n: ['format-spec'],
        t: ['Choose the decimals', 'Scegli i decimali', 'Choisis les décimales'],
        x: [`After the value you can add a colon and a format. :.2f means "show 2 digits after the point".

It is perfect for prices: 2.5 becomes 2.50. The number is cut to the digits you ask for.`,
          `Dopo il valore puoi aggiungere i due punti e un formato. :.2f vuol dire "mostra 2 cifre dopo il punto".

È perfetto per i prezzi: 2.5 diventa 2.50. Il numero viene tagliato alle cifre che chiedi.`,
          `Après la valeur tu peux ajouter deux points et un format. :.2f veut dire "affiche 2 chiffres après le point".

C'est parfait pour les prix : 2.5 devient 2.50. Le nombre est coupé aux chiffres demandés.`],
        ex: {
          t: ['Show the number 7 as a price with two decimals: 7.00', 'Mostra il numero 7 come un prezzo con due decimali: 7.00', 'Affiche le nombre 7 comme un prix avec deux décimales : 7.00'],
          h: ['In an f-string, after the value and a colon, .2f asks for two decimals.', 'In una f-string, dopo il valore e i due punti, .2f chiede due decimali.', 'Dans une f-string, après la valeur et deux-points, .2f demande deux décimales.'],
          sol: 'print(f"{7:.2f}")', out: '7.00', c: ':\\.2f'
        }
      },
      {
        c: [c`big = 1234567
print(f"{big:,}")
print(f"{7:03d}")
print(f"{'left':<8}|{'right':>8}|")`, c`big = 1234567
print(f"{big:,}")
print(f"{7:03d}")
print(f"{'sinistra':<8}|{'destra':>8}|")`, c`big = 1234567
print(f"{big:,}")
print(f"{7:03d}")
print(f"{'gauche':<8}|{'droite':>8}|")`],
        n: ['format-more'],
        t: ['Big numbers and neat columns', 'Numeri grandi e colonne ordinate', 'Grands nombres et colonnes nettes'],
        x: [`There are a few more formats. :, puts commas in big numbers. :03d fills with zeros up to 3 digits.

:<8 and :>8 push the value to the left or to the right inside 8 places. They make tidy columns. You will not need them every day, but they are nice to know.`,
          `Ci sono ancora alcuni formati. :, mette le virgole nei numeri grandi. :03d riempie di zeri fino a 3 cifre.

:<8 e :>8 spingono il valore a sinistra o a destra dentro 8 posti. Fanno colonne ordinate. Non ti serviranno ogni giorno, ma è bello conoscerli.`,
          `Il y a encore quelques formats. :, met des virgules dans les grands nombres. :03d remplit de zéros jusqu'à 3 chiffres.

:<8 et :>8 poussent la valeur à gauche ou à droite dans 8 places. Ils font des colonnes nettes. Tu n'en auras pas besoin tous les jours, mais c'est bien de les connaître.`],
        ex: {
          t: ['Show the number 1234567 with commas: 1,234,567', 'Mostra il numero 1234567 con le virgole: 1,234,567', 'Affiche le nombre 1234567 avec des virgules : 1,234,567'],
          h: ['In an f-string, after the value, a colon and a comma ask for commas between the thousands.', 'In una f-string, dopo il valore, i due punti e una virgola chiedono le virgole tra le migliaia.', 'Dans une f-string, après la valeur, deux-points et une virgule demandent des virgules entre les milliers.'],
          sol: 'print(f"{1234567:,}")', out: '1,234,567', c: ':,'
        }
      },
      {
        c: [c`name = input("Your name? ")
city = input("Your city? ")
print(f"Hi {name}! {city} is a nice place.")`, c`name = input("Come ti chiami? ")
city = input("In che città abiti? ")
print(f"Ciao {name}! {city} è un bel posto.")`, c`name = input("Comment t'appelles-tu ? ")
city = input("Dans quelle ville habites-tu ? ")
print(f"Salut {name} ! {city} est un bel endroit.")`],
        i: ['Ada', 'Rome'],
        t: ['Questions and messages together', 'Domande e messaggi insieme', 'Questions et messages ensemble'],
        x: [`Now put it all together: ask with input, keep the answers in boxes, and build the answer with an f-string.

This is the heart of most small programs: ask, think, answer.`,
          `Ora metti tutto insieme: chiedi con input, tieni le risposte nelle scatole e costruisci la risposta con una f-string.

È il cuore di quasi tutti i piccoli programmi: chiedi, pensa, rispondi.`,
          `Maintenant mets tout ensemble : demande avec input, garde les réponses dans des boîtes et construis la réponse avec une f-string.

C'est le cœur de presque tous les petits programmes : demande, réfléchis, réponds.`],
        ex: {
          t: ['Ask for a favourite animal and then say: I like <the animal> too! (use an f-string).', 'Chiedi un animale preferito e poi di\': Piace anche a me: <l\'animale>! (usa una f-string).', 'Demande un animal préféré puis dis : Moi aussi j\'aime : <l\'animal> ! (utilise une f-string).'],
          h: ['First keep the answer of input in a box. Then an f-string with that box between curly brackets.', 'Prima tieni la risposta di input in una scatola. Poi una f-string con quella scatola tra parentesi graffe.', 'Garde d\'abord la réponse de input dans une boîte. Puis une f-string avec cette boîte entre accolades.'],
          sol: ['animal = input("Favourite animal? ")\nprint(f"I like {animal} too!")', 'animal = input("Animale preferito? ")\nprint(f"Piace anche a me: {animal}!")', 'animal = input("Animal préféré ? ")\nprint(f"Moi aussi j\'aime : {animal} !")'],
          i: {en: ['cat'], it: ['gatto'], fr: ['chat']}, m: ['I like cat too!$', 'Piace anche a me: gatto!$', "Moi aussi j'aime : chat !$"], c: 'f"'
        }
      },
      {
        c: [c`name = input("Name? ")
price = 4
print(f"{name}, two ice creams cost {price * 2:.2f} euro")`, c`name = input("Nome? ")
price = 4
print(f"{name}, due gelati costano {price * 2:.2f} euro")`, c`name = input("Prénom ? ")
price = 4
print(f"{name}, deux glaces coûtent {price * 2:.2f} euros")`],
        i: ['Ada'],
        t: ['Challenge: a neat answer', 'Sfida: una risposta ordinata', 'Défi : une réponse soignée'],
        x: [`An answer, a sum and two decimals, all inside one f-string. The curly brackets can hold a box, a sum, or a sum with :.2f after it.

Here the answer is Ada.`,
          `Una risposta, un conto e due decimali, tutto dentro una f-string. Le parentesi graffe possono contenere una scatola, un conto, o un conto con :.2f dopo.

Qui la risposta è Ada.`,
          `Une réponse, un calcul et deux décimales, tout dans une f-string. Les accolades peuvent contenir une boîte, un calcul, ou un calcul suivi de :.2f.

Ici la réponse est Ada.`],
        ex: {
          t: ['From an empty page: ask how many hours, and show the answer in minutes with an f-string. With the answer 3 it must end with: 3 hours = 180 minutes', 'Partendo da una pagina vuota: chiedi quante ore, e mostra la risposta in minuti con una f-string. Con la risposta 3 deve finire con: 3 ore = 180 minuti', 'En partant d\'une page vide : demande combien d\'heures, et affiche la réponse en minutes avec une f-string. Avec la réponse 3 il doit finir par : 3 heures = 180 minutes'],
          h: ['Turn the answer into a number with int. In the f-string, one pair of curly brackets holds the hours and another holds the hours times 60.', 'Trasforma la risposta in numero con int. Nella f-string, una coppia di graffe contiene le ore e un\'altra contiene le ore per 60.', 'Transforme la réponse en nombre avec int. Dans la f-string, une paire d\'accolades contient les heures et une autre les heures fois 60.'],
          start: '',
          sol: ['hours = int(input("Hours? "))\nprint(f"{hours} hours = {hours * 60} minutes")', 'hours = int(input("Ore? "))\nprint(f"{hours} ore = {hours * 60} minuti")', 'hours = int(input("Heures ? "))\nprint(f"{hours} heures = {hours * 60} minutes")'],
          i: ['3'], m: ['3 hours = 180 minutes$', '3 ore = 180 minuti$', '3 heures = 180 minutes$'], c: 'f"|f\''
        }
      }
    ]
  }
];
