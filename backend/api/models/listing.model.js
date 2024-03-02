import mongoose from "mongoose";

const { Schema } = mongoose;

const listingSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    city: { type: String, required: true },
    area: { type: String, required: true },
    price: { type: Number, required: true },
    deposit: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    houseDescription: { type: String, required: true },
    locationDescription: { type: String, required: true },
    downloadURLs: { type: [String], required: true },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
