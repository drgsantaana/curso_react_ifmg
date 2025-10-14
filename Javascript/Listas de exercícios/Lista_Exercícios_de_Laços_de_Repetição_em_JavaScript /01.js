// Exercício 1: Contagem Regressiva
// Crie um laço while que imprima uma contagem regressiva de 10 até 0, exibindo "Fogo!" ao final.

let contador = 10;

while (contador >= 0) {
    if (contador === 0) {
        console.log('Fogo!');
    } else {
        console.log(contador);
    }
    contador--;
}
