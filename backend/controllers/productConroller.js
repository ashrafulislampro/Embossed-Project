const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorhander");


// Geting all product
exports.getAllProducts =  (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    message: "Product Got Successfully",
    product,
  });
};

// Creating Product

exports.createProduct = async (req, res, next) => {
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

// Geting Product Details
exports.getProoductDetails = async (req, res, next) => {



  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler  ("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
};


// Updating Product
exports.updateProduct=async(req,res,next)=>{

}

