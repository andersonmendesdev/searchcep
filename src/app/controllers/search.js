import axios from 'axios'
const rule = /^[0-9]{8}$/;

const searchcep = async (req, res) =>{
    const {cep} = req.body
    const isValid = await rule.test(cep)//await ValidarCep(cep)
    if(!isValid){
        return res.status(401).send({error: 'cep invalido'})
    }
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function (response) {
        if(!response.data.erro){
            return res.send({
                status: 200,
                data: response.data
            })
        }
        res.status(401).send({
            error: 'Cep nao existe'
        })        
    })
    .catch( (error) => {
        res.status(404).send({error: 'Busca inoperante'})
    })
}
const searchcepId = async (req, res) => {
    const cep = req.params.id
    const isValid = await rule.test(cep)//await ValidarCep(cep)
    if(!isValid){
        return res.status(401).send({error: 'cep invalido'})
    }
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function (response) {
        if(!response.data.erro){
            return res.send({
                status: 200,
                data: response.data
            })
        }
        res.status(401).send({
            error: 'Cep nao existe'
        })        
    })
    .catch( (error) => {
        res.status(404).send({error: 'Busca inoperante'})
    })
}
const searchQuery = async (req, res) => {
    const cep = req.query.cep
    const isValid = await rule.test(cep)//await ValidarCep(cep)
    if(!isValid){
        return res.status(401).send({error: 'cep invalido'})
    }
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function (response) {
        if(!response.data.erro){
            return res.send({
                status: 200,
                data: response.data
            })
        }
        res.status(401).send({
            error: 'Cep nao existe'
        })        
    })
    .catch( (error) => {
        res.status(404).send({error: 'Busca inoperante'})
    })
}

module.exports = {
    searchcep, searchcepId, searchQuery
}