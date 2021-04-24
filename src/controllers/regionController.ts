import {Request, Response} from 'express';
import connection from '../database/connection';

class RegionController{

    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select * from region;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getByName(req:Request, res:Response): Promise<void>{
        const q = `select id_region from region where nombre_region = '${req.body.nombre_region}';`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

}

const regionController = new RegionController();
export default regionController;