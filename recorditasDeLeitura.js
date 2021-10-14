const diasDeLeitura = [false, true, false, true, true, true, true, true, false,
  true, false, false, true, true, true, false, false, true, true, false]

let truee = 0;

for (let item of diasDeLeitura) {
  if (item == true) {
    truee++;
  }
}
if (diasDeLeitura.length <= 7) {
  console.log("SEM MEDALHA")
} else {
  console.log(truee)

}



