import { Request, Response } from 'express'
import { getdata, sql } from '../database'
import { Item } from '../interface/Item';

export async function getItens(req: Request, res: Response): Promise<Response | void> {
    try {
        const database: undefined | any = await getdata()
        const itens = await database.request().query('SELECT * FROM O_ITENS')
        if(itens.recordset.length === 0) {
            return res.status(204).json();
        } else {
            return res.status(200).json(itens.recordset);
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createItem(req: Request, res: Response) {
    try {
        const newItem: Item = req.body;
        if((newItem['estab'] == null || newItem['it-codigo'] == null || newItem['desc-item'] == null || newItem['tp-contr-estoque'] == null || newItem['fm-codigo'] == null || newItem['descricao'] == null || newItem['desc-ge'] == null || newItem['ge-codigo'] == null || newItem.narrativa == null || newItem.situacao == null || newItem['preco-base'] == null || newItem['preco-ul-ent'] == null || newItem['val-unit-mat'] == null || newItem['preco-medio'] == null || newItem['ind-processado'] == null || newItem['ind-alter'] == null)) {
            return res.status(400).json({ msg: "Please fill all fields" })
        }
        const database: undefined | any = await getdata()
        const item = await database
            .request()
            .input("estab", sql.VarChar, newItem.estab)
            .input("it_codigo", sql.Int, newItem['it-codigo'])
            .input("desc_item", sql.VarChar, newItem['desc-item'])
            .input("tp_contr_estoque", sql.Bit, newItem['tp-contr-estoque'])
            .input("fm_codigo", sql.VarChar, newItem['fm-codigo'])
            .input("descricao", sql.VarChar, newItem.descricao)
            .input("desc_ge", sql.VarChar, newItem['desc-ge'])
            .input("ge_codigo", sql.Int, newItem['ge-codigo'])
            .input("narrativa", sql.VarChar, newItem.narrativa)
            .input("situacao", sql.Int, newItem.situacao)
            .input("preco_base", sql.Float, newItem['preco-base'])
            .input("preco_ul_ent", sql.Int, newItem['preco-ul-ent'])
            .input("val_unit_mat", sql.Float, newItem['val-unit-mat'])
            .input("preco_medio", sql.Float, newItem['preco-medio'])
            .input("ind_processado", sql.Int, newItem['ind-processado'])
            .input("ind_alter", sql.Int, newItem['ind-alter'])
            .query('INSERT INTO O_ITENS ("estab", "it-codigo", "desc-item", "tp-contr-estoque", "fm-codigo", "descricao", "desc-ge", "ge-codigo", "narrativa", "situacao", "preco-base", "preco-ul-ent", "val-unit-mat", "preco-medio", "ind-processado", "ind-alter") VALUES (@estab, @it_codigo, @desc_item, @tp_contr_estoque, @fm_codigo, @descricao, @desc_ge, @ge_codigo, @narrativa, @situacao, @preco_base, @preco_ul_ent, @val_unit_mat, @preco_medio, @ind_processado, @ind_alter)')
        return res.status(200).json({ message: 'New Item Created'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getItem(req: Request, res: Response) {
    try {
        const estab = req.params.estab;
        const database: undefined | any = await getdata()
        const item = await database.request().query(`SELECT * FROM O_ITENS WHERE "estab" = '${estab}'`)
        return res.status(200).json(item.recordset[0])
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deleteItem(req: Request, res: Response) {
    try {
        const estab = req.params.estab;
        const database: undefined | any = await getdata()
        const item = await database.request().query(`DELETE FROM O_ITENS WHERE "estab" = '${estab}'`)
        return res.status(200).json({ message: `Item estab "${estab}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updateItem(req: Request, res: Response) {
    try {
        const estab = req.params.estab;
        const newItem: Item = req.body;

        if((newItem['estab'] == null || newItem['it-codigo'] == null || newItem['desc-item'] == null || newItem['tp-contr-estoque'] == null || newItem['fm-codigo'] == null || newItem['descricao'] == null || newItem['desc-ge'] == null || newItem['ge-codigo'] == null || newItem.narrativa == null || newItem.situacao == null || newItem['preco-base'] == null || newItem['preco-ul-ent'] == null || newItem['val-unit-mat'] == null || newItem['preco-medio'] == null || newItem['ind-processado'] == null || newItem['ind-alter'] == null)) {
            return res.status(400).json({ msg: "Please fill all fields" })
        }

        const database: undefined | any = await getdata()
        const item = await database
            .request()
            .input("estab", sql.VarChar, newItem.estab)
            .input("it_codigo", sql.Int, newItem['it-codigo'])
            .input("desc_item", sql.VarChar, newItem['desc-item'])
            .input("tp_contr_estoque", sql.Bit, newItem['tp-contr-estoque'])
            .input("fm_codigo", sql.VarChar, newItem['fm-codigo'])
            .input("descricao", sql.VarChar, newItem.descricao)
            .input("desc_ge", sql.VarChar, newItem['desc-ge'])
            .input("ge_codigo", sql.Int, newItem['ge-codigo'])
            .input("narrativa", sql.VarChar, newItem.narrativa)
            .input("situacao", sql.Int, newItem.situacao)
            .input("preco_base", sql.Float, newItem['preco-base'])
            .input("preco_ul_ent", sql.Int, newItem['preco-ul-ent'])
            .input("val_unit_mat", sql.Float, newItem['val-unit-mat'])
            .input("preco_medio", sql.Float, newItem['preco-medio'])
            .input("ind_processado", sql.Int, newItem['ind-processado'])
            .input("ind_alter", sql.Int, newItem['ind-alter'])
            .query(`UPDATE O_ITENS SET "estab" = @estab, "it-codigo" = @it_codigo, "desc-item" = @desc_item, "tp-contr-estoque" = @tp_contr_estoque, "fm-codigo" = @fm_codigo, "descricao" = @descricao, "desc-ge" = @desc_ge, "ge-codigo" = @ge_codigo, "narrativa" = @narrativa, "situacao" = @situacao, "preco-base" = @preco_base, "preco-ul-ent" = @preco_ul_ent, "val-unit-mat" = @val_unit_mat, "preco-medio" = @preco_medio, "ind-processado" = @ind_processado, "ind-alter" = @ind_alter WHERE "estab" = '${estab}'`)
        
        return res.status(200).json({ message: 'Item Updated'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
