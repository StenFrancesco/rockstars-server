const { Router } = require("express")
const Category = require("../models").category

const router = new Router();


router.get("/", async (req, res, next) => {
  const allCategories = await Category.findAll();
  res.status(200).send({ message: "categories sent", allCategories })
})

module.exports = router;