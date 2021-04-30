import {Request, Response} from 'express';
import connection from '../database/connection';

class PreguntaController{

    public async getOne(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        const q = `select p.id_pregunta, p.contenido, e.id_encuesta, e.nombre_encuesta, rc.id_respuesta_correcta,
        r.id_respuesta, r.respuesta, r.inciso from pregunta as p 
        inner join encuesta as e on e.id_encuesta = p.id_encuesta
        left join respuesta_correcta rc on rc.id_pregunta = p.id_pregunta
        left join respuesta as r on r.id_respuesta = rc.id_respuesta
        where p.id_pregunta = ${id};`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result[0]);
        });
    }

    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select p.id_pregunta, p.contenido, e.id_encuesta, e.nombre_encuesta, rc.id_respuesta_correcta,
        r.id_respuesta, r.respuesta, r.inciso from pregunta as p 
        inner join encuesta as e on e.id_encuesta = p.id_encuesta
        left join respuesta_correcta rc on rc.id_pregunta = p.id_pregunta
        left join respuesta as r on r.id_respuesta = rc.id_respuesta;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async insert(req:Request, res:Response): Promise<void>{
        const q = `insert into pregunta (contenido, id_encuesta)
        values ('${req.body.contenido}', ${req.body.id_encuesta});`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Insertado correctamente"});
        });
    }

    public async delete(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        const q =`delete from pregunta where id_pregunta = ${id} `;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Eliminado correctamente"});
        });
    }

    public async update(req:Request, res:Response){
        const {id} = req.params;
        const q = `call updatePregunta('${req.body.contenido}', ${req.body.id_encuesta}, 
        ${req.body.id_pregunta}, ${req.body.id_respuesta});`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Actualizado correctamente"});
        });
    }
}

const preguntaController = new PreguntaController();
export default preguntaController;