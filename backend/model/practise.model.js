import mongoose, { mongo } from "mongoose";

const practiseXiSchema = mongoose.Schema({
  title: String,
  provider: String,
  id: String,
  subject: String,
  link: String,
  keywords: String,
  auth: String,
});

const Notesxi = mongoose.model("practiseXi", practiseXiSchema);

export default Notesxi;
