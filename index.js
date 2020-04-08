const express = require("express");
const app = express();

const loggerMiddleWare = require("morgan");
app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

const authRouter = require("./routers/auth");
app.use("/", authRouter);

const categoryRouter = require("./routers/homepage");
app.use("/category", categoryRouter)

const booksRouter = require("./routers/books");
app.use("/", booksRouter);

const { PORT } = require("./config/constants");

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
