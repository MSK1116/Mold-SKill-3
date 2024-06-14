import mongoose, { mongo } from "mongoose";

const contactSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phnumber: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  time: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
