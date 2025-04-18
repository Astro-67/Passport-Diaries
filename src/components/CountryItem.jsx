import React from "react";
import styles from "./CountryItem.module.css";

export default function ContryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
