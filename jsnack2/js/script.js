//Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//se è dispari inseriscilo nell'array.

//Crea un array vuoto
const arrayVuoto = [];

//Chiedi per 6 volte all'utente si inserire un numero 
for (let i=0; i < 6; i++) {
    const userNumber = parseInt(prompt("Inserisci il numero"));
    console.log (userNumber);

//Se il numero è dispari inseriscilo dentro l'array
    if (userNumber % 2 === 1) {
        arrayVuoto.push(userNumber);
    }
}

//Risultato in caso se il numero è dispari
console.log(arrayVuoto);