import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createListing,
  fetchAgentsListings,
  fetchAllListings,
  fetchListing,
  updateListing,
} from "../controllers/listing.controller.js";

const router = express.Router();

router.get("/:id/listings", fetchAgentsListings);
router.post("/create", verifyToken, createListing);
router.put("/update/:userId", verifyToken, updateListing);
router.get("/all-listings", fetchAllListings);
router.get("/:id", fetchListing);

export default router;
