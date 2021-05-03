// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/*funzione per verificare se la parola è palindroma*/
function palindroma(parola1, parola2){ 
        return(parola1 == parola2);   
}

var parola = prompt("inserisci una parola").toLowerCase();
console.log(parola);
var parolaInvertita = '';
if(parola.trim() == '' || !isNaN(parseInt(parola)) && typeof parseInt(parola) == "number") {
    alert("Errore!");
}else{
    for(var i = parola.length-1; i>= 0; i--){ 
        parolaInvertita += parola[i];
    }
    console.log(parolaInvertita);
    var risultato = palindroma(parola, parolaInvertita);

    if(risultato){
        document.getElementById("messaggio").innerHTML = "La parola <span>" +parola+ "</span> è palindroma";
    }else{
        document.getElementById("messaggio").innerHTML = "La parola <span>" +parola+ "</span> non è palindroma";
    }
}


