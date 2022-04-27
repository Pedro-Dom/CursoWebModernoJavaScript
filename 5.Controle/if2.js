function teste1(num) {
    if(num > 7) // sem chaves ele realiza apenas uma sentença de código associado ao if
        console.log(num)

    console.log('Final')
}

//teste1(6)
//teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num) // bloco de código não está associado ao if (; está limitando o if)
    }
}

teste2(6)
teste2(8)