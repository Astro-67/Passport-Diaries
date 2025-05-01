import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from "react-router-dom";


import styles from "./Form.module.css";
import Button from "./Button";
import Backbutton from "./Backbutton";
import useUrlPosition from "../hooks/useUrlPosition";
import Message from "./Message";
import Spineer from "./Spinner";
import { useCities} from "../contexts/CitiesContext";


export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export default function Form() {
  const [lat, lng] = useUrlPosition();
  const {createCity,isLoading} = useCities();
  const navigate = useNavigate();

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect( 

    function () {
      async function fetchCityData() {
        try {
          // Don't fetch if we don't have coordinates
          if (!lat || !lng) return;

          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data);

          if (!res.ok)
            throw new Error(`Failed to fetch city data: ${data.message}`);

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a valid location. Please click somewhere else 😉"
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName || "");
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  async function handleOnSubmit(e) {
    e.preventDefault();
    if(!cityName || !date) return;
    const newCity = {
      cityName,
      date,
      notes,
      position: {
        lat,
        lng,
      },
      emoji,
      country,
    };
    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Spineer />;
  if (!lat || !lng) return <Message message="Please select a location on the map" />;
  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className={`${styles.form} ${isLoading?styles.loading :""}`} onSubmit={handleOnSubmit}>
      {/* City Name with Flag */}
      <div className={styles.row}>
        <label htmlFor="cityName">City Name</label>
        <div className={styles.inputContainer}>
          <input
            type="text"
            id="cityName"
            value={cityName}
            className={styles.inputWithEmoji}
            onChange={(e) => setCityName(e.target.value)}
            disabled={isLoadingGeocoding}
          />
          <span className={styles.emoji}>{emoji}</span>
        </div>
      </div>

      {/* Date with Dynamic City Name */}
      <div className={styles.row}>
        <label htmlFor="date">
          When did you go to {cityName || "this place"}?
        </label>
      
        <DatePicker  id="date" onChange={date => setDate(date)} selected={date} dateFormart="dd/MM/yyyy"/>
      </div>

      {/* Notes with Dynamic City Name */}
      <div className={styles.row}>
        <label htmlFor="notes">
          Notes about your trip to {cityName || "this place"}
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write your memorable experiences here..."
        />
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <Button type="primary">Add </Button>
        <Backbutton />
      </div>
    </form>
  );
}
