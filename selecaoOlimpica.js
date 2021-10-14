const idadesDeUmTime = [20, 24, 21, 20, 20, 22, 22, 21, 17, 17, 20, 20, 17, 22, 23, 24, 22, 23, 24]


let maiorQue23 = 0;

for (let item of idadesDeUmTime) {
    if (item > 23) {
        maiorQue23++;
    }
}

if (idadesDeUmTime.length === 18) {
    console.log("CONVOCACAO VALIDA")
    console.log(maiorQue23)
} else if (idadesDeUmTime.length < 18) {
    console.log("INVALIDA POR TER MENOS DE 18 JOGADORES")
} else {
    console.log("INVALIDA POR TER MAIS DE 18 JOGADORES")
}
