"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkInsert("Material", [
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
            ], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete("Material", null, {});
        });
    },
};
