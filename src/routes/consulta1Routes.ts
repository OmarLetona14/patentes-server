import {Router} from 'express';
import c from '../controllers/consulta1Controller';

class Consulta1Routes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', c.getConsulta);
    }
}

const consulta1Routes = new Consulta1Routes();
export default consulta1Routes.router;