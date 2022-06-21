const db = require('../models/index');
const User = db.User;

class UserService{
    async all(){
        const users = await User.findAll();
        return users;
    }

    //get user
    async getOne(id){
        if(!id){
            throw new Error('Id не указан');
        }
        const user =  await User.findByPk(id);
        console.log(User);
        return user;
    }

    //create
    async create(user){
        const createdUser = await User.create(user);
        return createdUser;
    }

    //update
    async update(user){
        if(!user.id){
            throw new Error('Id не указан');
        }
        const updatedUser = await User.update(user,{
            where:{
                id:user.id,
            }
        });

        return updatedUser;
    }

    //delete
    async delete(id){
        if(!id){
            throw new Error('Id не указан');
        }
        User.destroy({
            where:{
                id: id,
            }
        });
    }

    async posts(user){
        if(!user.id){
            throw new Error('Id не указан');
        }
        const posts = user.getPosts();
        return posts;
    }
}

export default new UserService();