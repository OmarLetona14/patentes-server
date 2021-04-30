import {Router} from 'express';
import p from '../controllers/inventoController';

class InventoRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', p.getAll);
        this.router.get('/:id', p.getOne);
        this.router.put('/:id', p.update)
    }
}

const inventoRoutes = new InventoRoutes();
export default inventoRoutes.router;