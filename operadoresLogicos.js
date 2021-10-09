//condicionais if - else

//menores de 18 --> Menor de idade (meia)
//Entre 18 e 60 anos -> Adulto(meia apenas com caaarteirinha)
//maiores de 60 anos - > idoso(meia)

const idade = 59.9;
const temCarteirinha = true;

const EhAdulto = idade >= 18 && idade <= 60;

if (EhAdulto && temCarteirinha === false) {
  console.log("INTEIRA")
} else {
  console.log("MEIA")
}


// ou
if (EhAdulto && !temCarteirinha) {
  // a exclamação antes da variavel altera seu resultado para o oposto. se for true fica false.
  console.log("INTEIRA")
} else {
  console.log("MEIA")
}
