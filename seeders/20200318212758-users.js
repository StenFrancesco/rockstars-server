"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

const User = require("../models").user;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await Promise.all([
      User.upsert({
        first_name: "Colin",
        last_name: "Stringer",
        street: "Naratiweg",
        postal_code: "4532PM",
        house_number: "19A",
        city: "Amsterdam",
        country: "Netherland",
        phone: 53723324,
        isAdmin: true,
        email: "test@gmail.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      User.upsert({
        first_name: "Sten",
        last_name: "Francesco",
        street: "Naratiweg",
        postal_code: "4820PM",
        house_number: "30",
        city: "Amsterdam",
        country: "Netherland",
        phone: 4758201,
        isAdmin: true,
        email: "hallo@gmail.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      User.upsert({
        first_name: "Petar",
        last_name: "Asenov",
        street: "Naratiweg",
        postal_code: "4323PM",
        house_number: "45",
        city: "Amsterdam",
        country: "Netherland",
        phone: 23948123,
        isAdmin: true,
        email: "vandaag@gmail.com",
        password: bcrypt.hashSync("test1234", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ]);

    console.log(`SEEDED: ${users.length} users`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
