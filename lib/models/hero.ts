
import mongoose, { Schema } from "mongoose";

//Hero Section
const heroSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);
export const HeroSection = mongoose.models.HeroSection || mongoose.model("HeroSection", heroSchema);