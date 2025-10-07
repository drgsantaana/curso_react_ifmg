// EXERCÍCIO 22: MAIOR DE TRÊS NÚMEROS
// Encontre o maior entre três números dados

console.log('=== EXERCÍCIO 22: MAIOR DE TRÊS NÚMEROS ===');

const num1 = 15;
const num2 = 25;
const num3 = 10;

if (num1 >= num2 && num1 >= num3) {
    console.log(`O maior número é: ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`O maior número é: ${num2}`);
} else {
    console.log(`O maior número é: ${num3}`);
}
