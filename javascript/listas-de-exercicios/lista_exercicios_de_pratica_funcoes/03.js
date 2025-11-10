// Exercício 3: Verificar Par ou Ímpar (Declaração Tradicional)
// Crie uma função chamada verificarParImpar que recebe um parâmetro numero e retorna "Par" ou "Ímpar".

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Testando a função
console.log(`O número 4 é: ${verificarParImpar(4)}`);
console.log(`O número 7 é: ${verificarParImpar(7)}`);
console.log(`O número 0 é: ${verificarParImpar(0)}`);
console.log(`O número 15 é: ${verificarParImpar(15)}`);
console.log(`O número -8 é: ${verificarParImpar(-8)}`);

