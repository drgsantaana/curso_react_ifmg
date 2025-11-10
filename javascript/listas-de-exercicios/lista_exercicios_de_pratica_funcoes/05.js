// Exercício 5: Contagem de Vogais (Declaração Tradicional ou Expressão)
// Crie uma função chamada contarVogais que recebe um parâmetro palavra e retorna o número total de vogais.

function contarVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;
    
    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }
    
    return contador;
}

// Testando a função
const palavra1 = "JavaScript";
console.log(`A palavra "${palavra1}" tem ${contarVogais(palavra1)} vogais`);

const palavra2 = "Programação";
console.log(`A palavra "${palavra2}" tem ${contarVogais(palavra2)} vogais`);

const palavra3 = "Olá";
console.log(`A palavra "${palavra3}" tem ${contarVogais(palavra3)} vogais`);

const palavra4 = "xyz";
console.log(`A palavra "${palavra4}" tem ${contarVogais(palavra4)} vogais`);

