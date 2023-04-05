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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTexto = exports.deleteTexto = exports.getTexto = exports.createTexto = exports.getTextos = void 0;
// DB
const database_1 = require("../database");
function getTextos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = yield (0, database_1.getdata)();
            const textos = yield database.request().query('SELECT * FROM O_TEXTO');
            return res.status(200).json(textos.recordset);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getTextos = getTextos;
function createTexto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { material, descricao_longa, } = req.body;
            const database = yield (0, database_1.getdata)();
            const newTexto = yield database
                .request()
                .input("material", database_1.sql.VarChar, material)
                .input("descricao_longa", database_1.sql.VarChar, descricao_longa)
                .query('INSERT INTO O_TEXTO (material, descricao_longa) VALUES (@material, @descricao_longa)');
            return res.status(200).json({ message: 'New Texto Created' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.createTexto = createTexto;
function getTexto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.textoId;
            const database = yield (0, database_1.getdata)();
            const texto = yield database.request().query(`SELECT * FROM O_TEXTO WHERE id = ${id}`);
            return res.status(200).json(texto.recordset[0]);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getTexto = getTexto;
function deleteTexto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.textoId;
            const database = yield (0, database_1.getdata)();
            const texto = yield database.request().query(`DELETE FROM O_TEXTO WHERE id = ${id}`);
            return res.status(200).json({ message: `Texto id "${id}" deleted` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.deleteTexto = deleteTexto;
function updateTexto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.textoId;
            const { material, descricao_longa } = req.body;
            if ((material == null || descricao_longa == null)) {
                return res.status(400).json({ msg: "Please fill all fields" });
            }
            const database = yield (0, database_1.getdata)();
            const newTexto = yield database
                .request()
                .input("material", database_1.sql.VarChar, material)
                .input("descricao_longa", database_1.sql.VarChar, descricao_longa)
                .query(`UPDATE O_TEXTO SET material = @material, descricao_longa = @descricao_longa WHERE id = ${id}`);
            return res.status(200).json({ message: 'Texto Updated' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateTexto = updateTexto;
/* To Test at Postman
{
    "material": "string",
    "descricao": "string",
    "unidade": "string",
    "empresa": "string",
    "centro": "string",
    "deposito": "string",
    "lote": "string",
    "saldo": "string",
    "saldo_projeto": "string",
    "projeto": "string",
    "precomm": "string",
    "precolastpo": "string",
    "setor_atividade": "string",
    "decriacao_sa": "string",
    "grupo_merc": "string",
    "descricao_gm": "string",
    "tuc": "string",
    "descricao_tuc": "string",
    "a1": "string",
    "descricao_a1": "string",
    "a2": "string",
    "descricao_a2": "string",
    "a3": "string",
    "descricao_a3": "string",
    "a4": "string",
    "descricao_a4": "string",
    "a5": "string",
    "descricao_a5": "string",
    "a6": "string",
    "descricao_a6": "string"
} */ 
