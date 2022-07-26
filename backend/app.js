const express = require("express");
const app = express();
const connectDb = require("./config/dataBase");
const products = require("./routes/productRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const users = require("./routes/userRoutes");
// Midleware
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "/.env" });
}
app.use(cors());
app.use(express.json());
app.use(cookieParser());
// Database Connection
connectDb();
// Routes
app.use("/api/v1", users);
app.use("/api/v1", products);

// Middleware for Errors
module.exports = app;
