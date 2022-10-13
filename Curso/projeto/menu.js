var input = require('readline-sync');
var media = require('./media');
var calc = require('./calc');

do{
var menu = parseInt(input.question("pressione  1 para calculadora e 2 para Media 3 para sair "))

switch(menu){
    case 1:calc.calc();break;
    case 2:media.med(); break;
}}while(menu != 3)

//export NODE_OPTIONS="--max-old-space-size=8192"export NODE_OPTIONS="--max-old-space-size=8192"