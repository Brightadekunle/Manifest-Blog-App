'use strict';
const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    post_title: DataTypes.STRING,
    post_body: DataTypes.STRING,
  });
  
  Post.associate = (models) => {
    models.Post.hasMany(models.Category)
    models.Post.hasMany(models.Comment)
    models.Post.belongsTo(models.Author)
  }
  return Post;
};

// Make sure you complete other models fields