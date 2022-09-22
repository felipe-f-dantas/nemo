var input = require('readline-sync');

var calc = () =>{

    var val1 = parseFloat(input.question("digite um valor "))
    var val2 = parseFloat(input.question("digite um segundo valor "))
    var op = (input.question("digite um operador +, -, *, / "))
   
    switch(op){
        case "+" : console.log(val1 + val2);break;
        case "-":console.log(val1 - val2);break;
        case "*":console.log(val1 * val2);break;
        case "/" :console.log(val1 / val2);break;
    }

}

module.exports = {calc}
