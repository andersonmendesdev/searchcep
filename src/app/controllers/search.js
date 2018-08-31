import axios from 'axios'

const ValidarCep = (cep) =>{
    const rule = /^[0-9]{8}$/
    const Isvalid = rule.test(cep)
    if(Isvalid){
        return true
    }else{
        return false
    }
}

const searchcep = async (req, res) =>{
    const {cep} = req.body
    const isValid = await ValidarCep(cep)
    if(!isValid){
        return res.status(401).send({status: 401, error: 'cep invalido'})
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
            Error: 'Cep nao existe'
        })
        
    })
}
const searchcepId = async (req, res) => {
    const cep = req.params.id
    const isValid = await ValidarCep(cep)
    if(!isValid){
        return res.status(401).send({status: 401, error: 'cep invalido'})
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
            Error: 'Cep nao existe'
        })
        
    })
}
const searchQuery = async (req, res) => {
    const cep = req.query.cep
    const isValid = await ValidarCep(cep)
    if(!isValid){
        return res.status(401).send({status: 401, error: 'cep invalido'})
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
            Error: 'Cep nao existe'
        })
        
    })
}

module.exports = {
    searchcep, searchcepId, searchQuery
}