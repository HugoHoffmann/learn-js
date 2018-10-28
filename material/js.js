// Operador ternário

// abrveiação de condições como o if e o else

var idade=19;
var maiorIdade = (idade>=18) ? 'Maior de idade' : 'menor de idade'; // é útil para fazer uma verificação 
// para o armazenamento de algo

// a utilização do var para a declaração de variáveis faz com que o escopo da variável vaze do bloco onde 
// a mesma fora declarada

// com a atualização do ES6 fora criado o let e o const para se poder ter um melhor uso de variáveis

// as chaves {} criam um bloco, não necessáriamente se deve ter um if ou for para utiliza-las


// const é utilizado para variáveis cujo o valor não irá mudar
// não é permitido criar constantes sem um valor atrbuído a mesma
//const só podem ser acessadas dentro do bloco onde foram declaradas
// na criação de um objeto pode ser utilizado a contante dentro dele 

// let permite a declaração do valor e mudar ele após isso 
// o let permite a criação de uma variável sem que seja atribuído um valor para a mesma.



/**
 * classList
 * Retorna uma lista de classes do elemento, permite adicionar verificar e remover.
 */
const menu = document.querySelector('.menu');

menu.className; // retorna um string com os nomes das classes
menu.classList; // retorna uma lista de classes
menu.classList.add('ativo');
menu.classList.add('teste','teste1'); // adiciona duas novas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo');//adiciona ou remove a classe;
menu.classList.contains('ativo');//verifica se existe a classe, retorna true ou false
menu.classList.replace('ativo', 'inativo');//serve para a realização de substituição de uma classe

// exemplo de uso

if(menu.classList.contains('ativo')){
    menu.classList.add('possui azul');
}

// selecionar todos os atributos que possui determinado elemento

const animais = document.querySelector('.animal');

animais.attributes; //retorna todos os atributos
animais.attributes.id; //retorna todos os ids

imgs.getAttribute('src');
imgs.setAttribute('alt','teste');
imgs.removeAttribute('alt');


//Selecionando todos os href que começam com http

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href','https://www.seila.com.br')