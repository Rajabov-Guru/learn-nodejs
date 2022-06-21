'use strict';
import {Model} from 'sequelize';


module.exports= (sequelize, DataTypes) => {
  class User extends Model {
    
  }
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
    // classMethods: {
    //   associate: function(models) {
    //     User.hasMany(models['Post']);
    //   }
    // }
  });

  return User;
};