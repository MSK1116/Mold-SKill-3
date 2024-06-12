import mongoose, { mongo } from "mongoose";

const notesXiSchema = mongoose.Schema({
  title: String,
  set: String,
  type: String,
  id: String,
  subject: String,
  link: String,
  keywords: String,
  auth: String,
});

const Notesxi = mongoose.model("Notesxi", notesXiSchema);

export default Notesxi;
