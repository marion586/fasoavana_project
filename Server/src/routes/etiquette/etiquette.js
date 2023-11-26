import express from "express";
import {
  createEtiquette,
  getEtiquette,
  updateEtiquette,
  getEtiquetteById,
  deleteEtiquette,
} from "../../controllers/etiquette.js";

const router = express.Router();

router.post("/add", createEtiquette);
router.get("/", getEtiquette);
router.patch("/:id", updateEtiquette);
router.get("/:id", getEtiquetteById);
router.delete("/:id", deleteEtiquette);

export default router;
