import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Buddy from "./pages/Buddy";
import Plan from "./pages/Plan";
import Tribes from "./pages/Tribes";
import Envision from "./pages/Envision";
import Homepage from "./pages/Homepage";
import UserDetails from "./components/UserDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/plan",
        element: <Plan />,
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
        path: "/userDetails",
        element: <UserDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
