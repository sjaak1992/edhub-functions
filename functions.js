/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23

function addNumbers(x, y, z){
    return x+y+z;

}

const uitkomst1= addNumbers(3, 4, 5);
const uitkomst2 = addNumbers(11, 3, 9)


/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"



function twoStringsTogether(wordOne, wordTwo){
  return wordOne+wordTwo;


}
const output = twoStringsTogether("abra", "cadabra");
console.log(output);

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"s

function oefeningDrie (word, character){
    return character + word + character;

}

const firstString = oefeningDrie("bril", "*");
const secondString = oefeningDrie("beep", "_");
const thirdString = oefeningDrie("kaas", "Q");

const finalResult = oefeningDrie(firstString, secondString, thirdString);
console.log(finalResult);


/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"



/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

