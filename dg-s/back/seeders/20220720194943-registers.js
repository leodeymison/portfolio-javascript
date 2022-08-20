'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('register', [{
      nome: 'Pedro',
      nascimento: '1956-03-23'
    }, {
      nome: 'João',
      nascimento: '2003-01-11'
    }, {
      nome: 'Ana Luiza',
      nascimento: '2022-03-13'
    }, {
      nome: 'Flávia',
      nascimento: '2000-11-12'
    }, {
      nome: 'Heitor',
      nascimento: '2010-10-31'
    }, {
      nome: 'Rute',
      nascimento: '2001-09-11'
    }, {
      nome: 'Victor',
      nascimento: '1950-08-01'
    }, {
      nome: 'André',
      nascimento: '2007-12-31'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
