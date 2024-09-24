// PURPOSE: to hold the queries for the application

import { DocumentNode, gql } from "@apollo/client";

///////////// USERS ///////////
// QUERY_USERS query
export const QUERY_USERS: DocumentNode = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

// QUERY_SINGLE_USER query
export const QUERY_SINGLE_USER: DocumentNode = gql`
  query user($_id: String) {
    user(_id: $_id) {
      _id
      username
      email
    }
  }
`;

// QUERY_ME query
export const QUERY_ME: DocumentNode = gql`
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
export const QUERY_ALL_RESERVATIONS: DocumentNode = gql`
  query GetAllReservations {
    getAllReservations {
      id
      title
      town
      country
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

// DELETE_SINGLE_RESERVATION query
export const DELETE_SINGLE_RESERVATION: DocumentNode = gql`
  mutation deleteReservation($id: ID!) {
    deleteReservation(_id: $id) {
      acknowledged
      deletedCount
    }
  }
`;
