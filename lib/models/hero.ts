import mongoose, { Schema } from "mongoose";

const heroSchema = new Schema(
  {
    backgroundImage: {
      type: String,
      required: true,
    },

    subTitle: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    primaryButtonText: {
      type: String,
      required: true,
      trim: true,
    },

    primaryButtonLink: {
      type: String,
      required: true,
      trim: true,
    },

    secondaryButtonText: {
      type: String,
      required: true,
      trim: true,
    },

    secondaryButtonLink: {
      type: String,
      required: true,
      trim: true,
    },

    facebook: {
      type: String,
      default: "",
      trim: true,
    },

    instagram: {
      type: String,
      default: "",
      trim: true,
    },

    linkedin: {
      type: String,
      default: "",
      trim: true,
    },

    order: {
      type: Number,
      default: 1,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const HeroSection =
  mongoose.models.HeroSection ||
  mongoose.model("HeroSection", heroSchema);