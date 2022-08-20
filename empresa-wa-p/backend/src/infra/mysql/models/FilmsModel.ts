import Config from '@/infra/mysql/config'

import { DataTypes, Model, InferCreationAttributes, InferAttributes } from 'sequelize'

export class ResisterTable extends Model<InferAttributes<ResisterTable, {}>, InferCreationAttributes<ResisterTable>> {
  declare _id: number
  declare title: string
  declare image: string
  declare description: string
  declare director: string
  declare producer: string
}

ResisterTable.init(
  {
    _id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title field is required'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Image field is required'
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description field is required'
        }
      }
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Director field is required'
        }
      }
    },
    producer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Producer field is required'
        }
      }
    }
  },
  {
    tableName: 'films',
    sequelize: Config,
    timestamps: false
  }
)
