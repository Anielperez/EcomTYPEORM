import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usuariosRoutes from './routes/usuariosRoutes';
import comerciantesRoutes from './routes/comerciantesRoutes';
import tiendasRoutes from './routes/tiendasRoutes';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    console.log('Hola mundo');
    res.send("Hola mundo");
});

app.use("/usuarios", usuariosRoutes);
app.use("/comerciantes", comerciantesRoutes);
app.use("/tiendas", tiendasRoutes);



export default app;