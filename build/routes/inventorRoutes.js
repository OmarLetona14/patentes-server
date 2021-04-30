"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventorController_1 = __importDefault(require("../controllers/inventorController"));
class InventorRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', inventorController_1.default.getAll);
        this.router.post('/', inventorController_1.default.getByInventor);
    }
}
const inventorRoutes = new InventorRoutes();
exports.default = inventorRoutes.router;
