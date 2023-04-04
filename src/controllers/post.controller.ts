import { Request, Response } from 'express'

// DB
import { getdata, sql } from '../database';

// Interfaces
import { Post } from '../interface/Post'

export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try {
        const database: undefined | any = await getdata()
        const post = await database.request().query('SELECT * FROM O_POST')
        return res.status(200).json(post.recordset);
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createPost(req: Request, res: Response) {
    try {
        const { 
            title, 
            description,
            created_at = new Date()
        }: Post = req.body;
    
        const database: undefined | any = await getdata()
        const newPost = await database
            .request()
            .input("title", sql.VarChar, title)
            .input("description", sql.VarChar, description)
            .input("created_at", sql.Date, created_at)
            .query('INSERT INTO O_POST (title, description, created_at) VALUES (@title, @description, @created_at)')
        
        return res.status(200).json({ message: 'New Post Created'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getPost(req: Request, res: Response) {
    try {
        const id = req.params.postId;
        const database: undefined | any = await getdata()
        const post = await database.request().query(`SELECT * FROM O_POST WHERE id = ${id}`)
        return res.status(200).json(post.recordset[0])
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deletePost(req: Request, res: Response) {
    try {
        const id = req.params.postId;
        const database: undefined | any = await getdata()
        const post = await database.request().query(`DELETE FROM O_POST WHERE id = ${id}`)
        return res.status(200).json({ message: `Post item_id "${id}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updatePost(req: Request, res: Response) {
    try {
        const id = req.params.postId;
        const { title, description}: Post = req.body;
    
        if((title == null || description == null)) {
            return res.status(400).json({ msg: "Please fill all fields" })
        }

        const database: undefined | any = await getdata()
        const newPost = await database
            .request()
            .input("title", sql.VarChar, title)
            .input("description", sql.VarChar, description)
            .query(`UPDATE O_POST SET title = @title, description = @description WHERE id = ${id}`)
        
        return res.status(200).json({ message: 'Post Updated'});

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}