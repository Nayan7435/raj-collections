import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, enum: ["Men", "Women", "Kids"] },
    price: { type: Number, required: true, min: 0 },
    mrp: { type: Number, required: true, min: 0 },
    sizes: { type: [String], default: [] },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
