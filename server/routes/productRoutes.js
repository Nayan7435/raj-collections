import { Router } from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";

const router = Router();

// GET /api/products  -> saare products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Products is not loaded" });
  }
});

// GET /api/products/:id  -> ek product
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Wrong product id" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Product is not loaded" });
  }
});

export default router;
