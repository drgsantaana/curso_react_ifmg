// EXERCÍCIO 27: TIPO DE TRIÂNGULO
// Dados três lados, determine se um triângulo é equilátero, isósceles ou escaleno

console.log('=== EXERCÍCIO 27: TIPO DE TRIÂNGULO ===');

const lado1 = 5;
const lado2 = 5;
const lado3 = 5;

if (lado1 === lado2 && lado2 === lado3) {
    console.log(`Lados: ${lado1}, ${lado2}, ${lado3} - TRIÂNGULO EQUILÁTERO`);
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log(`Lados: ${lado1}, ${lado2}, ${lado3} - TRIÂNGULO ISÓSCELES`);
} else {
    console.log(`Lados: ${lado1}, ${lado2}, ${lado3} - TRIÂNGULO ESCALENO`);
}
