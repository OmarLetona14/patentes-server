"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultasController_1 = __importDefault(require("../controllers/consultasController"));
class ConsultasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/consulta1', consultasController_1.default.getConsulta1);
        this.router.get('/consulta2', consultasController_1.default.getConsulta2);
        this.router.get('/consulta3', consultasController_1.default.getConsulta3);
        this.router.get('/consulta4', consultasController_1.default.getConsulta4);
        this.router.get('/consulta5', consultasController_1.default.getConsulta5);
        this.router.get('/consulta6', consultasController_1.default.getConsulta6);
        this.router.get('/consulta7', consultasController_1.default.getConsulta7);
        this.router.get('/consulta8', consultasController_1.default.getConsulta8);
        this.router.get('/consulta9', consultasController_1.default.getConsulta9);
        this.router.get('/consulta10', consultasController_1.default.getConsulta10);
        this.router.get('/consulta11', consultasController_1.default.getConsulta11);
        this.router.get('/consulta12', consultasController_1.default.getConsulta12);
        this.router.get('/consulta13', consultasController_1.default.getConsulta13);
        this.router.get('/consulta14', consultasController_1.default.getConsulta14);
        this.router.get('/consulta15', consultasController_1.default.getConsulta15);
        this.router.get('/consulta16', consultasController_1.default.getConsulta16);
        this.router.get('/consulta17', consultasController_1.default.getConsulta17);
        this.router.get('/consulta18', consultasController_1.default.getConsulta18);
        this.router.get('/consulta19', consultasController_1.default.getConsulta19);
        this.router.get('/consulta20', consultasController_1.default.getConsulta20);
    }
}
const consultasRoutes = new ConsultasRoutes();
exports.default = consultasRoutes.router;
