const pessoa = {
  nome: 'Mauricio',
  idade: 31,
  peso: 87
}

console.log(Object.keys(pessoa))
//Object é uma coleção dinamica de chaves e valores

console.log(Object.values(pessoa))
//Printa na tela os valores do Objeto criado

console.log(Object.entries(pessoa))
//printa  o array com todos os atributos (chave e valores)

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})
//inserir outro valor a chave pessoa

pessoa.dataNascimento = '01/01/2017'
//writable: false nao permite que o valor seja alterado.
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
