let aula = {
    numero_aula: "3C",
    posti : 30,
    pc: true,
    prese: true,

}

alert(aula.posti + ", "+ aula.numero_aula);
aula.finestre = 2;//aggiunge una proprietà
alert(aula.posti + ", "+ aula["finestre"]);
delete aula.finestre;//elima la proprità