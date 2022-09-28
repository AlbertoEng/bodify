
import { Invitado } from "../models/Invitado.js";
import fs from 'fs';
import path from "path";
import { sequelize, conectarDB } from "./conexion.js";

await conectarDB();

const listaJson = fs.readFileSync(path.resolve("DB/invitados.txt" ), 'utf-8');
let lista = listaJson.toString().split(',').map(( item,i )=>{
    if(item.includes('[')){
        item = item.slice(1);
    }
    if(item.includes(']')){
        item = item.slice(0,-1);
    }

    

    let nuevoInvitadoItem = {
        nombre: item.trimStart()
    }
    return nuevoInvitadoItem;
})



// console.log(lista);

const invitadosBoda = await Invitado.bulkCreate(lista);

console.log('invitados Creados Correctamente.')










