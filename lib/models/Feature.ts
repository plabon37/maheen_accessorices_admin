import mongoose, { Schema, model, models } from "mongoose";

const FeatureItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    order: {
      type: Number,
      default: 1,
    },
  },
  {
    _id: false,
  }
);

const FeatureSchema = new Schema(
  {
    sectionTitle: {
      type: String,
      default: "OUR FEATURES",
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    logo: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    buttonText: {
      type: String,
      default: "Read More",
      trim: true,
    },

    buttonLink: {
      type: String,
      default: "#",
      trim: true,
    },

    experience: {
      type: String,
      default: "20+ Years Experience",
      trim: true,
    },

    designCount: {
      type: String,
      default: "500+",
      trim: true,
    },

    designLabel: {
      type: String,
      default: "Designs",
      trim: true,
    },

    orderCount: {
      type: String,
      default: "3000K",
      trim: true,
    },

    orderLabel: {
      type: String,
      default: "Order Covered",
      trim: true,
    },

    features: {
      type: [FeatureItemSchema],
      default: [],
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

const Feature =
  models.Feature ||
  model("Feature", FeatureSchema);

export default Feature;