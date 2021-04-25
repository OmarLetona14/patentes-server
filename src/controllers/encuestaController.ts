import {Request, Response} from 'express';
import connection from '../database/connection';

class EncuestaController{


    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select * from encuesta;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getByName(req:Request, res:Response): Promise<void>{
        const q = `select * from encuesta
        where nombre_encuesta = '${req.body.nombre_encuesta}'`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result[0]);
        });
    }

}

const encuestaController = new EncuestaController();
export default encuestaController;