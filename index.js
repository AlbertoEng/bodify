import express from 'express';
import https from 'https'
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import {router} from './routes/paolayeduardo.js'
import {routerAdmin} from './routes/adminIvitados.js'
import {routerAuth} from './routes/auth.js'
import { conectarDB } from './DB/conexion.js';


const app = express();

app.use(cors());

app.use(express.json());

// definiendo carpeta publica
app.use( express.static(path.resolve('public')));

// definiendo datos de form desde frontend
app.use(express.urlencoded({extended: false}));

// conectando a la base de datos
conectarDB();



app.use('/', router);

app.get('/', (req, res)=>{
    res.send('<h1>Aplicacion de Invitaciones de Bodas</h1>')
})

app.use('/admin', routerAdmin);
app.use('/auth', routerAuth)

https.createServer({
    cert: fs.readFileSync('fullchain.pem', 'utf-8'),
    key: fs.readFileSync('privkey.pem', 'utf-8')
}, app).listen(3001, ()=>{
    console.log('server corriendo')
})


/* 
Successfully received certificate.
Certificate is saved at:    /etc/letsencrypt/live/www.goweddings.net/fullchain.pem
Key is saved at:            /etc/letsencrypt/live/www.goweddings.net/privkey.pem 

*/