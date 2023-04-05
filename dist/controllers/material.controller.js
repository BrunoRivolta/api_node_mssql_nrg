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
exports.updateMaterial = exports.deleteMaterial = exports.getMaterial = exports.createMaterial = exports.getMaterials = void 0;
// DB
const database_1 = require("../database");
function getMaterials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = yield (0, database_1.getdata)();
            const material = yield database.request().query('SELECT * FROM O_MATERIAL');
            return res.status(200).json(material.recordset);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getMaterials = getMaterials;
function createMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { material, descricao, unidade, empresa, centro, deposito, lote, saldo, saldo_projeto, projeto, precomm, precolastpo, setor_atividade, decriacao_sa, grupo_merc, descricao_gm, tuc, descricao_tuc, a1, descricao_a1, a2, descricao_a2, a3, descricao_a3, a4, descricao_a4, a5, descricao_a5, a6, descricao_a6 } = req.body;
            const database = yield (0, database_1.getdata)();
            const newMaterial = yield database
                .request()
                .input("material", database_1.sql.VarChar, material)
                .input("descricao", database_1.sql.VarChar, descricao)
                .input("unidade", database_1.sql.VarChar, unidade)
                .input("empresa", database_1.sql.VarChar, empresa)
                .input("centro", database_1.sql.VarChar, centro)
                .input("deposito", database_1.sql.VarChar, deposito)
                .input("lote", database_1.sql.VarChar, lote)
                .input("saldo", database_1.sql.VarChar, saldo)
                .input("saldo_projeto", database_1.sql.VarChar, saldo_projeto)
                .input("projeto", database_1.sql.VarChar, projeto)
                .input("precomm", database_1.sql.VarChar, precomm)
                .input("precolastpo", database_1.sql.VarChar, precolastpo)
                .input("setor_atividade", database_1.sql.VarChar, setor_atividade)
                .input("decriacao_sa", database_1.sql.VarChar, decriacao_sa)
                .input("grupo_merc", database_1.sql.VarChar, grupo_merc)
                .input("descricao_gm", database_1.sql.VarChar, descricao_gm)
                .input("tuc", database_1.sql.VarChar, tuc)
                .input("descricao_tuc", database_1.sql.VarChar, descricao_tuc)
                .input("a1", database_1.sql.VarChar, a1)
                .input("descricao_a1", database_1.sql.VarChar, descricao_a1)
                .input("a2", database_1.sql.VarChar, a2)
                .input("descricao_a2", database_1.sql.VarChar, descricao_a2)
                .input("a3", database_1.sql.VarChar, a3)
                .input("descricao_a3", database_1.sql.VarChar, descricao_a3)
                .input("a4", database_1.sql.VarChar, a4)
                .input("descricao_a4", database_1.sql.VarChar, descricao_a4)
                .input("a5", database_1.sql.VarChar, a5)
                .input("descricao_a5", database_1.sql.VarChar, descricao_a5)
                .input("a6", database_1.sql.VarChar, a6)
                .input("descricao_a6", database_1.sql.VarChar, descricao_a6)
                .query('INSERT INTO O_MATERIAL (material, descricao, unidade, empresa, centro, deposito, lote, saldo, saldo_projeto, projeto, precomm, precolastpo, setor_atividade, decriacao_sa, grupo_merc, descricao_gm, tuc, descricao_tuc, a1, descricao_a1, a2, descricao_a2, a3, descricao_a3, a4, descricao_a4, a5, descricao_a5, a6, descricao_a6) VALUES (@material, @descricao, @unidade, @empresa, @centro, @deposito, @lote, @saldo, @saldo_projeto, @projeto, @precomm, @precolastpo, @setor_atividade, @decriacao_sa, @grupo_merc, @descricao_gm, @tuc, @descricao_tuc, @a1, @descricao_a1, @a2, @descricao_a2, @a3, @descricao_a3, @a4, @descricao_a4, @a5, @descricao_a5, @a6, @descricao_a6)');
            return res.status(200).json({ message: 'New Material Created' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.createMaterial = createMaterial;
function getMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.materialId;
            const database = yield (0, database_1.getdata)();
            const material = yield database.request().query(`SELECT * FROM O_MATERIAL WHERE item_id = ${id}`);
            return res.status(200).json(material.recordset[0]);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getMaterial = getMaterial;
function deleteMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.materialId;
            const database = yield (0, database_1.getdata)();
            const material = yield database.request().query(`DELETE FROM O_MATERIAL WHERE item_id = ${id}`);
            return res.status(200).json({ message: `Material item_id "${id}" deleted` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.deleteMaterial = deleteMaterial;
function updateMaterial(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.materialId;
            const { material, descricao, unidade, empresa, centro, deposito, lote, saldo, saldo_projeto, projeto, precomm, precolastpo, setor_atividade, decriacao_sa, grupo_merc, descricao_gm, tuc, descricao_tuc, a1, descricao_a1, a2, descricao_a2, a3, descricao_a3, a4, descricao_a4, a5, descricao_a5, a6, descricao_a6 } = req.body;
            if ((material == null || descricao == null || unidade == null || empresa == null || centro == null || deposito == null || lote == null || saldo == null || saldo_projeto == null || projeto == null || precomm == null || precolastpo == null || setor_atividade == null || decriacao_sa == null || grupo_merc == null || descricao_gm == null || tuc == null || descricao_tuc == null || a1 == null || descricao_a1 == null || a2 == null || descricao_a2 == null || a3 == null || descricao_a3 == null || a4 == null || descricao_a4 == null || a5 == null || descricao_a5 == null || a6 == null || descricao_a6 == null)) {
                return res.status(400).json({ msg: "Please fill all fields" });
            }
            const database = yield (0, database_1.getdata)();
            const newTexto = yield database
                .request()
                .input("material", database_1.sql.VarChar, material)
                .input("descricao", database_1.sql.VarChar, descricao)
                .input("unidade", database_1.sql.VarChar, unidade)
                .input("empresa", database_1.sql.VarChar, empresa)
                .input("centro", database_1.sql.VarChar, centro)
                .input("deposito", database_1.sql.VarChar, deposito)
                .input("lote", database_1.sql.VarChar, lote)
                .input("saldo", database_1.sql.VarChar, saldo)
                .input("saldo_projeto", database_1.sql.VarChar, saldo_projeto)
                .input("projeto", database_1.sql.VarChar, projeto)
                .input("precomm", database_1.sql.VarChar, precomm)
                .input("precolastpo", database_1.sql.VarChar, precolastpo)
                .input("setor_atividade", database_1.sql.VarChar, setor_atividade)
                .input("decriacao_sa", database_1.sql.VarChar, decriacao_sa)
                .input("grupo_merc", database_1.sql.VarChar, grupo_merc)
                .input("descricao_gm", database_1.sql.VarChar, descricao_gm)
                .input("tuc", database_1.sql.VarChar, tuc)
                .input("descricao_tuc", database_1.sql.VarChar, descricao_tuc)
                .input("a1", database_1.sql.VarChar, a1)
                .input("descricao_a1", database_1.sql.VarChar, descricao_a1)
                .input("a2", database_1.sql.VarChar, a2)
                .input("descricao_a2", database_1.sql.VarChar, descricao_a2)
                .input("a3", database_1.sql.VarChar, a3)
                .input("descricao_a3", database_1.sql.VarChar, descricao_a3)
                .input("a4", database_1.sql.VarChar, a4)
                .input("descricao_a4", database_1.sql.VarChar, descricao_a4)
                .input("a5", database_1.sql.VarChar, a5)
                .input("descricao_a5", database_1.sql.VarChar, descricao_a5)
                .input("a6", database_1.sql.VarChar, a6)
                .input("descricao_a6", database_1.sql.VarChar, descricao_a6)
                .query(`UPDATE O_MATERIAL SET material = @material, descricao = @descricao, unidade = @unidade, empresa = @empresa, centro = @centro, deposito = @deposito, lote = @lote, saldo = @saldo, saldo_projeto = @saldo_projeto, projeto = @projeto, precomm = @precomm, precolastpo = @precolastpo, setor_atividade = @setor_atividade, decriacao_sa = @decriacao_sa, grupo_merc = @grupo_merc, descricao_gm = @descricao_gm, tuc = @tuc, descricao_tuc = @descricao_tuc, a1 = @a1, descricao_a1 = @descricao_a1, a2 = @a2, descricao_a2 = @descricao_a2, a3 = @a3, descricao_a3 = @descricao_a3, a4 = @a4, descricao_a4 = @descricao_a4, a5 = @a5, descricao_a5 = @descricao_a5, a6 = @a6, descricao_a6 = @descricao_a6 WHERE item_id = ${id}`);
            return res.status(200).json({ message: 'Material Updated' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateMaterial = updateMaterial;
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
