"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
      },
    },
    {}
  );
  review.associate = function (models) {
    review.belongsTo(models.user);
    review.belongsTo(models.book);
  };
  return review;
};
