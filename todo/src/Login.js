import React, { useState } from "react";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Benutzername" />
        <input type="password" placeholder="Passwort" />
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
          Eingeloggt bleiben
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
