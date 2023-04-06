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
exports.updateItem = exports.deleteItem = exports.getItem = exports.createItem = exports.getItens = void 0;
const database_1 = require("../database");
function getItens(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = yield (0, database_1.getdata)();
            const itens = yield database.request().query('SELECT * FROM O_ITENS');
            if (itens.recordset.length === 0) {
                return res.status(204).json();
            }
            else {
                return res.status(200).json(itens.recordset);
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getItens = getItens;
function createItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newItem = req.body;
            if ((newItem['estab'] == null || newItem['it-codigo'] == null || newItem['desc-item'] == null || newItem['tp-contr-estoque'] == null || newItem['fm-codigo'] == null || newItem['descricao'] == null || newItem['desc-ge'] == null || newItem['ge-codigo'] == null || newItem.narrativa == null || newItem.situacao == null || newItem['preco-base'] == null || newItem['preco-ul-ent'] == null || newItem['val-unit-mat'] == null || newItem['preco-medio'] == null || newItem['ind-processado'] == null || newItem['ind-alter'] == null)) {
                return res.status(400).json({ msg: "Please fill all fields" });
            }
            const database = yield (0, database_1.getdata)();
            const item = yield database
                .request()
                .input("estab", database_1.sql.VarChar, newItem.estab)
                .input("it_codigo", database_1.sql.Int, newItem['it-codigo'])
                .input("desc_item", database_1.sql.VarChar, newItem['desc-item'])
                .input("tp_contr_estoque", database_1.sql.Bit, newItem['tp-contr-estoque'])
                .input("fm_codigo", database_1.sql.VarChar, newItem['fm-codigo'])
                .input("descricao", database_1.sql.VarChar, newItem.descricao)
                .input("desc_ge", database_1.sql.VarChar, newItem['desc-ge'])
                .input("ge_codigo", database_1.sql.Int, newItem['ge-codigo'])
                .input("narrativa", database_1.sql.VarChar, newItem.narrativa)
                .input("situacao", database_1.sql.Int, newItem.situacao)
                .input("preco_base", database_1.sql.Float, newItem['preco-base'])
                .input("preco_ul_ent", database_1.sql.Int, newItem['preco-ul-ent'])
                .input("val_unit_mat", database_1.sql.Float, newItem['val-unit-mat'])
                .input("preco_medio", database_1.sql.Float, newItem['preco-medio'])
                .input("ind_processado", database_1.sql.Int, newItem['ind-processado'])
                .input("ind_alter", database_1.sql.Int, newItem['ind-alter'])
                .query('INSERT INTO O_ITENS ("estab", "it-codigo", "desc-item", "tp-contr-estoque", "fm-codigo", "descricao", "desc-ge", "ge-codigo", "narrativa", "situacao", "preco-base", "preco-ul-ent", "val-unit-mat", "preco-medio", "ind-processado", "ind-alter") VALUES (@estab, @it_codigo, @desc_item, @tp_contr_estoque, @fm_codigo, @descricao, @desc_ge, @ge_codigo, @narrativa, @situacao, @preco_base, @preco_ul_ent, @val_unit_mat, @preco_medio, @ind_processado, @ind_alter)');
            return res.status(200).json({ message: 'New Item Created' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.createItem = createItem;
function getItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const estab = req.params.estab;
            const database = yield (0, database_1.getdata)();
            const item = yield database.request().query(`SELECT * FROM O_ITENS WHERE "estab" = '${estab}'`);
            return res.status(200).json(item.recordset[0]);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getItem = getItem;
function deleteItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const estab = req.params.estab;
            const database = yield (0, database_1.getdata)();
            const item = yield database.request().query(`DELETE FROM O_ITENS WHERE "estab" = '${estab}'`);
            return res.status(200).json({ message: `Item estab "${estab}" deleted` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.deleteItem = deleteItem;
function updateItem(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const estab = req.params.estab;
            const newItem = req.body;
            if ((newItem['estab'] == null || newItem['it-codigo'] == null || newItem['desc-item'] == null || newItem['tp-contr-estoque'] == null || newItem['fm-codigo'] == null || newItem['descricao'] == null || newItem['desc-ge'] == null || newItem['ge-codigo'] == null || newItem.narrativa == null || newItem.situacao == null || newItem['preco-base'] == null || newItem['preco-ul-ent'] == null || newItem['val-unit-mat'] == null || newItem['preco-medio'] == null || newItem['ind-processado'] == null || newItem['ind-alter'] == null)) {
                return res.status(400).json({ msg: "Please fill all fields" });
            }
            const database = yield (0, database_1.getdata)();
            const item = yield database
                .request()
                .input("estab", database_1.sql.VarChar, newItem.estab)
                .input("it_codigo", database_1.sql.Int, newItem['it-codigo'])
                .input("desc_item", database_1.sql.VarChar, newItem['desc-item'])
                .input("tp_contr_estoque", database_1.sql.Bit, newItem['tp-contr-estoque'])
                .input("fm_codigo", database_1.sql.VarChar, newItem['fm-codigo'])
                .input("descricao", database_1.sql.VarChar, newItem.descricao)
                .input("desc_ge", database_1.sql.VarChar, newItem['desc-ge'])
                .input("ge_codigo", database_1.sql.Int, newItem['ge-codigo'])
                .input("narrativa", database_1.sql.VarChar, newItem.narrativa)
                .input("situacao", database_1.sql.Int, newItem.situacao)
                .input("preco_base", database_1.sql.Float, newItem['preco-base'])
                .input("preco_ul_ent", database_1.sql.Int, newItem['preco-ul-ent'])
                .input("val_unit_mat", database_1.sql.Float, newItem['val-unit-mat'])
                .input("preco_medio", database_1.sql.Float, newItem['preco-medio'])
                .input("ind_processado", database_1.sql.Int, newItem['ind-processado'])
                .input("ind_alter", database_1.sql.Int, newItem['ind-alter'])
                .query(`UPDATE O_ITENS SET "estab" = @estab, "it-codigo" = @it_codigo, "desc-item" = @desc_item, "tp-contr-estoque" = @tp_contr_estoque, "fm-codigo" = @fm_codigo, "descricao" = @descricao, "desc-ge" = @desc_ge, "ge-codigo" = @ge_codigo, "narrativa" = @narrativa, "situacao" = @situacao, "preco-base" = @preco_base, "preco-ul-ent" = @preco_ul_ent, "val-unit-mat" = @val_unit_mat, "preco-medio" = @preco_medio, "ind-processado" = @ind_processado, "ind-alter" = @ind_alter WHERE "estab" = '${estab}'`);
            return res.status(200).json({ message: 'Item Updated' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateItem = updateItem;
