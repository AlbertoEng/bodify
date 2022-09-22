import { DataTypes, UUID} from 'sequelize';
import { sequelize } from '../DB/conexion.js'
import { Fiesta } from './Fiesta.js';

const Familia = sequelize.define("familias", {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
  },
  nombre_familia: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true
  }
},{
  timestamps: false
})

Fiesta.hasMany(Familia, {
  sourceKey: 'id',
  foreignKey: 'fiesta_id'
})

export {
  Familia
}