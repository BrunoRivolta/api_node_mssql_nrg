import { Retorno } from './../interface/Retorno';
import { Request, Response } from 'express'
//@ts-ignore
import database from '../models'

export async function getRetornos(req: Request, res: Response): Promise<Response | void> {
    try {
        const retornos = await database.Retorno.findAll()
        if(retornos.length === 0) {
            return res.status(204).json();
        } else {
            return res.status(200).json(retornos);
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createRetorno(req: Request, res: Response) {
	const newRetorno: Retorno = req.body;
    try {
		await database.Retorno.create(newRetorno)
        return res.status(200).json({ message: 'New Retorno Created'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getRetorno(req: Request, res: Response) {
	const idLote = req.params.retornolId;
    try {
		const retorno = await database.Retorno.findAll({ where: { "id_lote": idLote } })
        return res.status(200).json(retorno)
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteRetorno(req: Request, res: Response) {
	const idLote = req.params.retornolId;
    try {
		await database.Retorno.destroy( {where: { "id_lote": idLote } })
        return res.status(200).json({ message: `Retorno id "${idLote}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateRetorno(req: Request, res: Response) {
	const idLote = req.params.retornolId;
	const updatedRetorno: Retorno = req.body;
    try {
		await database.Retorno.update(updatedRetorno, { where: { "id_lote": idLote } })
        return res.status(200).json({ message: 'Retorno Updated'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
