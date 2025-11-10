// Exercício 7: Verificar se é Palíndromo (Declaração Tradicional ou Expressão)
// Crie uma função chamada verificarPalindromo que recebe um parâmetro palavra e retorna true se for palíndromo, false caso contrário.

function verificarPalindromo(palavra) {
    // Remove espaços e converte para minúsculas para comparação
    const palavraNormalizada = palavra.toLowerCase().replace(/\s/g, '');
    const palavraInvertida = palavraNormalizada.split('').reverse().join('');
    
    return palavraNormalizada === palavraInvertida;
}

// Testando a função
const palavra1 = "ovo";
console.log(`"${palavra1}" é palíndromo? ${verificarPalindromo(palavra1)}`);

const palavra2 = "reviver";
console.log(`"${palavra2}" é palíndromo? ${verificarPalindromo(palavra2)}`);

const palavra3 = "JavaScript";
console.log(`"${palavra3}" é palíndromo? ${verificarPalindromo(palavra3)}`);

const palavra4 = "arara";
console.log(`"${palavra4}" é palíndromo? ${verificarPalindromo(palavra4)}`);

const palavra5 = "casa";
console.log(`"${palavra5}" é palíndromo? ${verificarPalindromo(palavra5)}`);

const palavra6 = "Ame a ema";
console.log(`"${palavra6}" é palíndromo? ${verificarPalindromo(palavra6)}`);

