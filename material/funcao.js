// Uso do call   

function descricaoCarro(velocidade){
    console.log(this);
    console.log(this.marca + ' ' + this.ano + velocidade);
}

descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);


// o Valor de this faz referencia ao objeto criado durante a construção do objeto 
// (Constructor Function). Pode ser trocada a referencia do método this usando o call()

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) =>{
    console.log(item);
    // Log de cada carro
});

carros.forEach.call(carros, (item) => {
    console.log(item);
    // Log de cada carro
})

const frutas = ['Banana', 'Maça', 'Pera'];

carros.forEach.call(frutas, (item) => {
    console.log(item);
    // log de cada fruta
})