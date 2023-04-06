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
exports.updateEstoq = exports.deleteEstoq = exports.getEstoq = exports.createEstoq = exports.getEstoqs = void 0;
const database_1 = require("../database");
function getEstoqs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = yield (0, database_1.getdata)();
            const estoqs = yield database.request().query('SELECT * FROM O_ESTOQ');
            if (estoqs.recordset.length === 0) {
                return res.status(204).json();
            }
            else {
                return res.status(200).json(estoqs.recordset);
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getEstoqs = getEstoqs;
function createEstoq(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newEstoq = req.body;
            if ((newEstoq['cod-depos'] == null || newEstoq['cod-estabel'] == null || newEstoq['cod-localiz'] == null || newEstoq['cod-refer'] == null || newEstoq['ind-alter'] == null || newEstoq['ind-processado'] == null || newEstoq['it-codigo'] == null || newEstoq.lote == null || newEstoq['quantidade-atu'] == null)) {
                return res.status(400).json({ msg: "Please fill all fields" });
            }
            const database = yield (0, database_1.getdata)();
            const item = yield database
                .request()
                .input("cod_estabel", database_1.sql.VarChar, newEstoq['cod-estabel'])
                .input("it_codigo", database_1.sql.VarChar, newEstoq['it-codigo'])
                .input("cod_depos", database_1.sql.VarChar, newEstoq['cod-depos'])
                .input("cod_localiz", database_1.sql.VarChar, newEstoq['cod-localiz'])
                .input("cod_refer", database_1.sql.VarChar, newEstoq['cod-refer'])
                .input("lote", database_1.sql.VarChar, newEstoq.lote)
                .input("quantidade_atu", database_1.sql.Float, newEstoq['quantidade-atu'])
                .input("ind_processado", database_1.sql.Int, newEstoq['ind-processado'])
                .input("ind_alter", database_1.sql.Int, newEstoq['ind-alter'])
                .query('INSERT INTO O_ESTOQ ("cod-estabel", "it-codigo", "cod-depos", "cod-localiz", "cod-refer", "lote", "quantidade-atu", "ind-processado", "ind-alter") VALUES (@cod_estabel, @it_codigo, @cod_depos, @cod_localiz, @cod_refer, @lote, @quantidade_atu, @ind_processado, @ind_alter)');
            return res.status(200).json({ message: 'New Estoq Created' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.createEstoq = createEstoq;
function getEstoq(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const it_codigo = req.params.itCod;
            const database = yield (0, database_1.getdata)();
            const estoq = yield database.request().query(`SELECT * FROM O_ESTOQ WHERE "it-codigo" = '${it_codigo}'`);
            return res.status(200).json(estoq.recordset[0]);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getEstoq = getEstoq;
function deleteEstoq(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const it_codigo = req.params.itCod;
            const database = yield (0, database_1.getdata)();
            const estoq = yield database.request().query(`DELETE FROM O_ESTOQ WHERE "it-codigo" = '${it_codigo}'`);
            return res.status(200).json({ message: `Estoq cod "${it_codigo}" deleted` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.deleteEstoq = deleteEstoq;
function updateEstoq(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const it_codigo = req.params.itCod;
            const updatedEstoq = req.body;
            if ((updatedEstoq['cod-depos'] == null || updatedEstoq['cod-estabel'] == null || updatedEstoq['cod-localiz'] == null || updatedEstoq['cod-refer'] == null || updatedEstoq['ind-alter'] == null || updatedEstoq['ind-processado'] == null || updatedEstoq['it-codigo'] == null || updatedEstoq.lote == null || updatedEstoq['quantidade-atu'] == null)) {
                return res.status(400).json({ msg: "Please fill all fields" });
            }
            const database = yield (0, database_1.getdata)();
            const newEstoq = yield database
                .request()
                .input("cod_estabel", database_1.sql.VarChar, updatedEstoq['cod-estabel'])
                .input("it_codigo", database_1.sql.VarChar, updatedEstoq['it-codigo'])
                .input("cod_depos", database_1.sql.VarChar, updatedEstoq['cod-depos'])
                .input("cod_localiz", database_1.sql.VarChar, updatedEstoq['cod-localiz'])
                .input("cod_refer", database_1.sql.VarChar, updatedEstoq['cod-refer'])
                .input("lote", database_1.sql.VarChar, updatedEstoq.lote)
                .input("quantidade_atu", database_1.sql.Float, updatedEstoq['quantidade-atu'])
                .input("ind_processado", database_1.sql.Int, updatedEstoq['ind-processado'])
                .input("ind_alter", database_1.sql.Int, updatedEstoq['ind-alter'])
                .query(`UPDATE O_ESTOQ SET "cod-estabel" = @cod_estabel, "it-codigo" = @it_codigo, "cod-depos" = @cod_depos, "cod-localiz" = @cod_localiz, "cod-refer" = @cod_refer, "lote" = @lote, "quantidade-atu" = @quantidade_atu, "ind-processado" = @ind_processado, "ind-alter" = @ind_alter WHERE "it-codigo" = ${it_codigo}`);
            return res.status(200).json({ message: 'Estoq Updated' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateEstoq = updateEstoq;
