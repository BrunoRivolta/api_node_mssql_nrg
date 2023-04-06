import { Router } from 'express'
import { getEstoqs, createEstoq, getEstoq, deleteEstoq, updateEstoq } from '../controllers/estoq.controller'

const router = Router();

router.route('/')
    .get(getEstoqs)
    .post(createEstoq);

router.route('/:itCod')
    .get(getEstoq)
    .delete(deleteEstoq)
    .put(updateEstoq);

export default router;