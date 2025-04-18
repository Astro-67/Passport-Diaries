import React from 'react'
import styles from './Message.module.css'

export default function Message({message}) {
  return (
    <p className={styles.message}><span role="img" aria-label="hand">👋 </span>{message}</p>
  )
}