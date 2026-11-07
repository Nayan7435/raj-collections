import "dotenv/config";
import mongoose from "mongoose";
import Product from "./models/Product.js";

const products = [
  {
    name: "Classic White Tee",
    category: "Men",
    price: 499,
    mrp: 799,
    sizes: ["S", "M", "L", "XL"],
    image: "https://placehold.co/600x800?text=White+Tee",
  },
  {
    name: "Denim Jacket",
    category: "Men",
    price: 1799,
    mrp: 2499,
    sizes: ["M", "L", "XL"],
    image: "https://placehold.co/600x800?text=Denim+Jacket",
  },
  {
    name: "Floral Summer Dress",
    category: "Women",
    price: 1299,
    mrp: 1999,
    sizes: ["S", "M", "L"],
    image: "https://placehold.co/600x800?text=Summer+Dress",
  },
  {
    name: "Cotton Kurti Set",
    category: "Women",
    price: 999,
    mrp: 1499,
    sizes: ["S", "M", "L", "XL"],
    image: "https://placehold.co/600x800?text=Kurti+Set",
  },
  {
    name: "Kids Graphic Tee",
    category: "Kids",
    price: 349,
    mrp: 549,
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    image: "https://placehold.co/600x800?text=Kids+Tee",
  },
  {
    name: "Kids Dungaree",
    category: "Kids",
    price: 799,
    mrp: 1199,
    sizes: ["2-3Y", "4-5Y"],
    image: "https://placehold.co/600x800?text=Dungaree",
  },
];

await mongoose.connect(process.env.MONGO_URI);
await Product.deleteMany();
await Product.insertMany(products);
console.log(`${products.length} products add ho gaye`);
await mongoose.disconnect();