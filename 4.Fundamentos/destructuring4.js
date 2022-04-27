function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // mínimo 40, máximo 50 (após realizar a troca)
console.log(rand([992])) // mínimo 992, máximo 1000
console.log(rand([, 10])) // máximo 10, mínimo 0
console.log(rand([]))
//console.log(rand())