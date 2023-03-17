import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import GuidesLayout from "./Layouts/GuidesLayout";
import BikeLayout from "./Layouts/BikeLayout";

import About from "./pages/nivel-uno/About";
import Home from "./pages/nivel-uno/Home";

import Walk from "./pages/nivel-dos/Walk";
import Ski from "./pages/nivel-dos/Ski";

import Bjelasnica from "./pages/nivel-tres/Bjelasnica";
import Igman from "./pages/nivel-tres/Igman";
import Jahorina from "./pages/nivel-tres/Jahorina";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="guides" element={<GuidesLayout />}>
            <Route index element={<Ski />} />
            <Route path="walk" element={<Walk />} />
            <Route path="bike" element={<BikeLayout />}>
              <Route index element={<Bjelasnica />} />
              <Route path="jahorina" element={<Jahorina />} />
              <Route path="igman" element={<Igman />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
