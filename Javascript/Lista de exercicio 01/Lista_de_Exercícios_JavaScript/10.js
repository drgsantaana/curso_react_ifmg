// EXERCÍCIO 10: MÉDIA PONDERADA
// Calcule a média ponderada de três notas, onde cada nota tem um peso específico

console.log('=== EXERCÍCIO 10: MÉDIA PONDERADA ===');

const nota1 = 8.0;
const peso1 = 2;
const nota2 = 7.5;
const peso2 = 3;
const nota3 = 9.0;
const peso3 = 5;

const somaNotasPesos = nota1 * peso1 + nota2 * peso2 + nota3 * peso3;
const somaPesos = peso1 + peso2 + peso3;
const mediaPonderada = somaNotasPesos / somaPesos;

console.log(`Nota 1: ${nota1} (peso ${peso1})`);
console.log(`Nota 2: ${nota2} (peso ${peso2})`);
console.log(`Nota 3: ${nota3} (peso ${peso3})`);
console.log(`Média ponderada: ${mediaPonderada.toFixed(2)}`);
