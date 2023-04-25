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
exports.updateItem = exports.deleteItem = exports.getItem = exports.createItem = exports.getItens = void 0;
//@ts-ignore
const models_1 = __importDefault(require("../models"));
function getItens(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const items = yield models_1.default.Item.findAll();
            if (items.length === 0) {
                return res.status(204).json();
            }
            else {
                return res.status(200).json(items);
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
        const newItem = req.body;
        try {
            yield models_1.default.Item.create(newItem);
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
        const estab = req.params.estab;
        try {
            const item = yield models_1.default.Item.findAll({ where: { "estab": estab } });
            return res.status(200).json(item);
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
        const estab = req.params.estab;
        try {
            yield models_1.default.Item.destroy({ where: { "estab": estab } });
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
        const estab = req.params.estab;
        const updatedItem = req.body;
        try {
            yield models_1.default.Item.update(updatedItem, { where: { "estab": estab } });
            return res.status(200).json({ message: `Item estab "${estab}" Updated` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateItem = updateItem;
