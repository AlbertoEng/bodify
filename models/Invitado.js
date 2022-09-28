import { DataTypes, UUID} from 'sequelize';
import { sequelize } from '../DB/conexion.js'


const Invitado = sequelize.define("invitados", {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
  },
  nombre: {
      type: DataTypes.STRING(80),
      allowNull: false
  },
  confirmado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
  },
  tokenInvitado: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
  },
  mesa: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  grupo: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
},{
  timestamps: false
})


export {
  Invitado
}