const { Router } = require("express");
const Book = require("../models/").book;
const Category = require("../models/").category;
const Review = require("../models/").review;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/books", async (req, res) => {
  try {
    const books = await Book.findAll({
        include: [Review, Category],
      order: [["name", "ASC"]],
    });

    return res.status(200).send(books);
  } catch (error) {
    console.error("Error message: ", error.message);
    return res
      .status(500)
      .send({ message: "something went wrong within the server" });
  }
});

module.exports = router;
