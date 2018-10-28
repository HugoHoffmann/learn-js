//Objetos, são um conjunto de varíáveis e funções que são chamadas de propriedades e metodos

var pessoa={
    nome:'hugo',
    idade:19,
    prifissao:'programador',
    possuiFaculdade:true,
}
//acessando os valores do objeto

pessoa.nome

// Exemplo abaixo de como criar um objeto que possui 
// funções e como elas são chamadas

var quadradado = {
    lados:4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}

// Com a atualização do ES6 pode-se fazer a mesma declaração de objeto acima da forma abaixo, onde eu retiro o 
// function 


var quadradado = {
    lados:4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return this.lados * lado;
    }
}

// Math é um objeto matemático que possui diversos métodos matemáticos como abaixo

console.log(Math.random());//gera números aleatórios
console.log(Math.E)// E se trata de uma propriedade


//console é um objeto e log é um método

// aula de objetos 2
console.log