// Exercício 7: Sequência de Fibonacci (até N)
// Gere e imprima os números da sequência de Fibonacci até que o valor seja menor ou igual a 50 (0, 1, 1, 2, 3, 5, ...), usando um laço while.

let anterior = 0;
let atual = 1;
let proximo;

console.log('Sequência de Fibonacci até 50:');
console.log(anterior);

while (atual <= 50) {
    console.log(atual);
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}
