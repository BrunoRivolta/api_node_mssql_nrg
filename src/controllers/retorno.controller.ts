import { Request, Response } from 'express'

// DB
import { connect } from '../database'
// Interfaces
import { Retorno } from '../interface/Retorno'

export async function getRetornos(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const retorno = await conn.query('SELECT * FROM Retorno');
        return res.json(retorno[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createRetorno(req: Request, res: Response) {
    const newRetorno: Retorno = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO Retorno SET ?', [newRetorno]);
    res.json({
        message: 'New Retorno Created'
    });
}

export async function getRetorno(req: Request, res: Response) {
    const id = req.params.retornolId;
    const conn = await connect();
    const returns = await conn.query('SELECT * FROM Retorno WHERE id = ?', [id]);
    res.json(returns[0]);
}

export async function deleteRetorno(req: Request, res: Response) {
    const id = req.params.retornolId;
    const conn = await connect();
    await conn.query('DELETE FROM Retorno WHERE id = ?', [id]);
    res.json({
        message: 'Retorno deleted'
    });
}

export async function updateRetorno(req: Request, res: Response) {
    const id = req.params.retornolId;
    const updatedRetorno: Retorno = req.body;
    const conn = await connect();
    await conn.query('UPDATE Retorno set ? WHERE id = ?', [updatedRetorno, id]);
    res.json({
        message: 'Retorno Updated'
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