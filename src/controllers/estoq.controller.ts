import { Request, Response } from 'express'
import { getdata, sql } from '../database'
import { Estoq } from '../interface/Estoq'

export async function getEstoqs(req: Request, res: Response): Promise<Response | void> {
    try {
        const database: undefined | any = await getdata()
        const estoqs = await database.request().query('SELECT * FROM O_ESTOQ')
        if(estoqs.recordset.length === 0) {
            return res.status(204).json();
        } else {
            return res.status(200).json(estoqs.recordset);
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createEstoq(req: Request, res: Response) {
    try {
        const newEstoq: Estoq = req.body;
        if((newEstoq['cod-depos'] == null || newEstoq['cod-estabel'] == null || newEstoq['cod-localiz'] == null || newEstoq['cod-refer'] == null || newEstoq['ind-alter'] == null || newEstoq['ind-processado'] == null || newEstoq['it-codigo'] == null || newEstoq.lote == null || newEstoq['quantidade-atu'] == null)) {
            return res.status(400).json({ msg: "Please fill all fields" })
        }
        const database: undefined | any = await getdata()
        const item = await database
            .request()
            .input("cod_estabel", sql.VarChar, newEstoq['cod-estabel'])
            .input("it_codigo", sql.VarChar, newEstoq['it-codigo'])
            .input("cod_depos", sql.VarChar, newEstoq['cod-depos'])
            .input("cod_localiz", sql.VarChar, newEstoq['cod-localiz'])
            .input("cod_refer", sql.VarChar, newEstoq['cod-refer'])
            .input("lote", sql.VarChar, newEstoq.lote)
            .input("quantidade_atu", sql.Float, newEstoq['quantidade-atu'])
            .input("ind_processado", sql.Int, newEstoq['ind-processado'])
            .input("ind_alter", sql.Int, newEstoq['ind-alter'])
            .query('INSERT INTO O_ESTOQ ("cod-estabel", "it-codigo", "cod-depos", "cod-localiz", "cod-refer", "lote", "quantidade-atu", "ind-processado", "ind-alter") VALUES (@cod_estabel, @it_codigo, @cod_depos, @cod_localiz, @cod_refer, @lote, @quantidade_atu, @ind_processado, @ind_alter)')
        
        return res.status(200).json({ message: 'New Estoq Created'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getEstoq(req: Request, res: Response) {
    try {
        const it_codigo = req.params.itCod;
        const database: undefined | any = await getdata()
        const estoq = await database.request().query(`SELECT * FROM O_ESTOQ WHERE "it-codigo" = '${it_codigo}'`)
        return res.status(200).json(estoq.recordset[0])
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteEstoq(req: Request, res: Response) {
    try {
        const it_codigo = req.params.itCod;
        const database: undefined | any = await getdata()
        const estoq = await database.request().query(`DELETE FROM O_ESTOQ WHERE "it-codigo" = '${it_codigo}'`)
        return res.status(200).json({ message: `Estoq cod "${it_codigo}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateEstoq(req: Request, res: Response) {
    try {
        const it_codigo = req.params.itCod;
        const updatedEstoq: Estoq = req.body;

        if((updatedEstoq['cod-depos'] == null || updatedEstoq['cod-estabel'] == null || updatedEstoq['cod-localiz'] == null || updatedEstoq['cod-refer'] == null || updatedEstoq['ind-alter'] == null || updatedEstoq['ind-processado'] == null || updatedEstoq['it-codigo'] == null || updatedEstoq.lote == null || updatedEstoq['quantidade-atu'] == null)) {
            return res.status(400).json({ msg: "Please fill all fields" })
        }

        const database: undefined | any = await getdata()
        const newEstoq = await database
            .request()
            .input("cod_estabel", sql.VarChar, updatedEstoq['cod-estabel'])
            .input("it_codigo", sql.VarChar, updatedEstoq['it-codigo'])
            .input("cod_depos", sql.VarChar, updatedEstoq['cod-depos'])
            .input("cod_localiz", sql.VarChar, updatedEstoq['cod-localiz'])
            .input("cod_refer", sql.VarChar, updatedEstoq['cod-refer'])
            .input("lote", sql.VarChar, updatedEstoq.lote)
            .input("quantidade_atu", sql.Float, updatedEstoq['quantidade-atu'])
            .input("ind_processado", sql.Int, updatedEstoq['ind-processado'])
            .input("ind_alter", sql.Int, updatedEstoq['ind-alter'])
            .query(`UPDATE O_ESTOQ SET "cod-estabel" = @cod_estabel, "it-codigo" = @it_codigo, "cod-depos" = @cod_depos, "cod-localiz" = @cod_localiz, "cod-refer" = @cod_refer, "lote" = @lote, "quantidade-atu" = @quantidade_atu, "ind-processado" = @ind_processado, "ind-alter" = @ind_alter WHERE "it-codigo" = ${it_codigo}`)
        
        return res.status(200).json({ message: 'Estoq Updated'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
