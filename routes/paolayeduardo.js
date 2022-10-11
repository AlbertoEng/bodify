import express from 'express';
import path from 'path';
const router = express.Router();
import { Invitado } from '../models/Invitado.js'

router.get('/paolayeduardo', (req, res) => {

    console.log('ok');
    res.sendFile(path.resolve('public/paolayeduardo/html/invitacion_copia.html'));

})


router.get('/paolayeduardo/:token', async (req, res) => {

    // revisar que el token exista en DB
    try {
        const invitado = await Invitado.findOne({ where: { tokenInvitado: req.params.token } });
        res.sendFile(path.resolve('public/paolayeduardo/html/invitacion.html'));

    } catch (error) {
        console.log('Recurso no encontrado');
    }

})

router.post('/paolayeduardo/:token', async (req, res) => {

    // convertir keys a array
    try {
        const arreglo = Object.keys(req.body).map((clave) => {
            return Number(clave);
        });


        const invitado = await Invitado.findOne({ where: { tokenInvitado: req.params.token } });
        const listaGrupo = await Invitado.findAll({ where: { grupo: invitado.grupo } })



        if (listaGrupo) {
            listaGrupo.forEach((invitado) => {
                if (arreglo.includes(invitado.id)) {
                    invitado.confirmado = true;
                    invitado.save();
                } else {
                    invitado.confirmado = false;
                    invitado.save();
                }
            })

        }
    } catch (error) {
        console.log(error);
        return res.status(404).end();
    }


    return res.status(200).end('<h1 style="text-align: center; margin-top: 50px;"> Hemos confirmado sus datos Exitosamente, Gracias.</h1>')


    // establecer un nuevo objeto con los confirmados



})



export {
    router
}