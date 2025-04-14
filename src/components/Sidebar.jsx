import React from 'react'
import styles from './Sidebar.module.css'
import Logo from './Logo'
import AppNav from './AppNav'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
        <p>List of city</p>
        <footer className={styles.footer}>
            <p className={styles.copyright}>&copy;Copyright{new Date().getFullYear()} by PassportDiaries Inc.</p>
        </footer>
    </div>
  )
}
