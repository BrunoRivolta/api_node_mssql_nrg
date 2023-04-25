"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const texto_controller_1 = require("../controllers/texto.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(texto_controller_1.getTextos)
    .post(texto_controller_1.createTexto);
router.route('/:material')
    .get(texto_controller_1.getTexto)
    .delete(texto_controller_1.deleteTexto)
    .put(texto_controller_1.updateTexto);
exports.default = router;
