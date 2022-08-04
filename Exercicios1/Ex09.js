function notaFinal (nota) {
    notaDef = arredondar(nota)
    if (notaDef >= 40) {
        console.log(`Aprovado!! Nota final: ${notaDef}`)
    } else {
        console.log(`Reprovado. Nota final : ${notaDef}`)
    }
}

function arredondar (nota) {
    if (nota > 37 && nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

notaFinal(100)
notaFinal(30)
notaFinal(38)
notaFinal(88)
notaFinal(61)
notaFinal(28)