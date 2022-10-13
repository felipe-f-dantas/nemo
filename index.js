//config inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Person = require('./models/Person');


//forma de ler o json / middlewares
app.use(
    express.urlencoded({
        extends: true
    })
)

app.use(express.json())


//rota da API
app.post('/person',async(req,res)=>{
   
    //req.body

     //{name: "Felipe", salary: 4800, approved: false}
    const{name,salary, approved} = req.body

    if(!name){
        res.status(422).json({error: 'nome obrigatorio!'})
    }

    const person = {
        name,
        salary,
        approved
    }

    try{
       //criando dados
        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})
    }catch(error){
        res.status(500).json({error:error})
    }
})



//rota inical ou endpoint

app.get('/',(req,res)=>{

    //mostrar req

    res.json({message: 'oi Express'})
})

//enetregar a porta da aplicacao 
const DB_USER = 'spider_of_dark'
const DB_PASSWORD = encodeURIComponent('11504346')


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.ua6if2w.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(()=>{
    console.log("conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err)=> console.log(err))