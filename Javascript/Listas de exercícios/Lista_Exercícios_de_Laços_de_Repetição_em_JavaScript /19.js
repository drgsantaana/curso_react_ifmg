// Exercício 19: Padrão de Asteriscos (Triângulo)
// Use laços for aninhados para imprimir um padrão de asteriscos como um triângulo retângulo de 5 linhas.

console.log('Triângulo de asteriscos:');

for (let linha = 1; linha <= 5; linha++) {
    let asteriscos = '';
    for (let coluna = 1; coluna <= linha; coluna++) {
        asteriscos += '*';
    }
    console.log(asteriscos);
}
