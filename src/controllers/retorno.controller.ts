import { Request, Response } from 'express'

// DB
import { getdata, sql } from '../database'

// Interfaces
import { Retorno } from '../interface/Retorno'

export async function getRetornos(req: Request, res: Response): Promise<Response | void> {
    try {
        const database: undefined | any = await getdata()
        const retorno = await database.request().query('SELECT * FROM O_RETORNO')
        return res.status(200).json(retorno.recordset);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createRetorno(req: Request, res: Response) {
    try {
        const { 
            cod_ret, 
            mensagem,
        }: Retorno = req.body;
    
        const database: undefined | any = await getdata()
        const newRetorno = await database
            .request()
            .input("cod_ret", sql.VarChar, cod_ret)
            .input("mensagem", sql.VarChar, mensagem)
            .query('INSERT INTO O_RETORNO (cod_ret, mensagem) VALUES (@cod_ret, @mensagem)')
        
        return res.status(200).json({ message: 'New Retorno Created'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getRetorno(req: Request, res: Response) {
    try {
        const id = req.params.retornolId;
        const database: undefined | any = await getdata()
        const retorno = await database.request().query(`SELECT * FROM O_RETORNO WHERE id_lote = ${id}`)
        return res.status(200).json(retorno.recordset[0])
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteRetorno(req: Request, res: Response) {
    try {
        const id = req.params.retornolId;
        const database: undefined | any = await getdata()
        const retorno = await database.request().query(`DELETE FROM O_RETORNO WHERE id_lote = ${id}`)
        return res.status(200).json({ message: `Retorno id_lote "${id}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateRetorno(req: Request, res: Response) {
    try {
        const id = req.params.retornolId;
        const { cod_ret, mensagem }: Retorno = req.body;
    
        if((cod_ret == null || mensagem == null)) {
            return res.status(400).json({ msg: "Please fill all fields" })
        }

        const database: undefined | any = await getdata()
        const newRetorno = await database
            .request()
            .input("cod_ret", sql.VarChar, cod_ret)
            .input("mensagem", sql.VarChar, mensagem)
            .query(`UPDATE O_RETORNO SET cod_ret = @cod_ret, mensagem = @mensagem WHERE id_lote = ${id}`)
        
        return res.status(200).json({ message: 'RETURN Updated'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
