// L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// Chiedi all'utente la prima parola
const firstWord = prompt ("Inserisci la prima parola");

//Chiedi all'utente la seconda parola
const secondWord = prompt ("Inserisci la seconda parola");


//Calcola la lunghezza della prima parola
const firstWordLenght = firstWord.length;
console.log (firstWord, firstWordLenght);

//Calcola la lunghezza della seconda parola
const secondWordLenght = secondWord.length;
console.log (secondWord, secondWordLenght);

// Confronto prima e seconda parola
let result;
if (firstWordLenght > secondWordLenght) {
    result = `${secondWord} ${firstWord}`;
} else if (secondWordLenght > firstWordLenght) {
    result = `${secondWord} ${firstWord}`;
} else {
    result = `Le parole hanno la stessa lunghezza, ${firstWord} ${secondWord}`;
}

//Risultato
console.log(result);
