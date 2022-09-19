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
  apellido: {
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
  }
},{
  timestamps: false
})



export {
  Invitado
}