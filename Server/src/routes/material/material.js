import express from "express";
import {
  createMaterial,
  getMaterial,
  updateMaterial,
  getMaterialById,
  deleteMaterial,
  getAllMaterialById,
  getAllMaterialDispo,
} from "../../controllers/material.js";

const router = express.Router();

router.post("/add", createMaterial);
router.get("/", getMaterial);
router.patch("/:id", updateMaterial);
router.get("/:id", getMaterialById);
router.get("/boite/:id_boite", getAllMaterialById);
router.get("/dispo", getAllMaterialDispo);
router.delete("/:id", deleteMaterial);

export default router;
