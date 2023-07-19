const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');

class Server {

    PORT = 8080;
    constructor() {
        this.app = express();
        this.listenServer();
        this.middlewares();
        this.routes();
    }


    middlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
    }

    routes() {
        this.app.use("/", require('../routes/UserRoutes'));
    }

    listenServer() {
        this.app.listen(this.PORT, () => console.log(`Servidor corriendo en ${this.PORT}`));
    }
}

module.exports = Server;