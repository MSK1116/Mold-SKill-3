import Practsiexi from "../model/practise.model.js";

export const getPractiseXi = async (req, res) => {
  try {
    const practiseXi = await Practsiexi.find();
    res.status(200).json(practiseXi);
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error);
  }
};
