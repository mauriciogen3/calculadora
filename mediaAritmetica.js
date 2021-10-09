const notas = [10, 9, 7, 8, 5, 10];
//CALCULAR A MÉDIA ARITMÉTICA
let soma = 0;
for (let item of notas) {
  console.log(item)
  soma = soma + item;
}
console.log("")
console.log(soma / notas.length)