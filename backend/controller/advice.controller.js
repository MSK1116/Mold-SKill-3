import Advice from "../model/advice.modal.js";

export const advice = async (req, res) => {
  const { email } = req.body;
  console.log(email + "HI" + req.body);
  try {
    const user = await Advice.findOne({ email });
    if (user) {
      return res.status(400).json({ message: false });
    }
    res.status(201).json({ message: true });
  } catch (error) {
    console.log("Failed user_controller.js", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const pushAdvice = async (req, res) => {
  try {
    const { fullname, email, Que1, Que2, Que3, Que4, Que5, Que6 } = req.body;

    const user = await Advice.findOne({ email });
    if (user) {
      return res.status(400).json({ message: false });
    }

    const createdAdvice = new Advice({
      fullname: fullname,
      email: email,
      Que1: Que1,
      Que2: Que2,
      Que3: Que3,
      Que4: Que4,
      Que5: Que5,
      Que6: Que6,
    });
    await createdAdvice.save();
    res.status(201).json({ message: true });
  } catch (error) {
    console.log("Failed advice_controller.js", error.message);
    res.status(500).json({ message: false });
  }
};
