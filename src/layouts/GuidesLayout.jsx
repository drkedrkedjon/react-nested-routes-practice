import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function GuidesLayout() {
  return (
    <>
      <h3>Este es Guides Layout page, nivel 1 tambien</h3>
      <p>Pero contiene submenu nav que controla nivel 2</p>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "a-active" : "")}
          to="."
          end
        >
          Sking
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "a-active" : "")}
          to="Walk"
        >
          Walking
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "a-active" : "")}
          to="bike"
        >
          Biking
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
