// EXERCÍCIO 8: DISTÂNCIA ENTRE DOIS PONTOS
// Calcule a distância entre dois pontos (x1, y1) e (x2, y2) no plano cartesiano.
// Use a fórmula Distância = √((x2 - x1)² + (y2 - y1)²)

console.log('=== EXERCÍCIO 8: DISTÂNCIA ENTRE DOIS PONTOS ===');

const x1 = 1;
const y1 = 2;
const x2 = 4;
const y2 = 6;

const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(`Ponto 1: (${x1}, ${y1})`);
console.log(`Ponto 2: (${x2}, ${y2})`);
console.log(`Distância entre os pontos: ${distancia.toFixed(2)}`);
