import express from 'express';
import path from 'path';
const routerAuth  = express.Router();
 




routerAuth.get('/login', (req, res)=>{
    
    // verificar que sea un usuario Registrado, sino 404

    // mostrar la pagina de admin
    res.sendFile(path.resolve('public/auth/login.html'));



})



export {
    routerAuth
}