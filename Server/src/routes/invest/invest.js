import express from "express";
import {
  createInvest,
  getInvest,
  updateInvest,
  getInvestById,
  deleteInvest,
} from "../../controllers/invest.js";

const router = express.Router();

router.post("/add", createInvest);
router.get("/", getInvest);
router.patch("/:id", updateInvest);
router.get("/:id", getInvestById);
router.delete("/:id", deleteInvest);

export default router;
