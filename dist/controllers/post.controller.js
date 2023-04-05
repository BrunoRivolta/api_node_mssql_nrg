"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPost = exports.createPost = exports.getPosts = void 0;
// DB
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const database = yield (0, database_1.getdata)();
            const post = yield database.request().query('SELECT * FROM O_POST');
            return res.status(200).json(post.recordset);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getPosts = getPosts;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, description, created_at = new Date() } = req.body;
            const database = yield (0, database_1.getdata)();
            const newPost = yield database
                .request()
                .input("title", database_1.sql.VarChar, title)
                .input("description", database_1.sql.VarChar, description)
                .input("created_at", database_1.sql.Date, created_at)
                .query('INSERT INTO O_POST (title, description, created_at) VALUES (@title, @description, @created_at)');
            return res.status(200).json({ message: 'New Post Created' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.createPost = createPost;
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.postId;
            const database = yield (0, database_1.getdata)();
            const post = yield database.request().query(`SELECT * FROM O_POST WHERE id = ${id}`);
            return res.status(200).json(post.recordset[0]);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.getPost = getPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.postId;
            const database = yield (0, database_1.getdata)();
            const post = yield database.request().query(`DELETE FROM O_POST WHERE id = ${id}`);
            return res.status(200).json({ message: `Post item_id "${id}" deleted` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.postId;
            const { title, description } = req.body;
            if ((title == null || description == null)) {
                return res.status(400).json({ msg: "Please fill all fields" });
            }
            const database = yield (0, database_1.getdata)();
            const newPost = yield database
                .request()
                .input("title", database_1.sql.VarChar, title)
                .input("description", database_1.sql.VarChar, description)
                .query(`UPDATE O_POST SET title = @title, description = @description WHERE id = ${id}`);
            return res.status(200).json({ message: 'Post Updated' });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updatePost = updatePost;
