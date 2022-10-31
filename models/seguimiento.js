const {v4: uuidv4} = require('uuid');

class Seguimiento{
    constructor(envio,fecha,hora,lugar){
        this.id=uuidv4()
        this.envio=envio
        this.fecha=fecha
        this.hora=hora
        this.lugar=lugar
    }
}

class ListadoSeguimiento{
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
        datos.forEach(seguimiento => {
            this._listado[seguimiento.id]=seguimiento;
        });
    }  

    crearSeguimiento(datos){
        const seguimiento = new Seguimiento(
            datos.envio,
            datos.fecha,
            datos.hora,
            datos.lugar);
            this._listado[seguimiento.id] = seguimiento;
        }

    }

    module.exports={
        ListadoSeguimiento
    }
