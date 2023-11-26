import express from "express";
import {
  createBoite,
  getBoite,
  updateBoite,
  getBoiteById,
  deleteBoite,
} from "../../controllers/boite.js";

const router = express.Router();

router.post("/add", createBoite);
router.get("/", getBoite);
router.patch("/:id", updateBoite);
router.get("/:id", getBoiteById);
router.delete("/:id", deleteBoite);

export default router;
