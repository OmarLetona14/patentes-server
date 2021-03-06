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
class Consulta1Controller {
    getConsulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `select p.nombre_profesional, count(*) as inventos_asignados from profesional as p 
        inner join invento_profesional as ip on ip.id_profesional = p.id_profesional
        inner join invento as i on i.id_invento = ip.id_invento
        group by p.nombre_profesional
        order by count(*) desc;`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
const consulta1Controller = new Consulta1Controller();
exports.default = consulta1Controller;
