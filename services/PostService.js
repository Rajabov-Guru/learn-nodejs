const db = require('../models/index');
const Post = db.Post;
const User = db.User;

class PostService{
    
    async all(){
        const posts = await Post.findAll();
        return posts;
    }

    //get post
    async getOne(id){
        if(!id){
            throw new Error('Id не указан');
        }
        const post =  await Post.findByPk(id);
        return post;
    }

    //create
    async create(post){
        const createdPost = await Post.create(post);
        return createdPost;
    }

    //update
    async update(post){
        if(!post.id){
            throw new Error('Id не указан');
        }
        const updatedPost = await Post.update(post,{
            where:{
                id:post.id,
            }
        });

        return updatedPost;
    }

    //delete
    async delete(id){
        if(!id){
            throw new Error('Id не указан');
        }
        Post.destroy({
            where:{
                id: id,
            }
        });
    }

    //user
    async user(post){
        if(!post.id){
            throw new Error('Id не указан');
        }
        const user = await post.getUser();
        return user;
    }
}

export default new PostService();