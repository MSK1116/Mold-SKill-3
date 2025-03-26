import Advice from "../model/advice.modal.js";

export const advice = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Advice.findOne({ email });
    if (user) {
      return res.status(400).json({ message: false });
    } else {
      res.status(201).json({ message: true });
    }
  } catch (error) {
    console.log("Failed user_controller.js", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const pushAdvice = async (req, res) => {
  try {
    const { fullname, email, usefulness, improvement, contributionInterest, shutdown, recommendation, additionalSuggestions } = req.body;

    const user = await Advice.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "advice already there" });
    }

    const createdAdvice = new Advice({
      fullname: fullname,
      email: email,
      Que1: usefulness,
      Que2: improvement,
      Que3: contributionInterest,
      Que4: shutdown,
      Que5: recommendation,
      Que6: additionalSuggestions,
    });
    await createdAdvice.save();
    res.status(201).json({ message: "Advice created" });
  } catch (error) {
    console.log("Failed advice_controller.js", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
