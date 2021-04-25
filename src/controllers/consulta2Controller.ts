import {Request, Response} from 'express';
import connection from '../database/connection';

class Consulta2Controller{
 
    public async getConsulta(req:Request, res:Response): Promise<void>{
        const q = `select p.nombre_pais, if(count(*) = 1, 0, count(*)) as numero_respuestas
        from respuesta_pais as rp
        right join pais as p on p.id_pais = rp.id_pais
        group by p.nombre_pais 
        order by p.nombre_pais;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }
}

const consulta2Controller = new Consulta2Controller();
export default consulta2Controller;