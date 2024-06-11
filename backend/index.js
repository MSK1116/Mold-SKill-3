import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "../backend/route/book.route.js";
import userRoute from "../backend/route/user.route.js";
import notesRoute from "../backend/route/notesxi.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.port || 3000;
const MONGODBURI = process.env.MONGODBURI;

// connect to mongoDB
try {
  mongoose.connect(MONGODBURI);
  console.log("connected to mongoDB");
} catch (error) {
  console.log("failed", error);
}

// define route

app.use("/book", bookRoute);
app.use("/notesxi", notesRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
