const User = require("../models/User");

const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let error = { email: "", password: "" };

  //duplicate email
  if (err.code == 11000) {
    error = { email: "Email already exists", password: "" };
  }

  //validation Errors
  else if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach((property) => {
      error[property.properties.path] = property.properties.message;
    });
  }
  return error;
};

module.exports.signup_get = (req, res) => {
  res.send("get signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({
      email,
      password,
    });
    res.status(201).json(user);
  } catch (err) {
    // console.log(error);
    const errors = handleErrors(err);
    res.status(400).send({ msg: "error , user not created", errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("user login");
};
