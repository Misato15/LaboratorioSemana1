const {reques, response} = require('express')



const GetDetallesEnvios = (req = require ,res= response) =>{
    res.send('GET Enpoint para detalleEnvios')
}

const PostDetallesEnvios = (req = require ,res=response) =>{
    res.send('POST Enpoint para detalleEnvios')
}


const PutDetallesEnvios = (req = require ,res=response) =>{
    res.send('PUT Enpoint para detalleEnvios')
}

const DeleteDetallesEnvios = (req = require ,res=response) =>{
    res.send('DELETE Enpoint para detalleEnvios')
}
module.esports={
    GetDetallesEnvios,
    PostDetallesEnvios,
    PutDetallesEnvios,
    DeleteDetallesEnvios
}