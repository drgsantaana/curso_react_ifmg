// EXERCÍCIO 2: VERIFICAR IDADE PARA VOTAÇÃO
// Conversão do pseudocódigo para JavaScript

// ALGORITMO VerificarVoto
// VAR
// idade: INTEIRO
// INICIO
// idade = 18
// SE idade >= 16 ENTAO
// ESCREVA "Você pode votar."
// SENAO
// ESCREVA "Você não pode votar ainda."
// FIM_SE
// FIM_ALGORITMO

console.log('=== EXERCÍCIO 2: VERIFICAR IDADE PARA VOTAÇÃO ===');

const idade = 18;

if (idade >= 16) {
    console.log('Você pode votar.');
} else {
    console.log('Você não pode votar ainda.');
}
