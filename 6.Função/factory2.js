function criarProduto (nome = 'Corda de aço', preco = 12.99) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1,
    }
}

console.log(criarProduto())
console.log(criarProduto('Pneu', 59.99))
console.log(criarProduto('Notebook', 2199.99))