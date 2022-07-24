const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/cathcAsyncErrors");
const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");
// Registar Users

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is my sample id",
      url: "this my demo url",
    },
  });
  sendToken(user, 201, res);
});

// Login

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //   Checking if User  has given  password and email login

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email and password", 401));
  }

  sendToken(user, 200, res);
});

// Logout Users

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Geting user Details
