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
exports.updateRetorno = exports.deleteRetorno = exports.getRetorno = exports.createRetorno = exports.getRetornos = void 0;
// DB
const database_1 = require("../database");
function getRetornos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = yield (0, database_1.getdata)();
            const retorno = yield database.request().query('SELECT * FROM O_RETORNO');
            return res.status(200).json(retorno.recordset);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getRetornos = getRetornos;
function createRetorno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { cod_ret, mensagem, } = req.body;
            const database = yield (0, database_1.getdata)();
            const newRetorno = yield database
                .request()
                .input("cod_ret", database_1.sql.VarChar, cod_ret)
                .input("mensagem", database_1.sql.VarChar, mensagem)
                .query('INSERT INTO O_RETORNO (cod_ret, mensagem) VALUES (@cod_ret, @mensagem)');
            return res.status(200).json({ message: 'New Retorno Created' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.createRetorno = createRetorno;
function getRetorno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.retornolId;
            const database = yield (0, database_1.getdata)();
            const retorno = yield database.request().query(`SELECT * FROM O_RETORNO WHERE id_lote = ${id}`);
            return res.status(200).json(retorno.recordset[0]);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getRetorno = getRetorno;
function deleteRetorno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.retornolId;
            const database = yield (0, database_1.getdata)();
            const retorno = yield database.request().query(`DELETE FROM O_RETORNO WHERE id_lote = ${id}`);
            return res.status(200).json({ message: `Retorno id_lote "${id}" deleted` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.deleteRetorno = deleteRetorno;
function updateRetorno(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.retornolId;
            const { cod_ret, mensagem } = req.body;
            if ((cod_ret == null || mensagem == null)) {
                return res.status(400).json({ msg: "Please fill all fields" });
            }
            const database = yield (0, database_1.getdata)();
            const newRetorno = yield database
                .request()
                .input("cod_ret", database_1.sql.VarChar, cod_ret)
                .input("mensagem", database_1.sql.VarChar, mensagem)
                .query(`UPDATE O_RETORNO SET cod_ret = @cod_ret, mensagem = @mensagem WHERE id_lote = ${id}`);
            return res.status(200).json({ message: 'Retorno Updated' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateRetorno = updateRetorno;
