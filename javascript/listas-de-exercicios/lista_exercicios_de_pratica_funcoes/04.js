// Exercício 4: Inverter String (Declaração Tradicional ou Expressão)
// Crie uma função chamada inverterString que recebe um parâmetro texto e retorna a string invertida.

function inverterString(texto) {
    return texto.split('').reverse().join('');
}

// Testando a função
const palavra1 = "JavaScript";
console.log(`A palavra "${palavra1}" invertida é: "${inverterString(palavra1)}"`);

const palavra2 = "Olá";
console.log(`A palavra "${palavra2}" invertida é: "${inverterString(palavra2)}"`);

const frase = "Bem-vindo";
console.log(`A palavra "${frase}" invertida é: "${inverterString(frase)}"`);

