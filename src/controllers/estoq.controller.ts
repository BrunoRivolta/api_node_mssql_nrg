import { Request, Response } from 'express'
import { Estoq } from '../interface/Estoq'
//@ts-ignore
import database from '../models'

export async function getEstoqs(req: Request, res: Response): Promise<Response | void> {
    try {
        const estoqs = await database.Estoq.findAll()
        if(estoqs.length === 0) {
            return res.status(204).json();
        } else {
            return res.status(200).json(estoqs);
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createEstoq(req: Request, res: Response) {
	const newEstoq: Estoq = req.body;
    try {
		await database.Estoq.create(newEstoq)
        return res.status(200).json({ message: 'New Estoq Created'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getEstoq(req: Request, res: Response) {
	const it_codigo = req.params.itCod;
    try {
		const estoq = await database.Estoq.findAll({ where: { "it-codigo": it_codigo } })
        return res.status(200).json(estoq)
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteEstoq(req: Request, res: Response) {
	const it_codigo = req.params.itCod;
    try {
		await database.Estoq.destroy( {where: { "it-codigo": it_codigo } })
        return res.status(200).json({ message: `Estoq cod "${it_codigo}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateEstoq(req: Request, res: Response) {
	const it_codigo = req.params.itCod;
	const updatedEstoq: Estoq = req.body;
    try {
		await database.Estoq.update(updatedEstoq, { where: { "it-codigo": it_codigo } })
        return res.status(200).json({ message: `Estoq cod "${it_codigo}" Updated`});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
