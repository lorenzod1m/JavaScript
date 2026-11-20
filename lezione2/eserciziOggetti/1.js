let persona = {
    nome: "Luca",
    cognome: "Rossi",
    eta: 20,
    citta: "Torino",
}
console.log(persona.nome + " " + persona.cognome);//punto 1
console.log(persona.eta);//punto 2
persona.eta=21;//punto 3
persona.professione = "Studente";//punto 4
delete persona.citta;//punto 5
console.log(persona);//punto 6
alert("citta" in persona);