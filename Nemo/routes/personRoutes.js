const router = require('express').Router();
const Person = require('../models/Person');

//CREATE Criacao de pessoas
router.post('/',async(req,res)=>{
   
    //req.body

     //{name: "Felipe", salary: 4800, approved: false}
    const{name,salary, approved} = req.body

    if(!name){
        res.status(422).json({error: 'nome obrigatorio!'})
        return
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

//READ leitura de pessoas
router.get('/',async(req,res)=>{
    try {

        const people = await Person.find()

        res.status(200).json(people)

    }catch(error){
        res.status(500).json({error: error})
    }
})

router.get('/:id',async(req,res)=>{
    //Extrair o dado da requisicao de pessoas
    const id = req.params.id
    
    try {
        const person = await Person.findOne({ _id: id })
        

        if (!person){
            res.status(422).json({message: 'Usuario nao encontrado!'})
            return
        }

        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({error: error})
  
    }
})

//update -  atualizacao de dados (PUT,Patch)
router.patch('/:id',async(req,res)=>{

    const id = req.params.id

    const{name,salary, approved} = req.body

    const person = {
        name,
        salary,
        approved
    }
    try {
    
        const updatedPerson = await Person.updateOne({_id: id},person)
        
        res.status(200).json(person)
        
    }catch(error){
        res.status(500).json({error: error})
    }

})

module.exports = router
