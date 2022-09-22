import { DataTypes, UUID} from 'sequelize';
import { sequelize } from '../DB/conexion.js'
import { Familia } from './Familia.js';

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
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  timestamps: false
})

Familia.hasMany(Invitado, {
  sourceKey: 'id',
  foreignKey: 'familia_id',
  autoIncrement: true
})

export {
  Invitado
}