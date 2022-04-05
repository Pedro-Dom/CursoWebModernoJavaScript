// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Soma o 2 com um undefined, ou seja, NaN - Not a Number
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //Soma os 2 primeiros e ignora o restante
imprimirSoma() //NaN

// Função com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(4, 3))
console.log(soma(2)) //b, por padrão, é 1
console.log(soma())