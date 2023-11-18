import express from "express";

import { getDetail, createDetail } from "../../controllers/detail.js";

const router = express.Router();

router.get("/", getDetail);
router.post("/add", createDetail);

export default router;
