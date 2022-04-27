const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`) //O que está dentro das chaves (${}), ele tenta interpretar

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //Pode-se chamar funções no template também