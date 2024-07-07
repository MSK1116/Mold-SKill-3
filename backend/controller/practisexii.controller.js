import PractiseXii from "../model/practisexii.model.js";

export const getPractiseXii = async (req, res) => {
  try {
    const practiseXii = await PractiseXii.find();
    res.status(200).json(practiseXii);
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error);
  }
};
