import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <div className={styles.loginForm}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Username"
        />
        <input
          className={styles.inputField}
          type="password"
          placeholder="Password"
        />
        <label className={styles.checkboxLabel}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
          Stay logged in
        </label>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
