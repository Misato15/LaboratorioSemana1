const {v4: uuidv4} = require('uuid');

class detalleEnvios{
    constructor(envio,paquetes){
        this.id=uuidv4()
        this.envio=envio
        this.paquetes.paquetes
    }
}

class ListadoDetalleEnvios{
    constructor(){
        this._listado = {};
    }
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;

        }
      
    cargarTareasFromArray (datos = []) {
        datos.forEach(detalleEnvios => {
            this._listado[detalleEnvios.id]=detalleEnvios;
        });
    }  

    crearDetalleEnvios(datos){
        const detalleEnvio = new detalleEnvios(
            datos.envio,
            datos.paquetes);
            this._listado[detalleEnvios.id] = detalleEnvios;
        }

    }

    module.exports={
       ListadoDetalleEnvios  
      }
