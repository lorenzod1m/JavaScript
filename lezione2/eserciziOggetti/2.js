let auto = {
    marca: "Fiat",
    modello: "Panda",
    anno: 2020,
    colore: "Bianco"
}
console.log(auto.marca, auto.modello);//punto 1
auto.colore = "Rosso";//punto 2
auto.anno= 2022;//punto 3
auto.prezzo=15000;//punto 4
console.log("prezzo" in auto);//punto 5: se prezzo è presente stampa true, altrimenti false
console.log("alimentazione" in auto);//punto 6
console.log(auto);
