"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const respuestaController_1 = __importDefault(require("../controllers/respuestaController"));
class RespuestaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.post('/', respuestaController_1.default.getByQuestion);
    }
}
const regionRoutes = new RespuestaRoutes();
exports.default = regionRoutes.router;
