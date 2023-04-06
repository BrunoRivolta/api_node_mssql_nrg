"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itens_controller_1 = require("../controllers/itens.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(itens_controller_1.getItens)
    .post(itens_controller_1.createItem);
router.route('/:estab')
    .get(itens_controller_1.getItem)
    .delete(itens_controller_1.deleteItem)
    .put(itens_controller_1.updateItem);
exports.default = router;
