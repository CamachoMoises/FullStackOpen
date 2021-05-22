import axios from "axios";
import React, { useEffect, useState } from "react";
import Weather from "./weather";

const List = ({ countries, setFilterCountries }) => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    if (countries.length === 1) {
      const [country] = countries;
      const api_key = process.env.REACT_APP_API_KEY;
      axios({
        //due to a poorly implemented loop with setCountry it consumed the 250 requests of the free access, I use this other api instead
        method: "GET",
        url: `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country.capital}`,
      }).then((response) => {
        setWeather(response.data);
      });
    }
  }, [countries]);

  if (countries.length === 0 || countries.length > 10) {
    return <div> Too many matches, specify another filter {} </div>;
  }
  if (countries.length === 1) {
    const [country] = countries;
    return (
      <div key={country.alpha3Code}>
        <h1> {country.name} </h1>
        <div>capital {country.capital} </div>
        <div>population {country.population}</div>
        <h2> language </h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.iso639_2}> {language.name} </li>
          ))}
        </ul>
        <img src={country.flag} height="130px" width="180px" alt="flag" />
        <h2> Weather {country.capital} </h2>
        <Weather weather={weather} />
      </div>
    );
  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          {country.name} <button onClick={() => setFilterCountries(country.name)}>show</button>
        </div>
      ))}
    </div>
  );
};
export default List;
