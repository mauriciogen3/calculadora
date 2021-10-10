var presenca = 100;
var entregouTodosOsTrabalhos = true;
var notaSoftSkills = 100;
var notaProgramacao = 100;

if (presenca >= 75 && entregouTodosOsTrabalhos === true && notaSoftSkills >= 75 && notaProgramacao >= 75) {

  console.log("APROVADA")

} else if (presenca <= 75 && entregouTodosOsTrabalhos == true && notaSoftSkills <= 90 && notaProgramacao <= 75) {

  console.log("APROVADA - MERITO EM SOFT SKILLS")

} else if (presenca < 75 && entregouTodosOsTrabalhos == true && notaSoftSkills <= 75 && notaProgramacao <= 90) {

  console.log("APROVADA - MERITO EM PROGRAMACAO")

} else if (presenca == 100 && entregouTodosOsTrabalhos == true && notaSoftSkills == 100 && notaProgramacao == 100) {

  console.log("APROVADA - NOTA 1000")

} else (presenca < 75 || entregouTodosOsTrabalhos == false || notaSoftSkills <= 75 || notaProgramacao <= 75); {

  console.log("REPROVADO");
}


