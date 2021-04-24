"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regionController_1 = __importDefault(require("../controllers/regionController"));
class RegionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', regionController_1.default.getAll);
        this.router.post('/', regionController_1.default.getByName);
    }
}
const regionRoutes = new RegionRoutes();
exports.default = regionRoutes.router;
