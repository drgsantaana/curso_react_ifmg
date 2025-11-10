// Exercício 6: Expressão de Função (Cálculo Simples)
// Crie uma expressão de função chamada calcularAreaRetangulo que recebe largura e altura e retorna a área.

const calcularAreaRetangulo = function(largura, altura) {
    return largura * altura;
};

// Testando a função
const area1 = calcularAreaRetangulo(5, 3);
console.log(`A área de um retângulo com largura 5 e altura 3 é: ${area1}`);

const area2 = calcularAreaRetangulo(10, 7);
console.log(`A área de um retângulo com largura 10 e altura 7 é: ${area2}`);

const area3 = calcularAreaRetangulo(4, 4);
console.log(`A área de um retângulo com largura 4 e altura 4 é: ${area3}`);

