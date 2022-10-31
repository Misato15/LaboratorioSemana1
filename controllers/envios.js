const {reques, response} = require('express')
const {ListadoEnvios} = require('../models/envios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const getEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareaFromArray(datosJSON)
    res.json(lista.listadoArr)

}

const postEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvios(req,body)
    guardarDB(lista,listadoArr,'envios')
    res.send('Registro Creado')
}

const GetEnvios = (req = require ,res= response) =>{
    res.send('GET Enpoint para envios')
}

const PostEnvios = (req = require ,res=response) =>{
    res.send('POST Enpoint para envios')
}


const PutEnvios = (req = require ,res=response) =>{
    res.send('PUT Enpoint para envios')
}

const DeleteEnvios = (req = require ,res=response) =>{
    res.send('DELETE Enpoint para envios')
}
module.esports={
    GetEnvios,
    PostEnvios,
    PutEnvios,
    DeleteEnvios
}