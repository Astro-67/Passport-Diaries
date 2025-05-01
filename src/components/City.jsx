import React, { useEffect } from "react";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import Backbutton from "./Backbutton";

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
}

export default function City() {
  const { cityId } = useParams();

  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(cityId);
    },
    [cityId,getCity]
  );

  const { cityName, emoji, date, notes } = currentCity;
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City Name </h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>
      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>
      {notes && (
        <div className={styles.row}>
          <h6>Your Notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn More</h6>
        <a
          href={`https://en.wikipidia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Chek out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div className={styles.row}>
        <Backbutton/>
      </div>
    </div>
  );
}
