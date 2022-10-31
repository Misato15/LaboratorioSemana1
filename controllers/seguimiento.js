const {reques, response} = require('express')

const GetSeguimiento = (req = require ,res= response) =>{
    res.send('GET Enpoint para seguimiento')
}

const PostSeguimiento = (req = require ,res=response) =>{
    res.send('POST Enpoint para seguimiento')
}


const PutSeguimiento = (req = require ,res=response) =>{
    res.send('PUT Enpoint para seguimiento')
}

const DeleteSeguimiento = (req = require ,res=response) =>{
    res.send('DELETE Enpoint para seguimiento')
}
module.esports={
    GetSeguimiento,
    PostSeguimiento,
    PutSeguimiento,
    DeleteSeguimiento
}