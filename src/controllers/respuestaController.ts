import {Request, Response} from 'express';
import connection from '../database/connection';

class RespuestaController{


    public async getByQuestion(req:Request, res:Response): Promise<void>{
        const q = `select * from respuesta
        where id_pregunta = ${req.body.id_pregunta}`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getByContenido(req:Request, res:Response): Promise<void>{
        const q = `select * from respuesta
        where respuesta = '${req.body.respuesta}';`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result[0]);
        });
    }

}

const respuestaController = new RespuestaController();
export default respuestaController;