import { Request, Response } from 'express'

// DB
import { getdata, sql } from '../database';

// Interfaces
import { Material } from '../interface/Material'

export async function getMaterials(req: Request, res: Response): Promise<Response | void> {
    try {
        const database: undefined | any = await getdata()
        const material = await database.request().query('SELECT * FROM O_MATERIAL')
        return res.status(200).json(material.recordset);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createMaterial(req: Request, res: Response) {
    try {
        const { 
            material, 
            descricao, 
            unidade, 
            empresa, 
            centro, 
            deposito, 
            lote, 
            saldo, 
            saldo_projeto, 
            projeto, 
            precomm,
            precolastpo,
            setor_atividade,
            decriacao_sa,
            grupo_merc,
            descricao_gm,
            tuc,
            descricao_tuc,
            a1,
            descricao_a1,
            a2,
            descricao_a2,
            a3,
            descricao_a3,
            a4,
            descricao_a4,
            a5,
            descricao_a5,
            a6,
            descricao_a6
        }: Material = req.body;
    
        const database: undefined | any = await getdata()
        const newMaterial = await database
            .request()
            .input("material", sql.VarChar, material)
            .input("descricao", sql.VarChar, descricao)
            .input("unidade", sql.VarChar, unidade)
            .input("empresa", sql.VarChar, empresa)
            .input("centro", sql.VarChar, centro)
            .input("deposito", sql.VarChar, deposito)
            .input("lote", sql.VarChar, lote)
            .input("saldo", sql.VarChar, saldo)
            .input("saldo_projeto", sql.VarChar, saldo_projeto)
            .input("projeto", sql.VarChar, projeto)
            .input("precomm", sql.VarChar, precomm)
            .input("precolastpo", sql.VarChar, precolastpo)
            .input("setor_atividade", sql.VarChar, setor_atividade)
            .input("decriacao_sa", sql.VarChar, decriacao_sa)
            .input("grupo_merc", sql.VarChar, grupo_merc)
            .input("descricao_gm", sql.VarChar, descricao_gm)
            .input("tuc", sql.VarChar, tuc)
            .input("descricao_tuc", sql.VarChar, descricao_tuc)
            .input("a1", sql.VarChar, a1)
            .input("descricao_a1", sql.VarChar, descricao_a1)
            .input("a2", sql.VarChar, a2)
            .input("descricao_a2", sql.VarChar, descricao_a2)
            .input("a3", sql.VarChar, a3)
            .input("descricao_a3", sql.VarChar, descricao_a3)
            .input("a4", sql.VarChar, a4)
            .input("descricao_a4", sql.VarChar, descricao_a4)
            .input("a5", sql.VarChar, a5)
            .input("descricao_a5", sql.VarChar, descricao_a5)
            .input("a6", sql.VarChar, a6)
            .input("descricao_a6", sql.VarChar, descricao_a6)
            .query('INSERT INTO O_MATERIAL (material, descricao, unidade, empresa, centro, deposito, lote, saldo, saldo_projeto, projeto, precomm, precolastpo, setor_atividade, decriacao_sa, grupo_merc, descricao_gm, tuc, descricao_tuc, a1, descricao_a1, a2, descricao_a2, a3, descricao_a3, a4, descricao_a4, a5, descricao_a5, a6, descricao_a6) VALUES (@material, @descricao, @unidade, @empresa, @centro, @deposito, @lote, @saldo, @saldo_projeto, @projeto, @precomm, @precolastpo, @setor_atividade, @decriacao_sa, @grupo_merc, @descricao_gm, @tuc, @descricao_tuc, @a1, @descricao_a1, @a2, @descricao_a2, @a3, @descricao_a3, @a4, @descricao_a4, @a5, @descricao_a5, @a6, @descricao_a6)')
        
        return res.status(200).json({ message: 'New Material Created'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getMaterial(req: Request, res: Response) {
    try {
        const id = req.params.materialId;
        const database: undefined | any = await getdata()
        const material = await database.request().query(`SELECT * FROM O_MATERIAL WHERE item_id = ${id}`)
        return res.status(200).json(material.recordset[0])
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteMaterial(req: Request, res: Response) {
    try {
        const id = req.params.materialId;
        const database: undefined | any = await getdata()
        const material = await database.request().query(`DELETE FROM O_MATERIAL WHERE item_id = ${id}`)
        return res.status(200).json({ message: `Material item_id "${id}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateMaterial(req: Request, res: Response) {
    try {
        const { 
            material, 
            descricao, 
            unidade, 
            empresa, 
            centro, 
            deposito, 
            lote, 
            saldo, 
            saldo_projeto, 
            projeto, 
            precomm,
            precolastpo,
            setor_atividade,
            decriacao_sa,
            grupo_merc,
            descricao_gm,
            tuc,
            descricao_tuc,
            a1,
            descricao_a1,
            a2,
            descricao_a2,
            a3,
            descricao_a3,
            a4,
            descricao_a4,
            a5,
            descricao_a5,
            a6,
            descricao_a6
        }: Material = req.body;
    
        const database: undefined | any = await getdata()
        const newMaterial = await database
            .request()
            .input("material", sql.VarChar, material)
            .input("descricao", sql.VarChar, descricao)
            .input("unidade", sql.VarChar, unidade)
            .input("empresa", sql.VarChar, empresa)
            .input("centro", sql.VarChar, centro)
            .input("deposito", sql.VarChar, deposito)
            .input("lote", sql.VarChar, lote)
            .input("saldo", sql.VarChar, saldo)
            .input("saldo_projeto", sql.VarChar, saldo_projeto)
            .input("projeto", sql.VarChar, projeto)
            .input("precomm", sql.VarChar, precomm)
            .input("precolastpo", sql.VarChar, precolastpo)
            .input("setor_atividade", sql.VarChar, setor_atividade)
            .input("decriacao_sa", sql.VarChar, decriacao_sa)
            .input("grupo_merc", sql.VarChar, grupo_merc)
            .input("descricao_gm", sql.VarChar, descricao_gm)
            .input("tuc", sql.VarChar, tuc)
            .input("descricao_tuc", sql.VarChar, descricao_tuc)
            .input("a1", sql.VarChar, a1)
            .input("descricao_a1", sql.VarChar, descricao_a1)
            .input("a2", sql.VarChar, a2)
            .input("descricao_a2", sql.VarChar, descricao_a2)
            .input("a3", sql.VarChar, a3)
            .input("descricao_a3", sql.VarChar, descricao_a3)
            .input("a4", sql.VarChar, a4)
            .input("descricao_a4", sql.VarChar, descricao_a4)
            .input("a5", sql.VarChar, a5)
            .input("descricao_a5", sql.VarChar, descricao_a5)
            .input("a6", sql.VarChar, a6)
            .input("descricao_a6", sql.VarChar, descricao_a6)
            .query('UPDATE INTO O_MATERIAL (material, descricao, unidade, empresa, centro, deposito, lote, saldo, saldo_projeto, projeto, precomm, precolastpo, setor_atividade, decriacao_sa, grupo_merc, descricao_gm, tuc, descricao_tuc, a1, descricao_a1, a2, descricao_a2, a3, descricao_a3, a4, descricao_a4, a5, descricao_a5, a6, descricao_a6) VALUES (@material, @descricao, @unidade, @empresa, @centro, @deposito, @lote, @saldo, @saldo_projeto, @projeto, @precomm, @precolastpo, @setor_atividade, @decriacao_sa, @grupo_merc, @descricao_gm, @tuc, @descricao_tuc, @a1, @descricao_a1, @a2, @descricao_a2, @a3, @descricao_a3, @a4, @descricao_a4, @a5, @descricao_a5, @a6, @descricao_a6)')
        
        return res.status(200).json({ message: 'Material Updated'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
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