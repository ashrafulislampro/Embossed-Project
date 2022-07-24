const Product = require("../model/productModel");

exports.getAllProducts = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "It is working fine",
  });
};



exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({
      success: true,
      message: "product added",
      product,
    });
  } catch (error) {
    console.log(error);
  }
};
