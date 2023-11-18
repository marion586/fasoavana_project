import { body } from "express-validator";
import express from "express";
import { signUp, login, getUser, deleteUser } from "../../controllers/user.js";

const router = express.Router();

router.post(
  "/inscription",
  body("email").isEmail().withMessage("The email is invalid"),
  body("password").isLength({ min: 5 }).withMessage("le mot de pass invalid"),
  signUp
);
router.post("/connection", login);
router.get("/user", getUser);
router.delete("user/:id", deleteUser);
export default router;
