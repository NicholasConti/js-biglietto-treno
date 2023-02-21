"use stirct;"
//1)
let kmUser = parseFloat(prompt('Inserisci quanti km vuoi percorrere'));
//2)
let ageUser = parseFloat(prompt('Inserisci la tua eta'));
//3)
if ((isNaN(kmUser)) || (isNaN(ageUser))){
    kmUser = parseFloat(prompt('Inserisci quanti km vuoi percorrere'));
    ageUser = parseFloat(prompt('Inserisci la tua eta'));
}
//4)
let prezzo = kmUser * 0.21;
//5)
if (ageUser < 18){
    prezzo = ( prezzo - (prezzo * 20 /100));
} else if (ageUser >= 65){
    prezzo = ( prezzo - (prezzo * 40 /100));
} else{
    prezzo = prezzo;
}
//6)
console.log( `La somma da pagare e ${prezzo.toFixed(2)}£`);