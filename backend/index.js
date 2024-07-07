import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "../backend/route/book.route.js";
import userRoute from "../backend/route/user.route.js";
import notesRoute from "../backend/route/notesxi.route.js";
import contactRoute from "../backend/route/contact.route.js";
import practiseRoute from "../backend/route/practisexi.route.js";
import practiseXiiRoute from "../backend/route/practisexii.route.js";

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

app.get("/", (req, res) => {
  res.send("hello hacker");
  console.log("Hello ");
});
// define route

app.use("/book", bookRoute);
app.use("/practisexi", notesRoute);
app.use("/practisexii", practiseXiiRoute);
app.use("/notesxi", practiseRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
