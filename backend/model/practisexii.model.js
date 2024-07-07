import mongoose, { mongo } from "mongoose";

const practiseXiiSchema = mongoose.Schema({
  title: String,
  set: String,
  type: String,
  id: String,
  subject: String,
  link: String,
  keywords: String,
  auth: String,
});

const PractiseXii = mongoose.model("practiseXii", practiseXiiSchema);

export default PractiseXii;
