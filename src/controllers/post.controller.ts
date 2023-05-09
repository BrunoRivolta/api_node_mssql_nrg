import { Request, Response } from 'express'
import { Post } from '../interface/Post'
//@ts-ignore
import database from '../models'

export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try {
        const posts = await database.Post.findAll()
        if(posts.length === 0) {
            return res.status(204).json();
        } else {
            return res.status(200).json(posts);
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function createPost(req: Request, res: Response) {
	const newPost: Post = req.body;
    try {
		await database.Post.create(newPost)
        return res.status(200).json({ message: 'New Post Created'});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function getPost(req: Request, res: Response) {
	const id = req.params.postId;
    try {
		const post = await database.Post.findAll({ where: { "_id": id } })
        return res.status(200).json(post[0])
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function deletePost(req: Request, res: Response) {
	const id = req.params.postId;
    try {
		await database.Post.destroy( {where: { "_id": id } })
        return res.status(200).json({ message: `Post id "${id}" deleted` })
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}

export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
	const updatedPost: Post = req.body;
    try {
		await database.Post.update(updatedPost, { where: { "_id": id } })
        return res.status(200).json({ message: `Post id "${id}" Updated`});
    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error!');
    }
}
