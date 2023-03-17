import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Es una practica de nested routes en React</h1>
      <p>
        Este es el nivel 1, componente HOME. Aqui viene el navegacion principal
      </p>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "a-active" : "")}
          to="/"
        >
          Home page
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "a-active" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "a-active" : "")}
          to="/guides"
        >
          Guides
        </NavLink>
      </nav>
    </div>
  );
}
