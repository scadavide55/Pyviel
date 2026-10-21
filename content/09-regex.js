// Stage 4 · Regular expressions. See tools/build-course.js for the format.
const c = String.raw;

module.exports = [
  {
    title: ['Find patterns in text', 'Trova schemi nel testo', 'Trouve des motifs dans le texte'],
    subtitle: ['Regular expressions', 'Le espressioni regolari', 'Les expressions régulières'],
    steps: [
      {
        c: [c`import re
text = "My phone is 555-1234 and my friend's is 555-9876."
print(re.search(r"\d{3}-\d{4}", text))
print(re.search(r"xyz", text))`, c`import re
text = "Il mio telefono è 555-1234 e quello del mio amico è 555-9876."
print(re.search(r"\d{3}-\d{4}", text))
print(re.search(r"xyz", text))`, c`import re
text = "Mon téléphone est le 555-1234 et celui de mon ami est le 555-9876."
print(re.search(r"\d{3}-\d{4}", text))
print(re.search(r"xyz", text))`],
        n: ['module:re', 're.search', 'raw-string'],
        t: ['Look for a pattern', 'Cerca uno schema', 'Cherche un motif'],
        x: [`Sometimes you do not know the exact text to look for, only its shape: "three digits, a dash, four digits". A regular expression, or regex, describes such a shape. \\d means "a digit" and {3} means "three of them".

re.search looks for the shape in a text and gives the first match, or None when there is none. The pattern is written as an r text (a raw text), because patterns are full of backslashes.`,
          `A volte non conosci il testo esatto da cercare, solo la sua forma: "tre cifre, un trattino, quattro cifre". Un'espressione regolare, o regex, descrive una forma così. \\d vuol dire "una cifra" e {3} vuol dire "tre di loro".

re.search cerca la forma in un testo e dà la prima corrispondenza, o None quando non ce n'è. Lo schema si scrive come testo r (un testo grezzo), perché gli schemi sono pieni di barre rovesciate.`,
          `Parfois tu ne connais pas le texte exact à chercher, seulement sa forme : "trois chiffres, un tiret, quatre chiffres". Une expression régulière, ou regex, décrit une telle forme. \\d veut dire "un chiffre" et {3} veut dire "trois d'entre eux".

re.search cherche la forme dans un texte et donne la première correspondance, ou None quand il n'y en a pas. Le motif s'écrit comme un texte r (un texte brut), parce que les motifs sont pleins de barres obliques inversées.`],
        ex: {
          t: ['Look for three digits in a row in the text "room 204 and 305", and show the match.', 'Cerca tre cifre di fila nel testo "room 204 and 305" e mostra la corrispondenza.', 'Cherche trois chiffres de suite dans le texte "room 204 and 305" et affiche la correspondance.'],
          h: ['re.search takes the pattern first, then the text. \\d is one digit, and {3} right after it asks for three in a row.', 're.search prende prima lo schema, poi il testo. \\d è una cifra, e {3} subito dopo ne chiede tre di fila.', 're.search prend d\'abord le motif, puis le texte. \\d est un chiffre, et {3} juste après en demande trois d\'affilée.'],
          start: 'import re\ntext = "room 204 and 305"', sol: 'import re\ntext = "room 204 and 305"\nprint(re.search(r"\\d{3}", text))', m: "match='204'", c: 're\\.search'
        }
      },
      {
        c: [c`import re
text = "My phone is 555-1234 and my friend's is 555-9876."
found = re.search(r"\d{3}-\d{4}", text)
print(found.group())
print(re.findall(r"\d{3}-\d{4}", text))`, c`import re
text = "Il mio telefono è 555-1234 e quello del mio amico è 555-9876."
found = re.search(r"\d{3}-\d{4}", text)
print(found.group())
print(re.findall(r"\d{3}-\d{4}", text))`, c`import re
text = "Mon téléphone est le 555-1234 et celui de mon ami est le 555-9876."
found = re.search(r"\d{3}-\d{4}", text)
print(found.group())
print(re.findall(r"\d{3}-\d{4}", text))`],
        n: ['re.findall', '.group'],
        t: ['The text that was found', 'Il testo trovato', 'Le texte trouvé'],
        x: [`A match is not the text itself: it also knows where it was found. group() gives the text that was found.

re.findall does not stop at the first one: it gives a list with every match in the text.`,
          `Una corrispondenza non è il testo stesso: sa anche dove è stata trovata. group() dà il testo che è stato trovato.

re.findall non si ferma alla prima: dà una lista con ogni corrispondenza nel testo.`,
          `Une correspondance n'est pas le texte lui-même : elle sait aussi où elle a été trouvée. group() donne le texte qui a été trouvé.

re.findall ne s'arrête pas à la première : il donne une liste avec chaque correspondance du texte.`],
        ex: {
          t: ['Show the list of all the numbers (digits in a row, with \\d+) in the text "a1 b22 c333".', 'Mostra la lista di tutti i numeri (cifre di fila, con \\d+) nel testo "a1 b22 c333".', 'Affiche la liste de tous les nombres (chiffres de suite, avec \\d+) dans le texte "a1 b22 c333".'],
          h: ['findall gives every match, as a list. \\d+ means one digit or more.', 'findall dà ogni corrispondenza, come lista. \\d+ vuol dire una cifra o più.', 'findall donne chaque correspondance, sous forme de liste. \\d+ veut dire un chiffre ou plus.'],
          start: 'import re\ntext = "a1 b22 c333"', sol: 'import re\ntext = "a1 b22 c333"\nprint(re.findall(r"\\d+", text))', out: "['1', '22', '333']", c: 'findall'
        }
      },
      {
        c: c`import re
print(re.findall(r"\w+", "Hello, big world!"))
print(re.findall(r"[aeiou]", "education"))
print(re.findall(r"cat|dog", "a cat and a dog"))
print(re.findall(r"colou?r", "color colour"))
print(bool(re.match(r"^[A-Z][a-z]+$", "Python")))`,
        n: ['regex-blocks', 're.match'],
        t: ['The building blocks', 'I mattoncini', 'Les briques'],
        x: [`A few signs go a long way. \\w is a letter or digit, [aeiou] is any one letter from the list, | means "or", ? makes the thing before it optional, + means "one or more" and * means "zero or more". ^ and $ are the start and the end of the whole text.

re.match checks the pattern at the very start of the text. With ^ and $ it checks that the whole text has the shape: here, a capital letter followed by small letters.`,
          `Pochi segni bastano per molto. \\w è una lettera o una cifra, [aeiou] è una qualsiasi lettera della lista, | vuol dire "oppure", ? rende facoltativa la cosa prima, + vuol dire "una o più" e * vuol dire "zero o più". ^ e $ sono l'inizio e la fine di tutto il testo.

re.match controlla lo schema proprio all'inizio del testo. Con ^ e $ controlla che tutto il testo abbia la forma: qui, una lettera maiuscola seguita da lettere minuscole.`,
          `Quelques signes suffisent à faire beaucoup. \\w est une lettre ou un chiffre, [aeiou] est n'importe quelle lettre de la liste, | veut dire "ou", ? rend facultative la chose d'avant, + veut dire "un ou plus" et * veut dire "zéro ou plus". ^ et $ sont le début et la fin de tout le texte.

re.match vérifie le motif tout au début du texte. Avec ^ et $ il vérifie que tout le texte a la forme : ici, une majuscule suivie de minuscules.`],
        ex: {
          t: ['Show the list of the words made of letters or digits (\\w+) in "one, two; three".', 'Mostra la lista delle parole fatte di lettere o cifre (\\w+) in "one, two; three".', 'Affiche la liste des mots faits de lettres ou de chiffres (\\w+) dans "one, two; three".'],
          h: ['findall again, with the pattern \\w+ and the text of the task.', 'Ancora findall, con lo schema \\w+ e il testo del compito.', 'Encore findall, avec le motif \\w+ et le texte de la consigne.'],
          sol: 'import re\nprint(re.findall(r"\\w+", "one, two; three"))', out: "['one', 'two', 'three']", c: '\\\\w\\+'
        }
      },
      {
        c: [c`import re
text = "Name: Ada, Age: 12; Name: Max, Age: 9"
print(re.findall(r"Name: (\w+), Age: (\d+)", text))
print(re.sub(r"\d+", "#", text))
print(re.split(r"[,;] ", text))`, c`import re
text = "Nome: Ada, Età: 12; Nome: Max, Età: 9"
print(re.findall(r"Nome: (\w+), Età: (\d+)", text))
print(re.sub(r"\d+", "#", text))
print(re.split(r"[,;] ", text))`, c`import re
text = "Nom : Ada, Âge : 12 ; Nom : Max, Âge : 9"
print(re.findall(r"Nom : (\w+), Âge : (\d+)", text))
print(re.sub(r"\d+", "#", text))
print(re.split(r"[,;] ", text))`],
        n: ['re.sub', 're.split'],
        t: ['Pick parts out, replace, split', 'Estrai parti, sostituisci, dividi', 'Extrais des parties, remplace, coupe'],
        x: [`Round brackets in a pattern catch a part of the match. With them, findall gives a tuple for every match, with the caught parts: the name and the age.

re.sub replaces every match with something else. re.split cuts the text at every match and gives a list of the pieces.`,
          `Le parentesi tonde in uno schema catturano una parte della corrispondenza. Con loro, findall dà una tupla per ogni corrispondenza, con le parti catturate: il nome e l'età.

re.sub sostituisce ogni corrispondenza con qualcos'altro. re.split taglia il testo a ogni corrispondenza e dà una lista dei pezzi.`,
          `Des parenthèses rondes dans un motif attrapent une partie de la correspondance. Avec elles, findall donne un tuple pour chaque correspondance, avec les parties attrapées : le nom et l'âge.

re.sub remplace chaque correspondance par autre chose. re.split coupe le texte à chaque correspondance et donne une liste des morceaux.`],
        ex: {
          t: ['Replace every digit in the text "a1b2c3" with a star (*), using re.sub with \\d. Show the result.', 'Sostituisci ogni cifra nel testo "a1b2c3" con una stella (*), usando re.sub con \\d. Mostra il risultato.', 'Remplace chaque chiffre dans le texte "a1b2c3" par une étoile (*), en utilisant re.sub avec \\d. Affiche le résultat.'],
          h: ['re.sub takes three things: the pattern to find, what to put instead, and the text.', 're.sub prende tre cose: lo schema da trovare, cosa mettere al suo posto, e il testo.', 're.sub prend trois choses : le motif à trouver, ce qu\'il faut mettre à la place, et le texte.'],
          sol: 'import re\nprint(re.sub(r"\\d", "*", "a1b2c3"))', out: 'a*b*c*', c: 're\\.sub'
        }
      },
      {
        c: c`import re

def valid_email(text):
    return bool(re.fullmatch(r"[\w.]+@[\w]+\.[a-z]{2,}", text))

for address in ["ada@example.com", "ada@", "max.smith@site.org", "no spaces@x.com"]:
    print(address, "->", valid_email(address))`,
        n: ['re.fullmatch'],
        t: ['A real check: an email address', 'Un controllo vero: un indirizzo email', 'Une vraie vérification : une adresse e-mail'],
        x: [`Regexes shine when you check what people type. fullmatch asks that the whole text fits the pattern. This one accepts letters, digits and dots, an @, a name, a dot, and at least two letters at the end.

It is a simple pattern: real email rules are much longer. But it already refuses the wrong ones.`,
          `Le regex brillano quando controlli quello che scrivono le persone. fullmatch chiede che tutto il testo vada bene con lo schema. Questo accetta lettere, cifre e punti, una @, un nome, un punto e almeno due lettere in fondo.

È uno schema semplice: le regole vere delle email sono molto più lunghe. Ma rifiuta già quelli sbagliati.`,
          `Les regex brillent quand tu vérifies ce que les gens tapent. fullmatch demande que tout le texte convienne au motif. Celui-ci accepte des lettres, des chiffres et des points, un @, un nom, un point, et au moins deux lettres à la fin.

C'est un motif simple : les vraies règles des e-mails sont bien plus longues. Mais il refuse déjà les mauvaises.`],
        ex: {
          t: ['Use re.fullmatch with \\d+ to check that "2024" is only digits, and show True or False.', 'Usa re.fullmatch con \\d+ per controllare che "2024" sia fatto solo di cifre e mostra True o False.', 'Utilise re.fullmatch avec \\d+ pour vérifier que "2024" n\'est fait que de chiffres et affiche True ou False.'],
          h: ['fullmatch says yes only when the whole text matches. It gives a match or None: bool turns that into True or False.', 'fullmatch dice sì solo quando tutto il testo corrisponde. Dà una corrispondenza o None: bool lo trasforma in True o False.', 'fullmatch dit oui seulement quand tout le texte correspond. Il donne une correspondance ou None : bool le transforme en True ou False.'],
          sol: 'import re\nprint(bool(re.fullmatch(r"\\d+", "2024")))', out: 'True', c: 'fullmatch'
        }
      },
      {
        c: [c`import re

text = "3 cats and 12 dogs"
print(re.findall(r"\d+", text))
print(sum(int(n) for n in re.findall(r"\d+", text)))`, c`import re

text = "3 gatti e 12 cani"
print(re.findall(r"\d+", text))
print(sum(int(n) for n in re.findall(r"\d+", text)))`, c`import re

text = "3 chats et 12 chiens"
print(re.findall(r"\d+", text))
print(sum(int(n) for n in re.findall(r"\d+", text)))`],
        t: ['Challenge: words with a capital letter', 'Sfida: parole con la maiuscola', 'Défi : des mots avec une majuscule'],
        x: ['findall gives back every piece of the text that matches the pattern. \\d+ means one digit or more, so it finds whole numbers, which can then be added up.', 'findall restituisce ogni pezzo del testo che corrisponde allo schema. \\d+ vuol dire una cifra o più, quindi trova i numeri interi, che poi si possono sommare.', 'findall rend chaque morceau du texte qui correspond au motif. \\d+ veut dire un chiffre ou plus, donc il trouve les nombres entiers, qu\'on peut ensuite additionner.'],
        ex: {
          t: ['Find every word that starts with a capital letter in the sentence in the box text, and show the list.', 'Trova ogni parola che inizia con una lettera maiuscola nella frase della scatola text, e mostra la lista.', 'Trouve chaque mot qui commence par une majuscule dans la phrase de la boîte text, et affiche la liste.'],
          h: ['A capital letter is [A-Z], and the small letters after it are [a-z]*. Use findall with that pattern.', 'Una lettera maiuscola è [A-Z], e le lettere piccole dopo sono [a-z]*. Usa findall con quello schema.', 'Une majuscule est [A-Z], et les petites lettres après sont [a-z]*. Utilise findall avec ce motif.'],
          start: ['import re\n\ntext = "Ada and Bo met Cy in Rome"', 'import re\n\ntext = "Ada e Bo hanno visto Cy a Roma"', 'import re\n\ntext = "Ada et Bo ont vu Cy à Rome"'],
          sol: ['import re\n\ntext = "Ada and Bo met Cy in Rome"\nprint(re.findall(r"[A-Z][a-z]*", text))', 'import re\n\ntext = "Ada e Bo hanno visto Cy a Roma"\nprint(re.findall(r"[A-Z][a-z]*", text))', 'import re\n\ntext = "Ada et Bo ont vu Cy à Rome"\nprint(re.findall(r"[A-Z][a-z]*", text))'],
          out: ['[\'Ada\', \'Bo\', \'Cy\', \'Rome\']', '[\'Ada\', \'Bo\', \'Cy\', \'Roma\']', '[\'Ada\', \'Bo\', \'Cy\', \'Rome\']'], uses: ['.findall']
        }
      }
    ]
  }
];
