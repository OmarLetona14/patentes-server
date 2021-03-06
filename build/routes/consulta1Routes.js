"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consulta1Controller_1 = __importDefault(require("../controllers/consulta1Controller"));
class Consulta1Routes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', consulta1Controller_1.default.getConsulta);
    }
}
const consulta1Routes = new Consulta1Routes();
exports.default = consulta1Routes.router;
