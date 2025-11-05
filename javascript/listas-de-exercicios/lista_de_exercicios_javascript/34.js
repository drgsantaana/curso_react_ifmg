// EXERCÍCIO 34: CHECAR ANO BISSEXTO
// Verifique se um ano é bissexto. (Um ano é bissexto se for divisível por 4, exceto se for divisível por 100 mas não por 400)

console.log('=== EXERCÍCIO 34: CHECAR ANO BISSEXTO ===');

const ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é um ano BISSEXTO`);
} else {
    console.log(`${ano} NÃO é um ano bissexto`);
}
