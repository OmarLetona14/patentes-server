"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
class Server {
    constructor() {
        dotenv_1.default.config();
        this.app = express_1.default();
        this.configure();
        this.routes();
    }
    configure() {
        this.app.set('port', process.env.SERVER_PORT);
    }
    routes() {
        this.app.use(indexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server is up');
        });
    }
}
const server = new Server();
server.start();
