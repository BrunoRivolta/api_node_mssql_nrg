import { Router } from 'express'
import { getMaterials, createMaterial, getMaterial, deleteMaterial, updateMaterial } from '../controllers/material.controller'

const router = Router();

router.route('/')
    .get(getMaterials)
    .post(createMaterial);

router.route('/:materialId')
    .get(getMaterial)
    .delete(deleteMaterial)
    .put(updateMaterial);

export default router;