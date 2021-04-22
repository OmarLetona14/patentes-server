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
class PaisController {
    getOnePais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const q = `select * from pais as p 
        inner join region as r on r.id_region = p.id_region
        where id_pais = ${id};`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result[0]);
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `select * from pais as p 
        inner join region as r on r.id_region = p.id_region;`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json({ result });
            });
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `insert into pais(nombre_pais, poblacion, area, capital,id_region)
        values ('${req.body.nombre_pais}', ${req.body.poblacion}, ${req.body.area}, '${req.body.capital}',
        ${req.body.id_region});`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json({ "Message": "Insertado correctamente" });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const q = `delete from pais where id_pais = ${id} `;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json({ "Message": "Eliminado correctamente" });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const q = `update pais set nombre_pais = '${req.body.nombre_pais}', poblacion = ${req.body.poblacion}, area = ${req.body.area}
        , capital = ${req.body.capital}, id_region = ${req.body.id_region} where id_pais = ${id}`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json({ "Message": "Actualizado correctamente" });
            });
        });
    }
}
const paisController = new PaisController();
exports.default = paisController;
