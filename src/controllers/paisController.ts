import {Request, Response} from 'express';
import connection from '../database/connection';

class PaisController{

    public async getOnePais(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        const q = `select * from pais as p 
        inner join region as r on r.id_region = p.id_region
        where id_pais = ${id};`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result[0]);
        });
    }

    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select * from pais as p 
        inner join region as r on r.id_region = p.id_region;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getFronteras(req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        const q = `select p1.nombre_pais as frontera, 
        if(f.norte !="", "Norte", if(f.sur !="", "Sur", if(f.este !="", "Este", if(f.oeste !="", "Oeste", "")))) as cardinalidad
        from frontera as f
        inner join pais as p on p.id_pais = f.id_pais_origen
        inner join pais as p1 on p1.id_pais = f.id_pais_frontera
        where p.id_pais = ${id};`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async insertFrontera(req:Request, res:Response): Promise<void>{
        const q = `insert into frontera (norte, sur, este, oeste, id_pais_origen, id_pais_frontera)
        values ('${req.body.norte}', '${req.body.sur}', '${req.body.este}', '${req.body.oeste}',
        ${req.body.id_pais_origen}, ${req.body.id_pais_frontera});`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Insertado correctamente"});
        });
    }

    public async insert(req:Request, res:Response): Promise<void>{
        const q = `insert into pais(nombre_pais, poblacion, area, capital,id_region)
        values ('${req.body.nombre_pais}', ${req.body.poblacion}, ${req.body.area}, '${req.body.capital}',
        ${req.body.id_region});`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Insertado correctamente"});
        });
    }

    public async delete(req:Request, res:Response):Promise<void>{
        const {id} = req.params;
        const q =`delete from pais where id_pais = ${id} `;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Eliminado correctamente"});
        });
    }

    public async update(req:Request, res:Response){
        const {id} = req.params;
        const q = `update pais set nombre_pais = '${req.body.nombre_pais}', poblacion = ${req.body.poblacion}, area = ${req.body.area}
        , capital = '${req.body.capital}', id_region = ${req.body.id_region} where id_pais = ${id}`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Actualizado correctamente"});
        });
    }


}

const paisController = new PaisController();
export default paisController;