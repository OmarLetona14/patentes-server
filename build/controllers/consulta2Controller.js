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
class Consulta2Controller {
    getConsulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `select p.nombre_pais, if(count(*) = 1, 0, count(*))  as numero_respuestas
        from respuesta_pais as rp
        right join pais as p on p.id_pais = rp.id_pais
        group by p.nombre_pais 
        order by p.nombre_pais; `;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
const consulta2Controller = new Consulta2Controller();
exports.default = consulta2Controller;
