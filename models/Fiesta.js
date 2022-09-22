import { DataTypes, UUID} from 'sequelize';
import { sequelize } from '../DB/conexion.js'

const Fiesta = sequelize.define("fiestas", {
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
  password: {
      type: DataTypes.STRING(80),
      allowNull: false
  },
  fecha: {
    type: DataTypes.STRING(80),
    allowNull: false
  }
},{
  timestamps: false
})



export {
  Fiesta
}