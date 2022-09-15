import express from 'express';
import path from 'path';
const routerAdmin  = express.Router();
 




routerAdmin.get('/:id', (req, res)=>{
    
    // verificar que sea un usuario Registrado, sino 404

    // mostrar la pagina de admin
    res.sendFile(path.resolve('public/admin/panelAdmin.html'));



})



export {
    routerAdmin
}