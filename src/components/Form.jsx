import React, { useState } from 'react';
import styles from './Form.module.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Form() {

const navigate=useNavigate();

  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');

  return (
    <form className={styles.form}>
      {/* City Name */}
      <div className={styles.row}>
        <label htmlFor="cityName">City Name</label>
        <input
          type="text"
          id="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>

      {/* Country */}
      <div className={styles.row}>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      {/* Date */}
      <div className={styles.row}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Notes */}
      <div className={styles.row}>
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className={styles.button}>
        <Button type="primary">Add</Button>
        <Button type="back" onClick={(e)=>{
            e.preventDefault();
            navigate(-1);}}>&larr; Back</Button>
      </div>
    </form>
  );
}