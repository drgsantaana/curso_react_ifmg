// Exercício 14: Loop com Saída Condicional
// Crie um laço do...while que simule um processo que deve parar quando um valor gerado aleatoriamente (simulado) for menor que 0.1. Imprima o valor em cada iteração.

let valor = 0.5; // Valor inicial simulado
let iteracao = 0;

do {
    console.log(`Iteração ${iteracao + 1}: valor = ${valor.toFixed(3)}`);

    // Simula geração de novo valor aleatório (diminuindo gradualmente)
    valor = Math.random() * valor;
    iteracao++;
} while (valor >= 0.1);

console.log(`Processo finalizado na iteração ${iteracao} com valor ${valor.toFixed(3)}`);
