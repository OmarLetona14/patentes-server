import express, {Application} from 'express';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';

import consulta2Routes from './routes/consulta2Routes';  
import paisRoutes from './routes/paisRoutes';   
import regionRoutes from './routes/regionRoutes';
import preguntaRoutes from './routes/preguntaRoutes';
import consulta1Routes from './routes/consulta1Routes';  
import respuestaRoutes from './routes/respuestaRoutes';
import encuestaRoutes from './routes/encuestaRoutes';

class Server{
    
    public app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
         this.app.use(morgan('dev'))
         this.app.use(cors())
         this.app.use(express.json())
         this.app.use(express.urlencoded({extended: true}))
    }

    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/consulta1', consulta1Routes);
        this.app.use('/consulta2', consulta2Routes);
        this.app.use('/paises', paisRoutes);
        this.app.use('/regiones', regionRoutes);
        this.app.use('/preguntas', preguntaRoutes);
        this.app.use('/respuestas', respuestaRoutes);
        this.app.use('/encuestas', encuestaRoutes);
    }

    start():void{
        this.app.listen(process.env.SERVER_PORT , () =>{
            console.log('Server is up');
        });
    }
}

const server = new Server();
server.start();