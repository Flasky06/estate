import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createHouse } from "../controllers/house.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createHouse);
router.get("/house/:id");
router.get("/houses/all");
router.post("/update/:id");
router.get("/house/:id");

export default router;
