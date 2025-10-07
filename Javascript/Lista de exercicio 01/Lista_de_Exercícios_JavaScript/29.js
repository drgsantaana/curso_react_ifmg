// EXERCÍCIO 29: VERIFICAÇÃO DE LOGIN
// Verifique se um nome de usuário e senha correspondem a valores pré-definidos

console.log('=== EXERCÍCIO 29: VERIFICAÇÃO DE LOGIN ===');

const usuarioCorreto = 'admin';
const senhaCorreta = '123456';

const usuarioDigitado = 'admin';
const senhaDigitada = '123456';

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log('Login realizado com sucesso!');
} else {
    console.log('Usuário ou senha incorretos!');
}
