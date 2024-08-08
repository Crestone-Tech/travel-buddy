const { User } = require("../models");

const resolvers = {
  Query: {
    users: async (parent, { _id }) => {
      return User.find({});
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const newUser = await User.create({ name });
      return newUser;
    },
  },
};

module.exports = resolvers;
