// EXERCÍCIO 35: CLASSIFICAÇÃO DE NOTAS
// Converta uma nota numérica (0-100) em um conceito (A, B, C, D, F) usando if/else encadeado

console.log('=== EXERCÍCIO 35: CLASSIFICAÇÃO DE NOTAS ===');

const nota = 85;

if (nota >= 90) {
    console.log(`Nota: ${nota} - Conceito A`);
} else if (nota >= 80) {
    console.log(`Nota: ${nota} - Conceito B`);
} else if (nota >= 70) {
    console.log(`Nota: ${nota} - Conceito C`);
} else if (nota >= 60) {
    console.log(`Nota: ${nota} - Conceito D`);
} else {
    console.log(`Nota: ${nota} - Conceito F`);
}
