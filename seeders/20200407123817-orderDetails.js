"use strict";

const OrderDetails = require("../models").orderDetail;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const books = await Promise.all([
      OrderDetails.upsert({
        bookId: 1,
        orderId: 1,
        quantity: 2,
        unitPrice: 9.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      OrderDetails.upsert({
        bookId: 2,
        orderId: 2,
        quantity: 1,
        unitPrice: 29.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      OrderDetails.upsert({
        bookId: 2,
        orderId: 3,
        quantity: 1,
        unitPrice: 30.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      OrderDetails.upsert({
        bookId: 3,
        orderId: 4,
        quantity: 1,
        unitPrice: 14.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      OrderDetails.upsert({
        bookId: 3,
        orderId: 5,
        quantity: 2,
        unitPrice: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orderDetails", null, {});
  },
};
