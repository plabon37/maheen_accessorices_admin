import mongoose, { Schema } from "mongoose";

const heroSchema = new Schema(
  {
    backgroundImage: {
      type: String,
      default: "",
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
      default: "",
      trim: true,
    },

    primaryButtonText: {
      type: String,
      default: "",
      trim: true,
    },

    primaryButtonLink: {
      type: String,
      default: "",
      trim: true,
    },

    secondaryButtonText: {
      type: String,
      default: "",
      trim: true,
    },

    secondaryButtonLink: {
      type: String,
      default: "",
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

const Hero =
  mongoose.models.Hero || mongoose.model("Hero", heroSchema);

export default Hero;