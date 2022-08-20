import Config from '@/infra/db/config'

import { DataTypes, Model, InferCreationAttributes, InferAttributes } from 'sequelize'

export class ResisterTable extends Model<InferAttributes<ResisterTable, {}>, InferCreationAttributes<ResisterTable>> {
  declare id: number
  declare nome: string
  declare nascimento: string
}

ResisterTable.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Compo nome obrigatório'
        }
      }
    },
    nascimento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Campo nascimento obrigatório'
        }
      }
    }
  },
  {
    tableName: 'register',
    sequelize: Config,
    timestamps: false
  }
)
