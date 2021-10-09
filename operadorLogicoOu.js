//condicionais if - else

//menores de 18 --> Menor de idade (meia)
//Entre 18 e 60 anos -> Adulto(meia apenas com caaarteirinha)
//maiores de 60 anos - > idoso(meia)

//MEIA = (menor de idade) ou (idosa) ou (adulta e tiver carteirinha)
//INTEIRA = O resto.

const idade = 60;
const temCarteirinha = true;

const ehAdulto = idade >= 18 && idade <= 60;

if (idade < 18 || idade > 60 || ehAdulto && temCarteirinha) {
  //Nesse caso nao coloquei a exclamação pois está diretamente relacionado com ter ou nao carteirinha.
  console.log("MEIA")

} else {
  console.log("INTEIRA")
}

