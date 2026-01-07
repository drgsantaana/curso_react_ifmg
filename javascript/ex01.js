//5x² + 4x + 3 = 0

const a = 5;
const b = 4;
const c = 3;

const delta = Math.pow(b, 2) - 4*a*c;

console.log(delta);

const x1 = (-b + Math.sqrt(delta)) / (2*a);

console.log(x1);


//13 -> Lula
//22 -> Bolsonaro
//21 -> Soraya
//50 -> Ciro Gomes

let n= 21;

switch (n) {
    case 13:
        console.log("Lula");
        break;
    case 22:
        console.log("Bolsonaro");
        break;
    case 21:
        console.log("Soraya");
        break;
    case 50:
        console.log("Ciro Gomes");
        break;
    default:
        console.log("Não encontrado");
        break;
}