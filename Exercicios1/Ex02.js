const triangulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log('Triângulo Equilátero')
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log('Triângulo Escaleno')
    } else {
        console.log('Triângulo Isósceles')
    }
}

triangulo(1, 1, 1)
triangulo(5, 5, 5)

triangulo(1, 2, 1)
triangulo(5, 4, 5)


triangulo(1, 2, 3)
triangulo(10, 5, 8)