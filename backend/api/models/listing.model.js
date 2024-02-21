import mongoose from "mongoose";

const { Schema } = mongoose;

const listingSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
    },
    category: { type: String }, //villa ,apartment, house , bungalow,studio
    city: { type: String },
    area: { type: String },
    type: { type: String }, //sale or rent
    price: { type: Number },
    bathrooms: { type: Number },
    bedrooms: { type: Number },
    rooms: { type: Number },
    description: { type: String },
    extraDetails: { type: String },
    downloadURLs: { type: [String] },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
