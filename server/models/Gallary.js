const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallarySchema = mongoose.Schema({
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

const Gallary = mongoose.model("Gallary", GallarySchema);

module.exports = { Gallary };
