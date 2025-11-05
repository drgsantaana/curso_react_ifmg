// Exercício 15: Tabuada Fixa
// Imprima a tabuada do número 7 de 1 a 10 usando um laço for.

const multiplicador = 7;

console.log(`Tabuada do ${multiplicador}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${multiplicador} x ${i} = ${multiplicador * i}`);
}
