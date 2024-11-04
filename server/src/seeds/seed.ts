import db from "../config/connection";
import { User, Reservation } from "../models";
import cleanDB from "./cleanDB";

import userData from "./userData.json";
import reservationData from "./reservationData.json";

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Reservation", "reservations");

  await User.insertMany(userData);

  await Reservation.insertMany(reservationData);

  console.log("Seeds Finished!");
  process.exit(0);
});
