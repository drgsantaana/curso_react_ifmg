// EXERCÍCIO 31: DESCONTO POR COMPRA
// Aplique um desconto em um valor de compra com base no total

console.log('=== EXERCÍCIO 31: DESCONTO POR COMPRA ===');

const valorCompra = 120;

let desconto;
let valorFinal;

if (valorCompra > 100) {
    desconto = valorCompra * 0.1; // 10% de desconto
    valorFinal = valorCompra - desconto;
    console.log(`Valor da compra: R$ ${valorCompra}`);
    console.log(`Desconto (10%): R$ ${desconto.toFixed(2)}`);
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
} else if (valorCompra >= 50 && valorCompra <= 100) {
    desconto = valorCompra * 0.05; // 5% de desconto
    valorFinal = valorCompra - desconto;
    console.log(`Valor da compra: R$ ${valorCompra}`);
    console.log(`Desconto (5%): R$ ${desconto.toFixed(2)}`);
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
} else {
    console.log(`Valor da compra: R$ ${valorCompra}`);
    console.log('Nenhum desconto aplicado.');
    console.log(`Valor final: R$ ${valorCompra}`);
}
