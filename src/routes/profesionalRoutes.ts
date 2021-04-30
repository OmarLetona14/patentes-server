import {Router} from 'express';
import p from '../controllers/profesionalController';

class ProfesionalRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', p.getAll);
    }
}

const profesionalRoutes = new ProfesionalRoutes();
export default profesionalRoutes.router;