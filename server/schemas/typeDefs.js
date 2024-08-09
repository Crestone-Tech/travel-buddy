const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  users: [User]
  user(_id: ID!): User
  me: User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Auth
    removeUser: User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
