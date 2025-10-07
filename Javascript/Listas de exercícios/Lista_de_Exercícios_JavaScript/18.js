// EXERCÍCIO 18: CÁLCULO DE SALÁRIO LÍQUIDO
// Calcule o salário líquido de um funcionário, considerando salário bruto, descontos de INSS e Imposto de Renda

console.log('=== EXERCÍCIO 18: CÁLCULO DE SALÁRIO LÍQUIDO ===');

const salarioBruto = 5000;
const descontoINSS = salarioBruto * 0.11; // 11% de INSS
const descontoIR = salarioBruto * 0.15; // 15% de IR
const salarioLiquido = salarioBruto - descontoINSS - descontoIR;

console.log(`Salário bruto: R$ ${salarioBruto}`);
console.log(`Desconto INSS (11%): R$ ${descontoINSS.toFixed(2)}`);
console.log(`Desconto IR (15%): R$ ${descontoIR.toFixed(2)}`);
console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
