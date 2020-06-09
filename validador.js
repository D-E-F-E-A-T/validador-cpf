// Função para criar um número aleatório

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//let random = getRandomInt(10000000000, 99999999999);

let random = 87840168094



// transforma em uma string
var cpf = random.toString();


//remove os 2 ultimos dígitos
var newCpf = cpf.substr(0,9);

//cria um array
newCpf = newCpf.split('')

//* transforma o elementos do array em números inteiros *
newCpf = newCpf.map(function (x) { 
    return parseInt(x, 10); 
  });

var d1 = 0
var d2 = 0
var j = 10

for(const[index, element] of newCpf.entries()){
    
    d1 += newCpf[index] * j
    j = j - 1
}

var d1Conta = 11 - (d1 % 11)


if (d1Conta > 9){
    d1Conta = 0
} 

// ** adiciona o valor de d1Conta no array newCpf
newCpf.push(d1Conta)

// *
newCpf = newCpf.map(function (x) { 
    return parseInt(x, 10); 
  });

j = 11

for(const[index, element] of newCpf.entries()){
    
    d2 += newCpf[index] * j
    j = j - 1
}

var d2Conta = 11 - (d2 % 11)

// **
newCpf.push(d2Conta)

// transforma o array em uma string novamente
newCpf = newCpf.join('')

console.log(newCpf)