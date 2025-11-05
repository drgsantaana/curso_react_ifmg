// EXERCÍCIO 11: CÁLCULO DE IMC (ÍNDICE DE MASSA CORPORAL)
// Calcule o IMC de uma pessoa dados seu peso (em kg) e altura (em metros).
// Use a fórmula IMC = peso / (altura * altura)

console.log('=== EXERCÍCIO 11: CÁLCULO DE IMC ===');

const peso = 70; // kg
const altura = 1.75; // metros
const imc = peso / (altura * altura);

console.log(`Peso: ${peso} kg`);
console.log(`Altura: ${altura} m`);
console.log(`IMC: ${imc.toFixed(2)}`);
