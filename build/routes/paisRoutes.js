"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paisController_1 = __importDefault(require("../controllers/paisController"));
class PaisRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', paisController_1.default.getAll);
        this.router.get('/:id', paisController_1.default.getOnePais);
        this.router.get('/fronteras/:id', paisController_1.default.getFronteras);
        this.router.post('/fronteras', paisController_1.default.insertFrontera);
        this.router.post('/', paisController_1.default.insert);
        this.router.delete('/:id', paisController_1.default.delete);
        this.router.put('/:id', paisController_1.default.update);
    }
}
const paisRoutes = new PaisRoutes();
exports.default = paisRoutes.router;
