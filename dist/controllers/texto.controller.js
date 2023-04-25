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
exports.updateTexto = exports.deleteTexto = exports.getTexto = exports.createTexto = exports.getTextos = void 0;
//@ts-ignore
const models_1 = __importDefault(require("../models"));
function getTextos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const textos = yield models_1.default.Texto.findAll();
            if (textos.length === 0) {
                return res.status(204).json();
            }
            else {
                return res.status(200).json(textos);
            }
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
        const newTexto = req.body;
        try {
            yield models_1.default.Texto.create(newTexto);
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
        const textoMaterial = req.params.material;
        console.log(textoMaterial);
        try {
            const texto = yield models_1.default.Texto.findAll({ where: { "material": textoMaterial } });
            return res.status(200).json(texto);
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
        const textoMaterial = req.params.material;
        try {
            yield models_1.default.Texto.destroy({ where: { "material": textoMaterial } });
            return res.status(200).json({ message: `Texto material "${textoMaterial}" deleted` });
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
        const textoMaterial = req.params.material;
        const updatedTexto = req.body;
        try {
            yield models_1.default.Texto.update(updatedTexto, { where: { "material": textoMaterial } });
            return res.status(200).json({ message: 'Texto Updated' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateTexto = updateTexto;
