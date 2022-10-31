const {request, response} = require('express')
const {ListadoSeguimiento} = require('../models/seguimiento')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetSeguimiento = (req = request, res = response) => {
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)

}

const PostSeguimiento = (req = request, res = response) =>{
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearSeguimiento(req.body)
    guardarDB(lista.listadoArr,'seguimiento')
    res.send('Registro Creado')
}

const PutSeguimiento = (req = request, res = response) =>{
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
   const datos = lista.listadoArr.map(p =>
    p.id== req.params.id
    ? {"id":p.id,...req.body}
    : p

    );
    guardarDB(datos,'seguimiento')
    res.send('Registro Actualizado')

}

const DeleteSeguimiento =(req = request, res = response) =>{
    let lista = new ListadoSeguimiento()
    let datosJSON = leerDB('seguimiento');
    lista.cargarTareaFromArray(datosJSON)
    //funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'seguimiento')
    res.send('Registro Eliminado')
}

module.exports={
    GetSeguimiento,
    PostSeguimiento,
    PutSeguimiento,
    DeleteSeguimiento
}