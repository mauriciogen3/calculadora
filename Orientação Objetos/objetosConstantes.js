//
const pessoa = { nome: 'joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
