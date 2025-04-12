import React from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";

export default function Login() {
  return (
    <div>
        <PageNav />
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h2>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
    </div>
    </div>
  );
}
