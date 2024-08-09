import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Buddy />,
      },
      {
        path: '/plan',
        element: <Plan />,
      },
      {
        path: '/tribes',
        element: <Tribes />,
      },
      {
        path: '/envision',
        element: <Envision />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
