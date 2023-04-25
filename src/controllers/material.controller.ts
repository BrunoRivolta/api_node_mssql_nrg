import { Request, Response } from 'express'
import { Material } from '../interface/Material'
//@ts-ignore
import database from '../models'

export async function getMaterials(req: Request, res: Response): Promise<Response | void> {
    try {
        const materials = await database.Material.findAll()
        if(materials.length === 0) {
            return res.status(204).json();
        } else {
            return res.status(200).json(materials);
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createMaterial(req: Request, res: Response) {
	const newMaterial: Material = req.body;
    try {
		await database.Material.create(newMaterial)
        return res.status(200).json({ message: 'New Material Created'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getMaterial(req: Request, res: Response) {
	const itemId = req.params.materialId;
    try {
		const material = await database.Material.findAll({ where: { "item_id": itemId } })
        return res.status(200).json(material)
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteMaterial(req: Request, res: Response) {
	const itemId = req.params.materialId;
    try {
		await database.Material.destroy( {where: { "item_id": itemId } })
        return res.status(200).json({ message: `Material id "${itemId}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateMaterial(req: Request, res: Response) {
	const itemId = req.params.materialId;
	const updatedMaterial: Material = req.body;
    try {
		await database.Material.update(updatedMaterial, { where: { "item_id": itemId } })
        return res.status(200).json({ message: `Material id "${itemId}" Updated`});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
