import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddlware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById);

export default router;
