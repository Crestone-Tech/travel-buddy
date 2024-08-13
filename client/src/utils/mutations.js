// PURPOSE: to hold the mutations for the application

import { gql } from "@apollo/client";

// ADD_USER mutation
export const ADD_USER = gql`
  mutation AddUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      user {
        firstName
        lastName
        password
        username
        id
      }
    }
  }
`;

// LOGIN_USER mutation
export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      user {
        id
        firstName
        lastName
        username
      }
      token
    }
  }
`;

// CREATE_TRIBE mutation
// export const CREATE_TRIBE = gql`
//   mutation CreateTribe(
//     createTribe()
//     )
// `;
