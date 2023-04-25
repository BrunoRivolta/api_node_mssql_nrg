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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPost = exports.createPost = exports.getPosts = void 0;
//@ts-ignore
const models_1 = __importDefault(require("../models"));
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const posts = yield models_1.default.Post.findAll();
            if (posts.length === 0) {
                return res.status(204).json();
            }
            else {
                return res.status(200).json(posts);
            }
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
        const newPost = req.body;
        try {
            yield models_1.default.Post.create(newPost);
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
        const id = req.params.postId;
        try {
            const post = yield models_1.default.Post.findAll({ where: { "_id": id } });
            return res.status(200).json(post);
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
        const id = req.params.postId;
        try {
            yield models_1.default.Post.destroy({ where: { "_id": id } });
            return res.status(200).json({ message: `Post id "${id}" deleted` });
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
        const id = req.params.postId;
        const updatedPost = req.body;
        try {
            yield models_1.default.Post.update(updatedPost, { where: { "_id": id } });
            return res.status(200).json({ message: `Post id "${id}" Updated` });
        }
        catch (err) {
            console.log(err);
            return res.status(500).send('Server error!');
        }
    });
}
exports.updatePost = updatePost;
