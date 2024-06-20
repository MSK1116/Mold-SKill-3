import express from "express";

import { getPractiseXi } from "../controller/practise.controller.js";
const router = express.Router();

router.get("/", getPractiseXi);

export default router;
