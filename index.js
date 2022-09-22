//export NODE_OPTIONS="--max-old-space-size=8192"export NODE_OPTIONS="--max-old-space-size=8192"

//Vetor de objetos para cadastrar, consultar, excluir e atualizar os clientes do vetor

var input = require('readline-sync')
var clientes = [
    {id: 1, nome: "Felipe", cpf:"12345678989", email:"teste@teste.com"},
    {id: 2, nome: "Francisco", cpf:"12345678987", email:"teste@teste1.com"},
    {id: 3, nome: "Dantas", cpf:"1234567898", email:"teste@teste2.com"},
]

var controle = parseInt(input.question(`Escolha uma alternativa: 
1 - Cadastrar um novo cliente
2 - Consultar um cliente pelo ID
3 - Excluir Cliente pelo ID
4 - Atualizar Cadastro de um cliente
5 - Listar todos clientes cadastrados `))

switch(controle)
{
    case 1:{
        var novoCliente = {
            id: parseInt(input.question("Digite o ID do cliente: ")),
            nome: input.question("Digite o nome do cliente: "),
            cpf: input.question("Digite o CPF do cliente: "),
            email: input.question("Digite o email do cliente: "),
        }
        clientes.push(novoCliente)
        console.table(clientes)
    } break;
    case 2:{
        var buscar = parseInt(input.question("Digite o ID do cliente: "))
        console.table(clientes.find(clientes => clientes.id === buscar))
    }break;
    case 3:{
        var buscar = parseInt(input.question("Digite o ID do cliente: "))
        var index = clientes.findIndex(clientes => clientes.id === buscar)
        clientes.splice(index, 1)
        console.table(clientes)
    }break;
    case 4:{
        var buscar = parseInt(input.question("Digite o ID do cliente: "))
        var index = clientes.findIndex(clientes => clientes.id === buscar)
        var index = {
            id: parseInt(input.question("Digite o ID do cliente: ")),
            nome: input.question("Digite o nome do cliente: "),
            cpf: input.question("Digite o CPF do cliente: "),
            email: input.question("Digite o email do cliente: "),
        }
        console.table(clientes)
    }break;
    case 5:{
        console.table(clientes)
    }break;
}