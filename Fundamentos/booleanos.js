let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //! - Negação

console.log('Os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) //Pelo menos 1 verdadeiro, true
console.log(('' || null || 0 || 'wepa')) // Imprime o primeiro valor true

let nome = ''
console.log(nome || 'Desconhecido') //Como o nome deu false, ele retornou o segundo valor da expressão

nome = 'Lucas'
console.log(nome || 'Desconhecido') //Por nome ser true, ele retornou a string 