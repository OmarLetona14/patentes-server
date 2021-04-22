import {Router} from 'express';
import c from '../controllers/consulta2Controller';

class Consulta2Routes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', c.getConsulta);
    }
}

const consulta2Routes = new Consulta2Routes();
export default consulta2Routes.router;