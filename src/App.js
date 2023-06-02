import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rin de declarer au dessus */}
      </Routes>
    </BrowserRouter>
  );
}
