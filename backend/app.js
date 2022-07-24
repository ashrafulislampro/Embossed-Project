const express = require("express");
const app = express();
const connectDb = require("./config/dataBase");
const products = require("./routes/productRoutes");
const cookieParser = require("cookie-parser");
// Midleware
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
// Database Connection
connectDb();
// Routes
app.use("/api/v1", products);

// Middleware for Errors
module.exports = app;
