const User = require('../models/user');
import UserService  from '../services/UserService';

class UserController {

    //all users
    async getAll(req, res, next){
        try {
            const users = await UserService.all();
            res.json(users);
        } catch(error){
            res.json(error.message);
        }
    }

    //get user
    async getOne(req, res, next){
        try {
            const {id} = req.params;
            const user =  await UserService.getOne(id);
            res.json(user);
        } catch(error){
            res.json(error.message);
        }
    }

    //create
    async create(req, res, next){
        try {
            const user = await UserService.create(req.body);
            res.json(user);
        } catch(error){
            res.json(error.message);
        }
    }

    //update
    async update(req, res, next){
        try{
            const user = req.body;
            const updatedUser = await UserService.update(user);
            res.send(`Пользователь с индексом ${user.id} был изменен`);
        }
        catch(error){
            res.json(error.message);
        }
    }

    //delete
    async delete(req, res, next){
        try{
            const {id} = req.params;
            UserService.delete(id);
            res.send(`Пользователь с индексом ${id} был удален`);
        }
        catch(error){
            res.json(error.message);
        }
    }

    async getPosts(req, res, next){
        try{
            const {id} = req.params;
            const user = await UserService.getOne(id);
            const posts = await UserService.posts(user);
            res.json(posts);
        }
        catch(error){
            res.json(error.message);
        }
    }
}

export default new UserController();