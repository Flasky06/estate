import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    category: { type: String }, //villa ,apartment, house , bungallow,studio
    city: { type: String },
    area: { type: String },
    type: { type: String }, //sale or rent
    price: { type: Number },
    bathrooms: { type: Number },
    bedrooms: { type: Number },
    rooms: { type: Number },
    description: { type: String },
    extraDetails: { type: String },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
