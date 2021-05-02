import {Router} from 'express';
import p from '../controllers/paisController';

class PaisRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', p.getAll);
        this.router.get('/:id', p.getOnePais);
        this.router.get('/fronteras/:id', p.getFronteras);
        this.router.post('/fronteras', p.insertFrontera);
        this.router.post('/', p.insert);
        this.router.delete('/:id', p.delete);
        this.router.put('/:id', p.update)
    }
}

const paisRoutes = new PaisRoutes();
export default paisRoutes.router;