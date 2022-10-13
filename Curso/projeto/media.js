var input = require('readline-sync');


var med = () => {

    var not1 = parseFloat(input.question("digite a primeira nota "))
    var not2 = parseFloat(input.question("digite a segunda nota "))
    var media = (not1 + not2)/2
   
   
    if (media >= 7){
       
        console.log("Aprovado! com nota "+media)
    }else if(media >= 5 && media < 7){
       
        console.log ("Recuperacao "+media)
    }else{
   
    console.log ("reprovado "+media)
    }

    }  


 module.exports = {med}
