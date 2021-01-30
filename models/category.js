'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  });
  
  Category.associate = (models) => {
    models.Category.hasMany(models.Post)
  }

  return Category;
};

// Make sure you complete other models fields