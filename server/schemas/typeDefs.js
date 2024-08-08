const typeDefs = `
type User {
    id: ID!
    name: String!
    
  }

  type Query {
  users: [User]  
  
  }

  type Mutation {
    createUser(name: String!): User
    
  }
`;

module.exports = typeDefs;
