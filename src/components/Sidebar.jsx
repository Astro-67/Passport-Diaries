import React from 'react';
import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
import { Outlet } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.LogoContainer}>
        <Logo />
      </div>
      <AppNav />
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by PassportDiaries Inc.
        </p>
      </footer>
    </div>
  );
}