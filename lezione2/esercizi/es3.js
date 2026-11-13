let n = prompt("Inserire un numero");
let somma = 0;
for(let i=0;i<=Math.abs(n);i++){
    somma += i;//somma = somma + i;
}
if(n>=0){
alert(somma);
}
else{
    alert(-somma);
}