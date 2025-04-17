import React from 'react';
import Spineer from './Spineer';
import Styles from "./CityList.module.css";
import CityItem from './CityItem';

export default function CityList({ cities, isLoading }) {
  if (isLoading){
    console.log("Loading cities...");
    return <Spineer />;}

  return (
    <ul className={Styles.cityList}>
      {cities.map(city => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
