import mongoose, { Schema, model, models } from "mongoose";

const AboutSchema = new Schema(
  {
    titleTop: {
      type: String,
      required: true,
      trim: true,
    },

    titleItalic: {
      type: String,
      required: true,
      trim: true,
    },

    titleBottom: {
      type: String,
      required: true,
      trim: true,
    },

    sectionTitle: {
      type: String,
      required: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    exploreButtonText: {
      type: String,
      default: "Explore Now",
      trim: true,
    },

    exploreButtonLink: {
      type: String,
      default: "#",
      trim: true,
    },

    circleButtonText: {
      type: String,
      default: "Explore Us",
      trim: true,
    },

    circleButtonLink: {
      type: String,
      default: "#",
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

const About =
  models.About || model("About", AboutSchema);

export default About;