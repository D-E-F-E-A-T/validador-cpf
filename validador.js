// Função para criar um número aleatório

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//let random = getRandomInt(10000000000, 99999999999);

let random = 87840168094

// console.log(random)

// transforma em uma string
var cpf = random.toString();


//remove os 2 ultimos dígitos
var newCpf = cpf.substr(0,9);

newCpf = newCpf.split('')
newCpf = newCpf.map(function (x) { 
    return parseInt(x, 10); 
  });
var d1 = 0
var d2 = 0
var j = 10

for(const[index, element] of newCpf.entries()){
    
    d1 += newCpf[index] * j
    j = j - 1
    //console.log(d1)
}

var d1Conta = 11 - (d1 % 11)
//console.log(d1Conta)

if (d1Conta > 9){
    d1Conta = 0
} 


newCpf.push(d1Conta)

newCpf = newCpf.map(function (x) { 
    return parseInt(x, 10); 
  });
//console.log(newCpf)
j = 11

for(const[index, element] of newCpf.entries()){
    
    d2 += newCpf[index] * j
    j = j - 1
    //console.log(d2)
}

var d2Conta = 11 - (d2 % 11)

newCpf.push(d2Conta)

newCpf = newCpf.join('')

console.log(newCpf)