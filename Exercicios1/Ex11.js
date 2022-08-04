function verificarAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0){
        return true
    } else if (ano % 100 == 0){
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificarAnoBissexto(0))
console.log(verificarAnoBissexto(4))
console.log(verificarAnoBissexto(100))
console.log(verificarAnoBissexto(400))
console.log(verificarAnoBissexto(800))
console.log(verificarAnoBissexto(2020))
console.log(verificarAnoBissexto(2021))