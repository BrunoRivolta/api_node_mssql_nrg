import { Router } from 'express'
import { getTextos, createTexto, getTexto, deleteTexto, updateTexto } from '../controllers/texto.controller'

const router = Router();

router.route('/')
    .get(getTextos)
    .post(createTexto);

router.route('/:material')
    .get(getTexto)
    .delete(deleteTexto)
    .put(updateTexto);

export default router;
