import React from "react";
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <div>
        <PageNav/>
    <main className={styles.mainContent}>
      
      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img src="/passport-diaries.jpg" alt="Passport Diaries" />
        </div>
        <div className={styles.content}>
          <h1>Passport Diaries</h1>
          <p>
            Passport Diaries is a unique travel journal experience that lets you
            document memories, adventures, and reflections from every place you
            visit. Whether you're a backpacker or a luxury traveler, this journal
            is your personal companion to store stories, thoughts, and photos from
            around the world.
          </p>
          <p>
            Designed with love for wanderers, it's more than just a book — it's a
            collection of moments, stamped in time.
          </p>
        </div>
      </div>
    </main>
    </div>
  );
}
