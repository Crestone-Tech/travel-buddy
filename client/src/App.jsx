import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <NavBar />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
