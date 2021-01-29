'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    title: DataTypes.STRING
  });
  
  Comment.associate = (models) => {
    models.Comment.belongsTo(models.User)
    models.Comment.belongsTo(models.Post)
  }

  return Comment;
};

// Make sure you complete other models fields