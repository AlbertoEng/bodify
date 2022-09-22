import express from 'express';
import path from 'path';
const routerAdmin  = express.Router();
import { Invitado } from '../models/Invitado.js'
import { Familia } from '../models/Familia.js'
import { Fiesta } from '../models/Fiesta.js'
import QRCode from 'qrcode'


routerAdmin.get('/', async (req, res)=>{
    
    // verificar que sea un usuario Registrado, sino 404
    
    // mostrar la pagina de admin
    res.sendFile(path.resolve('public/admin/panelAdmin.html'));

})

routerAdmin.get('/invitados', async (req, res)=>{

    // const nuevaFamilia = await Familia.create({
    //     nombre_familia: 'Familia2',
    //     fiesta_id: 1
    // })

    // generando un nuevo invitado
    // const nuevoInvitado = await Invitado.create({
    //     nombre: 'Lorena Arroyo',
    //     mesa: 2,
    //     familia_id: 7
    // })



    // generacion de QR
    // QRCode.toFile(path.resolve(`QRcodes/${nuevoInvitado.id}${nuevoInvitado.nombre}.png`), `http://localhost:3000/admin/invitado/${nuevoInvitado.id}`, {
    //     margin: 1,

    //   }, function (err) {
    //     if (err) throw err
    //     console.log('done')
    // })


    // console.log(nuevoInvitado)
    
})

routerAdmin.post('/agregarNuevo', async (req, res)=>{
    // const nuevoInvitado = req.body;
    // const result = await Invitado.create(nuevoInvitado);
    // res.json(result);
})

routerAdmin.get('/invitado/:id', async (req ,res)=>{
    res.end('hola');
})




export {
    routerAdmin
}