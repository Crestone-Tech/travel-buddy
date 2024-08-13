const { User, Reservation } = require("../models");
const { findByIdAndUpdate } = require("../models/Reservation");
const { signToken, AuthenticationError } = require("../utils/auth");
const { ObjectId } = require("mongodb");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
  Query: {
    ////////////////// RESERVATIONS
    // get all reservations
    getAllReservations: async () => {
      return Reservation.find();
    },

    // get one reservation
    getOneReservation: async (parent, { _id }) => {
      return Reservation.findOne({ _id });
    },

    ////////////////////////// USERS
    // get all users
    users: async () => {
      return User.find();
    },

    // get a user by id
    user: async (parent, { _id }) => {
      return User.findOne({ _id: _id });
    },

    // retrieve user without specifically searching by id
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    ////////////// RESERVATIONS
    //creates a reservation. See Model for required fields.
    createReservation: async (parent, args) => {
      const reservation = await Reservation.create(args);
      return reservation;
    },

    // updates any/all fields in a reservation (except for _id)
    updateReservation: async (parent, args) => {
      try {
        if (!args._id) {
          throw new Error("Reservation ID is required");
        }
        const reservation = await Reservation.findByIdAndUpdate(
          args._id,
          args,
          {
            new: true,
          }
        );
        if (!reservation) {
          throw new Error("Reservation not found");
        }
        return reservation;
      } catch (error) {
        console.error("Error updating reservation:", error);
        throw new Error("Failed to update reservation");
      }
    },

    // deletes a reservation.
    // Returns
    //  1: reseration deleted
    //  0: reservation not found, not deleted
    deleteReservation: async (parent, { _id }) => {
      try {
        if (!_id) {
          throw new Error("Reservation ID is required");
        }
        const result = await Reservation.deleteOne({ _id });
        console.log("result", result);

        return result;
      } catch (error) {
        console.error("Error deleting reservation:", error);
        throw new Error("Failed to delete reservation");
      }
    },

    //////////////////// USERS AND AUTH
    addUser: async (parent, args) => {
      try {
        const { firstName, lastName, username, email, password } = args;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
          firstName,
          lastName,
          username,
          email,
          password: hashedPassword,
        });

        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        return { token, user };
      } catch (error) {
        console.log(error);

        return error;
      }
    },

    loginUser: async (parent, { username, password }) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          throw new Error("No user with that username");
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
          throw new Error("Incorrect password");
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        return { token, user };
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
