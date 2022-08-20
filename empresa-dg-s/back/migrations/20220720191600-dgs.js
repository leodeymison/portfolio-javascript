'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('register', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Compo nome obrigatório'
          }
        }
      },
      nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Campo nascimento obrigatório'
          }
        }
      }
    }, {
      timestamps: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('register')
  }
}
