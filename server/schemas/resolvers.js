const { User, Reservation } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    ////////////////// RESERVATIONS
    // get all reservations
    getAllReservations: async () => {
      return Reservation.find();
    },

    // get all users
    users: async () => {
      return User.find();
    },

    // get a user by id
    user: async (parent, { id }) => {
      return User.findOne({ _id: id });
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
    createReservation: async (parent, args) => {
      const reservation = await Reservation.create(args);

      return { reservation };
    },

    createUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      // find user by email
      const user = await User.findOne({ email });

      // if no user found, return error
      if (!user) {
        throw AuthenticationError;
      }

      // check if password is correct
      const correctPw = await user.isCorrectPassword(password);

      // if password is incorrect, return error
      if (!correctPw) {
        throw AuthenticationError;
      }

      // sign token
      const token = signToken(user);

      return { token, user };
    },

    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
