import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import "./index.css";
import Login from "./pages/Login";
import CityList from "./components/CityList";

const BASE_URL = "http://localhost:8000";
export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/cities`); 
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There is error when loarding data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}></Route>
          <Route path="countries" element={<p>List of country</p>}></Route>
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
