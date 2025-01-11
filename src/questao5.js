const readline = require('readline');

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para inverter a string
function inverterString(str) {
  let strInvertida = ''; // Variável para armazenar a string invertida
  // Loop que percorre a string do último para o primeiro caractere
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i]; // Adiciona o caractere à string invertida
  }
  return strInvertida; // Retorna a string invertida
}

// Pergunta ao usuário qual string deseja inverter
rl.question('Digite uma string para inverter: ', (inputString) => {
  const resultado = inverterString(inputString); // Chama a função e armazena o resultado
  console.log(`String invertida: ${resultado}`); // Exibe o resultado
  rl.close(); // Fecha a interface
});
