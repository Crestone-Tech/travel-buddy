import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header><NavBar /></Header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
