"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkInsert(
      "Material",
      [
        {
			item_id: 1,
			material: "Teste1",
			descricao: "Teste1",
			unidade: "Teste1",
			empresa: "Teste1",
			centro: "Teste1",
			deposito: "Teste1",
			lote: "Teste1",
			saldo: "Teste1",
			saldo_projeto: "Teste1",
			projeto: "Teste1",
			precomm: "Teste1",
			precolastpo: "Teste1",
			setor_atividade: "Teste1",
			decriacao_sa: "Teste1",
			grupo_merc: "Teste1",
			descricao_gm: "Teste1",
			tuc: "Teste1",
			descricao_tuc: "Teste1",
			a1: "Teste1",
			descricao_a1: "Teste1",
			a2: "Teste1",
			descricao_a2: "Teste1",
			a3: "Teste1",
			descricao_a3: "Teste1",
			a4: "Teste1",
			descricao_a4: "Teste1",
			a5: "Teste1",
			descricao_a5: "Teste1",
			a6: "Teste1",
			descricao_a6: "Teste1"
        },
        {
			item_id: 2,
			material: "Teste2",
			descricao: "Teste2",
			unidade: "Teste2",
			empresa: "Teste2",
			centro: "Teste2",
			deposito: "Teste2",
			lote: "Teste2",
			saldo: "Teste2",
			saldo_projeto: "Teste2",
			projeto: "Teste2",
			precomm: "Teste2",
			precolastpo: "Teste2",
			setor_atividade: "Teste2",
			decriacao_sa: "Teste2",
			grupo_merc: "Teste2",
			descricao_gm: "Teste2",
			tuc: "Teste2",
			descricao_tuc: "Teste2",
			a1: "Teste2",
			descricao_a1: "Teste2",
			a2: "Teste2",
			descricao_a2: "Teste2",
			a3: "Teste2",
			descricao_a3: "Teste2",
			a4: "Teste2",
			descricao_a4: "Teste2",
			a5: "Teste2",
			descricao_a5: "Teste2",
			a6: "Teste2",
			descricao_a6: "Teste2"
        },
      ],
      {}
    );
  },

  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.bulkDelete("Material", null, {});
  },
};
