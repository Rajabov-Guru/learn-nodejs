'use strict';
import {Model} from 'sequelize';

module.exports= (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  }
  Post.init(
    {
        title: DataTypes.STRING,
        text: DataTypes.TEXT,
        // userId: DataTypes.INTEGER,
        
    }, 
    {
        sequelize,
        modelName: 'Post',
        // classMethods: {
        //     associate: function(models) {
        //         Post.belongsTo(models['User'], {foreignKey: userId});
        //     }
        // }
  });


  return Post;
};