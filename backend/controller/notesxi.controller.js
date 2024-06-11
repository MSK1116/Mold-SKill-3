import Notesxi from "../model/notesxi.model.js";

export const getNotesXi = async (req, res) => {
  try {
    const notesXi = await Notesxi.find();
    res.status(200).json(notesXi);
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error);
  }
};
