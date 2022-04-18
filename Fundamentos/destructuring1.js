// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100,
    }
}

const {nome, idade} = pessoa // extraiu nome e idade do objeto pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // criou as variáveis n e i para extrair os valores
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

/*const {conta: {ag, num}} = pessoa
console.log(ag, num) // conta não está em pessoa, logo, é gerado um erro*/