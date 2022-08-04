function bhaskara (a, b, c) {
    let delta = Math.pow(b, 2) - (4 * a * c)

    if (delta < 0) {
        return 'Delta é negativo!'
    } else {
        let S1 = (-b + Math.sqrt(delta))/ (2 * a)
        let S2 = (-b - Math.sqrt(delta))/ (2 * a)
        return [S1, S2]
    }
}

console.log(bhaskara(3, -15, 12))

console.log(bhaskara(9, -24, 16))

console.log(bhaskara(1, -2, 4))