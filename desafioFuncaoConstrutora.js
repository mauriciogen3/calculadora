function Pessoa(nome) {
  this.nome = nome

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const pi = new Pessoa('joao')
pi.falar()
