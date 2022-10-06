import { Sequelize, UUID } from 'sequelize';

let resetTablas = false;

const sequelize = new Sequelize('bodas', 'postgres', 'teamoRomina1000', {
    host: 'bodify.cg7oal3ge1dk.us-east-1.rds.amazonaws.com',
    dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    logging: false,
    define: {
        timestamps: true
    }
});

const conectarDB = async () => {


    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ force: resetTablas }); // crea una tabla si no existe
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export {
    conectarDB, sequelize
}


// const usuario1 = await Usuario.create({
//     nombre: 'Manuel',
//     apellido: 'Torres',
// });

// const totalUsuarios = await Usuario.findAll({ where: {} });

// if(totalUsuarios){
//     totalUsuarios.forEach((item)=>{
//         console.log(item.tokenInvitado)
//     })
// }






