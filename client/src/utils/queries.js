// PURPOSE: to hold the queries for the application

import { gql } from "@apollo/client";

///////////// USERS ///////////
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
  query user($_id: String) {
    user(_id: $_id) {
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

///////// RESERVATIONS ///////////
// QUERY_ALL_RESERVATIONS
export const QUERY_ALL_RESERVATIONS = gql`
  query GetAllReservations {
    getAllReservations {
      id
      title
      category
      description
      startDate
      endDate
      status
      provider
      transportationType
      price
      priceCurrency
    }
  }
`;
