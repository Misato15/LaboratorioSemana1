const express = require('express');

class Server {
    constructor(){
        this.app = express()
        this.routes();        
    }
    routes(){
        this.app.use('/precios',require('../routes/precios'))
        this.app.use('/paquetes',require('../routes/paquetes'))
        this.app.use('/envios',require('../routes/envios'))
        this.app.use('/detalleEnvios',require('../routes/detalleEnvios'))                
        this.app.use('/seguimiento',require('..//routes/seguimiento'))
      
    }
    listen(){
        this.app.listen(process.env.PORT, () => 
        console.log("El puerto está corriendo el puerto TCP" + process.env.PORT))
    }
}






module.exports = Server