import { Request, Response } from 'express'
import { Texto } from '../interface/Texto'
//@ts-ignore
import database from '../models'

export async function getTextos(req: Request, res: Response): Promise<Response | void> {
    try {
        const textos = await database.Texto.findAll()
        if(textos.length === 0) {
            return res.status(204).json();
        } else {
            return res.status(200).json(textos);
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createTexto(req: Request, res: Response) {
	const newTexto: Texto = req.body;
    try {
		await database.Texto.create(newTexto)
        return res.status(200).json({ message: 'New Texto Created'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getTexto(req: Request, res: Response) {
	const textoMaterial = req.params.material;
	console.log(textoMaterial)
    try {
		const texto = await database.Texto.findAll({ where: { "material": textoMaterial } })
        return res.status(200).json(texto)
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteTexto(req: Request, res: Response) {
	const textoMaterial = req.params.material;
    try {
		await database.Texto.destroy( {where: { "material": textoMaterial } })
        return res.status(200).json({ message: `Texto material "${textoMaterial}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateTexto(req: Request, res: Response) {
	const textoMaterial = req.params.material;
	const updatedTexto: Texto = req.body;
    try {
		await database.Texto.update(updatedTexto, { where: { "material": textoMaterial } })
        return res.status(200).json({ message: 'Texto Updated'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
