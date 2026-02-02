import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import logger from "./middleware/logger.middleware";
import albumsRouter from "./albums/albums.routes";
import artistsRouter from "./artists/artists.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// logger middleware
app.use(logger);

// Parse JSON bodies
app.use(express.json());

// Parse URL encoded bodies
app.use(express.urlencoded({ extended: true }));

// Allow cross origin requests
app.use(cors());

// Security headers
app.use(helmet());

// Routers
app.use("/", [albumsRouter, artistsRouter]);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(process.env.GREETING);
});
