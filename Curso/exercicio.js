var input = require('readline-sync');

do{
 
    var menu = parseInt(input.question("pressione  1 para calculadora e 2 para Media 3 para sair "))

switch(menu){
    case 1:var val1 = parseFloat(input.question("digite um valor "))
    var val2 = parseFloat(input.question("digite um segundo valor "))
    var op = (input.question("digite um operador +, -, *, / "))
    
    switch(op){
        case "+" : console.log(val1 + val2);break;
        case "-":console.log(val1 - val2);break;
        case "*":console.log(val1 * val2);break;
        case "/" :console.log(val1 / val2);break;
    };break
    
    case 2:var not1 = parseFloat(input.question("digite a primeira nota "))
    var not2 = parseFloat(input.question("digite a segunda nota "))
    var media = (not1 + not2)/2
    
    
    if (media >= 7){
        
        console.log("Aprovado! com nota "+media)
    }else if(media >= 5 && media < 7){
        
        console.log ("Recuperacao "+media)
    }else{
    
    console.log ("reprovado "+media)
    };break
    
}
}while(menu != 3)

//export NODE_OPTIONS="--max-old-space-size=8192"export NODE_OPTIONS="--max-old-space-size=8192"