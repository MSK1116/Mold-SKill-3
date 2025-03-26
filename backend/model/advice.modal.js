import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  Que1: {
    type: String,
    required: true,
  },
  Que2: {
    type: String,
    required: true,
  },
  Que3: {
    type: String,
    required: true,
  },
  Que4: {
    type: String,
    required: true,
  },
  Que5: {
    type: String,
    required: true,
  },
  Que6: {
    type: String,
    required: true,
  },
});

const Advice = mongoose.model("Advice", userSchema);
export default Advice;
