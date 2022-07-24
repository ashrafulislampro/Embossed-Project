const Product = require("../model/productModel");

exports.getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    message: "Product Got Successfully",
    product,
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


exports.getProoductDetails=async(req,res)=>{
  
}