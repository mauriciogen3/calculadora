const nomes = ["Ana", "Bia", "amanda", "Catarina", "Debora"]
//EXIBE UM NOME NO ARRAY 1
//console.log(nomes[1])

//const nome = nomes[1]
//console.log(nome[1])

//FILTRAR NOMES QUE COMEÇAM COM A LETRA "A"
let nomesComA = [];

for (let item of nomes) {
  if (item[0] === "A" || item[0] === "a") {
    nomesComA.push(item)

  }
}
console.log(nomesComA);
