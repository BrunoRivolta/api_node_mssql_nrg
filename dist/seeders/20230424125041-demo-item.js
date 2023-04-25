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
            yield queryInterface.bulkInsert("Item", [
                {
                    estab: "teste1",
                    "it-codigo": 1,
                    "desc-item": "Teste1",
                    "tp-contr-estoque": 1.1,
                    "fm-codigo": "Teste1",
                    descricao: "Teste1",
                    "desc-ge": "Teste1",
                    "ge-codigo": 2,
                    narrativa: "Teste1",
                    situacao: 3,
                    "preco-base": 3.1,
                    "preco-ul-ent": 4,
                    "val-unit-mat": 4.1,
                    "preco-medio": 4.1,
                    "ind-processado": 5,
                    "ind-alter": 6,
                },
                {
                    estab: "teste2",
                    "it-codigo": 2,
                    "desc-item": "Teste2",
                    "tp-contr-estoque": 2.1,
                    "fm-codigo": "Teste2",
                    descricao: "Teste2",
                    "desc-ge": "Teste2",
                    "ge-codigo": 2,
                    narrativa: "Teste2",
                    situacao: 3,
                    "preco-base": 3.2,
                    "preco-ul-ent": 4,
                    "val-unit-mat": 4.2,
                    "preco-medio": 4.2,
                    "ind-processado": 5,
                    "ind-alter": 6,
                },
            ], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete("Item", null, {});
        });
    },
};
