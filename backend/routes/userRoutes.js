const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getAllUsers,
  getUserDetails,
} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);

// Users routes

router.route("/admin/users").get(getAllUsers);
router.route("/admin/users/:id").get(getUserDetails);

module.exports = router;
