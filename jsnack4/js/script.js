//Chiedi un numero di 4 cifre all'utente
//e calcola la somma di tutte le cifre che compongono il numero.


//Chiedi all'utente un numero di 4 cifre
let numero = prompt ("Inserisci un numero di 4 cifre");
console.log ("Hai inserito", numero);

//Dato
  let somma = 0;

//Calcola la somma di tutte le cifre che compongono il numero
while (numero){
    somma += numero % 10;
    numero = Math.floor(numero / 10);
}


//Risultato
console.log("La somma del numero che hai inserito è:", somma);