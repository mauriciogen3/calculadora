const joao = "tesoura";
const pedro = "papel";

if (joao === "pedra" && pedro === "tesoura") {
  console.log("JOÂO")
} else if (joao === "papel" && pedro === "pedra") {
  console.log("JOÂO")
} else if (joao === "tesoura" && pedro === "papel") {
  console.log("JOÂO")
} else if (pedro === "pedra" && joao === "tesoura") {
  console.log("PEDRO")
} else if (pedro === "papel" && joao === "pedra") {
  console.log("PEDRO")
} else if (pedro === "tesoura" && joao === "papel") {
  console.log("PEDRO")
} else {
  console.log("EMPATE")
}
