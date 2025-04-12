import React from 'react'
import Styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" >
  <img src="/logo.png" alt="Logo" className={Styles.Logo} />
    </Link>
  
  )
}
