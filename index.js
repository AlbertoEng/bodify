import express from 'express';
import path from 'path';
import {router} from './routes/paolayeduardo.js'
import {routerAdmin} from './routes/adminIvitados.js'
import {routerAuth} from './routes/auth.js'
import { conectar } from './DB/conexion.js';

const app = express();

// definiendo carpeta publica
app.use( express.static(path.resolve('public')));

// definiendo datos de form desde frontend
app.use(express.urlencoded({extended: false}));

// conectando a la base de datos
await conectar();



app.use('/', router);

app.get('/', (req, res)=>{
    res.send('<h1>Aplicacion de Invitaciones de Bodas</h1>')
})



app.use('/admin', routerAdmin);
app.use('/auth', routerAuth)


app.use((req,res,next)=>{
    res.status(404);
    res.end('404');
    return;
})


app.listen(3000, ()=>{
    console.log('server corriendo')
})