import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginWithDelay />} />
      </Routes>
    </Router>
  );
};

const LoginWithDelay = () => {
  const [shouldRenderLogin, setShouldRenderLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRenderLogin(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return shouldRenderLogin ? <Login /> : <div>Loading...</div>;
};

ReactDOM.render(<AppRouter />, document.getElementById("root"));
