
const notas = [0, 10, 8, 9, 6, 4, 10, 8, 10, 4, 5, 2, 4, 10, 8, 10, 4, 5, 2]

// Saber quantas notas vermelhas os alunos tiveram.

let notasVermelhas = 0;

for (let item of notas) {
  if (item < 7) {
    //notasVermelhas = notasVermelhas + 1;
    notasVermelhas++;
  }
}
console.log(notasVermelhas)

