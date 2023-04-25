'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Texto', {
      material: {
        type: Sequelize.STRING,
		primaryKey: true,
		allowNull: false
      },
      descricao_longa: {
        type: Sequelize.STRING,
		allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Texto');
  }
};
