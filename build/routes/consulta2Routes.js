"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consulta2Controller_1 = __importDefault(require("../controllers/consulta2Controller"));
class Consulta2Routes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', consulta2Controller_1.default.getConsulta);
    }
}
const consulta2Routes = new Consulta2Routes();
exports.default = consulta2Routes.router;
