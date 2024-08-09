// PURPOSE: to hold the queries for the application

import { gql } from "@apollo/client";

// QUERY_USERS query
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

// QUERY_SINGLE_USER query
export const QUERY_SINGLE_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

// QUERY_ME query
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
