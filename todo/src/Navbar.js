import React from "react";
import logo from "./logo.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="/">
            <img src={logo} className={styles.logo} alt="logo" />
          </a>
        </div>
        <div className={styles.right}>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <a href="/login" className={styles.link}>
                <button className={styles["menu-button"]}>Login</button>
              </a>
            </li>
            <li className={styles.item}>
              <a href="/register" className={styles.link}>
                <button className={styles["menu-button"]}>Register</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
