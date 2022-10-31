const {reques, response} = require('express')

const GetPrecios = (req = require ,res= response) =>{
    res.send('GET Enpoint para precios')
}

const PostPrecios = (req = require ,res=response) =>{
    res.send('POST Enpoint para precios')
}


const PutPrecios = (req = require ,res=response) =>{
    res.send('PUT Enpoint para precios')
}

const DeletePrecios = (req = require ,res=response) =>{
    res.send('DELETE Enpoint para precios')
}
module.esports={
    GetPrecios,
    PostPrecios,
    PutPrecios,
    DeletePrecios
}