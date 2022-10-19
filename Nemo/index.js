//config inicial
const express = require ('express');
const mongoose = require ('mongoose');
const app = express();



//forma de ler o json / middlewares
app.use(
    express.urlencoded({
        extends: true
    })
)

app.use(express.json())


//rota da API
const personRoutes = require('./routes/personRoutes')

app.use('/person',personRoutes)

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