//const { User } = require("../models");

const resolvers = {
  Query: {
    user: async () => {
      //const matchup = await Matchup.create(args);
      console.log("call to Resolvers.createUser()");
      return null;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      //const matchup = await Matchup.create(args);
      console.log("call to Resolvers.createUser()");
      return null;
    },
  },
};

module.exports = resolvers;
