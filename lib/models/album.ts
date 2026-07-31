import mongoose, { Schema } from "mongoose";

const AlbumSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    subTitle: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    buttonText: {
      type: String,
      default: "View Project",
    },

    buttonLink: {
      type: String,
      default: "#",
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

export default mongoose.models.Album ||
  mongoose.model("Album", AlbumSchema);