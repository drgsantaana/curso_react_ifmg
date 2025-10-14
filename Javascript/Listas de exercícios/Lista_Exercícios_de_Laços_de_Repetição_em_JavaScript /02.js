// Exercício 2: Soma de Números Pares
// Use um laço while para somar todos os números pares de 1 a 50. Imprima o resultado final.

let numero = 1;
let soma = 0;

while (numero <= 50) {
    if (numero % 2 === 0) {
        soma += numero;
    }
    numero++;
}

console.log('A soma dos números pares de 1 a 50 é:', soma);
