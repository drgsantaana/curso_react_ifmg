// EXERCÍCIO 24: DIA DA SEMANA
// Dado um número de 1 a 7, exiba o dia da semana correspondente usando switch case

console.log('=== EXERCÍCIO 24: DIA DA SEMANA ===');

const dia = 3;

switch (dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Número inválido! Digite um número de 1 a 7.');
}
