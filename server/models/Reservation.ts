import { Schema, model } from "mongoose";

const reservationSchema = new Schema<IReservation>({
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
  country: {
    type: String,
  },
  town: {
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
    type: Number,
  },
  priceCurrency: {
    type: String,
  },
});

const Reservation = model<IReservation>("Reservation", reservationSchema);

export default Reservation;
