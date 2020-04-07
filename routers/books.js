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

// router.post("/category", authMiddleware, async (req, res) => {
//   const { name, libraryId } = req.body;
//   if (!name || !libraryId) {
//     return res.status(400).send("Something went wrong with the input, sorry");
//   }

//   try {
//     const newCategory = await Category.create({
//       name,
//       libraryId,
//     });

//     return res.status(200).send(newCategory);
//   } catch (error) {
//     console.error("Error message: ", error.message);
//     return res
//       .status(500)
//       .send({ message: "something went wrong within the server" });
//   }
// });

module.exports = router;
