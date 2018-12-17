// Promise é uma função construtora de promessas. Há dois resultados possível de uma
// promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou  
//rejeitada se o segundo argumento for ativado

const promessa = new Promise(function(resolve, reject){
    let condicao = true;
    if(condicao){
        resolve();
    }
    else{
        reject();
    }
});

console.log(promessa);  //Promise {<resolved>: undefined}


// Quando a condição de resolução da promisse não é atingida, ativamos a função 
// reject para rejeitar a mesma. Pode-se indicar no console um erro,
// informando que a promisse fora rejeitada

const promessa = new Promise(function(resolve, reject){
    let condicao = true;
    if(condicao){
        resolve('Resolvida');
    }
    else{
        reject(Error('Ocorreu um erro na Promise'));
    }
});

// O poder das promises está no método then() do seu protótipo.
// O callBack deste método só será ativado quando a promise for resolvida.
// O argumento do callback será o valor passado na função resolve //#endregion

const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao){
        resolve('Pronto!');
    }
    else{
        reject(Error('Ocorreu um erro na Promise'));
    }
})

promessa.then(resolucao => {
    console.log(resolucao); // Pronto
});

// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. 
// O poder está na execeução de código assíncrono que executará o resolve() ao final dele.

const promessa = new Promisse((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolve');
    }, 1000)
});

promessa.then(resolucao => {
    console.log(resolucao); //'Resolve' depois de 1 segundo
})

// O método then() retorna outra Promise. Pode-se colocar then() após then()
// e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior

const promessa = new Promise((resolve, reject) => {
    resolve('Etapa 1');
});

promessa.then(resolucao => {
    console.log(resolucao); // Etapa 1
    return 'Estapa 2';
}).then(resolucao => {
    console.log(resolucao); //Etapa 2
    return 'Etapa 3';
}).then(r => r + 4).then(r => {
    console.log(r);// Etapa 34
});

// O método catch
https://www.origamid.com/curso/javascript-completo-es6/0602-promises