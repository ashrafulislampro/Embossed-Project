const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProoductDetails,
} = require("../controllers/productConroller");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/products/:id").get(getProoductDetails);

module.exports = router;
