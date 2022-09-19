import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import contadorRoutes from './routes/contadorRoutes';
import usuarioRoutes from './routes/usuarioRoutes';
import authRoutes from './routes/authRoutes';


class Server {

    public app: Application; 

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());//Entender el código en json
        this.app.use(express.urlencoded({ extended: false}));//Utilizar un formulario html
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/contador',contadorRoutes);
        this.app.use('/api/usuario',usuarioRoutes);
        this.app.use('/api/auth',authRoutes);
        this.app.use("/api/users", usuarioRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        })
    }
}

const server = new Server();

server.start();