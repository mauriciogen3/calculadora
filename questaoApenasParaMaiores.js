const idade = 71;

if (idade < 18) {
  console.log(idade + " anos")
  console.log("ACESSO NEGADO")

} else if (idade >= 18 && idade <= 50) {
  console.log(idade + " anos")
  console.log("PODE ENTRAR")
} else if (idade > 50 && idade <= 70) {
  console.log(idade + " anos")
  console.log("TA FICANDO VELHO EM!!")
  console.log("PODE ENTRAR")
} else {
  console.log(idade + " anos")
  console.log("VIROU MUMIA.")
  console.log("SE CONSEGUIR ANDAR, PODE ENTRAR!!")

}
