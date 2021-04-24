import {Request, Response} from 'express';
import connection from '../database/connection';

class PreguntaController{

    public async getOne(req:Request,res:Response): Promise<void>{
        const {id} = req.params;
        const q = `select * from respuesta as r
        inner join pregunta as p on p.id_pregunta = r.id_pregunta
        inner join encuesta as e on e.id_encuesta = p.id_encuesta
        where id_respuesta = ${id};`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result[0]);
        });
    }

    public async getAll(req:Request, res:Response): Promise<void>{
        const q = `select * from respuesta as r
        inner join pregunta as p on p.id_pregunta = r.id_pregunta
        inner join encuesta as e on e.id_encuesta = p.id_encuesta;`;
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

const preguntaController = new PreguntaController();
export default preguntaController;