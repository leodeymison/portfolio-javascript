require('dotenv').config()

module.exports = {
  local: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PWD || 'root',
    database: process.env.DB_NAME || 'database_dev',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: true
  },
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PWD || 'root',
    database: process.env.DB_NAME || 'database_dev',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: true
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PWD || 'root',
    database: process.env.DB_NAME || 'database_test',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: true
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PWD || 'root',
    database: process.env.DB_NAME || 'database',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false
  }
}
