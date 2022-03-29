const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  booking_id:{
    type: String
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
    default: "https://furntech.org.za/wp-content/uploads/2017/05/placeholder-image.png",
  },
  price: {
    type: Number,
    required: true,
  },
  created_by:{
    type: String
  }
});

module.exports = mongoose.model("Booking", bookingSchema);
