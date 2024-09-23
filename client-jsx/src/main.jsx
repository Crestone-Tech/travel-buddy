import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Buddy from "./pages/Buddy";
import Tribes from "./pages/Tribes";
import Envision from "./pages/Envision";
import Homepage from "./pages/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FAQ from "./components/FAQ";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    
      {
        path: "/tribes",
        element: <Tribes />,
      },
      {
        path: "/envision",
        element: <Envision />,
      },
      {
        path: "/buddy",
        element: <Buddy />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
