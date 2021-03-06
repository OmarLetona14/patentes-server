"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const paisRoutes_1 = __importDefault(require("./routes/paisRoutes"));
const regionRoutes_1 = __importDefault(require("./routes/regionRoutes"));
const preguntaRoutes_1 = __importDefault(require("./routes/preguntaRoutes"));
const respuestaRoutes_1 = __importDefault(require("./routes/respuestaRoutes"));
const encuestaRoutes_1 = __importDefault(require("./routes/encuestaRoutes"));
const inventoRoutes_1 = __importDefault(require("./routes/inventoRoutes"));
const consultasRoutes_1 = __importDefault(require("./routes/consultasRoutes"));
const inventorRoutes_1 = __importDefault(require("./routes/inventorRoutes"));
const profesionalRoutes_1 = __importDefault(require("./routes/profesionalRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/consultas', consultasRoutes_1.default);
        this.app.use('/paises', paisRoutes_1.default);
        this.app.use('/regiones', regionRoutes_1.default);
        this.app.use('/preguntas', preguntaRoutes_1.default);
        this.app.use('/respuestas', respuestaRoutes_1.default);
        this.app.use('/encuestas', encuestaRoutes_1.default);
        this.app.use('/inventos', inventoRoutes_1.default);
        this.app.use('/inventor', inventorRoutes_1.default);
        this.app.use('/profesional', profesionalRoutes_1.default);
    }
    start() {
        this.app.listen(process.env.SERVER_PORT, () => {
            console.log('Server is up');
        });
    }
}
const server = new Server();
server.start();
