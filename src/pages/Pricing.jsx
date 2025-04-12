import React from "react";
import styles from "./Pricing.module.css";
import PageNav from "../components/PageNav";

export default function Pricing() {
  return (
    <main>
        <PageNav />
    <div className={styles.pricing}>
      <section>
        <h1>Pricing</h1>
        <div className={styles.plans}>
          <div className={styles.plan}>
            <h2>Standard</h2>
            <p>$19.99</p>
            <ul>
              <li>Softcover Passport Diaries</li>
              <li>100 pages</li>
              <li>Basic designs</li>
            </ul>
          </div>
          <div className={styles.plan}>
            <h2>Premium</h2>
            <p>$39.99</p>
            <ul>
              <li>Hardcover Passport Diaries</li>
              <li>200 pages</li>
              <li>Custom map cover + stickers</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </main>
  );
}
