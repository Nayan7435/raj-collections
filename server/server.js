import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Raj Collection API chal raha hai");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
