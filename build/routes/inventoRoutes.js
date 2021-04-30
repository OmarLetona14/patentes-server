"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventoController_1 = __importDefault(require("../controllers/inventoController"));
class InventoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', inventoController_1.default.getAll);
        this.router.get('/:id', inventoController_1.default.getOne);
        this.router.put('/:id', inventoController_1.default.update);
    }
}
const inventoRoutes = new InventoRoutes();
exports.default = inventoRoutes.router;
