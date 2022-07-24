const cathcAsyncErrors = require("../middleware/cathcAsyncErrors");
const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorhander");

// Geting all product
exports.getAllProducts = cathcAsyncErrors(async (req, res, next) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    message: "Product Got Successfully",
    product,
  });
});

// Creating Product
exports.createProduct = cathcAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    message: "product added",
    product,
  });
});

// Geting Product Details
exports.getProoductDetails = cathcAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// Updating Product
exports.updateProduct =cathcAsyncErrors(async(req,res,next)=>{
  res.status(200).json({
    success:true,
    message:"Hi am workin"
  })
})
