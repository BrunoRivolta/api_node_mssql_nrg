'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Material', {
      item_id: {
        type: Sequelize.INTEGER,
		allowNull: false,
        primaryKey: true
      },
      material: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
		allowNull: false
      },
      unidade: {
        type: Sequelize.STRING,
		allowNull: false
      },
      empresa: {
        type: Sequelize.STRING,
		allowNull: false
      },
      centro: {
        type: Sequelize.STRING,
		allowNull: false
      },
      deposito: {
        type: Sequelize.STRING,
		allowNull: false
      },
      lote: {
        type: Sequelize.STRING,
		allowNull: false
      },
      saldo: {
        type: Sequelize.STRING,
		allowNull: false
      },
      saldo_projeto: {
        type: Sequelize.STRING,
		allowNull: false
      },
      projeto: {
        type: Sequelize.STRING,
		allowNull: false
      },
      precomm: {
        type: Sequelize.STRING,
		allowNull: false
      },
      precolastpo: {
        type: Sequelize.STRING,
		allowNull: false
      },
      setor_atividade: {
        type: Sequelize.STRING,
		allowNull: false
      },
      decriacao_sa: {
        type: Sequelize.STRING,
		allowNull: false
      },
      grupo_merc: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao_gm: {
        type: Sequelize.STRING,
		allowNull: false
      },
      tuc: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao_tuc: {
        type: Sequelize.STRING,
		allowNull: false
      },
      a1: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao_a1: {
        type: Sequelize.STRING,
		allowNull: false
      },
      a2: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao_a2: {
        type: Sequelize.STRING,
		allowNull: false
      },
      a3: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao_a3: {
        type: Sequelize.STRING,
		allowNull: false
      },
      a4: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao_a4: {
        type: Sequelize.STRING,
		allowNull: false
      },
      a5: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao_a5: {
        type: Sequelize.STRING,
		allowNull: false
      },
      a6: {
        type: Sequelize.STRING,
		allowNull: false
      },
      descricao_a6: {
        type: Sequelize.STRING,
		allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Material');
  }
};
