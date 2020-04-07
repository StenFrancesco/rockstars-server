"use strict";

const Books = require("../models").book;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const books = await Promise.all([
      Books.upsert({
        ISBN: "978-1644450000",
        name: "Milkman: A Novel",
        author: "Anna Burns",
        description:
          "In an unnamed city, middle sister stands out for the wrong reasons. She reads while walking, for one. And she has been taking French night classes downtown. So when a local paramilitary known as the milkman begins pursuing her, she suddenly becomes “interesting,” the last thing she ever wanted to be. Despite middle sister’s attempts to avoid him―and to keep her mother from finding out about her maybe-boyfriend―rumors spread and the threat of violence lingers. Milkman is a story of the way inaction can have enormous repercussions, in a time when the wrong flag, wrong religion, or even a sunset can be subversive. Told with ferocious energy and sly, wicked humor, Milkman establishes Anna Burns as one of the most consequential voices of our day.",
        price: "7.99",
        imageUrl: "https://m.media-amazon.com/images/I/51IsK7yvamL._SY346_.jpg",
        price_percentage: 100,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-0143132509",
        name:
          "Directorate S: The C.I.A. and America's Secret Wars in Afghanistan and Pakistan",
        author: "Steve Coll",
        description:
          "Prior to 9/11, the United States had been carrying out small-scale covert operations in Afghanistan, ostensibly in cooperation.",
        price: "11.19",
        imageUrl: "https://m.media-amazon.com/images/I/41eUFUanwxL.jpg",
        price_percentage: 100,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Books.upsert({
        ISBN: "978-1476796628",
        name: "Belonging: A German Reckons with History and Home",
        author: "Nora Krug",
        description:
          "In an unnamed city, middle sister stands out for the wrong reasons. She reads while walking, for one. And she has been taking French night classes downtown. So when a local paramilitary known as the milkman begins pursuing her, she suddenly becomes “interesting,” the last thing she ever wanted to be. Despite middle sister’s attempts to avoid him―and to keep her mother from finding out about her maybe-boyfriend―rumors spread and the threat of violence lingers. Milkman is a story of the way inaction can have enormous repercussions, in a time when the wrong flag, wrong religion, or even a sunset can be subversive. Told with ferocious energy and sly, wicked humor, Milkman establishes Anna Burns as one of the most consequential voices of our day.",
        price: "19.29",
        imageUrl: "https://m.media-amazon.com/images/I/51nkh9-lIeL.jpg",
        price_percentage: 100,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  },
};
