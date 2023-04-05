"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const retorno_controller_1 = require("../controllers/retorno.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(retorno_controller_1.getRetornos)
    .post(retorno_controller_1.createRetorno);
router.route('/:retornolId')
    .get(retorno_controller_1.getRetorno)
    .delete(retorno_controller_1.deleteRetorno)
    .put(retorno_controller_1.updateRetorno);
exports.default = router;
