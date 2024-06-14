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
  address: {
    type: String,
    required: true,
  },
  time: {
    type: String,
  },
  feedback: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
