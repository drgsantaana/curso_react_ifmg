// Exercício 10: Primeiro Divisível por 3 e 5
// Encontre e imprima o primeiro número inteiro maior que 20 que seja divisível por 3 e por 5, usando um laço do...while.

let numero = 21;

do {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log('O primeiro número maior que 20 divisível por 3 e 5 é:', numero);
        break;
    }
    numero++;
} while (numero <= 100); // Limite para evitar loop infinito
