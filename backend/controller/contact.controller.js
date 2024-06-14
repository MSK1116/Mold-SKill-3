import Contact from "../model/contact.model.js";

export const contact = async (req, res) => {
  const date = new Date();
  const time = date.getTime();
  try {
    const { fullname, email, phnumber, address, message } = req.body;
    const createdMessage = new Contact({
      fullname: fullname,
      email: email,
      phnumber: phnumber,
      address: address,
      message: message,
      time: time,
    });

    await createdMessage.save();
    res.status(201).json({ message: "Message was sent" });
  } catch (error) {
    console.log("Failed controller_controller.js", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
