// EXERCÍCIO 40: CONDIÇÃO DE PAGAMENTO
// Determine a condição de pagamento com base no número de parcelas

console.log('=== EXERCÍCIO 40: CONDIÇÃO DE PAGAMENTO ===');

const numeroParcelas = 3;
const valorCompra = 1000;

let condicaoPagamento;
let valorFinal;

switch (numeroParcelas) {
    case 1:
        condicaoPagamento = 'À vista';
        valorFinal = valorCompra;
        break;
    case 2:
        condicaoPagamento = '2x sem juros';
        valorFinal = valorCompra;
        break;
    case 3:
        condicaoPagamento = '3x com juros de 5%';
        valorFinal = valorCompra * 1.05;
        break;
    default:
        if (numeroParcelas >= 4) {
            condicaoPagamento = `${numeroParcelas}x com juros de 10%`;
            valorFinal = valorCompra * 1.1;
        } else {
            condicaoPagamento = 'Número de parcelas inválido';
            valorFinal = valorCompra;
        }
}

console.log(`Valor da compra: R$ ${valorCompra}`);
console.log(`Condição: ${condicaoPagamento}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
