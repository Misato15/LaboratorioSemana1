const {request, response} = require('express')
const {ListadoPaquetes} = require('../models/paquetes')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetPaquetes = (req = request, res = response) => {
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)

}

const PostPaquetes = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPaquetes(req.body)
    guardarDB(lista.listadoArr,'paquetes')
    res.send('Registro Creado')
}

const PutPaquetes= (req = request, res = response) =>{
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
   const datos = lista.listadoArr.map(p =>
    p.id== req.params.id
    ? {"id":p.id,...req.body}
    : p

    );
    guardarDB(datos,'paquetes')
    res.send('Registro Actualizado')

}

const DeletePaquetes =(req = request, res = response) =>{
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'paquetes')
    res.send('Registro Eliminado')
}
module.exports={
    GetPaquetes,
    PostPaquetes,
    PutPaquetes,
    DeletePaquetes
}