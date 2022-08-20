'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('films', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Title field is required'
          }
        }
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Description field is required'
          }
        }
      },
      director: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Director field is required'
          }
        }
      },
      producer: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Producer field is required'
          }
        }
      }
    }, {
      timestamps: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('films');
  }
};
