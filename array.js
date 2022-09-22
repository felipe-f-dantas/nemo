var nomes  = ["Felipe","Francisco","Dantas"];
console.log(nomes);//Array
nomes.push("Joao")
console.log(nomes);//Adicionando um item no final
nomes.unshift("Joao Felipe")
console.log(nomes);//adicionando no inicio
nomes.pop()
console.log(nomes);//remover do final
nomes.shift()
console.log(nomes)//remover do inicio
nomes.splice(1,1)//o numero do elemento no array a ser excluido e a quantidade
console.log(nomes)
