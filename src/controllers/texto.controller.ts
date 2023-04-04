import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Texto } from '../interface/Texto'

export async function getTextos(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const textos = await conn.query('SELECT * FROM O_TEXTO');
        return res.json(textos[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createTexto(req: Request, res: Response) {
    const newTexto: Texto = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO O_TEXTO SET ?', [newTexto]);
    res.json({
        message: 'New Texto Created'
    });
}

export async function getTexto(req: Request, res: Response) {
    const id = req.params.textoId;
    const conn = await connect();
    const Textos = await conn.query('SELECT * FROM O_TEXTO WHERE id = ?', [id]);
    res.json(Textos[0]);
}

export async function deleteTexto(req: Request, res: Response) {
    const id = req.params.textoId;
    const conn = await connect();
    await conn.query('DELETE FROM O_TEXTO WHERE id = ?', [id]);
    res.json({
        message: 'Texto deleted'
    });
}

export async function updateTexto(req: Request, res: Response) {
    const id = req.params.textoId;
    const updatedTexto: Texto = req.body;
    const conn = await connect();
    await conn.query('UPDATE O_TEXTO set ? WHERE id = ?', [updatedTexto, id]);
    res.json({
        message: 'Texto Updated'
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