import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo/>
      <ul> 
        <li>
          <NavLink to="/pricing">PRICING</NavLink>
        </li>
        <li>
          <NavLink to="/product">PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
}
