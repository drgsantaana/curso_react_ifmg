// EXERCÍCIO 38: JOGO DE ADIVINHAÇÃO
// Simule um jogo de adivinhação onde o usuário tenta adivinhar um número secreto (fixo)

console.log('=== EXERCÍCIO 38: JOGO DE ADIVINHAÇÃO ===');

const numeroSecreto = 42;
const palpite = 35;

if (palpite === numeroSecreto) {
    console.log(`Palpite: ${palpite} - CORRETO! Você acertou!`);
} else if (palpite < numeroSecreto) {
    console.log(`Palpite: ${palpite} - MUITO BAIXO! Tente um número maior.`);
} else {
    console.log(`Palpite: ${palpite} - MUITO ALTO! Tente um número menor.`);
}
