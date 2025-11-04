// Exercício 21: Números Primos (até N)
// Encontre e imprima todos os números primos de 2 a 20, usando laços for (pode ser aninhado).

console.log('Números primos de 2 a 20:');

for (let numero = 2; numero <= 20; numero++) {
    let ehPrimo = true;

    // Verifica se o número é primo
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        console.log(numero);
    }
}
