import express, {Application} from 'express';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import dotenv from 'dotenv'

class Server{
    
    public app:Application;

    constructor(){
        dotenv.config();
        this.app = express();
        this.configure();
        this.routes();
    }

    configure():void{
        this.app.set('port', process.env.SERVER_PORT);
    }

    routes():void{
        this.app.use(indexRoutes);
    }


    start():void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server is up');
        });
    }
}

const server = new Server();
server.start();