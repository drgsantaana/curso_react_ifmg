// Exercício 4: Inverter Número
// Dado um número inteiro (ex: 12345), use um laço while para imprimi-lo com os dígitos invertidos (ex: 54321).

let numero = 12345;
let numeroInvertido = 0;

while (numero > 0) {
    numeroInvertido = numeroInvertido * 10 + (numero % 10);
    numero = Math.floor(numero / 10);
}

console.log('Número invertido:', numeroInvertido);
