import {Router} from 'express';
import r from '../controllers/respuestaController';

class RespuestaRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.post('/', r.getByQuestion);
        this.router.post('/getbycontent', r.getByContenido);
    }
}

const regionRoutes = new RespuestaRoutes();
export default regionRoutes.router;