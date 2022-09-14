import express from 'express';
import path from 'path';
const routerAdmin  = express.Router();
 

routerAdmin.get('/', (req, res)=>{
    
    // verificar que sea un usuario Registrado, sino 404

    // mostrar la pagina de admin
    res.sendFile(path.resolve('pagesAdmin/panelAdmin.html'));
    


})


export {
    routerAdmin
}