import express from 'express';
import path from 'path';



const router  = express.Router();
 

router.get('/paolayeduardo', (req, res)=>{

    console.log('ok');
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

router.get('/paolayeduardo/:id',async (req, res)=>{



    
    res.end('ok')
})


export {
    router
}