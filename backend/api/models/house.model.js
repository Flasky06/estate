import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: { type: String, required: true }, //villa ,apartment, house , bungallow,studio
    city: { type: String, required: true },
    area: { type: String, required: true },
    type: { type: String, required: true }, //sale or rent
    price: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    rooms: { type: Number, required: true },
    description: { type: String, required: true },
    garage: { type: String, required: true },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
