import {Request, Response} from 'express';
import connection from '../database/connection';

class ConsultasController{
 
    public async getConsulta1(req:Request, res:Response): Promise<void>{
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

    public async getConsulta2(req:Request, res:Response): Promise<void>{
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

    public async getConsulta3(req:Request, res:Response): Promise<void>{
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

    public async getConsulta4(req:Request, res:Response): Promise<void>{
        const q = `select a.nombre_area, p1.nombre_profesional as jefe, p.nombre_profesional as subalterno from profesional_area as pa
        inner join profesional as p on pa.id_profesional = p.id_profesional
        inner join area_investigacion as a on a.id_area_investigacion = pa.id_area_investigacion
        inner join profesional as p1 on p1.id_profesional = a.id_profesional
        order by p1.nombre_profesional;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta5(req:Request, res:Response): Promise<void>{
        const q = `select a.nombre_area,p.nombre_profesional, p.salario from profesional_area as pa
        inner join profesional as p on pa.id_profesional = p.id_profesional
        inner join area_investigacion as a on a.id_area_investigacion = pa.id_area_investigacion
        where p.salario > (
        select avg(pp.salario) as promedio from profesional_area as paa
        inner join profesional as pp on paa.id_profesional = pp.id_profesional
        inner join area_investigacion as aa on aa.id_area_investigacion = paa.id_area_investigacion
        where aa.nombre_area = a.nombre_area
        group by aa.nombre_area);`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta6(req:Request, res:Response): Promise<void>{
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

    public async getConsulta7(req:Request, res:Response): Promise<void>{
        const q = `select i.nombre_invento, a.nombre_area, p.nombre_profesional from invento_profesional as ip
        inner join profesional as p on p.id_profesional = ip.id_profesional
        inner join profesional_area as pa on pa.id_profesional = p.id_profesional
        inner join area_investigacion as a on a.id_area_investigacion = pa.id_area_investigacion
        inner join invento as i on i.id_invento = ip.id_invento
        where a.nombre_area = 'Óptica';`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta8(req:Request, res:Response): Promise<void>{
        const q = `select substr(p.nombre_pais,1,1) as inicial, sum(p.area) as suma_area
        from pais as p
        group by substr(p.nombre_pais,1,1)
        order by substr(p.nombre_pais,1,1);`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta9(req:Request, res:Response): Promise<void>{
        const q = `select i.nombre_inventor, inv.nombre_invento
        from inventor as i
        inner join invento_inventor ii on ii.id_inventor = i.id_inventor
        inner join invento as inv on inv.id_invento = ii.id_invento
        where substr(i.nombre_inventor,1,2) = "Be"
        order by substr(i.nombre_inventor,1,2);`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta10(req:Request, res:Response): Promise<void>{
        const q = `select i.nombre_invento, i.anio, inv.nombre_inventor from invento as i
        inner join invento_inventor as ii on ii.id_invento = i.id_invento
        inner join inventor as inv on inv.id_inventor = ii.id_inventor
        where (anio between 1800 and 1900) and (substr(inv.nombre_inventor,1,1) = "B")
        and (substr(inv.nombre_inventor,LENGTH(inv.nombre_inventor),LENGTH(inv.nombre_inventor)) = 'r' or 'n');`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta11(req:Request, res:Response): Promise<void>{
        const q = `select p.nombre_pais, p.area,count(*) as fronteras
        from frontera as f
        inner join pais as p on p.id_pais = f.id_pais_origen
        inner join pais as p1 on p1.id_pais = f.id_pais_frontera
        group by p.nombre_pais,p.area
        having count(*) > 7
        order by p.area desc;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta12(req:Request, res:Response): Promise<void>{
        const q = `select i.nombre_invento
        from invento as i
        where length(i.nombre_invento) = 4 and 
        lower(substr(i.nombre_invento,1,1)) = 'l';`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta13(req:Request, res:Response): Promise<void>{
        const q = `select p.nombre_profesional, p.salario, p.comision, (p.salario + p.comision) as total_salario
        from profesional as p
        where p.comision > (select (pp.salario * 0.25) 
        from profesional as pp
        where pp.nombre_profesional = p.nombre_profesional);`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta14(req:Request, res:Response): Promise<void>{
        const q = `select e.nombre_encuesta, count(*) as numero_respuestas from respuesta_pais as rp
        inner join pais as pa on pa.id_pais = rp.id_pais
        inner join respuesta as r on r.id_respuesta = rp.id_respuesta
        inner join pregunta as p on p.id_pregunta = r.id_pregunta
        inner join encuesta as e on e.id_encuesta = p.id_pregunta
        group by e.nombre_encuesta;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta15(req:Request, res:Response): Promise<void>{
        const q = `select pp.nombre_pais, pp.capital, pp.area, pp.poblacion
        from pais as pp
        where pp.poblacion > (select sum(p.poblacion) from pais as p
        inner join region as r on r.id_region = p.id_region
        where r.nombre_region = 'Centro America')
        order by pp.poblacion desc;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta16(req:Request, res:Response): Promise<void>{
        const q = `select pp.nombre_profesional, a.nombre_area from area_investigacion as a 
        inner join profesional as pp on pp.id_profesional = a.id_profesional
        where a.nombre_area <> (select ai.nombre_area from profesional as p
        inner join profesional_area as pa on pa.id_profesional = p.id_profesional
        inner join area_investigacion as ai on ai.id_area_investigacion = pa.id_area_investigacion
        inner join invento_profesional as ip on ip.id_profesional = p.id_profesional
        inner join invento as i on i.id_invento = ip.id_invento
        inner join invento_inventor as ii on ii.id_invento = i.id_invento
        inner join inventor as inv on inv.id_inventor  = ii.id_inventor  
        where inv.nombre_inventor = 'Pasteur');`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta17(req:Request, res:Response): Promise<void>{
        const q = `select ii.nombre_invento, ii.anio from invento as ii
        where ii.anio = (select i.anio from invento as i
        inner join invento_inventor as ii on ii.id_invento = i.id_invento
        inner join inventor as inv on inv.id_inventor = ii.id_inventor
        where inv.nombre_inventor = 'BENZ');`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta18(req:Request, res:Response): Promise<void>{
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

    public async getConsulta19(req:Request, res:Response): Promise<void>{
        const q = `select p.nombre_pais as origen, p1.nombre_pais as frontera, 
        if(f.norte !="", "Norte", if(f.sur !="", "Sur", if(f.este !="", "Este", if(f.oeste !="", "Oeste", "")))) as cardinalidad
        from frontera as f
        inner join pais as p on p.id_pais = f.id_pais_origen
        inner join pais as p1 on p1.id_pais = f.id_pais_frontera;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }

    public async getConsulta20(req:Request, res:Response): Promise<void>{
        const q = `select p.nombre_profesional, p.salario, p.comision 
        from profesional as p
        where p.salario > (select pp.comision * 2 from profesional as pp
        where pp.nombre_profesional = p.nombre_profesional)
        order by p.comision desc;`;
        await connection.query(q, (err, result, fields)=>{
            if (err) throw err;
            res.json(result);
        });
    }
}

const consultasController = new ConsultasController();
export default consultasController;