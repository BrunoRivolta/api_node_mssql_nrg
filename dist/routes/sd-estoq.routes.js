"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estoq_controller_1 = require("../controllers/estoq.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(estoq_controller_1.getEstoqs)
    .post(estoq_controller_1.createEstoq);
router.route('/:itCod')
    .get(estoq_controller_1.getEstoq)
    .delete(estoq_controller_1.deleteEstoq)
    .put(estoq_controller_1.updateEstoq);
exports.default = router;
