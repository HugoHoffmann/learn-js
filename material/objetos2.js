// Exemplo de objeto
var dados={
    nome='Hugo',
    sobrenome='Hoffmann',
    idade=19,
    cidade='Rio do Sul',
};

dados.nomeCompleto = function(){
    return '${this.nome} ${this.sobrenome} ';//this serve para que se possa acessar o objeto
}

// No javascript tudo é objeto como por exemplo:

var nome="hugo";

nome.length //vai resultar em 4
nome.charAt(1);//me retorna a letra u que está na posição 1 da string

var altura=1.8
 
altura.toFixed(); //vai arrendondar a altura para 2

altura.toString// irá converter a altura para um string