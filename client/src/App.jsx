import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

// used to connect to the GraphQL API server
const httpLink = createHttpLink({
  uri: "/graphql",
});

// used to set the request headers for the ApolloClient
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// create the ApolloClient instance
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex-column justify-flex-start min-100-vh">
          <Header>
            <NavBar />
          </Header>

          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
