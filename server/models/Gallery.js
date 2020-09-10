const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallerySchema = mongoose.Schema({
  writer: {
    type: String,
    ref: "User",
  },
  title: {
    type: String,
    maxlength: 50,
  },
  discription: {
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
  date: {
    type: String,
  },
});

GallerySchema.index(
  {
    title: "text",
    discription: "text",
  },
  {
    weights: {
      title: 5,
      discription: 1,
    },
  }
);

const Gallery = mongoose.model("Gallery", GallerySchema);

module.exports = { Gallery };
