const fetch = require('node-fetch');


async function buscarDadosApis(){
  const response = await fetch('http://gistapis.etufor.ce.gov.br:8081/api/linhas/')
  var dados = await response.json()
  
  dados.forEach(e => {
    console.log(e.numero)
  })
    // console.log(dados)
}

buscarDadosApis()






