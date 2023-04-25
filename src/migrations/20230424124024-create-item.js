'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Item', {
      estab: {
        type: Sequelize.STRING,
		allowNull: false,
        primaryKey: true
      },
      "it-codigo": {
        type: Sequelize.INTEGER,
		allowNull: false
      },
      "desc-item": {
        type: Sequelize.STRING,
		allowNull: false
      },
      "tp-contr-estoque": {
        type: Sequelize.BOOLEAN,
		allowNull: false
      },
      "fm-codigo": {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
		allowNull: false
      },
      "desc-ge": {
        type: Sequelize.STRING,
		allowNull: false
      },
      "ge-codigo": {
        type: Sequelize.INTEGER,
		allowNull: false
      },
      narrativa: {
        type: Sequelize.STRING,
		allowNull: false
      },
      situacao: {
        type: Sequelize.INTEGER,
		allowNull: false
      },
      "preco-base": {
        type: Sequelize.FLOAT,
		allowNull: false
      },
      "preco-ul-ent": {
        type: Sequelize.INTEGER,
		allowNull: false
      },
      "val-unit-mat": {
        type: Sequelize.FLOAT,
		allowNull: false
      },
      "preco-medio": {
        type: Sequelize.FLOAT,
		allowNull: false
      },
      "ind-processado": {
        type: Sequelize.INTEGER,
		allowNull: false
      },
      "ind-alter": {
        type: Sequelize.INTEGER,
		allowNull: false
      }
    });
  },
  async down(queryInterface, Seuelize) {
    await queryInterface.dropTable('Item');
  }
};
