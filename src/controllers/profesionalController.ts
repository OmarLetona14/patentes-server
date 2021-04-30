import {Request, Response} from 'express';
import connection from '../database/connection';

class ProfesionalController{


    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select * from profesional;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

}

const profesionalController = new ProfesionalController();
export default profesionalController;