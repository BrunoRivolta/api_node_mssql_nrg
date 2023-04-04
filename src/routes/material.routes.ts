import { Router } from 'express'
import { getMaterials, createMaterial, getMaterial, deleteMaterial, updateMaterial } from '../controllers/material.controller'

const router = Router();

router.route('/')
    .get(getMaterials) //ok
    .post(createMaterial); //ok

router.route('/:materialId')
    .get(getMaterial) //ok
    .delete(deleteMaterial) //ok
    .put(updateMaterial); //

export default router;