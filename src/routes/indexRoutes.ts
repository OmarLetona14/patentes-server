import {Router} from 'express';
import i from '../controllers/indexController';

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', i.index);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
