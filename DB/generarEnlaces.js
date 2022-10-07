import { Invitado } from "../models/Invitado.js";
import fs from 'fs';
import path from "path";
import { sequelize, conectarDB } from "./conexion.js";


let baseLink = 'http://www.goweddings.net/paolayeduardo/'

let dataInvitados = ''

const invitados = await Invitado.findAll({ where: {} });

invitados.forEach((invitado) => {
    dataInvitados += `${invitado.nombre};${baseLink}${invitado.tokenInvitado},\n`;
})



fs.writeFileSync('DB/Enlaces.txt', dataInvitados, 'utf-8');