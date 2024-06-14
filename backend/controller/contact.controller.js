import Contact from "../model/contact.model.js";

export const contact = async (req, res) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  const time = `${formattedDate} ${formattedTime}`;

  try {
    const { fullname, email, phnumber, address, message } = req.body;

    if (!fullname || !email || !phnumber || !address || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const createdMessage = new Contact({
      fullname: fullname,
      email: email,
      phnumber: phnumber,
      address: address,
      message: message,
      feedback: feedback,
      time: time,
    });

    await createdMessage.save();
    res.status(201).json({ message: "Message was sent" });
  } catch (error) {
    console.error("Failed to save message:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
