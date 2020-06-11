// Função para criar um número aleatório

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//let random = getRandomInt(10000000000, 99999999999);
function validar() {
  var inputCpf = document.getElementById("cpf")
  var res = document.getElementById("res")
  var cpf = inputCpf.value

  if (cpf.length === 11) {
    // remove os 2 ultimos dígitos
    var newCpf = cpf.substr(0, 9);

    //cria um array
    newCpf = newCpf.split('')

    //* transforma o elementos do array em números inteiros *
    newCpf = newCpf.map(function (x) {
      return parseInt(x, 10);
    });

    var d1 = 0
    var d2 = 0
    var j = 10

    for (const [index, element] of newCpf.entries()) {

      d1 += newCpf[index] * j
      j = j - 1
    }

    var d1Conta = 11 - (d1 % 11)


    if (d1Conta > 9) {
      d1Conta = 0
    }

    // ** adiciona o valor de d1Conta no array newCpf
    newCpf.push(d1Conta)

    // *
    newCpf = newCpf.map(function (x) {
      return parseInt(x, 10);
    });

    j = 11;

    for (const [index, element] of newCpf.entries()) {

      d2 += newCpf[index] * j
      j = j - 1;
    }

    var d2Conta = 11 - (d2 % 11)

    // **
    newCpf.push(d2Conta)

    // transforma o array em uma string novamente
    newCpf = newCpf.join('')

    if (cpf === newCpf) {
      res.innerHTML = `O CPF ${cpf} é VÁLIDO.`
    } else {
      res.innerHTML = `O CPF ${cpf} é INVÁLIDO.`
    }

    console.log(newCpf.length)
  }else{
    res.innerHTML = `Informe o CPF corretamente.`
  }


}

// transforma em uma string
// var cpf = random.toString();


