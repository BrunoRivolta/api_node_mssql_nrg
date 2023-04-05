"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const material_controller_1 = require("../controllers/material.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(material_controller_1.getMaterials) //ok
    .post(material_controller_1.createMaterial); //ok
router.route('/:materialId')
    .get(material_controller_1.getMaterial) //ok
    .delete(material_controller_1.deleteMaterial) //ok
    .put(material_controller_1.updateMaterial); //
exports.default = router;
