import express, { Application } from 'express';
import cors from "cors";
import eco from '../routes/eco';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        eco: '/apirest/'
    }

    constructor() {
        this.app = express();
        this.port = '3001';
        // Middlewares
        this.middlewares();
        // Rutas del API
        this.routes();
    }


    middlewares() {
        // CORS
        this.app.use( cors() );
        // Lectura del Body
        this.app.use( express.json() );
        // Carpeta Pública
        // this.app.use( express.static('src/public') );
    }

    routes() {
        this.app.use( this.apiPaths.eco, eco );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor en puerto => ${this.port}`)
        });
    }
}

export default Server;