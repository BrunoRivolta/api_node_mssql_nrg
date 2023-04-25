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
exports.updateEstoq = exports.deleteEstoq = exports.getEstoq = exports.createEstoq = exports.getEstoqs = void 0;
//@ts-ignore
const models_1 = __importDefault(require("../models"));
function getEstoqs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const estoqs = yield models_1.default.Estoq.findAll();
            if (estoqs.length === 0) {
                return res.status(204).json();
            }
            else {
                return res.status(200).json(estoqs);
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
        const newEstoq = req.body;
        try {
            yield models_1.default.Estoq.create(newEstoq);
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
        const it_codigo = req.params.itCod;
        try {
            const estoq = yield models_1.default.Estoq.findAll({ where: { "it-codigo": it_codigo } });
            return res.status(200).json(estoq);
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
        const it_codigo = req.params.itCod;
        try {
            yield models_1.default.Estoq.destroy({ where: { "it-codigo": it_codigo } });
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
        const it_codigo = req.params.itCod;
        const updatedEstoq = req.body;
        try {
            yield models_1.default.Estoq.update(updatedEstoq, { where: { "it-codigo": it_codigo } });
            return res.status(200).json({ message: `Estoq cod "${it_codigo}" Updated` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateEstoq = updateEstoq;
