import express from "express";

import { advice, pushAdvice } from "../controller/advice.controller.js";

const router = express.Router();

router.post("/advice", advice);
router.post("/pushadvice", pushAdvice);

export default router;
