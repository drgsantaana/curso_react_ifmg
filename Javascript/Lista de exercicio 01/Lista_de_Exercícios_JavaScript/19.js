// EXERCÍCIO 19: VOLUME DE UMA ESFERA
// Calcule o volume de uma esfera dado o seu raio.
// Use a fórmula Volume = (4/3) * π * raio³

console.log('=== EXERCÍCIO 19: VOLUME DE UMA ESFERA ===');

const raio = 4;
const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

console.log(`Raio: ${raio}`);
console.log(`Volume da esfera: ${volume.toFixed(2)}`);
