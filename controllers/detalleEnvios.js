const {request, response} = require('express')
const {ListadoDetalleEnvios} = require('../models/detalleEnvios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetDetalleEnvios = (req = request, res = response) => {
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)

}

const PostDetalleEnvios = (req = request, res = response) =>{
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearDetalleEnvios(req,body)
    guardarDB(lista.listadoArr,'detalleEnvios')
    res.send('Registro Creado')
}

const PutDetalleEnvios = (req = request, res = reponse) =>{
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
   const datos = lista.listadoArr.map(p =>
    p.id== req.params.id
    ? {"id":p.id,...req.body}
    : p

    );
    guardarDB(datos,'detalleEnvios')
    res.send('Registro Actualizado')

}

const DeleteDetalleEnvios =(req = request, res = response) =>{
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareaFromArray(datosJSON)
    //funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'detalleEnvios')
    res.send('Registro Eliminado')
}





module.exports={
    GetDetalleEnvios,
    PostDetalleEnvios,
    PutDetalleEnvios,
    DeleteDetalleEnvios
}