import {Router} from 'express';
import r from '../controllers/regionController';

class RegionRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', r.getAll);
        this.router.post('/', r.getByName);
    }
}

const regionRoutes = new RegionRoutes();
export default regionRoutes.router;