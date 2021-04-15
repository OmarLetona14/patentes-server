"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.configure();
    }
    configure() {
        this.router.get('/', (req, res) => {
            res.send('Index');
        });
    }
}
const indexroutes = new IndexRoutes();
exports.default = indexroutes.router;
