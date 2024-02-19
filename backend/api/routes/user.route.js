import express from "express";
import { DeleteUser, UpdateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id", verifyToken, UpdateUser);
router.delete("/delete/:id", verifyToken, DeleteUser);

export default router;
