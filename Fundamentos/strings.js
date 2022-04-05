const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //Não gera erro e não retorna nada
console.log(escola.charCodeAt(3)) //Retorna o valor do caracter na tabela ASCII
console.log(escola.indexOf('3')) //Retorna o índice associoado ao digito 3

console.log(escola.substring(1)) //Imprime no terminal a partir do índice 1 (substring)
console.log(escola.substring(0, 3)) //Imprime do índice 0 ao índice 3, sem incluir o índice 3

console.log('Escola '.concat(escola).concat("!")) //Concatenação de strings
console.log('Escola ' + escola + "!") // Também pode ser utilizado para concatenação de strings
console.log(escola.replace(3, 'e')) //Troca o número 3 da string pelo caracter e

console.log('Ana,Maria,Pedro'.split(',')) //Gera uma array utilizando a ',' como separador dos elementos