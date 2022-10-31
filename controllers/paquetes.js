const {reques, response} = require('express')

const GetPaquetes = (req = require ,res= response) =>{
    res.send('GET Enpoint para paquetes')
}

const PostPaquetes = (req = require ,res=response) =>{
    res.send('POST Enpoint para paquetes')
}


const PutPaquetes = (req = require ,res=response) =>{
    res.send('PUT Enpoint para paquetes')
}

const DeletePaquetes = (req = require ,res=response) =>{
    res.send('DELETE Enpoint para paquetes')
}
module.esports={
    GetPaquetes,
    PostPaquetes,
    PutPaquetes,
    DeletePaquetes
}