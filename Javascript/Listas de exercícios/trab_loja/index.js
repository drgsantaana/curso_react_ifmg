import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

function paginate(array, page, limit) {
    const start = (page - 1) * limit;
    const end = start + limit;
    return array.slice(start, end);
}

async function findProducts() {
    try {
      const products = await fetch("https://fakestoreapi.com/products");
      const productsJson = await products.json();
  
      const filteredProducts = productsJson.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
      }));
  
      return filteredProducts;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error.message);
      return [];
    }
  }

async function menu(option,cart, productsJson){
    option = '0'
    do {
        option =  await prompt('1 - Listar produtos\n2 - Adicionar produto ao carrinho\n3 - Remover produto do carrinho\n4 - Finalizar compra\n');
        console.clear();
        switch (option) {
            case'0': 
                break
            case '1':
                let page = '1'
                do{
                    let productsPaginated = paginate(productsJson, page, 5);
                    
                    console.log(
                        `Produtos em estoque - pagina ${page}/2\n${productsPaginated
                          .map((product) => `ID: ${product.id} - ${product.title} - R$${product.price}`)
                          .join("\n")}`
                      );
                    page = await prompt('\nPara ver mais produtos, digite a página desejada\n0 - Para voltar ao menu\n');
                    console.clear();
                }while(page !== '0')
                break;
            case '2':
                console.log('Adicionar produto ao carrinho');
                productId = await prompt('Digite o ID do produto\n');
                console.clear()
                do{
                    product = productsJson.find(product => product.id === parseInt(productId));
                    if (product) {
                        cart.push(product);
                        console.log(`Produto ${product.title} adicionado ao carrinho\n`);
                    } else {
                        console.log('Produto não encontrado\n');
                    }
                    console.log(
                        `Produtos no carrinho atualmente:\n${cart
                          .map((product) => `${product.title} - R$${product.price}`)
                          .join("\n")}`
                      );
                    productId = await prompt('\nContinue digitando o ID dos produtos desejados\n0 - Para voltar ao menu\n')
                    console.clear();
                }while(productId !== '0')
                break;
            case '3':
                console.log('Remover produto do carrinho');
                productId = await prompt('Digite o ID do produto\n');
                do{
                product = cart.find(product => product.id === parseInt(productId));
                if (product) {
                    cart.splice(cart.indexOf(product), 1);
                    console.log(`Produto ${product.title} removido do carrinho\n`);
                } else {
                    console.log('Produto não encontrado\n');
                }
                console.log(
                    `Produtos no carrinho atualmente:\n${cart
                      .map((product) => `ID: ${product.id} - ${product.title} - R$${product.price}`).join("\n")}`
                  );
                productId = await prompt('\nContinue digitando o ID dos produtos desejados\n0 - Para voltar ao menu\n')
                console.clear();
                }while(productId !== '0')
                break;
            case '4':
                if(cart.length === 0){
                    option = await prompt("ADICIONE PELO MENOS 1 PRODUTO AO CARRINHO PARA FINALIZAR A COMPRA!\nAPERTE 0 PARA CONTINUAR!\n")
                    console.clear()
                    break;
                }else{
                    console.log('Finalizando compra\n');
                    console.log(
                        `Produtos:\n${cart
                          .map((product) => `ID: ${product.id} - ${product.title} - R$${product.price}`).join("\n")}`
                      );
                    let total = 0;
                    cart.forEach((product) => {
                        total += product.price;
                    });
                    console.log(`Total a pagar: R$${total.toFixed(2)}`)
                    console.log(`\nCODIGO DE PAGAMENTO: BR${(Math.random() * (10000 - 50) + 50).toFixed(0)}`)
                    console.log('VA ATE O CAIXA MAIS PROXIMO PARA FINALIZAR SUA COMPRA E EFETUAR O PAGAMENTO')
                    break;
                }
            default:
                console.log('Opção inválida\nDigite uma opção válida!');
                break;
        }

        if(4 === parseInt(option)){
            break;
        }
    
    } while (true);

    return 0
}


const productsJson = await findProducts();

const cart = [];
let productId = null;
let product = null;

if(productsJson.length !== 0){
    menu("0", cart, productsJson)
}
