// A propriedade prototype é um objeto adicionado a uma função 
// quando a mesma é criada

function Pessoa(nome, idade){
    this.nome  = nome;
    this.idade = idade;
    return 1 + 1;
}

console.log(Pessoa.prototype);


Pessoa.prototype.andar = function () {
    return  this.nome + ' Pessoa andou';
}