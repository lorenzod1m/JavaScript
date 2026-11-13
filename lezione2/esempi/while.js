let i=0;
while(i<=3){//stampa 0,1,2,3
    console.log(i);
    i++;
}

let parola;
while(true){
    parola = prompt("Scrivere una parola, scrivere fine per annullare");
    if(parola=="fine"){
        alert("Fine del ciclo.");
        break;
    }
    else{
        alert(parola);
    }
}