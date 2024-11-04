import { Schema, model } from "mongoose";

export type IReservation = {
  title: string;
  category: string;
  description: string;
  country: string;
  town: string;
  startDate: Date;
  endDate: Date;
  status: string;
  provider: string;
  transportationType: string;
  price: number;
  priceCurrency: string;
};

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
