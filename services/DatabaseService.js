const db = require('../models/index');
const User =  db.User;
const Post = db.Post;

class DatabaseService {

    associate(){

        User.hasMany(Post);
        Post.belongsTo(User);

        // User.hasMany(Comment);
        // Comment.belongsTo(User);

        // Post.hasMany(Comment);
        // Comment.belongsTo(Post);
    }

    sync(options){
        db.sequelize.sync(options);  
    }
}


export default new DatabaseService();