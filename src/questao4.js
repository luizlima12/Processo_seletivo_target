// Faturamento mensal por estado
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Calcula o valor total mensal
  const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);
  
  // Calcula o percentual de representação de cada estado
  const percentualRepresentacao = (faturamento) => ((faturamento / totalFaturamento) * 100).toFixed(2);
  
  // Exibe os percentuais de cada estado
  for (let estado in faturamentoEstados) {
    const percentual = percentualRepresentacao(faturamentoEstados[estado]);
    console.log(`Percentual de ${estado}: ${percentual}%`);
  }
  
  