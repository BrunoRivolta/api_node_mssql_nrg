import { Router } from 'express'
import { getRetorno, updateRetorno, getRetornos, deleteRetorno, createRetorno } from '../controllers/retorno.controller'

const router = Router();

router.route('/')
    .get(getRetornos)
    .post(createRetorno);

router.route('/:retornolId')
    .get(getRetorno)
    .delete(deleteRetorno)
    .put(updateRetorno);

export default router;