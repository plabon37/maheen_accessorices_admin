import mongoose, {
  Schema,
  model,
  models,
} from "mongoose";

const PolicyCardSchema = new Schema(
  {
    icon: {
      type: String,
      required: true,
    },

    number: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
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
    _id: false,
  }
);

const PolicySchema = new Schema(
  {
    sectionTitle: {
      type: String,
      default: "POLICIES",
    },

    title: {
      type: String,
      required: true,
    },

    italicTitle: {
      type: String,
      required: true,
    },

    rightDescription: {
      type: String,
      required: true,
    },

    cards: {
      type: [PolicyCardSchema],
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

const Policy =
  models.Policy ||
  model("Policy", PolicySchema);

export default Policy;