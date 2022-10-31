const {reques, response} = require('express')
const {ListadoDetalleEnvios} = require('../models/detalleEnvios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetDetallesEnvios = (req = request, res = response) => {
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)

}

const PostDetallesEnvios = (req = request, res = response) =>{
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearDetalleEnvios(req,body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado')
}

const PutDetallesEnvios = (req = request, res = reponse) =>{
    let lista = new ListadoDetalleEnvios()
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

const DeleteDetallesEnvios =(req = request, res = response) =>{
    let listas = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareaFromArray(datosJSON)
    //funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'envios')
    res.send('Registro Eliminado')
}





module.esports={
    GetDetallesEnvios,
    PostDetallesEnvios,
    PutDetallesEnvios,
    DeleteDetallesEnvios
}