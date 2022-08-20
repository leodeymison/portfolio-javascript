import { Sequelize } from 'sequelize'

const sequelizeConnection = new Sequelize(
  process.env.DB_NAME || 'wap',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '#Html_e_Css_123',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql'
  }
)

export default sequelizeConnection
