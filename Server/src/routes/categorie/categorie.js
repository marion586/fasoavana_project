import express from "express";

import {
  createCategorie,
  getCategorie,
  deleteCategorie,
  updateCategorie,
} from "../../controllers/categorieProject.js";

const router = express.Router();

router.post("/add", createCategorie);
router.get("/", getCategorie);

router.patch("/:id", updateCategorie);

router.delete("/:id", deleteCategorie);

export default router;
