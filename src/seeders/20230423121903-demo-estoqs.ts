"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkInsert(
      "Estoq",
      [
        {
          "cod-estabel": "teste1",
          "it-codigo": "teste1",
          "cod-depos": "teste1",
          "cod-localiz": "teste1",
          "cod-refer": "teste1",
          lote: "teste1",
          "quantidade-atu": 1.1,
          "ind-processado": 2,
          "ind-alter": 3,
        },
        {
          "cod-estabel": "teste2",
          "it-codigo": "teste2",
          "cod-depos": "teste2",
          "cod-localiz": "teste2",
          "cod-refer": "teste2",
          lote: "teste2",
          "quantidade-atu": 2.1,
          "ind-processado": 3,
          "ind-alter": 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkDelete("Estoq", null, {});
  },
};
