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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRetorno = exports.deleteRetorno = exports.getRetorno = exports.createRetorno = exports.getRetornos = void 0;
//@ts-ignore
const models_1 = __importDefault(require("../models"));
function getRetornos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const retornos = yield models_1.default.Retorno.findAll();
            if (retornos.length === 0) {
                return res.status(204).json();
            }
            else {
                return res.status(200).json(retornos);
            }
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
        const newRetorno = req.body;
        try {
            yield models_1.default.Retorno.create(newRetorno);
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
        const idLote = req.params.retornolId;
        try {
            const retorno = yield models_1.default.Retorno.findAll({ where: { "id_lote": idLote } });
            return res.status(200).json(retorno);
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
        const idLote = req.params.retornolId;
        try {
            yield models_1.default.Retorno.destroy({ where: { "id_lote": idLote } });
            return res.status(200).json({ message: `Retorno id "${idLote}" deleted` });
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
        const idLote = req.params.retornolId;
        const updatedRetorno = req.body;
        try {
            yield models_1.default.Retorno.update(updatedRetorno, { where: { "id_lote": idLote } });
            return res.status(200).json({ message: 'Retorno Updated' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateRetorno = updateRetorno;
