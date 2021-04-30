import connection from '../database/connection';
import {Request, Response} from 'express';

class InventorController{


    public async getByInventor(req:Request, res:Response): Promise<void>{
        const q = `select inv.id_inventor, inv.nombre_inventor from invento as i
        inner join invento_inventor as ii on ii.id_invento = i.id_invento
        inner join inventor as inv on inv.id_inventor = ii.id_inventor
        where i.nombre_invento = '${req.body.nombre_invento}';`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select * from inventor;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

}

const inventorController = new InventorController();
export default inventorController;