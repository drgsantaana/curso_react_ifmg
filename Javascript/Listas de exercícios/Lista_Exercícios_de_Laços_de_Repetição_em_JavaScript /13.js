// Exercício 13: Soma de Números Ímpares (com mínimo de 1)
// Some os números ímpares de 1 a 10, garantindo que o laço do...while execute pelo menos uma vez, mesmo que a condição inicial fosse para não entrar no loop.

let numero = 1;
let soma = 0;

do {
    if (numero % 2 !== 0) {
        soma += numero;
    }
    numero++;
} while (numero <= 10);

console.log('A soma dos números ímpares de 1 a 10 é:', soma);
