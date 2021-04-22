"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const consulta2Routes_1 = __importDefault(require("./routes/consulta2Routes"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/consulta2', consulta2Routes_1.default);
    }
    start() {
        this.app.listen(3000, () => {
            console.log('Server is up');
        });
    }
}
const server = new Server();
server.start();
