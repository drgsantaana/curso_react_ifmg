# Simulação de Saídas do Terminal - Sistema de Loja

Este documento apresenta exemplos de saídas do terminal para todas as funcionalidades do sistema de loja.

---

## 1. Inicialização do Sistema

Ao iniciar o programa, os produtos são carregados da API e o menu principal é exibido:

```
1 - Listar produtos
2 - Adicionar produto ao carrinho
3 - Remover produto do carrinho
4 - Finalizar compra
```

---

## 2. Listar Produtos (Opção 1)

### 2.1. Primeira Página de Produtos

```
Produtos em estoque - página 1/2
ID: 1 - Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
ID: 2 - Mens Casual Premium Slim Fit T-Shirts - R$22.3
ID: 3 - Mens Cotton Jacket - R$55.99
ID: 4 - Mens Casual Slim Fit - R$15.99
ID: 5 - John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet - R$695

Para ver mais produtos, digite a página desejada
0 - Para voltar ao menu
```

### 2.2. Segunda Página de Produtos

```
Produtos em estoque - página 2/2
ID: 6 - Solid Gold Petite Micropave - R$168
ID: 7 - White Gold Plated Princess - R$9.99
ID: 8 - Pierced Owl Rose Gold Plated Stainless Steel Double - R$10.99
ID: 9 - WD 2TB Elements Portable External Hard Drive - USB 3.0 - R$64
ID: 10 - SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s - R$109

Para ver mais produtos, digite a página desejada
0 - Para voltar ao menu
```

---

## 3. Adicionar Produto ao Carrinho (Opção 2)

### 3.1. Adicionando Primeiro Produto

```
Adicionar produto ao carrinho
Digite o ID do produto
[Usuário digita: 1]

Produto Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops adicionado ao carrinho

Produtos no carrinho atualmente:
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95

Continue digitando o ID dos produtos desejados
0 - Para voltar ao menu
```

### 3.2. Adicionando Múltiplos Produtos

```
[Usuário digita: 2]

Produto Mens Casual Premium Slim Fit T-Shirts adicionado ao carrinho

Produtos no carrinho atualmente:
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
Mens Casual Premium Slim Fit T-Shirts - R$22.3

Continue digitando o ID dos produtos desejados
0 - Para voltar ao menu
```

```
[Usuário digita: 5]

Produto John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet adicionado ao carrinho

Produtos no carrinho atualmente:
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
Mens Casual Premium Slim Fit T-Shirts - R$22.3
John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet - R$695

Continue digitando o ID dos produtos desejados
0 - Para voltar ao menu
```

### 3.3. Tentativa de Adicionar Produto Inexistente

```
[Usuário digita: 999]

Produto não encontrado

Produtos no carrinho atualmente:
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
Mens Casual Premium Slim Fit T-Shirts - R$22.3
John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet - R$695

Continue digitando o ID dos produtos desejados
0 - Para voltar ao menu
```

---

## 4. Remover Produto do Carrinho (Opção 3)

### 4.1. Removendo Produto Existente

```
Remover produto do carrinho
Digite o ID do produto
[Usuário digita: 2]

Produto Mens Casual Premium Slim Fit T-Shirts removido do carrinho

Produtos no carrinho atualmente:
ID: 1 - Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
ID: 5 - John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet - R$695

Continue digitando o ID dos produtos desejados
0 - Para voltar ao menu
```

### 4.2. Tentativa de Remover Produto Inexistente

```
[Usuário digita: 10]

Produto não encontrado

Produtos no carrinho atualmente:
ID: 1 - Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
ID: 5 - John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet - R$695

Continue digitando o ID dos produtos desejados
0 - Para voltar ao menu
```

---

## 5. Finalizar Compra (Opção 4)

### 5.1. Tentativa de Finalizar com Carrinho Vazio

```
ADICIONE PELO MENOS 1 PRODUTO AO CARRINHO PARA FINALIZAR A COMPRA!
APERTE 0 PARA CONTINUAR!
```

### 5.2. Finalização de Compra com Produtos no Carrinho

```
Finalizando compra

Produtos:
ID: 1 - Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
ID: 2 - Mens Casual Premium Slim Fit T-Shirts - R$22.3
ID: 3 - Mens Cotton Jacket - R$55.99
Total a pagar: R$188.24

CODIGO DE PAGAMENTO: BR5234
VA ATE O CAIXA MAIS PROXIMO PARA FINALIZAR SUA COMPRA E EFETUAR O PAGAMENTO
OU FACA O PIX PARA O TELEFONE 37123456789
```

### 5.3. Exemplo de Compra com Múltiplos Produtos

```
Finalizando compra

Produtos:
ID: 1 - Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
ID: 5 - John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet - R$695
ID: 8 - Pierced Owl Rose Gold Plated Stainless Steel Double - R$10.99
ID: 9 - WD 2TB Elements Portable External Hard Drive - USB 3.0 - R$64
Total a pagar: R$879.94

CODIGO DE PAGAMENTO: BR7891
VA ATE O CAIXA MAIS PROXIMO PARA FINALIZAR SUA COMPRA E EFETUAR O PAGAMENTO
OU FACA O PIX PARA O TELEFONE 37123456789
```

---

## 6. Opção Inválida

```
[Usuário digita: 5]

Opção inválida
Digite uma opção válida!

1 - Listar produtos
2 - Adicionar produto ao carrinho
3 - Remover produto do carrinho
4 - Finalizar compra
```

---

## 7. Fluxo Completo de Uso

### Exemplo de Sessão Completa:

```
1 - Listar produtos
2 - Adicionar produto ao carrinho
3 - Remover produto do carrinho
4 - Finalizar compra
[Usuário digita: 1]

Produtos em estoque - página 1/2
ID: 1 - Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
ID: 2 - Mens Casual Premium Slim Fit T-Shirts - R$22.3
ID: 3 - Mens Cotton Jacket - R$55.99
ID: 4 - Mens Casual Slim Fit - R$15.99
ID: 5 - John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet - R$695

Para ver mais produtos, digite a página desejada
0 - Para voltar ao menu
[Usuário digita: 0]

1 - Listar produtos
2 - Adicionar produto ao carrinho
3 - Remover produto do carrinho
4 - Finalizar compra
[Usuário digita: 2]

Adicionar produto ao carrinho
Digite o ID do produto
[Usuário digita: 1]

Produto Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops adicionado ao carrinho

Produtos no carrinho atualmente:
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95

Continue digitando o ID dos produtos desejados
0 - Para voltar ao menu
[Usuário digita: 3]

Produto Mens Cotton Jacket adicionado ao carrinho

Produtos no carrinho atualmente:
Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
Mens Cotton Jacket - R$55.99

Continue digitando o ID dos produtos desejados
0 - Para voltar ao menu
[Usuário digita: 0]

1 - Listar produtos
2 - Adicionar produto ao carrinho
3 - Remover produto do carrinho
4 - Finalizar compra
[Usuário digita: 4]

Finalizando compra

Produtos:
ID: 1 - Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops - R$109.95
ID: 3 - Mens Cotton Jacket - R$55.99
Total a pagar: R$165.94

CODIGO DE PAGAMENTO: BR4567
VA ATE O CAIXA MAIS PROXIMO PARA FINALIZAR SUA COMPRA E EFETUAR O PAGAMENTO
OU FACA O PIX PARA O TELEFONE 37123456789
```