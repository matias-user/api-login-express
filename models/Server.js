const express = require('express');
const router = require('../routes/UserRoutes');
class Server{

    PORT = 3032;
    constructor( ){
        this.app = express();
        this.listenServer();
        this.routes();
    }

    routes(){
        this.app.use( "/", require('../routes/UserRoutes') );
    }

    listenServer(){
       this.app.listen( this.PORT, () => console.log(`Servidor corriendo en ${this.PORT}`)); 
    }
}

module.exports = Server;