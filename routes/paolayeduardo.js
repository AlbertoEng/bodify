import express from 'express';
import path from 'path';
const router = express.Router();
import { Invitado } from '../models/Invitado.js'

// router.get('/paolayeduardo', (req, res) => {

//     console.log('ok');
//     // revisar que el id sea el de una familia registrado en DB
//     // sino retorna un 404 de recurso no encontrado

//     //si el id existe, y esta confirmado,enviar editar.html solo si faltan mas de 21 dias podra editar
//     //  si no esta confirmado enviar invitacion.html normal.

//     // si el id existe,nos traemos los invitados dela familia desde DB en script
//     // frontend con axios.

//     //mostramos la invitacion.html con los invitados  dentro del formulario
//     // para ser confirmados.

//     res.sendFile(path.resolve('public/paolayeduardo/html/invitacion.html'));

// })

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
    const arreglo = Object.keys(req.body).map((clave) => {
        return Number(clave);
    });
    // const listaGrupo = await Invitado.findAll({ where: {grupo: invitado.grupo}})


    // revisar el grupo con ese id
    const result = await Invitado.findAll({ where: { grupo: req.params.id } })
    if (result) {
        result.forEach((invitado) => {
            if (arreglo.includes(invitado.id)) {
                invitado.confirmado = true;
                invitado.save();
            } else {
                invitado.confirmado = false;
                invitado.save();
            }
        })

    }


    res.status(200).end('<h1 style="text-align: center; margin-top: 50px;"> Hemos confirmado sus datos Exitosamente, Gracias.</h1>')


    // establecer un nuevo objeto con los confirmados



})



export {
    router
}