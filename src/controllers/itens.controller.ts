import { Request, Response } from 'express'
import { Item } from '../interface/Item'
//@ts-ignore
import database from '../models'

export async function getItens(req: Request, res: Response): Promise<Response | void> {
    try {
        const items = await database.Item.findAll()
        if(items.length === 0) {
            return res.status(204).json();
        } else {
            return res.status(200).json(items);
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createItem(req: Request, res: Response) {
	const newItem: Item = req.body;
    try {
		await database.Item.create(newItem)
        return res.status(200).json({ message: 'New Item Created'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getItem(req: Request, res: Response) {
	const estab = req.params.estab;
    try {
		const item = await database.Item.findAll({ where: { "estab": estab } })
        return res.status(200).json(item[0])
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteItem(req: Request, res: Response) {
	const estab = req.params.estab;
    try {
		await database.Item.destroy( {where: { "estab": estab } })
        return res.status(200).json({ message: `Item estab "${estab}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateItem(req: Request, res: Response) {
	const estab = req.params.estab;
	const updatedItem: Item = req.body;
    try {
		await database.Item.update(updatedItem, { where: { "estab": estab } })
        return res.status(200).json({ message: `Item estab "${estab}" Updated`});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
