const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");

//db connection

const dbURI =
  "mongodb+srv://" +
  process.env.USER_NAME +
  ":" +
  process.env.PASSWORD +
  "@cluster1.pzzkepq.mongodb.net/node-jwt-tutorial-1";

mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(3000, () => console.log("listening at port 3000"))
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/smoothies", (req, res) => {
  res.render("smoothies");
});
app.use(authRoutes);
