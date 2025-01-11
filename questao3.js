const fs = require('fs');

// Carregar o arquivo JSON
const filePath = './data/dados.json'; // Caminho para o arquivo JSON
const faturamentoMensal = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Filtrar dias com faturamento > 0
const diasComFaturamento = faturamentoMensal.filter((dia) => dia.valor > 0);

// Calcular o menor valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map((dia) => dia.valor));

// Calcular o maior valor de faturamento
const maiorFaturamento = Math.max(...diasComFaturamento.map((dia) => dia.valor));

// Calcular a média mensal
const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Contar os dias com faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter((dia) => dia.valor > mediaMensal).length;

// Resultado
console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
