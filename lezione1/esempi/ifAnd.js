//Entrata in un club per sole donne, requisiti maggiorenne e donna.
let anni=17;
let sesso="Uomo";
if(anni>=18&&sesso=="Donna"){
    alert("Benvenuta");
}
else if(anni<18){
    alert("Accesso negato: sei minorenne");
}
else if(sesso!="Donna"){
    alert("Accesso negato: club per sole donne");
}
else{
    alert("Accesso negato");
}


