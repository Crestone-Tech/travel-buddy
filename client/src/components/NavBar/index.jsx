import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const currentPage = useLocation.pathname;

  return (
    <ul>
      <li className="nav nav-tabs">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          {" "}
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Envision"
          className={
            currentPage === "/Envision" ? "nav-link active" : "nav-link"
          }
        >
          {" "}
          Envision
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Plan"
          className={currentPage === "/Plan" ? "nav-link active" : "nav-link"}
        >
          {" "}
          Plan
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Tribes"
          className={currentPage === "Tribes" ? "nav-link active" : "nav-link"}
        >
          {" "}
          My Tribes
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Buddy"
          className={currentPage === "Buddy" ? "nav-link active" : "nav link"}
        >
          {" "}
          Buddy&#8482;
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Premium"
          className={currentPage === "Premium" ? "nav-link active" : "nav link"}
        >
          {" "}
          Premium
        </Link>
      </li>
    </ul>
  );
}
