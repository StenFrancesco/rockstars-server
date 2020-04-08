const { Router } = require("express");
const Book = require("../models/").book;
const Category = require("../models/").category;
const Review = require("../models/").review;
const auth = require("../auth/middleware");

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

router.post("/user/add-book",auth, async (req, res) => {
  const {
    ISBN,
    name,
    author,
    description,
    price,
    imageUrl,
    categoryId,
    price_percentage,
    userId
  } = req.body;
  if (!userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to make an auction" });
  }
  if (
    !ISBN ||
    !name ||
    !author ||
    !description ||
    !price ||
    !imageUrl ||
    !categoryId ||
    !price_percentage
  ) {
    return res.status(400).send("Please fill all fields to add a new book");
  }

  try {
    const newBook = await Book.create({
      ISBN,
      name,
      author,
      description,
      price,
      imageUrl,
      categoryId,
      price_percentage,
    });

    res.status(201).json({ newBook });
  } catch (error) {
    console.error("Error message: ", error.message);
    return res
      .status(500)
      .send({ message: "something went wrong within the server" });
  }
});


module.exports = router;
