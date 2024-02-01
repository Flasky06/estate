import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    "connected to mongodb";
  })
  .catch((err) => console.log(err));

app.listen(4500, () => {
  console.log("Server running on port 4500 !");
});
