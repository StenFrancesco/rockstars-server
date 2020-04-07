"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderDetail = sequelize.define(
    "orderDetail",
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      unitPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {}
  );
  orderDetail.associate = function (models) {
  };
  return orderDetail;
};
