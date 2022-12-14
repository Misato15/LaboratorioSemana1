const {request, response} = require('express')
const {ListadoEnvios} = require('../models/envios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)

}

const PostEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvios(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado')
}

const PutEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
   const datos = lista.listadoArr.map(p =>
    p.id== req.params.id
    ? {"id":p.id,...req.body}
    : p

    );
    guardarDB(datos,'envios')
    res.send('Registro Actualizado')

}

const DeleteEnvios =(req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'envios')
    res.send('Registro Eliminado')
}


module.exports={
    GetEnvios,
    PostEnvios,
    PutEnvios,
    DeleteEnvios
}