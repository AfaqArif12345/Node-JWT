const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

//db connection

const dbURI =
  "mongodb+srv://muhammadafaqarif97:ABR5Jar8t1wtq1Za@cluster1.pzzkepq.mongodb.net/node-jwt-tutorial-1";

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
