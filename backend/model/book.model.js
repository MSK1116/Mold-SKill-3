import mongoose, { mongo } from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  link: String,
  thumbnail: String,
  writer: String,
  publishDate: String,
  auth: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
