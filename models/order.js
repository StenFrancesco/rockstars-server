"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      order_placed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {}
  );
  order.associate = function (models) {
    order.belongsTo(models.user);
    order.belongsToMany(models.book, {
      through: "orderDetail",
      foreignKey: "orderId",
    });
  };
  return order;
};
