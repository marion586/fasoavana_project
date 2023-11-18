import express from "express";
import {
  createProject,
  getProject,
  getProjectById,
  updateProject,
  deleteProject,
} from "../../controllers/project.js";

const router = express.Router();

router.post("/add", createProject);
router.get("/", getProject);
router.get("/:id", getProjectById);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);
export default router;
