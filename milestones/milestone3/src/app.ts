import express from "express";
import cors from "cors";
import pool from "./db/database";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/products", productRoutes);

const PORT = 3000;

// Health check route
app.get("/", (req, res) => {
  res.send("CST 391 Milestone 3 API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  pool.getConnection()
    .then(conn => {
      console.log("MySQL database connected");
      conn.release();
    })
    .catch(err => {
      console.error("Database connection failed:", err);
    });
});

