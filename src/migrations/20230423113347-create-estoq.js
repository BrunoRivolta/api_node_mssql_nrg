"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Estoq", {
      "cod-estabel": {
        type: Sequelize.STRING,
		allowNull: false,
      },
      "it-codigo": {
        type: Sequelize.STRING,
		allowNull: false,
		primaryKey: true
      },
      "cod-depos": {
        type: Sequelize.STRING,
		allowNull: false,
      },
      "cod-localiz": {
        type: Sequelize.STRING,
		allowNull: false,
      },
      "cod-refer": {
        type: Sequelize.STRING,
		allowNull: false,
      },
      lote: {
        type: Sequelize.STRING,
		allowNull: false,
      },
      "quantidade-atu": {
        type: Sequelize.FLOAT,
		allowNull: false,
      },
      "ind-processado": {
        type: Sequelize.INTEGER,
		allowNull: false,
      },
      "ind-alter": {
        type: Sequelize.INTEGER,
		allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Estoq");
  },
};
