const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallarySchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },

    images: {
      type: Array,
      default: [],
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

GallarySchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      title: 5,
      description: 1,
    },
  }
);

const Gallary = mongoose.model("Gallary", GallarySchema);

module.exports = { Gallary };
