"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestaController_1 = __importDefault(require("../controllers/encuestaController"));
class EncuestaRoute {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', encuestaController_1.default.getAll);
        this.router.post('/', encuestaController_1.default.getByName);
    }
}
const encuestaRoute = new EncuestaRoute();
exports.default = encuestaRoute.router;
