const { Schema, model } = require("mongoose");

const reservationSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  status: {
    type: String,
  },
  provider: {
    type: String,
  },
  transportationType: {
    type: String,
  },
  price: {
    type: Num,
  },
  priceCurrency: {
    type: Number,
  },
});

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
