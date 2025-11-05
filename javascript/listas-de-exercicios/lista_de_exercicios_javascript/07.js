// EXERCÍCIO 7: VOLUME DE UM CILINDRO
// Calcule o volume de um cilindro dado o seu raio e altura. Use a fórmula Volume = π * raio² * altura

console.log('=== EXERCÍCIO 7: VOLUME DE UM CILINDRO ===');

const raio = 3;
const altura = 10;
const volume = Math.PI * Math.pow(raio, 2) * altura;

console.log(`Raio: ${raio}`);
console.log(`Altura: ${altura}`);
console.log(`Volume do cilindro: ${volume.toFixed(2)}`);
