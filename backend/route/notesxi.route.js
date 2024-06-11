import express from "express";
import { getNotesXi } from "../controller/notesxi.controller.js";
const router = express.Router();

router.get("/", getNotesXi);

export default router;
