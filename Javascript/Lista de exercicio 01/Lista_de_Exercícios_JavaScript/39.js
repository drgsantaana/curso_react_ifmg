// EXERCÍCIO 39: STATUS DO PEDIDO
// Dado um código de status, exiba uma mensagem descritiva usando switch case

console.log('=== EXERCÍCIO 39: STATUS DO PEDIDO ===');

const status = 'E';

switch (status) {
    case 'P':
        console.log('Status: P - PENDENTE');
        break;
    case 'E':
        console.log('Status: E - EM PROCESSAMENTO');
        break;
    case 'F':
        console.log('Status: F - FINALIZADO');
        break;
    case 'C':
        console.log('Status: C - CANCELADO');
        break;
    default:
        console.log('Status inválido!');
}
