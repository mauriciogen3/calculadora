//usando noções literais
const obj1 = {}
console.log(obj1)

//obj em JS
console.log(typeof Object, typeof new Object())
const obj2 = new Object()
console.log(obj2)

// Fuções construturas
function Produto(nome, preco, desconto) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto)
  }
}

const p1 = new Produto('caneta', 7.99, 0.15)

const p2 = new Produto('notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
