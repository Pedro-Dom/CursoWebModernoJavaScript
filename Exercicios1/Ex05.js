function money (valor) {
    let real = valor.toFixed(2).toString().replace(".", ",")
    console.log(`R$ ${real}`)
}

money(2000.587)
money(0.1 + 0.2)