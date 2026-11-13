let prezzoIntero=10;
let anni=prompt("Quanti anni hai?");
let sconto=0;
let prezzoFinale;
if(anni<12){
    sconto=prezzoIntero*(50/100);
}
else if(anni>=12&&anni<=17){
    sconto=prezzoIntero*(20/100);
}
else if(anni>65){
    sconto=prezzoIntero*(30/100);
}
alert("Prezzo intero: $" + prezzoIntero);
alert("Sconto: $" + sconto);
prezzoFinale=prezzoIntero - sconto;
alert("Prezzo finale: $" + prezzoFinale);
