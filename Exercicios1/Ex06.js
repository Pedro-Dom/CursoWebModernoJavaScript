function JuroSimples (Co, i, t) {
    let juros = Co * i * t
    return Co + juros
}

function JuroComposto (Co, i, t) {

    return Co * Math.pow((1 + i), t).toFixed(2)
}

console.log(JuroSimples(1000, 0.1, 3))
console.log(JuroComposto(1000, 0.1, 3))

console.log(JuroSimples(1000, 0.025, 1))
console.log(JuroComposto(2000, 0.04, 4))