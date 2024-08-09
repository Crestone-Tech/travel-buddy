import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Foo($bar:String) {
    user(name: $bar) {
      name
      email
      password
    }
  }
`;
