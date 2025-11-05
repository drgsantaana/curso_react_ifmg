// Exercício 5: Potência de Dois
// Calcule e imprima as potências de 2 (2^0, 2^1, 2^2, ...) até que o resultado seja maior que 1000, usando um laço while.

let expoente = 0;
let resultado = 1;

while (resultado <= 1000) {
    console.log(`2^${expoente} = ${resultado}`);
    expoente++;
    resultado = Math.pow(2, expoente);
}
