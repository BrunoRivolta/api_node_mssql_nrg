import { Router } from 'express'
import { getItens, createItem, getItem, deleteItem, updateItem } from '../controllers/itens.controller'

const router = Router();

router.route('/')
    .get(getItens)
    .post(createItem);

router.route('/:estab')
    .get(getItem)
    .delete(deleteItem)
    .put(updateItem);

export default router;