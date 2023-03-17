import React from "react";
import { Outlet } from "react-router-dom";
export default function SkiLayout() {
  return (
    <>
      <h3>Este es Ski Layout page, nivel 2</h3>
      <p>Falta menu del nivel 3</p>

      <Outlet />
    </>
  );
}
