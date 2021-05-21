import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/filter";
import List from "./components/list";

function App() {
  const [filterCountries, setFilterCountries] = useState("");
  const [countries, setCountires] = useState([]);
  const countriesToShow = filterCountries === "" ? [] : countries.filter((country) => country.name.toLowerCase().includes(filterCountries.toLowerCase()));
  const handleFilterChange = (event) => {
    setFilterCountries(event.target.value);
  };
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountires(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Filter filterCountries={filterCountries} handleFilterChange={handleFilterChange} />
      <List countries={countriesToShow} setFilterCountries={setFilterCountries} />
    </div>
  );
}

export default App;
