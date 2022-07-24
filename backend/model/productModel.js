const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Product Name"],
    trim: true,
  },
  title: {
    type: String,
    required: [true, "Please Enter the Title"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the Product Description"],
  },
  brand: {
    type: String,
    required: [true, "please Enter the Brand name"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter the Stock"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Price"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
    
      url: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      color: {
        type: String,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
