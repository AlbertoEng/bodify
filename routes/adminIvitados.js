import express from 'express';
import path from 'path';
const routerAdmin = express.Router();
import { Invitado } from '../models/Invitado.js'




routerAdmin.get('/', async (req, res) => {

    // verificar que sea un usuario Registrado, sino 404

    // mostrar la pagina de admin
    // res.sendFile(path.resolve('public/admin/panelAdmin.html'));

})

routerAdmin.get('/lista-invitados', async (req, res) => {

    // const nuevaFamilia = await Familia.create({
    //     nombre_familia: 'Familia2',
    //     fiesta_id: 1
    // })
    const listaInvitados = await Invitado.findAll();
    const respuesta = listaInvitados ?? [];
    return res.status(200).json(respuesta)
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
routerAdmin.get('/lista-confirmados', async (req, res) => {
    console.log('epa')
    const listaInvitados = await Invitado.findAll({ where: { confirmado: true }});
    const respuesta = listaInvitados ?? [];
    
    return res.status(200).json(respuesta)

})

routerAdmin.put('/lista-invitados/grupo/:id', async (req, res) => {
    const result = await Invitado.update({ grupo: req.body.grupo }, {
        where: {
            id: req.body.id
        }
    });

    if (result?.grupo == '') {
        result.grupo = null;
    }

    res.end();
})

routerAdmin.put('/lista-invitados/mesa/:id', async (req, res) => {
    const result = await Invitado.update({ mesa: req.body.mesa }, {
        where: {
            id: req.body.id
        }
    });


    if (result?.mesa == '') {
        result.mesa = null;
    }

    res.end();
})

routerAdmin.post('/lista-invitados/agregarNuevo', async (req, res) => {
    console.log(req.body)
    const result = await Invitado.create(req.body)
    return res.status(200).json(result);

})

routerAdmin.delete('/lista-invitados/eliminar/:id', async (req, res) => {
    try {
        const result = await Invitado.destroy({ where: req.params })
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
})

routerAdmin.get('/lista-invitados/obtenerInvitadosByGrupo/:token', async (req, res) => {
    try {
        console.log(req.params.token)
        const invitado = await Invitado.findOne({ where: { tokenInvitado: req.params.token } })

        const lista = await Invitado.findAll({ where: { grupo: invitado.grupo } });
        res.status(200).json(lista);
    } catch (error) {
        console.log(error);
    }
})




export {
    routerAdmin
}