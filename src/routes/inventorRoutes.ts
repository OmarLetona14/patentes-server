import {Router} from 'express';
import p from '../controllers/inventorController';

class InventorRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', p.getAll);
        this.router.post('/', p.getByInventor);
    }
}

const inventorRoutes = new InventorRoutes();
export default inventorRoutes.router;