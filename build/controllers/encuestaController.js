"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class EncuestaController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `select * from encuesta;`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `select * from encuesta
        where nombre_encuesta = '${req.body.nombre_encuesta}'`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result[0]);
            });
        });
    }
}
const encuestaController = new EncuestaController();
exports.default = encuestaController;
