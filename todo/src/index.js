import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login"; // Importiere deine Login-Komponente

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />{" "}
      {/* Hier wird die Login-Seite angezeigt */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
