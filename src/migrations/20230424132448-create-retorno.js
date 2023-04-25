'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Retorno', {
      id_lote: {
        type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true
      },
      cod_ret: {
        type: Sequelize.STRING,
		allowNull: false
      },
      mensagem: {
        type: Sequelize.STRING,
		allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Retorno');
  }
};
