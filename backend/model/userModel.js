const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name can not exced 30 characters"],
    minLength: [4, "Name Should have More than 4 characters"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minLength: [8, "Pasword Should be greater than 8 characters"],
    select: false,
  },
  avater: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Data.now(),
    },
  },
});
