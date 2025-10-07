// EXERCÍCIO 9: CONVERSÃO DE MOEDA
// Converta um valor em Reais (BRL) para Dólares Americanos (USD), dada uma taxa de câmbio fixa

console.log('=== EXERCÍCIO 9: CONVERSÃO DE MOEDA ===');

const valorReais = 100;
const taxaCambio = 5.2; // 1 USD = 5.20 BRL
const valorDolares = valorReais / taxaCambio;

console.log(`Valor em Reais: R$ ${valorReais}`);
console.log(`Taxa de câmbio: R$ ${taxaCambio} = $1 USD`);
console.log(`Valor em Dólares: $ ${valorDolares.toFixed(2)}`);
