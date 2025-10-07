// EXERCÍCIO 28: CALCULADORA SIMPLES
// Crie uma calculadora que receba dois números e uma operação (+, -, *, /) e retorne o resultado usando switch case

console.log('=== EXERCÍCIO 28: CALCULADORA SIMPLES ===');

const num1 = 10;
const num2 = 3;
const operacao = '*';

let resultado;

switch (operacao) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            console.log('Erro: Divisão por zero!');
            resultado = undefined;
        } else {
            resultado = num1 / num2;
        }
        break;
    default:
        console.log('Operação inválida!');
        resultado = undefined;
}

if (resultado !== undefined) {
    console.log(`${num1} ${operacao} ${num2} = ${resultado}`);
}
