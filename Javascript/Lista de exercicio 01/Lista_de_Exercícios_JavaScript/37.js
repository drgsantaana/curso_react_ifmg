// EXERCÍCIO 37: TIPO DE CARACTERE
// Verifique se um caractere é uma vogal, uma consoante ou um número

console.log('=== EXERCÍCIO 37: TIPO DE CARACTERE ===');

const caractere = 'E';

if (caractere >= '0' && caractere <= '9') {
    console.log(`'${caractere}' é um NÚMERO`);
} else if (
    caractere.toLowerCase() === 'a' ||
    caractere.toLowerCase() === 'e' ||
    caractere.toLowerCase() === 'i' ||
    caractere.toLowerCase() === 'o' ||
    caractere.toLowerCase() === 'u'
) {
    console.log(`'${caractere}' é uma VOGAL`);
} else if ((caractere >= 'a' && caractere <= 'z') || (caractere >= 'A' && caractere <= 'Z')) {
    console.log(`'${caractere}' é uma CONSOANTE`);
} else {
    console.log(`'${caractere}' não é uma letra nem um número`);
}
