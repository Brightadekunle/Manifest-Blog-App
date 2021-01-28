'use strict';
const sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    post_title: DataTypes.STRING,
    post_body: DataTypes.STRING,
  });
  return Post;
};

// Make sure you complete other models fields