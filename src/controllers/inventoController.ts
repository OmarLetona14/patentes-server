import {Request, Response} from 'express';
import connection from '../database/connection';

class InventoController{

    public async getOne(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        const q = `select i.id_invento, i.nombre_invento, i.anio, p.id_pais, p.nombre_pais, pro.id_profesional, 
        pro.nombre_profesional, inv.id_inventor, inv.nombre_inventor
            from invento as i 
            inner join pais as p on p.id_pais = i.id_pais
            inner join invento_profesional as pi on pi.id_invento = i.id_invento
            inner join profesional as pro on pro.id_profesional = pi.id_profesional
            inner join invento_inventor as ii on ii.id_invento = i.id_invento
            inner join  inventor as inv on inv.id_inventor = ii.id_inventor
        where i.id_invento = ${id};`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result[0]);
        });
    }

    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select i.id_invento, i.nombre_invento, i.anio, p.id_pais, p.nombre_pais, pro.id_profesional, 
        pro.nombre_profesional, inv.id_inventor, inv.nombre_inventor
            from invento as i 
            inner join pais as p on p.id_pais = i.id_pais
            inner join invento_profesional as pi on pi.id_invento = i.id_invento
            inner join profesional as pro on pro.id_profesional = pi.id_profesional
            inner join invento_inventor as ii on ii.id_invento = i.id_invento
            inner join  inventor as inv on inv.id_inventor = ii.id_inventor;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
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

    public async update(req:Request, res:Response){
        const {id} = req.params;
        const q = `call updateInvento('${req.body.nombre_invento}', ${req.body.anio}, ${req.body.id_pais},
        ${id}, ${req.body.id_profesional}, ${req.body.id_inventor});`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json({"Message":"Actualizado correctamente"});
        });
    }
}

const inventoController = new InventoController();
export default inventoController;