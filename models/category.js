"use strict";
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false
      },
    },
    {}
  );
  category.associate = function (models) {
    category.hasMany(models.book);
  };
  return category;
};
