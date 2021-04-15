import {Router} from 'express';

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.configure();
    }

    configure():void{
        this.router.get('/', (req, res)=>{
            res.send('Index');
        });
    }
}

const indexroutes = new IndexRoutes();
export default indexroutes.router;
