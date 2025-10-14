// Exercício 6: Soma de Dígitos
// Dado um número inteiro (ex: 456), use um laço while para somar seus dígitos (4 + 5 + 6 = 15). Imprima a soma.

let numero = 456;
let soma = 0;

while (numero > 0) {
    soma += numero % 10;
    numero = Math.floor(numero / 10);
}

console.log('A soma dos dígitos é:', soma);
