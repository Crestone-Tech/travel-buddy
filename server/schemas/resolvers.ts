import { HydratedDocument } from "mongoose";
import { User, Reservation, Tribe } from "../models";
import { AuthenticationError } from "../utils/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const resolvers = {
  Query: {
    ////////////////// RESERVATIONS
    // get all reservations
    getAllReservations: async () => {
      return Reservation.find();
    },

    // get one reservation
    getOneReservation: async (_: IReservation, { _id }: QueryByIdArgs) => {
      return Reservation.findOne({ _id });
    },

    ////////////////////////// USERS
    // get all users
    users: async () => {
      return User.find();
    },

    // get a user by id
    user: async (_: IUser, { _id }: QueryByIdArgs) => {
      return User.findOne({ _id: _id });
    },

    // retrieve user without specifically searching by id
    me: async (_: IUser, __: QueryUsersArgs, context: QueryUsersContext) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    ////////////// RESERVATIONS
    //creates a reservation. See Model for required fields.
    createReservation: async (_: IReservation, args: IReservation) => {
      const reservation = await Reservation.create(args);
      return reservation;
    },

    // updates any/all fields in a reservation (except for _id)
    updateReservation: async (
      _: IReservation,
      args: HydratedDocument<IReservation>
    ) => {
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
    deleteReservation: async (_: IReservation, { _id }: QueryByIdArgs) => {
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
    addUser: async (_: IUser, args: IUser) => {
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

        // TODO: Provide typing to .env variables
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        return { token, user };
      } catch (error) {
        console.log(error);

        return error;
      }
    },

    loginUser: async (_: IUser, { username, password }: QueryLoginArgs) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          throw new Error("No user with that username");
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
          throw new Error("Incorrect password");
        }

        // TODO: Provide typing to .env variables
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        return { token, user };
      } catch (error) {
        console.log(error);
      }
    },

    createTribe: async (_: ITribe, args: ITribe) => {
      try {
        let tribe = new Tribe({
          args,
        });
        await tribe.save();
        console.log("New tribe saved");
        return tribe;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default resolvers;
