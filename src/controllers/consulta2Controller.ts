import {Request, Response} from 'express';
import connection from '../database/connection'

class Consulta2Controller{
 
    public async getConsulta(req:Request, res:Response): Promise<void>{
        const q = `call consulta2();`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });

    }
}

const consulta2Controller = new Consulta2Controller();
export default consulta2Controller;