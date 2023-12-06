// ESERCIZIO 1

let num1 = 5;
let num2 = 5;
let num3 = 5;
let num4 = 5;
let num5 = 5;

let somma = num1+num2+num3+num4+num5;

let media = (somma/5);

console.log(`La somma tra i numeri equivale a ${somma} e la media risulta ${media}`);

// ESERCIZIO 2

let annoCorrente = 2023;
let annoNascita = 1995;
let age = annoCorrente - annoNascita;
let differenza = 100 - age;

console.log(`Hai ${age} anni e ti mancano ${differenza} anni per compierne 100`);

// ESERCIZIO 3

let totaleGatti = 44;
let gattiPerFila = 6;
let numeroFile = Math.round(totaleGatti/gattiPerFila);
let resto = totaleGatti % numeroFile;
let mancanti = gattiPerFila - resto;

console.log(`Ci sono ${numeroFile} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${resto}`)


// EXTRA

let lunedi = 2;
let martedi = 3;
let mercoledi = 5;
let giovedi = 11;
let venerdi = 7;
let sabato = 18;
let domenica = 6;

let dayHoy = Math.max(lunedi, martedi, mercoledi, giovedi, venerdi, sabato, domenica);
let dayCold = Math.min(lunedi, martedi, mercoledi, giovedi, venerdi, sabato, domenica);

console.log(`la temperatura più calda è ${dayHoy} mentre quella più fredda è ${dayCold}`);