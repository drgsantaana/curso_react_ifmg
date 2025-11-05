// Exercício 3: Primeiro Múltiplo
// Encontre e imprima o primeiro número inteiro maior que 100 que seja divisível por 13, usando um laço while.

let numero = 101;

while (numero <= 200) {
    // Limite razoável para evitar loop infinito
    if (numero % 13 === 0) {
        console.log('O primeiro número maior que 100 divisível por 13 é:', numero);
        break;
    }
    numero++;
}
