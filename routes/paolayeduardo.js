import express from 'express';
import path from 'path';
const router  = express.Router();
 

router.get('/paolayeduardo', (req, res)=>{

    // revisar que el id sea el de una familia registrado en DB
    // sino retorna un 404 de recurso no encontrado

    //si el id existe, y esta confirmado,enviar editar.html solo si faltan mas de 21 dias podra editar
    //  si no esta confirmado enviar invitacion.html normal.

    // si el id existe,nos traemos los invitados dela familia desde DB en script
    // frontend con axios.
    
    //mostramos la invitacion.html con los invitados  dentro del formulario
    // para ser confirmados.

    res.sendFile(path.resolve('public/paolayeduardo/html/invitacion.html'));
})

router.post('paolayeduardo/:id', (req, res)=>{

    // verificar que el id sea de una familia de DB

    // si existe verificar la data que viene en el Body del request.

    // recorrer el objeto y setear campo confirmado = true en tabla de invitado.



    console.log(req.body)
    res.end('ok')
})


export {
    router
}