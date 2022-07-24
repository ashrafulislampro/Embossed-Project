const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getAllUsers,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);

// Users routes

router.route("/admin/users").get(getAllUsers);

module.exports = router;
