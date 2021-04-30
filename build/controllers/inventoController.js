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
class InventoController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const q = `select i.id_invento, i.nombre_invento, i.anio, p.id_pais, p.nombre_pais, pro.id_profesional, 
        pro.nombre_profesional, inv.id_inventor, inv.nombre_inventor
            from invento as i 
            inner join pais as p on p.id_pais = i.id_pais
            inner join invento_profesional as pi on pi.id_invento = i.id_invento
            inner join profesional as pro on pro.id_profesional = pi.id_profesional
            inner join invento_inventor as ii on ii.id_invento = i.id_invento
            inner join  inventor as inv on inv.id_inventor = ii.id_inventor
        where i.id_invento = ${id};`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result[0]);
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `select i.id_invento, i.nombre_invento, i.anio, p.id_pais, p.nombre_pais, pro.id_profesional, 
        pro.nombre_profesional, inv.id_inventor, inv.nombre_inventor
            from invento as i 
            inner join pais as p on p.id_pais = i.id_pais
            inner join invento_profesional as pi on pi.id_invento = i.id_invento
            inner join profesional as pro on pro.id_profesional = pi.id_profesional
            inner join invento_inventor as ii on ii.id_invento = i.id_invento
            inner join  inventor as inv on inv.id_inventor = ii.id_inventor;`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result);
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
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const q = `call updateInvento('${req.body.nombre_invento}', ${req.body.anio}, ${req.body.id_pais},
        ${id}, ${req.body.id_profesional}, ${req.body.id_inventor});`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json({ "Message": "Actualizado correctamente" });
            });
        });
    }
}
const inventoController = new InventoController();
exports.default = inventoController;
