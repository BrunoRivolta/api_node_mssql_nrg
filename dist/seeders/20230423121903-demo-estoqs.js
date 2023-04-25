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
            yield queryInterface.bulkInsert("Estoq", [
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
            ], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete("Estoq", null, {});
        });
    },
};
