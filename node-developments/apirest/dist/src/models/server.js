"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const eco_1 = __importDefault(require("../routes/eco"));
class Server {
    constructor() {
        this.apiPaths = {
            eco: '/apirest/'
        };
        this.app = express_1.default();
        this.port = '3001';
        // Middlewares
        this.middlewares();
        // Rutas del API
        this.routes();
    }
    middlewares() {
        // CORS
        this.app.use(cors_1.default());
        // Lectura del Body
        this.app.use(express_1.default.json());
        // Carpeta Pública
        // this.app.use( express.static('src/public') );
    }
    routes() {
        this.app.use(this.apiPaths.eco, eco_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor en puerto => ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map