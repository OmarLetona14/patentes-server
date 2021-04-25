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
class PreguntaController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const q = `select * from pregunta as p 
        inner join encuesta as e on e.id_encuesta = p.id_encuesta
        inner join respuesta_correcta rc on rc.id_pregunta = p.id_pregunta
        inner join respuesta as r on r.id_respuesta = rc.id_respuesta
        where p.id_pregunta = ${id};`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result[0]);
            });
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `select * from pregunta as p 
        inner join encuesta as e on e.id_encuesta = p.id_encuesta
        inner join respuesta_correcta rc on rc.id_pregunta = p.id_pregunta
        inner join respuesta as r on r.id_respuesta = rc.id_respuesta;`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const q = `insert into pregunta (contenido, id_encuesta)
        values ('${req.body.contenido}', ${req.body.id_encuesta});`;
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
            const q = `delete from pregunta where id_pregunta = ${id} `;
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
            const q = `update pregunta set contenido = '${req.body.contenido}', id_encuesta = ${req.body.id_encuesta}
        where id_pregunta = ${id};`;
            yield connection_1.default.query(q, (err, result, fields) => {
                if (err)
                    throw err;
                res.json({ "Message": "Actualizado correctamente" });
            });
        });
    }
}
const preguntaController = new PreguntaController();
exports.default = preguntaController;
