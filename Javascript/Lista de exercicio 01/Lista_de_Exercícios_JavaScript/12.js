// EXERCÍCIO 12: JUROS SIMPLES
// Calcule o valor final de um investimento usando juros simples.
// Use a fórmula Montante = Capital * (1 + Taxa * Tempo)

console.log('=== EXERCÍCIO 12: JUROS SIMPLES ===');

const capital = 1000; // R$
const taxa = 0.05; // 5% ao mês
const tempo = 12; // meses
const montante = capital * (1 + taxa * tempo);

console.log(`Capital inicial: R$ ${capital}`);
console.log(`Taxa de juros: ${taxa * 100}% ao mês`);
console.log(`Tempo: ${tempo} meses`);
console.log(`Montante final: R$ ${montante.toFixed(2)}`);
console.log(`Juros ganhos: R$ ${(montante - capital).toFixed(2)}`);
