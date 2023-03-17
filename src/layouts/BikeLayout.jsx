import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function BikeLayout() {
  return (
    <>
      <h3>Este es Bike Layout page, nivel 2 </h3>
      <p>Falta menu del nivel 3</p>
      <nav>
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "a-active" : "")}
        >
          Bjelasnica
        </NavLink>
        <NavLink
          to="jahorina"
          end
          className={({ isActive }) => (isActive ? "a-active" : "")}
        >
          Jahorina
        </NavLink>
        <NavLink
          to="igman"
          end
          className={({ isActive }) => (isActive ? "a-active" : "")}
        >
          Igman
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
