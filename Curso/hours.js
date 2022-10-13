var input = require('readline-sync');

var salario = parseFloat(input.question("Salario: "))
var dias = parseFloat(input.question("Dias: "))
var horas = parseFloat(input.question("Horas: "))
var produto = parseFloat(input.question("Valor do Produto: "))
var op = salario / (dias * horas)
var hours = parseInt(produto / op)
// if (media >= 7){
//     console.log("Aprovado! com nota "+media)
// }else if(media >= 5 && media < 7){
    
//     console.log ("Recuperacao "+media)
// }else{

//     console.log ("reprovado "+media)
// }

CONVERTER MINUTOS OU HORAS 
console.log(hours)
