import express from 'express';
import path from 'path';
const routerAdmin  = express.Router();
import { Invitado } from '../models/Invitado.js'
 

routerAdmin.get('/', async (req, res)=>{
    
    // verificar que sea un usuario Registrado, sino 404
    console.log('pase por aqui')
    // mostrar la pagina de admin
    res.sendFile(path.resolve('public/admin/panelAdmin.html'));

})

routerAdmin.get('/invitados', async (req, res)=>{
    const listaInvitados = await Invitado.findAll({ where: {}});
    if(listaInvitados.length === 0){
        console.log('ora')
        return res.status(200).json([]);
    }
    res.status(200).json(listaInvitados);
})

routerAdmin.post('/agregarNuevo', async (req, res)=>{

    const nuevoInvitado = req.body;
    const result = await Invitado.create(nuevoInvitado);
    res.json(result);
})




export {
    routerAdmin
}