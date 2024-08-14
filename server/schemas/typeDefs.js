const { GraphQLScalarType, Kind } = require("graphql");

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST literal to Date
    }
    return null;
  },
});

const typeDefs = `
  scalar Date

  type ResponseFromDeletion {
  acknowledged: Boolean,
  deletedCount: Int}

  type Reservation {
    id: ID!
    title: String!
    country: String
    town: String
    category: String!
    description: String
    startDate: Date!
    endDate: Date
    status: String!
    provider: String
    transportationType: String
    price: Float
    priceCurrency: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
  }
    
  type Query {
    getAllReservations: [Reservation]
    getOneReservation(_id: ID!): Reservation

    users: [User]
    user(_id: ID!): User
    me: User
  }

  type Mutation {
    createReservation(
      title: String!, 
      country: String,
      town: String,
      category: String!, 
      description: String, 
      startDate: Date, 
      endDate: Date, 
      status: String, 
      provider: String, 
      transportationType: String, 
      price: Float, 
      priceCurrency: String
    ): Reservation
    
    updateReservation(
      _id: ID!,
      title: String!, 
      country: String,
      town: String,
      category: String!, 
      description: String, 
      startDate: Date, 
      endDate: Date, 
      status: String, 
      provider: String, 
      transportationType: String, 
      price: Float, 
      priceCurrency: String
    ): Reservation
    
    deleteReservation(_id: ID!): ResponseFromDeletion
    
    
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    loginUser(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
