// Stage 6 · Exact numbers, bits, text, speed, algorithms and async. See tools/build-course.js for the format.
const c = String.raw;

module.exports = [
  {
    title: ['Numbers and text in depth', 'Numeri e testo in profondità', 'Nombres et texte en profondeur'],
    subtitle: ['Exact decimals, fractions, bits and letters', 'Decimali esatti, frazioni, bit e lettere', 'Décimaux exacts, fractions, bits et lettres'],
    steps: [
      {
        c: c`from decimal import Decimal
print(0.1 + 0.2)
print(Decimal("0.1") + Decimal("0.2"))
price = Decimal("19.99")
print(price * 3)
print(Decimal("10") / Decimal("3"))`,
        n: ['decimal.Decimal'],
        t: ['Exact decimals for money', 'Decimali esatti per i soldi', 'Des décimaux exacts pour l\'argent'],
        x: [`Ordinary decimal numbers are never exact: 0.1 + 0.2 is not quite 0.3. For money you cannot accept that. Decimal keeps the numbers exactly, as long as you write them as texts: "0.1", not 0.1.

With Decimal, 0.1 + 0.2 is exactly 0.3, and 19.99 times 3 is exactly 59.97.`,
          `I numeri decimali normali non sono mai esatti: 0.1 + 0.2 non fa proprio 0.3. Per i soldi non lo puoi accettare. Decimal tiene i numeri in modo esatto, purché li scrivi come testi: "0.1", non 0.1.

Con Decimal, 0.1 + 0.2 fa esattamente 0.3, e 19.99 per 3 fa esattamente 59.97.`,
          `Les nombres décimaux ordinaires ne sont jamais exacts : 0.1 + 0.2 ne fait pas tout à fait 0.3. Pour l'argent tu ne peux pas accepter ça. Decimal garde les nombres exactement, à condition de les écrire comme des textes : "0.1", pas 0.1.

Avec Decimal, 0.1 + 0.2 fait exactement 0.3, et 19.99 fois 3 fait exactement 59.97.`],
        ex: {
          t: ['Show the exact sum of "0.7" and "0.1" as Decimal numbers.', 'Mostra la somma esatta di "0.7" e "0.1" come numeri Decimal.', 'Affiche la somme exacte de "0.7" et "0.1" comme nombres Decimal.'],
          h: ['Bring in Decimal, and give it the numbers as texts, between quotes. Then add the two.', 'Porta dentro Decimal, e dagli i numeri come testi, tra virgolette. Poi somma i due.', 'Fais entrer Decimal, et donne-lui les nombres comme textes, entre guillemets. Puis additionne les deux.'],
          sol: 'from decimal import Decimal\nprint(Decimal("0.7") + Decimal("0.1"))', out: '0.8', c: 'Decimal\\("0\\.7"\\)'
        }
      },
      {
        c: c`from fractions import Fraction
half = Fraction(1, 2)
third = Fraction(1, 3)
print(half + third)
print(half * third)
print(Fraction(6, 8))
print(half < third, half > third)`,
        n: ['fractions.Fraction'],
        t: ['Exact fractions', 'Frazioni esatte', 'Fractions exactes'],
        x: [`Fraction keeps a number as the ratio of two whole numbers, so 1/2 + 1/3 is exactly 5/6 and nothing is lost. Python simplifies for you: 6/8 becomes 3/4.

It is perfect for recipes, music and maths, wherever "about one third" is not good enough.`,
          `Fraction tiene un numero come rapporto di due numeri interi, quindi 1/2 + 1/3 fa esattamente 5/6 e non si perde niente. Python semplifica per te: 6/8 diventa 3/4.

È perfetto per ricette, musica e matematica, dovunque "circa un terzo" non basti.`,
          `Fraction garde un nombre comme le rapport de deux nombres entiers, donc 1/2 + 1/3 fait exactement 5/6 et rien n'est perdu. Python simplifie pour toi : 6/8 devient 3/4.

C'est parfait pour les recettes, la musique et les maths, partout où "environ un tiers" ne suffit pas.`],
        ex: {
          t: ['Show 1/4 + 1/4 + 1/2 as an exact fraction (it must show 1).', 'Mostra 1/4 + 1/4 + 1/2 come frazione esatta (deve mostrare 1).', 'Affiche 1/4 + 1/4 + 1/2 comme fraction exacte (il doit afficher 1).'],
          h: ['Fraction takes the number on top and the number below. Add the three fractions.', 'Fraction prende il numero sopra e il numero sotto. Somma le tre frazioni.', 'Fraction prend le nombre du haut et le nombre du bas. Additionne les trois fractions.'],
          sol: 'from fractions import Fraction\nprint(Fraction(1, 4) + Fraction(1, 4) + Fraction(1, 2))', out: '1', c: 'Fraction'
        }
      },
      {
        c: c`n = 202
print(bin(n))
print(oct(n))
print(hex(n))
print(int("11001010", 2), int("ff", 16))
print(0b1010, 0xff)`,
        n: ['bin', 'oct', 'hex'],
        t: ['Other bases: binary, octal, hex', 'Altre basi: binario, ottale, esadecimale', 'D\'autres bases : binaire, octal, hexadécimal'],
        x: [`Computers store numbers in binary: only 0 and 1. bin, oct and hex show a number in base 2, 8 and 16. Base 16 uses the digits 0 to 9 and then a to f.

int(text, base) reads one back: the second number is the base. And you can write numbers like that directly: 0b1010 is binary and 0xff is hexadecimal.`,
          `I computer tengono i numeri in binario: solo 0 e 1. bin, oct e hex mostrano un numero in base 2, 8 e 16. La base 16 usa le cifre da 0 a 9 e poi da a a f.

int(testo, base) ne rilegge uno: il secondo numero è la base. E puoi scrivere i numeri così direttamente: 0b1010 è binario e 0xff è esadecimale.`,
          `Les ordinateurs gardent les nombres en binaire : seulement 0 et 1. bin, oct et hex montrent un nombre en base 2, 8 et 16. La base 16 utilise les chiffres de 0 à 9 puis de a à f.

int(texte, base) en relit un : le deuxième nombre est la base. Et tu peux écrire des nombres comme ça directement : 0b1010 est binaire et 0xff est hexadécimal.`],
        ex: {
          t: ['Show the number 255 in hexadecimal.', 'Mostra il numero 255 in esadecimale.', 'Affiche le nombre 255 en hexadécimal.'],
          h: ['A ready-made helper whose name is short for hexadecimal turns a number into that base.', 'Un aiutante già pronto, il cui nome è l\'abbreviazione di hexadecimal, trasforma un numero in quella base.', 'Un outil tout prêt, dont le nom est l\'abréviation de hexadecimal, transforme un nombre dans cette base.'],
          sol: 'print(hex(255))', out: '0xff', c: 'hex'
        }
      },
      {
        c: c`print(5 & 3)
print(5 | 3)
print(5 ^ 3)
print(1 << 4)
print(64 >> 2)
print(bin(5), bin(3), bin(5 & 3))`,
        n: ['<<', '>>', 'bit-ops'],
        t: ['Bit tricks', 'Trucchi con i bit', 'Astuces avec les bits'],
        x: [`On whole numbers, & | ^ work on the bits one by one. 5 is 101 and 3 is 011 in binary. & keeps a bit only if both have it (001, which is 1), | keeps it if either has it (111, which is 7), and ^ keeps it if only one has it (110, which is 6).

<< moves the bits to the left and >> to the right: every step left doubles the number, every step right halves it.`,
          `Sui numeri interi, & | ^ lavorano sui bit uno per uno. 5 è 101 e 3 è 011 in binario. & tiene un bit solo se ce l'hanno tutti e due (001, cioè 1), | lo tiene se ce l'ha uno dei due (111, cioè 7), e ^ lo tiene se ce l'ha uno solo (110, cioè 6).

<< sposta i bit a sinistra e >> a destra: ogni passo a sinistra raddoppia il numero, ogni passo a destra lo dimezza.`,
          `Sur les nombres entiers, & | ^ travaillent sur les bits un par un. 5 est 101 et 3 est 011 en binaire. & garde un bit seulement si les deux l'ont (001, soit 1), | le garde si l'un des deux l'a (111, soit 7), et ^ le garde si un seul l'a (110, soit 6).

<< déplace les bits vers la gauche et >> vers la droite : chaque pas à gauche double le nombre, chaque pas à droite le divise par deux.`],
        ex: {
          t: ['Show what you get by moving the bits of 3 two steps to the left (3 << 2 is 12).', 'Mostra cosa ottieni spostando i bit di 3 di due passi a sinistra (3 << 2 fa 12).', 'Affiche ce que tu obtiens en déplaçant les bits de 3 de deux pas vers la gauche (3 << 2 fait 12).'],
          h: ['<< moves the bits to the left: the number on its right says by how many places.', '<< sposta i bit a sinistra: il numero alla sua destra dice di quanti posti.', '<< déplace les bits vers la gauche : le nombre à sa droite dit de combien de places.'],
          sol: 'print(3 << 2)', out: '12', c: '<<'
        }
      },
      {
        c: c`word = "café"
print(len(word))
raw = word.encode("utf-8")
print(raw)
print(len(raw))
print(raw.decode("utf-8"))`,
        n: ['.encode', '.decode'],
        t: ['Letters, bytes and unicode', 'Lettere, byte e unicode', 'Lettres, octets et unicode'],
        x: [`A text is made of characters. A file, or a network, carries bytes. encode turns a text into bytes, and "utf-8" is the usual way to do it. decode turns the bytes back into a text.

Accented letters take more than one byte: "café" has 4 characters, but 5 bytes. The b before the quote in the output means "bytes".`,
          `Un testo è fatto di caratteri. Un file, o una rete, trasporta byte. encode trasforma un testo in byte, e "utf-8" è il modo solito di farlo. decode trasforma i byte di nuovo in un testo.

Le lettere accentate occupano più di un byte: "café" ha 4 caratteri, ma 5 byte. La b prima della virgoletta nell'uscita vuol dire "byte".`,
          `Un texte est fait de caractères. Un fichier, ou un réseau, transporte des octets. encode transforme un texte en octets, et "utf-8" est la façon habituelle de le faire. decode retransforme les octets en texte.

Les lettres accentuées prennent plus d'un octet : "café" a 4 caractères, mais 5 octets. Le b avant le guillemet dans la sortie veut dire "bytes" (octets).`],
        ex: {
          t: ['Show how many bytes the text "ça va" takes in utf-8 (6).', 'Mostra quanti byte occupa il testo "ça va" in utf-8 (6).', 'Affiche combien d\'octets prend le texte "ça va" en utf-8 (6).'],
          h: ['encode turns a text into bytes, and len counts the bytes. The letter ç takes more than one.', 'encode trasforma un testo in byte, e len conta i byte. La lettera ç ne occupa più di uno.', 'encode transforme un texte en octets, et len compte les octets. La lettre ç en prend plus d\'un.'],
          sol: 'print(len("ça va".encode("utf-8")))', out: '6', c: 'encode'
        }
      },
      {
        c: c`import math
print(10 ** 30)
print(2 ** 200)
print(math.isqrt(10 ** 20))
print(divmod(17, 5))
print(pow(2, 10, 1000))`,
        n: ['divmod', 'pow', 'math.isqrt'],
        t: ['Huge numbers and small surprises', 'Numeri enormi e piccole sorprese', 'Nombres énormes et petites surprises'],
        x: [`Whole numbers in Python can be as big as the memory allows: 2 ** 200 is no problem at all. math.isqrt gives the exact whole part of a square root, even for huge numbers.

divmod gives the quotient and the remainder together, as a pair. pow(a, b, m) is a to the power of b, but gives only the remainder after dividing by m: it stays fast even with giant numbers.`,
          `I numeri interi in Python possono essere grandi quanto permette la memoria: 2 ** 200 non è affatto un problema. math.isqrt dà la parte intera esatta di una radice quadrata, anche per numeri enormi.

divmod dà insieme il quoziente e il resto, come coppia. pow(a, b, m) è a alla potenza b, ma dà solo il resto dopo la divisione per m: resta veloce anche con numeri giganti.`,
          `Les nombres entiers en Python peuvent être aussi grands que la mémoire le permet : 2 ** 200 n'est pas un problème du tout. math.isqrt donne la partie entière exacte d'une racine carrée, même pour des nombres énormes.

divmod donne ensemble le quotient et le reste, sous forme de paire. pow(a, b, m) est a puissance b, mais ne donne que le reste après la division par m : il reste rapide même avec des nombres géants.`],
        ex: {
          t: ['Show the quotient and the remainder of 100 divided by 7, together, using divmod.', 'Mostra il quoziente e il resto di 100 diviso 7, insieme, usando divmod.', 'Affiche le quotient et le reste de 100 divisé par 7, ensemble, en utilisant divmod.'],
          h: ['divmod takes the two numbers, the one to divide first, and gives back both answers at once.', 'divmod prende i due numeri, prima quello da dividere, e restituisce le due risposte insieme.', 'divmod prend les deux nombres, celui à diviser d\'abord, et rend les deux réponses à la fois.'],
          sol: 'print(divmod(100, 7))', out: '(14, 2)', c: 'divmod'
        }
      }
    ]
  },
  {
    title: ['Fast and slow', 'Veloce e lento', 'Vite et lent'],
    subtitle: ['Measure, choose well, and a little big-O', 'Misura, scegli bene, e un po\' di big-O', 'Mesure, choisis bien, et un peu de big-O'],
    steps: [
      {
        c: [c`import timeit
slow = timeit.timeit("sum([n * n for n in range(1000)])", number=200)
fast = timeit.timeit("sum(n * n for n in range(1000))", number=200)
print(slow > 0, fast > 0)

import time
start = time.perf_counter()
total = 0
for n in range(200000):
    total += n
seconds = time.perf_counter() - start
print("A loop of 200,000 steps took less than 5 seconds:", seconds < 5)`, c`import timeit
slow = timeit.timeit("sum([n * n for n in range(1000)])", number=200)
fast = timeit.timeit("sum(n * n for n in range(1000))", number=200)
print(slow > 0, fast > 0)

import time
start = time.perf_counter()
total = 0
for n in range(200000):
    total += n
seconds = time.perf_counter() - start
print("Un ciclo di 200.000 giri ha richiesto meno di 5 secondi:", seconds < 5)`, c`import timeit
slow = timeit.timeit("sum([n * n for n in range(1000)])", number=200)
fast = timeit.timeit("sum(n * n for n in range(1000))", number=200)
print(slow > 0, fast > 0)

import time
start = time.perf_counter()
total = 0
for n in range(200000):
    total += n
seconds = time.perf_counter() - start
print("Une boucle de 200 000 tours a pris moins de 5 secondes :", seconds < 5)`],
        n: ['module:timeit', 'timeit.timeit', 'arg:number'],
        t: ['Measure, do not guess', 'Misura, non indovinare', 'Mesure, ne devine pas'],
        x: [`When you wonder which way is faster, measure it. timeit.timeit runs a small piece of code, written as a text, many times (number= says how many) and gives the total time. time.perf_counter is a stopwatch.

Programmers are often wrong about what is slow. The only way to be sure is to measure. Here we only check that the times are real: the exact numbers change on every computer.`,
          `Quando ti chiedi quale modo è più veloce, misuralo. timeit.timeit esegue un piccolo pezzo di codice, scritto come testo, molte volte (number= dice quante) e dà il tempo totale. time.perf_counter è un cronometro.

I programmatori sbagliano spesso su cosa è lento. L'unico modo per essere sicuri è misurare. Qui controlliamo solo che i tempi siano veri: i numeri esatti cambiano su ogni computer.`,
          `Quand tu te demandes quelle façon est la plus rapide, mesure-la. timeit.timeit lance un petit morceau de code, écrit comme un texte, plusieurs fois (number= dit combien) et donne le temps total. time.perf_counter est un chronomètre.

Les programmeurs se trompent souvent sur ce qui est lent. La seule façon d'être sûr est de mesurer. Ici on vérifie seulement que les temps sont réels : les nombres exacts changent sur chaque ordinateur.`],
        ex: {
          t: ['Use timeit.timeit to time the code "sum(range(100))", run 10 times, and show whether the time is bigger than 0 (True).', 'Usa timeit.timeit per misurare il codice "sum(range(100))", eseguito 10 volte, e mostra se il tempo è maggiore di 0 (True).', 'Utilise timeit.timeit pour chronométrer le code "sum(range(100))", lancé 10 fois, et affiche si le temps est plus grand que 0 (True).'],
          h: ['timeit.timeit takes the code as a text, and number= for how many runs. Compare what it gives back with 0.', 'timeit.timeit prende il codice come testo, e number= per quante volte eseguirlo. Confronta quello che restituisce con 0.', 'timeit.timeit prend le code comme texte, et number= pour le nombre d\'exécutions. Compare ce qu\'il rend avec 0.'],
          sol: 'import timeit\nprint(timeit.timeit("sum(range(100))", number=10) > 0)', out: 'True', c: 'timeit\\.timeit'
        }
      },
      {
        c: [c`import time
names_list = list(range(50000))
names_set = set(names_list)

start = time.perf_counter()
for n in range(0, 50000, 500):
    n in names_list
list_time = time.perf_counter() - start

start = time.perf_counter()
for n in range(0, 50000, 500):
    n in names_set
set_time = time.perf_counter() - start
print("The set is faster:", set_time < list_time)`, c`import time
names_list = list(range(50000))
names_set = set(names_list)

start = time.perf_counter()
for n in range(0, 50000, 500):
    n in names_list
list_time = time.perf_counter() - start

start = time.perf_counter()
for n in range(0, 50000, 500):
    n in names_set
set_time = time.perf_counter() - start
print("L'insieme è più veloce:", set_time < list_time)`, c`import time
names_list = list(range(50000))
names_set = set(names_list)

start = time.perf_counter()
for n in range(0, 50000, 500):
    n in names_list
list_time = time.perf_counter() - start

start = time.perf_counter()
for n in range(0, 50000, 500):
    n in names_set
set_time = time.perf_counter() - start
print("L'ensemble est plus rapide :", set_time < list_time)`],
        t: ['The right box for the job', 'La scatola giusta per il lavoro', 'La bonne boîte pour le travail'],
        x: [`Asking "is it in the list?" makes Python look at the items one by one. A set or a dictionary jumps straight to the answer. With 50,000 items the difference is huge.

If you ask "is it in there?" many times, use a set. If you look things up by a name, use a dictionary.`,
          `Chiedere "c'è nella lista?" fa guardare a Python gli elementi uno per uno. Un insieme o un dizionario salta dritto alla risposta. Con 50.000 elementi la differenza è enorme.

Se chiedi "c'è?" molte volte, usa un insieme. Se cerchi le cose da un nome, usa un dizionario.`,
          `Demander "est-ce dans la liste ?" fait regarder à Python les éléments un par un. Un ensemble ou un dictionnaire saute droit à la réponse. Avec 50 000 éléments la différence est énorme.

Si tu demandes "est-ce là ?" plusieurs fois, utilise un ensemble. Si tu cherches des choses par un nom, utilise un dictionnaire.`],
        ex: {
          t: ['Make a set of the numbers from 0 to 999, and show whether 500 is in it (True).', 'Fai un insieme dei numeri da 0 a 999 e mostra se 500 è dentro (True).', 'Fais un ensemble des nombres de 0 à 999 et affiche si 500 est dedans (True).'],
          h: ['range(1000) gives 0 to 999; set(...) turns it into a set. Then in asks if a number is there.', 'range(1000) dà da 0 a 999; set(...) lo trasforma in un insieme. Poi in chiede se un numero c\'è.', 'range(1000) donne 0 à 999 ; set(...) le transforme en ensemble. Puis in demande si un nombre y est.'],
          sol: 'numbers = set(range(1000))\nprint(500 in numbers)', out: 'True', c: 'set\\(range'
        }
      },
      {
        c: c`def count_steps_linear(n):
    steps = 0
    for i in range(n):
        steps += 1
    return steps

def count_steps_quadratic(n):
    steps = 0
    for i in range(n):
        for j in range(n):
            steps += 1
    return steps

def count_steps_halving(n):
    steps = 0
    while n > 1:
        n = n // 2
        steps += 1
    return steps

for n in [10, 100, 1000]:
    print(n, count_steps_linear(n), count_steps_quadratic(n), count_steps_halving(n))`,
        t: ['How work grows: big-O', 'Come cresce il lavoro: big-O', 'Comment le travail grandit : big-O'],
        x: [`Computer scientists describe how the work grows when the amount of data grows. One loop: ten times more data, ten times more work (linear). A loop inside a loop: a hundred times more work (quadratic). Halving each time: only a few more steps (logarithmic).

Look at the table: for 1000 items, the quadratic way needs a million steps, and the halving way only 9. This way of thinking is called big-O.`,
          `Gli informatici descrivono come cresce il lavoro quando cresce la quantità di dati. Un ciclo: dieci volte più dati, dieci volte più lavoro (lineare). Un ciclo dentro un ciclo: cento volte più lavoro (quadratico). Dimezzare ogni volta: solo pochi passi in più (logaritmico).

Guarda la tabella: per 1000 elementi il modo quadratico richiede un milione di passi e quello che dimezza solo 9. Questo modo di ragionare si chiama big-O.`,
          `Les informaticiens décrivent comment le travail grandit quand la quantité de données grandit. Une boucle : dix fois plus de données, dix fois plus de travail (linéaire). Une boucle dans une boucle : cent fois plus de travail (quadratique). Diviser par deux à chaque fois : seulement quelques pas de plus (logarithmique).

Regarde le tableau : pour 1000 éléments, la façon quadratique demande un million de pas, et celle qui divise par deux seulement 9. Cette façon de raisonner s'appelle big-O.`],
        ex: {
          t: ['Show how many steps count_steps_halving takes for 1,000,000 (19).', 'Mostra quanti passi richiede count_steps_halving per 1.000.000 (19).', 'Affiche combien de pas count_steps_halving prend pour 1 000 000 (19).'],
          h: ['Call the function with one million, written without commas or spaces, and show the result.', 'Chiama la funzione con un milione, scritto senza virgole né spazi, e mostra il risultato.', 'Appelle la fonction avec un million, écrit sans virgules ni espaces, et affiche le résultat.'],
          start: 'def count_steps_halving(n):\n    steps = 0\n    while n > 1:\n        n = n // 2\n        steps += 1\n    return steps', sol: 'def count_steps_halving(n):\n    steps = 0\n    while n > 1:\n        n = n // 2\n        steps += 1\n    return steps\n\nprint(count_steps_halving(1000000))', out: '19', c: 'count_steps_halving\\(1000000\\)'
        }
      },
      {
        c: c`from functools import lru_cache

def slow_fib(n):
    return n if n < 2 else slow_fib(n - 1) + slow_fib(n - 2)

@lru_cache(maxsize=None)
def fast_fib(n):
    return n if n < 2 else fast_fib(n - 1) + fast_fib(n - 2)

print(slow_fib(20))
print(fast_fib(20))
print(fast_fib(200))
print(fast_fib.cache_info().hits > 0)`,
        n: ['functools.lru_cache', '.cache_info'],
        t: ['Remember the answers', 'Ricorda le risposte', 'Souviens-toi des réponses'],
        x: [`The slow Fibonacci works out the same things again and again. With the decorator lru_cache, each answer is worked out once, and the next time the same question comes, it is given at once.

fast_fib(200) is instant, while slow_fib(200) would not finish in your lifetime. cache_info tells how many times the memory helped.`,
          `Il Fibonacci lento ricalcola le stesse cose ancora e ancora. Con il decoratore lru_cache, ogni risposta viene calcolata una volta e, quando la stessa domanda torna, viene data subito.

fast_fib(200) è istantaneo, mentre slow_fib(200) non finirebbe nella tua vita. cache_info dice quante volte la memoria ha aiutato.`,
          `Le Fibonacci lent recalcule les mêmes choses encore et encore. Avec le décorateur lru_cache, chaque réponse est calculée une fois, et la fois suivante où la même question arrive, elle est donnée tout de suite.

fast_fib(200) est instantané, alors que slow_fib(200) ne finirait pas de ta vie. cache_info dit combien de fois la mémoire a aidé.`],
        ex: {
          t: ['Make a cached function fact(n) with @lru_cache(maxsize=None): it returns 1 when n is 0, and otherwise n * fact(n - 1). Show fact(10) (3628800).', 'Metti @lru_cache(maxsize=None) sulla funzione fact(n) = n * fact(n - 1), con il caso base fact(0) = 1, e mostra fact(10) (3628800).', 'Mets @lru_cache(maxsize=None) sur la fonction fact(n) = n * fact(n - 1), avec le cas de base fact(0) = 1, et affiche fact(10) (3628800).'],
          h: ['Bring in lru_cache and put it above the def, with maxsize=None in its brackets. Then write fact the recursive way.', 'Porta dentro lru_cache e mettilo sopra il def, con maxsize=None tra le parentesi. Poi scrivi fact in modo ricorsivo.', 'Fais entrer lru_cache et mets-le au-dessus du def, avec maxsize=None entre ses parenthèses. Puis écris fact de façon récursive.'],
          sol: 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fact(n):\n    return 1 if n == 0 else n * fact(n - 1)\n\nprint(fact(10))', out: '3628800', c: 'lru_cache'
        }
      }
    ]
  },
  {
    title: ['Algorithms', 'Algoritmi', 'Algorithmes'],
    subtitle: ['Search, sort and think step by step', 'Cerca, ordina e ragiona passo dopo passo', 'Cherche, trie et raisonne pas à pas'],
    steps: [
      {
        c: c`def linear_search(items, target):
    for index, item in enumerate(items):
        if item == target:
            return index
    return -1

def binary_search(sorted_items, target):
    low, high = 0, len(sorted_items) - 1
    steps = 0
    while low <= high:
        steps += 1
        middle = (low + high) // 2
        if sorted_items[middle] == target:
            return middle, steps
        if sorted_items[middle] < target:
            low = middle + 1
        else:
            high = middle - 1
    return -1, steps

numbers = list(range(0, 1000, 3))
print(linear_search(numbers, 600))
print(binary_search(numbers, 600))
print(binary_search(numbers, 601))`,
        t: ['Find it fast: binary search', 'Trovalo in fretta: ricerca binaria', 'Trouve vite : recherche binaire'],
        x: [`In a sorted list you do not need to look at every item. Look at the middle: if the target is bigger, forget the left half. If it is smaller, forget the right half. Repeat. Each step throws away half of what is left.

Looking for 600 in 334 numbers takes about 9 steps, instead of 200. The result is a pair: the place, and how many steps it took. If the item is not there, it gives -1.`,
          `In una lista ordinata non serve guardare ogni elemento. Guarda quello di mezzo: se il bersaglio è più grande, dimentica la metà di sinistra. Se è più piccolo, dimentica la metà di destra. Ripeti. Ogni passo butta via metà di quello che resta.

Cercare 600 in 334 numeri richiede circa 9 passi, invece di 200. Il risultato è una coppia: il posto e quanti passi ci sono voluti. Se l'elemento non c'è, dà -1.`,
          `Dans une liste triée tu n'as pas besoin de regarder chaque élément. Regarde celui du milieu : si la cible est plus grande, oublie la moitié de gauche. Si elle est plus petite, oublie la moitié de droite. Recommence. Chaque pas jette la moitié de ce qui reste.

Chercher 600 dans 334 nombres prend environ 9 pas, au lieu de 200. Le résultat est une paire : la place, et combien de pas il a fallu. Si l'élément n'y est pas, il donne -1.`],
        ex: {
          t: ['In the list of the even numbers 0, 2, 4, ... 98, find the place of 50 with binary_search and show only the place (25).', 'Nella lista dei numeri pari 0, 2, 4, ... 98, trova il posto di 50 con binary_search e mostra solo il posto (25).', 'Dans la liste des nombres pairs 0, 2, 4, ... 98, trouve la place de 50 avec binary_search et affiche seulement la place (25).'],
          h: ['range(0, 100, 2) gives the even numbers. binary_search gives back two things: take them into two names and show only the first.', 'range(0, 100, 2) dà i numeri pari. binary_search restituisce due cose: prendile in due nomi e mostra solo la prima.', 'range(0, 100, 2) donne les nombres pairs. binary_search rend deux choses : prends-les dans deux noms et affiche seulement la première.'],
          start: 'def binary_search(sorted_items, target):\n    low, high = 0, len(sorted_items) - 1\n    steps = 0\n    while low <= high:\n        steps += 1\n        middle = (low + high) // 2\n        if sorted_items[middle] == target:\n            return middle, steps\n        if sorted_items[middle] < target:\n            low = middle + 1\n        else:\n            high = middle - 1\n    return -1, steps', sol: 'def binary_search(sorted_items, target):\n    low, high = 0, len(sorted_items) - 1\n    steps = 0\n    while low <= high:\n        steps += 1\n        middle = (low + high) // 2\n        if sorted_items[middle] == target:\n            return middle, steps\n        if sorted_items[middle] < target:\n            low = middle + 1\n        else:\n            high = middle - 1\n    return -1, steps\n\nplace, steps = binary_search(list(range(0, 100, 2)), 50)\nprint(place)', out: '25', c: 'binary_search\\('
        }
      },
      {
        c: c`def bubble_sort(items):
    items = list(items)
    for end in range(len(items) - 1, 0, -1):
        for i in range(end):
            if items[i] > items[i + 1]:
                items[i], items[i + 1] = items[i + 1], items[i]
    return items

def insertion_sort(items):
    result = []
    for item in items:
        position = 0
        while position < len(result) and result[position] < item:
            position += 1
        result.insert(position, item)
    return result

data = [5, 2, 9, 1, 7, 3]
print(bubble_sort(data))
print(insertion_sort(data))
print(data)`,
        t: ['Sort by hand', 'Ordina a mano', 'Trie à la main'],
        x: [`Python has sorted(...), but writing a sort yourself teaches a lot. Bubble sort swaps neighbours that are in the wrong order, again and again, until the biggest bubbles up to the end.

Insertion sort builds a new list and puts each item at the right place, like sorting cards in your hand. Both leave the original list alone: the last line shows that data did not change.`,
          `Python ha sorted(...), ma scrivere un ordinamento da soli insegna molto. Il bubble sort scambia i vicini che sono nell'ordine sbagliato, ancora e ancora, finché il più grande risale in fondo.

L'insertion sort costruisce una lista nuova e mette ogni elemento al posto giusto, come ordinare le carte in mano. Tutti e due lasciano in pace la lista originale: l'ultima riga mostra che data non è cambiata.`,
          `Python a sorted(...), mais écrire un tri soi-même apprend beaucoup. Le tri à bulles échange les voisins qui sont dans le mauvais ordre, encore et encore, jusqu'à ce que le plus grand remonte à la fin.

Le tri par insertion construit une nouvelle liste et met chaque élément à la bonne place, comme trier des cartes dans ta main. Les deux laissent tranquille la liste d'origine : la dernière ligne montre que data n'a pas changé.`],
        ex: {
          t: ['Use bubble_sort to sort the list [4, 1, 3, 2] and show it.', 'Usa bubble_sort per ordinare la lista [4, 1, 3, 2] e mostrala.', 'Utilise bubble_sort pour trier la liste [4, 1, 3, 2] et affiche-la.'],
          h: ['The function is written: give it the list and show what it gives back.', 'La funzione è scritta: dagli la lista e mostra quello che restituisce.', 'La fonction est écrite : donne-lui la liste et affiche ce qu\'elle rend.'],
          start: 'def bubble_sort(items):\n    items = list(items)\n    for end in range(len(items) - 1, 0, -1):\n        for i in range(end):\n            if items[i] > items[i + 1]:\n                items[i], items[i + 1] = items[i + 1], items[i]\n    return items', sol: 'def bubble_sort(items):\n    items = list(items)\n    for end in range(len(items) - 1, 0, -1):\n        for i in range(end):\n            if items[i] > items[i + 1]:\n                items[i], items[i + 1] = items[i + 1], items[i]\n    return items\n\nprint(bubble_sort([4, 1, 3, 2]))', out: '[1, 2, 3, 4]', c: 'bubble_sort\\(\\['
        }
      },
      {
        c: c`import random

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    return result + left[i:] + right[j:]

def merge_sort(items):
    if len(items) <= 1:
        return items
    middle = len(items) // 2
    return merge(merge_sort(items[:middle]), merge_sort(items[middle:]))

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))
random.seed(1)
big = [random.randint(0, 1000) for n in range(500)]
print(merge_sort(big) == sorted(big))`,
        t: ['Divide and conquer: merge sort', 'Dividi e conquista: merge sort', 'Diviser pour régner : tri fusion'],
        x: [`Merge sort uses recursion: cut the list in half, sort each half the same way, and merge the two sorted halves by always taking the smaller front item.

It is much faster than bubble sort on big lists. The last line checks it against Python's own sorted on 500 random numbers: it says True.`,
          `Il merge sort usa la ricorsione: taglia la lista a metà, ordina ogni metà allo stesso modo e unisci le due metà ordinate prendendo sempre l'elemento più piccolo davanti.

È molto più veloce del bubble sort sulle liste grandi. L'ultima riga lo controlla contro il sorted di Python su 500 numeri a caso: dice True.`,
          `Le tri fusion utilise la récursion : coupe la liste en deux, trie chaque moitié de la même façon, et fusionne les deux moitiés triées en prenant toujours le plus petit élément de devant.

Il est bien plus rapide que le tri à bulles sur de grandes listes. La dernière ligne le vérifie contre le sorted de Python sur 500 nombres au hasard : il dit True.`],
        ex: {
          t: ['Use merge_sort to sort [3, 1, 2] and show it.', 'Usa merge_sort per ordinare [3, 1, 2] e mostralo.', 'Utilise merge_sort pour trier [3, 1, 2] et affiche-le.'],
          h: ['Same as with bubble_sort: the function takes a list and gives back a sorted one.', 'Come con bubble_sort: la funzione prende una lista e ne restituisce una ordinata.', 'Comme avec bubble_sort : la fonction prend une liste et en rend une triée.'],
          start: 'def merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    return result + left[i:] + right[j:]\n\ndef merge_sort(items):\n    if len(items) <= 1:\n        return items\n    middle = len(items) // 2\n    return merge(merge_sort(items[:middle]), merge_sort(items[middle:]))',
          sol: 'def merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    return result + left[i:] + right[j:]\n\ndef merge_sort(items):\n    if len(items) <= 1:\n        return items\n    middle = len(items) // 2\n    return merge(merge_sort(items[:middle]), merge_sort(items[middle:]))\n\nprint(merge_sort([3, 1, 2]))', out: '[1, 2, 3]', c: 'merge_sort\\(\\['
        }
      },
      {
        c: c`def is_prime(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

def sieve(limit):
    marks = [True] * (limit + 1)
    marks[0:2] = [False, False]
    for p in range(2, int(limit ** 0.5) + 1):
        if marks[p]:
            for multiple in range(p * p, limit + 1, p):
                marks[multiple] = False
    return [n for n, ok in enumerate(marks) if ok]

print([n for n in range(30) if is_prime(n)])
print(sieve(50))
print(len(sieve(10000)))`,
        t: ['Prime numbers', 'I numeri primi', 'Les nombres premiers'],
        x: [`A prime has no divisor other than 1 and itself. To test one number you only need to check divisors up to its square root: that is the range in is_prime.

To find all the primes up to a limit, the sieve of Eratosthenes crosses out the multiples of each prime. What stays standing is prime. There are 1229 primes below 10,000.`,
          `Un primo non ha divisori oltre a 1 e a se stesso. Per verificare un numero devi controllare solo i divisori fino alla sua radice quadrata: è il range in is_prime.

Per trovare tutti i primi fino a un limite, il crivello di Eratostene cancella i multipli di ogni primo. Quello che resta in piedi è primo. Ci sono 1229 primi sotto 10.000.`,
          `Un nombre premier n'a pas d'autre diviseur que 1 et lui-même. Pour tester un nombre tu n'as qu'à vérifier les diviseurs jusqu'à sa racine carrée : c'est le range dans is_prime.

Pour trouver tous les nombres premiers jusqu'à une limite, le crible d'Ératosthène barre les multiples de chaque nombre premier. Ce qui reste debout est premier. Il y a 1229 nombres premiers sous 10 000.`],
        ex: {
          t: ['Show whether 97 is prime, using is_prime (True).', 'Mostra se 97 è primo, usando is_prime (True).', 'Affiche si 97 est premier, en utilisant is_prime (True).'],
          h: ['is_prime gives back True or False: show what it says about 97.', 'is_prime restituisce True o False: mostra cosa dice di 97.', 'is_prime rend True ou False : affiche ce qu\'elle dit de 97.'],
          start: 'def is_prime(n):\n    if n < 2:\n        return False\n    for d in range(2, int(n ** 0.5) + 1):\n        if n % d == 0:\n            return False\n    return True', sol: 'def is_prime(n):\n    if n < 2:\n        return False\n    for d in range(2, int(n ** 0.5) + 1):\n        if n % d == 0:\n            return False\n    return True\n\nprint(is_prime(97))', out: 'True', c: 'is_prime\\(97\\)'
        }
      },
      {
        c: c`def solve(n, start="A", spare="B", goal="C", moves=None):
    if moves is None:
        moves = []
    if n == 0:
        return moves
    solve(n - 1, start, goal, spare, moves)
    moves.append(f"{start}->{goal}")
    solve(n - 1, spare, start, goal, moves)
    return moves

print(solve(2))
print(solve(3))
print(len(solve(10)), 2 ** 10 - 1)

def permutations(items):
    if len(items) <= 1:
        return [items]
    result = []
    for i, item in enumerate(items):
        for rest in permutations(items[:i] + items[i + 1:]):
            result.append([item] + rest)
    return result

print(permutations([1, 2, 3]))`,
        t: ['Hard puzzles with recursion', 'Rompicapi difficili con la ricorsione', 'Casse-tête difficiles avec la récursion'],
        x: [`The Towers of Hanoi: move n discs from one peg to another, one at a time, never putting a big disc on a small one. The recursion says: move n-1 discs out of the way, move the big one, then move the n-1 discs on top of it.

The number of moves doubles with each disc: 10 discs need 1023 moves. And permutations lists every order of some items, again with recursion: take one item, and arrange the rest.`,
          `Le Torri di Hanoi: sposta n dischi da un piolo a un altro, uno alla volta, senza mai mettere un disco grande su uno piccolo. La ricorsione dice: sposta n-1 dischi fuori dai piedi, sposta quello grande, poi sposta gli n-1 dischi sopra di lui.

Il numero di mosse raddoppia a ogni disco: 10 dischi richiedono 1023 mosse. E permutations elenca ogni ordine di alcuni elementi, sempre con la ricorsione: prendi un elemento e disponi il resto.`,
          `Les Tours de Hanoï : déplace n disques d'un piquet à un autre, un à la fois, sans jamais mettre un grand disque sur un petit. La récursion dit : écarte n-1 disques, déplace le grand, puis déplace les n-1 disques dessus.

Le nombre de coups double à chaque disque : 10 disques demandent 1023 coups. Et permutations liste chaque ordre de quelques éléments, toujours avec la récursion : prends un élément, et arrange le reste.`],
        ex: {
          t: ['Show how many moves are needed for 5 discs (31), using len and solve.', 'Mostra quante mosse servono per 5 dischi (31), usando len e solve.', 'Affiche combien de coups il faut pour 5 disques (31), en utilisant len et solve.'],
          h: ['solve gives back the list of moves. len counts the items of a list.', 'solve restituisce la lista delle mosse. len conta gli elementi di una lista.', 'solve rend la liste des coups. len compte les éléments d\'une liste.'],
          start: 'def solve(n, start="A", spare="B", goal="C", moves=None):\n    if moves is None:\n        moves = []\n    if n == 0:\n        return moves\n    solve(n - 1, start, goal, spare, moves)\n    moves.append(f"{start}->{goal}")\n    solve(n - 1, spare, start, goal, moves)\n    return moves', sol: 'def solve(n, start="A", spare="B", goal="C", moves=None):\n    if moves is None:\n        moves = []\n    if n == 0:\n        return moves\n    solve(n - 1, start, goal, spare, moves)\n    moves.append(f"{start}->{goal}")\n    solve(n - 1, spare, start, goal, moves)\n    return moves\n\nprint(len(solve(5)))', out: '31', c: 'solve\\(5\\)'
        }
      }
    ]
  },
  {
    title: ['Doing many things at once', 'Fare molte cose insieme', 'Faire plein de choses à la fois'],
    subtitle: ['async and await', 'async e await', 'async et await'],
    steps: [
      {
        c: [c`import asyncio

async def hello():
    print("Hello")
    return 42

result = asyncio.run(hello())
print(result)`, c`import asyncio

async def hello():
    print("Ciao")
    return 42

result = asyncio.run(hello())
print(result)`, c`import asyncio

async def hello():
    print("Bonjour")
    return 42

result = asyncio.run(hello())
print(result)`],
        n: ['async', 'module:asyncio', 'asyncio.run'],
        t: ['A function that can wait', 'Una funzione che sa aspettare', 'Une fonction qui sait attendre'],
        x: [`Until now, a program did one thing at a time. async def makes a coroutine: a function that can pause while it waits for something slow (a timer, a download) and let others work in the meantime.

Calling a coroutine does not run it. asyncio.run, from the asyncio tool box, runs it from the normal part of the program, and gives back what it returns.`,
          `Finora un programma faceva una cosa alla volta. async def crea una coroutine: una funzione che può fermarsi mentre aspetta qualcosa di lento (un timer, un download) e lasciar lavorare gli altri nel frattempo.

Chiamare una coroutine non la esegue. asyncio.run, dalla cassetta asyncio, la esegue dalla parte normale del programma e restituisce quello che lei restituisce.`,
          `Jusqu'ici un programme faisait une chose à la fois. async def crée une coroutine : une fonction qui peut faire une pause pendant qu'elle attend quelque chose de lent (une minuterie, un téléchargement) et laisser travailler les autres entre-temps.

Appeler une coroutine ne la lance pas. asyncio.run, de la boîte asyncio, la lance depuis la partie normale du programme, et rend ce qu'elle rend.`],
        ex: {
          t: ['Make a coroutine called answer that returns 7. Run it with asyncio.run and show the result.', 'Crea una coroutine che si chiama answer che restituisce 7. Eseguila con asyncio.run e mostra il risultato.', 'Crée une coroutine qui s\'appelle answer qui rend 7. Lance-la avec asyncio.run et affiche le résultat.'],
          h: ['async def makes a coroutine; inside it, return gives back the 7. asyncio.run runs it and gives back what it returned.', 'async def fa una coroutine; dentro, return restituisce il 7. asyncio.run la esegue e restituisce quello che ha restituito.', 'async def fait une coroutine ; dedans, return rend le 7. asyncio.run l\'exécute et rend ce qu\'elle a rendu.'],
          sol: 'import asyncio\n\nasync def answer():\n    return 7\n\nprint(asyncio.run(answer()))', out: '7', c: 'async def answer'
        },
        w: ['async needs a recent browser on the website. The desktop app always has it.', 'async ha bisogno di un browser recente sul sito. L\'app per computer ce l\'ha sempre.', 'async a besoin d\'un navigateur récent sur le site. L\'application de bureau l\'a toujours.']
      },
      {
        c: [c`import asyncio

async def hello():
    print("Hello")
    await asyncio.sleep(0.01)
    print("World")
    return 42

result = asyncio.run(hello())
print(result)`, c`import asyncio

async def hello():
    print("Ciao")
    await asyncio.sleep(0.01)
    print("Mondo")
    return 42

result = asyncio.run(hello())
print(result)`, c`import asyncio

async def hello():
    print("Bonjour")
    await asyncio.sleep(0.01)
    print("Monde")
    return 42

result = asyncio.run(hello())
print(result)`],
        n: ['await', 'asyncio.sleep'],
        t: ['Waiting with await', 'Aspettare con await', 'Attendre avec await'],
        x: [`await marks the place where a coroutine waits and lets others work. asyncio.sleep waits for some seconds, without freezing the rest of the program, unlike a normal pause.

Here the coroutine says the first word, waits a very short time, and says the second word. You only write await inside an async def.`,
          `await segna il punto in cui una coroutine aspetta e lascia lavorare gli altri. asyncio.sleep aspetta alcuni secondi, senza bloccare il resto del programma, a differenza di una pausa normale.

Qui la coroutine dice la prima parola, aspetta un tempo brevissimo e dice la seconda parola. Scrivi await solo dentro un async def.`,
          `await marque l'endroit où une coroutine attend et laisse les autres travailler. asyncio.sleep attend quelques secondes, sans bloquer le reste du programme, contrairement à une pause normale.

Ici la coroutine dit le premier mot, attend un temps très court et dit le deuxième mot. Tu n'écris await que dans un async def.`],
        ex: {
          t: ['Make a coroutine that shows "a", waits 0.01 seconds with await, and shows "b". Run it.', 'Crea una coroutine che mostra "a", aspetta 0.01 secondi con await e mostra "b". Eseguila.', 'Crée une coroutine qui affiche "a", attend 0.01 seconde avec await et affiche "b". Lance-la.'],
          h: ['Inside an async def: a print, then await with asyncio.sleep, then the second print. Run the coroutine with asyncio.run.', 'Dentro un async def: un print, poi await con asyncio.sleep, poi il secondo print. Esegui la coroutine con asyncio.run.', 'Dans un async def : un print, puis await avec asyncio.sleep, puis le second print. Exécute la coroutine avec asyncio.run.'],
          sol: 'import asyncio\n\nasync def letters():\n    print("a")\n    await asyncio.sleep(0.01)\n    print("b")\n\nasyncio.run(letters())', out: 'a\nb', c: 'await'
        }
      },
      {
        c: c`import asyncio

async def fetch(name, seconds):
    await asyncio.sleep(seconds)
    print(name, "done")
    return name.upper()

async def main():
    results = await asyncio.gather(
        fetch("slow", 0.06),
        fetch("fast", 0.01),
        fetch("medium", 0.03),
    )
    print(results)

asyncio.run(main())`,
        n: ['asyncio.gather'],
        t: ['Wait for many at the same time', 'Aspetta molte cose insieme', 'Attends plusieurs choses en même temps'],
        x: [`gather starts several coroutines together and waits for all of them. They run at the same time: the fast one finishes first, even though it was started second. The total time is that of the slowest one, not the sum of all.

The answers come back in a list, in the order you wrote the coroutines, not in the order they finished.`,
          `gather fa partire più coroutine insieme e le aspetta tutte. Girano nello stesso momento: quella veloce finisce per prima, anche se è partita per seconda. Il tempo totale è quello della più lenta, non la somma di tutte.

Le risposte tornano in una lista, nell'ordine in cui hai scritto le coroutine, non in quello in cui sono finite.`,
          `gather lance plusieurs coroutines ensemble et les attend toutes. Elles tournent en même temps : la rapide finit la première, même si elle a démarré en deuxième. Le temps total est celui de la plus lente, pas la somme de toutes.

Les réponses reviennent dans une liste, dans l'ordre où tu as écrit les coroutines, pas dans l'ordre où elles ont fini.`],
        ex: {
          t: ['Run the two fetches "a" (0.02 seconds) and "b" (0.01 seconds) together with gather and show the list of the results (["A", "B"]).', 'Esegui insieme con gather i due fetch "a" (0.02 secondi) e "b" (0.01 secondi) e mostra la lista dei risultati (["A", "B"]).', 'Lance ensemble avec gather les deux fetch "a" (0.02 seconde) et "b" (0.01 seconde) et affiche la liste des résultats (["A", "B"]).'],
          h: ['Inside main, await asyncio.gather with the two calls of fetch: it gives back their results as a list.', 'Dentro main, await asyncio.gather con le due chiamate di fetch: restituisce i loro risultati come lista.', 'Dans main, await asyncio.gather avec les deux appels de fetch : il rend leurs résultats sous forme de liste.'],
          start: 'import asyncio\n\nasync def fetch(name, seconds):\n    await asyncio.sleep(seconds)\n    return name.upper()', sol: 'import asyncio\n\nasync def fetch(name, seconds):\n    await asyncio.sleep(seconds)\n    return name.upper()\n\nasync def main():\n    results = await asyncio.gather(fetch("a", 0.02), fetch("b", 0.01))\n    print(results)\n\nasyncio.run(main())', out: "['A', 'B']", c: 'gather'
        }
      },
      {
        c: [c`import asyncio

async def producer(queue):
    for n in range(3):
        await queue.put(n)
        print("made", n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("used", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())
print("finished")`, c`import asyncio

async def producer(queue):
    for n in range(3):
        await queue.put(n)
        print("fatto", n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("usato", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())
print("finito")`, c`import asyncio

async def producer(queue):
    for n in range(3):
        await queue.put(n)
        print("fait", n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("utilisé", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())
print("terminé")`],
        n: ['asyncio.Queue', '.put'],
        t: ['Tasks that pass things to each other', 'Compiti che si passano le cose', 'Des tâches qui se passent des choses'],
        x: [`A Queue lets one coroutine hand things to another. The producer puts items in, with put. The consumer takes them out as they come, with get, and None is the agreed sign for "no more".

The two work together at the same time, passing the items between them. This pattern is used a lot: one part makes the work, another part does it.`,
          `Una Queue lascia che una coroutine passi cose a un'altra. Il produttore mette gli elementi dentro, con put. Il consumatore li toglie man mano che arrivano, con get, e None è il segno stabilito per "non ce ne sono più".

I due lavorano insieme nello stesso momento, passandosi gli elementi. Questo schema si usa molto: una parte prepara il lavoro, un'altra lo fa.`,
          `Une Queue laisse une coroutine passer des choses à une autre. Le producteur met les éléments dedans, avec put. Le consommateur les enlève au fur et à mesure, avec get, et None est le signe convenu pour "il n'y en a plus".

Les deux travaillent ensemble en même temps, en se passant les éléments. Ce schéma est très utilisé : une partie prépare le travail, une autre le fait.`],
        ex: {
          uses: ['import', 'await'],
          t: ['Change the producer to make 2 items instead of 3. The consumer must use only 2.', 'Cambia il produttore perché faccia 2 elementi invece di 3. Il consumatore deve usarne solo 2.', 'Change le producteur pour qu\'il fasse 2 éléments au lieu de 3. Le consommateur ne doit en utiliser que 2.'],
          h: ['Which number in the producer says how many items it makes?', 'Quale numero nel producer dice quanti elementi fa?', 'Quel nombre dans le producer dit combien d\'éléments il fabrique ?'],
          start: [c`import asyncio

async def producer(queue):
    for n in range(3):
        await queue.put(n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("used", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())`, c`import asyncio

async def producer(queue):
    for n in range(3):
        await queue.put(n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("usato", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())`, c`import asyncio

async def producer(queue):
    for n in range(3):
        await queue.put(n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("utilisé", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())`],
          sol: [c`import asyncio

async def producer(queue):
    for n in range(2):
        await queue.put(n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("used", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())`, c`import asyncio

async def producer(queue):
    for n in range(2):
        await queue.put(n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("usato", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())`, c`import asyncio

async def producer(queue):
    for n in range(2):
        await queue.put(n)
    await queue.put(None)

async def consumer(queue):
    while True:
        item = await queue.get()
        if item is None:
            break
        print("utilisé", item)

async def main():
    queue = asyncio.Queue()
    await asyncio.gather(producer(queue), consumer(queue))

asyncio.run(main())`],
          exact: true
        }
      },
      {
        c: [c`import asyncio

async def slow():
    await asyncio.sleep(1)
    return "never reached"

async def main():
    try:
        result = await asyncio.wait_for(slow(), timeout=0.05)
    except asyncio.TimeoutError:
        print("Too slow, gave up")

asyncio.run(main())`, c`import asyncio

async def slow():
    await asyncio.sleep(1)
    return "mai raggiunto"

async def main():
    try:
        result = await asyncio.wait_for(slow(), timeout=0.05)
    except asyncio.TimeoutError:
        print("Troppo lento, rinuncio")

asyncio.run(main())`, c`import asyncio

async def slow():
    await asyncio.sleep(1)
    return "jamais atteint"

async def main():
    try:
        result = await asyncio.wait_for(slow(), timeout=0.05)
    except asyncio.TimeoutError:
        print("Trop lent, j'abandonne")

asyncio.run(main())`],
        n: ['asyncio.wait_for', 'arg:timeout', 'asyncio.TimeoutError'],
        t: ['Time limits', 'Limiti di tempo', 'Limites de temps'],
        x: [`wait_for stops waiting after a time limit (timeout=) and raises TimeoutError, which you can catch with try and except. Here slow would take a whole second, but we only wait a twentieth of it.

It is how programs avoid waiting forever for something that does not answer.`,
          `wait_for smette di aspettare dopo un limite di tempo (timeout=) e alza TimeoutError, che puoi prendere con try ed except. Qui slow ci metterebbe un secondo intero, ma noi aspettiamo solo un ventesimo.

È così che i programmi evitano di aspettare per sempre qualcosa che non risponde.`,
          `wait_for arrête d'attendre après une limite de temps (timeout=) et lève TimeoutError, que tu peux attraper avec try et except. Ici slow prendrait toute une seconde, mais on n'attend qu'un vingtième.

C'est ainsi que les programmes évitent d'attendre pour toujours quelque chose qui ne répond pas.`],
        ex: {
          t: ['Make the program show "ok" after waiting for asyncio.sleep(0.01) with a time limit of 1 second.', 'Fai mostrare al programma "ok" dopo aver aspettato asyncio.sleep(0.01) con un limite di tempo di 1 secondo.', 'Fais afficher "ok" au programme après avoir attendu asyncio.sleep(0.01) avec une limite de temps de 1 seconde.'],
          h: ['asyncio.wait_for takes what to wait for, and timeout=. Use await with it inside a coroutine, then show the word.', 'asyncio.wait_for prende cosa aspettare, e timeout=. Usa await con lui dentro una coroutine, poi mostra la parola.', 'asyncio.wait_for prend ce qu\'il faut attendre, et timeout=. Utilise await avec lui dans une coroutine, puis affiche le mot.'],
          sol: 'import asyncio\n\nasync def main():\n    await asyncio.wait_for(asyncio.sleep(0.01), timeout=1)\n    print("ok")\n\nasyncio.run(main())', out: 'ok', c: 'wait_for'
        }
      },
      {
        c: [c`import asyncio

async def work():
    await asyncio.sleep(0.01)
    return "background"

async def main():
    task = asyncio.create_task(work())
    print("doing other things")
    print(await task)

asyncio.run(main())`, c`import asyncio

async def work():
    await asyncio.sleep(0.01)
    return "in secondo piano"

async def main():
    task = asyncio.create_task(work())
    print("faccio altre cose")
    print(await task)

asyncio.run(main())`, c`import asyncio

async def work():
    await asyncio.sleep(0.01)
    return "en arrière-plan"

async def main():
    task = asyncio.create_task(work())
    print("je fais d'autres choses")
    print(await task)

asyncio.run(main())`],
        n: ['asyncio.create_task'],
        t: ['Tasks in the background', 'Compiti in secondo piano', 'Des tâches en arrière-plan'],
        x: [`create_task starts a coroutine in the background and gives you a task. The program goes on with other things, and later you await the task to get its answer.

This is how a program can start a long job, keep talking with the user, and pick up the result when it is ready.`,
          `create_task fa partire una coroutine in secondo piano e ti dà un task. Il programma va avanti con altre cose, e più tardi fai await sul task per avere la sua risposta.

È così che un programma può far partire un lavoro lungo, continuare a parlare con l'utente e prendere il risultato quando è pronto.`,
          `create_task lance une coroutine en arrière-plan et te donne une tâche. Le programme continue avec d'autres choses, et plus tard tu fais await sur la tâche pour avoir sa réponse.

C'est ainsi qu'un programme peut lancer un long travail, continuer à parler avec l'utilisateur et récupérer le résultat quand il est prêt.`],
        ex: {
          t: ['Start work() as a background task, show "waiting", and then show the result of the task.', 'Fai partire work() come compito in secondo piano, mostra "attendo" e poi mostra il risultato del compito.', 'Lance work() comme tâche en arrière-plan, affiche "j\'attends" et puis affiche le résultat de la tâche.'],
          h: ['create_task starts work() at once and gives back a task. Show the first word, then await the task to get its result, and show it.', 'create_task fa partire work() subito e restituisce un task. Mostra la prima parola, poi await del task per avere il suo risultato, e mostralo.', 'create_task lance work() tout de suite et rend une tâche. Affiche le premier mot, puis await la tâche pour avoir son résultat, et affiche-le.'],
          start: 'import asyncio\n\nasync def work():\n    await asyncio.sleep(0.01)\n    return "done"', sol: 'import asyncio\n\nasync def work():\n    await asyncio.sleep(0.01)\n    return "done"\n\nasync def main():\n    task = asyncio.create_task(work())\n    print("waiting")\n    print(await task)\n\nasyncio.run(main())', out: 'waiting\ndone', c: 'create_task'
        }
      }
    ]
  }
];
