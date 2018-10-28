/*Exemplo abaixo de uso do foreach*/

const imgs = document.querySelectorAll('img');//selecionando todas a imagens do documento
// A cada imgs será executada uma vez a função, ou seja, está percorrendo todas as imgs
imgs.forEach(function(valorAtual, index, array){
    console.log();
    console.log(index);
    console.log(array);
});

/*Outra forma de realizar a ação acima com a atualização do ES6*/

imgs.forEach((item) => { //arrow function
    console.log(item);
})


/**
 * O exemplo a seguir é a forma de mostrar o conteúdo dos parágrafos de um documento
 */

 const paragrafos = document.querySelectorAll('p');

 paragrafos.forEach((intem) => {
     console.log(item.innerText);
 })

 //Outra sintaxe para o uso de forEach
let i = 0;
 imgs.forEach(() => i++);