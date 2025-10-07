// EXERCÍCIO 14: EQUAÇÃO DO SEGUNDO GRAU
// Resolva uma equação do segundo grau na forma ax² + bx + c = 0 e encontre suas raízes, se existirem.
// Use a fórmula de Bhaskara

console.log('=== EXERCÍCIO 14: EQUAÇÃO DO SEGUNDO GRAU ===');

const a = 1;
const b = -5;
const c = 6;

const delta = Math.pow(b, 2) - 4 * a * c;

console.log(`Equação: ${a}x² + ${b}x + ${c} = 0`);
console.log(`Delta: ${delta}`);

if (delta < 0) {
    console.log('A equação não possui raízes reais.');
} else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`Raiz única: x = ${x}`);
} else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Raiz 1: x1 = ${x1.toFixed(2)}`);
    console.log(`Raiz 2: x2 = ${x2.toFixed(2)}`);
}
