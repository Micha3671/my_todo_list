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
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
          Stay logged in
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
