"use strict";

const Category = require("../models").category;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await Promise.all([
      Category.upsert({
        name: "Fiction",
        imageUrl:
          "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/WL_FlyingH.jpg?itok=uJ3BKhho",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Category.upsert({
        name: "War",
        imageUrl:
          "https://cdn.vox-cdn.com/thumbor/RF24goRngrLnaDqoHG7TmbAfT-0=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/66072452/image2.0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Category.upsert({
        name: "Poetry",
        imageUrl:
          "https://media.daysoftheyear.com/20171223120723/poetry-month1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Category.upsert({
        name: "Crime",
        imageUrl:
          "https://1.bp.blogspot.com/-QA2IrTGaSUA/T0NvdXWFFYI/AAAAAAAAAGg/UWogxjxbCoQ/s1600/crimescene.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Category.upsert({
        name: "Cooking",
        imageUrl:
          "https://hhp-blog.s3.amazonaws.com/2018/08/iStock-891629998.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      Category.upsert({
        name: "Diet",
        imageUrl:
          "https://images.agoramedia.com/everydayhealth/gcms/Mediterranean-Diet-Food-List-Meal-Plan-722x406.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
