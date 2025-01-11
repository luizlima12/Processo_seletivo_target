function isFibonacci(num) {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    var a = 0, b = 1;
    // Verifica se o número informado é 0 ou 1, que pertencem à sequência
    if (num === a || num === b) {
        return "O n\u00FAmero ".concat(num, " pertence \u00E0 sequ\u00EAncia de Fibonacci.");
    }
    // Calcula a sequência de Fibonacci até que o valor atual seja maior ou igual ao número
    var next = a + b;
    while (next <= num) {
        if (next === num) {
            return "O n\u00FAmero ".concat(num, " pertence \u00E0 sequ\u00EAncia de Fibonacci.");
        }
        a = b;
        b = next;
        next = a + b;
    }
    return "O n\u00FAmero ".concat(num, " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci.");
}
// Exemplo de uso:
// Defina o número para verificar
var numero = 1; // Altere para o número desejado
var resultado = isFibonacci(numero);
console.log(resultado);
