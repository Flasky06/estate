import express from "express";
import { Google, Signin, Signup } from "../controllers/auth.controller.js";
import { Signout } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/google", Google);
router.get("/signout", Signout);

export default router;
