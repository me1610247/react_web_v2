import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Text } from "../text/text";
import "./Nav.css";

const Nav = ({ ...props }) => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      {" "}
      {/* Add fixed-top class */}
      <div className="container">
        <Link className="navbar-brand" to="/">
          Your Brand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                location.pathname === "/logout" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/order" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/order">
                Order
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/profile">
                {" "}
                Profile
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/add"}`}>
              <Link className="nav-link" to="/add">
                Add Product
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/admin"}`}>
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
