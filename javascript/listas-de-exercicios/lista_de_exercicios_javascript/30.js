// EXERCÍCIO 30: ESTAÇÃO DO ANO
// Dado um mês (número de 1 a 12), determine a estação do ano (considerando o hemisfério sul)

console.log('=== EXERCÍCIO 30: ESTAÇÃO DO ANO ===');

const mes = 6;

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log(`Mês ${mes} - VERÃO`);
        break;
    case 3:
    case 4:
    case 5:
        console.log(`Mês ${mes} - OUTONO`);
        break;
    case 6:
    case 7:
    case 8:
        console.log(`Mês ${mes} - INVERNO`);
        break;
    case 9:
    case 10:
    case 11:
        console.log(`Mês ${mes} - PRIMAVERA`);
        break;
    default:
        console.log('Mês inválido! Digite um número de 1 a 12.');
}
