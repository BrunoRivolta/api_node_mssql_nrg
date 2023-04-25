"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkInsert(
      "Retorno",
      [
        {
			id_lote: "Teste1",
			cod_ret: "Teste1",
			mensagem: "Teste1"
        },
        {
			id_lote: "Teste2",
			cod_ret: "Teste2",
			mensagem: "Teste2"
        },
      ],
      {}
    );
  },

  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkDelete("Retorno", null, {});
  },
};
