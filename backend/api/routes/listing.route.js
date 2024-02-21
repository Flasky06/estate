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

router.post("/create", verifyToken, createListing);
router.put("/update/:id", verifyToken, updateListing);
router.get("/all-listings", fetchAllListings);
router.get("/:id", fetchListing);
router.get("/agent-listings/:id", fetchAgentsListings);

export default router;
