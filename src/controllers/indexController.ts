import {Request, Response} from 'express';

class IndexController{

    public index(req:Request,res:Response){
        res.json({'message':'Changed'});
    }

}

const indexController = new IndexController();
export default indexController;