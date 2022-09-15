import { Sequelize } from 'sequelize';


const conectar = async ()=> {
    const sequelize = new Sequelize('bodas', 'postgres', 'teamoRomina1000', {
        host: 'bodify.cg7oal3ge1dk.us-east-1.rds.amazonaws.com',
        dialect: 'postgres'
    });
    
    try {
        await sequelize.authenticate();
        console.log('Base de datos Conectada Exitosamente');
    } catch (error) {
        console.error('Error de Conexion a la Base de datos', error);
    }
}

export {
    conectar
}



