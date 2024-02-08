import express from "express";
import { Google, Signin, Signup } from "../controllers/auth.controller.js";
import { signout } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/google", Google);
router.get("/signout", signout);

export default router;
