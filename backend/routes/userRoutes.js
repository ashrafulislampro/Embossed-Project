const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getAllUsers,
  getUserDetails,
  updateUserProfile,
  deleteUsers,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

// Users routes

router.route("/admin/users").get(getAllUsers);
router
  .route("/admin/users/:id")
  .get(getUserDetails)
  .put(updateUserProfile)
  .delete(deleteUsers);

module.exports = router;
