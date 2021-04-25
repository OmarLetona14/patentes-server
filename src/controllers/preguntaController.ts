import {Request, Response} from 'express';
import connection from '../database/connection';

class PreguntaController{

    public async getOne(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        const q = `select * from pregunta as p 
        inner join encuesta as e on e.id_encuesta = p.id_encuesta
        inner join respuesta_correcta rc on rc.id_pregunta = p.id_pregunta
        inner join respuesta as r on r.id_respuesta = rc.id_respuesta
        where p.id_pregunta = ${id};`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result[0]);
        });
    }

    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select * from pregunta as p 
        inner join encuesta as e on e.id_encuesta = p.id_encuesta
        inner join respuesta_correcta rc on rc.id_pregunta = p.id_pregunta
        inner join respuesta as r on r.id_respuesta = rc.id_respuesta;`;
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
        const q = `update pregunta set contenido = '${req.body.contenido}', id_encuesta = ${req.body.id_encuesta}
        where id_pregunta = ${id};`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Actualizado correctamente"});
        });
    }
}

const preguntaController = new PreguntaController();
export default preguntaController;