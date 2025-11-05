// Exercício 20: Contagem de Vogais em String
// Dada a string "programacao", use um laço for para contar o número de vogais (a, e, i, o, u) presentes na string. Imprima a contagem final.

const palavra = 'programacao';
let contadorVogais = 0;
const vogais = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
        contadorVogais++;
    }
}

console.log(`A palavra "${palavra}" possui ${contadorVogais} vogais.`);
