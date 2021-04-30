"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preguntaController_1 = __importDefault(require("../controllers/preguntaController"));
class PreguntaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', preguntaController_1.default.getAll);
        this.router.get('/:id', preguntaController_1.default.getOne);
        this.router.post('/', preguntaController_1.default.insert);
        this.router.delete('/:id', preguntaController_1.default.delete);
        this.router.post('/update', preguntaController_1.default.update);
    }
}
const preguntaRoutes = new PreguntaRoutes();
exports.default = preguntaRoutes.router;
