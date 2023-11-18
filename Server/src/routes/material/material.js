import express from "express";
import {
  createMaterial,
  getMaterial,
  updateMaterial,
  getMaterialById,
  deleteMaterial,
} from "../../controllers/material.js";

const router = express.Router();

router.post("/add", createMaterial);
router.get("/", getMaterial);
router.patch("/:id", updateMaterial);
router.get("/:id", getMaterialById);
router.delete("/:id", deleteMaterial);

export default router;
