import { Request, Response } from 'express'

// DB
import { getdata, sql } from '../database'

// Interfaces
import { Texto } from '../interface/Texto'

export async function getTextos(req: Request, res: Response): Promise<Response | void> {
    try {
        const database: undefined | any = await getdata()
        const textos = await database.request().query('SELECT * FROM O_TEXTO')
        return res.status(200).json(textos.recordset);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createTexto(req: Request, res: Response) {
    try {
        const { 
            material, 
            descricao_longa,
        }: Texto = req.body;
    
        const database: undefined | any = await getdata()
        const newTexto = await database
            .request()
            .input("material", sql.VarChar, material)
            .input("descricao_longa", sql.VarChar, descricao_longa)
            .query('INSERT INTO O_TEXTO (material, descricao_longa) VALUES (@material, @descricao_longa)')
        
        return res.status(200).json({ message: 'New Texto Created'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getTexto(req: Request, res: Response) {
    try {
        const id = req.params.textoId;
        const database: undefined | any = await getdata()
        const texto = await database.request().query(`SELECT * FROM O_TEXTO WHERE id = ${id}`)
        return res.status(200).json(texto.recordset[0])
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteTexto(req: Request, res: Response) {
        try {
        const id = req.params.textoId;
        const database: undefined | any = await getdata()
        const texto = await database.request().query(`DELETE FROM O_TEXTO WHERE id = ${id}`)
        return res.status(200).json({ message: `Texto id "${id}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateTexto(req: Request, res: Response) {
    try {
        const id = req.params.textoId;
        const { material, descricao_longa }: Texto = req.body;

        if((material == null || descricao_longa == null)) {
            return res.status(400).json({ msg: "Please fill all fields" })
        }

        const database: undefined | any = await getdata()
        const newTexto = await database
            .request()
            .input("material", sql.VarChar, material)
            .input("descricao_longa", sql.VarChar, descricao_longa)
            .query(`UPDATE O_TEXTO SET material = @material, descricao_longa = @descricao_longa WHERE id = ${id}`)
        
        return res.status(200).json({ message: 'Texto Updated'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
