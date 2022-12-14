import QRCode from 'qrcode'
import { Invitado } from "../models/Invitado.js";
import fs from 'fs';
import path from "path";
import { sequelize, conectarDB } from "./conexion.js";


let baseLink = 'https://www.goweddings.net/paolayeduardo/'

let dataInvitados = ''

const invitados = await Invitado.findAll({ where: {} });

invitados.sort(function (a, b) {
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
    // a must be equal to b
    return 0;
});

invitados.forEach( async (invitado) => {
    dataInvitados += `${invitado.grupo};${invitado.nombre};${baseLink}${invitado.tokenInvitado},\n`;
    // With async/await
    await QRCode.toFile(`./DB/QRcodes/${invitado.nombre.trimStart().trimEnd()}_${invitado.id}.png`, invitado.nombre );
})



fs.writeFileSync('DB/Enlaces.txt', dataInvitados, 'utf-8');