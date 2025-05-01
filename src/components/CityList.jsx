import React from 'react';
import Spineer from './Spinner';
import Styles from "./CityList.module.css";
import CityItem from './CityItem';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

export default function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading)return <Spineer />;
  if(!cities.length) return <Message message="Add your first cities clickng on a ity on the map" />;

  return (
    <ul className={Styles.cityList}>
      {cities.map(city => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
