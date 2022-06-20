import React from "react";
//React-Router
import { Routes, Route, Link } from "react-router-dom";

//pages

import About from "./About";
import Home from "./Home";
import Error from "./Error";
import People from "./People";

// Navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/people" element={<People />} />
    </Routes>
  );
};

export default ReactRouterSetup;
