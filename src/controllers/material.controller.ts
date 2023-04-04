import { Request, Response } from 'express'

// DB
import { connect } from '../database'
import { getdata } from '../database';
// Interfaces
import { Material } from '../interface/Material'

export async function getMaterials(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn: any | undefined = await getdata();
        const material = await conn.query('SELECT * FROM O_MATERIAL');
        return res.json(material.recordsets[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createMaterial(req: Request, res: Response) {
    const newMaterial: Material = req.body;
    console.log(newMaterial)
    //const conn: any | undefined = await getdata();
    //await conn.query('INSERT INTO O_MATERIAL SET ?', newMaterial);
    res.json({
        message: 'New Material Created'
    });
}

export async function getMaterial(req: Request, res: Response) {
    const id = req.params.materialId;
    const conn = await connect();
    const materials = await conn.query('SELECT * FROM O_MATERIAL WHERE id = ?', [id]);
    res.json(materials[0]);
}

export async function deleteMaterial(req: Request, res: Response) {
    const id = req.params.materialId;
    const conn = await connect();
    await conn.query('DELETE FROM O_MATERIAL WHERE id = ?', [id]);
    res.json({
        message: 'Material deleted'
    });
}

export async function updateMaterial(req: Request, res: Response) {
    const id = req.params.materialId;
    const updatedMaterial: Material = req.body;
    const conn = await connect();
    await conn.query('UPDATE O_MATERIAL set ? WHERE id = ?', [updatedMaterial, id]);
    res.json({
        message: 'Material Updated'
    });
}

/* To Test at Postman 
{
    "material": "string",
    "descricao": "string",
    "unidade": "string",
    "empresa": "string",
    "centro": "string",
    "deposito": "string",
    "lote": "string",
    "saldo": "string",
    "saldo_projeto": "string",
    "projeto": "string",
    "precomm": "string",
    "precolastpo": "string",
    "setor_atividade": "string",
    "decriacao_sa": "string",
    "grupo_merc": "string",
    "descricao_gm": "string",
    "tuc": "string",
    "descricao_tuc": "string",
    "a1": "string",
    "descricao_a1": "string",
    "a2": "string",
    "descricao_a2": "string",
    "a3": "string",
    "descricao_a3": "string",
    "a4": "string",
    "descricao_a4": "string",
    "a5": "string",
    "descricao_a5": "string",
    "a6": "string",
    "descricao_a6": "string"
} */