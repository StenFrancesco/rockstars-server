const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Book = require("../models").book;
const Order = require("../models").order;
const OrderDetail = require("../models").orderDetail;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: [
        {
          model: Order,
          include: [{ model: OrderDetail, include: [{ model: Book }] }],
        },
      ],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: "Something went wrong, sorry", error });
  }
});

router.post("/signup", async (req, res) => {
  console.log("request body", req.body);
  const {
    firstName,
    lastName,
    phone,
    email,
    password,
    street,
    postalCode,
    houseNumber,
    city,
    country,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !phone ||
    !email ||
    !password ||
    !street ||
    !postalCode ||
    !houseNumber ||
    !city ||
    !country
  ) {
    return res.status(400).send("Please provide all fields!");
  }

  try {
    const newUser = await User.create({
      first_name: firstName,
      last_name: lastName,
      phone,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      street,
      postal_code: postalCode,
      house_number: houseNumber,
      city,
      country,
      isAdmin: false,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const order = await Order.create({
      order_placed: false,
      userId: newUser.id,
    });

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues, order });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({
      message: `Something went wrong, sorry
      ${error}
      `,
    });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

router.post("/add-book-detail", authMiddleware, async (req, res) => {
  const { orderId, bookId, quantity, unitPrice } = req.body;

  if (!orderId || !bookId) {
    res.status(400).send({
      message: "Something went wrong, sorry.",
    });
  }

  try {
    const newOrderDetail = await OrderDetail.create({
      bookId,
      orderId,
      quantity,
      unitPrice,
    });
    res.status(201).send({ newOrderDetail });
  } catch (e) {
    return res.status(500).send({
      message: "Sorry, something went wrong on the server.",
    });
  }
});

router.patch("/checkout", authMiddleware, async (req, res) => {
  const { orderId } = req.body;

  if (!orderId) {
    res.status(400).send({
      message: "There is no order!",
    });
  }

  try {
    const currentOrder = await Order.findByPk(orderId);
    console.log("This is the current order", currentOrder);

    await currentOrder.update({ order_placed: true });

    const order = await Order.create({
      order_placed: false,
      userId: req.user.id,
    });
    res.status(201).send({ order });
  } catch (e) {
    return res.status(500).send({
      message: "Sorry, something went wrong with the server.",
    });
  }
});

module.exports = router;
