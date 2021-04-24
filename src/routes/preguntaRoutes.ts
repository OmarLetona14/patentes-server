import {Router} from 'express';
import p from '../controllers/preguntaController';

class PreguntaRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', p.getAll);
        this.router.get('/:id', p.getOne);
        this.router.post('/', p.insert);
        this.router.delete('/:id', p.delete);
        this.router.put('/:id', p.update)
    }
}

const preguntaRoutes = new PreguntaRoutes();
export default preguntaRoutes.router;