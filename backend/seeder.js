import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users";
import products from "./data/products";
import User from "./models/userModel";
import Product from "./models/productModel";
import Order from "./models/orderModel";
import connectDB from "./config/db.js";

dotenv.confiig();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUser[0]._id;
  } catch (error) {}
};
