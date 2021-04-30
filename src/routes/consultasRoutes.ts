import {Router} from 'express';
import c from '../controllers/consultasController';

class ConsultasRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/consulta1', c.getConsulta1);
        this.router.get('/consulta2', c.getConsulta2);
        this.router.get('/consulta3', c.getConsulta3);
        this.router.get('/consulta4', c.getConsulta4);
        this.router.get('/consulta5', c.getConsulta5);
        this.router.get('/consulta6', c.getConsulta6);
        this.router.get('/consulta7', c.getConsulta7);
        this.router.get('/consulta8', c.getConsulta8);
        this.router.get('/consulta9', c.getConsulta9);
        this.router.get('/consulta10', c.getConsulta10);
        this.router.get('/consulta11', c.getConsulta11);
        this.router.get('/consulta12', c.getConsulta12);
        this.router.get('/consulta13', c.getConsulta13);
        this.router.get('/consulta14', c.getConsulta14);
        this.router.get('/consulta15', c.getConsulta15);
        this.router.get('/consulta16', c.getConsulta16);
        this.router.get('/consulta17', c.getConsulta17);
        this.router.get('/consulta18', c.getConsulta18);
        this.router.get('/consulta19', c.getConsulta19);
        this.router.get('/consulta20', c.getConsulta20);
    }
}

const consultasRoutes = new ConsultasRoutes();
export default consultasRoutes.router;