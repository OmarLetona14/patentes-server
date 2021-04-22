import {Request, Response} from 'express';

class Consulta1Controller{

    index(req:Request,res:Response){
        res.send('Index');
    }

}

export const consulta1Controller = new Consulta1Controller();