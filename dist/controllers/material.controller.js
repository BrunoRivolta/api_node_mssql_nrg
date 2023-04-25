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
exports.updateMaterial = exports.deleteMaterial = exports.getMaterial = exports.createMaterial = exports.getMaterials = void 0;
//@ts-ignore
const models_1 = __importDefault(require("../models"));
function getMaterials(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const materials = yield models_1.default.Material.findAll();
            if (materials.length === 0) {
                return res.status(204).json();
            }
            else {
                return res.status(200).json(materials);
            }
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
        const newMaterial = req.body;
        try {
            yield models_1.default.Material.create(newMaterial);
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
        const itemId = req.params.materialId;
        try {
            const material = yield models_1.default.Material.findAll({ where: { "item_id": itemId } });
            return res.status(200).json(material);
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
        const itemId = req.params.materialId;
        try {
            yield models_1.default.Material.destroy({ where: { "item_id": itemId } });
            return res.status(200).json({ message: `Material id "${itemId}" deleted` });
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
        const itemId = req.params.materialId;
        const updatedMaterial = req.body;
        try {
            yield models_1.default.Material.update(updatedMaterial, { where: { "item_id": itemId } });
            return res.status(200).json({ message: `Material id "${itemId}" Updated` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updateMaterial = updateMaterial;
