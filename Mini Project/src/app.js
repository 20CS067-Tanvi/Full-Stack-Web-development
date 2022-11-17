const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("tiny"));
const DB = 'mongodb+srv://Tanvi:lock@cluster0.btfqvhy.mongodb.net/pizza-delivery?retryWrites=true&w=majority';

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log("connection successful");
}).catch((err) => console.log("no connnection"));

const productsRouter = require("./routes/products.js");
const usersRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const contactRouter = require("./routes/contact.js");
const newsletterRouter = require("./routes/newsletter.js");
const ordersRouter = require("./routes/orders.js");
const categoriesRouter = require("./routes/categories.js");

app.use("/media", express.static(path.join(__dirname, "storage", "media")));



app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/contact", contactRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/categories", categoriesRouter);

if (process.env.NODE_ENV === "production") {
  const absPath = path.resolve(__dirname, '../frontend', 'build');
  app.use(express.static(absPath));
  app.get("/*", (req, res) => {
    res.sendFile('index.html', { root: absPath });
  });
} else {
  app.use(express.static(path.join(__dirname, "../frontend")));
}

module.exports = app;