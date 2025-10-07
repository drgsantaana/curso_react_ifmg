// EXERCÍCIO 26: FAIXA ETÁRIA
// Classifique uma pessoa em faixas etárias: Criança (0-12), Adolescente (13-17), Adulto (18-59), Idoso (60+)

console.log('=== EXERCÍCIO 26: FAIXA ETÁRIA ===');

const idade = 25;

if (idade >= 0 && idade <= 12) {
    console.log(`Idade: ${idade} - CRIANÇA`);
} else if (idade >= 13 && idade <= 17) {
    console.log(`Idade: ${idade} - ADOLESCENTE`);
} else if (idade >= 18 && idade <= 59) {
    console.log(`Idade: ${idade} - ADULTO`);
} else if (idade >= 60) {
    console.log(`Idade: ${idade} - IDOSO`);
} else {
    console.log('Idade inválida!');
}
