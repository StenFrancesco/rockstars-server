"use strict";

const Orders = require("../models").order;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const orders = await Promise.all([
      Orders.upsert({
        order_placed: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Orders.upsert({
        order_placed: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      // Orders.upsert({
      //   order_placed: true,
      //   userId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }),
      // Orders.upsert({
      //   order_placed: false,
      //   userId: 2,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }),
      // Orders.upsert({
      //   order_placed: true,
      //   userId: 3,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  },
};
