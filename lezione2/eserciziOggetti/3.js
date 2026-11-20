let nome = prompt("Inserire il nome");
let cognome = prompt("Inserire il cognome");
let anni = prompt("Età");
let residenza = prompt("Città di residenza");

let user = {
    name : nome,
    surname : cognome,
    age : anni,
    residence : residenza
}
console.log(user);//punto 1
user.residence="Milano";//Punto 2
user.registrato = true;//punto 3
console.log(user);//punto 4