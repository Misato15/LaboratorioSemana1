const {reques, response} = require('express')
const {ListadoPrecios} = require('../models/precios')
const {guardarDB, leerDB} = require('../helpers/gestorDB')

const GetPrecios = (req = request, res = response) => {
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)

}

const PostPrecios = (req = request, res = response) =>{
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPrecios(req,body)
    guardarDB(lista.listadoArr,'paquetes')
    res.send('Registro Creado')
}

const PutPrecios= (req = request, res = reponse) =>{
    let lista = new ListadoPaPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
   const datos = lista.listadoArr.map(p =>
    p.id== req.params.id
    ? {"id":p.id,...req.body}
    : p

    );
    guardarDB(datos,'precios')
    res.send('Registro Actualizado')

}

const DeletePrecios =(req = request, res = response) =>{
    let listas = new ListadoPrecios()
    let datosJSON = leerDB('paprecios');
    lista.cargarTareaFromArray(datosJSON)
    //funcion para eliminar
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data,'precios')
    res.send('Registro Eliminado')
}
module.esports={
    GetPrecios,
    PostPrecios,
    PutPrecios,
    DeletePrecios
}