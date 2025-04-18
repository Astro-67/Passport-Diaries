import React from "react";
import Spineer from "./Spineer";
import Styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spineer />;
  
  if (!cities.length)
    return (
      <Message message="Add your first cities clicking on a city on the map" />
    );
    console.log(cities);
  //Get unique countries from cities
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  
  console.log(countries);
  return (
    <ul className={Styles.contryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}
