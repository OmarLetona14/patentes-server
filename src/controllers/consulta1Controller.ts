import {Request, Response} from 'express';
import connection from '../database/connection';

class Consulta1Controller{
 
    public async getConsulta(req:Request, res:Response): Promise<void>{
        const q = `select p.nombre_profesional, count(*) as inventos_asignados from profesional as p 
        inner join invento_profesional as ip on ip.id_profesional = p.id_profesional
        inner join invento as i on i.id_invento = ip.id_invento
        group by p.nombre_profesional
        order by count(*) desc;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }
}

const consulta1Controller = new Consulta1Controller();
export default consulta1Controller;