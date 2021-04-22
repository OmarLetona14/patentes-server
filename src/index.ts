import express, {Application} from 'express';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import consulta2Routes from './routes/consulta2Routes';  
import dotenv from 'dotenv';
import morgan from 'morgan';

class Server{
    
    public app:Application;

    constructor(){
        this.app = express()
        this.config()
        this.routes()
    }

    config():void{
         this.app.set('port', process.env.PORT || 3000)
         this.app.use(morgan('dev'))
         this.app.use(cors())
         this.app.use(express.json())
         this.app.use(express.urlencoded({extended: true}))
    }

    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/consulta2', consulta2Routes)
    }

    start():void{
        this.app.listen(3000, () =>{
            console.log('Server is up');
        });
    }
}

const server = new Server();
server.start();