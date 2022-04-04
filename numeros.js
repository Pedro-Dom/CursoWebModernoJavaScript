const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof Number)


/*
console.log(7/0) // Infinito
console.log("10" / 2) // O Js realiza a operação
console.log("Show" * 2) // O Js diz que não é um number
console.log(0.1 + 0.7) // Algumas operações vão ter imprecisão por conta da especificação do IEEE
//console.log(10.toString()) - Gera erro
console.log((10.345).toFixed(2)) // Modo correto
*/
