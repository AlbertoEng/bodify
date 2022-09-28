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

router.get('/paolayeduardo/:id',async (req, res)=>{

    // verificar que el id sea de una familia de DB

    // si existe verificar la data que viene en el Body del request.

    // recorrer el objeto y setear campo confirmado = true en tabla de invitado.
    console.log('hola')
    // clavedeenvio
    // SSID = SK2675a223ef2d3619cd0b062366cef870
    // secret =  rxrMhzSLJMFXp64ShL6p3t6RHHLZINXF
    const accountSid = 'AC4a9ceb19870051793be2a68cc492a09a';
    const authToken = '32745a58bc4be416d9793b71e785f5f1';
    const twilioClient = client(accountSid, authToken);

    await twilioClient.messages
        .create({
            from: 'whatsapp:+14155238886',
            body: 'Que ondas pinche lalosky, haciendo pruebas con libreria de twilio',
            to: 'whatsapp:+5213141003038'
        })
        .then(message => console.log(message.sid));
    
    res.end('ok')
})


export {
    router
}