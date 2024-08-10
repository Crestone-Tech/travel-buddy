import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import { Outlet } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header>
        <NavBar />
      </Header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
