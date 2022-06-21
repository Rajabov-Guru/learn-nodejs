const Post = require('../models/post');
import PostService  from '../services/PostService';

class PostController {

    //all Posts
    async getAll(req, res, next){
        try {
            const posts = await PostService.all();
            res.json(posts);
        } catch(error){
            res.json(error.message);
        }
    }

    //get Post
    async getOne(req, res, next){
        try {
            const {id} = req.params;
            const post =  await PostService.getOne(id);
            res.json(post);
        } catch(error){
            res.json(error.message);
        }
    }

    //create
    async create(req, res, next){
        try {
            const post = await PostService.create(req.body);
            res.json(post);
        } catch(error){
            res.json(error.message);
        }
    }

    //update
    async update(req, res, next){
        try{
            const post = req.body;
            if(!post.id){
                res.status(400).json({message: 'Id не указан'});
            }
            const updatedPost = await PostService.update(post);
        
            res.send(`Статья с индексом ${post.id} была изменена`);
        }
        catch(error){
            res.json(error.message);
        }
    }

    //delete
    async delete(req, res, next){
        try{
            const {id} = req.params;
            PostService.delete(id);
            res.send(`Статья с индексом ${id} была удалена`);
        }
        catch(error){
            res.json(error.message);
        }
    }

    async getUser(req, res, next){
        try{
            const {id} = req.params;
            const post = await PostService.getOne(id);
            const user = await PostService.user(post);
            res.json(user);
        }
        catch(error){
            res.json(error.message);
        }
    }
}

export default new PostController();