import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createListing,
  fetchAllListings,
  fetchListing,
  updateListing,
} from "../controllers/listing.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.put("/update/:id", verifyToken, updateListing);
router.get("/:id", fetchListing);
router.get("/listings/all", fetchAllListings);

export default router;
