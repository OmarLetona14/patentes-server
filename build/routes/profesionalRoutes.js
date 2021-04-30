"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesionalController_1 = __importDefault(require("../controllers/profesionalController"));
class ProfesionalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', profesionalController_1.default.getAll);
    }
}
const profesionalRoutes = new ProfesionalRoutes();
exports.default = profesionalRoutes.router;
