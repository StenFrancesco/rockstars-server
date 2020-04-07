"use strict";

const Reviews = require("../models").review;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const reviews = await Promise.all([
      Reviews.upsert({
        bookId: 1,
        rating: 5,
        comment: "BlaBlaBla",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Reviews.upsert({
        bookId: 2,
        rating: 5,
        comment: "hihih",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Reviews.upsert({
        bookId: 3,
        rating: 3,
        comment: "haha",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Reviews.upsert({
        bookId: 2,
        rating: 4,
        comment: "hohoho",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("reviews", null, {});
  },
};
