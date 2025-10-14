// Exercício 12: Geração de Caracteres
// Imprima as letras do alfabeto de 'a' a 'e' usando seus códigos ASCII e um laço do...while.

let codigoASCII = 97; // Código ASCII da letra 'a'

do {
    console.log(String.fromCharCode(codigoASCII));
    codigoASCII++;
} while (codigoASCII <= 101); // Código ASCII da letra 'e'
