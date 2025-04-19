import React from 'react'
// import styles from "./City.module.css";
import { useParams, useSearchParams } from "react-router-dom";

export default function City() {
    const { cityId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
  return (<>
    <div>City {cityId}</div>
    <p>Position:{lat},{lng}</p>
  </>
  )
}
