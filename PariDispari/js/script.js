// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/*functions*/
function numeriRandom(min,max){
    return number = Math.floor(Math.random() * (max - min) + min);
}
function isEven(number){
    return ( number % 2 == 0);
}

var scelta = prompt("Inserisci pari o dispari:").toLowerCase();
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

if(( numeroUtente < 1 ||  numeroUtente > 5) || (isNaN(numeroUtente)) || (scelta !="pari" && scelta!="dispari") || (scelta == "pari" && numeroUtente % 2 != 0 ) || (scelta == "dispari" && numeroUtente % 2 == 0)){
    alert("Errore!");
}else{
document.getElementById("numero-utente").innerHTML = "Il numero utente scelto è "+ scelta + ": "+ numeroUtente;
// console.log("il numero utente è:", numeroUtente);
var num1 = 1;
var num2 = 5;
var numeroPc = numeriRandom(num1,num2);
// console.log("il numero randomico è:",numeroPc);
document.getElementById("numero-Pc").innerHTML = "Il numero randomico è:" + numeroPc;
var somma = numeroUtente + numeroPc;
// console.log("la somma dei numeri:",somma);
document.getElementById("somma").innerHTML = "La somma dei numeri è:" + somma;
var evenOdd = isEven(somma);
if(evenOdd){
    document.getElementById("somma").innerHTML = "La somma dei numeri è pari: " + somma;
}else{
    document.getElementById("somma").innerHTML = "La somma dei numeri è dispari: " + somma;
}

// console.log(evenOdd);
if((evenOdd == true && scelta == "pari") || (evenOdd== false && scelta =="dispari")){
   document.getElementById("risultato").innerHTML = "Hai vinto!";
    // console.log("Hai vinto!");
}else{
    document.getElementById("risultato").innerHTML = "Hai perso!";
    // console.log("Hai perso!");
}    
}
 