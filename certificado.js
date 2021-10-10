var presenca = 79;
var entregouTodosOsTrabalhos = true;
var notaSoftSkills = 75;
var notaProgramacao = 88;

if

  (presenca >= 75 && presenca < 90 &&
  entregouTodosOsTrabalhos === true &&
  notaSoftSkills >= 70 && notaSoftSkills <= 99 &&
  notaProgramacao >= 70 && notaProgramacao <= 99) {

  console.log("APROVADA")

} else if

  (presenca >= 75 &&
  entregouTodosOsTrabalhos == true ||
  notaSoftSkills >= 90 && notaSoftSkills < 100 ||
  notaProgramacao >= 70) {

  console.log("APROVADA - MERITO EM SOFT SKILLS")

} else if (presenca >= 75 &&
  entregouTodosOsTrabalhos == true &&
  notaSoftSkills >= 70 &&
  notaProgramacao >= 90 && notaProgramacao < 100) {

  console.log("APROVADA - MERITO EM PROGRAMACAO")

} else if (presenca == 100 &&
  entregouTodosOsTrabalhos == true &&
  notaSoftSkills == 100 && notaProgramacao == 100) {

  console.log("APROVADA - NOTA 1000")

} else {

  console.log("REPROVADO");
}


