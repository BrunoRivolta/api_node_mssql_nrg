"use strict";

import sequelize from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkInsert(
      "Texto",
      [
        {
			material: "Teste1",
			descricao_longa: "Teste1"
        },
        {
			material: "Teste2",
			descricao_longa: "Teste2"
        },
      ],
      {}
    );
  },

  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkDelete("Texto", null, {});
  },
};
