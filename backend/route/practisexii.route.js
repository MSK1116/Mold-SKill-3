import express from "express";

import { getPractiseXii } from "../controller/practisexii.controller.js";
const router = express.Router();

router.get("/", getPractiseXii);

export default router;
