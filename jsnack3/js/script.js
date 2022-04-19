//Calcola la somma e la media dei primi 10 numeri


//Dato
let somma = 0; 
console.log ("Somma", somma); 


//Calcolo
for (let i = 1; i<=10; i++) {
    console.log(i);
    somma = somma + i;
}

//Risultato della somma 
console.log("Somma finale", somma);

//Risultato della media
const media = somma / 10;
console.log ("Media finale", media)