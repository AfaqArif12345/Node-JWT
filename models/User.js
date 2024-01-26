const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter an password"],
    minlength: [6, "Minimun password length is 6 characters"],
  },
});

userSchema.pre("save", function (next) {
  console.log("user about to be save : ", this);
  next();
});

userSchema.post("save", function (doc, next) {
  console.log("user user was created and saved : ", doc);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
