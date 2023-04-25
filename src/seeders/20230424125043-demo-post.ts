"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkInsert(
      "Post",
      [
        {
			_id: "Teste1",
			title: "Teste1",
			description: "Teste1"
        },
        {
			_id: "Teste2",
			title: "Teste2",
			description: "Teste2"
        },
      ],
      {}
    );
  },

  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkDelete("Post", null, {});
  },
};
