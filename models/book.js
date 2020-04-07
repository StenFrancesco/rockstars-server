"use strict";
module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define(
    "book",
    {
      ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price_percentage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  book.associate = function (models) {
    book.hasMany(models.review);
    book.belongsTo(models.category);
    book.belongsToMany(models.order, {
      through: "orderDetail",
      foreignKey: "bookId",
    });
  };
  return book;
};
