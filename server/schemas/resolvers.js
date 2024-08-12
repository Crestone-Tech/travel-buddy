const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const resolvers = {
  Query: {
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
