// EXERCÍCIO 36: PREÇO DA PASSAGEM DE ÔNIBUS
// Calcule o preço da passagem de ônibus com base na distância

console.log('=== EXERCÍCIO 36: PREÇO DA PASSAGEM DE ÔNIBUS ===');

const distancia = 250; // km
let precoPorKm;

if (distancia <= 200) {
    precoPorKm = 0.5;
} else {
    precoPorKm = 0.45;
}

const precoTotal = distancia * precoPorKm;

console.log(`Distância: ${distancia} km`);
console.log(`Preço por km: R$ ${precoPorKm}`);
console.log(`Preço total: R$ ${precoTotal.toFixed(2)}`);
