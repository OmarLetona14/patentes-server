import {Router} from 'express';
import e from '../controllers/encuestaController';

class EncuestaRoute{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', e.getAll);
        this.router.post('/', e.getByName);
    }
}

const encuestaRoute = new EncuestaRoute();
export default encuestaRoute.router;