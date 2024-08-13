const db = require("../config/connection");
const { User, Reservation } = require("../models");
const cleanDB = require("./cleanDB");

const userData = require("./userData.json");
const reservationData = require("./reservationData.json");

db.once("open", async () => {
  await cleanDB("User", "users");
  await cleanDB("Reservation", "reservations");

  await User.insertMany(userData);

  await Reservation.insertMany(reservationData);

  console.log("Seeds Finished!");
  process.exit(0);
});
